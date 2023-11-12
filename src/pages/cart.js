import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import getTotalCost from '../hook/getTotalCost';
import { CartContext } from '../context/cartContext';

function Cart() {
  const { cartItems, increaseAmount, decreaseAmount, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <Box my={5}>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        Your Shopping Cart
      </Typography>
      
      {cartItems.length === 0 ? (
        <Typography variant="h6" align="center">Your cart is empty.</Typography>
      ) : (
        <Box>
          {cartItems.map((item) => (
            <Card key={item.id} sx={{ display: 'flex', mb: 2, alignItems: 'center' }}>
              <img
                src={item.image || '/other-images/placeholder-image.png'}
                alt={item.title}
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body1">Price: ${item.price}</Typography>
                <Typography variant="body1">Amount: {item.amount}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => increaseAmount(item.id)}>+</Button>
                <Button onClick={() => decreaseAmount(item.id, item.amount)}>-</Button>
                <IconButton onClick={() => decreaseAmount(item.id, 1)}>
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}

          <Box sx={{ mt: 2 }}>
            <Typography variant="h5">Total: ${getTotalCost(cartItems)}</Typography>
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
      )}
    </Box>
  );
}

export default Cart;
