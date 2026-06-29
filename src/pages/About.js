import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import './About.css';

const WA = "https://wa.me/918866616585?text=Hello%20Aptismech%2C%20I%20have%20a%20query%20about%20your%20company.";

const About = () => (
  <>
    {/* PAGE HERO */}
    <section className="page-hero">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <span className="page-hero-eyebrow">About Aptismech</span>
            <h1 className="page-hero-title">
              Precision. <span style={{ color: '#F5A623' }}>Performance.</span> Partnership.
            </h1>
            <p className="page-hero-desc mx-auto">
              A premier certified LLP dedicated to driving excellence across modern
              manufacturing landscapes — from power presses to precision CNC components.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a href={WA} target="_blank" rel="noreferrer" className="btn-brand">
                <FaWhatsapp size={14} /> Get In Touch
              </a>
              <Link to="/products" className="btn-outline-white">
                Our Products <FaArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CORPORATE INTRO */}
    <section style={{ padding: '90px 0', background: '#fff', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6">
            <span className="eyebrow">Who We Are</span>
            <h2 className="section-title">Aptismech Corporation LLP</h2>
            <div className="rule" />
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontFamily: 'Inter', fontSize: '0.93rem', marginBottom: '1rem' }}>
              <strong style={{ color: 'var(--navy)' }}>Aptismech Corporation LLP</strong> is a premier certified Limited Liability Partnership
              dedicated to driving absolute excellence across modern manufacturing landscapes.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontFamily: 'Inter', fontSize: '0.93rem', marginBottom: '1rem' }}>
              Operating from the prominent manufacturing corridor of <strong style={{ color: 'var(--navy)' }}>Vavdi Industrial Area, Rajkot, Gujarat</strong>,
              we engineer high-performance industrial machinery alongside micro-tolerance custom-machined components
              designed to optimize operations across rigorous global supply chains.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, fontFamily: 'Inter', fontSize: '0.93rem', marginBottom: '2rem' }}>
              The name <em>Aptismech</em> — from Latin <em>"aptus"</em> (fit, capable) and <em>"Mech"</em> (Mechanical)
              — translates to <strong style={{ color: 'var(--navy)' }}>"Fit for Mechanics"</strong>, embodying our commitment to precision and reliability.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'LLP Registered Corporate Entity',
                'Certified Quality Management Systems',
                'Located in Vavdi Industrial Hub, Rajkot',
                'Comprehensive Technical Leadership Team',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, fontFamily: 'Inter', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <span style={{ width: 18, height: 18, background: 'var(--orange)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#fff', fontSize: '0.55rem' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-6">
            <div className="about-info-grid">
              {[
                { label: 'Entity Type',      value: 'Limited Liability Partnership (LLP)', icon: '🏛️' },
                { label: 'Industry',          value: 'Industrial Machinery Manufacturing',  icon: '🏭' },
                { label: 'Location',          value: 'Vavdi Industrial Area, Rajkot-360004', icon: '📍' },
                { label: 'Specialization',    value: 'Power Presses · CNC · Scrap Trading', icon: '⚙️' },
              ].map((item, i) => (
                <div className="about-info-card" key={i}>
                  <div className="about-info-icon">{item.icon}</div>
                  <div>
                    <span className="about-info-label">{item.label}</span>
                    <span className="about-info-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* VISION & PHILOSOPHY */}
    <section style={{ background: 'var(--off-white)', padding: '90px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-6">
            <span className="eyebrow">Our Foundation</span>
            <h2 className="section-title">Vision & Quality Philosophy</h2>
            <div className="rule center" />
          </div>
        </div>
        <div className="row gy-4">
          {[
            {
              icon: '🎯',
              title: 'Our Vision',
              desc: 'To become the premier industrial machinery brand of Gujarat — recognized globally for deflection-free precision pressing technology, micro-tolerance CNC excellence, and responsible non-ferrous material logistics.',
              accent: 'var(--navy)',
            },
            {
              icon: '⭐',
              title: 'Quality Management',
              desc: 'Every unit undergoes stringent dimensional inspection, load-test validation, and surface-finish verification. Our quality management system ensures zero compromise from raw material to final dispatch.',
              accent: 'var(--orange)',
            },
            {
              icon: '🤝',
              title: 'Technical Leadership',
              desc: 'Led by experienced partners Mr. Ankit Dholakiya (Sales) and Mr. Mayurbhai Jani (Operations), our team brings decades of combined expertise in industrial machinery engineering.',
              accent: 'var(--navy-light)',
            },
          ].map((item, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="vision-card">
                <div className="vision-card-top" style={{ background: `${item.accent}10`, borderTop: `4px solid ${item.accent}` }}>
                  <span style={{ fontSize: '2.5rem' }}>{item.icon}</span>
                </div>
                <div className="vision-card-body">
                  <h4 className="vision-card-title">{item.title}</h4>
                  <p className="vision-card-text">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* TECHNICAL PARTNERS */}
    <section style={{ padding: '90px 0', background: '#fff', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-6">
            <span className="eyebrow">Leadership</span>
            <h2 className="section-title">Technical Leadership Team</h2>
            <div className="rule center" />
          </div>
        </div>
        <div className="row justify-content-center gy-4">
          {[
            {
              name: 'Mr. Ankit Dholakiya',
              role: 'Designated Partner — Sales & Business Development',
              phone: '+91 70465 00555',
              tel: 'tel:+917046500555',
              initials: 'AD',
              expertise: ['Industrial Sales', 'Client Relations', 'Business Strategy', 'Market Development'],
            },
            {
              name: 'Mr. Mayurbhai Jani',
              role: 'Designated Partner — Operations & Technical',
              phone: '+91 88666 16585',
              tel: 'tel:+918866616585',
              initials: 'MJ',
              expertise: ['Manufacturing Ops', 'Technical Oversight', 'Quality Management', 'Production Planning'],
            },
          ].map((person, i) => (
            <div className="col-lg-5 col-md-8" key={i}>
              <div className="partner-card">
                <div className="partner-avatar">{person.initials}</div>
                <h3 className="partner-name">{person.name}</h3>
                <p className="partner-role">{person.role}</p>
                <div className="partner-expertise">
                  {person.expertise.map((e, j) => (
                    <span className="expertise-tag" key={j}>{e}</span>
                  ))}
                </div>
                <div className="partner-contacts">
                  <a href={person.tel} className="partner-contact-btn">
                    📞 {person.phone}
                  </a>
                  <a href="mailto:AptisMech.Corporation.llp@gmail.com" className="partner-contact-btn">
                    ✉️ Email
                  </a>
                  <a
                    href={`https://wa.me/${person.phone.replace(/\D/g, '')}?text=Hello ${person.name}`}
                    target="_blank" rel="noreferrer"
                    className="partner-contact-btn partner-wa"
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

    {/* LOCATION */}
    <section style={{ background: 'var(--navy)', padding: '80px 0', borderTop: '4px solid var(--orange)' }}>
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-lg-7">
            <span className="eyebrow">Strategic Footprint</span>
            <h2 style={{ fontFamily: 'Barlow', fontWeight: 900, color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '1rem' }}>
              Located at India's Industrial Heart
            </h2>
            <div className="rule" />
            <p style={{ color: 'rgba(255,255,255,0.62)', fontFamily: 'Inter', lineHeight: 1.85, marginBottom: '1.5rem', fontSize: '0.93rem' }}>
              Shed No. 3, Jasmatnagar, Street No. 4, Plot No. 6,{' '}
              <strong style={{ color: '#F5A623' }}>Vavdi Industrial Area, Rajkot-360004, Gujarat, India.</strong>
            </p>
            <p style={{ color: 'rgba(255,255,255,0.48)', fontFamily: 'Inter', lineHeight: 1.85, fontSize: '0.88rem' }}>
              Rajkot's Vavdi Industrial Area is one of Gujarat's most prominent manufacturing corridors, giving us direct access
              to raw material supply chains, logistics networks, and engineering talent.
            </p>
          </div>
          <div className="col-lg-5 text-center">
            <div className="location-card">
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📍</div>
              <div style={{ color: '#F5A623', fontFamily: 'Barlow', fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                APTISMECH CORPORATION LLP
              </div>
              <div style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter', fontSize: '0.85rem', lineHeight: 1.8, marginBottom: '1.2rem' }}>
                Shed No. 3, Jasmatnagar,<br />
                Street No. 4, Plot No. 6,<br />
                Vavdi Industrial Area,<br />
                Rajkot-360004, Gujarat, India.
              </div>
              <div className="d-flex gap-2 justify-content-center flex-wrap">
                <a href="https://maps.google.com/?q=Vavdi+Industrial+Area+Rajkot+Gujarat"
                  target="_blank" rel="noreferrer" className="btn-brand" style={{ fontSize: '0.78rem', padding: '9px 16px' }}>
                  📍 View on Maps
                </a>
                <Link to="/contact" className="btn-outline-white" style={{ fontSize: '0.78rem', padding: '9px 16px' }}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;
