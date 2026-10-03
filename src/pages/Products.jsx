
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useCart from "../context/useCart";
import useWishlist from "../context/useWishlist";
import products from "../data/products";

function Products() {
  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get("category") || "All";

  const [sort, setSort] = useState("default");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;

    if (selectedCategory === "All") {
      setSearchParams({});
    } else {
      setSearchParams({
        category: selectedCategory,
      });
    }
  };

  const filteredProducts = [...products]
    .filter((product) => {
      if (categoryFromUrl === "All") {
        return true;
      }

      return product.category === categoryFromUrl;
    })
    .sort((a, b) => {
      if (sort === "low-high") {
        return a.price - b.price;
      }

      if (sort === "high-low") {
        return b.price - a.price;
      }

      return 0;
    });

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src =
      "https://dummyjson.com/image/500x500/f5f5f5/333333?text=MALLORA";
  };

  return (
    <main className="products-page">
      <div className="products-page-header">
        <p className="section-small-title">
          MALLORA STORE
        </p>

        <h1>
          {categoryFromUrl === "All"
            ? "All Products"
            : `${categoryFromUrl} Products`}
        </h1>

        <p>
          Discover our collection of products from different categories.
        </p>
      </div>

      <div className="products-filters">
        <div className="filter-group">
          <label htmlFor="category-filter">
            Category
          </label>

          <select
            id="category-filter"
            value={categoryFromUrl}
            onChange={handleCategoryChange}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="sort-filter">
            Sort By
          </label>

          <select
            id="sort-filter"
            value={sort}
            onChange={(e) =>
              setSort(e.target.value)
            }
          >
            <option value="default">
              Default
            </option>

            <option value="low-high">
              Price: Low to High
            </option>

            <option value="high-low">
              Price: High to Low
            </option>
          </select>
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div
            className="product-card"
            key={product.id}
          >
            <button
              className="wishlist-btn"
              onClick={() =>
                toggleWishlist(product)
              }
              aria-label={`Add ${product.name} to wishlist`}
            >
              {isInWishlist(product.id)
                ? "❤️"
                : "♡"}
            </button>

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

                {product.discount > 0 && (
                  <span className="discount-badge">
                    -{product.discount}%
                  </span>
                )}
              </div>

              <div className="product-info">
                <span className="product-category">
                  {product.category}
                </span>

                <h3>{product.name}</h3>

                <div className="product-price">
                  <strong>
                    ${product.price}
                  </strong>

                  {product.oldPrice && (
                    <span className="old-price">
                      ${product.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            </Link>

            <div className="product-bottom">
              <button
                onClick={() =>
                  addToCart(product)
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-results">
          <h2>No products found</h2>

          <p>
            Try selecting another category.
          </p>
        </div>
      )}
    </main>
  );
}

export default Products;

