import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  const navLinks = [
    { to: '/',         label: 'Home',     end: true },
    { to: '/about',    label: 'About'              },
    { to: '/products', label: 'Products'           },
    { to: '/services', label: 'Services'           },
    { to: '/contact',  label: 'Get Quote', cta: true },
  ];

  return (
    <>
      {/* ── Top Info Bar (desktop only) ── */}
      <div className="top-bar d-none d-lg-block">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <span className="top-bar-text d-flex align-items-center gap-2">
              <FaMapMarkerAlt size={10} color="#F5A623" />
              Vavdi Industrial Area, Rajkot-360004, Gujarat
            </span>
            <div className="d-flex gap-4 align-items-center">
              <a href="mailto:AptisMech.Corporation.llp@gmail.com">
                <FaEnvelope size={10} /> AptisMech.Corporation.llp@gmail.com
              </a>
              <a href="tel:+917046500555"><FaPhone size={10} /> +91 70465 00555</a>
              <a
                href="https://wa.me/918866616585?text=Hello%20Aptismech%2C%20I%20would%20like%20to%20request%20a%20quotation."
                target="_blank" rel="noreferrer"
                style={{ color: '#25D366' }}
              >
                <FaWhatsapp size={12} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <nav className={`aptis-navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="aptis-navbar-inner container">

          {/* Brand with Official 3D Logo */}
          <Link to="/" className="navbar-brand-wrapper" onClick={close}>
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="AptisMech Corporation LLP"
              className="brand-logo-img"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.nextElementSibling) {
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }
              }}
            />
            <div className="brand-logo-fallback" style={{ display: 'none' }}>AM</div>
            <div>
              <span className="brand-text-main">APTISMECH</span>
              <span className="brand-text-sub">Corporation LLP</span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="desktop-nav">
            {navLinks.map(({ to, label, end, cta }) => (
              <li key={to}>
                <NavLink
                  to={to} end={end}
                  className={({ isActive }) =>
                    `aptis-nav-link${cta ? ' nav-cta-btn' : ''}${isActive && !cta ? ' active' : ''}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Hamburger — mobile only */}
          <button
            className={`hamburger${menuOpen ? ' is-open' : ''}`}
            onClick={() => setMenuOpen(p => !p)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer Overlay ── */}
      <div
        className={`mobile-overlay${menuOpen ? ' active' : ''}`}
        onClick={close}
      />

      {/* ── Mobile Drawer ── */}
      <div className={`mobile-drawer${menuOpen ? ' active' : ''}`}>
        {/* Drawer header */}
        <div className="mobile-drawer-header">
          <div className="d-flex align-items-center gap-2">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="AptisMech Logo"
              style={{ height: 34, width: 'auto', borderRadius: 4 }}
            />
            <div>
              <span style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 900, color: '#fff', fontSize: '1rem', letterSpacing: 1, display: 'block', lineHeight: 1 }}>
                APTISMECH
              </span>
              <span style={{ fontSize: '0.52rem', color: 'var(--orange)', letterSpacing: 2, textTransform: 'uppercase', fontFamily: 'Inter' }}>
                Corporation LLP
              </span>
            </div>
          </div>
          <button className="drawer-close-btn" onClick={close} aria-label="Close menu">
            <FaTimes size={16} />
          </button>
        </div>

        {/* Drawer links */}
        <nav className="mobile-drawer-nav">
          {navLinks.map(({ to, label, end, cta }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={close}
              className={({ isActive }) =>
                `mobile-nav-link${cta ? ' mobile-cta-link' : ''}${isActive && !cta ? ' active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Drawer footer */}
        <div className="mobile-drawer-footer">
          <a href="tel:+917046500555" className="mobile-quick-contact">
            <FaPhone size={12} /> +91 70465 00555
          </a>
          <a
            href="https://wa.me/918866616585"
            target="_blank" rel="noreferrer"
            className="mobile-quick-contact wa"
          >
            <FaWhatsapp size={13} /> WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
