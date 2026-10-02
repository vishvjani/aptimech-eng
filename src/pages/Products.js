import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  FaWhatsapp, FaArrowRight, FaCheckCircle,
  FaTimes, FaExpand, FaTable, FaPhoneAlt,
  FaLayerGroup, FaSearch, FaBolt
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

/* ── Product Details Modal (With Related / Relevant Products) ── */
const ProductModal = ({ product, onSelectProduct, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const modalBodyRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    if (modalBodyRef.current) {
      modalBodyRef.current.scrollTop = 0;
    }
    return () => { document.body.style.overflow = ''; };
  }, [product]);

  // Compute 3 relevant / related products from same category or complementary range
  const relatedProducts = useMemo(() => {
    const sameCat = productsData.filter(p => p.id !== product.id && p.category === product.category);
    if (sameCat.length >= 3) {
      return sameCat.slice(0, 3);
    }
    const otherProducts = productsData.filter(p => p.id !== product.id && p.category !== product.category);
    return [...sameCat, ...otherProducts].slice(0, 3);
  }, [product]);

  const waLink = `https://wa.me/918866616585?text=Hello%20AptisMech%20Corporation%2C%20I%20am%20interested%20in%20"${encodeURIComponent(product.title)}"%20(Model%20Ref:%20${product.id}).%20Please%20share%20quotation%2C%20lead%20time%2C%20and%20technical%20specs.`;

  return (
    <div className="product-modal-backdrop" onClick={onClose}>
      <div className="product-modal" onClick={e => e.stopPropagation()} ref={modalBodyRef}>
        
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
                Overview &amp; Engineering
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
              <div className="mobile-table-hint d-md-none">
                👉 Swipe table horizontally to see all models &amp; specs
              </div>
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
              <FaWhatsapp size={17} /> Request Quotation &amp; Specs via WhatsApp
            </a>
            <a
              href="tel:+917046500555"
              className="btn-outline modal-call-btn"
            >
              <FaPhoneAlt size={13} /> Call Partner (+91 70465 00555)
            </a>
          </div>

          {/* ════ RELEVANT / RELATED PRODUCTS SECTION ════ */}
          {relatedProducts.length > 0 && (
            <div className="modal-related-section">
              <div className="modal-section-head mb-3">
                <FaBolt size={13} color="#F5A623" className="me-2" />
                Related Machinery &amp; Complementary Products
              </div>
              <div className="row g-3">
                {relatedProducts.map(rel => (
                  <div className="col-md-4 col-12" key={rel.id}>
                    <div
                      className="related-prod-card"
                      onClick={() => onSelectProduct(rel)}
                    >
                      <div className="related-prod-img-wrap">
                        <ProductImage src={rel.image} alt={rel.title} className="related-prod-img" />
                      </div>
                      <div className="related-prod-info">
                        <span className="related-prod-cat">{rel.categoryName}</span>
                        <h4 className="related-prod-title">{rel.title}</h4>
                        <span className="related-prod-btn">
                          View Details <FaArrowRight size={10} />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

/* ── Main Products Page (With Real-Time Search & Category Grouping) ── */
export default function Products() {
  const [selectedCat, setSelectedCat] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  // Popular search keywords
  const popularSearches = [
    'Ironworker', 'Hydraulic Press', 'CRC Sheets', 'MS Coils',
    'SS 304', 'Busbar Bending', 'Drill Machine', 'Eye Bolts', 'Induction Motors', 'Copper Scrap'
  ];

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
    }, 150);
  };

  // Smart Search Matching Algorithm
  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) {
      if (selectedCat === 'all') return productsData;
      return productsData.filter(p => p.category === selectedCat);
    }

    return productsData.filter(p => {
      const matchCat = selectedCat === 'all' || p.category === selectedCat;
      if (!matchCat) return false;

      const titleMatch = p.title.toLowerCase().includes(q);
      const subMatch = p.subtitle?.toLowerCase().includes(q);
      const catMatch = p.categoryName.toLowerCase().includes(q);
      const tagMatch = p.tag.toLowerCase().includes(q);
      const badgeMatch = p.badge?.toLowerCase().includes(q);
      const descMatch = p.shortDesc.toLowerCase().includes(q) || p.fullDesc.toLowerCase().includes(q);
      const featuresMatch = p.features?.some(f => f.toLowerCase().includes(q));
      const specsMatch = p.specs?.some(s => s.label.toLowerCase().includes(q) || s.value.toLowerCase().includes(q));
      const appMatch = p.applications?.some(a => a.toLowerCase().includes(q));
      const tableMatch = p.specTable?.rows?.some(row => row.some(cell => cell.toLowerCase().includes(q)));

      return titleMatch || subMatch || catMatch || tagMatch || badgeMatch || descMatch || featuresMatch || specsMatch || appMatch || tableMatch;
    });
  }, [searchQuery, selectedCat]);

  // Suggested products if search yields few or 0 results
  const suggestedProducts = useMemo(() => {
    if (!searchQuery.trim() || filteredProducts.length >= 4) return [];
    const ids = new Set(filteredProducts.map(p => p.id));
    return productsData.filter(p => !ids.has(p.id)).slice(0, 3);
  }, [searchQuery, filteredProducts]);

  return (
    <>
      {/* ════ HERO HEADER ════ */}
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-eyebrow">Manufacturing &amp; Industrial Supply</span>
          <h1 className="page-hero-title">Industrial Product Catalog</h1>
          <p className="page-hero-desc">
            Explore our complete catalog of Heavy Industrial Machinery, Workshop Equipment, Prime Raw Materials (CRC, MS &amp; SS Coils), Precision Machined Spares, and Metal Scrap Solutions based in Rajkot, Gujarat.
          </p>
        </div>
      </section>

      {/* ════ SEARCH & CATEGORY FILTER CONTROL HUB ════ */}
      <section className="cat-sticky-bar">
        <div className="container">
          
          {/* 1. Live Instant Search Bar */}
          <div className="search-bar-wrapper">
            <div className="search-input-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search by machine model, CRC sheets, SS 304, eye bolts, motors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="search-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <FaTimes size={14} />
                </button>
              )}
            </div>
          </div>

          {/* 2. Popular Search Suggestion Pills */}
          {!searchQuery && (
            <div className="popular-search-row">
              <span className="popular-label">
                <FaBolt size={11} color="#F5A623" /> Quick Search:
              </span>
              <div className="popular-tags-scroll">
                {popularSearches.map((tag) => (
                  <button
                    key={tag}
                    className="popular-tag-btn"
                    onClick={() => setSearchQuery(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 3. Category Filter Tabs */}
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

          {/* Active Search Result Status Banner */}
          {searchQuery && (
            <div className="search-status-bar">
              <span>
                Found <strong>{filteredProducts.length}</strong> matching product{filteredProducts.length === 1 ? '' : 's'} for "<em>{searchQuery}</em>"
              </span>
              <button className="search-reset-link" onClick={() => setSearchQuery('')}>
                Reset Search
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ════ CATALOG CONTENT WRAPPER ════ */}
      <div className="catalog-content-wrapper">
        <div className="container">

          {loading ? (
            <div className="row gy-4 py-4">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <ProductCardSkeleton />
                </div>
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            /* No Results Found State */
            <div className="no-results-card text-center py-5">
              <div className="no-results-icon mb-3">🔍</div>
              <h3 className="no-results-title">No Exact Matches Found</h3>
              <p className="no-results-desc mx-auto">
                We couldn't find any products matching "<strong>{searchQuery}</strong>". Try checking the spelling or browse our key categories.
              </p>
              <div className="d-flex gap-2 justify-content-center flex-wrap mt-4">
                <button className="btn-brand" onClick={() => setSearchQuery('')}>
                  View All {productsData.length} Products
                </button>
                <a
                  href={`https://wa.me/918866616585?text=Hello%20AptisMech%2C%20I%20am%20looking%20for%20a%20specific%20product%3A%20${encodeURIComponent(searchQuery)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  <FaWhatsapp size={14} /> Inquire via WhatsApp
                </a>
              </div>
            </div>
          ) : searchQuery.trim() !== '' ? (
            /* Search Results Grid View */
            <div className="search-results-section">
              <div className="row gy-4">
                {filteredProducts.map(p => (
                  <div className="col-lg-4 col-md-6 col-12" key={p.id}>
                    <div
                      className="product-card"
                      onClick={() => setSelectedProduct(p)}
                    >
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

                      <div className="product-card-body">
                        <span className="prod-tag">{p.tag}</span>
                        <h3 className="product-card-title">{p.title}</h3>
                        <p className="product-card-sub">{p.subtitle}</p>
                        <p className="product-card-desc">{p.shortDesc}</p>

                        <div className="product-card-specs">
                          {p.specs.slice(0, 3).map((s, i) => (
                            <div className="product-spec-badge" key={i}>
                              <span className="spec-badge-val">{s.value}</span>
                            </div>
                          ))}
                        </div>

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

              {/* Complementary Suggestions if limited search matches */}
              {suggestedProducts.length > 0 && (
                <div className="mt-5 pt-4 border-top">
                  <h4 className="suggested-heading mb-3">
                    <FaBolt size={14} color="#F5A623" className="me-2" />
                    Recommended Complementary Equipment &amp; Materials
                  </h4>
                  <div className="row gy-4">
                    {suggestedProducts.map(p => (
                      <div className="col-lg-4 col-md-6 col-12" key={`sugg-${p.id}`}>
                        <div
                          className="product-card"
                          onClick={() => setSelectedProduct(p)}
                        >
                          <div className="product-card-img-wrap">
                            <ProductImage
                              src={p.image}
                              alt={p.title}
                              className="product-card-img"
                            />
                            <span className="product-badge">{p.badge}</span>
                          </div>
                          <div className="product-card-body">
                            <span className="prod-tag">{p.tag}</span>
                            <h3 className="product-card-title">{p.title}</h3>
                            <p className="product-card-sub">{p.subtitle}</p>
                            <button className="btn-card-action mt-auto">
                              View Specifications <FaArrowRight size={11} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Standard Categorized View */
            categoriesConfig
              .filter(c => selectedCat === 'all' || c.id === selectedCat)
              .map(cat => {
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

                    {/* 3-Column Responsive Grid */}
                    <div className="row gy-4">
                      {catProducts.map(p => (
                        <div className="col-lg-4 col-md-6 col-12" key={p.id}>
                          <div
                            className="product-card"
                            onClick={() => setSelectedProduct(p)}
                          >
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

                            <div className="product-card-body">
                              <span className="prod-tag">{p.tag}</span>
                              <h3 className="product-card-title">{p.title}</h3>
                              <p className="product-card-sub">{p.subtitle}</p>
                              <p className="product-card-desc">{p.shortDesc}</p>

                              <div className="product-card-specs">
                                {p.specs.slice(0, 3).map((s, i) => (
                                  <div className="product-spec-badge" key={i}>
                                    <span className="spec-badge-val">{s.value}</span>
                                  </div>
                                ))}
                              </div>

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
          onSelectProduct={(p) => setSelectedProduct(p)}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
