
const products = [
  // ==================== FASHION ====================

  {
    id: 1,
    name: "Classic Cotton T-Shirt",
    category: "Fashion",
    price: 25,
    oldPrice: 32,
    discount: 22,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=90",
    description:
      "A comfortable cotton T-shirt with a clean and timeless design.",
  },

  {
    id: 2,
    name: "Oversized Hoodie",
    category: "Fashion",
    price: 48,
    oldPrice: 60,
    discount: 20,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=90",
    description:
      "A soft oversized hoodie designed for comfort and a modern casual look.",
  },

  {
    id: 3,
    name: "Denim Jacket",
    category: "Fashion",
    price: 72,
    oldPrice: 90,
    discount: 20,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=90",
    description:
      "A versatile denim jacket that adds a classic touch to any casual outfit.",
  },

  {
    id: 4,
    name: "Slim Fit Jeans",
    category: "Fashion",
    price: 55,
    oldPrice: 70,
    discount: 21,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=90",
    description:
      "Modern slim-fit jeans made for a comfortable everyday fit.",
  },

  {
    id: 5,
    name: "Basic White Shirt",
    category: "Fashion",
    price: 38,
    oldPrice: 45,
    discount: 16,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=90",
    description:
      "A clean white shirt suitable for both casual and smart occasions.",
  },

  {
    id: 6,
    name: "Summer Dress",
    category: "Fashion",
    price: 65,
    oldPrice: 80,
    discount: 19,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=90",
    description:
      "A lightweight summer dress with a comfortable and elegant style.",
  },

  {
    id: 7,
    name: "Casual Cap",
    category: "Fashion",
    price: 18,
    oldPrice: 25,
    discount: 28,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=90",
    description:
      "A simple casual cap that completes an everyday streetwear look.",
  },

  {
    id: 8,
    name: "Leather Handbag",
    category: "Fashion",
    price: 85,
    oldPrice: 110,
    discount: 23,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=90",
    description:
      "A stylish handbag with a spacious design for everyday essentials.",
  },

  // ==================== SHOES ====================

  {
    id: 9,
    name: "Running Shoes",
    category: "Shoes",
    price: 65,
    oldPrice: 85,
    discount: 24,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=90",
    description:
      "Lightweight running shoes designed for comfort during daily activities.",
  },

  {
    id: 10,
    name: "Classic Sneakers",
    category: "Shoes",
    price: 58,
    oldPrice: 72,
    discount: 19,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=90",
    description:
      "Classic sneakers with a clean design for everyday outfits.",
  },

  {
    id: 11,
    name: "Sport Training Shoes",
    category: "Shoes",
    price: 75,
    oldPrice: 95,
    discount: 21,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=90",
    description:
      "Supportive training shoes designed for active lifestyles.",
  },

  {
    id: 12,
    name: "Casual Loafers",
    category: "Shoes",
    price: 62,
    oldPrice: 78,
    discount: 20,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1533867617858-e7b97f060509?auto=format&fit=crop&w=800&q=90",
    description:
      "Comfortable loafers combining a smart appearance with an easy fit.",
  },

  {
    id: 13,
    name: "Comfort Sandals",
    category: "Shoes",
    price: 35,
    oldPrice: 45,
    discount: 22,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=800&q=90",
    description:
      "Comfortable sandals designed for relaxed summer days.",
  },

  {
    id: 14,
    name: "Classic Boots",
    category: "Shoes",
    price: 95,
    oldPrice: 120,
    discount: 21,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1520639888713-7851133b3e35?auto=format&fit=crop&w=800&q=90",
    description:
      "Durable classic boots with a stylish design.",
  },

  {
    id: 15,
    name: "White Sport Shoes",
    category: "Shoes",
    price: 68,
    oldPrice: 82,
    discount: 17,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=90",
    description:
      "Clean white sport shoes designed for everyday comfort.",
  },

  {
    id: 16,
    name: "Street Sneakers",
    category: "Shoes",
    price: 59,
    oldPrice: 75,
    discount: 21,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=90",
    description:
      "Modern sneakers made for a stylish streetwear look.",
  },

  // ==================== ELECTRONICS ====================

  {
    id: 17,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 80,
    oldPrice: 100,
    discount: 20,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=90",
    description:
      "Wireless headphones offering clear sound and comfortable listening.",
  },

  {
    id: 18,
    name: "Smart Watch",
    category: "Electronics",
    price: 120,
    oldPrice: 150,
    discount: 20,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=90",
    description:
      "A modern smartwatch designed to keep you connected throughout your day.",
  },

  {
    id: 19,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 55,
    oldPrice: 70,
    discount: 21,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=90",
    description:
      "A compact Bluetooth speaker with powerful sound.",
  },

  {
    id: 20,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 28,
    oldPrice: 35,
    discount: 20,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=90",
    description:
      "A comfortable wireless mouse designed for smooth everyday use.",
  },

  {
    id: 21,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 75,
    oldPrice: 95,
    discount: 21,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=90",
    description:
      "A responsive keyboard designed for comfortable typing and productivity.",
  },

  {
    id: 22,
    name: "Laptop",
    category: "Electronics",
    price: 950,
    oldPrice: 1100,
    discount: 14,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=90",
    description:
      "A sleek laptop designed for work, study, and entertainment.",
  },

  {
    id: 23,
    name: "Smartphone",
    category: "Electronics",
    price: 650,
    oldPrice: 750,
    discount: 13,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=90",
    description:
      "A modern smartphone with a sleek and practical design.",
  },

  {
    id: 24,
    name: "Tablet",
    category: "Electronics",
    price: 420,
    oldPrice: 500,
    discount: 16,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=90",
    description:
      "A portable tablet suitable for work, study, and entertainment.",
  },

  // ==================== BEAUTY ====================

  {
    id: 25,
    name: "Face Care Set",
    category: "Beauty",
    price: 35,
    oldPrice: 45,
    discount: 22,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=90",
    description:
      "A complete face care set for a simple daily beauty routine.",
  },

  {
    id: 26,
    name: "Makeup Collection",
    category: "Beauty",
    price: 45,
    oldPrice: 60,
    discount: 25,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=90",
    description:
      "A versatile makeup collection for an elegant everyday look.",
  },

  {
    id: 27,
    name: "Lip Care Set",
    category: "Beauty",
    price: 18,
    oldPrice: 24,
    discount: 25,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=90",
    description:
      "A simple lip care set designed for smooth and comfortable lips.",
  },

  {
    id: 28,
    name: "Perfume Collection",
    category: "Beauty",
    price: 60,
    oldPrice: 75,
    discount: 20,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=90",
    description:
      "An elegant perfume collection featuring refined fragrances.",
  },

  {
    id: 29,
    name: "Skincare Products",
    category: "Beauty",
    price: 42,
    oldPrice: 55,
    discount: 24,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=90",
    description:
      "A curated skincare selection for a simple beauty routine.",
  },

  {
    id: 30,
    name: "Beauty Essentials",
    category: "Beauty",
    price: 38,
    oldPrice: 50,
    discount: 24,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=90",
    description:
      "Everyday beauty essentials selected for a polished look.",
  },

  // ==================== HOME ====================

  {
    id: 31,
    name: "Modern Sofa",
    category: "Home",
    price: 850,
    oldPrice: 1000,
    discount: 15,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=90",
    description:
      "A modern sofa designed for comfort and elegant interiors.",
  },

  {
    id: 32,
    name: "Modern Chair",
    category: "Home",
    price: 280,
    oldPrice: 350,
    discount: 20,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=90",
    description:
      "A stylish chair that fits beautifully into modern spaces.",
  },

  {
    id: 33,
    name: "Minimal Table",
    category: "Home",
    price: 320,
    oldPrice: 400,
    discount: 20,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=90",
    description:
      "A minimalist table designed for modern homes.",
  },

  {
    id: 34,
    name: "Decorative Lamp",
    category: "Home",
    price: 45,
    oldPrice: 60,
    discount: 25,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=90",
    description:
      "A decorative lamp that adds warmth and style to your room.",
  },

  {
    id: 35,
    name: "Home Decor",
    category: "Home",
    price: 35,
    oldPrice: 45,
    discount: 22,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=90",
    description:
      "Beautiful decor pieces designed to enhance your living space.",
  },

  // ==================== FOOD ====================

  {
    id: 36,
    name: "Classic Burger",
    category: "Food",
    price: 12,
    oldPrice: 15,
    discount: 20,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=90",
    description:
      "A delicious classic burger prepared with fresh ingredients.",
  },

  {
    id: 37,
    name: "Italian Pizza",
    category: "Food",
    price: 15,
    oldPrice: 19,
    discount: 21,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=90",
    description:
      "A delicious Italian-style pizza topped with flavorful ingredients.",
  },

  {
    id: 38,
    name: "Fresh Salad",
    category: "Food",
    price: 9,
    oldPrice: 12,
    discount: 25,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=90",
    description:
      "A fresh and colorful salad prepared with crisp vegetables.",
  },

  {
    id: 39,
    name: "Chocolate Dessert",
    category: "Food",
    price: 8,
    oldPrice: 10,
    discount: 20,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=90",
    description:
      "A delicious chocolate dessert perfect after a meal.",
  },

  {
    id: 40,
    name: "Fresh Fruit",
    category: "Food",
    price: 14,
    oldPrice: 18,
    discount: 22,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=90",
    description:
      "A fresh selection of fruit for a healthy everyday snack.",
  },
];

export default products;

