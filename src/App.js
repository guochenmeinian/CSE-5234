import React from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import About from './about';
import Cart from './pages/cart';
import Categories from './pages/categories';
import Items from './pages/items';
import Item from './pages/item';
import Payment from './pages/payment';
import Shipping from './pages/shipping';
import OrderSummary from './pages/orderSummary';
import Confirmation from './pages/confirmation';
import AppFooter from './components/footer';
import PurchaseItems from './pages/purchase';
import Home from './home';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from "./customTheme"

function App() {
  return (
    <Router>
      <Navbar />
      <ThemeProvider theme={customTheme}>
        <Container sx={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            <Route path="/purchase" element={<PurchaseItems />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:id/items" element={<Items />} />
            <Route path="/items/:id" element={<Item />} />
            <Route path="/purchase/payment" element={<Payment />} />
            <Route
              path="/purchase/shipping"
              element={<Shipping />}
            />
            <Route path="/purchase/summary" element={<OrderSummary />} />
            <Route
              path="/purchase/confirmation"
              element={<Confirmation />}
            />
          </Routes>
        </Container>
      </ThemeProvider>
      <AppFooter />
    </Router >
  );
}

export default App;
