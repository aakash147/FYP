import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";

import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import PoloShirts from "./components/PoloShirts/PoloShirts";
import Tshirts from "./components/Tshirts/Tshirts";
import Register from "./components/Register/RegisterUser";
import Cart from "./components/Cart/Cart";
import PrivateRoute from "./components/routes/PrivateRoutes/AdminPrivateRoute";
import PublicRoute from "./components/routes/PublicRoutes/PublicRoute";
import Order from "./components/Order";
import VDR from "./components/VDR/VDR";
import AfterTry from "./components/AfterTryShop/AfterTryShopping";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="/polo-shirts"
            element={
              <PublicRoute>
                <PoloShirts />
              </PublicRoute>
            }
          />
          <Route
            path="/t-shirts"
            element={
              <PublicRoute>
                <Tshirts />
              </PublicRoute>
            }
          />

          <Route
            path="/soft-room"
            element={
              <PublicRoute>
                <VDR />
              </PublicRoute>
            }
          />
          <Route
            path="/after-try-shopping"
            element={
              <PublicRoute>
                <AfterTry />
              </PublicRoute>
            }
          />
          <Route
            path="/order"
            element={
              <PrivateRoute>
                <Order />
              </PrivateRoute>
            }
          />
          <Route
            path="/registeration"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/shopping-cart"
            element={
              <PublicRoute>
                <Cart />
              </PublicRoute>
            }
          />
        </Routes>

        <Footer />
        <ScrollTop />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
