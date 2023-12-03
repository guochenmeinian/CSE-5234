import React, { useContext } from 'react';
import {
    Stack,
    Box,
    Typography,
    Divider,
    ImageList,
    ImageListItem,
    ImageListItemBar,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';


const CartSummaryPanel = () => {
    const { cartItems, total } = useContext(CartContext);

    return (
        <Box flex={1} p={4} sx={{ backgroundColor: (theme) => theme.palette.grey["100"] }} borderRadius={1}>
            <Stack direction="column" divider={<Divider orientation="horizontal" flexItem />} spacing={2}>
                <Typography variant="h4" align="start" gutterBottom >
                    Products ({cartItems.length > 1 ? `${cartItems.length} items` : `${cartItems.length} item`})
                </Typography>
                <ImageList cols={5}>
                    {cartItems.map((item) => (
                        <Link key={item.id} to={`/products/${item.id}`}
                            style={{
                                textDecoration: 'none',
                                color: 'black',
                                border: "1px solid #f5f5f5",
                                whiteSpace: "normal",
                                overflow: "hidden"
                            }}>
                            <ImageListItem key={item.id}>
                                <img
                                    srcSet={`${item.image || '/other-images/placeholder-image.png'}?fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.image || '/other-images/placeholder-image.png'}?fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={
                                        <Box>
                                            <Box> Price: ${item.price} </Box>
                                            <Box> Amount: {item.amount}</Box>
                                        </Box>
                                    }
                                    position="below"
                                />
                            </ImageListItem>
                        </Link>
                    ))}
                </ImageList>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="h4" component="span">Total</Typography>
                    <Typography variant="h4" component="span">${total}</Typography>
                </Box>
            </Stack>
        </Box>
    )
};

export default CartSummaryPanel;