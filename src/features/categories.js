import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Container,
    Box,
    ImageList,
    ImageListItem,
    ImageListItemBar,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from "../constants/customTheme"

function Categories() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/inventory/categories')
            .then((response) => {
                setItems(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <ThemeProvider theme={customTheme}>
            <Container>
                <Box
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    sx={{ p: 2, m: 2 }}
                >
                    <Box my={5}>
                        <Box mt={4}>
                            <img src="/other-images/header-categories.png" alt="Rick and Morty" style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} />
                        </Box>
                    </Box>
                    <ImageList cols={5}>
                        {items.map((item) => (
                            <Link key={item.id} to={`/categories/${item.id}/items`}
                                style={{ textDecoration: 'none', color: 'black' }}>
                                <ImageListItem key={item.image}>
                                    <img
                                        srcSet={`${item.image}?fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item.image}?fit=crop&auto=format`}
                                        alt={item.name}
                                        loading="lazy"
                                    />
                                    <ImageListItemBar
                                        title={item.name}
                                        position="below"
                                    />
                                </ImageListItem>
                            </Link>
                        ))}
                    </ImageList>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Categories;
