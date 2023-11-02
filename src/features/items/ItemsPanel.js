import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Stack,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Button,
  CardActions,
} from '@mui/material';

function ItemsPanel() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/inventory/items')
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Stack
      spacing={{ xs: 1, sm: 2, md: 4 }}
      sx={{ p: 2, m: 2 }}
      direction="row"
      useFlexGap
      flexWrap="wrap"
    >
      {items.map((item, index) => {
        return (
          <Card key={index} sx={{ width: 345 }}>
            <CardMedia
              sx={{ height: 200 }}
              image={item.image}
              title={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${item.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined" href={`/items/${item.id}`}>
                Learn more
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </Stack>
  );
}

export default ItemsPanel;
