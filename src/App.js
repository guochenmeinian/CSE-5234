import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import About from './features/about';
import Cart from './features/cart';
import CategoriesPanel from './features/categories/CategoriesPanel';
import ItemsPanel from './features/items/ItemsPanel';
import SingleItemPanel from './features/items/SingleItemPanel';
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
            <Route path="/categories" element={<CategoriesPanel />} />
            <Route path="/items" element={<ItemsPanel />} />
            <Route path="/items/:id" element={<SingleItemPanel />} />
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
