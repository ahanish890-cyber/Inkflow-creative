import { useState } from 'react'
import { Link } from 'react-router-dom'
import inkflowLogo from '../assets/inkflow-logo.png'
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
          <Link to="/"><img src={inkflowLogo} alt="Inkflow Creative" className="logo-img" /></Link>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
          <a href="#services" className="nav-link">Products and Services</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
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
