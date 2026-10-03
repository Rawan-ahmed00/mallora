
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-small-title">
          WELCOME TO MALLORA
        </span>

        <h1 className="hero-title">
          <span>Everything You Need,</span>
          <span>All In One Place</span>
        </h1>

        <p className="hero-description">
          Discover fashion, electronics, food, beauty products,
          home essentials, and everything you need for everyday life.
        </p>

        <div className="hero-actions">
          <Link to="/products" className="shop-btn">
            Shop Now
          </Link>

          <Link to="/products" className="hero-secondary-btn">
            Explore Collection
          </Link>
        </div>
      </div>

      <div className="hero-visual">
        <img
          src="/mallora-hero.png.png"
          alt="MALLORA Shopping"
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default Hero;

