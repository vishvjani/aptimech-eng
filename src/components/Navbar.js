import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setExpanded(false);

  return (
    <>
      {/* Top Info Bar — desktop only */}
      <div className="top-bar d-none d-lg-block">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <span className="top-bar-text d-flex align-items-center gap-2">
              <FaMapMarkerAlt size={9} color="#F5A623" />
              Vavdi Industrial Area, Rajkot-360004, Gujarat
            </span>
            <div className="d-flex gap-4 align-items-center">
              <a href="mailto:AptisMech.Corporation.llp@gmail.com">
                <FaEnvelope size={9} /> AptisMech.Corporation.llp@gmail.com
              </a>
              <a href="tel:+917046500555"><FaPhone size={9} /> +91 70465 00555</a>
              <a
                href="https://wa.me/918866616585?text=Hello%20Aptismech%2C%20I%20would%20like%20to%20request%20a%20quotation."
                target="_blank" rel="noreferrer"
                style={{ color: '#25D366' }}
              >
                <FaWhatsapp size={11} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`aptis-navbar navbar navbar-expand-lg${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <Link to="/" className="navbar-brand navbar-brand-wrapper" onClick={close}>
            <div className="brand-logo-box">AM</div>
            <div>
              <span className="brand-text-main">APTISMECH</span>
              <span className="brand-text-sub">Corporation LLP</span>
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setExpanded(p => !p)}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={`collapse navbar-collapse${expanded ? ' show' : ''}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
              {[
                { to: '/',         label: 'Home',     end: true },
                { to: '/about',    label: 'About'              },
                { to: '/products', label: 'Products'           },
                { to: '/services', label: 'Services'           },
              ].map(({ to, label, end }) => (
                <li className="nav-item" key={to}>
                  <NavLink
                    to={to} end={end} onClick={close}
                    className={({ isActive }) =>
                      `nav-link aptis-nav-link${isActive ? ' active' : ''}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
              <li className="nav-item">
                <NavLink to="/contact" onClick={close}
                  className="nav-link aptis-nav-link nav-cta-btn">
                  Get Quote
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
