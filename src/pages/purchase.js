import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/productContext';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme, expanded }) => ({
  transition: 'transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
  position: 'relative',
  '&:hover': {
    transform: expanded ? 'scale(1.05)' : 'scale(1.015)',
    boxShadow: theme.shadows[10],
    zIndex: expanded ? 2 : 1,
  },
}));

function Purchase() {
  const { products } = useContext(ProductContext);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Our Products
      </Typography>
      <br />
      <Grid container spacing={4} justifyContent="center">
        {products.map(({ id, title, description, quantity, image }) => (
          <Grid item xs={12} sm={6} md={3} key={id}
            onMouseEnter={() => setHoveredCard(id)}
            onMouseLeave={() => setHoveredCard(null)}>
            <StyledCard sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              expanded={hoveredCard === id}>
              <CardMedia
                component="img"
                sx={{ height: 'auto', maxHeight: '400px' }} // Adjust height as needed
                image={image || '/other-images/placeholder-image.png'}
                alt={title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h2">
                  {title}
                </Typography>
                {hoveredCard === id && (
                  <Box>
                    <Typography variant="body2" color="textSecondary">
                      {description}
                    </Typography>
                    <Typography variant="body1">
                      Quantity: {quantity}
                    </Typography>
                  </Box>
                )}
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', paddingBottom: 2 }}>
                <Button size="small" color="primary">
                  <Link to={`/products/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    View Details
                  </Link>
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Purchase;
