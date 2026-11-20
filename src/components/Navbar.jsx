function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        NEXORA<span>.</span>
      </div>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
      </nav>

      <a href="#contact" className="nav-button">
        Contact Us
      </a>
    </header>
  );
}

export default Navbar;