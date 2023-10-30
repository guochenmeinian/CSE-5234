import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, Box } from '@mui/material';
import Link from '@mui/material/Link';

const teamMembers = [
    {
        name: "Chenmeinian Guo",
        title: "CEO",
        image: "/morty1.png",
        description: "Chenmeinian has been leading the team since inception and has a knack for innovation.",
        website: "https://github.com/guochenmeinian"
    },
    {
        name: "Jiaqian Huang",
        title: "CTO",
        image: "/morty2.png",
        description: "Jiaqian has a vast experience in tech and has been pivotal to our technical strategies."
    },
    {
        name: "Hannes Scutt",
        title: "COO",
        image: "/morty3.png",
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
            width="100%"
        >
            <Typography variant="h4" gutterBottom>About Our Team</Typography><br/><br/>
            <Grid container spacing={3} justifyContent="center" display="flex" flexWrap="wrap">
                {teamMembers.map(member => (
                    <Box 
                        key={member.name}
                        width={{ xs: "100%", sm: "50%", md: "25%", lg: "20%" }}
                        p={1} 
                    >
                        <Link href={member.website} target="_blank" rel="noopener noreferrer" underline="none">
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
                        </Link>
                    </Box>
                ))}
            </Grid>
        </Box>
    );
};

export default AboutUs;
