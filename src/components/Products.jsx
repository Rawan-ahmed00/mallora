
import { Link } from "react-router-dom";
import products from "../data/products";

function Products() {
  const featuredProducts = products.slice(0, 8);

  const handleImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=85";
  };

  return (
    <section className="products-section">
      <div className="section-header">
        <div>
          <p className="section-subtitle">Our Collection</p>
          <h2>Featured Products</h2>
        </div>

        <Link to="/products" className="view-all-btn">
          View All
        </Link>
      </div>

      <div className="products-grid">
        {featuredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <Link
              to={`/products/${product.id}`}
              className="product-image-link"
            >
              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  onError={handleImageError}
                />

                {product.discount > 0 && (
                  <span className="discount-badge">
                    -{product.discount}%
                  </span>
                )}
              </div>
            </Link>

            <div className="product-info">
              <span className="product-category">
                {product.category}
              </span>

              <Link
                to={`/products/${product.id}`}
                className="product-name"
              >
                {product.name}
              </Link>

              <div className="product-rating">
                <span className="rating-star">★</span>
                <span>{product.rating}</span>
              </div>

              <div className="product-price">
                <span className="current-price">
                  ${product.price}
                </span>

                {product.oldPrice && (
                  <span className="old-price">
                    ${product.oldPrice}
                  </span>
                )}
              </div>

              <Link
                to={`/products/${product.id}`}
                className="product-btn"
              >
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;