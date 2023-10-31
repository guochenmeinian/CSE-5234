import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  Stack,
  Box,
  Typography,
  Divider,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f5b921',
      contrastText: '#fff', // text color for buttons, you can adjust as needed
    },
  },
});

const productPrices = [100, 40, 20];

function PaymentEntryPanel() {
  const location = useLocation();
  const navigate = useNavigate();

  const productNames = ['Monitor', 'Keyboard', 'Mouse'];

  const orderData = location.state?.order || {};

  const [paymentData, setPaymentData] = useState({
    creditCardNumber: '',
    expirationDate: '',
    cvvCode: '',
    cardHolderName: '',
  });

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < orderData.buyQuantity.length; i++) {
      total += orderData.buyQuantity[i] * productPrices[i];
    }
    setTotalPrice(total);
  }, [orderData.buyQuantity]);

  const handleUpdatePayment = (field) => (e) => {
    setPaymentData({
      ...paymentData,
      [field]: e.target.value,
    });
  };

  const handleGoBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  const handleSubmit = () => {
    navigate('/purchase/shippingEntry', {
      state: { orderData: orderData, paymentData: paymentData },
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ m: 4 }}
      >
        {/* Orders section */}
        <Box flex={1} p={2} border="1px solid gray" borderRadius={2}>
          <Typography variant="h6" gutterBottom>
            Your Orders:
          </Typography>
          <Divider />
          {orderData &&
            orderData.buyQuantity.map((quantity, index) => (
              <Box key={index} mt={2}>
                <Typography>
                  {productNames[index]}: {quantity} x ${productPrices[index]} =
                  ${quantity * productPrices[index]}
                </Typography>
              </Box>
            ))}
          <Divider sx={{ mt: 2 }} />
          <Box mt={2}>
            <Typography variant="h6">Total Price: ${totalPrice}</Typography>
          </Box>
        </Box>

        {/* Payment Info section */}
        <Box flex={1} p={2} border="1px solid gray" borderRadius={2}>
          <Typography variant="h6" gutterBottom>
            Payment Info:
          </Typography>
          <Divider />
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
      </Stack>
    </ThemeProvider>
  );
}

export default PaymentEntryPanel;
