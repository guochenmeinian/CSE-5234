import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./purchase.css";
import { TableRow, TableContainer, Table, TableBody, TableCell, Typography, Box } from '@mui/material';

function Purchase() {

  const [order, setOrder] = useState({
    buyQuantity: [0, 0, 0], 
    credit_card_number: '', 
    expr_date: '', 
    cvv_code: '', 
    card_holder_name: '', 
    address: '', 
    city: '', 
    state: '', 
    zip: '',
  });
  const productPrices = [100, 40, 20]; // Prices for Products
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('paymentEntry', { state: { order: order } });
  }

  const handleQuantityChange = (index, value) => {
    setOrder(prevOrder => {
      let newBuyQuantity = [...prevOrder.buyQuantity];
      newBuyQuantity[index] = value;
      return {...prevOrder, buyQuantity: newBuyQuantity};
    });
  }

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < order.buyQuantity.length; i++) {
      total += order.buyQuantity[i] * (productPrices[i] || 0);
    }
    setTotalPrice(total);
  }, [order.buyQuantity]);

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
            {productPrices.map((price, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Typography variant="body1" style={{ marginRight: "10px" }}>
                      {["Monitor", "Keyboard", "Mouse"][index]} - ${price} each, Quantity:
                    </Typography>
                    <input
                      type="number"
                      required
                      min="0"
                      onChange={(e) => handleQuantityChange(index, parseInt(e.target.value, 10))}
                    />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell align="right">
                <Typography variant="body1">
                  Total Price: ${totalPrice}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <br />
        <button type="submit" className="button-27">
          Proceed to Payment
        </button>
      </form>
    </TableContainer>
  );
}

export default Purchase;
