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
  Divider
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../context/cartContext';
import { Authenticator } from '@aws-amplify/ui-react';

function Cart() {
  const { cartItems, total, increaseAmount, decreaseAmount, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  function renderEmptyCartPage() {
    return (
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Typography variant="h6" align="center">Whoa there, Morty! Looks like your shopping cart is about as empty as a void in another dimension! Looks like we gotta hunt down some intergalactic goodies to fill that bad boy up! Get schwifty and start adding stuff to your cart, buddy! Wubba lubba dub dub! 🛒🌌🛸</Typography>
        <Button variant="contained" color="primary" href="/purchase">Start shopping</Button>
        <img
          srcSet="/other-images/shopping-image.png?fit=crop&auto=format&dpr=2 2x"
          src="/other-images/shopping-image.png?fit=crop&auto=format"
          alt=""
          loading="lazy"
        />
      </Stack>
    )
  }

  function renderCartItems() {
    return (
      <Box minHeight="500px">
        <Typography
          variant="h4"
          align="center"
          gutterBottom>
          Hey there, interdimensional shopper!
          Your shopping cart is a bit like Rick's garage – filled with incredible gadgets and oddities from across the multiverse!
          But hey, don't forget to double-check your cart before blasting off!
          Make sure your loot's as awesome as a portal gun before you embark on this cosmic adventure of checkout!
          Wubba lubba dub dub, and happy shopping across dimensions! 🛒🌌🚀
        </Typography>
        <Box py={5}><Divider orientation="horizontal" /></Box>
        <Grid container spacing={2}>
          <Grid item xs={8}>
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
          </Grid>
          <Grid item xs={4}>
            <Stack direction="column" divider={<Divider orientation="horizontal" flexItem />} spacing={2}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h4" component="span">Total</Typography>
                <Typography variant="h4" component="span">${total}</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Button
                  variant="contained"
                  sx={{ mt: 2 }}
                  onClick={() => navigate('/purchase/shipping')}>
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
            </Stack>
          </Grid>
        </Grid>
      </Box>
    )
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <Box>
          <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
            Your Shopping Cart
          </Typography>
          {cartItems.length ? renderCartItems() : renderEmptyCartPage()}
        </Box>
      )}
    </Authenticator>
  );
}

export default Cart;