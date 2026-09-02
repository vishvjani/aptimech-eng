import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaWhatsapp, FaArrowRight, FaCheckCircle,
  FaTimes, FaExpand, FaArrowLeft, FaTable
} from 'react-icons/fa';
import { productsData, categoriesConfig } from '../data/productsData';
import { ProductCardSkeleton } from '../components/SkeletonLoader';
import './Products.css';

/* ── Bulletproof Product Image Component ── */
const ProductImage = ({ src, alt, className = '' }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [retried, setRetried] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setRetried(false);
  }, [src]);

  const handleError = () => {
    if (!retried && typeof imgSrc === 'string') {
      setRetried(true);
      const filename = imgSrc.split('/').pop();
      // Try root path if public_url failed or vice-versa
      if (imgSrc.startsWith('/aptimech-eng')) {
        setImgSrc(`/products/${filename}`);
      } else {
        setImgSrc(`${process.env.PUBLIC_URL || ''}/products/${filename}`);
      }
    } else {
      setImgSrc(
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='260' viewBox='0 0 400 260'%3E%3Crect width='400' height='260' fill='%23e8edf5'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='15' font-weight='bold' fill='%230A3981'%3E%E2%9A%99%EF%B8%8F AptisMech Equipment%3C/text%3E%3C/svg%3E"
      );
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
};

/* ── Product Details Modal ── */
const ProductModal = ({ product, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const waLink = `https://wa.me/918866616585?text=Hello%20AptisMech%2C%20I%20am%20interested%20in%20"${encodeURIComponent(product.title)}"%20(Ref:%20${product.id}).%20Please%20share%20quotation%20and%20technical%20specs.`;

  return (
    <div className="product-modal-backdrop" onClick={onClose}>
      <div className="product-modal" onClick={e => e.stopPropagation()}>
        {/* Back Button (Mobile friendly) */}
        <button className="modal-back-btn" onClick={onClose}>
          <FaArrowLeft size={12} /> Back to Products
        </button>

        {/* Close Icon (Desktop) */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <FaTimes size={16} />
        </button>

        <div className="row g-0">
          <div className="col-lg-5">
            <div className="modal-img-wrap">
              <ProductImage
                src={product.image}
                alt={product.title}
                className="modal-machine-img"
              />
              <span className="modal-badge">{product.badge}</span>
              {product.pdfPage && (
                <div style={{
                  position: 'absolute', bottom: 12, left: 12,
                  background: 'rgba(5, 26, 64, 0.88)', color: '#F5A623',
                  padding: '4px 10px', borderRadius: 4, fontSize: '0.72rem',
                  fontFamily: 'Inter', fontWeight: 700, zIndex: 3
                }}>
                  PDF Catalog · Page {product.pdfPage}
                </div>
              )}
            </div>
          </div>

          <div className="col-lg-7">
            <div className="modal-content-wrap">
              <span className="prod-tag">{product.tag}</span>
              <h2 className="modal-title">{product.title}</h2>
              <p className="modal-subtitle">{product.subtitle}</p>

              {/* Tab navigation if specTable is present */}
              {product.specTable && (
                <div className="d-flex gap-2 mb-3 pb-2 border-bottom">
                  <button
                    className={`btn ${activeTab === 'overview' ? 'btn-brand' : 'btn-outline'}`}
                    style={{ fontSize: '0.75rem', padding: '6px 14px' }}
                    onClick={() => setActiveTab('overview')}
                  >
                    Overview & Features
                  </button>
                  <button
                    className={`btn ${activeTab === 'specs' ? 'btn-brand' : 'btn-outline'}`}
                    style={{ fontSize: '0.75rem', padding: '6px 14px' }}
                    onClick={() => setActiveTab('specs')}
                  >
                    <FaTable size={11} /> Model Specification Table
                  </button>
                </div>
              )}

              {activeTab === 'overview' ? (
                <>
                  <p className="modal-desc" style={{ whiteSpace: 'pre-line' }}>{product.fullDesc}</p>

                  <div className="modal-section-head">Technical Specifications</div>
                  <div className="modal-specs-grid">
                    {product.specs.map((s, i) => (
                      <div className="modal-spec-item" key={i}>
                        <span className="modal-spec-label">{s.label}</span>
                        <span className="modal-spec-value">{s.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="modal-section-head mt-3">Engineering Highlights</div>
                  <div className="row gy-1 mb-3">
                    {product.features.map((f, i) => (
                      <div className="col-12 d-flex align-items-center gap-2" key={i}>
                        <FaCheckCircle size={12} color="#F5A623" style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: '0.82rem', fontFamily: 'Inter', color: 'var(--text-muted)' }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="modal-section-head mt-3">Applications</div>
                  <div className="d-flex flex-wrap gap-1 mb-4">
                    {product.applications.map((app, i) => (
                      <span className="app-tag" key={i}>{app}</span>
                    ))}
                  </div>
                </>
              ) : (
                /* Spec Table View */
                <div className="mb-4">
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '0.8rem' }}>
                    Standard technical parameters and model variations:
                  </p>
                  <div className="table-responsive" style={{ border: '1px solid var(--border)', borderRadius: 'var(--r)' }}>
                    <table className="table table-sm table-striped mb-0" style={{ fontSize: '0.75rem' }}>
                      <thead style={{ background: 'var(--navy)', color: '#fff' }}>
                        <tr>
                          {product.specTable.headers.map((h, i) => (
                            <th key={i} style={{ padding: '8px 10px', whiteSpace: 'nowrap' }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {product.specTable.rows.map((row, i) => (
                          <tr key={i}>
                            {row.map((cell, j) => (
                              <td key={j} style={{ padding: '7px 10px', whiteSpace: 'nowrap', fontWeight: j === 0 ? 700 : 400 }}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              <div className="d-flex gap-3 flex-wrap">
                <a href={waLink} target="_blank" rel="noreferrer" className="btn-brand">
                  <FaWhatsapp size={14} /> Request Direct Quotation
                </a>
                <Link to="/contact" className="btn-outline" onClick={onClose}>
                  Contact Engineering Team <FaArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Products Main Page ── */
export default function Products() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleFilterChange = (key) => {
    if (key === activeFilter) return;
    setIsLoading(true);
    setActiveFilter(key);
    // Smooth 250ms skeleton transition on filter switch
    setTimeout(() => {
      setIsLoading(false);
    }, 250);
  };

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
              <span className="page-hero-eyebrow">AptisMech Corporation LLP · Product Catalogue</span>
              <h1 className="page-hero-title">
                Precision Machinery <span style={{ color: '#F5A623' }}>Engineered</span> to Outperform
              </h1>
              <p className="page-hero-desc mx-auto">
                Explore our full catalogue of heavy fabrication machinery, precision hardware,
                CNC carbide tooling, high-efficiency induction motors, and categorized scrap trading streams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR & PRODUCT CARDS */}
      <section style={{ padding: '80px 0', background: 'var(--off-white)', borderTop: '1px solid var(--border)' }}>
        <div className="container">

          {/* Category Filter Bar */}
          <div className="filter-bar">
            {categoriesConfig.map(f => (
              <button
                key={f.key}
                className={`filter-btn${activeFilter === f.key ? ' active' : ''}`}
                onClick={() => handleFilterChange(f.key)}
              >
                {f.label} ({f.count})
              </button>
            ))}
          </div>

          {/* Product Grid / Skeleton Loading State */}
          <div className="row gy-4">
            {isLoading ? (
              [1, 2, 3, 4, 5, 6].map(i => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <ProductCardSkeleton />
                </div>
              ))
            ) : (
              filtered.map(product => (
                <div className="col-lg-4 col-md-6" key={product.id}>
                  <div
                    className="product-card-full"
                    onClick={() => setSelected(product)}
                    tabIndex={0}
                    role="button"
                    aria-label={`View details for ${product.title}`}
                    onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setSelected(product)}
                  >
                    <div className="product-img-area">
                      <ProductImage src={product.image} alt={product.title} />
                      <span className="prod-badge">{product.badge}</span>
                      {product.pdfPage && (
                        <div style={{
                          position: 'absolute', bottom: 10, left: 10,
                          background: 'rgba(5, 26, 64, 0.88)', color: '#F5A623',
                          padding: '3px 8px', borderRadius: 4, fontSize: '0.65rem',
                          fontFamily: 'Inter', fontWeight: 700, zIndex: 3
                        }}>
                          PDF Page {product.pdfPage}
                        </div>
                      )}
                      <div className="product-hover-overlay">
                        <div className="hover-overlay-content">
                          <FaExpand size={20} />
                          <span>View Details & Specs</span>
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
                        {product.features.slice(0, 2).map((f, i) => (
                          <div key={i} className="d-flex align-items-center gap-2 mb-1">
                            <FaCheckCircle size={11} color="#F5A623" style={{ flexShrink: 0 }} />
                            <span style={{ fontSize: '0.78rem', fontFamily: 'Inter', color: 'var(--text-muted)' }}>{f}</span>
                          </div>
                        ))}
                      </div>

                      <div className="d-flex gap-2 mt-auto">
                        <button
                          className="btn-brand flex-grow-1 justify-content-center"
                          style={{ fontSize: '0.78rem', padding: '10px' }}
                          onClick={e => { e.stopPropagation(); setSelected(product); }}
                        >
                          <FaExpand size={12} /> View Details
                        </button>
                        <a
                          href={`https://wa.me/918866616585?text=Hello%20AptisMech%2C%20I%20am%20interested%20in%20${encodeURIComponent(product.title)}`}
                          target="_blank" rel="noreferrer"
                          className="whatsapp-quick-btn"
                          onClick={e => e.stopPropagation()}
                          title="Quick WhatsApp Inquiry"
                        >
                          <FaWhatsapp size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ padding: '80px 0', background: '#fff', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-7">
              <span className="eyebrow">Equipment Selection Matrix</span>
              <h2 className="section-title">Comparative Technical Reference</h2>
              <div className="rule center" />
            </div>
          </div>
          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Equipment Category</th>
                  <th style={{ color: '#F5A623' }}>Hydraulic C-Press</th>
                  <th style={{ color: '#F5A623' }}>H-Type Press</th>
                  <th style={{ color: '#F5A623' }}>CNC Press Brake</th>
                  <th style={{ color: '#F5A623' }}>NC Shearing</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Force Range',   '10T – 250T',    '20T – 500T',   '40T – 120T+',  '4mm – 16mm Guillotine'],
                  ['Speed',         '30–60 SPM',     'Smooth Hyd.',  'CNC Synchro',  '12 – 30 SPM'],
                  ['Operation',     'Punch / Form',  'Deep Drawing', 'Multi-Axis',   'Hold-Down Cut'],
                  ['Bed Access',    '3-Sided Open',  '4-Column Bed', 'Front Clamp',  'Sheet Arms'],
                  ['Best Suited',   'Stamping / SPM','Mould / Form', 'Sheet Bending','Sheet Sizing'],
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

      {/* CUSTOM CTA */}
      <section style={{ background: 'var(--navy)', padding: '70px 0', borderTop: '4px solid var(--orange)' }}>
        <div className="container text-center">
          <h2 style={{ fontFamily: 'Barlow', fontWeight: 900, color: '#fff', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', marginBottom: '1rem' }}>
            Need Custom Machine Specifications?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter', marginBottom: '2rem', maxWidth: 520, margin: '0 auto 2rem' }}>
            Our engineering team in Vavdi Industrial Area, Rajkot manufactures custom table dimensions, stroke depths, and automated SPM fixtures.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <a
              href="https://wa.me/918866616585?text=Hello%20AptisMech%2C%20I%20have%20a%20custom%20machine%20requirement."
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
}
