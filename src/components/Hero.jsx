function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-tag">BUSINESS CONSULTING & SOLUTIONS</p>

        <h1>
          Building Businesses.
          <br />
          Creating Opportunities.
        </h1>

        <p className="hero-description">
          We help businesses grow with smart strategies, innovative
          solutions and digital transformation.
        </p>

        <div className="hero-buttons">
          <a href="#services" className="primary-btn">
            Explore Services
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Us
          </a>
        </div>

      </div>

      <div className="hero-image">
        <img
          src="/images/img5.jpeg"
          alt="Business team working together"
        />
      </div>

    </section>
  );
}

export default Hero;