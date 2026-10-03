
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";

import CartProvider from "./context/CartProvider";
import WishlistProvider from "./context/WishlistProvider";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/products" element={<Products />} />

            <Route
              path="/products/:id"
              element={<ProductDetails />}
            />

            <Route
              path="/categories"
              element={<Categories />}
            />

            <Route path="/search" element={<Search />} />

            <Route
              path="/wishlist"
              element={<Wishlist />}
            />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/cart" element={<Cart />} />

            <Route
              path="/checkout"
              element={<Checkout />}
            />

            <Route path="/login" element={<Login />} />

            <Route
              path="/register"
              element={<Register />}
            />
          </Routes>

          <Footer />
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

