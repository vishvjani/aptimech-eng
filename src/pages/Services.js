import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaArrowRight, FaIndustry, FaRecycle, FaCogs, FaBoxes, FaCheck, FaPhoneAlt } from 'react-icons/fa';
import './Services.css';

const divisions = [
  {
    id: 'div-machinery',
    icon: <FaIndustry size={26} color="#F5A623" />,
    badge: 'Machinery Division',
    title: 'Heavy Industrial Machinery Supply',
    subtitle: 'High-Tonnage Fabrication & Workshop Equipment',
    highlights: [
      'Multi-Functional Ironworkers (55T – 125T)',
      'Hydraulic H-Type Presses (20T – 500T)',
      'Hydraulic Busbar Bending & Punching Units',
      'Heavy Duty Radial Drills & Vertical Milling',
    ],
    catalogLink: '/products',
    waText: 'Hello AptisMech, I would like to inquire about Heavy Industrial Machinery & Presses.',
  },
  {
    id: 'div-raw',
    icon: <FaBoxes size={26} color="#F5A623" />,
    badge: 'Raw Material Supply',
    title: 'Industrial Coils & Sheet Metals',
    subtitle: 'Prime & Commercial CRC, MS & SS Coils',
    highlights: [
      'Prime Cold Rolled (CRCA) Sheets (0.4 – 3.2mm)',
      'Structural Mild Steel (MS) Coils & Plates',
      'Stainless Steel (SS 304/316) Slit Strips & Sheets',
      'Precision Coil Slitting & Cut-to-Length Delivery',
    ],
    catalogLink: '/products',
    waText: 'Hello AptisMech, I need a quotation for CRC Sheets / MS Coils / SS Coils.',
  },
  {
    id: 'div-spares',
    icon: <FaCogs size={26} color="#F5A623" />,
    badge: 'Precision Spares',
    title: 'Precision Hardware & Electric Motors',
    subtitle: 'Mounts, Fasteners, Hydraulic Spares & Motors',
    highlights: [
      'Custom Milled Machine Base Plates & Flanges',
      'SPM Precision Shaft Collars & Knurled Nuts',
      'Drop-Forged High-Tensile Eye Bolts (DIN 580)',
      'Three-Phase IP55 Squirrel Cage Induction Motors',
    ],
    catalogLink: '/products',
    waText: 'Hello AptisMech, I would like to inquire about Hardware Spares, Flanges & Motors.',
  },
  {
    id: 'div-scrap',
    icon: <FaRecycle size={26} color="#F5A623" />,
    badge: 'Recycling Solutions',
    title: 'Categorized Metal Scrap Trading',
    subtitle: 'Certified Non-Ferrous & Ferrous Metal Lots',
    highlights: [
      'Millberry Copper Wire Scrap (99.9% Purity)',
      '6063 Aluminium Extrusion & Cast Scrap',
      'Honey Brass Rod & Pipe Scrap Lots',
      'Spectrometer-Tested SS 304/316 Scrap Supply',
    ],
    catalogLink: '/products',
    waText: 'Hello AptisMech, I am looking for Wholesale Categorized Metal Scrap supply.',
  },
];

const Services = () => (
  <>
    {/* PAGE HERO */}
    <section className="page-hero">
      <div className="container text-center">
        <span className="page-hero-eyebrow">Enterprise Divisions</span>
        <h1 className="page-hero-title">Industrial Supply &amp; Machinery Portfolio</h1>
        <p className="page-hero-desc mx-auto">
          Comprehensive supply solutions across heavy fabrication machinery, industrial raw materials, precision hardware spares, and metal recycling.
        </p>
      </div>
    </section>

    {/* 4 DIVISIONS IN STREAMLINED 2-COLUMN GRID */}
    <section className="services-section bg-white">
      <div className="container">
        <div className="row g-4">
          {divisions.map((d) => (
            <div className="col-lg-6 col-12" key={d.id}>
              <div className="division-card">
                
                {/* Header */}
                <div className="division-card-header">
                  <div className="d-flex align-items-center gap-3">
                    <div className="division-icon-box">{d.icon}</div>
                    <div>
                      <span className="division-badge">{d.badge}</span>
                      <h3 className="division-title">{d.title}</h3>
                      <p className="division-sub">{d.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Highlights list */}
                <div className="division-highlights">
                  {d.highlights.map((h, i) => (
                    <div className="div-highlight-row" key={i}>
                      <span className="div-check-icon"><FaCheck size={10} color="#F5A623" /></span>
                      <span className="div-highlight-text">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="division-actions">
                  <Link to={d.catalogLink} className="btn-brand div-action-btn">
                    View Catalog <FaArrowRight size={11} />
                  </Link>
                  <a
                    href={`https://wa.me/918866616585?text=${encodeURIComponent(d.waText)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline div-action-btn"
                  >
                    <FaWhatsapp size={13} /> Instant RfQ
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ════ BOTTOM QUICK PROCUREMENT CTA BANNER ════ */}
        <div className="services-bottom-cta mt-5">
          <div className="row align-items-center gy-4">
            <div className="col-lg-8">
              <span className="cta-banner-tag">Wholesale Procurement Desk</span>
              <h3 className="cta-banner-title">Need a Tailored Quote or Delivery Schedule?</h3>
              <p className="cta-banner-desc">
                Contact our key partners directly in Vavdi Industrial Area, Rajkot for prompt quotations, material specifications, and pan-India dispatch details.
              </p>
              <div className="d-flex gap-3 flex-wrap mt-3">
                <a href="tel:+917046500555" className="cta-phone-pill">
                  <FaPhoneAlt size={11} /> Mr. Ankit: +91 70465 00555
                </a>
                <a href="tel:+918866616585" className="cta-phone-pill">
                  <FaPhoneAlt size={11} /> Mr. Mayurbhai: +91 88666 16585
                </a>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link to="/contact" className="btn-brand" style={{ padding: '14px 28px', fontSize: '0.88rem' }}>
                Request Official Quote <FaArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  </>
);

export default Services;
