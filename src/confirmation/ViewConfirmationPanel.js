import React from "react";
import { useLocation } from "react-router-dom";
import { TableRow, TableContainer, Table, TableBody, TableCell, Typography, Box, Paper } from '@mui/material';

const productNames = ["Monitor", "Keyboard", "Mouse"];
const productPrices = [100, 40, 20];

function ViewConfirmation() {
  
    const location = useLocation();
    const { orderData, paymentData, shippingData } = location.state || {};

    if (!orderData || !orderData.buyQuantity) {
        return <Typography variant="h6">Error: Order information not available.</Typography>;
    }

    const totalItems = orderData.buyQuantity.reduce((acc, qty) => acc + qty, 0);

    if (totalItems === 0) {
        return <Typography variant="h6">You haven't ordered any items.</Typography>;
    }

    return (
        <Box p={4}>
            <Typography variant="h4" gutterBottom>
                Thank you, {shippingData?.name}!
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Your order has been received. Here are the details:
            </Typography>
            
            <Paper elevation={3}>
                <TableContainer>
                    <Box mb={4}>
                        <Typography variant="h5" component="div" gutterBottom>
                        Order Confirmation
                        </Typography>
                    </Box>

                    <Table>
                        <TableBody>
                        {orderData.buyQuantity.map((quantity, index) => (
                            quantity > 0 && (
                            <TableRow key={index}>
                                <TableCell>
                                {productNames[index]} x{quantity} @ ${productPrices[index]} each
                                </TableCell>
                                <TableCell>
                                ${quantity * productPrices[index]}
                                </TableCell>
                            </TableRow>
                            )
                        ))}
                        <TableRow>
                            <TableCell><strong>Total</strong></TableCell>
                            <TableCell>
                            <strong>${orderData.buyQuantity.reduce((total, qty, idx) => total + (qty * productPrices[idx]), 0)}</strong>
                            </TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}

export default ViewConfirmation;
