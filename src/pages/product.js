import React, { useState, useEffect, useContext } from 'react';
import { API, graphqlOperation } from "aws-amplify";
import { Box, Typography, Button, Divider, Grid, Snackbar, Alert } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getProduct } from "../api/queries";
import { CartContext } from '../context/cartContext';
import { Authenticator } from '@aws-amplify/ui-react';
import InternalServerErrorPage from '../components/InternalServerErrorPage';


function Product() {
  const { addToCart } = useContext(CartContext);

  const [item, setItem] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    async function fetchedProduct() {
      try {
        const response = await API.graphql(graphqlOperation(getProduct, { id }, { authMode: "AMAZON_COGNITO_USER_POOLS" }));
        setItem(response?.data?.getProduct || {});
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    }
    fetchedProduct();
  }, [id]);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  function handleAddClick() {
    addToCart(item);
    setSnackbarOpen(true);
  }

  function renderProductItem() {
    return (
      <Box>
        <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
          <Alert onClose={handleSnackbarClose} color="primary" sx={{ width: '100%' }}>
            This item just got schwifty and teleported right into your shopping cart successfully! 
          </Alert>
        </Snackbar>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box sx={{ flex: 1 }}>
              <img
                src={item.image || '/other-images/placeholder-image.png'}
                alt={item.title}
                style={{ width: '100%', height: 'auto', maxHeight: '500px' }}
                loading="lazy"
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', ml: 2 }}>
              <Typography
                variant="h4"
                align="start"
                sx={{ fontWeight: 'bold', color: (theme) => theme.palette.primary.main }}
                gutterBottom
              >
                {item.title}
              </Typography>
              <Box py={5}><Divider orientation="horizontal" /></Box>
              <Typography variant="h5" color="text.secondary" align="start" sx={{ mb: 2 }}>
                {item.description}
              </Typography>
              <Box py={5}><Divider orientation="horizontal" /></Box>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h6" color="text.secondary">
                  {`$${item.price}`}
                </Typography>
                <Button variant="contained" color="primary" onClick={handleAddClick} sx={{ mr: 1 }}>
                  Add to Cart
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    )
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        Object.keys(item).length ? renderProductItem() : <InternalServerErrorPage />
      )}
    </Authenticator>
  );
}

export default Product;
