import React from 'react';
import { Box, Divider, Typography } from '@mui/material';

const OrderSection = (orderData, productNames, productPrices, totalPrice) => {
  return (
    <Box flex={1} p={2} border="1px solid gray" borderRadius={2}>
      <Typography variant="h6" gutterBottom>
        Your Orders:
      </Typography>
      <Divider />
      {orderData &&
        orderData.buyQuantity.map((quantity, index) => (
          <Box key={index} mt={2}>
            <Typography>
              {productNames[index]}: {quantity} x ${productPrices[index]} = $
              {quantity * productPrices[index]}
            </Typography>
          </Box>
        ))}
      <Divider sx={{ mt: 2 }} />
      <Box mt={2}>
        <Typography variant="h6">Total Price: ${totalPrice}</Typography>
      </Box>
    </Box>
  );
};

export default OrderSection;
