# MALLORA Store 🛍️

MALLORA is a modern front-end e-commerce website built with React and Vite.

The project provides a complete shopping experience with product browsing, categories, search, wishlist, cart management, checkout, authentication, and responsive design.

## 🚀 Live Features

* Modern responsive e-commerce interface
* Home page with hero section
* Product categories
* Featured products
* Special offers
* Products listing page
* Category filtering
* Price sorting
* Product details page
* Product search
* Wishlist management
* Shopping cart
* Quantity controls
* Order total calculation
* Checkout page
* Cash on Delivery demo
* Login and Register pages
* LocalStorage data persistence
* Responsive design for desktop, tablet, and mobile

## 🛠️ Technologies Used

* React
* JavaScript
* CSS3
* React Router
* Context API
* LocalStorage
* Vite
* Git & GitHub

## 📁 Project Structure

```text
mallora/
│
├── public/
│   └── mallora-hero.png.png
│
├── src/
│   ├── components/
│   │   ├── Categories.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Products.jsx
│   │   └── SpecialOffers.jsx
│   │
│   ├── context/
│   │   ├── CartProvider.jsx
│   │   ├── WishlistProvider.jsx
│   │   ├── useCart.js
│   │   └── useWishlist.js
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Cart.jsx
│   │   ├── Categories.jsx
│   │   ├── Checkout.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Products.jsx
│   │   ├── Register.jsx
│   │   ├── Search.jsx
│   │   └── Wishlist.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── index.css
│
├── package.json
├── package-lock.json
└── README.md
```

## 🛒 Main Pages

### Home

Contains the main hero section, categories, special offers, and featured products.

### Products

Displays all products with category filtering and price sorting.

### Product Details

Shows the selected product with image, price, rating, description, wishlist, and cart actions.

### Search

Allows users to search for products by name.

### Wishlist

Users can save products for later and move them to the shopping cart.

### Cart

Users can increase or decrease quantities, remove products, and view the subtotal, shipping, and total price.

### Checkout

Provides shipping information and a demo Cash on Delivery checkout flow.

### Authentication

Includes Login and Register pages using browser LocalStorage for this front-end demo.

## 💾 Data Persistence

MALLORA uses `localStorage` to preserve:

* Shopping cart
* Wishlist
* Registered demo account
* Login state

## 📱 Responsive Design

The interface is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

## ⚙️ Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Open the project folder:

```bash
cd mallora
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open the local development URL shown by Vite.

## 🏗️ Production Build

To create a production build:

```bash
npm run build
```

The production files are generated inside:

```text
dist/
```

## ⚠️ Project Scope

This project is a front-end e-commerce demo.

It does not include:

* Real payment processing
* Real backend APIs
* Real database
* Real user authentication
* Real order management

These features can be connected to a backend in a future version.

## 🎯 Project Goal

The goal of MALLORA is to demonstrate practical React development skills through a complete e-commerce interface with reusable components, routing, state management, responsive styling, and browser data persistence.

## 👩‍💻 Developer

**Rawan Ahmed**

Front-End Developer | React Developer

---

⭐ Built with React & Vite
