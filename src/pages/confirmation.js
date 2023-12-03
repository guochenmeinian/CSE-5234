import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Typography,
  Box,
  Paper,
  Divider
} from '@mui/material';
import { CartContext } from '../context/cartContext';
import InternalServerErrorPage from '../components/InternalServerErrorPage';


function Confirmation() {
  const location = useLocation();

  const { clearCart } = useContext(CartContext);

  const { order: order, total: total, shipping: shippingData } = location.state || {};

  useEffect(() => {
    clearCart();
  }, []);

  function renderOrderSummary() {
    return (
      <Paper elevation={3} sx={{ p: 2, display: 'flex', margin: 'auto', maxWidth: 900 }}>
        <Box>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontWeight: 'bold', color: (theme) => theme.palette.primary.main }}>
            Whoa, thanks a bunch, Morty!
          </Typography>
          <Typography
            variant="h6"
            gutterBottom>
            Hey there, intrepid shopper!
            Thanks a bunch for diving into our multiverse of goods!
            Your order's as locked in as Rick's secret lab.
            We're working faster than you can say 'Get Schwifty' to make sure your intergalactic treasures are ready to teleport to your dimension.
            Keep your portals open for updates, and remember, you're as awesome as a fully-charged portal gun!
            Thanks again! 🚀🛍️🌌
          </Typography>
          <img
            srcSet="/other-images/confirmation-image.png?fit=crop&auto=format&dpr=2 4x"
            src="/other-images/confirmation-image.png?fit=crop&auto=format"
            alt=""
            loading="lazy"
          />
          <Box py={5}><Divider orientation="horizontal" /></Box>
          <Box flex={1} p={4} sx={{ backgroundColor: (theme) => theme.palette.grey["100"] }} borderRadius={1}>
            <Box mb={3}>
              <Typography
                variant="h4"
                align="start"
                gutterBottom
                sx={{ fontWeight: 'bold' }}>
                Customer
              </Typography>
              <Typography variant="h4" align="start" gutterBottom>Name: {shippingData.name}</Typography>
              <Typography variant="h4" align="start" gutterBottom>Email: {shippingData.email}</Typography>
              <Typography variant="h4" align="start" gutterBottom>Phone Number: {shippingData.phoneNumber}</Typography>
            </Box>
            <Box mb={3}>
              <Typography
                variant="h4"
                align="start"
                gutterBottom
                sx={{ fontWeight: 'bold' }}>
                Shipping
              </Typography>
              <Typography variant="h4" align="start" gutterBottom>Name: {shippingData.name}</Typography>
              <Typography variant="h4" align="start" gutterBottom>
                Address: {shippingData.addressLine1} {shippingData.addressLine2} {shippingData.city} {shippingData.state} {shippingData.postalCode} {shippingData.country}
              </Typography>
            </Box>
            <Box mb={3}>
              <Typography
                variant="h4"
                align="start"
                gutterBottom
                sx={{ fontWeight: 'bold' }}>
                Order Summary
              </Typography>
              <Typography variant="h5" align="start" gutterBottom>Order Number: {order}</Typography>
              <Typography variant="h5" align="start" gutterBottom>Order Total: ${total}</Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    )
  }

  return (order ? renderOrderSummary() : <InternalServerErrorPage />);
}

export default Confirmation;