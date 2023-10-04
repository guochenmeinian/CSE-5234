import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Box } from '@mui/material';

const teamMembers = [
    {
        name: "Chenmeinian Guo",
        title: "CEO",
        image: "/path_to_image_1.jpg",
        description: "Chenmeinian has been leading the team since inception and has a knack for innovation."
    },
    {
        name: "Jiaqian Huang",
        title: "CTO",
        image: "/path_to_image_2.jpg",
        description: "Jiaqian has a vast experience in tech and has been pivotal to our technical strategies."
    },
    {
        name: "Hannes Scutt",
        title: "COO",
        image: "/path_to_image_3.jpg",
        description: "Hannes ensures smooth operations and execution of our day-to-day activities."
    }
];

const AboutUs = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            padding="2rem"
        >
            <Typography variant="h4" gutterBottom>About Our Team</Typography><br/>
            <Grid container spacing={3} justifyContent="center">
                {teamMembers.map(member => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={member.name}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={member.image}
                                    alt={member.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {member.name}
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {member.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {member.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default AboutUs;
