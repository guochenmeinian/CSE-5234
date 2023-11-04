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
  const location = useLocation();
  const navigate = useNavigate();

  const orderData = location.state?.order || {};

  const [paymentData, setPaymentData] = useState({
    creditCardNumber: '',
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
    navigate('/purchase/shipping', {
      state: { order: orderData, payment: paymentData },
    });
  };

  return (
    <Box my={5}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: (theme) => theme.palette.primary.main }}>
        Payment Info
      </Typography>
      <Box flex={1} p={2} border="1px solid gray" borderRadius={2}>
        <Stack spacing={2} mt={2}>
          <FormControl>
            <InputLabel>Credit Card Number</InputLabel>
            <Input
              value={paymentData.creditCardNumber}
              onChange={handleUpdatePayment('creditCardNumber')}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Expiration Date</InputLabel>
            <Input
              value={paymentData.expirationDate}
              onChange={handleUpdatePayment('expirationDate')}
            />
          </FormControl>
          <FormControl>
            <InputLabel>CVV Code</InputLabel>
            <Input
              value={paymentData.cvvCode}
              onChange={handleUpdatePayment('cvvCode')}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Card Holder Name</InputLabel>
            <Input
              value={paymentData.cardHolderName}
              onChange={handleUpdatePayment('cardHolderName')}
            />
          </FormControl>
          <Stack direction="row" justifyContent="space-between" mt={2}>
            <Button variant="outlined" onClick={handleGoBack}>
              Go Back
            </Button>
            <Button variant="contained" onClick={handleSubmit}>
              Confirm
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default Payment;
