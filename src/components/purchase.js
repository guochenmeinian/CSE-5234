import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./purchase.css";
import { TableRow, TableContainer, Table, TableBody, TableCell, Button, Typography, Box } from '@mui/material';

function Purchase() {

  const [order, setOrder] = useState({
    buyQuantity: [0, 0, 0, 0, 0], 
    credit_card_number: '123456', 
    expr_date: '', 
    cvv_code: '', 
    card_holder_name: '', 
    address: '', 
    city: '', 
    state: '', 
    zip: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('purchase/PaymentEntry', { order: order, setOrder: setOrder });
  }

  const handleQuantityChange = (index, value) => {
    setOrder(prevOrder => {
      let newBuyQuantity = [...prevOrder.buyQuantity];
      newBuyQuantity[index] = value;
      return {...prevOrder, buyQuantity: newBuyQuantity};
    });
  }

  return (
    <TableContainer className="container">
      <Box mb={4}>
        <Typography variant="h5" component="div" gutterBottom>
          Purchase Products
        </Typography>
        <Typography variant="body1" component="div" gutterBottom>
          Specify the quantity for each product you'd like to purchase:
        </Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Typography variant="body1" style={{ marginRight: "10px" }}>
                    Product 1 - Quantity:
                  </Typography>
                  <input
                    type="number"
                    required
                    onChange={(e) => handleQuantityChange(0, parseInt(e.target.value, 10))}
                  />
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Box display="flex" alignItems="center">
                  <Typography variant="body1" style={{ marginRight: "10px" }}>
                    Product 2 - Quantity:
                  </Typography>
                  <input
                    type="number"
                    required
                    onChange={(e) => handleQuantityChange(1, parseInt(e.target.value, 10))}
                  />
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: "20px" }}>
          Proceed to Payment
        </Button>
      </form>
    </TableContainer>
  );
}

export default Purchase;
