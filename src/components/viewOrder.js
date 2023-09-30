import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Typography, Stack, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f5b921",
      contrastText: "#fff",
    },
  },
});

function ViewOrder() {
  const navigate = useNavigate();
  const location = useLocation();
  const { orderData, paymentData, shippingData } = location.state || {};

  // Prices for Products (you can also import this from a constants file if needed)
  const productPrices = [100, 40, 20];

  const calculateTotalPrice = () => {
    let total = 0;
    if (orderData && orderData.buyQuantity) {
      for (let i = 0; i < orderData.buyQuantity.length; i++) {
        total += orderData.buyQuantity[i] * (productPrices[i] || 0);
      }
    }
    return total;
  }

  const handleConfirmOrder = () => {
    navigate('/purchase/viewConfirmation', { state: { orderData, paymentData, shippingData } });
  };

  console.log(paymentData)

  return (
    <ThemeProvider theme={theme}>
      <Stack direction="column" justifyContent="center" alignItems="center" spacing={2} sx={{ m: 4 }}>
        <Typography variant="h5">Review Your Order</Typography>

        <Typography variant="h6">Products:</Typography>
        {orderData?.buyQuantity.map((quantity, index) => (
          <Typography key={index}>
            {["Monitor", "Keyboard", "Mouse"][index]} - ${productPrices[index]} x {quantity} = ${productPrices[index] * quantity}
          </Typography>
        ))}
        
        <Typography variant="h6">Total: ${calculateTotalPrice()}</Typography>

        <Typography variant="h6">Payment Details:</Typography>
        {paymentData.creditCardNumber?
        <div>
          <Typography>Card Holder Name: {paymentData.cardHolderName}</Typography> <br />
          <Typography>Credit Card: **** **** **** {paymentData.creditCardNumber.slice(-4)}</Typography>
        </div>
        : 
        <Typography>No payment information provided.</Typography>
        }


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

export default ViewOrder;
