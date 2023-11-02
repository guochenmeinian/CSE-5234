import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const Cart = () => {
  // const [order, setOrder] = useState({
  //     buyQuantity: [0, 0, 0],
  // });
  // const navigate = useNavigate();
  //
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   navigate('/items/paymentEntry', { state: { order: order } });
  // };
  //
  // const handleQuantityChange = (index, value) => {
  //   setOrder((prevOrder) => {
  //     let newBuyQuantity = [...prevOrder.buyQuantity];
  //     newBuyQuantity[index] = value;
  //     return { ...prevOrder, buyQuantity: newBuyQuantity };
  //   });
  // };

  // let totalPrice = 0;
  // for (let i = 0; i < order.buyQuantity.length; i++) {
  //   totalPrice += order.buyQuantity[i] * (items[i]?.price || 0);
  // }

  // <TableContainer className="container">
  //   <Box mb={4}>
  //     <Typography variant="h5" component="div" gutterBottom>
  //       Purchase Products
  //     </Typography>
  //     <Typography variant="body1" component="div" gutterBottom>
  //       Specify the quantity for each product you'd like to items:
  //     </Typography>
  //   </Box>
  //
  //
  //   <form onSubmit={handleSubmit}>
  //     <Table>
  //       <TableBody>
  //         {items.map((item, index) => (
  //           <TableRow key={index}>
  //             <TableCell>
  //               <Box display="flex" alignItems="center">
  //                 <Typography variant="body1" style={{ marginRight: '10px' }}>
  //                   {item.name} - ${item.price} each, Quantity:
  //                 </Typography>
  //                 <input
  //                   type="number"
  //                   required
  //                   min="0"
  //                   onChange={(e) =>
  //                     handleQuantityChange(
  //                       index,
  //                       parseInt(e.target.value, 10),
  //                     )
  //                   }
  //                 />
  //               </Box>
  //             </TableCell>
  //           </TableRow>
  //         ))}
  //         <TableRow>
  //           <TableCell align="right">
  //             <Typography variant="body1">
  //               Total Price: ${totalPrice}
  //             </Typography>
  //           </TableCell>
  //         </TableRow>
  //       </TableBody>
  //     </Table>
  //     <br />
  //     <button type="submit" className="button-27">
  //       Proceed to Payment
  //     </button>
  //   </form>
  // </TableContainer>

  return (
    <div>
      <h1>shopping cart page</h1>
    </div>
  );
};

export default Cart;
