import React from 'react';
import { Box, Typography, Paper, Container, useTheme, useMediaQuery, Grid } from '@mui/material';

const InternalServerErrorPage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container component="main" maxWidth="md">
            <Paper elevation={3} sx={{ p: 3, mt: 3, mb: 3 }}>
                <Grid container spacing={isMobile ? 2 : 3} alignItems="center" justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Box textAlign={isMobile ? 'center' : 'left'}>
                            <Typography
                                variant="h4"
                                gutterBottom
                                sx={{ fontWeight: 'bold', color: (theme) => theme.palette.primary.main }}>
                                Whoa, Morty! We're in a bit of a pickle here!
                            </Typography>
                            <Typography
                                variant="subtitle1">
                                Uh-oh! Looks like we've hit a snag, Morty!
                                Something's gone all wibbly-wobbly on the website!
                                We're working on fixing it faster than you can say 'Rickety Rickety Wrecked!'
                                Hang tight while we dive into the intergalactic troubleshooting.
                                We'll have this glitch sorted out before you can burp like Rick! Stay tuned! 🛠️🌌🌀
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img
                            srcSet="/other-images/internal-server-error-image.png?fit=crop&auto=format&dpr=2 2x"
                            src="/other-images/internal-server-error-image.png?fit=crop&auto=format"
                            alt="Internal Server Error Image"
                            loading="lazy"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
};

export default InternalServerErrorPage;
