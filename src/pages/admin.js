import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { API, graphqlOperation, Storage } from "aws-amplify";
import { Authenticator, Button as AmplifyButton } from '@aws-amplify/ui-react';
import { createProduct } from '../api/mutations';
import config from '../aws-exports';
import '@aws-amplify/ui-react/styles.css'; // default styles
import {
    Button,
    TextField,
    TextareaAutosize,
    FormControlLabel,
    Checkbox,
    Paper,
    Container,
    Typography,
    Grid,
    Box,
    List,
    ListItem,
    ListItemText,
    IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { ProductContext } from '../context/productContext';

const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config;

const Admin = () => {
    const [imagePreview, setImagePreview] = useState(null); // For the image preview
    const [imageFile, setImageFile] = useState(null);
    const [itemDetails, setItemDetails] = useState({ title: "", description: "", image: "", price: "", onSale: false });
    const { products, deleteSelectedProduct } = useContext(ProductContext);
    const handleDelete = async (productId) => {
        await deleteSelectedProduct(productId);
        console.log('deleted successfully');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Check if all the required fields are filled
        if (!itemDetails.title || !itemDetails.price || !imageFile) {
            console.log('Please fill in all fields and upload an image.');
            return;
        }
    
        // Extract the file extension and name from the uploaded file
        const extension = imageFile.name.split(".")[1];
        const name = imageFile.name.split(".")[0];
        const key = `images/${uuidv4()}${name}.${extension}`;
        const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
    
        try {
            // Upload the image to S3
            await Storage.put(key, imageFile, {
                level: 'public',
                contentType: imageFile.type
            });
    
            // Add the image URL to the product details and create the product
            const productDetails = { ...itemDetails, image: url };
            await API.graphql(graphqlOperation(createProduct, { input: productDetails, authMode: "AMAZON_COGNITO_USER_POOLS" }));
    
            // Reset the form state
            setItemDetails({ title: "", description: "", image: "", price: "", onSale: false });
            setImageFile(null);
            setImagePreview(null);
            console.log('Product created successfully.');
        } catch (err) {
            console.log('Error submitting product:', err);
        }
    }    

    // Handle image upload for immediate display
    const handleImageUpload = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setImagePreview(previewUrl); // Set the preview URL
            setImageFile(file); // Store the image file for later submission
        }
    }
    

    return (
        <Authenticator>
            {({ signOut, user }) => (
                <Container component="main" maxWidth="md">
                    <Paper style={{ padding: '20px', marginTop: '20px' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Box display="flex" justifyContent="space-between" alignItems="center">
                                    <Typography variant="h5" component="h1">
                                        Add New Product
                                    </Typography>
                                    <AmplifyButton
                                        onClick={signOut}
                                        style={{
                                            backgroundColor: '#f50057', // Example color, change as needed
                                            color: 'white',
                                            padding: '6px 16px',
                                            textTransform: 'none',
                                            borderRadius: '4px',
                                            fontSize: '0.875rem'
                                        }}
                                    >
                                        Sign Out
                                    </AmplifyButton>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <form onSubmit={handleSubmit} noValidate>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <Box display="flex" flexDirection="column" alignItems="center">
                                            {imagePreview ? (
                                                <img src={imagePreview} alt="Preview" style={{ width: '100%', height: 'auto' }} />
                                            ) : (
                                                <Button variant="contained" component="label">
                                                    Upload Image
                                                    <input
                                                        type="file"
                                                        hidden
                                                        accept="image/*"
                                                        onChange={handleImageUpload}
                                                    />
                                                </Button>
                                            )}
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                label="Title"
                                                name="title"
                                                value={itemDetails.title}
                                                onChange={(e) => setItemDetails({ ...itemDetails, title: e.target.value })}
                                            />
                                            <TextareaAutosize
                                                minRows={5}
                                                style={{ width: '100%', marginTop: '10px' }}
                                                placeholder="Type the description"
                                                name="description"
                                                value={itemDetails.description}
                                                onChange={(e) => setItemDetails({ ...itemDetails, description: e.target.value })}
                                            />
                                            <TextField
                                                required
                                                fullWidth
                                                name="price"
                                                value={itemDetails.price}
                                                label="Price ($)"
                                                type="number"
                                                style={{ marginTop: '10px' }}
                                                onChange={(e) => setItemDetails({ ...itemDetails, price: e.target.value })}
                                            />
                                            <FormControlLabel
                                                control={<Checkbox checked={itemDetails.onSale} onChange={() => setItemDetails({ ...itemDetails, onSale: !itemDetails.onSale })} />}
                                                label="On Sale"
                                                style={{ marginTop: '10px' }}
                                            />
                                            <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '20px' }}>
                                                Submit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                        {/* Section to list and delete products */}
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom>
                            Manage Products
                            </Typography>
                            <List>
                            {products.map((product) => (
                                <ListItem key={product.id} divider>
                                <ListItemText primary={product.title} secondary={`Price: $${product.price}`} />
                                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(product.id)}>
                                    <DeleteIcon />
                                </IconButton>
                                </ListItem>
                            ))}
                            </List>
                        </Grid>
                    </Paper>
                </Container>
                
            )}
        </Authenticator>
    );
};



export default Admin;
