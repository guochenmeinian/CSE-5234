import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Button,
  Stack,
  Box,
  Typography,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import CartSummaryPanel from '../components/CartSummaryPanel';


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
  const [errorObj, setErrorObj] = useState({
    cardNumber: false,
    expirationDate: false,
    cvvCode: false,
    cardHolderName: false,
  })

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
    const currentError = {
      cardNumber: !paymentData.cardNumber,
      expirationDate: !paymentData.expirationDate,
      cvvCode: !paymentData.cvvCode,
      cardHolderName: !paymentData.cardHolderName,
    };
    setErrorObj(currentError);
    if (!currentError.cardNumber && !currentError.expirationDate && !currentError.cvvCode
      && !currentError.cardHolderName) {
      navigate('/purchase/summary', {
        state: { payment: paymentData, shipping: shippingData },
      })
    }
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
      <Typography
        variant="h4"
        align="center"
        gutterBottom>
        Alright, Morty, it's time to make the ultimate choice!
        Get those credit cards ready because paying for stuff in different dimensions isn’t as easy as jumping through portals.
        Secure your order quicker than Rick escaping an alien federation.
        Let's handle the payment like pros so you can get your hands on those cool goodies from across the cosmos!
        It's payment time, Morty! 💳💸🌌
      </Typography>
      <Box py={5}><Divider orientation="horizontal" /></Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box flex={1} p={2} border="1px solid gray" borderRadius={2}>
            <Typography variant='subtitle1'>Pay with credit or debit card</Typography>
            <Stack spacing={2}>
              <TextField
                required
                label="Card Number"
                variant='standard'
                value={paymentData.cardNumber}
                onChange={handleUpdatePayment('cardNumber')}
                error={errorObj.cardNumber}
                helperText={errorObj.cardNumber ? "Please fill in this field." : null}
              />
              <TextField
                required
                label="Expiration Date"
                variant='standard'
                value={paymentData.expirationDate}
                onChange={handleUpdatePayment('expirationDate')}
                error={errorObj.expirationDate}
                helperText={errorObj.expirationDate ? "Please fill in this field." : null}
              />
              <TextField
                required
                label="CVV Code"
                variant='standard'
                value={paymentData.cvvCode}
                onChange={handleUpdatePayment('cvvCode')}
                error={errorObj.cvvCode}
                helperText={errorObj.cvvCode ? "Please fill in this field." : null}
              />
              <TextField
                required
                label="Card Holder Name"
                variant='standard'
                value={paymentData.cardHolderName}
                onChange={handleUpdatePayment('cardHolderName')}
                error={errorObj.cardHolderName}
                helperText={errorObj.cardHolderName ? "Please fill in this field." : null}
              />
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
        </Grid>
        <Grid item xs={4}>
          <CartSummaryPanel />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Payment;
