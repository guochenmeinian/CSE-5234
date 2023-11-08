import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Box,
    ImageList,
    ImageListItem,
    ImageListItemBar,
} from '@mui/material';
import { Link } from 'react-router-dom';


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
        <Box
            spacing={{ xs: 1, sm: 2, md: 4 }}
            sx={{ p: 2 }}
            my={5}
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
                        <ImageListItem key={item.thumbnail_image}>
                            <img
                                srcSet={`${item.thumbnail_image}?fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.thumbnail_image}?fit=crop&auto=format`}
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
    );
}

export default Categories;
