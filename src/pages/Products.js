import React, { useState, useEffect } from 'react';
import {
  FaWhatsapp, FaArrowRight, FaCheckCircle,
  FaTimes, FaExpand, FaTable, FaPhoneAlt,
  FaLayerGroup
} from 'react-icons/fa';
import { productsData, categoriesConfig } from '../data/productsData';
import { ProductCardSkeleton } from '../components/SkeletonLoader';
import './Products.css';

/* ── Bulletproof Product Image Component ── */
const ProductImage = ({ src, alt, className = '' }) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  const handleError = () => {
    const filename = src.split('/').pop();
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
      loading="lazy"
      onError={handleError}
    />
  );
};

/* ── Product Details Modal (Image on TOP, Description & Specs UNDERNEATH) ── */
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

        {/* 1. TOP SECTION: Prominent Full-Width Image Frame */}
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

/* ── Main Products Page (Category-Divided Sections) ── */
export default function Products() {
  const [selectedCat, setSelectedCat] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCatSelect = (catId) => {
    if (catId === selectedCat) return;
    setLoading(true);
    setSelectedCat(catId);
    setTimeout(() => {
      setLoading(false);
      if (catId !== 'all') {
        const el = document.getElementById(`cat-sec-${catId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 200);
  };

  const displayedCategories = selectedCat === 'all'
    ? categoriesConfig
    : categoriesConfig.filter(c => c.id === selectedCat);

  return (
    <>
      {/* ════ HERO HEADER ════ */}
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-eyebrow">Manufacturing & Industrial Supply</span>
          <h1 className="page-hero-title">Industrial Product Catalog</h1>
          <p className="page-hero-desc">
            Explore 22+ precision engineering solutions manufactured and supplied by AptisMech Corporation LLP.
            Categorized below: heavy fabrication machinery, precision mounts, industrial hardware, CNC tooling, electric motors, and metal scrap solutions.
          </p>
        </div>
      </section>

      {/* ════ CATEGORY STICKY JUMP BAR ════ */}
      <section className="cat-sticky-bar">
        <div className="container">
          <div className="cat-pills-wrap">
            <button
              className={`cat-tab-pill${selectedCat === 'all' ? ' active' : ''}`}
              onClick={() => handleCatSelect('all')}
            >
              <FaLayerGroup size={12} className="me-1" />
              <span>All Portfolio</span>
              <span className="cat-pill-badge">{productsData.length}</span>
            </button>

            {categoriesConfig.map(cat => {
              const count = productsData.filter(p => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  className={`cat-tab-pill${selectedCat === cat.id ? ' active' : ''}`}
                  onClick={() => handleCatSelect(cat.id)}
                >
                  <span className="cat-pill-icon">{cat.icon}</span>
                  <span>{cat.name}</span>
                  <span className="cat-pill-badge">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════ CATEGORY-DIVIDED CATALOG SECTIONS ════ */}
      <div className="catalog-content-wrapper">
        <div className="container">

          {loading ? (
            <div className="row gy-4 py-5">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <ProductCardSkeleton />
                </div>
              ))}
            </div>
          ) : (
            displayedCategories.map(cat => {
              const catProducts = productsData.filter(p => p.category === cat.id);
              if (catProducts.length === 0) return null;

              return (
                <section key={cat.id} id={`cat-sec-${cat.id}`} className="category-section-block">
                  
                  {/* Category Section Header Banner */}
                  <div className="category-section-header">
                    <div className="cat-header-left">
                      <div className="cat-header-icon-box">{cat.icon}</div>
                      <div>
                        <div className="d-flex align-items-center gap-2 flex-wrap">
                          <span className="cat-header-badge">{cat.badge}</span>
                          <span className="cat-header-count">{catProducts.length} Items</span>
                        </div>
                        <h2 className="cat-section-title">{cat.name}</h2>
                        <p className="cat-section-desc">{cat.desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* 3-Column Card Grid for this Category */}
                  <div className="row gy-4">
                    {catProducts.map(p => (
                      <div className="col-lg-4 col-md-6" key={p.id}>
                        <div
                          className="product-card"
                          onClick={() => setSelectedProduct(p)}
                        >
                          {/* Image Box with Enhanced Hover */}
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

                            {/* Action Button */}
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
                    ))}
                  </div>

                </section>
              );
            })
          )}

        </div>
      </div>

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
