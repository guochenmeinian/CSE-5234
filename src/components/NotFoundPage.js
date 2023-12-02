import { Box, Typography } from '@mui/material';

const NotFoundPage = () => {
    return (
        <Box>
            <Typography
                variant="h3"
                align="center"
                gutterBottom
                sx={{ fontWeight: 'bold', color: (theme) => theme.palette.primary.main }}>
                I-I-I don't know, Morty, it's just gone!
            </Typography>
            Hey there!
            Sorry to break it to ya, but it seems like the info you're looking for is hiding out in a parallel dimension.
            We've checked all the portals, but no luck.
            Looks like this data's off on an adventure of its own!
            Wubba lubba dub dub! 🚀🌀🌌
        </Box>
    )
};

export default NotFoundPage;