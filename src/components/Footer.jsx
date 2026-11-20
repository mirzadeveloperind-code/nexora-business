function Footer() {
  return (
    <footer className="footer" id="footer">

      <div className="footer-container">

        {/* Company information */}
        <div className="footer-about">
          <a href="#home" className="footer-logo">
            NEXORA<span>.</span>
          </a>

          <p>
            Helping businesses grow through innovative strategies,
            digital solutions and meaningful partnerships.
          </p>

          <div className="footer-socials">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">in</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">ig</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">fb</a>
          </div>
        </div>

        {/* Quick links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Our Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Services */}
        <div className="footer-links">
          <h3>Our Services</h3>

          <a href="#services">Business Strategy</a>
          <a href="#services">Digital Solutions</a>
          <a href="#services">Marketing</a>
          <a href="#services">Consulting</a>
        </div>

        {/* Contact details */}
        <div className="footer-contact">
          <h3>Contact Us</h3>

          <p>Hyderabad, India</p>
          <p>
            <a href="mailto:hello@nexora.com">hello@nexora.com</a>
          </p>
          <p>
            <a href="tel:+910000000000">+91 00000 00000</a>
          </p>
        </div>

      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        <p>© 2026 Nexora. All rights reserved.</p>
        <p>Designed & Developed with care.</p>
      </div>

    </footer>
  );
}

export default Footer;