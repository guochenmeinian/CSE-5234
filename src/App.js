import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Purchase from './components/purchase';
import PaymentEntry from './components/paymentEntry';
import ShippingEntry from './components/shippingEntry';
import ViewOrder from './components/viewOrder';
import ViewConfirmation from './components/viewConfirmation';
import SampleFooter from "./components/footer";
import Home from './components/home';
import About from './components/about';
import Cart from './components/cart';


function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/purchase' element={<Purchase/>} />
            <Route path='/purchase/paymentEntry' element={<PaymentEntry/>} />
            <Route path='/purchase/shippingEntry' element={<ShippingEntry/>} />
            <Route path='/purchase/viewOrder' element={<ViewOrder/>} />
            <Route path='/purchase/viewConfirmation' element={<ViewConfirmation/>} />
          </Routes>
        </div>
        <SampleFooter />
      </Router>
    </div>
  );
  
}

export default App;


