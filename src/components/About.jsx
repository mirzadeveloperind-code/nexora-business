function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-image">
        <img
          src="/images/abt1.jpeg"
          alt="Business team collaborating in an office"
        />
      </div>

      <div className="about-content">

        <p className="about-tag">ABOUT NEXORA</p>

        <h2>We Help Businesses Grow and Succeed</h2>

        <p className="about-description">
          We believe every business deserves the right strategy,
          tools and support to reach its full potential.
          Our goal is to help companies grow, improve and
          build a stronger future.
        </p>

        <p className="about-description">
          From business consulting to digital solutions,
          we work closely with our clients to understand
          their needs and deliver practical results.
        </p>

        <a href="#contact" className="about-button">
          Discover Our Story →
        </a>

      </div>

      <div className="about-stats">

        <div className="stat">
          <h3>10+</h3>
          <p>Years of Experience</p>
        </div>

        <div className="stat">
          <h3>150+</h3>
          <p>Projects Completed</p>
        </div>

        <div className="stat">
          <h3>50+</h3>
          <p>Happy Clients</p>
        </div>

      </div>

    </section>
  );
}

export default About;