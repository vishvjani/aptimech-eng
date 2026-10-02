import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp,
  FaArrowRight
} from 'react-icons/fa';
import './Footer.css';

const WA = "https://wa.me/918866616585?text=Hello%20AptisMech%20Corporation%2C%20I%20would%20like%20to%20request%20a%20quotation.";

const Footer = () => (
  <>
    <footer className="aptis-footer">
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row gy-5">

          {/* Brand */}
          <div className="col-lg-4 col-md-12">
            <div className="d-flex align-items-center gap-3 mb-3">
              <img
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt="AptisMech Corporation LLP"
                className="footer-brand-logo-img"
              />
              <div>
                <div className="footer-brand-name">APTISMECH</div>
                <span className="footer-brand-sub">Corporation LLP</span>
              </div>
            </div>
            <p className="footer-tagline">
              Leading Importer, Supplier & Exporter of Heavy Industrial Machinery, Workshop Equipment, Industrial Raw Materials (CRC, MS & SS Coils) & Metal Scrap Solutions from Vavdi Industrial Hub, Rajkot, Gujarat.
            </p>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-brand" style={{ fontSize: '0.78rem', padding: '10px 18px' }}>
              <FaWhatsapp size={13} /> WhatsApp Inquiry
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

          {/* Products Portfolio */}
          <div className="col-lg-3 col-md-4 col-6">
            <span className="footer-col-head">Product Categories</span>
            <ul className="list-unstyled mb-0">
              {[
                'Multi-Functional Ironworkers',
                'Hydraulic H-Type Presses',
                'Hydraulic Busbar Bending',
                'CRC Sheets & Slit Coils',
                'Industrial MS & SS Coils',
                'Precision Hardware & Spares',
              ].map(item => (
                <li key={item}>
                  <Link to="/products" className="footer-nav-link">
                    <FaArrowRight size={9} /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct Partners */}
          <div className="col-lg-3 col-md-4 col-12">
            <span className="footer-col-head">Direct Contact</span>

            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <FaMapMarkerAlt size={13} color="#F5A623" />
              </div>
              <div>
                <span className="footer-contact-label">Plant & Office</span>
                <span className="footer-contact-value" style={{ cursor: 'default' }}>
                  Shed No. 3, Jasmatnagar, St. No. 4,<br />
                  Plot No. 6, Vavdi Industrial Area,<br />
                  Rajkot-360004, Gujarat, India.
                </span>
              </div>
            </div>

            <div className="footer-contact-item">
              <div className="footer-contact-icon">
                <FaPhone size={12} color="#F5A623" />
              </div>
              <div>
                <span className="footer-contact-label">Mr. Ankit Dholakiya</span>
                <a href="tel:+917046500555" className="footer-contact-value">+91 70465 00555</a>
                <span className="footer-contact-label mt-2">Mr. Mayurbhai Jani</span>
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

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy mb-0">
            © {new Date().getFullYear()} AptisMech Corporation LLP. All Rights Reserved. · Vavdi Industrial Area, Rajkot, Gujarat, India.
          </p>
          <div className="footer-actions-direct">
            <a href={WA} target="_blank" rel="noreferrer" className="btn-outline-white" style={{ fontSize: '0.75rem', padding: '6px 14px' }}>
              <FaWhatsapp size={12} /> WhatsApp Direct
            </a>
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
