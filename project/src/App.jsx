import "./App.css";

function App() {
  const categories = ["Split AC", "Window AC", "Inverter", "Smart AC", "Portable"];

  const acProducts = [
    {
      id: 1,
      name: "LG Dual Inverter AC",
      price: "?42,999",
      originalPrice: "?49,999",
      rating: 4.8,
      offers: ["Free installation", "2 years warranty"],
      image:
        "https://livpure.com/cdn/shop/articles/family-spending-time-together-outside_23-2148659464_e0d1fe68-5a26-488e-a17e-c1486f0d3d89-131818.jpg?v=1726725415",
    },
    {
      id: 2,
      name: "Samsung Smart AC",
      price: "?36,500",
      originalPrice: "?44,999",
      rating: 4.6,
      offers: ["10% instant discount", "Smart control"],
      image:
        "https://livpure.com/cdn/shop/articles/family-spending-time-together-outside_23-2148659464_e0d1fe68-5a26-488e-a17e-c1486f0d3d89-131818.jpg?v=1726725415",
    },
    {
      id: 3,
      name: "Voltas Split AC",
      price: "?39,999",
      originalPrice: "?45,999",
      rating: 4.5,
      offers: ["Summer sale", "Energy saving"],
      image:
        "https://livpure.com/cdn/shop/articles/family-spending-time-together-outside_23-2148659464_e0d1fe68-5a26-488e-a17e-c1486f0d3d89-131818.jpg?v=1726725415",
    },
    {
      id: 4,
      name: "Daikin Premium AC",
      price: "?48,999",
      originalPrice: "?59,999",
      rating: 4.9,
      offers: ["Premium cooling", "Low noise"],
      image:
        "https://livpure.com/cdn/shop/articles/family-spending-time-together-outside_23-2148659464_e0d1fe68-5a26-488e-a17e-c1486f0d3d89-131818.jpg?v=1726725415",
    },
  ];

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <span className="logo">AC Bazaar</span>
          <span className="tagline">Best AC deals — fast delivery</span>
        </div>

        <div className="search-bar">
          <input type="search" placeholder="Search for air conditioners, brands, offers..." />
          <button>Search</button>
        </div>

        <div className="top-actions">
          <button className="icon-button">Cart</button>
          <button className="icon-button">Wishlist</button>
          <button className="login-button">Sign In</button>
        </div>
      </header>

      <nav className="category-bar">
        {categories.map((category) => (
          <a href="#" key={category}>{category}</a>
        ))}
      </nav>

      <section className="hero-banner">
        <div className="hero-copy">
          <h1>Find Your Perfect AC for Home & Office</h1>
          <p>Compare top brands, get instant coupons, and enjoy quick delivery across India.</p>
          <div className="hero-buttons">
            <button className="primary">Shop Now</button>
            <button className="secondary">Explore Offers</button>
          </div>
        </div>
      </section>

      <section className="offer-strip">
        <div className="offer-item">
          <strong>UP TO 50% OFF</strong>
          <span>Seasonal sale on top selling ACs</span>
        </div>
        <div className="offer-item">
          <strong>FREE INSTALLATION</strong>
          <span>On select models</span>
        </div>
        <div className="offer-item">
          <strong>NO COST EMI</strong>
          <span>Available on all major cards</span>
        </div>
      </section>

      <section className="product-section">
        <div className="section-header">
          <div>
            <h2>Featured Air Conditioners</h2>
            <p>Top-rated ACs with best value and trusted delivery.</p>
          </div>
          <button className="view-all">View All</button>
        </div>

        <div className="products-grid">
          {acProducts.map((ac) => (
            <article className="product-card" key={ac.id}>
              <div className="product-image">
                <img src={ac.image} alt={ac.name} />
              </div>
              <div className="product-info">
                <h3>{ac.name}</h3>
                <div className="rating">? {ac.rating} | 1.2k+ ratings</div>
                <p className="price">
                  <span className="current">{ac.price}</span>
                  <span className="original">{ac.originalPrice}</span>
                </p>
                <ul className="offer-list">
                  {ac.offers.map((offer) => (
                    <li key={offer}>{offer}</li>
                  ))}
                </ul>
                <div className="product-actions">
                  <button>Add to Cart</button>
                  <button className="outline">View Details</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <div>
          <h3>AC Bazaar</h3>
          <p>Shop premium air conditioners, enjoy fast delivery and easy returns.</p>
        </div>
        <div className="footer-links">
          <a href="#">Help Center</a>
          <a href="#">Warranty</a>
          <a href="#">Delivery Info</a>
          <a href="#">Terms</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
