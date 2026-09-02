import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaWhatsapp, FaArrowRight, FaCheckCircle,
  FaPhoneAlt, FaEnvelope, FaShieldAlt, FaCog, FaBolt,
  FaExpand
} from 'react-icons/fa';
import './Home.css';

const WA = "https://wa.me/918866616585?text=Hello%20AptisMech%2C%20I%20would%20like%20to%20request%20a%20quotation%20for%20industrial%20machinery.";

const products = [
  {
    id: 'mach-101',
    tag: 'Mechanical Series',
    title: 'Mechanical Multi-Functional Ironworker',
    desc: 'Versatile heavy-duty machine engineered for plate shearing, punching, angle/bar cutting, and notch-making in a single compact unit (AMC55 to AMC125).',
    image: `${process.env.PUBLIC_URL}/products/multi_functional_machine.jpg`,
    specs: ['55T — 125T', 'Multi-Station', '30 SPM'],
  },
  {
    id: 'mach-109',
    tag: 'Bending Series',
    title: 'CNC Front Cylinder Hydraulic Press Brake',
    desc: 'Front-cylinder synchronized design delivering superior bending accuracy, multi-axis back gauge positioning, and auto-crowning deflection compensation.',
    image: `${process.env.PUBLIC_URL}/products/cnc_hydraulic_press_brake.png`,
    specs: ['40T — 120T', '1270 — 3125mm', 'CNC Touch'],
  },
  {
    id: 'mach-108',
    tag: 'SPM Automation',
    title: 'Hydraulic C-Type Press Machine — SPM',
    desc: 'Special Purpose Machine (SPM) on an open C-frame platform, custom-engineered for high-speed repetitive stamping, punching, and forming operations.',
    image: `${process.env.PUBLIC_URL}/products/c_type_press_spm.png`,
    specs: ['10T — 250T', 'Adjustable Stroke', 'PLC Ready'],
  },
];

const pillars = [
  {
    icon: <FaCog size={22} />,
    num: '01',
    title: 'Engineering Excellence',
    text: 'High-tensile stress-relieved steel frames with zero structural deflection across all press and shearing equipment. Built for continuous heavy industrial operation.',
  },
  {
    icon: <FaShieldAlt size={22} />,
    num: '02',
    title: 'Certified Quality',
    text: 'Stringent dimensional inspection, multi-point load-test validation, and hydraulic pressure verification on every unit prior to dispatch from our Rajkot facility.',
  },
  {
    icon: <FaBolt size={22} />,
    num: '03',
    title: 'Complete Industrial Partner',
    text: 'Heavy machinery, precision CNC components, industrial hardware spares, and categorized metal scrap — one trusted partner for end-to-end manufacturing support.',
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
    const msg = `Hello AptisMech Corporation LLP,%0A%0AName: ${form.name}%0ACompany: ${form.company}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AProduct Requirement: ${form.product}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/918866616585?text=${msg}`, '_blank');
    setSent(true);
  };

  return (
    <>
      {/* ════ HERO SECTION ════ */}
      <section className="hero">
        <div className="hero-texture" />
        <div className="hero-accent-bar" />

        <div className="container position-relative">
          <div className="row align-items-center gy-5 hero-main-row">

            {/* Left Column: Headline, Subtitle, Description, CTAs, Stats */}
            <div className="col-lg-6 hero-left-col">
              <div className="hero-content">
                <div className="hero-label">
                  <span className="hero-label-line" />
                  Vavdi Industrial Area, Rajkot · Since 2009
                </div>

                <h1 className="hero-heading">
                  Industrial<br />
                  <span className="hero-heading-accent">Precision</span><br />
                  Machinery
                </h1>
                <p className="hero-sub-heading">Power · Accuracy · Reliability</p>

                <p className="hero-desc">
                  AptisMech Corporation LLP manufactures high-tonnage power presses (10T to 500T),
                  precision CNC synchronized press brakes, hydraulic shearing machines, and industrial hardware
                  trusted by leading manufacturing plants across India.
                </p>

                <div className="hero-cta">
                  <a href={WA} target="_blank" rel="noreferrer" className="btn-brand">
                    <FaWhatsapp size={15} /> WhatsApp Inquiry
                  </a>
                  <button
                    onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-outline-white"
                  >
                    Request Quote <FaArrowRight size={12} />
                  </button>
                </div>

                {/* Hero Stats */}
                <div className="hero-stats">
                  {[
                    { num: '500+', label: 'Delivered Machines' },
                    { num: '15+',  label: 'Years Experience'   },
                    { num: '22+',  label: 'Catalog Products'   },
                    { num: '100%', label: 'Quality Assured'    },
                  ].map(s => (
                    <div className="hero-stat" key={s.label}>
                      <span className="hero-stat-num">{s.num}</span>
                      <span className="hero-stat-label">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Prominent Large Visual HUD Frame */}
            <div className="col-lg-6 hero-right-col">
              <div className="hero-img-panel">
                
                {/* HUD Vector Crosshair Background */}
                <div className="hud-bg-grid" />

                <div className="hero-img-frame" onClick={() => navigate('/products')}>
                  {/* Color grading overlay that fades on hover */}
                  <div className="hero-factory-color-grade" />
                  
                  <img
                    src={`${process.env.PUBLIC_URL}/products/cnc_hydraulic_press_brake.png`}
                    alt="AptisMech CNC Synchronized Press Brake & Fabrication Facility"
                    className="hero-factory-img"
                    onError={(e) => {
                      e.currentTarget.src = `${process.env.PUBLIC_URL}/images/hero-factory.jpg`;
                    }}
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
                  <div className="hud-readout hud-readout--tr">MODE: CNC.SYNCHRO</div>
                  <div className="hud-readout hud-readout--bl">PRESS: 10T - 500T</div>
                  <div className="hud-readout hud-readout--br">TOLERANCE: ±0.01mm</div>
                </div>

                {/* Floating Badge 1 - Top Right */}
                <div className="floating-badge badge-motto float-slow">
                  <div className="badge-pulse-dot" />
                  <div>
                    <span className="badge-label">BRAND VALUE</span>
                    <span className="badge-value">Built Strong · Built To Last</span>
                  </div>
                </div>

                {/* Floating Badge 2 - Bottom Left */}
                <div className="floating-badge badge-hub float-fast">
                  <div className="badge-icon-box">🛡</div>
                  <div>
                    <span className="badge-label">LOCATION</span>
                    <span className="badge-value">Vavdi Industrial Hub, Rajkot</span>
                  </div>
                </div>

                {/* Floating Badge 3 - Bottom Right */}
                <div className="floating-badge badge-cnc float-medium">
                  <div className="badge-icon-box">⚙</div>
                  <div>
                    <span className="badge-label">MACHINERY</span>
                    <span className="badge-value">CNC Synchro Press Brakes</span>
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
              <h2 className="section-title">Heavy Fabrication Machinery<br />Built to Outperform</h2>
              <div className="rule" />
            </div>
            <Link to="/products" className="btn-outline" style={{ alignSelf: 'flex-end' }}>
              Full 22+ Product Catalog <FaArrowRight size={12} />
            </Link>
          </div>

          <div className="row gy-4">
            {products.map(p => (
              <div className="col-lg-4 col-md-6" key={p.id}>
                <div className="pcard" onClick={() => navigate('/products')}>
                  <div className="pcard-img">
                    <img src={p.image} alt={p.title} />
                    <div className="pcard-img-overlay">
                      <span><FaExpand size={14} className="me-1" /> View Specifications</span>
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
              <div className="about-strip-visual">
                <img
                  src={`${process.env.PUBLIC_URL}/products/multi_functional_machine.jpg`}
                  alt="AptisMech Precision Engineering Facility"
                  className="about-strip-img"
                />
                <div className="about-cert-badge">
                  <div className="about-cert-icon">🏆</div>
                  <div>
                    <span className="about-cert-main">Certified Manufacturer</span>
                    <span className="about-cert-sub">LLP Registered · Vavdi, Rajkot</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 about-strip-content">
              <span className="eyebrow">About AptisMech</span>
              <h2 className="section-title">Fit for Mechanics.<br />Proven in Industry.</h2>
              <div className="rule" />
              <p className="about-strip-text">
                Operating from the prestigious <strong style={{ color: '#0A3981' }}>Vavdi Industrial Hub in Rajkot</strong> — AptisMech
                Corporation LLP delivers high-performance fabrication machinery alongside micro-tolerance CNC components,
                industrial spares, and categorized non-ferrous scrap streams tailored to support modern manufacturing plants.
              </p>

              <div className="about-check-grid mb-4">
                {[
                  'LLP Registered Corporate Entity — Gujarat, India',
                  'High-Tonnage Deflection-Free Press Technology (10T–500T)',
                  'Precision CNC Machining & Indexable Carbide Tooling',
                  'Categorized Metal Scrap Trading — Copper, Brass, Aluminium, MS, SS',
                  'Genuine Spares, High-Pressure Fittings & On-Site Technical Service',
                ].map((item, idx) => (
                  <div className="check-item" key={idx}>
                    <FaCheckCircle className="check-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/about" className="btn-brand">
                Company Profile & Leadership <FaArrowRight size={12} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ════ PILLARS SECTION ════ */}
      <section className="pillars-section">
        <div className="container">
          <div className="row gy-4">
            {pillars.map((p, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="pillar-item">
                  <div className="pillar-top">
                    <span className="pillar-num">{p.num}</span>
                    <div className="pillar-icon-box">{p.icon}</div>
                  </div>
                  <h4 className="pillar-title">{p.title}</h4>
                  <p className="pillar-text">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ INQUIRY SECTION ════ */}
      <section className="inquiry-section" ref={formRef}>
        <div className="container">
          <div className="row gy-5">

            {/* Left Contact Info */}
            <div className="col-lg-5">
              <div className="inquiry-info-block">
                <span className="eyebrow">Get in Touch</span>
                <h2 className="section-title">Request a Quick Quotation</h2>
                <div className="rule" />
                <p className="inquiry-lead">
                  Reach our technical partners directly for machine specifications, custom tonnage requirements, or wholesale scrap inquiries.
                </p>

                <div className="inquiry-contact-cards">
                  {[
                    { icon: <FaPhoneAlt />, label: 'Sales — Mr. Ankit Dholakiya', val: '+91 70465 00555', href: 'tel:+917046500555' },
                    { icon: <FaPhoneAlt />, label: 'Operations — Mr. Mayurbhai Jani', val: '+91 88666 16585', href: 'tel:+918866616585' },
                    { icon: <FaEnvelope />, label: 'Email Address', val: 'AptisMech.Corporation.llp@gmail.com', href: 'mailto:AptisMech.Corporation.llp@gmail.com' },
                    { icon: <FaWhatsapp />, label: 'Direct WhatsApp', val: '+91 88666 16585', href: WA },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="inquiry-contact-line"
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
            </div>

            {/* Right Form */}
            <div className="col-lg-7">
              <div className="form-card">
                {sent ? (
                  <div className="text-center py-5">
                    <FaCheckCircle size={60} color="#F5A623" className="mb-3" />
                    <h3 style={{ color: 'var(--navy)', fontFamily: 'Barlow' }}>Inquiry Forwarded Successfully!</h3>
                    <p className="text-muted max-w-sm mx-auto my-3">
                      Your inquiry details have been forwarded to our WhatsApp hotline. Our engineering team will reply within 2 business hours.
                    </p>
                    <button className="btn-brand mt-2" onClick={() => setSent(false)}>
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="form-title">Instant Request for Quotation (RfQ)</h3>
                    <p className="form-sub">
                      Fill the details below to generate a direct inquiry message for our technical team.
                    </p>

                    <div className="row gy-3">
                      <div className="col-md-6">
                        <label className="field-label">Full Name *</label>
                        <input className="field-input" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                      </div>
                      <div className="col-md-6">
                        <label className="field-label">Company / Organization</label>
                        <input className="field-input" type="text" name="company" value={form.company} onChange={handleChange} placeholder="Company name" />
                      </div>
                      <div className="col-md-6">
                        <label className="field-label">Phone Number *</label>
                        <input className="field-input" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
                      </div>
                      <div className="col-md-6">
                        <label className="field-label">Email Address</label>
                        <input className="field-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="email@company.com" />
                      </div>
                      <div className="col-12">
                        <label className="field-label">Product of Interest *</label>
                        <select className="field-input" name="product" value={form.product} onChange={handleChange} required>
                          <option value="">— Select Category / Machine —</option>
                          <optgroup label="Heavy Machinery">
                            <option>Mechanical Multi-Functional Ironworker (AMC Series)</option>
                            <option>Hydraulic C-Type Punching Machine</option>
                            <option>Hydraulic H-Type Press Machine (20T–500T)</option>
                            <option>H-Type Workshop Press (Power Operated)</option>
                            <option>Hydraulic C-Type Press SPM (10T–250T)</option>
                            <option>CNC Front Cylinder Press Brake (40T–120T)</option>
                            <option>NC Hydraulic Shearing Machine (1525mm–4000mm)</option>
                          </optgroup>
                          <optgroup label="Hardware, Motors & Scrap">
                            <option>Plates & Custom Mounts</option>
                            <option>Fasteners, Knurled Nuts & SPM Cover Nuts</option>
                            <option>Industrial Brackets & Mounts</option>
                            <option>SPM Shaft Collars & Clevis Linkages</option>
                            <option>CNC Indexable Carbide Turning Inserts</option>
                            <option>Three-Phase Induction Motors (IP55)</option>
                            <option>Categorized Metal Scrap (MS, SS, Al, Cu, Brass)</option>
                          </optgroup>
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="field-label">Requirements / Tonnage / Specs</label>
                        <textarea
                          className="field-input"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Specify tonnage, plate thickness, material, quantity, delivery location, etc."
                          style={{ resize: 'vertical' }}
                        />
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn-brand w-100 justify-content-center" style={{ padding: '14px' }}>
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
          <div className="cta-banner-inner">
            <div className="row align-items-center gy-4">
              <div className="col-lg-8">
                <h2 className="cta-title">Ready to Upgrade Your Manufacturing Capacity?</h2>
                <p className="cta-text">
                  From heavy hydraulic press selection to custom CNC component machining — AptisMech delivers the precision that drives industrial performance.
                </p>
              </div>
              <div className="col-lg-4 d-flex flex-wrap gap-3 justify-content-lg-end">
                <a href={WA} target="_blank" rel="noreferrer" className="btn-brand">
                  <FaWhatsapp size={15} /> WhatsApp Now
                </a>
                <Link to="/contact" className="btn-outline-white">
                  Contact Us <FaArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
