import React, { useState, useEffect } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = [...cartItems].reduce((total, { amount, price }) => {
      return (total += amount * price);
    }, 0);
    setTotal(parseFloat(total.toFixed(2)));
  }, [cartItems]);

  const increaseAmount = (id) => {
    const updatedCart = [...cartItems].map((item) => {
      return item.id === id ? { ...item, amount: item.amount + 1 } : item;
    });
    setCartItems(updatedCart);
  };

  const decreaseAmount = (id, amount) => {
    let updatedCart = [];
    if (amount === 1) {
      updatedCart = [...cartItems].filter((item) => item.id !== id);
    } else {
      updatedCart = [...cartItems].map((item) => {
        return item.id === id ? { ...item, amount: item.amount - 1 } : item;
      });
    }
    setCartItems(updatedCart);
  };

  const addToCart = (item) => {
    const { id, title, price, image } = item;
    const cartItem = [...cartItems].find((item) => item.id === id);
    if (cartItem) {
      increaseAmount(id);
      console.log("increase amount successfully");
    } else {
      const updatedCartItems = [...cartItems, { id, title, image, price, amount: 1 }];
      setCartItems(updatedCartItems);
      console.log("add to cart successfully");
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, total, addToCart, increaseAmount, decreaseAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };