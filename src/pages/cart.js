import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Icon,
  Typography,
  ButtonGroup,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import getTotalCost from '../hook/getTotalCost';
import { CartContext } from '../context/cartContext';


function Cart() {
  const { cartItems, increaseAmount, decreaseAmount, clearCart } = useContext(CartContext);

  const navigate = useNavigate();

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
            {cartItems.length === 0 ? (
              <Typography variant="body1">Your cart is empty.</Typography>
            ) : (
              <ImageList cols={5}>
                {cartItems.map((item) => (
                  <Box>
                    <Link key={item.id} to={`/products/${item.id}`}
                      style={{
                        textDecoration: 'none',
                        color: 'black',
                        border: "1px solid #f5f5f5",
                        whiteSpace: "normal",
                        overflow: "hidden"
                      }}>
                      <ImageListItem key={item.id}>
                        <img
                          srcSet={`${item.image || '/other-images/placeholder-image.png'}?fit=crop&auto=format&dpr=2 2x`}
                          src={`${item.image || '/other-images/placeholder-image.png'}?fit=crop&auto=format`}
                          alt={item.title}
                          loading="lazy"
                        />
                        <ImageListItemBar
                          title={item.title}
                          subtitle={`$${item.price}`}
                          position="below"
                        />
                      </ImageListItem>
                    </Link>
                    <Box><Typography variant="body1">Amount: {item.amount}</Typography></Box>
                    <Box>
                      <ButtonGroup variant="contained" aria-label="increase and decrease amount button group">
                        <Button onClick={() => {increaseAmount(item.id)}}>+</Button>
                        <Button onClick={() => {decreaseAmount(item.id, item.amount)}}>-</Button>
                      </ButtonGroup>
                    </Box>
                  </Box>
                ))}
              </ImageList>
            )}
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <Typography variant="h5">Total:</Typography>
            <Typography variant="h5">{getTotalCost(cartItems)}</Typography>
            <Button
              variant="contained"
              startIcon={<Icon>shopping_cart</Icon>}
              onClick={() => navigate('/purchase/payment', { state: { order: cartItems } })}>
              Proceed to Payment
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Cart;
