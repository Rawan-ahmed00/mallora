
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            MALLORA
          </Link>

          <p>
            Everything you need, all in one place.
            Discover products you love and shop with confidence.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="footer-column">
          <h3>Customer</h3>

          <Link to="/search">Search</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <h3>Account</h3>

          <Link to="/login">Login</Link>
          <Link to="/register">Create Account</Link>
          <Link to="/checkout">Checkout</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} MALLORA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;


