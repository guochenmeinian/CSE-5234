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
import PaymentEntryPanel from './features/order/PaymentEntryPanel';
import ShippingEntryPanel from './features/order/ShippingEntryPanel';
import ViewOrderPanel from './features/order/ViewOrderPanel';
import ViewConfirmationPanel from './features/order/ViewConfirmationPanel';
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
            <Route
              path="/purchase/paymentEntry"
              element={<PaymentEntryPanel />}
            />
            <Route
              path="/purchase/shippingEntry"
              element={<ShippingEntryPanel />}
            />
            <Route path="/purchase/viewOrder" element={<ViewOrderPanel />} />
            <Route
              path="/purchase/viewConfirmation"
              element={<ViewConfirmationPanel />}
            />
          </Routes>
        </div>
        <AppFooter />
      </Router>
    </div>
  );
}

export default App;
