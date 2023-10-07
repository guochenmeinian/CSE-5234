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
                At [Your Company Name], our mission is to enhance the lives of our customers by providing an unparalleled online shopping experience. We are dedicated to offering a diverse selection of high-quality products that cater to every need, taste, and lifestyle. Through innovation, transparency, and exceptional customer service, we aim to be your trusted destination for discovering, purchasing, and enjoying the latest trends and essentials. We are committed to fostering a vibrant and inclusive online community that celebrates diversity, creativity, and individuality. Our mission is to empower you to shop with confidence, knowing that we prioritize your satisfaction, convenience, and well-being at every step of your journey.
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
      </Container>
    </div>
  );
};

export default Home;
