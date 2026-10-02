import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaCheckCircle, FaAward, FaShieldAlt, FaCogs,
  FaArrowRight, FaWhatsapp, FaMapMarkerAlt, FaGlobeAsia,
  FaPhoneAlt, FaExternalLinkAlt
} from 'react-icons/fa';
import './About.css';

const WA = "https://wa.me/918866616585?text=Hello%20AptisMech%20Corporation%2C%20I%20would%20like%20to%20inquire%20about%20your%20products%20and%20materials.";

export default function About() {
  return (
    <>
      {/* ════ HERO HEADER ════ */}
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-eyebrow">AptisMech Corporation LLP</span>
          <h1 className="page-hero-title">About AptisMech Corporation</h1>
          <p className="page-hero-desc">
            Premier Importer, Supplier &amp; Exporter of Heavy Industrial Machinery, Workshop Equipment, Industrial Raw Materials (CRC, MS &amp; SS Coils), and Certified Metal Scrap based in Rajkot, Gujarat.
          </p>
        </div>
      </section>

      {/* ════ COMPANY PROFILE ════ */}
      <section className="section bg-white">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6">
              <span className="section-eyebrow">Company Profile</span>
              <h2 className="section-title mb-4">
                Delivering Industrial Precision &amp; Certified Material Reliability
              </h2>
              <p className="lead-text mb-3">
                <strong>AptisMech Corporation LLP</strong> is a distinguished industrial supply partner headquartered in Vavdi Industrial Area, Rajkot — the prominent engineering hub of Gujarat, India.
              </p>
              <p className="body-text mb-3">
                We specialize as an <strong>Importer, Supplier, and Exporter</strong> providing complete industrial solutions: Heavy Fabrication Machinery, Hydraulic Power Presses, Busbar Bending Machines, Radial Drills, Milling Equipment, Prime Industrial Raw Materials (CRC Sheets, MS Coils, SS Coils), Precision Machined Hardware Spares, and High-Purity Metal Scrap.
              </p>
              <p className="body-text mb-4">
                With deep domain expertise and verified supplier networks across domestic and global markets, we ensure high quality standards, transparent weighment, certified material metallurgy, and fast pan-India &amp; export dispatch.
              </p>

              <div className="row gy-3 mb-4">
                {[
                  'Heavy Industrial Machinery & Workshop Fabrication Systems',
                  'Prime & Commercial Grade CRC, MS & SS Coils & Sheets',
                  'Precision Turned Spares, Collars, Mounts & Connectors',
                  'Certified Chemical Purity & Fast Dispatch Logistics',
                ].map((item, i) => (
                  <div className="col-12 d-flex align-items-center gap-2" key={i}>
                    <FaCheckCircle size={15} color="#F5A623" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--navy)', fontWeight: 600, fontFamily: 'Inter' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="d-flex gap-3 flex-wrap">
                <Link to="/products" className="btn-brand">
                  Explore Products <FaArrowRight size={12} />
                </Link>
                <a href={WA} target="_blank" rel="noreferrer" className="btn-outline">
                  <FaWhatsapp size={14} /> WhatsApp Inquiries
                </a>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-visual-card">
                <div className="about-visual-header">
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/logo.png`}
                      alt="AptisMech Logo"
                      style={{ height: 48, width: 'auto' }}
                    />
                    <div>
                      <h4 style={{ fontFamily: 'Barlow', fontWeight: 800, color: 'var(--navy)', margin: 0 }}>
                        APTISMECH CORPORATION LLP
                      </h4>
                      <span style={{ fontSize: '0.72rem', color: 'var(--orange-dark)', fontWeight: 700, textTransform: 'uppercase' }}>
                        Rajkot, Gujarat · India
                      </span>
                    </div>
                  </div>
                </div>

                <div className="about-pillars-grid">
                  {[
                    {
                      icon: <FaShieldAlt size={22} color="#F5A623" />,
                      title: 'Certified Reliability',
                      desc: 'Guaranteed material grade composition, strict inspection, and reliable machinery builds.',
                    },
                    {
                      icon: <FaGlobeAsia size={22} color="#F5A623" />,
                      title: 'Import & Export Capabilities',
                      desc: 'Pan-India supply logistics and seamless export documentation for international clients.',
                    },
                    {
                      icon: <FaCogs size={22} color="#F5A623" />,
                      title: 'Complete Industrial Range',
                      desc: 'From 500-ton presses and milling machines to prime coils and hardware spares.',
                    },
                    {
                      icon: <FaAward size={22} color="#F5A623" />,
                      title: 'Transparent Transactions',
                      desc: 'Accurate weighbridge certificates, fair market pricing, and dedicated client support.',
                    },
                  ].map((p, i) => (
                    <div className="about-pillar-item" key={i}>
                      <div className="pillar-icon-box">{p.icon}</div>
                      <h5 className="pillar-title">{p.title}</h5>
                      <p className="pillar-desc">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ KEY PARTNERS & DIRECT CONTACTS ════ */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="section-eyebrow">Key Management</span>
            <h2 className="section-title">Direct Partner Contacts</h2>
            <p className="section-sub">
              Connect directly with our partners on Call or WhatsApp for machinery inquiries and raw material procurement.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {/* Mr. Ankit Dholakiya */}
            <div className="col-md-5 col-12">
              <div className="partner-card">
                <div className="partner-avatar">AD</div>
                <h4 className="partner-name">Mr. Ankit Dholakiya</h4>
                <span className="partner-role">Partner</span>
                <p className="partner-desc">
                  Oversees machinery imports, client project consultations, and international trade partnerships.
                </p>
                <div className="partner-contact-links">
                  <a href="tel:+917046500555" className="partner-link">
                    <FaPhoneAlt size={12} /> +91 70465 00555
                  </a>
                  <a
                    href="https://wa.me/917046500555?text=Hello%20Mr.%20Ankit%2C%20I%20would%20like%20to%20discuss%20an%20industrial%20requirement%20with%20AptisMech."
                    target="_blank"
                    rel="noreferrer"
                    className="partner-link partner-wa-link"
                  >
                    <FaWhatsapp size={13} /> WhatsApp Direct
                  </a>
                </div>
              </div>
            </div>

            {/* Mr. Mayurbhai Jani */}
            <div className="col-md-5 col-12">
              <div className="partner-card">
                <div className="partner-avatar" style={{ background: 'var(--navy-dark)' }}>MJ</div>
                <h4 className="partner-name">Mr. Mayurbhai Jani</h4>
                <span className="partner-role">Partner</span>
                <p className="partner-desc">
                  Directs raw material supplies, metal scrap procurement, domestic logistics, and supply chain management.
                </p>
                <div className="partner-contact-links">
                  <a href="tel:+918866616585" className="partner-link">
                    <FaPhoneAlt size={12} /> +91 88666 16585
                  </a>
                  <a
                    href="https://wa.me/918866616585?text=Hello%20Mr.%20Mayurbhai%2C%20I%20would%20like%20to%20discuss%20raw%20materials%20or%20spares%20with%20AptisMech."
                    target="_blank"
                    rel="noreferrer"
                    className="partner-link partner-wa-link"
                  >
                    <FaWhatsapp size={13} /> WhatsApp Direct
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ CORPORATE LOCATION & GET QUOTE BANNER ════ */}
      <section className="section bg-white">
        <div className="container">
          <div className="about-location-banner">
            <div className="row align-items-center gy-4">
              <div className="col-lg-7">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="about-loc-icon-pill">
                    <FaMapMarkerAlt size={14} color="#F5A623" />
                  </div>
                  <span className="about-loc-eyebrow">
                    Industrial Facility &amp; Head Office
                  </span>
                </div>
                <h3 className="about-loc-title">
                  Vavdi Industrial Area, Rajkot
                </h3>
                <p className="about-loc-subtitle">
                  Premier Logistics, Supply &amp; Machinery Dispatch Center
                </p>
                <p className="about-loc-address">
                  <strong>Shed No. 3, Jasmatnagar, Street No. 4, Plot No. 6,</strong><br />
                  Vavdi Industrial Area, Rajkot-360004, Gujarat, India.
                </p>
                <div className="about-loc-badges">
                  <span className="about-loc-badge">Pan-India Fast Dispatch</span>
                  <span className="about-loc-badge">Port &amp; Highway Connectivity</span>
                  <span className="about-loc-badge">Transparent Weighment</span>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="about-loc-actions-card">
                  <span className="loc-card-tag">Direct Quotation Hub</span>
                  <h4 className="loc-card-heading">Ready to Discuss Your Requirement?</h4>
                  <p className="loc-card-sub">
                    Get instant technical specifications, delivery schedules, and wholesale pricing.
                  </p>
                  <div className="d-flex flex-column gap-2 mt-3">
                    <Link to="/contact" className="btn-brand justify-content-center" style={{ padding: '13px', fontSize: '0.88rem' }}>
                      Get Official Quote <FaArrowRight size={12} />
                    </Link>
                    <a
                      href="https://maps.google.com/?q=Vavdi+Industrial+Area+Rajkot+Gujarat"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline-white justify-content-center"
                      style={{ padding: '12px', fontSize: '0.82rem' }}
                    >
                      <FaExternalLinkAlt size={11} /> Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
