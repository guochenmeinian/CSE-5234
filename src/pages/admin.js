import React, { useState } from 'react';
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
    Box
} from '@mui/material';

const {
    aws_user_files_s3_bucket_region: region,
    aws_user_files_s3_bucket: bucket
} = config;

const Admin = () => {
    const [image, setImage] = useState(null);
    const [itemDetails, setItemDetails] = useState({ title: "", description: "", image: "", price: "", onSale: false });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!itemDetails.title || !itemDetails.price) return;
            await API.graphql(graphqlOperation(createProduct, { input: itemDetails, authMode: "AMAZON_COGNITO_USER_POOLS" }));
            setItemDetails({ title: "", description: "", image: "", price: "", onSale: false });
            setImage(null);
            console.log('data uploaded successfully.');
        } catch (err) {
            console.log('error creating in admin page:\n', err);
        }
    }

    const handleImageUpload = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const extension = file.name.split(".")[1];
        const name = file.name.split(".")[0];
        const key = `images/${uuidv4()}${name}.${extension}`;
        const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`
        try {
            // Upload the file to s3 with public access level. 
            await Storage.put(key, file, {
                level: 'public',
                contentType: file.type
            });
            // Retrieve the uploaded file to display
            const image = await Storage.get(key, { level: 'public' })
            setImage(image);
            setItemDetails({ ...itemDetails, image: url });
            console.log('image uploaded successfully.')
        } catch (err) {
            console.log('error creating in image upload:\n', err);
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
                                                {image ? (
                                                    <img src={image} alt="" style={{ width: '100%', height: 'auto' }} />
                                                ) : (
                                                    <Button
                                                        variant="contained"
                                                        component="label"
                                                    >
                                                        Upload Image
                                                        <input
                                                            type="file"
                                                            hidden
                                                            accept="image/*"
                                                            onChange={(e) => handleImageUpload(e)}
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
                    </Paper>
                </Container>
            )}
        </Authenticator>
    );
};



export default Admin;
