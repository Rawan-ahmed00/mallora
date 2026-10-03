
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import SpecialOffers from "../components/SpecialOffers";
import Products from "../components/Products";

function Home() {
  return (
    <main className="home-page">
      <Hero />

      <section className="home-section">
        <Categories />
      </section>

      <section className="home-section">
        <SpecialOffers />
      </section>

      <section className="home-section">
        <Products />
      </section>
    </main>
  );
}

export default Home;

