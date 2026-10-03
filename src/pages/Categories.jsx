const categories = [
  {
    id: 1,
    name: "Clothing",
    icon: "👕",
    description: "Fashion for everyone",
  },
  {
    id: 2,
    name: "Electronics",
    icon: "💻",
    description: "Latest technology",
  },
  {
    id: 3,
    name: "Food",
    icon: "🍔",
    description: "Fresh food and groceries",
  },
  {
    id: 4,
    name: "Shoes",
    icon: "👟",
    description: "Step in style",
  },
  {
    id: 5,
    name: "Beauty",
    icon: "💄",
    description: "Beauty and skincare",
  },
  {
    id: 6,
    name: "Home",
    icon: "🏠",
    description: "Everything for your home",
  },
];

function Categories() {
  return (
    <main className="categories-page">
      <div className="categories-page-header">
        <p className="section-small-title">MALLORA STORE</p>

        <h1>Shop By Category</h1>

        <p>
          Explore our wide range of shopping categories.
        </p>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <div className="category-card" key={category.id}>
            <div className="category-icon">
              {category.icon}
            </div>

            <h3>{category.name}</h3>

            <p>{category.description}</p>

            <button>View Products</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Categories;