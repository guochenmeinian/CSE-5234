import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Icon,
  Typography,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';



function Cart({ cart, onRemoveFromCart }) {
  // todo:
  cart = [
    {
      "id": 20,
      "name": "Toxic Flask",
      "description": "A flask inspired by the 'Toxic Rick and Morty' episode.",
      "price": "13.99"
    },
    {
      "id": 78,
      "name": "Rick and Morty Wall Clock",
      "description": "A wall clock featuring the show's iconic portal design, adding a unique touch to your home decor.",
      "price": "34.99"
    },
    {
      "id": 82,
      "name": "Portal Gun Prop Replica",
      "description": "A high-quality prop replica of Rick's portal gun for cosplayers and collectors.",
      "price": "59.99",
      "thumbnailImage": "/items-icons/thumbnail-portal-gun-prop-replica.png",
      "actualImage": "/items-icons/portal-gun-prop-replica.png"
    },
  ];

  const navigate = useNavigate();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  return (
    <Box my={5}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: (theme) => theme.palette.primary.main }}>
        Your Shopping Cart
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box>
            {cart.length === 0 ? (
              <Typography variant="body1">Your cart is empty.</Typography>
            ) : (
              <ImageList cols={5}>
                {cart.map((item) => (
                  <Link key={item.id} to={`/items/${item.id}`}
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      border: "1px solid #f5f5f5",
                      whiteSpace: "normal",
                      overflow: "hidden"
                    }}>
                    <ImageListItem key={item.thumbnailImage}>
                      <img
                        srcSet={`${item.thumbnailImage}?fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.thumbnailImage}?fit=crop&auto=format`}
                        alt={item.name}
                        loading="lazy"
                      />
                      <ImageListItemBar
                        title={item.name}
                        subtitle={`$${item.price}`}
                        position="below"
                      />
                      <Button
                        variant="contained"
                        startIcon={<DeleteIcon />}
                        onClick={() => onRemoveFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </ImageListItem>
                  </Link>
                ))}
              </ImageList>
            )}
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <Typography variant="h5">Total:</Typography>
            <Typography variant="h5">{getTotalPrice()}</Typography>
            <Button
              variant="contained"
              startIcon={<Icon>shopping_cart</Icon>}
              onClick={() => navigate('/purchase/payment', { state: { order: cart } })}>
              Proceed to Payment
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Cart;
