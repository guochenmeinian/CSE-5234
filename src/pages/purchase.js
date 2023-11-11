import React, { useContext } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';
import { ItemContext } from '../context/itemContext';

function Purchase() {
  const { products } = useContext(ItemContext);
  // console.log(products)

  if (!products || products.length === 0) {
    return (
      <Container>
        <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
          No Items Available
        </Typography>
      </Container>
    );
  }

  const cardStyle = {
    height: '100%', // Ensures that all cards have the same height
    display: 'flex',
    flexDirection: 'column',
  };

  const mediaStyle = {
    paddingTop: '56.25%', // 16:9 aspect ratio
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Our Products
      </Typography>
      <Grid container spacing={4}>
        {products.map(({ id, title, image }) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <Card style={cardStyle}>
              <CardMedia
                style={mediaStyle}
                image={image || 'https://upload.wikimedia.org/wikipedia/zh/b/b8/Rick_and_Morty_season_1.png'} // a default image URL if no image available
                title={title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  <Link to={`books/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    View Details
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Purchase;
