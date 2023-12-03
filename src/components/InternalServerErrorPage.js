import { Box, Typography, Paper } from '@mui/material';

const InternalServerErrorPage = () => {
    return (
        <Paper elevation={3} sx={{ p: 2, display: 'flex', margin: 'auto', maxWidth: 900 }}>
            <Box>
                <Typography
                    variant="h3"
                    gutterBottom
                    sx={{ fontWeight: 'bold', color: (theme) => theme.palette.primary.main }}>
                    Whoa, Morty! We're in a bit of a pickle here!
                </Typography>
                <Typography
                    variant="h6"
                    gutterBottom>
                    Uh-oh! Looks like we've hit a snag, Morty!
                    Something's gone all wibbly-wobbly on the website!
                    We're working on fixing it faster than you can say 'Rickety Rickety Wrecked!'
                    Hang tight while we dive into the intergalactic troubleshooting.
                    We'll have this glitch sorted out before you can burp like Rick! Stay tuned! 🛠️🌌🌀
                </Typography>
                <img
                    srcSet="/other-images/internal-server-error-image.png?fit=crop&auto=format&dpr=2 2x"
                    src="/other-images/internal-server-error-image.png?fit=crop&auto=format"
                    alt=""
                    loading="lazy"
                />
            </Box>
        </Paper>
    )
};

export default InternalServerErrorPage;