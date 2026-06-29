import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaArrowRight, FaCheckCircle, FaTimes, FaExpand } from 'react-icons/fa';
import './Products.css';

const productsData = [
  {
    id: 1,
    tag: 'Mechanical Series',
    title: 'Heavy-Duty Mechanical Power Press',
    subtitle: 'C-Frame & H-Frame Configurations',
    category: 'mechanical',
    image: '/images/Screenshot 2026-06-28 121534.png',
    badge: 'Bestseller',
    shortDesc: 'Built for intensive, high-volume metal stamping. Flywheel-driven kinetic energy delivery with zero structural frame deflection — consistent accuracy, stroke after stroke.',
    fullDesc: `The Aptismech Mechanical Power Press is engineered for high-volume production stampings where reliability and repeatability are non-negotiable. The flywheel-driven mechanical linkage transfers maximum kinetic energy directly to the tooling bolster plate, eliminating structural deflection even at peak tonnage.

Available in C-Frame (open-back inclinable) and H-Frame (straight-side) configurations, each machine is built on high-tensile stress-relieved steel frames with an oil-bath enclosed drivetrain for long, low-maintenance service life.`,
    specs: [
      { label: 'Tonnage Range', value: '10T — 400T' },
      { label: 'Frame Type',    value: 'C-Frame & H-Frame' },
      { label: 'Stroke Adj.',   value: 'Mechanical Variable' },
      { label: 'Clutch',        value: 'Pneumatic Friction' },
      { label: 'Drive',         value: 'Oil-Bath Enclosed' },
      { label: 'Control',       value: 'PLC + Touch Panel' },
    ],
    features: [
      'Combined pneumatic clutch & brake',
      'High-tensile stress-relieved steel frames',
      'Oil-bath enclosed drivetrain',
      'Precision-ground adjustable stroke',
      'Emergency stop & safety light curtain',
      'Overload protection mechanism',
      'Centralized lubrication system',
      'CE & ISO compliant build',
    ],
    applications: ['Sheet Metal Stamping', 'Blanking & Piercing', 'Deep Drawing', 'Coining', 'Embossing'],
  },
  {
    id: 2,
    tag: 'Pneumatic Series',
    title: 'High-Speed Pneumatic Assembly Press',
    subtitle: 'Compact Benchtop & Floor-Standing Models',
    category: 'pneumatic',
    image: '/images/Screenshot 2026-06-28 121718.png',
    badge: 'Fast Delivery',
    shortDesc: 'Compact press running on plant compressed air. Rapid stroke cycles with precise micro-tolerance alignment — no hydraulics, no complex wiring.',
    fullDesc: `The Aptismech Pneumatic Assembly Press is purpose-built for high-speed assembly and light-duty press-fitting. Powered entirely by plant compressed air, it requires no hydraulic infrastructure — clean, fast, and maintenance-friendly.

Ergonomic benchtop and floor-standing configurations with foot-pedal operation make it simple for assembly line workers. Consistent force delivery and stroke depth control make these ideal for automotive component assembly and precision engineering.`,
    specs: [
      { label: 'Force Range', value: '0.5T — 10T' },
      { label: 'Air Pressure', value: '5–8 Bar' },
      { label: 'Stroke Speed', value: 'Up to 60 SPM' },
      { label: 'Mounting',     value: 'Benchtop & Floor' },
      { label: 'Control',      value: 'Foot Pedal / Lever' },
      { label: 'Noise',        value: '< 75 dB' },
    ],
    features: [
      'Cleanroom compatible build',
      'Low maintenance overhead design',
      'Rapid stroke cycles — up to 60 SPM',
      'Ergonomic foot-pedal configuration',
      'Adjustable stroke depth & force',
      'Anti-repeat safety mechanism',
      'Compact footprint, easy installation',
      'No hydraulic oil — zero contamination',
    ],
    applications: ['Bearing Press-Fit', 'Bush Installation', 'Rivet Assembly', 'Component Insertion', 'Light Stamping'],
  },
  {
    id: 3,
    tag: 'Hybrid Series',
    title: 'Hydro-Pneumatic Hybrid System',
    subtitle: 'Oil Intensifier Units — Energy Efficient Pressing',
    category: 'hydro',
    image: '/images/Screenshot 2026-06-28 121815.png',
    badge: 'Premium',
    shortDesc: 'Pneumatic speed meets hydraulic power. Rapid approach stroke followed by concentrated oil-intensified tonnage — without the noise or bulk of a conventional power pack.',
    fullDesc: `The Aptismech Hydro-Pneumatic Hybrid System delivers the best of both worlds — speed of pneumatics and concentrated force of hydraulics, in a self-contained, quiet unit.

The intelligent dual-stroke mechanism uses a fast pneumatic cylinder for rapid approach, then seamlessly activates a closed-circuit oil intensifier to generate high pressing force. No external hydraulic power unit. No oil noise. Minimal energy consumption.`,
    specs: [
      { label: 'Force',       value: '1T — 50T' },
      { label: 'Approach',    value: 'Rapid Pneumatic' },
      { label: 'Press Speed', value: 'Controlled Hydraulic' },
      { label: 'Energy',      value: 'Up to 60% saving' },
      { label: 'Noise',       value: 'Ultra-Low' },
      { label: 'Control',     value: 'PLC + Digital Readout' },
    ],
    features: [
      'Intelligent dual-stroke activation',
      'Up to 60% energy saving vs hydraulic',
      'High-pressure interference fits',
      'No external hydraulic power pack',
      'Closed-circuit oil intensifier system',
      'Programmable force & depth',
      'Force monitoring & overload protection',
      'Compact, self-contained unit',
    ],
    applications: ['Interference Fits', 'Structural Assembly', 'Shaft Pressing', 'Gear Mounting', 'Heavy Riveting'],
  },
];

/* ── Modal ── */
const ProductModal = ({ product, onClose }) => {
  if (!product) return null;
  const waLink = `https://wa.me/918866616585?text=Hello%20Aptismech%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(product.title)}.%20Please%20send%20me%20a%20quote.`;

  return (
    <div className="product-modal-backdrop" onClick={onClose}>
      <div className="product-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}><FaTimes /></button>

        <div className="row g-0">
          <div className="col-lg-5">
            <div className="modal-img-wrap">
              <img src={product.image} alt={product.title} className="modal-machine-img" />
              <span className="modal-badge">{product.badge}</span>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="modal-content-wrap">
              <span className="prod-tag">{product.tag}</span>
              <h2 className="modal-title">{product.title}</h2>
              <p className="modal-subtitle">{product.subtitle}</p>
              <p className="modal-desc">{product.fullDesc}</p>

              <div className="modal-specs-grid">
                {product.specs.map((s, i) => (
                  <div className="modal-spec-item" key={i}>
                    <span className="modal-spec-label">{s.label}</span>
                    <span className="modal-spec-value">{s.value}</span>
                  </div>
                ))}
              </div>

              <p className="modal-section-head">Key Features</p>
              <div className="row">
                {product.features.map((f, i) => (
                  <div className="col-6 mb-2" key={i}>
                    <div className="d-flex align-items-start gap-2">
                      <FaCheckCircle size={12} color="#F5A623" style={{ marginTop: 3, flexShrink: 0 }} />
                      <span style={{ fontSize: '0.8rem', fontFamily: 'Inter', color: 'var(--text)' }}>{f}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="modal-section-head mt-3">Applications</p>
              <div className="d-flex gap-2 flex-wrap mb-4">
                {product.applications.map((a, i) => (
                  <span key={i} className="app-tag">{a}</span>
                ))}
              </div>

              <div className="d-flex gap-3 flex-wrap">
                <a href={waLink} target="_blank" rel="noreferrer" className="btn-brand">
                  <FaWhatsapp size={14} /> Request Quote
                </a>
                <Link to="/contact" className="btn-outline" onClick={onClose}>
                  Contact Us <FaArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Products page ── */
const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  const filters = [
    { key: 'all',       label: 'All Products'      },
    { key: 'mechanical', label: 'Mechanical Presses' },
    { key: 'pneumatic',  label: 'Pneumatic Presses'  },
    { key: 'hydro',      label: 'Hydro-Pneumatic'    },
  ];

  const filtered = activeFilter === 'all'
    ? productsData
    : productsData.filter(p => p.category === activeFilter);

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <span className="page-hero-eyebrow">Industrial Product Catalogue</span>
              <h1 className="page-hero-title">
                Precision Machinery <span style={{ color: '#F5A623' }}>Engineered</span> to Outperform
              </h1>
              <p className="page-hero-desc mx-auto">
                Three product lines — Mechanical, Pneumatic, and Hydro-Pneumatic — designed for the most demanding industrial applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER + PRODUCTS */}
      <section style={{ padding: '80px 0', background: 'var(--off-white)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="filter-bar">
            {filters.map(f => (
              <button
                key={f.key}
                className={`filter-btn${activeFilter === f.key ? ' active' : ''}`}
                onClick={() => setActiveFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="row gy-4">
            {filtered.map(product => (
              <div className="col-lg-4 col-md-6" key={product.id}>
                <div className="product-card-full" onClick={() => setSelected(product)}>
                  <div className="product-img-area">
                    <img src={product.image} alt={product.title} />
                    <span className="prod-badge">{product.badge}</span>
                    <div className="product-hover-overlay">
                      <div className="hover-overlay-content">
                        <FaExpand size={20} />
                        <span>View Details</span>
                      </div>
                    </div>
                  </div>

                  <div className="product-card-content">
                    <span className="prod-tag">{product.tag}</span>
                    <h3 className="product-full-title">{product.title}</h3>
                    <p className="product-full-subtitle">{product.subtitle}</p>
                    <p className="product-full-desc">{product.shortDesc}</p>

                    <div className="product-mini-specs">
                      {product.specs.slice(0, 3).map((s, i) => (
                        <div className="mini-spec" key={i}>
                          <span className="mini-spec-label">{s.label}</span>
                          <span className="mini-spec-value">{s.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="product-features-preview mb-3">
                      {product.features.slice(0, 3).map((f, i) => (
                        <div key={i} className="d-flex align-items-center gap-2 mb-1">
                          <FaCheckCircle size={11} color="#F5A623" />
                          <span style={{ fontSize: '0.78rem', fontFamily: 'Inter', color: 'var(--text-muted)' }}>{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="d-flex gap-2">
                      <button
                        className="btn-brand flex-grow-1 justify-content-center"
                        style={{ fontSize: '0.78rem', padding: '10px' }}
                        onClick={e => { e.stopPropagation(); setSelected(product); }}
                      >
                        <FaExpand size={12} /> View Details
                      </button>
                      <a
                        href={`https://wa.me/918866616585?text=I%20am%20interested%20in%20${encodeURIComponent(product.title)}`}
                        target="_blank" rel="noreferrer"
                        className="whatsapp-quick-btn"
                        onClick={e => e.stopPropagation()}
                        title="Quick WhatsApp Inquiry"
                      >
                        <FaWhatsapp size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ padding: '80px 0', background: '#fff', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-7">
              <span className="eyebrow">Product Comparison</span>
              <h2 className="section-title">Find the Right Press for Your Application</h2>
              <div className="rule center" />
            </div>
          </div>
          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th style={{ color: '#F5A623' }}>Mechanical Press</th>
                  <th style={{ color: '#F5A623' }}>Pneumatic Press</th>
                  <th style={{ color: '#F5A623' }}>Hydro-Pneumatic</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Force Range',   '10T – 400T',    '0.5T – 10T',  '1T – 50T'],
                  ['Speed',         'High',           'Very High',   'Medium-High'],
                  ['Precision',     'High',           'Very High',   'Ultra-High'],
                  ['Energy Use',    'Moderate',       'Low',         'Very Low'],
                  ['Maintenance',   'Moderate',       'Low',         'Low'],
                  ['Best For',      'Mass Stamping',  'Assembly',    'Interference Fits'],
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => <td key={j}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--navy)', padding: '70px 0', borderTop: '4px solid var(--orange)' }}>
        <div className="container text-center">
          <h2 style={{ fontFamily: 'Barlow', fontWeight: 900, color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '1rem' }}>
            Need Custom Specifications?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter', marginBottom: '2rem', maxWidth: 520, margin: '0 auto 2rem' }}>
            Our technical team customizes any machine to your exact tonnage, stroke, bed size, and automation requirements.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <a
              href="https://wa.me/918866616585?text=I%20need%20a%20custom%20machine%20specification%20from%20Aptismech"
              target="_blank" rel="noreferrer"
              className="btn-brand"
            >
              <FaWhatsapp size={14} /> WhatsApp Custom Request
            </a>
            <Link to="/contact" className="btn-outline-white">
              Contact Us <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </>
  );
};

export default Products;
