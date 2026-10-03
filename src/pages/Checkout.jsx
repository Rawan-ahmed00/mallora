
import { useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../context/useCart";

function Checkout() {
  const { cart } = useCart();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = cart.length > 0 ? 10 : 0;

  const grandTotal = subtotal + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const {
      fullName,
      email,
      phone,
      address,
      city,
      postalCode,
    } = formData;

    if (
      !fullName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !address.trim() ||
      !city.trim() ||
      !postalCode.trim()
    ) {
      alert("Please complete all shipping information.");
      return;
    }

    setOrderPlaced(true);
  };

  const handleImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=85";
  };

  if (cart.length === 0) {
    return (
      <main className="checkout-page">
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>

          <h1>Your Cart Is Empty</h1>

          <p>
            Add some products before completing your order.
          </p>

          <Link
            to="/products"
            className="continue-shopping-btn"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  if (orderPlaced) {
    return (
      <main className="checkout-page">
        <div className="order-success">
          <div className="success-icon">✓</div>

          <h1>Order Placed Successfully!</h1>

          <p>
            Thank you for shopping with MALLORA.
          </p>

          <p>
            Your order has been received successfully.
          </p>

          <div className="success-order-total">
            <span>Order Total</span>
            <strong>${grandTotal}</strong>
          </div>

          <Link
            to="/products"
            className="continue-shopping-btn"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page">
      <div className="checkout-header">
        <p className="section-small-title">
          MALLORA STORE
        </p>

        <h1>Checkout</h1>

        <p>
          Complete your order information.
        </p>
      </div>

      <div className="checkout-container">
        <form
          className="checkout-form"
          onSubmit={handlePlaceOrder}
        >
          <h2>Shipping Information</h2>

          <div className="form-group">
            <label htmlFor="fullName">
              Full Name
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              Phone
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">
              Address
            </label>

            <input
              id="address"
              name="address"
              type="text"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">
                City
              </label>

              <input
                id="city"
                name="city"
                type="text"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="postalCode">
                Postal Code
              </label>

              <input
                id="postalCode"
                name="postalCode"
                type="text"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <h2>Payment Method</h2>

          <div className="payment-option">
            <input
              type="radio"
              id="cashOnDelivery"
              name="payment"
              value="cash"
              defaultChecked
            />

            <label htmlFor="cashOnDelivery">
              Cash on Delivery
            </label>
          </div>

          <button
            type="submit"
            className="place-order-btn"
          >
            Place Order
          </button>
        </form>

        <div className="checkout-summary">
          <h2>Order Summary</h2>

          <div className="checkout-items">
            {cart.map((item) => (
              <div
                className="checkout-item"
                key={item.id}
              >
                <div className="checkout-item-image">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    onError={handleImageError}
                  />
                </div>

                <div className="checkout-item-info">
                  <span>{item.name}</span>

                  <small>
                    ${item.price} × {item.quantity}
                  </small>
                </div>

                <strong>
                  ${item.price * item.quantity}
                </strong>
              </div>
            ))}
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
        </div>
      </div>
    </main>
  );
}

export default Checkout;

