import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Button,
  Typography,
  Stack,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import axios from 'axios';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f5b921',
      contrastText: '#fff',
    },
  },
});

function ViewOrderPanel() {
  const navigate = useNavigate();
  const location = useLocation();
  const [items, setItems] = useState([]);
  const { orderData, paymentData, shippingData } = location.state || {};

  const calculateTotalPrice = () => {
    let total = 0;
    if (orderData && orderData.buyQuantity) {
      for (let i = 0; i < orderData.buyQuantity.length; i++) {
        total += orderData.buyQuantity[i] * (items[i]?.price || 0);
      }
    }
    return total;
  };

  const handleConfirmOrder = () => {
    navigate('/items/viewConfirmation', {
      state: { orderData, paymentData, shippingData },
    });
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/inventory/items')
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ m: 4 }}
      >
        <Typography variant="h5">Review Your Order</Typography>

        <Typography variant="h6">Products:</Typography>
        {orderData?.buyQuantity.map((quantity, index) => (
          <Typography key={index}>
            {items[index]?.name} - ${items[index]?.price} x {quantity} = $
            {items[index]?.price * quantity}
          </Typography>
        ))}

        <Typography variant="h6">Total: ${calculateTotalPrice()}</Typography>

        <Typography variant="h6">Payment Details:</Typography>
        {paymentData.creditCardNumber ? (
          <div>
            <Typography>
              Card Holder Name: {paymentData.cardHolderName}
            </Typography>{' '}
            <br />
            <Typography>
              Credit Card: **** **** ****{' '}
              {paymentData.creditCardNumber.slice(-4)}
            </Typography>
          </div>
        ) : (
          <Typography>No payment information provided.</Typography>
        )}

        <Typography variant="h6">Shipping Details:</Typography>
        <Typography>Address: {shippingData?.address}</Typography>
        <Typography>City: {shippingData?.city}</Typography>
        <Typography>Postal Code: {shippingData?.postalCode}</Typography>
        <Typography>Country: {shippingData?.country}</Typography>

        <Button variant="contained" onClick={handleConfirmOrder}>
          Confirm Order
        </Button>
      </Stack>
    </ThemeProvider>
  );
}

export default ViewOrderPanel;
