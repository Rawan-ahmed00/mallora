
import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    {
      id: 1,
      name: "Clothing",
      filter: "Fashion",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=90",
      description: "Fashion for everyone",
    },
    {
      id: 2,
      name: "Electronics",
      filter: "Electronics",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=800&q=90",
      description: "Latest technology",
    },
    {
      id: 3,
      name: "Food",
      filter: "Food",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=90",
      description: "Fresh food & groceries",
    },
    {
      id: 4,
      name: "Shoes",
      filter: "Shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=90",
      description: "Step in style",
    },
    {
      id: 5,
      name: "Beauty",
      filter: "Beauty",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=90",
      description: "Beauty & skincare",
    },
    {
      id: 6,
      name: "Home",
      filter: "Home",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=90",
      description: "Everything for your home",
    },
  ];

  return (
    <section className="categories">
      <div className="categories-header">
        <p className="section-small-title">
          SHOP BY CATEGORY
        </p>

        <h2>Explore Our Categories</h2>

        <p>
          Find everything you need from our wide range of categories.
        </p>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <div
            className="category-card"
            key={category.id}
          >
            <div className="category-image">
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div className="category-content">
              <h3>{category.name}</h3>

              <p>{category.description}</p>

              <Link
                to={`/products?category=${encodeURIComponent(
                  category.filter
                )}`}
                className="category-explore-btn"
              >
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;

