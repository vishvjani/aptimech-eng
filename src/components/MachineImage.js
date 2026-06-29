import React, { useState } from 'react';

const MachineImage = ({ src, alt, className, style }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={className}
        style={{
          ...style,
          background: 'linear-gradient(135deg, #e8f0f8, #d0dff0)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0B3C5D',
        }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="10" width="30" height="60" rx="3" fill="#b0c4d8"/>
          <rect x="20" y="58" width="40" height="8" rx="2" fill="#8fa8c0"/>
          <circle cx="34" cy="30" r="8" fill="#7090b0"/>
          <circle cx="46" cy="30" r="8" fill="#7090b0"/>
          <rect x="32" y="40" width="16" height="12" rx="1" fill="#608090"/>
        </svg>
        <span style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: '0.9rem', marginTop: '0.5rem', color: '#0B3C5D' }}>
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setError(true)}
    />
  );
};

export default MachineImage;
