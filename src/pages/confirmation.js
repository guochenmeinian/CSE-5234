import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';
import getTotalCost from "../hook/getTotalCost";

function Confirmation({ removeAllItemsFromCart }) {
  const location = useLocation();

  const { order: orderData } = location.state || {};

  useEffect(() => {
    removeAllItemsFromCart();
  }, []);

  return (
    orderData ?
      (
        <Paper my={5} elevation={3} >
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ fontWeight: 'bold', color: (theme) => theme.palette.primary.main }
            }>
            Your order has been received.Here are the details:
          </Typography>
          <ImageList cols={5}>
            {orderData.map((item) => (
              <Link key={item.id} to={`/products/${item.id}`}
                style={{
                  textDecoration: 'none',
                  color: 'black',
                  border: "1px solid #f5f5f5",
                  whiteSpace: "normal",
                  overflow: "hidden"
                }}>
                <ImageListItem key={item.image}>
                  <img
                    srcSet={`${item.image}?fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.image}?fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={`$${item.price}`}
                    position="below"
                  />
                </ImageListItem>
              </Link>
            ))}
          </ImageList>
          <Typography variant="h5">Total:</Typography>
          <Typography variant="h5">{getTotalCost(orderData)}</Typography>
        </Paper>
      ) : (
        <Typography variant="h6">
          Error: Order information not available.
        </Typography>
      )
  );
}

export default Confirmation;
