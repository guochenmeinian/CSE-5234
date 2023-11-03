import React from 'react';
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
} from '@mui/material';
import { Link } from 'react-router-dom';


function OrderSummary() {
  const navigate = useNavigate();
  const location = useLocation();

  const { order: orderData, payment: paymentData, shipping: shippingData } = location.state || {};

  const getTotalPrice = () => {
    return orderData.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  const handleConfirmOrder = () => {
    navigate('/purchase/confirmation', {
      state: {
        order: orderData,
        payment: paymentData,
        shipping: shippingData,
      },
    });
  };

  return (
    <Box my={5}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ m: 4 }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: (theme) => theme.palette.primary.main }}>
          Review Your Order
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Box flex={1} p={2} border="1px solid gray" borderRadius={2}>
              <Typography variant="h6">Products:</Typography>
              <ImageList cols={5}>
                {orderData.map((item) => (
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
                    </ImageListItem>
                  </Link>
                ))}
              </ImageList>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box flex={1} p={2} border="1px solid gray" borderRadius={2}>
              <Typography variant="h5">Total:</Typography>
              <Typography variant="h5">{getTotalPrice()}</Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            {paymentData ? (
              <Box flex={1} p={2} border="1px solid gray" borderRadius={2}>
                <Typography variant="h6">Payment Details:</Typography>
                <Typography>
                  Card Holder Name: {paymentData.cardHolderName}
                </Typography>{' '}
                <br />
                <Typography>
                  Credit Card: **** **** ****{' '}
                  {paymentData.creditCardNumber.slice(-4)}
                </Typography>
              </Box>
            ) : (
              <Typography>No payment information provided.</Typography>
            )}
          </Grid>
          <Grid item xs={6}>
            {shippingData ? (
              <Box flex={1} p={2} border="1px solid gray" borderRadius={2}>
                <Typography variant="h6">Shipping Details:</Typography>
                <Typography>Address: {shippingData.address}</Typography>
                <Typography>City: {shippingData.city}</Typography>
                <Typography>Postal Code: {shippingData.postalCode}</Typography>
                <Typography>Country: {shippingData.country}</Typography>
              </Box>
            ) : (
              <Typography>No shipping information provided.</Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleConfirmOrder}>
              Confirm Order
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default OrderSummary;
