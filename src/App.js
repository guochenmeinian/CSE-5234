import { React } from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import About from './about';
import Cart from './pages/cart';
import Product from './pages/product';
import Payment from './pages/payment';
import Shipping from './pages/shipping';
import OrderSummary from './pages/orderSummary';
import Confirmation from './pages/confirmation';
import AppFooter from './components/footer';
import Admin from './pages/admin';
import Home from './home';
import Purchase from './pages/purchase';
import LoginRegister from './pages/loginRegister';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from "./customTheme"
import { ProductProvider } from './context/productContext';
import { CartProvider } from './context/cartContext';


function App() {

  return (
    <Router>
      <Navbar />
      <ThemeProvider theme={customTheme}>
        <ProductProvider>
          <CartProvider>
            <br />
            <Container sx={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <Routes>
                <Route path="/" element={<Navigate replace to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/admin" element={<Admin />} />          
                <Route path="/purchase" element={<Purchase />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/purchase/payment" element={<Payment />} />
                <Route
                  path="/purchase/shipping"
                  element={<Shipping />}
                />
                <Route
                  path="/purchase/confirmation"
                  element={<Confirmation />}
                />
                <Route path="/purchase/summary" element={<OrderSummary />} />
                <Route path="/login" element={<LoginRegister />} />
              </Routes>
            </Container>
          </CartProvider>
          <br />
        </ProductProvider>
      </ThemeProvider>
      <AppFooter />
    </Router >
  );
}

export default App;
