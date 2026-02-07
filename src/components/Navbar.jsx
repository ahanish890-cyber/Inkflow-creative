import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/inkflow-logo.png" alt="Inkflow Creative" className="logo-img" />
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#services" className="nav-link">Products and Services</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#faqs" className="nav-link">FAQs</a>
        </div>

        <button className="nav-cta">Request a Quote</button>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
