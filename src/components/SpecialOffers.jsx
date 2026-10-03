
import { Link } from "react-router-dom";
import products from "../data/products";

function SpecialOffers() {
  const offers = products
    .filter((product) => product.discount > 0)
    .slice(0, 3);

  const handleImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=85";
  };

  return (
    <section className="special-offers">
      <div className="offers-header">
        <p className="section-small-title">
          MALLORA OFFERS
        </p>

        <h2>Special Offers</h2>

        <p>
          Discover exclusive deals and enjoy more for less.
        </p>
      </div>

      <div className="offers-grid">
        {offers.map((offer) => (
          <div
            className="offer-card"
            key={offer.id}
          >
            <span className="discount-badge">
              {offer.discount}% OFF
            </span>

            <Link
              to={`/products/${offer.id}`}
              className="offer-link"
            >
              <div className="offer-image">
                <img
                  src={offer.image}
                  alt={offer.name}
                  loading="lazy"
                  onError={handleImageError}
                />
              </div>

              <div className="offer-info">
                <h3>{offer.name}</h3>

                <div className="offer-price">
                  <span className="old-price">
                    ${offer.oldPrice}
                  </span>

                  <strong>${offer.price}</strong>
                </div>
              </div>
            </Link>

            <div className="offer-button-container">
              <Link
                to={`/products/${offer.id}`}
                className="offer-shop-btn"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpecialOffers;

