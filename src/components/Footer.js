import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp,
  FaLinkedin, FaFacebook, FaArrowRight
} from 'react-icons/fa';
import './Footer.css';

const WA = "https://wa.me/918866616585?text=Hello%20Aptismech%2C%20I%20would%20like%20to%20request%20a%20quotation.";

const Footer = () => (
  <>
    <footer className="aptis-footer">
      <div className="footer-bg-text">AM</div>
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row gy-5">

          {/* Brand */}
          <div className="col-lg-4 col-md-12">
            <div className="footer-brand-logo">AM</div>
            <div className="footer-brand-name">APTISMECH</div>
            <span className="footer-brand-sub">Corporation LLP</span>
            <p className="footer-tagline">
              Engineering high-performance industrial machinery from Vavdi Industrial Hub, Rajkot.
              Mechanical Power Presses, CNC Machining, and Precision Industrial Solutions.
            </p>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-brand" style={{ fontSize: '0.78rem', padding: '10px 18px' }}>
              <FaWhatsapp size={13} /> Request a Quote
            </a>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-4 col-6">
            <span className="footer-col-head">Quick Links</span>
            <ul className="list-unstyled mb-0">
              {[
                { to: '/',         label: 'Home'     },
                { to: '/about',    label: 'About Us' },
                { to: '/products', label: 'Products' },
                { to: '/services', label: 'Services' },
                { to: '/contact',  label: 'Contact'  },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="footer-nav-link">
                    <FaArrowRight size={9} /> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="col-lg-3 col-md-4 col-6">
            <span className="footer-col-head">Products</span>
            <ul className="list-unstyled mb-0">
              {[
                'Mechanical Power Press (C-Frame)',
                'Mechanical Power Press (H-Frame)',
                'Pneumatic Assembly Press',
                'Hydro-Pneumatic System',
                'Oil Intensifier Units',
                'Custom Press Systems',
              ].map(item => (
                <li key={item}>
                  <Link to="/products" className="footer-nav-link">
                    <FaArrowRight size={9} /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-4 col-12">
            <span className="footer-col-head">Contact Us</span>

            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <FaMapMarkerAlt size={13} color="#F5A623" />
              </div>
              <div>
                <span className="footer-contact-label">Plant & Office</span>
                <span className="footer-contact-value" style={{ cursor: 'default' }}>
                  Shed No. 3, Jasmatnagar, St. No. 4,<br />
                  Plot No. 6, Vavdi Industrial Area,<br />
                  Rajkot-360004, Gujarat.
                </span>
              </div>
            </div>

            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <FaPhone size={12} color="#F5A623" />
              </div>
              <div>
                <span className="footer-contact-label">Sales (Ankit Dholakiya)</span>
                <a href="tel:+917046500555" className="footer-contact-value">+91 70465 00555</a>
                <span className="footer-contact-label mt-1">Operations (Mayurbhai Jani)</span>
                <a href="tel:+918866616585" className="footer-contact-value">+91 88666 16585</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <FaEnvelope size={12} color="#F5A623" />
              </div>
              <div>
                <span className="footer-contact-label">Email</span>
                <a href="mailto:AptisMech.Corporation.llp@gmail.com" className="footer-contact-value" style={{ fontSize: '0.78rem' }}>
                  AptisMech.Corporation.llp@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="footer-copy mb-0">
            © {new Date().getFullYear()} Aptismech Corporation LLP. All Rights Reserved. · Vavdi Industrial Area, Rajkot, Gujarat, India.
          </p>
          <div className="footer-socials">
            <a href={WA} target="_blank" rel="noreferrer" className="social-icon" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="mailto:AptisMech.Corporation.llp@gmail.com" className="social-icon" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="#!" className="social-icon" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#!" className="social-icon" aria-label="Facebook"><FaFacebook /></a>
          </div>
        </div>
      </div>
    </footer>

    {/* Floating WhatsApp */}
    <a href={WA} target="_blank" rel="noreferrer" className="wa-float" aria-label="Chat on WhatsApp" title="Quick Inquiry via WhatsApp">
      <FaWhatsapp />
    </a>
  </>
);

export default Footer;
