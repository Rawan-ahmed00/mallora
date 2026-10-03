
import { Link, useNavigate } from "react-router-dom";
import useCart from "../context/useCart";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = cart.length > 0 ? 10 : 0;

  const grandTotal = subtotal + shipping;

  const handleImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src =
      "https://dummyjson.com/image/300x300/f5f5f5/333333?text=MALLORA";
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <main className="cart-page">
      <div className="cart-header">
        <p className="section-small-title">
          MALLORA STORE
        </p>

        <h1>Shopping Cart</h1>

        <p>Review your selected products.</p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>

          <h2>Your cart is empty</h2>

          <p>
            Add some products to your cart to see them here.
          </p>

          <Link
            to="/products"
            className="continue-shopping-btn"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <Link
                  to={`/products/${item.id}`}
                  className="cart-item-image"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    onError={handleImageError}
                  />
                </Link>

                <div className="cart-item-info">
                  <span className="cart-item-category">
                    {item.category}
                  </span>

                  <Link
                    to={`/products/${item.id}`}
                    className="cart-item-name"
                  >
                    {item.name}
                  </Link>

                  <span className="cart-item-unit-price">
                    ${item.price} each
                  </span>

                  <div className="quantity-control">
                    <button
                      type="button"
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="cart-item-side">
                  <strong className="cart-item-total">
                    ${item.price * item.quantity}
                  </strong>

                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Cart Summary</h2>

            <div className="summary-row">
              <span>Items</span>

              <span>
                {cart.reduce(
                  (total, item) =>
                    total + item.quantity,
                  0
                )}
              </span>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>

              <span>${subtotal}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>

              <span>${shipping}</span>
            </div>

            <div className="summary-row total-row">
              <span>Grand Total</span>

              <strong>${grandTotal}</strong>
            </div>

            <button
              type="button"
              className="checkout-btn"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>

            <Link
              to="/products"
              className="continue-shopping-link"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

export default Cart;

