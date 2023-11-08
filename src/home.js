import React from 'react';
import { Typography, Button, Icon, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';


const Home = () => {
  const slideIn = {
    hidden: { x: -50 },
    visible: { x: 0 },
  };

  return (
    <Box>
      {/* Intro Section */}
      <Box my={5} textAlign="center">
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          Welcome to the RM Hub
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Your portal to the Rick and Morty universe
        </Typography>
      </Box>

      {/* Video Section */}
      <Box my={5} display="flex" justifyContent="center">
        <Box maxWidth="960px" >
          <ReactPlayer url="https://www.youtube.com/watch?v=BKYJ5AIOU9I" controls={true} width="100%" />
          <Typography variant="subtitle1" color="text.secondary" mt={2}>
            Immerse yourself in the latest interdimensional escapades with Rick and Morty in this featured episode.
          </Typography>
        </Box>
      </Box>

      {/* Image and Mission */}
      <Box my={5} display="flex" justifyContent="center" flexDirection="column" alignItems="center">
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'medium' }}>
          Our Interdimensional Mission
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          At RickAndMorty (RM) Hub, we transcend ordinary fandom. Our mission is to forge a vibrant community of enthusiasts deeply immersed in the rich narrative of the show. We're dedicated to providing exclusive content, detailed episode breakdowns, and forums for discussion. Unravel the mysteries of the multiverse, get insights from creators, and participate in fan-led events. Become part of a collective that celebrates every nuance of this cosmic journey.
        </Typography>
        <Link to="/mission" style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">
            Learn About Our Mission
          </Button>
        </Link>
        <Box mt={4} sx={{ width: '100%', maxWidth: '1200px' }}> {/* Increase max width for larger display */}
          <img src="/other-images/homepage.png" alt="Rick and Morty" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
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
              title: "Behind The Scenes",
              content: "Get a peek at the making of your favorite episodes with exclusive behind-the-scenes content.",
              button: {
                label: "Go Behind the Scenes",
                icon: "camera_enhance",
                variant: "outlined",
                color: "primary",
                link: "https://www.youtube.com/watch?v=RlkJF-FTOQU",
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
                link: "/categories",
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
    </Box>
  );
};

export default Home;
