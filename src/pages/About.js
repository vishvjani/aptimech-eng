import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowRight, FaWhatsapp, FaShieldAlt, FaCogs,
  FaCheckCircle, FaQuoteLeft, FaBoxes, FaTruckMoving
} from 'react-icons/fa';
import './About.css';

const WA = "https://wa.me/918866616585?text=Hello%20AptisMech%2C%20I%20would%20like%20to%20know%20more%20about%20your%20company%20and%20manufacturing%20capabilities.";

const whyTradeCards = [
  {
    icon: <FaShieldAlt />,
    num: '01',
    title: 'Uncompromising Quality & Precision',
    desc: 'Manufactured with strict dimensional tolerances, high-grade structural steels, and rigorous quality controls to ensure maximum durability and performance under heavy industrial loads.',
  },
  {
    icon: <FaBoxes />,
    num: '02',
    title: 'Comprehensive Product Portfolio',
    desc: 'A one-stop solution covering heavy machinery (Presses, Press Brakes, Shears, Ironworkers), precision components (Brackets, Fasteners, Adapters, Bushings, Collars), and categorized metal scrap trading.',
  },
  {
    icon: <FaCogs />,
    num: '03',
    title: 'Customized Engineering Solutions',
    desc: 'Tailor-made machinery specifications, custom mountings, and specialized tooling designed precisely around your unique manufacturing workflow and production cycles.',
  },
  {
    icon: <FaTruckMoving />,
    num: '04',
    title: 'Reliable Supply & Transparency',
    desc: 'Consistent material flow, accurate weighing, transparent transactions, and on-time delivery engineered to keep your production lines moving forward without interruption.',
  },
];

const partners = [
  {
    name: 'Mr. Ankit Dholakiya',
    role: 'Designated Partner — Sales & Strategic Partnerships',
    phone: '+91 70465 00555',
    tel: 'tel:+917046500555',
    initials: 'AD',
    expertise: ['Industrial Machinery Sales', 'Client Partnerships', 'Commercial Strategy', 'Scrap Trading Alliances'],
  },
  {
    name: 'Mr. Mayurbhai Jani',
    role: 'Designated Partner — Operations & Technical Governance',
    phone: '+91 88666 16585',
    tel: 'tel:+918866616585',
    initials: 'MJ',
    expertise: ['Fabrication Engineering', 'Quality Assurance & Calibration', 'Custom SPM Development', 'Logistics Operations'],
  },
];

export default function About() {
  return (
    <>
      {/* ════ PAGE HERO ════ */}
      <section className="about-hero">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-9">
              <span className="about-hero-eyebrow">
                <span className="dot-pulse" />
                APTISMECH CORPORATION LLP · RAJKOT, GUJARAT
              </span>
              <h1 className="about-hero-title">
                Precision Manufacturing &<br />
                <span style={{ color: '#F5A623' }}>Engineering Solutions</span>
              </h1>
              <p className="about-hero-desc mx-auto">
                Premier machinery manufacturer, precision hardware supplier, and industrial scrap trading partner
                dedicated to driving excellence across modern engineering and manufacturing sectors.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap mt-4">
                <a href={WA} target="_blank" rel="noreferrer" className="btn-brand">
                  <FaWhatsapp size={15} /> WhatsApp Company Inquiry
                </a>
                <Link to="/products" className="btn-outline-white">
                  Explore 22+ Products <FaArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ COMPANY OVERVIEW ════ */}
      <section className="company-overview-section">
        <div className="container">
          <div className="row align-items-center gy-5">

            <div className="col-lg-6">
              <span className="eyebrow">Corporate Profile</span>
              <h2 className="section-title">Company Overview</h2>
              <div className="rule" />
              
              <div className="overview-main-text">
                <p className="lead-overview-p">
                  <strong style={{ color: 'var(--navy)' }}>AptisMech Corporation LLP</strong>, based in Rajkot,
                  is a premier engineering solutions provider, specialized machinery manufacturer, precision hardware supplier,
                  and industrial scrap trading firm.
                </p>
                <p className="sub-overview-p">
                  We deliver high-performance fabrication machinery, robust industrial components, precision fasteners,
                  and categorized metal scrap streams tailored to support modern manufacturing plants, tool rooms,
                  and heavy engineering industries with unwavering reliability and efficiency.
                </p>
              </div>

              <div className="about-highlights-list">
                {[
                  'LLP Registered Corporate Engineering Firm in Gujarat',
                  'Heavy Hydraulic & Mechanical Press Machinery (10T–500T)',
                  'Micro-Tolerance CNC Turned Components & Precision Hardware',
                  'Categorized Metal Scrap Supply (MS, SS, Aluminium, Brass, Copper)',
                  'Zero-Deflection High-Tensile Stress-Relieved Structural Frames',
                ].map((item, idx) => (
                  <div className="highlight-item" key={idx}>
                    <FaCheckCircle className="highlight-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="overview-card-grid">
                {[
                  {
                    icon: '🏛️',
                    label: 'Corporate Entity',
                    val: 'Limited Liability Partnership (LLP)',
                    sub: 'Incorporated under MCA, Govt. of India',
                  },
                  {
                    icon: '📍',
                    label: 'Manufacturing Hub',
                    val: 'Vavdi Industrial Area, Rajkot',
                    sub: 'Jasmatnagar, Street No. 4, Plot No. 6',
                  },
                  {
                    icon: '⚙️',
                    label: 'Core Specialization',
                    val: 'Heavy Presses, CNC & Hardware',
                    sub: 'Custom Tonnage & Tailored SPM Builds',
                  },
                  {
                    icon: '♻️',
                    label: 'Industrial Trading',
                    val: 'Categorized Metal Scrap',
                    sub: 'Transparent Weighing & Supply',
                  },
                ].map((card, i) => (
                  <div className="overview-info-card" key={i}>
                    <div className="overview-card-icon">{card.icon}</div>
                    <div>
                      <span className="overview-card-label">{card.label}</span>
                      <h4 className="overview-card-val">{card.val}</h4>
                      <p className="overview-card-sub">{card.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════ WHY TRADE AND DO BUSINESS WITH US ════ */}
      <section className="why-trade-section">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <span className="eyebrow">Our Competitive Advantage</span>
              <h2 className="section-title">Why Trade and Do Business with Us?</h2>
              <div className="rule center" />
              <p className="section-subtitle mx-auto">
                Built on engineering rigor, transparent commercial ethics, and long-term customer partnerships.
              </p>
            </div>
          </div>

          <div className="row gy-4">
            {whyTradeCards.map((c, i) => (
              <div className="col-lg-6" key={i}>
                <div className="why-card">
                  <div className="why-card-top">
                    <div className="why-icon-box">{c.icon}</div>
                    <span className="why-num">{c.num}</span>
                  </div>
                  <h3 className="why-title">{c.title}</h3>
                  <p className="why-desc">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ VISION STATEMENT (HIGHLIGHT BLOCK) ════ */}
      <section className="vision-banner-section">
        <div className="container">
          <div className="vision-banner-card">
            <div className="vision-quote-icon">
              <FaQuoteLeft />
            </div>
            <span className="vision-badge">Official Vision Statement</span>
            <blockquote className="vision-quote-text">
              "To be the definitive global benchmark for engineering excellence, transforming industrial landscapes
              by seamlessly bridging the gap between heavy-duty power and high-tech automation through unmatched precision manufacturing."
            </blockquote>
            <div className="vision-author">
              <span className="author-corp">AptisMech Corporation LLP</span>
              <span className="author-sub">Rajkot, Gujarat · India</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════ TECHNICAL LEADERSHIP TEAM ════ */}
      <section className="leadership-section">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-7">
              <span className="eyebrow">Leadership</span>
              <h2 className="section-title">Technical Leadership Team</h2>
              <div className="rule center" />
              <p className="section-subtitle mx-auto">
                Experienced designated partners leading engineering innovation, quality control, and client relationships.
              </p>
            </div>
          </div>

          <div className="row justify-content-center gy-4">
            {partners.map((p, i) => (
              <div className="col-lg-6 col-md-8" key={i}>
                <div className="partner-card">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="partner-avatar">{p.initials}</div>
                    <div>
                      <h3 className="partner-name">{p.name}</h3>
                      <p className="partner-role">{p.role}</p>
                    </div>
                  </div>

                  <div className="partner-expertise-strip">
                    {p.expertise.map((e, j) => (
                      <span className="expertise-tag" key={j}>{e}</span>
                    ))}
                  </div>

                  <div className="partner-contact-links">
                    <a href={p.tel} className="partner-c-btn">
                      📞 {p.phone}
                    </a>
                    <a href="mailto:AptisMech.Corporation.llp@gmail.com" className="partner-c-btn">
                      ✉️ Email
                    </a>
                    <a
                      href={`https://wa.me/${p.phone.replace(/\D/g, '')}?text=Hello%20${encodeURIComponent(p.name)}%2C%20I%20would%20like%20to%20connect%20with%20AptisMech.`}
                      target="_blank" rel="noreferrer"
                      className="partner-c-btn partner-wa-btn"
                    >
                      <FaWhatsapp size={13} /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ STRATEGIC LOCATION & FACILITY ════ */}
      <section className="location-section">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-7">
              <span className="eyebrow" style={{ color: 'var(--orange)' }}>Strategic Footprint</span>
              <h2 className="location-title">
                Operating in Gujarat's Premier Industrial Corridor
              </h2>
              <div className="rule" />
              <p className="location-desc">
                Shed No. 3, Jasmatnagar, Street No. 4, Plot No. 6,<br />
                <strong style={{ color: '#F5A623' }}>Vavdi Industrial Area, Rajkot-360004, Gujarat, India.</strong>
              </p>
              <p className="location-sub-desc">
                Rajkot's Vavdi Industrial Area gives AptisMech direct access to top-tier metallurgy supply chains,
                advanced casting foundries, skilled precision machinists, and multi-modal logistics networks across India.
              </p>
            </div>

            <div className="col-lg-5">
              <div className="location-box-card">
                <div className="location-pin-icon">📍</div>
                <h3 className="location-box-title">APTISMECH CORPORATION LLP</h3>
                <p className="location-box-addr">
                  Shed No. 3, Jasmatnagar,<br />
                  Street No. 4, Plot No. 6,<br />
                  Vavdi Industrial Area,<br />
                  Rajkot-360004, Gujarat, India.
                </p>
                <div className="d-flex gap-2 justify-content-center flex-wrap">
                  <a
                    href="https://maps.google.com/?q=Vavdi+Industrial+Area+Rajkot+Gujarat"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-brand"
                    style={{ fontSize: '0.78rem', padding: '10px 18px' }}
                  >
                    📍 View on Google Maps
                  </a>
                  <Link to="/contact" className="btn-outline-white" style={{ fontSize: '0.78rem', padding: '10px 18px' }}>
                    Contact Us <FaArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
