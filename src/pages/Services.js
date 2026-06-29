import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import './Services.css';

const WA = "https://wa.me/918866616585?text=Hello%20Aptismech%2C%20I%20am%20interested%20in%20your%20industrial%20services.";

const services = [
  {
    id: 1,
    emoji: '⚙️',
    title: 'Precision CNC Custom Machining',
    subtitle: 'High-Tolerance Multi-Axis Fabrication',
    badge: 'Core Service',
    color: 'var(--navy)',
    desc: `High-tolerance multi-axis vertical milling, lathe turning, and custom-profile components executed from rigorous CAD blueprint assets. Our CNC machining facility handles complex geometries with sub-millimeter tolerances, serving automotive, aerospace, and general engineering sectors.`,
    features: [
      'Multi-axis CNC Vertical Milling',
      'Precision CNC Lathe Turning',
      'Custom Profile Component Fabrication',
      'CAD/CAM Blueprint Execution',
      'Sub-millimeter Dimensional Tolerance',
      'Surface Finish Verification',
      'Material: SS, MS, Aluminium, Brass, Copper',
      'Prototype to Production Batches',
    ],
    applications: ['Automotive Components', 'Machine Parts', 'Flanges & Shafts', 'Custom Profiles', 'Prototype Development'],
  },
  {
    id: 2,
    emoji: '♻️',
    title: 'Non-Ferrous Scrap Trading',
    subtitle: 'Wholesale Aluminium, Copper & Brass',
    badge: 'Wholesale',
    color: 'var(--orange)',
    desc: `Authorized large-scale processing, sortation, and trading for premium raw scrap variants, specializing in high-purity Copper, Brass, and Aluminium recycling streams. We provide competitive wholesale rates backed by certified weight and purity documentation.`,
    features: [
      'High-Purity Copper Scrap',
      'Premium Brass Scrap Trading',
      'Aluminium Scrap Processing',
      'Authorized Large-Scale Processing',
      'Certified Sortation & Grading',
      'Competitive Wholesale Pricing',
      'Weight & Purity Documentation',
      'Pan-India Logistics Support',
    ],
    applications: ['Metal Recycling Plants', 'Foundries & Smelters', 'Cable Manufacturers', 'Brass Component Makers', 'Export Trading'],
  },
  {
    id: 3,
    emoji: '🔧',
    title: 'Industrial Spares & Maintenance',
    subtitle: 'Complete Machine Support Hub',
    badge: 'Support',
    color: 'var(--navy-light)',
    desc: `Comprehensive industrial spares maintenance support hub ensuring your production lines never go down. We supply genuine and equivalent spare parts for power presses, pneumatic systems, and custom machinery, backed by on-site technical service.`,
    features: [
      'Genuine Power Press Spare Parts',
      'Pneumatic System Components',
      'Clutch & Brake Assembly Kits',
      'Flywheel & Drive Components',
      'CNC Tooling & Inserts',
      'On-Site Technical Service',
      'Preventive Maintenance Plans',
      'Emergency Breakdown Support',
    ],
    applications: ['Power Press Maintenance', 'Pneumatic System Repair', 'CNC Servicing', 'Breakdown Response', 'Scheduled Maintenance'],
  },
];

const Services = () => (
  <>
    {/* PAGE HERO */}
    <section className="page-hero">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <span className="page-hero-eyebrow">Industrial Services Portfolio</span>
            <h1 className="page-hero-title">
              Beyond Machines —<br />
              <span style={{ color: '#F5A623' }}>Complete Industrial Solutions.</span>
            </h1>
            <p className="page-hero-desc mx-auto">
              Precision CNC machining, non-ferrous scrap trading, and industrial spares support —
              a complete manufacturing ecosystem under one roof.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a href={WA} target="_blank" rel="noreferrer" className="btn-brand">
                <FaWhatsapp size={14} /> Get a Quote
              </a>
              <Link to="/contact" className="btn-outline-white">
                Contact Us <FaArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* SERVICES DETAIL */}
    <section style={{ padding: '90px 0', background: 'var(--off-white)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="row gy-4">
          {services.map((srv, i) => (
            <div className="col-12" key={srv.id}>
              <div className={`service-detail-card${i % 2 !== 0 ? ' reverse' : ''}`}>
                <div className="service-visual" style={{
                  background: `${srv.color}0d`,
                  borderLeft: `4px solid ${srv.color}`,
                }}>
                  <span className="service-visual-emoji">{srv.emoji}</span>
                  <span className="service-visual-badge" style={{ background: srv.color }}>
                    {srv.badge}
                  </span>
                  <div className="service-apps">
                    <div style={{ fontFamily: 'Inter', fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.2px', marginBottom: '0.5rem', fontWeight: 700 }}>
                      Applications
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      {srv.applications.map((a, j) => (
                        <span key={j} style={{
                          background: `${srv.color}14`,
                          color: srv.color,
                          fontSize: '0.7rem',
                          padding: '4px 10px',
                          borderRadius: 20,
                          fontFamily: 'Inter',
                          fontWeight: 600,
                          border: `1px solid ${srv.color}30`,
                        }}>{a}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="service-detail-content">
                  <span className="service-detail-tag" style={{ color: srv.color }}>{srv.subtitle}</span>
                  <h2 className="service-detail-title">{srv.title}</h2>
                  <div className="rule" style={{ background: srv.color }} />
                  <p className="service-detail-desc">{srv.desc}</p>

                  <div className="row">
                    {srv.features.map((f, j) => (
                      <div className="col-md-6 mb-2" key={j}>
                        <div className="d-flex align-items-start gap-2">
                          <FaCheckCircle size={12} color={srv.color} style={{ marginTop: 3, flexShrink: 0 }} />
                          <span style={{ fontFamily: 'Inter', fontSize: '0.84rem', color: 'var(--text)' }}>{f}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="d-flex gap-3 flex-wrap mt-4">
                    <a
                      href={`https://wa.me/918866616585?text=Hello%20Aptismech%2C%20I%20need%20${encodeURIComponent(srv.title)}.%20Please%20share%20details.`}
                      target="_blank" rel="noreferrer"
                      className="btn-brand"
                      style={{ background: srv.color, borderColor: srv.color }}
                    >
                      <FaWhatsapp size={14} /> Inquire via WhatsApp
                    </a>
                    <Link to="/contact" className="btn-outline">
                      Get Quote <FaArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* WHY APTISMECH */}
    <section style={{ padding: '90px 0', background: '#fff', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-6">
            <span className="eyebrow">Service Advantages</span>
            <h2 className="section-title">Why Partner With Aptismech?</h2>
            <div className="rule center" />
          </div>
        </div>
        <div className="row gy-4">
          {[
            { icon: '🎯', title: 'CAD-Driven Precision',  desc: 'Every CNC job is executed against verified CAD drawings with documented dimensional inspection reports.' },
            { icon: '⏱️', title: 'Fast Turnaround',      desc: 'Our Vavdi Industrial Hub location ensures rapid material sourcing, reduced lead times, and efficient dispatch.' },
            { icon: '🤝', title: 'Trusted Wholesale',    desc: 'Established non-ferrous scrap trading operations with certified processing and competitive bulk pricing.' },
            { icon: '🔧', title: 'End-to-End Support',  desc: 'From initial inquiry to after-delivery technical support — our engineering team is available at every step.' },
            { icon: '📋', title: 'Documented Quality',  desc: 'Material test reports, dimensional inspection certificates, and delivery documentation for every order.' },
            { icon: '📞', title: 'Direct Technical Access', desc: 'Speak directly with our technical partners — no call centers. Real engineers, real answers.' },
          ].map((item, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="why-card">
                <span className="why-icon">{item.icon}</span>
                <h5 className="why-title">{item.title}</h5>
                <p className="why-text">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section style={{ background: 'var(--navy)', padding: '80px 0', borderTop: '4px solid var(--orange)' }}>
      <div className="container text-center">
        <h2 style={{ fontFamily: 'Barlow', fontWeight: 900, color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '1rem' }}>
          Ready to Partner With Us?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter', marginBottom: '2rem', maxWidth: 520, margin: '0 auto 2rem', fontSize: '0.93rem' }}>
          Whether you need precision CNC components, bulk scrap trading, or machine maintenance — Aptismech is your reliable industrial partner.
        </p>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <a href={WA} target="_blank" rel="noreferrer" className="btn-brand">
            <FaWhatsapp size={14} /> WhatsApp Now
          </a>
          <Link to="/contact" className="btn-outline-white">
            Full Contact Details <FaArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Services;
