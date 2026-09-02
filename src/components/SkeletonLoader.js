import React from 'react';
import './SkeletonLoader.css';

/* ── Generic Skeleton Line / Block ── */
export const Skeleton = ({ width, height, borderRadius, style, className = '' }) => (
  <div
    className={`skeleton-pulse ${className}`}
    style={{
      width: width || '100%',
      height: height || '1rem',
      borderRadius: borderRadius || '4px',
      ...style
    }}
  />
);

/* ── Product Card Skeleton ── */
export const ProductCardSkeleton = () => (
  <div className="product-card-skeleton">
    <div className="skeleton-img-wrap">
      <div className="skeleton-pulse skeleton-img" />
      <div className="skeleton-badge-pill" />
    </div>
    <div className="skeleton-body">
      <Skeleton width="40%" height="14px" style={{ marginBottom: '8px' }} />
      <Skeleton width="85%" height="22px" style={{ marginBottom: '6px' }} />
      <Skeleton width="60%" height="13px" style={{ marginBottom: '14px' }} />
      <Skeleton width="100%" height="12px" style={{ marginBottom: '4px' }} />
      <Skeleton width="90%" height="12px" style={{ marginBottom: '16px' }} />

      {/* Mini Specs Grid */}
      <div className="skeleton-specs-grid">
        <div className="skeleton-spec-box"><Skeleton width="60%" height="10px" /><Skeleton width="80%" height="14px" style={{ marginTop: 4 }} /></div>
        <div className="skeleton-spec-box"><Skeleton width="60%" height="10px" /><Skeleton width="80%" height="14px" style={{ marginTop: 4 }} /></div>
        <div className="skeleton-spec-box"><Skeleton width="60%" height="10px" /><Skeleton width="80%" height="14px" style={{ marginTop: 4 }} /></div>
      </div>

      {/* Action Buttons */}
      <div className="d-flex gap-2 mt-3">
        <Skeleton width="80%" height="38px" borderRadius="4px" />
        <Skeleton width="40px" height="38px" borderRadius="4px" />
      </div>
    </div>
  </div>
);

/* ── Page Skeleton for Route Transitions ── */
export const PageSkeleton = () => (
  <div className="page-skeleton-container">
    {/* Hero Area */}
    <div className="page-skeleton-hero">
      <div className="container text-center">
        <Skeleton width="220px" height="16px" style={{ margin: '0 auto 16px' }} />
        <Skeleton width="60%" height="42px" style={{ margin: '0 auto 16px' }} />
        <Skeleton width="45%" height="16px" style={{ margin: '0 auto' }} />
      </div>
    </div>

    {/* Content Grid */}
    <div className="container py-5">
      <div className="d-flex justify-content-center gap-2 mb-5">
        {[1, 2, 3, 4, 5].map(i => (
          <Skeleton key={i} width="120px" height="36px" borderRadius="4px" />
        ))}
      </div>
      <div className="row gy-4">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div className="col-lg-4 col-md-6" key={i}>
            <ProductCardSkeleton />
          </div>
        ))}
      </div>
    </div>
  </div>
);
