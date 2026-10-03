
import { Link } from "react-router-dom";
import useWishlist from "../context/useWishlist";
import useCart from "../context/useCart";

function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  const handleImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src =
      "https://dummyjson.com/image/500x500/f5f5f5/333333?text=MALLORA";
  };

  return (
    <main className="wishlist-page">
      <div className="wishlist-header">
        <p className="section-small-title">
          MALLORA STORE
        </p>

        <h1>My Wishlist</h1>

        <p>
          Products you saved for later.
        </p>
      </div>

      {wishlist.length === 0 ? (
        <div className="empty-wishlist">
          <div>♡</div>

          <h2>Your wishlist is empty</h2>

          <p>
            Add products to your wishlist to see them here.
          </p>
        </div>
      ) : (
        <div className="products-grid">
          {wishlist.map((product) => (
            <div
              className="product-card"
              key={product.id}
            >
              <Link
                to={`/products/${product.id}`}
                className="product-link"
              >
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    onError={handleImageError}
                  />
                </div>

                <div className="product-info">
                  <span className="product-category">
                    {product.category}
                  </span>

                  <h3>{product.name}</h3>

                  <div className="product-price">
                    <strong>${product.price}</strong>

                    {product.oldPrice && (
                      <span className="old-price">
                        ${product.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              </Link>

              <div className="wishlist-card-actions">
                <button
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>

                <button
                  onClick={() =>
                    removeFromWishlist(product.id)
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Wishlist;

