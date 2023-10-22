import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import PurchasePanel from './purchase/PurchasePanel';
import PaymentEntryPanel from './payment/PaymentEntryPanel';
import ShippingEntryPanel from './shipping/ShippingEntryPanel';
import ViewOrderPanel from './order/ViewOrderPanel';
import ViewConfirmationPanel from './confirmation/ViewConfirmationPanel';
import SampleFooter from "./components/footer";
import Home from './home';
import About from './about';
import Cart from './cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/purchase' element={<PurchasePanel />} />
            <Route path='/purchase/paymentEntry' element={<PaymentEntryPanel />} />
            <Route path='/purchase/shippingEntry' element={<ShippingEntryPanel />} />
            <Route path='/purchase/viewOrder' element={<ViewOrderPanel />} />
            <Route path='/purchase/viewConfirmation' element={<ViewConfirmationPanel />} />
          </Routes>
        </div>
        <SampleFooter />
      </Router>
    </div>
  );
}

export default App;
