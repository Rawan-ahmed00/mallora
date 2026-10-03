
import { NavLink, Link } from "react-router-dom";
import useWishlist from "../context/useWishlist";
import useCart from "../context/useCart";

function Navbar() {
  const { wishlist } = useWishlist();
  const { cartCount } = useCart();

  const getNavClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <Link to="/" className="logo">
          MALLORA
        </Link>

        <ul className="nav-links">
          <li>
            <NavLink to="/" className={getNavClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/categories" className={getNavClass}>
              Categories
            </NavLink>
          </li>

          <li>
            <NavLink to="/products" className={getNavClass}>
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={getNavClass}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={getNavClass}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="nav-actions">
          <Link to="/search" className="nav-icon" aria-label="Search">
            🔍
          </Link>

          <Link
            to="/wishlist"
            className="nav-icon nav-icon-with-count"
            aria-label="Wishlist"
          >
            ♡
            <span className="nav-count">
              {wishlist.length}
            </span>
          </Link>

          <Link
            to="/cart"
            className="nav-icon nav-icon-with-count"
            aria-label="Cart"
          >
            🛒
            <span className="nav-count">
              {cartCount}
            </span>
          </Link>

          <Link to="/login" className="login-btn">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

