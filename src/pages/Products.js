import React, { useState, useEffect } from 'react';
import {
  FaWhatsapp, FaArrowRight, FaCheckCircle,
  FaTimes, FaExpand, FaTable, FaPhoneAlt
} from 'react-icons/fa';
import { productsData, categoriesConfig } from '../data/productsData';
import { ProductCardSkeleton } from '../components/SkeletonLoader';
import './Products.css';

/* ── High-Reliability Product Image Component ── */
const ProductImage = ({ src, alt, className = '' }) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  const handleError = (e) => {
    const filename = src.split('/').pop();
    // Try alternate relative path
    if (imgSrc !== `./products/${filename}`) {
      setImgSrc(`./products/${filename}`);
    } else {
      setImgSrc(
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='320' viewBox='0 0 500 320'%3E%3Crect width='500' height='320' fill='%23e8edf5'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' font-weight='bold' fill='%230A3981'%3E%E2%9A%99%EF%B8%8F AptisMech Heavy Machinery%3C/text%3E%3C/svg%3E"
      );
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
};

/* ── Industrial Product Modal (Image on TOP, Details UNDERNEATH) ── */
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

  const waLink = `https://wa.me/918866616585?text=Hello%20AptisMech%20Corporation%2C%20I%20am%20interested%20in%20"${encodeURIComponent(product.title)}"%20(Model%20Ref:%20${product.id}).%20Please%20share%20quotation%2C%20lead%20time%2C%20and%20technical%20specs.`;

  return (
    <div className="product-modal-backdrop" onClick={onClose}>
      <div className="product-modal" onClick={e => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="modal-header-bar">
          <div className="modal-header-titles">
            <span className="prod-tag">{product.tag}</span>
            <h2 className="modal-title">{product.title}</h2>
            <p className="modal-subtitle">{product.subtitle}</p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <FaTimes size={18} />
          </button>
        </div>

        {/* 1. TOP SECTION: Prominent Full-Width Image Frame (flex-shrink: 0) */}
        <div className="modal-top-img-showcase">
          <ProductImage
            src={product.image}
            alt={product.title}
            className="modal-top-img"
          />
          <span className="modal-top-badge">{product.badge || 'Industrial Precision'}</span>
        </div>

        {/* 2. UNDERNEATH SECTION: Specs, Description, Table, Features */}
        <div className="modal-body-content">

          {/* Quick Specs Pill Badges */}
          <div className="modal-quick-specs">
            {product.specs.map((s, i) => (
              <div className="modal-quick-pill" key={i}>
                <span className="quick-pill-label">{s.label}:</span>
                <span className="quick-pill-val">{s.value}</span>
              </div>
            ))}
          </div>

          {/* Tab Navigation for Multi-Model Specifications */}
          {product.specTable && (
            <div className="modal-tab-bar">
              <button
                className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview & Engineering
              </button>
              <button
                className={`tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
                onClick={() => setActiveTab('specs')}
              >
                <FaTable size={13} className="me-1" /> Model Specification Table
              </button>
            </div>
          )}

          {activeTab === 'overview' ? (
            <>
              <div className="modal-section-head">Product Engineering Details</div>
              <p className="modal-desc">{product.fullDesc}</p>

              <div className="modal-section-head mt-4">Key Engineering Highlights</div>
              <div className="row gy-2 mb-4">
                {product.features.map((f, i) => (
                  <div className="col-md-6 col-12 d-flex align-items-start gap-2" key={i}>
                    <FaCheckCircle size={15} color="#F5A623" style={{ flexShrink: 0, marginTop: 3 }} />
                    <span style={{ fontSize: '0.88rem', fontFamily: 'Inter', color: 'var(--text)', lineHeight: 1.6 }}>{f}</span>
                  </div>
                ))}
              </div>

              <div className="modal-section-head mt-3">Target Manufacturing Applications</div>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {product.applications.map((app, i) => (
                  <span className="app-tag" key={i}>{app}</span>
                ))}
              </div>
            </>
          ) : (
            /* Spec Table View */
            <div className="modal-table-container">
              <div className="modal-section-head">Model Technical Specification Matrix</div>
              <p className="text-muted small mb-2">{product.specTable.title}</p>
              <div className="table-responsive">
                <table className="modal-spec-table">
                  <thead>
                    <tr>
                      {product.specTable.headers.map((h, i) => (
                        <th key={i}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {product.specTable.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="modal-footer-actions">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="btn-brand modal-wa-btn"
            >
              <FaWhatsapp size={17} /> Request Quotation & Specs via WhatsApp
            </a>
            <a
              href="tel:+917046500555"
              className="btn-outline modal-call-btn"
            >
              <FaPhoneAlt size={13} /> Call Sales (+91 70465 00555)
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

/* ── Main Products Page ── */
export default function Products() {
  const [activeCat, setActiveCat] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCategoryChange = (catId) => {
    if (catId === activeCat) return;
    setLoading(true);
    setActiveCat(catId);
    setTimeout(() => setLoading(false), 250);
  };

  const filtered = activeCat === 'all'
    ? productsData
    : productsData.filter(p => p.category === activeCat);

  return (
    <>
      {/* ════ HERO HEADER ════ */}
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-eyebrow">Manufacturing & Industrial Supply</span>
          <h1 className="page-hero-title">Industrial Product Catalog</h1>
          <p className="page-hero-desc">
            Explore 22+ precision engineering solutions manufactured and supplied by AptisMech Corporation LLP.
            Power presses, synchronized press brakes, shearing machines, industrial fasteners, motors, and metal scrap.
          </p>
        </div>
      </section>

      {/* ════ CATEGORY FILTER BAR ════ */}
      <section className="cat-filter-section">
        <div className="container">
          <div className="cat-filter-pills">
            {categoriesConfig.map(c => {
              const count = c.id === 'all'
                ? productsData.length
                : productsData.filter(p => p.category === c.id).length;
              return (
                <button
                  key={c.id}
                  className={`cat-pill${activeCat === c.id ? ' active' : ''}`}
                  onClick={() => handleCategoryChange(c.id)}
                >
                  <span className="cat-pill-name">{c.name}</span>
                  <span className="cat-pill-count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════ PRODUCTS GRID ════ */}
      <section className="products-grid-section">
        <div className="container">

          <div className="catalog-header-info mb-4">
            <span className="text-muted" style={{ fontSize: '0.9rem', fontFamily: 'Inter' }}>
              Showing <strong>{filtered.length}</strong> industrial items
            </span>
          </div>

          <div className="row gy-4">
            {loading ? (
              Array.from({ length: 6 }).map((_, idx) => (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <ProductCardSkeleton />
                </div>
              ))
            ) : (
              filtered.map(p => (
                <div className="col-lg-4 col-md-6" key={p.id}>
                  <div
                    className="product-card"
                    onClick={() => setSelectedProduct(p)}
                  >
                    {/* Card Image Area */}
                    <div className="product-card-img-wrap">
                      <ProductImage
                        src={p.image}
                        alt={p.title}
                        className="product-card-img"
                      />
                      <span className="product-badge">{p.badge}</span>
                      <div className="product-overlay">
                        <span><FaExpand size={13} className="me-1" /> View Full Specifications</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="product-card-body">
                      <span className="prod-tag">{p.tag}</span>
                      <h3 className="product-card-title">{p.title}</h3>
                      <p className="product-card-sub">{p.subtitle}</p>
                      <p className="product-card-desc">{p.shortDesc}</p>

                      {/* Specs Tags */}
                      <div className="product-card-specs">
                        {p.specs.slice(0, 3).map((s, i) => (
                          <div className="product-spec-badge" key={i}>
                            <span className="spec-badge-val">{s.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Card Action Button */}
                      <button
                        className="btn-card-action"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProduct(p);
                        }}
                      >
                        View Specifications <FaArrowRight size={11} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </section>

      {/* ════ MODAL ════ */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
