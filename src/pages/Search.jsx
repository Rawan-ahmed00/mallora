
import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleImageError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src =
      "https://dummyjson.com/image/500x500/f5f5f5/333333?text=MALLORA";
  };

  return (
    <main className="search-page">
      <div className="search-header">
        <p className="section-small-title">MALLORA STORE</p>

        <h1>Search Products</h1>

        <p>Find the product you are looking for.</p>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
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

                <strong>${product.price}</strong>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-results">
          <h2>No products found</h2>
          <p>Try searching for another product.</p>
        </div>
      )}
    </main>
  );
}

export default Search;

