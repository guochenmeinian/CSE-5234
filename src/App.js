import './App.css';
import React from 'react';
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

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
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
        </div>
        <AppFooter />
      </Router>
    </div>
  );
}

export default App;
