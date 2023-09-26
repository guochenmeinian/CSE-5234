import React, { useState } from "react";
import "./purchase.css";

function Purchase() {

  const [products, setProducts] = useState([
    { id: 1, name: 'Item 1', price: 10, quantity: 0 },
    { id: 2, name: 'Item 2', price: 15, quantity: 0 },
    { id: 3, name: 'Item 3', price: 20, quantity: 0 }
  ]);

  return (
    <div className="container">
      <table className="payment">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
                <input 
                  className="input"
                  type="number" 
                  value={product.quantity}  
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Purchase;
