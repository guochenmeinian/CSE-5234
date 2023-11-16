import React, { useState, useEffect, useContext } from 'react';
import { API, graphqlOperation } from "aws-amplify";
import { Box, Typography, Button, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getProduct } from "../api/queries";
import { CartContext } from '../context/cartContext';
import { Authenticator, Button as AmplifyButton } from '@aws-amplify/ui-react';

function Product() {
  const { addToCart } = useContext(CartContext);
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchedProduct() {
      try {
        const response = await API.graphql(graphqlOperation(getProduct, { id }));
        setItem(response?.data?.getProduct || {});
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    }
    fetchedProduct();
  }, [id]);

  function handleAddClick() {
    addToCart(item);
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <Paper elevation={3} sx={{ p: 2, display: 'flex', margin: 'auto', maxWidth: 900 }}>
          <Box sx={{ flex: 1 }}>
            <img
              src={item.image || '/other-images/placeholder-image.png'}
              alt={item.title}
              style={{ width: '100%', height: 'auto', maxHeight: '500px' }}
              loading="lazy"
            />
          </Box>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', ml: 2 }}>
            <Typography gutterBottom variant="h4" component="div">
              {item.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              {item.description}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {`$${item.price}`}
            </Typography>
            <Box>
              <Button variant="contained" color="primary" onClick={handleAddClick} sx={{ mr: 1 }}>
                Add to Cart
              </Button>
              <Button variant="outlined" color="secondary">
                Remove
              </Button>
            </Box>
          </Box>
        </Paper>
      )}
    </Authenticator>
  );
}

export default Product;
