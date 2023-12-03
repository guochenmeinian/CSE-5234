import React from 'react';
import {
  Typography,
  Grid,
  Box,
  Stack,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Link,
} from '@mui/material';

const teamMembers = [
  {
    name: 'Chenmeinian Guo',
    title: 'CEO',
    image: '/avatar-icons/rick.png',
    description:
      'Chenmeinian has been leading the team since inception and has a knack for innovation.',
    website: 'https://github.com/guochenmeinian',
  },
  {
    name: 'Jiaqian Huang',
    title: 'CTO',
    image: '/avatar-icons/summer.png',
    description:
      'Jiaqian has a vast experience in tech and has been pivotal to our technical strategies.',
    website: 'https://github.com/authordottle',
  },
  {
    name: 'Hannes Scutt',
    title: 'COO',
    image: '/avatar-icons/morty.png',
    description:
      'Hannes ensures smooth operations and the execution of our day-to-day activities.',
  },
];

const AboutUs = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      my={5}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: (theme) => theme.palette.primary.main }}>
        About Us
      </Typography>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        display="flex"
        flexWrap="wrap"
      >
        {teamMembers.map((member) => (
          <Box
            key={member.name}
            width={{ xs: '100%', sm: '50%', md: '25%', lg: '20%' }}
            p={1}
          >
            <Link
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
            >
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="260"
                    image={member.image}
                    alt={member.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1">{member.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Box>
        ))}
      </Grid>
    </Stack>
  );
};

export default AboutUs;
