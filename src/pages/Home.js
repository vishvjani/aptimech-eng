import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaWhatsapp, FaArrowRight, FaCheckCircle,
  FaIndustry, FaBoxes
} from 'react-icons/fa';
import './Home.css';

const WA = "https://wa.me/918866616585?text=Hello%20AptisMech%20Corporation%2C%20I%20would%20like%20to%20inquire%20about%20your%20industrial%20products.";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* ════ HERO SECTION ════ */}
      <section className="hero-industrial">
        <div className="container">
          <div className="row align-items-center gy-5">
            
            {/* Left Column: Punchy Headline & CTAs */}
            <div className="col-lg-6">
              <div className="hero-live-badge">
                <span className="live-dot" />
                <span>Verified Importer, Supplier &amp; Exporter · Rajkot</span>
              </div>

              <h1 className="hero-h1">
                INDUSTRIAL MACHINERY,<br />
                <span className="accent-text">RAW MATERIALS</span> &amp;<br />
                WORKSHOP SYSTEMS
              </h1>

              <p className="hero-p">
                Leading supplier of Heavy Fabrication Machinery, Hydraulic Power Presses, Prime Raw Materials (CRC Sheets, MS &amp; SS Coils), Precision Hardware Spares, and Certified Metal Scrap based in Rajkot, Gujarat.
              </p>

              <div className="hero-cta">
                <a href={WA} target="_blank" rel="noreferrer" className="btn-brand">
                  <FaWhatsapp size={15} /> WhatsApp Inquiry
                </a>
                <Link to="/products" className="btn-outline-white">
                  Explore Products <FaArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Right Column: Framed Visual Showcase */}
            <div className="col-lg-6">
              <div className="hero-img-panel">
                <div className="hero-img-frame" onClick={() => navigate('/products')}>
                  <img
                    src={`${process.env.PUBLIC_URL}/products/multi_functional_machine.jpg`}
                    alt="AptisMech Heavy Fabrication Machinery"
                    className="hero-factory-img"
                  />
                  <div className="hero-float-chip">
                    Mechanical Multi-Functional Ironworker · 55T–125T
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════ 4 CORE DIVISIONS (BENTO GRID) ════ */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="section-eyebrow">Product Portfolio</span>
            <h2 className="section-title">Core Business Divisions</h2>
            <p className="section-sub mx-auto">
              Delivering high-performance machinery, certified metal coils, precision machined hardware, and raw materials across India and export markets.
            </p>
          </div>

          <div className="bento-divisions-grid">
            
            {/* Division 1: Heavy Machinery */}
            <div className="bento-card" onClick={() => navigate('/products')} style={{ cursor: 'pointer' }}>
              <div className="bento-icon-box">🏗️</div>
              <span className="bento-badge">Heavy Machinery</span>
              <h3 className="bento-title">Fabrication Machinery &amp; Presses</h3>
              <p className="bento-desc">
                Multi-Functional Ironworkers (55T–125T), Hydraulic C-Type &amp; H-Frame Presses (20T–500T), Busbar Bending, Radial Drills, and Vertical Milling Machines.
              </p>
              <span className="bento-btn">
                Browse Machinery <FaArrowRight size={11} />
              </span>
            </div>

            {/* Division 2: Raw Materials */}
            <div className="bento-card" onClick={() => navigate('/products')} style={{ cursor: 'pointer' }}>
              <div className="bento-icon-box">🏭</div>
              <span className="bento-badge">Raw Materials</span>
              <h3 className="bento-title">Industrial Coils &amp; Sheets (CRC / MS / SS)</h3>
              <p className="bento-desc">
                Prime Cold Rolled (CRCA) Sheets (0.4–3.2mm), structural Mild Steel (MS) Coils, and Stainless Steel (SS 304/316) Coils &amp; Slit Strips.
              </p>
              <span className="bento-btn">
                View Raw Materials <FaArrowRight size={11} />
              </span>
            </div>

            {/* Division 3: Precision Hardware */}
            <div className="bento-card" onClick={() => navigate('/products')} style={{ cursor: 'pointer' }}>
              <div className="bento-icon-box">⚙️</div>
              <span className="bento-badge">Precision Spares</span>
              <h3 className="bento-title">Hardware Mounts, Collars &amp; Motors</h3>
              <p className="bento-desc">
                Custom Base Plates, Knurled Nuts, SPM Shaft Collars, Drop-Forged Eye Bolts (DIN 580), Hydraulic Adapters, and Three-Phase IP55 Electric Motors.
              </p>
              <span className="bento-btn">
                Explore Spares <FaArrowRight size={11} />
              </span>
            </div>

            {/* Division 4: Metal Scrap */}
            <div className="bento-card" onClick={() => navigate('/products')} style={{ cursor: 'pointer' }}>
              <div className="bento-icon-box">♻️</div>
              <span className="bento-badge">Certified Recycling</span>
              <h3 className="bento-title">Categorized Metal Scrap Solutions</h3>
              <p className="bento-desc">
                Wholesale supplies of sorted Millberry Copper, 6063 Aluminium Extrusion, Honey Brass, and SS 304/316 scrap with verified chemical spectrometry.
              </p>
              <span className="bento-btn">
                Scrap Solutions <FaArrowRight size={11} />
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ════ WHY PARTNER WITH US ════ */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="section-eyebrow">Enterprise Strength</span>
            <h2 className="section-title">Why Choose AptisMech</h2>
            <p className="section-sub mx-auto">
              Trusted trade reliability, prompt Pan-India dispatch, and certified material quality.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: <FaCheckCircle size={24} color="#F5A623" />,
                title: 'Verified Metallurgy & Inspection',
                desc: 'Every machinery shipment and raw material coil lot is thoroughly verified for chemical purity, tensile grade, and dimensional tolerance.',
              },
              {
                icon: <FaIndustry size={24} color="#F5A623" />,
                title: 'Pan-India & Global Supply',
                desc: 'Located in Vavdi Industrial Hub, Rajkot with direct highway connectivity for rapid dispatch across Gujarat and all Indian states.',
              },
              {
                icon: <FaBoxes size={24} color="#F5A623" />,
                title: 'Direct Wholesale Pricing',
                desc: 'Transparent transactions, accurate weighbridge documentation, and competitive wholesale pricing for bulk buyers and project OEMs.',
              },
            ].map((p, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="p-4 bg-white rounded-3 border h-100 shadow-sm">
                  <div className="mb-3">{p.icon}</div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '8px' }}>
                    {p.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Consultation CTA */}
          <div className="text-center mt-5">
            <Link to="/contact" className="btn-brand">
              Request Project Quotation <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
