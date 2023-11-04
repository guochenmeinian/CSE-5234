import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';

function Confirmation() {
  const location = useLocation();

  const { order: orderData } = location.state || {};

  if (!orderData) {
    return (
      <Typography variant="h6">
        Error: Order information not available.
      </Typography>
    );
  }

  const getTotalPrice = () => {
    return orderData.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  return (
    <Paper my={5} elevation={3}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: (theme) => theme.palette.primary.main }}>
        Your order has been received. Here are the details:
      </Typography>
      <ImageList cols={5}>
        {orderData.map((item) => (
          <Link key={item.id} to={`/items/${item.id}`}
            style={{
              textDecoration: 'none',
              color: 'black',
              border: "1px solid #f5f5f5",
              whiteSpace: "normal",
              overflow: "hidden"
            }}>
            <ImageListItem key={item.thumbnailImage}>
              <img
                srcSet={`${item.thumbnailImage}?fit=crop&auto=format&dpr=2 2x`}
                src={`${item.thumbnailImage}?fit=crop&auto=format`}
                alt={item.name}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.name}
                subtitle={`$${item.price}`}
                position="below"
              />
            </ImageListItem>
          </Link>
        ))}
      </ImageList>
      <Typography variant="h5">Total:</Typography>
      <Typography variant="h5">{getTotalPrice()}</Typography>
    </Paper>
  );
}

export default Confirmation;
