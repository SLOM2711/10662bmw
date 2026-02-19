import { useState } from 'react'
import PropTypes from 'prop-types'

const Header = ({ activeSection, isMobileMenuOpen, toggleMobileMenu, visitCount }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  // Scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50)
    })
  }

  const navItems = [
    { id: 'models', label: 'All Models', href: '#models' },
    { id: 'electric', label: 'Electric', href: '#electric' },
    { id: 'find', label: 'Shop Online', href: '#find' },
    { id: 'more', label: 'More BMW', href: '#more' }
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    if (isMobileMenuOpen) {
      toggleMobileMenu()
    }
  }

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo">BMW</div>
          
          <nav className="nav-menu desktop-nav">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-icons">
            <div className="search-icon">🔍</div>
            <div className="user-icon">👤</div>
            <div className="visit-counter" title="Your visit count">
              🎯 {visitCount}
            </div>
            <div className="menu-icon" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? '✕' : '☰'}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={activeSection === item.id ? 'active' : ''}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div className="menu-overlay" onClick={toggleMobileMenu}></div>
      )}
    </>
  )
}

Header.propTypes = {
  activeSection: PropTypes.string.isRequired,
  isMobileMenuOpen: PropTypes.bool.isRequired,
  toggleMobileMenu: PropTypes.func.isRequired,
  visitCount: PropTypes.number.isRequired
}

export default Header
