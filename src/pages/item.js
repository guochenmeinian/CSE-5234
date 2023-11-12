import React, { useState, useEffect, useContext } from 'react';
import { API, graphqlOperation } from "aws-amplify";
import { Stack, Typography, Box, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getProduct } from "../api/queries";
import { CartContext } from '../context/cartContext';

function Item() {
  const { addToCart } = useContext(CartContext);

  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchedProduct() {
      try {
        const response = await API.graphql(graphqlOperation(getProduct, { id: `${id}`, authMode: "AMAZON_COGNITO_USER_POOLS" }));
        const fetchedProduct = response?.data?.getProduct || [];
        setItem(fetchedProduct);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    }

    fetchedProduct();
  }, []);

  function handleAddClick() {
    addToCart(item);
  }

  return (
    <Stack
      spacing={{ xs: 1, sm: 2, md: 4 }}
      sx={{ p: 2 }}
      my={5}
      direction="row"
      useFlexGap
      flexWrap="wrap"
    >
      <img
        srcSet={item.image || '/other-images/placeholder-image.png'}
        src={item.image || '/other-images/placeholder-image.png'}
        alt={item.title}
        loading="lazy"
      />
      <Box>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2" color="text.secondary">
          {`$${item.price}`}
        </Typography>
      </Box>
      <Box>
        <Button variant="contained" onClick={handleAddClick}>
          Add to Shopping Cart
        </Button>
      </Box>
    </Stack>
  );
}

export default Item;
