import React, { useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { API, graphqlOperation, Storage } from "aws-amplify";
import { Authenticator, Button as AmplifyButton } from '@aws-amplify/ui-react';
import { processProduct, updateInventory } from '../api/mutations';
import config from '../aws-exports';
import { Auth } from 'aws-amplify';
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
    Dialog, // for modal
    DialogActions,
    DialogContent,
    DialogTitle
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'; // for edit button
import { ProductContext } from '../context/productContext';


const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config;




const Admin = () => {

    // State for creating a new product
    const [isAdmin, setIsAdmin] = useState(false);

    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [itemDetails, setItemDetails] = useState({ title: "", description: "", image: "", price: "", onSale: false, quantity: 0 });

    // State for editing existing product inventory
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [newQuantity, setNewQuantity] = useState(0);

    const { products, fetchProducts, deleteSelectedProduct } = useContext(ProductContext);

    useEffect(() => {
        checkUserGroup();
    }, []);

    const checkUserGroup = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            const groups = user.signInUserSession.accessToken.payload["cognito:groups"];
            if (groups && groups.includes("Admin")) {
                setIsAdmin(true);
            }
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    if (!isAdmin) {
        // Redirect or show an access denied message
        return <div>Access Denied</div>;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Check if all the required fields are filled
        if (!itemDetails.title || !itemDetails.price || !itemDetails.quantity || !imageFile) {
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
            const productDetails = {
                title: itemDetails.title,
                description: itemDetails.description,
                image: url,
                onSale: itemDetails.onSale,
                price: itemDetails.price,
                quantity: itemDetails.quantity
            };
            await API.graphql(graphqlOperation(processProduct, { 
                input: productDetails,
                authMode: "AMAZON_COGNITO_USER_POOLS" 
            }));
                
            // Reset the form state
            setItemDetails({ title: "", description: "", image: "", price: "", onSale: false, quantity: 0 });
            setImageFile(null);
            setImagePreview(null);
            console.log('Product created successfully.');
            fetchProducts(); // Refresh product list
        } catch (err) {
            console.log('Error submitting product:', err);
        }
    }    

    const handleEditInventory = (product) => {
        setSelectedProduct(product);
        setNewQuantity(product.inventory?.quantity || 0); 
        setEditModalOpen(true);
    };
    

    const handleUpdateInventory = async () => {
        if (!selectedProduct || newQuantity < 0) {
            alert("Invalid product or quantity");
            return;
          }

        try {
            // Call the updateProductInventory mutation
            await API.graphql(graphqlOperation(updateInventory, {
                input: { 
                    id: selectedProduct.id, 
                    quantity: newQuantity 
                },
                authMode: "AMAZON_COGNITO_USER_POOLS" 
            }));
    
            // Close the modal
            setEditModalOpen(false);
    
            // Refresh products list
            fetchProducts();
        } catch (error) {
            console.error('Error updating inventory:', error);
        }
    };
    

    const handleDelete = async (productId) => {
        await deleteSelectedProduct(productId);
        console.log('deleted successfully');
    };

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
                                            {/* New TextField for Initial Quantity */}
                                            <TextField
                                                required
                                                fullWidth
                                                label="Initial Quantity"
                                                name="initialQuantity"
                                                type="number"
                                                value={itemDetails.quantity}
                                                onChange={(e) => setItemDetails({ ...itemDetails, quantity: parseInt(e.target.value, 10) })}
                                                style={{ marginTop: '10px' }}
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
                    </Paper>
                    <br />
                    <Paper>
                        {/* New Section for Edit Inventory Modal */}
                        <Dialog open={editModalOpen} onClose={() => setEditModalOpen(false)}>
                            <DialogTitle>Edit Inventory</DialogTitle>
                            <DialogContent>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    label="New Quantity"
                                    type="number"
                                    fullWidth
                                    value={newQuantity}
                                    onChange={(e) => setNewQuantity(parseInt(e.target.value, 10))}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => setEditModalOpen(false)} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={handleUpdateInventory} color="primary">
                                    Update
                                </Button>
                            </DialogActions>
                        </Dialog>

                        {/* Section to list and provide options to delete or edit product inventory */}
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom>Manage Products</Typography>
                            <List>
                                {products.map((product) => (
                                    <ListItem key={product.id} divider>
                                        <ListItemText primary={product.title} secondary={`Price: $${product.price}`} />
                                        <IconButton edge="end" aria-label="edit" onClick={() => handleEditInventory(product)}>
                                            <EditIcon />
                                        </IconButton>
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



