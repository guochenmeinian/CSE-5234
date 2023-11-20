import React, { useContext } from 'react';
import {
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
import { ProductContext } from '../context/productContext';

function Purchase() {
  const { products } = useContext(ProductContext);

  if (!products || products.length === 0) {
    return (
      <Container>
        <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
          No Items Available
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', mb: 3 }}>
        Our Products
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {products.map(({ id, title, image }) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                sx={{ height: 'auto', maxHeight: '1000px' }} // Adjust height as needed
                image={image || '/other-images/placeholder-image.png'}
                alt={title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h2">
                  {title}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', paddingBottom: 2 }}>
                <Button size="small" color="primary">
                  <Link to={`/products/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
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
