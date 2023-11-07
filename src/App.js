import React, { useState } from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import About from './about';
import Cart from './features/cart';
import Categories from './features/categories';
import Items from './features/items';
import Item from './features/item';
import Payment from './features/payment';
import Shipping from './features/shipping';
import OrderSummary from './features/orderSummary';
import Confirmation from './features/confirmation';
import AppFooter from './components/footer';
import Home from './home';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from "./constants/customTheme"

function App() {
  const [cartItems, setCartItems] = useState([]);

  const removeAllItemsFromCart = () => {
    setCartItems([]);
  };

  const removeItemFromCart = (id) => {
    const newCartItems = cartItems.filter(item => {
      return item.id !== id;
    });
    setCartItems(newCartItems);
  };

  const addItemToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <Navbar numberOfCartItems={cartItems.length} />
      <ThemeProvider theme={customTheme}>
        <Container sx={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} removeItemFromCart={removeItemFromCart} />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:id/items" element={<Items />} />
            <Route path="/items/:id" element={<Item addItemToCart={addItemToCart} />} />
            <Route path="/purchase/payment" element={<Payment />} />
            <Route
              path="/purchase/shipping"
              element={<Shipping />}
            />
            <Route path="/purchase/summary" element={<OrderSummary />} />
            <Route
              path="/purchase/confirmation"
              element={<Confirmation removeAllItemsFromCart={removeAllItemsFromCart} />}
            />
          </Routes>
        </Container>
      </ThemeProvider>
      <AppFooter />
    </Router >
  );
}

export default App;
