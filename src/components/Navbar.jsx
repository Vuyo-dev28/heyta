import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Industries', href: '#industries' },
    { name: 'Partners', href: '#partners' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'nav-scrolled' : 'nav-transparent'}`}>
        <div className="nav-inner">
          <div className="nav-container">
            {/* Logo Section */}
            <div className="nav-logo-group">
              <img src="/heyta_logo.png" alt="Heyta Telecoms" className="logo-img" />
              <div className="nav-logo-text">
                <span className="heyta">Heyta</span>
                <span className="telecoms">Telecoms</span>
              </div>
            </div>

            {/* Desktop Links (Right Aligned) */}
            <div className="desktop-links">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="nav-link">
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-header">
            <div className="nav-logo-group">
              <img src="/heyta_logo.png" alt="Heyta" className="logo-img-sm" />
              <div className="nav-logo-text-sm">
                <span className="heyta">Heyta</span>
                <span className="telecoms">Telecoms</span>
              </div>
            </div>
            <button 
              className="close-button"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
          </div>

          <div className="mobile-links-stack">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="mobile-menu-link" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 1200px;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 9999px;
        }
        .nav-transparent {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .nav-scrolled {
          background: rgba(50, 50, 50, 0.95);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .logo-img {
          height: 40px;
          width: auto;
        }
        .nav-logo-text {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }
        .heyta {
          color: white;
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        .telecoms {
          color: #E11D48;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .desktop-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        @media (max-width: 1024px) {
          .desktop-links { display: none; }
        }

        .nav-link {
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.95rem;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: white;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        @media (max-width: 1024px) {
          .mobile-toggle { display: block; }
        }

        /* Mobile Menu */
        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          background: #000000;
          z-index: 2000;
          display: flex;
          flex-direction: column;
          padding: 2rem;
          animation: slideIn 0.3s ease-out;
        }
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4rem;
        }
        .logo-img-sm { height: 32px; }
        .nav-logo-text-sm .heyta, .nav-logo-text-sm .telecoms {
          font-size: 1.25rem;
        }
        .close-button {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        
        .mobile-links-stack {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          flex: 1;
        }
        .mobile-menu-link {
          color: white;
          font-size: 2.25rem;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s ease;
        }
        .mobile-menu-link:hover {
          color: #E11D48;
          transform: translateX(10px);
        }



        .nav-inner {
          width: 100%;
          padding: 1rem 2rem;
        }
        @media (max-width: 1024px) {
          .navbar {
            top: 16px;
            width: 92%;
          }
        }
        @media (max-width: 768px) {
          .nav-inner {
            padding: 0.8rem 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
