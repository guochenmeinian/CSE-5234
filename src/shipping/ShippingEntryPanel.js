import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, FormControl, InputLabel, Input, Stack, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f5b921",
      contrastText: "#fff",
    },
  },
});

function ShippingEntryPanel() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const { orderData, paymentData } = location.state || {};
  
  const [shippingData, setShippingData] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: ''
  });

  const handleUpdateShipping = (field) => (e) => {
    setShippingData({
      ...shippingData,
      [field]: e.target.value
    });
  };

  const handleSubmit = () => {
    navigate('/purchase/viewOrder', { state: { orderData: orderData, paymentData: paymentData, shippingData: shippingData } });
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack direction="column" justifyContent="center" alignItems="center" spacing={2} sx={{ m: 4 }}>
        <FormControl>
          <InputLabel>Address</InputLabel>
          <Input value={shippingData.address} onChange={handleUpdateShipping('address')} />
        </FormControl>
        
        <FormControl>
          <InputLabel>City</InputLabel>
          <Input value={shippingData.city} onChange={handleUpdateShipping('city')} />
        </FormControl>
        
        <FormControl>
          <InputLabel>Postal Code</InputLabel>
          <Input value={shippingData.postalCode} onChange={handleUpdateShipping('postalCode')} />
        </FormControl>
        
        <FormControl>
          <InputLabel>Country</InputLabel>
          <Input value={shippingData.country} onChange={handleUpdateShipping('country')} />
        </FormControl>
        
        <Button variant="contained" onClick={handleSubmit}>
          Continue to Confirmation
        </Button>
      </Stack>
    </ThemeProvider>
  );
}

export default ShippingEntryPanel;
