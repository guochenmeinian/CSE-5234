import React from 'react';
import {
  Container, Typography, Button, Icon, Box, Grid, Paper
} from '@mui/material';
import { motion } from 'framer-motion';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';


const theme = createTheme({
  palette: {
    primary: {
      main: '#f5b921',
      contrastText: '#fff',
    },
    secondary: {
      main: '#333',
    }
  },
  typography: {
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1.5rem',
    },
    h6: {
      fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '1rem',
    },
    overline: {
      fontSize: '0.875rem',
    }
  }
});

const Home = () => {
  const slideIn = {
    hidden: { x: -50 },
    visible: { x: 0 },
  };

  const rickAndMortyImageUrl = "https://wallpaperaccess.com/full/5112240.jpg";

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Box mt={5} mb={5}>
          <Typography variant="h3" align="center" gutterBottom style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
            Welcome to RM Hub
          </Typography>
        </Box>

        {/* Company Mission and Image */}
        <Box my={5}>
          <motion.div initial="hidden" animate="visible" variants={slideIn} transition={{ duration: 1 }}>
            <Typography variant="h5" gutterBottom color="secondary">Our Interdimensional Mission</Typography>
            <Typography variant="body1" paragraph>
              Here at RickAndMorty (RM) Hub, our mission is to be the premier destination for all things related to the universe of "Rick and Morty." Dive deep into the multiverse with our curated collection of merchandise, and stay updated with the latest episodes, theories, and interdimensional news.
            </Typography>
            <Link to="/purchase" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary" startIcon={<Icon>shopping_cart</Icon>}>
                Explore Merchandise
              </Button>
            </Link>
          </motion.div>
          <Box mt={4}>
            <Link to="/rick-and-morty-gallery">
              <img src={rickAndMortyImageUrl} alt="Rick and Morty" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
            </Link>
          </Box>
        </Box>


        {/* Subsequent Sections Flexed Horizontally */}
        <Box my={5}>
          <Grid container spacing={4}>
            {[
              {
                title: "Dive into the Lore",
                content: "Discover the mysteries, theories, and backstories of each character and episode.",
                button: { 
                    label: "Discover More", 
                    icon: "book_online", 
                    variant: "outlined", 
                    color: "secondary", 
                    link: "https://en.wikipedia.org/wiki/Rick_and_Morty",
                    type: "external"
                }
              },
              {
                title: "Latest Episode Updates",
                content: "Never miss an adventure! Stay updated with episode recaps, reviews, and discussions.",
                button: { 
                    label: "View Episodes", 
                    icon: "movie", 
                    variant: "outlined", 
                    color: "primary", 
                    link: "https://www.adultswim.com/streams/rick-and-morty",
                    type: "external"
                }
              },
              {
                title: "Join the Interdimensional Community",
                content: "Engage with fans, theorists, and fellow adventurers from across the multiverse.",
                button: { 
                    label: "Join the Discussion", 
                    icon: "group", 
                    variant: "contained", 
                    color: "primary", 
                    link: "https://discord.com/invite/rickandmorty",
                    type: "external"
                }
              },
              {
                title: "Exclusive Schwifty Deals",
                content: "Get your hands on limited edition merchandise and interdimensional exclusives.",
                button: { 
                    label: "Get Schwifty", 
                    icon: "star", 
                    variant: "contained", 
                    color: "secondary", 
                    link: "/purchase",
                    type: "internal"
                }
              }
            ].map((section, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div initial="hidden" animate="visible" variants={slideIn} transition={{ duration: 1 + index * 0.1 }}>
                  <Paper elevation={3} style={{ padding: '20px', borderRadius: '8px' }}>
                    <Typography variant="h5" gutterBottom color="secondary">{section.title}</Typography>
                    <Typography variant="body1" paragraph>{section.content}</Typography>
                    
                    {section.button.type === "external" ? (
                      <a href={section.button.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                          <Button variant={section.button.variant} color={section.button.color} startIcon={section.button.icon && <Icon>{section.button.icon}</Icon>}>
                              {section.button.label}
                          </Button>
                      </a>
                    ) : (
                      <Link to={section.button.link} style={{ textDecoration: 'none' }}>
                          <Button variant={section.button.variant} color={section.button.color} startIcon={section.button.icon && <Icon>{section.button.icon}</Icon>}>
                              {section.button.label}
                          </Button>
                      </Link>
                    )}

                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
