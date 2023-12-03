import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  Stack,
  Box,
  Typography,
} from '@mui/material';


function Payment() {
  const navigate = useNavigate();
  const location = useLocation();

  const { shipping: shippingData } = location.state || {};

  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expirationDate: '',
    cvvCode: '',
    cardHolderName: '',
  });

  const handleUpdatePayment = (field) => (e) => {
    setPaymentData({
      ...paymentData,
      [field]: e.target.value,
    });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSubmit = () => {
    navigate('/purchase/summary', {
      state: { payment: paymentData, shipping: shippingData },
    })
  };

  return (
    <Box>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: (theme) => theme.palette.primary.main }}>
        Payment Info
      </Typography>
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={2}
        direction="row">
        <Box flex={1} p={2} border="1px solid gray" borderRadius={2}>
          <Typography variant='subtitle1'>Pay with credit or debit card</Typography>
          <Stack spacing={2}>
            <FormControl required>
              <InputLabel>Card Number</InputLabel>
              <Input
                value={paymentData.cardNumber}
                onChange={handleUpdatePayment('cardNumber')}
              />
            </FormControl>
            <FormControl required>
              <InputLabel>Expiration Date</InputLabel>
              <Input
                value={paymentData.expirationDate}
                onChange={handleUpdatePayment('expirationDate')}
              />
            </FormControl>
            <FormControl required>
              <InputLabel>CVV Code</InputLabel>
              <Input
                value={paymentData.cvvCode}
                onChange={handleUpdatePayment('cvvCode')}
              />
            </FormControl>
            <FormControl required>
              <InputLabel>Card Holder Name</InputLabel>
              <Input
                value={paymentData.cardHolderName}
                onChange={handleUpdatePayment('cardHolderName')}
              />
            </FormControl>
          </Stack>
          <Stack direction="row" justifyContent="space-between" mt={2}>
            <Button variant="outlined" onClick={handleGoBack}>
              Go Back
            </Button>
            <Button variant="contained" onClick={handleSubmit}>
              Confirm
            </Button>
          </Stack>
        </Box>
        <Typography variant='h6' width={"50%"}>
          Alright, Morty, it's time to make the ultimate choice!
          Get those credit cards ready because paying for stuff in different dimensions isn’t as easy as jumping through portals.
          Secure your order quicker than Rick escaping an alien federation.
          Let's handle the payment like pros so you can get your hands on those cool goodies from across the cosmos!
          It's payment time, Morty! 💳💸🌌
        </Typography>
      </Stack>
    </Box>
  );
}

export default Payment;
