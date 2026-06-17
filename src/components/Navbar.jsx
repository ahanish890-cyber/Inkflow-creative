import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronDown, Zap, Printer, Shirt } from 'lucide-react'
import './Navbar.css'

const PRODUCT_CATEGORIES = [
  {
    id: 'queue-management',
    name: 'Queue Management',
    path: '/products/queue-management'
  },
  {
    id: 'web-printing',
    name: 'Web Printing',
    path: '/products/web-printing'
  },
  {
    id: 'sports-jersey',
    name: 'Sports Jersey',
    path: '/products/sports-jersey'
  }
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState(null)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSubmenu = (submenu) => {
    setOpenSubmenu(openSubmenu === submenu ? null : submenu)
  }

  const handleCategoryClick = (path) => {
    navigate(path)
    setIsMenuOpen(false)
    setOpenSubmenu(null)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/"><img src="/inkflow-logo.jpeg" alt="Inkflow Creative" className="logo-img" /></Link>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          
          <Link to="/about" className="nav-link">About Us</Link>

          {/* Products Dropdown Menu */}
          <div className="nav-dropdown">
            <button 
              className="nav-link dropdown-trigger"
              onClick={() => toggleSubmenu('products')}
            >
              Products
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openSubmenu === 'products' ? 'rotate-180' : ''}`} />
            </button>
            {openSubmenu === 'products' && (
              <div className="dropdown-content premium-categories-menu">
                {PRODUCT_CATEGORIES.map((category) => (
                  <button
                    key={category.id}
                    className="category-menu-item"
                    onClick={() => handleCategoryClick(category.path)}
                  >
                    <div className="category-menu-icon">
                      {category.icon}
                    </div>
                    <div className="category-menu-info">
                      <div className="category-menu-name">{category.name}</div>
                      <div className="category-menu-desc">{category.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" className="nav-link">Contact Us</Link>
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
