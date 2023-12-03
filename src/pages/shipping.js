import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  Stack,
  Box,
  Typography,
  Divider,
  Grid
} from '@mui/material';
import CartSummaryPanel from '../components/CartSummaryPanel';


function Shipping() {
  const navigate = useNavigate();

  const [shippingData, setShippingData] = useState({
    name: '',
    country: '',
    addressLine1: '',
    addressLine2: '',
    postalCode: '',
    state: '',
    city: '',
    email: '',
    phoneNumber: '',
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
    navigate('/purchase/payment', {
      state: {
        shipping: shippingData,
      },
    })
  };

  return (
    <Box>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: (theme) => theme.palette.primary.main }}>
        Shipping & Contact Info
      </Typography>
      <Typography
        variant="h4"
        align="center"
        gutterBottom>
        Hey there, interdimensional traveler! Time to warp your stuff to its destination!
        Fill in those details faster than Rick can brew his next crazy invention.
        We promise not to accidentally send your package to a dimension of Meeseeks.
        Let's get those coordinates in for smooth shipping across the multiverse!
        Dimensional shipping awaits! 🚀🌍📦
      </Typography>
      <Box py={4}><Divider orientation="horizontal" /></Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box flex={1} p={2} border="1px solid gray" borderRadius={2}>
            <Stack spacing={2}>
              <FormControl required>
                <InputLabel>Name</InputLabel>
                <Input
                  value={shippingData.name}
                  onChange={handleUpdateShipping('name')}
                />
              </FormControl>
              <FormControl required>
                <InputLabel>Country</InputLabel>
                <Input
                  value={shippingData.country}
                  onChange={handleUpdateShipping('country')}
                />
              </FormControl>
              <FormControl required>
                <InputLabel>Address</InputLabel>
                <Input
                  value={shippingData.addressLine1}
                  onChange={handleUpdateShipping('addressLine1')}
                />
              </FormControl>
              <FormControl>
                <InputLabel>Apt No./Build No./Office Name</InputLabel>
                <Input
                  value={shippingData.addressLine2}
                  onChange={handleUpdateShipping('addressLine2')}
                />
              </FormControl>
              <FormControl required>
                <InputLabel>Postal Code</InputLabel>
                <Input
                  value={shippingData.postalCode}
                  onChange={handleUpdateShipping('postalCode')}
                />
              </FormControl>
              <FormControl required>
                <InputLabel>State</InputLabel>
                <Input
                  value={shippingData.state}
                  onChange={handleUpdateShipping('state')}
                />
              </FormControl>
              <FormControl required>
                <InputLabel>City</InputLabel>
                <Input
                  value={shippingData.city}
                  onChange={handleUpdateShipping('city')}
                />
              </FormControl>
              <FormControl required>
                <InputLabel>Email</InputLabel>
                <Input
                  value={shippingData.email}
                  onChange={handleUpdateShipping('email')}
                />
              </FormControl>
              <FormControl required>
                <InputLabel>Phone Number</InputLabel>
                <Input
                  value={shippingData.phoneNumber}
                  onChange={handleUpdateShipping('phoneNumber')}
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
        </Grid>
        <Grid item xs={4}>
          <CartSummaryPanel />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Shipping;