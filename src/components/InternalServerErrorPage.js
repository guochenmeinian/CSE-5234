import { Box, Typography } from '@mui/material';

const InternalServerErrorPage = () => {
    return (
        <Box>
            <Typography
                variant="h3"
                align="center"
                gutterBottom
                sx={{ fontWeight: 'bold', color: (theme) => theme.palette.primary.main }}>
                Whoa, Morty! We're in a bit of a pickle here!
            </Typography>
            Uh-oh! Looks like we've hit a snag, Morty!
            Something's gone all wibbly-wobbly on the website!
            We're working on fixing it faster than you can say 'Rickety Rickety Wrecked!'
            Hang tight while we dive into the intergalactic troubleshooting.
            We'll have this glitch sorted out before you can burp like Rick! Stay tuned! 🛠️🌌🌀
        </Box>
    )
};

export default InternalServerErrorPage;