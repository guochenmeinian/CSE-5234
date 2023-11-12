import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';


function Items() {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/inventory/categories/${id}/items`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Box
      spacing={{ xs: 1, sm: 2, md: 4 }}
      sx={{ p: 2 }}
      my={5}
    >
      <ImageList cols={5}>
        {items.map((item) => (
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
    </Box>
  );
}

export default Items;
