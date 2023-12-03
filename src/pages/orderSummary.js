import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
  Divider
} from '@mui/material';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import InternalServerErrorPage from '../components/InternalServerErrorPage';


function OrderSummary() {
  const navigate = useNavigate();
  const location = useLocation();

  const { cartItems, total } = useContext(CartContext);

  const { payment: paymentData, shipping: shippingData } = location.state || {};

  const handleConfirmOrder = () => {
    navigate('/purchase/confirmation', {
      state: {
        order: cartItems,
        total: total,
        shipping: shippingData
      },
    });
  };

  if (!paymentData || !shippingData) {
    return <InternalServerErrorPage />
  }

  return (
    <Box>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: (theme) => theme.palette.primary.main }}>
        Review Your Order
      </Typography>
      <Typography
        variant="h4"
        align="center"
        gutterBottom>
        Hey there, dimension-hopper!
        Before you blast off with your order, take a moment to check out your loot!
        It's time to review your interstellar haul before we send it zooming through the cosmic pathways.
        Make sure everything's as epic as a Rick invention before you hit that 'Place Order' button.
        Let's make sure it's all perfectly aligned across dimensions!
        Thanks for double-checking! 🚀🔍🌌
      </Typography>
      <Box py={4}><Divider orientation="horizontal" /></Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Stack direction="column" divider={<Divider orientation="horizontal" flexItem />} spacing={2}>
            <Box >
              <Typography
                variant="h4"
                align="start"
                gutterBottom
                sx={{ fontWeight: 'bold', color: (theme) => theme.palette.primary.main }}>
                Shipping
              </Typography>
              <Typography variant="h4" align="start" gutterBottom>Name: {shippingData.name}</Typography>
              <Typography variant="h4" align="start" gutterBottom>Address: {shippingData.addressLine1} {shippingData.addressLine2}</Typography>
              <Typography variant="h4" align="start" gutterBottom>City: {shippingData.city}</Typography>
              <Typography variant="h4" align="start" gutterBottom>State: {shippingData.state}</Typography>
              <Typography variant="h4" align="start" gutterBottom>Postal Code: {shippingData.postalCode}</Typography>
              <Typography variant="h4" align="start" gutterBottom>Country: {shippingData.country}</Typography>
              <Typography variant="h4" align="start" gutterBottom>Email: {shippingData.email}</Typography>
              <Typography variant="h4" align="start" gutterBottom>Phone Number: {shippingData.phoneNumber}</Typography>
            </Box>
            <Box >
              <Typography
                variant="h4"
                align="start"
                gutterBottom
                sx={{ fontWeight: 'bold', color: (theme) => theme.palette.primary.main }}>
                Payment
              </Typography>
              <Typography variant="h4" align="start" gutterBottom>Card Holder Name: {paymentData.cardHolderName}</Typography>
              <Typography variant="h4" align="start" gutterBottom>
                Credit Card: **** **** **** {paymentData.cardNumber.slice(-4)}
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Box flex={1} p={4} sx={{ backgroundColor: (theme) => theme.palette.grey["100"] }} borderRadius={1}>
            <Stack direction="column" divider={<Divider orientation="horizontal" flexItem />} spacing={2}>
              <Typography variant="h4" align="start" gutterBottom >
                Products ({cartItems.length > 1 ? `${cartItems.length} items` : `${cartItems.length} item`})
              </Typography>
              <ImageList cols={5}>
                {cartItems.map((item) => (
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
                ))}
              </ImageList>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h4" component="span">Total</Typography>
                <Typography variant="h4" component="span">${total}</Typography>
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={4} display="flex" flexWrap="wrap" alignContent="flex-end">
          <Button variant="contained" onClick={handleConfirmOrder} fullWidth>
            Place Order
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default OrderSummary;