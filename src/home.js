import React from 'react';
import { Container, Typography, Grid, Box, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#008080',
      contrastText: '#fff',
    },
  },
});

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
    <ThemeProvider theme={theme}>
      {/* Background Image Section */}
      <Box
        sx={{
          position: 'relative',
          height: '400px',
          color: 'white',
          marginBottom: '40px',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage: `url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?fit=crop&w=1600&q=80')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: '0.75',
            zIndex: -1,
          },
        }}
      >
        <Stack
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <Typography
            variant="h3"
            style={{ fontWeight: 'bold', color: 'black' }}
          >
            GizmoHub
          </Typography>
        </Stack>
      </Box>

      {/* Content Section */}
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideIn}
              transition={{ duration: 1 }}
            >
              <Typography variant="h5">Our Business Mission</Typography>
              <Typography variant="body2" paragraph>
                At GizmoHub, our mission is to enhance the lives of our
                customers by providing an unparalleled online shopping
                experience. We are dedicated to offering a diverse selection of
                high-quality products that cater to every need, taste, and
                lifestyle. Through innovation, transparency, and exceptional
                customer service, we aim to be your trusted destination for
                discovering, purchasing, and enjoying the latest trends and
                essentials. We are committed to fostering a vibrant and
                inclusive online community that celebrates diversity,
                creativity, and individuality. Our mission is to empower you to
                shop with confidence, knowing that we prioritize your
                satisfaction, convenience, and well-being at every step of your
                journey.
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
              <Typography variant="h5">
                Product and Services Strategy
              </Typography>
              <Typography variant="body2" paragraph>
                Our strategy focuses on innovation, customer satisfaction, and
                sustainable growth in providing the best products and services.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
