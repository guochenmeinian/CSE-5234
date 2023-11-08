import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  Stack,
  Box,
  Typography
} from '@mui/material';


function Shipping() {
  const navigate = useNavigate();
  const location = useLocation();

  const { order: orderData, payment: paymentData } = location.state || {};

  const [shippingData, setShippingData] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const handleUpdateShipping = (field) => (e) => {
    setShippingData({
      ...shippingData,
      [field]: e.target.value,
    });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSubmit = () => {
    navigate('/purchase/summary', {
      state: {
        order: orderData,
        payment: paymentData,
        shipping: shippingData,
      },
    });
  };

  return (
    <Box my={5}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: (theme) => theme.palette.primary.main }}>
        Shipping Info
      </Typography>
      <Box flex={1} p={2} border="1px solid gray" borderRadius={2}>
        <Stack spacing={2} mt={2}>
          <FormControl>
            <InputLabel>Address</InputLabel>
            <Input
              value={shippingData.address}
              onChange={handleUpdateShipping('address')}
            />
          </FormControl>
          <FormControl>
            <InputLabel>City</InputLabel>
            <Input
              value={shippingData.city}
              onChange={handleUpdateShipping('city')}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Postal Code</InputLabel>
            <Input
              value={shippingData.postalCode}
              onChange={handleUpdateShipping('postalCode')}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Country</InputLabel>
            <Input
              value={shippingData.country}
              onChange={handleUpdateShipping('country')}
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

export default Shipping;
