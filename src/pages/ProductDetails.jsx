
import { useParams } from "react-router-dom";
import useCart from "../context/useCart";
import useWishlist from "../context/useWishlist";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const handleImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src =
      "https://dummyjson.com/image/600x600/f5f5f5/333333?text=MALLORA";
  };

  if (!product) {
    return (
      <main className="page">
        <h1>Product Not Found</h1>

        <p>
          The product you are looking for does not exist.
        </p>
      </main>
    );
  }

  const toggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <main className="product-details-page">
      <div className="product-details">
        <div className="product-details-image">
          <img
            src={product.image}
            alt={product.name}
            onError={handleImageError}
          />

          {product.discount > 0 && (
            <span className="discount-badge">
              -{product.discount}%
            </span>
          )}
        </div>

        <div className="product-details-info">
          <span className="product-details-category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <div className="product-details-rating">
            <span>★</span>
            <span>{product.rating}</span>
          </div>

          <div className="product-details-price-box">
            <strong className="product-details-price">
              ${product.price}
            </strong>

            {product.oldPrice && (
              <span className="product-details-old-price">
                ${product.oldPrice}
              </span>
            )}
          </div>

          <p className="product-details-description">
            {product.description}
          </p>

          <div className="details-actions">
            <button
              className="details-add-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>

            <button
              className="details-wishlist-btn"
              onClick={toggleWishlist}
            >
              {isInWishlist(product.id)
                ? "❤️ Remove from Wishlist"
                : "♡ Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;

