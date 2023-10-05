import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Button,
  Box,
} from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const slideIn = {
    hidden: { x: -50 },
    visible: { x: 0 },
  };

  return (
    <div>
      <Box
        style={{
          backgroundImage: `url('https://via.placeholder.com/1600x800')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <Container>
          <Typography variant="h3" style={{ fontWeight: 'bold' }}>
            Big Title Here
          </Typography>
          <Typography variant="body1">
            Subtitle Here
          </Typography>
          <Button variant="contained" color="primary">
            Learn More
          </Button>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={4} style={{ marginTop: '40px' }}>
          <Grid item xs={12} sm={6}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideIn}
              transition={{ duration: 1 }}
            >
              <Typography variant="h5">Our Business Mission</Typography>
              <Typography variant="body2" paragraph>
                We are committed to delivering the highest quality products while
                maintaining our dedication to environmental sustainability.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideIn}
              transition={{ duration: 1 }}
            >
              <Typography variant="h5">Product and Services Strategy</Typography>
              <Typography variant="body2" paragraph>
                Our strategy focuses on innovation, customer satisfaction, and
                sustainable growth in providing the best products and services.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1 }}
          style={{ marginTop: '40px' }}
        >
          <Typography variant="h4" gutterBottom>
            Products and Services Offered
          </Typography>
          <Typography variant="body1" paragraph>
            Explore our range of products and services tailored to meet your
            specific needs.
          </Typography>
        </motion.div>
      </Container>
    </div>
  );
};

export default Home;
