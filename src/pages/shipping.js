import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [errorObj, setErrorObj] = useState({
    name: false,
    country: false,
    addressLine1: false,
    postalCode: false,
    state: false,
    city: false,
    email: false,
    phoneNumber: false,
  })

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
    const currentError = {
      name: !shippingData.name,
      country: !shippingData.country,
      addressLine1: !shippingData.addressLine1,
      postalCode: !shippingData.postalCode,
      state: !shippingData.state,
      city: !shippingData.city,
      email: !shippingData.email,
      phoneNumber: !shippingData.phoneNumber,
    };
    setErrorObj(currentError);
    if (!currentError.name && !currentError.country && !currentError.addressLine1
      && !currentError.postalCode && !currentError.state && !currentError.city
      && !currentError.email && !currentError.phoneNumber) {
      navigate('/purchase/payment', {
        state: {
          shipping: shippingData,
        },
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
      <Box py={5}><Divider orientation="horizontal" /></Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box flex={1} p={2} border="1px solid gray" borderRadius={2}>
            <Stack spacing={2}>
              <TextField
                required
                label="Name"
                variant='standard'
                value={shippingData.name}
                onChange={handleUpdateShipping('name')}
                error={errorObj.name}
                helperText={errorObj.name ? "Please fill in this field." : null}
              />
              <TextField
                required
                label="Country"
                variant='standard'
                value={shippingData.country}
                onChange={handleUpdateShipping('country')}
                error={errorObj.country}
                helperText={errorObj.country ? "Please fill in this field." : null}
              />
              <TextField
                required
                label="Address"
                variant='standard'
                value={shippingData.addressLine1}
                onChange={handleUpdateShipping('addressLine1')}
                error={errorObj.addressLine1}
                helperText={errorObj.addressLine1 ? "Please fill in this field." : null}
              />
              <TextField
                label="Apt No./Build No./Office Name"
                variant='standard'
                value={shippingData.addressLine2}
                onChange={handleUpdateShipping('addressLine2')}
              />
              <TextField
                required
                label="Postal Code"
                variant='standard'
                value={shippingData.postalCode}
                onChange={handleUpdateShipping('postalCode')}
                error={errorObj.postalCode}
                helperText={errorObj.postalCode ? "Please fill in this field." : null}
              />
              <TextField
                required
                label="State"
                variant='standard'
                value={shippingData.state}
                onChange={handleUpdateShipping('state')}
                error={errorObj.state}
                helperText={errorObj.state ? "Please fill in this field." : null}
              />
              <TextField
                required
                label="City"
                variant='standard'
                value={shippingData.city}
                onChange={handleUpdateShipping('city')}
                error={errorObj.city}
                helperText={errorObj.city ? "Please fill in this field." : null}
              />
              <TextField
                required
                label="Email"
                variant='standard'
                value={shippingData.email}
                onChange={handleUpdateShipping('email')}
                error={errorObj.email}
                helperText={errorObj.email ? "Please fill in this field." : null}
              />
              <TextField
                required
                label="Phone Number"
                variant='standard'
                value={shippingData.phoneNumber}
                onChange={handleUpdateShipping('phoneNumber')}
                error={errorObj.phoneNumber}
                helperText={errorObj.phoneNumber ? "Please fill in this field." : null}
              />
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