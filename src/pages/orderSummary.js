import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Button,
  Stack,
  Divider
} from '@mui/material';
import { CartContext } from '../context/cartContext';
import InternalServerErrorPage from '../components/InternalServerErrorPage';
import CartSummaryPanel from '../components/CartSummaryPanel';
// todo: remove this in the future
import { v4 as uuidv4 } from 'uuid';


function OrderSummary() {
  const navigate = useNavigate();
  const location = useLocation();

  const { cartItems, total } = useContext(CartContext);

  const { payment: paymentData, shipping: shippingData } = location.state || {};

  const handleConfirmOrder = async () => {
    try {
      const lambdaParams = {
        body: { /* Your payload data */ },
        // Other parameters such as headers, query parameters can be added here
      };

      // todo: add api gateway and get order number
      const orderNumber = uuidv4();

      navigate('/purchase/confirmation', {
        state: {
          order: orderNumber,
          total: total,
          shipping: shippingData
        },
      });
    } catch (error) {
      console.error('Error invoking Lambda function:', error);
    }
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
      <Box py={5}><Divider orientation="horizontal" /></Box>
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
          <CartSummaryPanel />
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