import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Card,
  Grid,
  IconButton,
  CardMedia,
  Stack,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../context/cartContext';
import { Authenticator } from '@aws-amplify/ui-react';

function Cart() {
  const { cartItems, total, increaseAmount, decreaseAmount, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <Box my={5}>
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
            Your Shopping Cart
          </Typography>
          {cartItems.length === 0 ? (
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Typography variant="h6" align="center">Whoa there, Morty! Looks like your shopping cart is about as empty as a void in another dimension! Looks like we gotta hunt down some intergalactic goodies to fill that bad boy up! Get schwifty and start adding stuff to your cart, buddy! Wubba lubba dub dub! 🛒🌌🛸</Typography>
              <Button variant="contained" color="primary" href="/purchase">Start shopping</Button>
            </Stack>
          ) : (
            <>
              {cartItems.map((item) => (
                <Card key={item.id} sx={{ display: 'flex', mb: 2 }}>
                  <CardMedia
                    component="img"
                    image={item.image || '/other-images/placeholder-image.png'}
                    alt={item.title}
                    sx={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                  <Grid container>
                    <Grid item xs>
                      <Box sx={{ padding: 2 }}>
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography variant="body1">Price: ${item.price}</Typography>
                        <Typography variant="body1">Amount: {item.amount}</Typography>
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '100%' }}>
                        <Button onClick={() => increaseAmount(item.id)}>+</Button>
                        <Button onClick={() => decreaseAmount(item.id, item.amount)}>-</Button>
                        <IconButton onClick={() => decreaseAmount(item.id, 1)}>
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </Grid>
                  </Grid>
                </Card>
              ))}
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h5">Total: ${total}</Typography>
                <Box>
                  <Button
                    variant="contained"
                    sx={{ mt: 2 }}
                    onClick={() => navigate('/purchase/payment', { state: { order: cartItems } })}>
                    Proceed to Payment
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    sx={{ ml: 2, mt: 2 }}
                    onClick={clearCart}>
                    Clear Cart
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </Box>
      )}
    </Authenticator>
  );
}

export default Cart;
