import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaWhatsapp, FaArrowRight, FaCheckCircle,
  FaPhoneAlt, FaEnvelope, FaShieldAlt, FaCog, FaBolt
} from 'react-icons/fa';
import './Home.css';

const WA = "https://wa.me/918866616585?text=Hello%20Aptismech%2C%20I%20would%20like%20to%20request%20a%20quotation.";

const products = [
  {
    id: 1,
    tag: 'Mechanical Series',
    title: 'Heavy-Duty Mechanical Power Press',
    desc: 'Flywheel-driven kinetic energy delivery with zero structural frame deflection. Built for high-volume metal stamping — C-Frame & H-Frame configurations.',
    image: `${process.env.PUBLIC_URL}/images/Screenshot 2026-06-28 121534.png`,
    specs: ['10T — 400T', 'C/H Frame', 'PLC Control'],
  },
  {
    id: 2,
    tag: 'Pneumatic Series',
    title: 'High-Speed Pneumatic Assembly Press',
    desc: 'Compact press running on plant compressed air. Rapid stroke cycles with micro-tolerance alignment — no hydraulics, no complex setup.',
    image: `${process.env.PUBLIC_URL}/images/Screenshot 2026-06-28 121718.png`,
    specs: ['0.5T — 10T', 'Up to 60 SPM', 'Foot Pedal'],
  },
  {
    id: 3,
    tag: 'Hybrid Series',
    title: 'Hydro-Pneumatic Hybrid System',
    desc: 'Pneumatic speed with oil-intensified tonnage. Concentrated pressing force without the noise or bulk of a conventional power pack.',
    image: `${process.env.PUBLIC_URL}/images/Screenshot 2026-06-28 121815.png`,
    specs: ['1T — 50T', 'Dual-Stroke', 'Energy Efficient'],
  },
];

const pillars = [
  {
    icon: <FaCog size={20} />,
    num: '01',
    title: 'Engineering Excellence',
    text: 'High-tensile stress-relieved steel frames and zero structural deflection on every machine we build. Designed to global dimensional standards.',
  },
  {
    icon: <FaShieldAlt size={20} />,
    num: '02',
    title: 'Certified Quality',
    text: 'Stringent dimensional inspection, load-test validation, and surface-finish verification on every unit before dispatch from our Rajkot facility.',
  },
  {
    icon: <FaBolt size={20} />,
    num: '03',
    title: 'Turnkey Industrial Partner',
    text: 'Machinery, CNC job work, and non-ferrous scrap — one industrial partner covering all requirements with full after-sales technical support.',
  },
];

export default function Home() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', product: '', message: '' });
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    const msg = `Hello Aptismech,%0AName: ${form.name}%0ACompany: ${form.company}%0APhone: ${form.phone}%0AInterest: ${form.product}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/918866616585?text=${msg}`, '_blank');
    setSent(true);
  };

  return (
    <>
      {/* ════ HERO ════ */}
      <section className="hero">
        <div className="hero-texture" />
        <div className="hero-accent-bar" />

        <div className="container-fluid p-0">
          <div className="row g-0" style={{ minHeight: '100vh' }}>

            {/* Left content */}
            <div className="col-lg-6 d-flex align-items-center">
              <div className="container">
                <div className="hero-content">
                  <span className="hero-label">
                    <span className="hero-label-line" />
                    Rajkot, Gujarat · Since 2009
                  </span>

                  <h1 className="hero-heading">
                    Industrial<br />
                    <span className="hero-heading-accent">Precision</span><br />
                    Machinery
                  </h1>
                  <p className="hero-sub-heading">Power · Accuracy · Reliability</p>

                  <p className="hero-desc">
                    Aptismech Corporation LLP manufactures high-tonnage power presses,
                    precision CNC components and hydraulic systems trusted by leading
                    manufacturers across India.
                  </p>

                  <div className="hero-cta">
                    <a href={WA} target="_blank" rel="noreferrer" className="btn-brand">
                      <FaWhatsapp size={14} /> WhatsApp Inquiry
                    </a>
                    <button
                      onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                      className="btn-outline-white"
                    >
                      Request Quote <FaArrowRight size={11} />
                    </button>
                  </div>

                  {/* Stats strip */}
                  <div className="hero-stats">
                    {[
                      { num: '500+', label: 'Machines Delivered' },
                      { num: '15+',  label: 'Years Experience'   },
                      { num: '200+', label: 'Happy Clients'      },
                      { num: '3',    label: 'Product Lines'      },
                    ].map(s => (
                      <div className="hero-stat" key={s.label}>
                        <span className="hero-stat-num">{s.num}</span>
                        <span className="hero-stat-label">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right — factory hero image */}
            <div className="col-lg-6">
              <div className="hero-img-panel">
                
                {/* HUD Vector Crosshair Background */}
                <div className="hud-bg-grid" />

                <div className="hero-img-frame">
                  {/* Color grading overlay that fades on hover */}
                  <div className="hero-factory-color-grade" />
                  
                  <img
                    src={`${process.env.PUBLIC_URL}/images/hero-factory.jpg`}
                    alt="Aptismech Industrial Power Press Facility, Rajkot"
                    className="hero-factory-img"
                  />
                  
                  <div className="hero-img-shine" />

                  {/* Laser Scanning Line */}
                  <div className="hero-laser-line" />

                  {/* Precision Target Brackets */}
                  <div className="hud-corner hud-corner--tl" />
                  <div className="hud-corner hud-corner--tr" />
                  <div className="hud-corner hud-corner--bl" />
                  <div className="hud-corner hud-corner--br" />

                  {/* Central target lock */}
                  <div className="hud-target-lock">
                    <div className="target-pulse-circle" />
                    <div className="target-crosshair-h" />
                    <div className="target-crosshair-v" />
                  </div>

                  {/* Technical Spec Reads */}
                  <div className="hud-readout hud-readout--tl">SYS.ON // FEED: OK</div>
                  <div className="hud-readout hud-readout--tr">MODE: CNC.PRECISION</div>
                  <div className="hud-readout hud-readout--bl">PRESS: 10T - 500T</div>
                  <div className="hud-readout hud-readout--br">TOLERANCE: ±0.01mm</div>
                </div>

                {/* Floating Badge 1 - Tagline */}
                <div className="floating-badge badge-motto float-slow">
                  <div className="badge-pulse-dot" />
                  <div>
                    <span className="badge-label">BRAND VALUE</span>
                    <span className="badge-value">Built Strong · Built To Last</span>
                  </div>
                </div>

                {/* Floating Badge 2 - Precision CNC */}
                <div className="floating-badge badge-cnc float-medium">
                  <div className="badge-icon-box">⚙</div>
                  <div>
                    <span className="badge-label">CAPABILITY</span>
                    <span className="badge-value">CNC Precision Jobwork</span>
                  </div>
                </div>

                {/* Floating Badge 3 - Vavdi Hub */}
                <div className="floating-badge badge-hub float-fast">
                  <div className="badge-icon-box">🛡</div>
                  <div>
                    <span className="badge-label">LOCATION</span>
                    <span className="badge-value">Vavdi Industrial Hub</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════ PRODUCTS STRIP ════ */}
      <section className="products-strip">
        <div className="container">
          <div className="strip-header">
            <div>
              <span className="eyebrow">Product Portfolio</span>
              <h2 className="section-title">Industrial Machinery<br />Built to Outperform</h2>
              <div className="rule" />
            </div>
            <Link to="/products" className="btn-outline" style={{ alignSelf: 'flex-end' }}>
              All Products <FaArrowRight size={11} />
            </Link>
          </div>

          <div className="row gy-4">
            {products.map(p => (
              <div className="col-lg-4 col-md-6" key={p.id}>
                <div className="pcard" onClick={() => navigate('/products')}>
                  <div className="pcard-img">
                    <img src={p.image} alt={p.title} />
                    <div className="pcard-img-overlay">
                      <span>View Details</span>
                    </div>
                  </div>
                  <div className="pcard-body">
                    <span className="prod-tag">{p.tag}</span>
                    <h3 className="pcard-title">{p.title}</h3>
                    <p className="pcard-desc">{p.desc}</p>
                    <div className="pcard-tags">
                      {p.specs.map((s, i) => (
                        <span className="pcard-tag" key={i}>{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ ABOUT STRIP ════ */}
      <section className="about-strip">
        <div className="container">
          <div className="row align-items-center gy-5">

            <div className="col-lg-5">
              <div className="about-strip-img">
                <img
                  src={`${process.env.PUBLIC_URL}/images/Screenshot 2026-06-28 121718.png`}
                  alt="Aptismech Precision Engineering Facility"
                />
                <div className="about-cert-badge">
                  <div className="about-cert-badge-icon">🏆</div>
                  <div>
                    <span className="about-cert-badge-main">Certified Manufacturer</span>
                    <span className="about-cert-badge-sub">LLP Registered · Gujarat, India</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 about-strip-content">
              <span className="eyebrow">About Aptismech</span>
              <h2 className="section-title">Precision Built.<br />Performance Proven.</h2>
              <div className="rule" />
              <p style={{ fontSize: '0.93rem', color: 'var(--text-muted)', lineHeight: 1.85, fontFamily: 'Inter', marginBottom: '1.8rem' }}>
                Operating from <strong style={{ color: 'var(--navy)' }}>Vavdi Industrial Hub, Rajkot</strong> — Aptismech
                Corporation LLP engineers high-performance industrial machinery alongside
                micro-tolerance CNC components designed to optimize operations across
                rigorous global supply chains.
              </p>

              <ul className="about-check-list mb-3">
                {[
                  'LLP Registered Corporate Entity — Gujarat, India',
                  'High-Tonnage Deflection-Free Press Technology',
                  'Multi-Axis CNC Machining Facility',
                  'Non-Ferrous Scrap Trading — Copper, Brass, Aluminium',
                  'Genuine Spares & On-Site Technical Service',
                ].map((item, i) => <li key={i}>{item}</li>)}
              </ul>

              <Link to="/about" className="btn-outline">
                Company Profile <FaArrowRight size={11} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ════ PILLARS ════ */}
      <section className="pillars-section">
        <div className="container-fluid p-0">
          <div className="pillars-grid">
            {pillars.map((p, i) => (
              <div className="pillar" key={i}>
                <div className="pillar-num">{p.num}</div>
                <div className="pillar-icon">{p.icon}</div>
                <h4 className="pillar-title">{p.title}</h4>
                <p className="pillar-text">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ STATS BAR ════ */}
      <section className="stats-bar">
        <div className="container-fluid p-0">
          <div className="stats-bar-inner">
            {[
              { num: '500+', label: 'Machines Delivered' },
              { num: '15+',  label: 'Years in Industry'  },
              { num: '200+', label: 'Satisfied Clients'  },
              { num: '3',    label: 'Product Lines'      },
              { num: '100%', label: 'Quality Assured'    },
            ].map((s, i) => (
              <div className="sbar-item" key={i}>
                <span className="sbar-num">{s.num}</span>
                <span className="sbar-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ SERVICES STRIP ════ */}
      <section className="services-strip">
        <div className="container">
          <div className="strip-header">
            <div>
              <span className="eyebrow">Industrial Services</span>
              <h2 className="section-title">Beyond Machines —<br />Complete Solutions</h2>
              <div className="rule" />
            </div>
            <Link to="/services" className="btn-outline" style={{ alignSelf: 'flex-end' }}>
              All Services <FaArrowRight size={11} />
            </Link>
          </div>
          <div className="row gy-4">
            {[
              {
                icon: '⚙',
                title: 'Precision CNC Machining',
                desc: 'High-tolerance multi-axis vertical milling, lathe turning, and custom-profile components executed from rigorous CAD blueprints. Sub-millimeter tolerances for automotive and aerospace.',
              },
              {
                icon: '♻',
                title: 'Non-Ferrous Scrap Trading',
                desc: 'Authorized large-scale processing and wholesale trading for Copper, Brass, and Aluminium recycling streams with certified purity documentation.',
              },
              {
                icon: '🔧',
                title: 'Spares & Maintenance',
                desc: 'Genuine spare parts, preventive maintenance plans, and on-site technical service to sustain production uptime across power press and CNC equipment.',
              },
            ].map((s, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="scard">
                  <div className="scard-icon-wrap">{s.icon}</div>
                  <h4 className="scard-title">{s.title}</h4>
                  <p className="scard-desc">{s.desc}</p>
                  <Link to="/services" className="scard-link">
                    Learn More <FaArrowRight size={10} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ INQUIRY FORM ════ */}
      <section className="inquiry-section" ref={formRef}>
        <div className="container">
          <div className="row gy-5">

            {/* Left — Contact info */}
            <div className="col-lg-5">
              <div className="inquiry-info-block">
                <span className="eyebrow">Get In Touch</span>
                <h2 className="section-title">Request an Instant Quote</h2>
                <div className="rule" />
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.8, fontFamily: 'Inter', marginBottom: '1.8rem' }}>
                  Fill the form or reach us directly. Our technical team responds within 2 hours.
                </p>

                {[
                  { icon: <FaPhoneAlt />, label: 'Sales — Ankit Dholakiya',     val: '+91 70465 00555',                      href: 'tel:+917046500555' },
                  { icon: <FaPhoneAlt />, label: 'Operations — Mayurbhai Jani', val: '+91 88666 16585',                      href: 'tel:+918866616585' },
                  { icon: <FaEnvelope />, label: 'Email',                        val: 'AptisMech.Corporation.llp@gmail.com',  href: 'mailto:AptisMech.Corporation.llp@gmail.com' },
                  { icon: <FaWhatsapp />, label: 'WhatsApp Inquiry',             val: '+91 88666 16585',                      href: WA },
                ].map((item, i) => (
                  <a key={i} href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="contact-line"
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="contact-line-icon">{item.icon}</div>
                    <div>
                      <span className="contact-line-label">{item.label}</span>
                      <span className="contact-line-val">{item.val}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="col-lg-7">
              <div className="form-card">
                {sent ? (
                  <div className="text-center py-5">
                    <FaCheckCircle size={60} color="#F5A623" style={{ marginBottom: '1.2rem' }} />
                    <h3 style={{ fontFamily: 'Barlow', color: 'var(--navy)', fontWeight: 800, fontSize: '1.6rem' }}>
                      Inquiry Sent!
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontFamily: 'Inter', maxWidth: 340, margin: '0.5rem auto 1.5rem', lineHeight: 1.7, fontSize: '0.9rem' }}>
                      Forwarded via WhatsApp. Our team will respond within 2 hours.
                    </p>
                    <button className="btn-brand mx-auto" onClick={() => setSent(false)}>
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h4 className="form-title">Quick Inquiry Form</h4>
                    <p className="form-sub">
                      All inquiries are sent directly to WhatsApp for instant response.
                    </p>
                    <div className="row gy-3">
                      <div className="col-md-6">
                        <label className="field-label">Your Name *</label>
                        <input className="field-input" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full name" required />
                      </div>
                      <div className="col-md-6">
                        <label className="field-label">Company</label>
                        <input className="field-input" type="text" name="company" value={form.company} onChange={handleChange} placeholder="Company name" />
                      </div>
                      <div className="col-md-6">
                        <label className="field-label">Phone *</label>
                        <input className="field-input" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
                      </div>
                      <div className="col-md-6">
                        <label className="field-label">Email</label>
                        <input className="field-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                      </div>
                      <div className="col-12">
                        <label className="field-label">Product / Service *</label>
                        <select className="field-input" name="product" value={form.product} onChange={handleChange} required>
                          <option value="">— Select —</option>
                          <option>Mechanical Power Press (C-Frame)</option>
                          <option>Mechanical Power Press (H-Frame)</option>
                          <option>Pneumatic Assembly Press</option>
                          <option>Hydro-Pneumatic Hybrid System</option>
                          <option>Precision CNC Machining</option>
                          <option>Non-Ferrous Scrap Trading</option>
                          <option>Industrial Spares & Maintenance</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="field-label">Message / Requirements</label>
                        <textarea className="field-input" name="message" value={form.message} onChange={handleChange}
                          rows={4} placeholder="Tonnage, bed size, quantity, timeline…" style={{ resize: 'vertical' }} />
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn-brand w-100" style={{ justifyContent: 'center', padding: '14px' }}>
                          <FaWhatsapp size={16} /> Send Inquiry via WhatsApp
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ CTA BANNER ════ */}
      <section className="cta-banner">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-8">
              <h2 className="cta-title">Ready to Power Your Production?</h2>
              <p className="cta-text">
                From power press selection to CNC machining jobs — Aptismech delivers the precision that drives performance.
              </p>
            </div>
            <div className="col-lg-4 d-flex flex-wrap gap-3 justify-content-lg-end">
              <a href={WA} target="_blank" rel="noreferrer" className="btn-brand">
                <FaWhatsapp size={14} /> WhatsApp Now
              </a>
              <Link to="/contact" className="btn-outline-white">
                Contact Us <FaArrowRight size={11} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
