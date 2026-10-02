import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaArrowRight, FaCheckCircle, FaIndustry, FaRecycle, FaCogs, FaBoxes } from 'react-icons/fa';
import './Services.css';

const WA = "https://wa.me/918866616585?text=Hello%20AptisMech%2C%20I%20am%20interested%20in%20your%20industrial%20supplies%20and%20materials.";

const services = [
  {
    id: 1,
    icon: <FaIndustry size={28} color="#F5A623" />,
    title: 'Machinery Import, Supply & Export',
    subtitle: 'Heavy Industrial Fabrication & Workshop Systems',
    badge: 'Core Division',
    desc: `Import, procurement, and supply of high-tonnage mechanical ironworkers, hydraulic C-frame & H-frame presses, busbar bending machines, pillar drills, and vertical milling equipment with full warranty and technical spares support.`,
    features: [
      'Multi-Functional Mechanical Ironworkers (55T – 125T)',
      'Hydraulic H-Type Straight-Side Presses (20T – 500T)',
      'Hydraulic Busbar Bending & Punching Equipment',
      'Heavy Duty Industrial Radial & Pillar Drills',
      'Precision Vertical Turret Milling Machines',
      'Full Technical Spares & Operating Documentation',
    ],
    applications: ['Structural Steel Fabrication', 'Automotive Press Shops', 'Control Panel Manufacturing', 'Machine Maintenance Toolrooms'],
  },
  {
    id: 2,
    icon: <FaBoxes size={28} color="#F5A623" />,
    title: 'Industrial Raw Material Supply',
    subtitle: 'Prime CRC Sheets, MS Coils & SS Coils',
    badge: 'Raw Materials',
    desc: `Wholesale sourcing and supply of high-grade steel raw materials: Cold Rolled Closed Annealed (CRCA) sheets, structural Mild Steel (MS) coils, and Stainless Steel (SS304/316) coils in standard and custom-slit widths.`,
    features: [
      'Prime & Commercial Grade CRC Sheets (0.4mm – 3.2mm)',
      'Hot Rolled & Cold Rolled MS Coils (IS 2062 / ASTM A36)',
      'Austenitic Stainless Steel Coils (SS 304, 304L, 316, 316L)',
      'Precision Coil Slitting & Cut-to-Length Flat Sheets',
      'Certified Chemical Composition & Tensile Metallurgy',
      'Prompt Pan-India Bulk Lot Logistics',
    ],
    applications: ['Electrical Panel Fabrication', 'Automotive Component Stamping', 'Storage Tank & PEB Construction', 'Kitchen & Chemical Equipment'],
  },
  {
    id: 3,
    icon: <FaCogs size={28} color="#F5A623" />,
    title: 'Precision Hardware Spares & Fasteners',
    subtitle: 'Engineered Components, Collars & Connectors',
    badge: 'Spares Hub',
    desc: `Supply of precision-machined base plates, diamond knurled nuts, SPM shaft collars, drop-forged eye bolts, hydraulic adapters, and three-phase induction electric motors for equipment builders and maintenance plants.`,
    features: [
      'Custom Milled Mounting Plates & Flanges',
      'Diamond Knurled Adjustment Nuts (M6 – M20)',
      'Single-Split & Clamp-On SPM Shaft Collars',
      'Drop-Forged High-Tensile Eye Bolts (DIN 580)',
      'High-Pressure Hydraulic Hex Adapters & Connectors',
      'Three-Phase IP55 Squirrel Cage Induction Motors',
    ],
    applications: ['Machine Assembly Lines', 'Hydraulic Power Units', 'Heavy Rigging & Lifting', 'Industrial Fluid Plumbing'],
  },
  {
    id: 4,
    icon: <FaRecycle size={28} color="#F5A623" />,
    title: 'Categorized Metal Scrap Solutions',
    subtitle: 'Wholesale Non-Ferrous & Ferrous Scrap Lots',
    badge: 'Recycling',
    desc: `Authorized large-scale supply, sortation, and trading for premium raw scrap variants, specializing in high-purity Millberry Copper, Honey Brass, Extrusion Aluminium, and Stainless Steel scrap for melting furnaces and foundries.`,
    features: [
      'Millberry Copper Wire Scrap (99.9% Cu)',
      '6063 Aluminium Extrusion & Cast Scrap',
      'Honey Brass Rod & Sheet Scrap',
      'SS 304 / 316 Non-Magnetic Scrap Lots',
      'Certified Sortation with Spectrometer Purity Checks',
      'Accurate Weighbridge Documentation',
    ],
    applications: ['Melting Furnaces & Smelters', 'Foundries & Casting Units', 'Extrusion & Billet Plants', 'Recycling Facilities'],
  },
];

const Services = () => (
  <>
    {/* PAGE HERO */}
    <section className="page-hero">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <span className="page-hero-eyebrow">Enterprise Solutions</span>
            <h1 className="page-hero-title">
              Complete Industrial Supply Portfolio
            </h1>
            <p className="page-hero-desc mx-auto">
              From heavy fabrication machinery and raw material coils to precision hardware spares and certified metal scrap trading.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* SERVICES LIST */}
    <section className="section bg-white">
      <div className="container">
        <div className="row gy-5">
          {services.map((svc) => (
            <div className="col-lg-6" key={svc.id}>
              <div className="service-card-full h-100 d-flex flex-column">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="service-icon-box">{svc.icon}</div>
                  <div>
                    <span className="service-badge">{svc.badge}</span>
                    <h3 className="service-title">{svc.title}</h3>
                    <span className="service-sub">{svc.subtitle}</span>
                  </div>
                </div>

                <p className="service-desc">{svc.desc}</p>

                <div className="service-features-grid mt-auto mb-4">
                  {svc.features.map((feat, i) => (
                    <div className="service-feat-item" key={i}>
                      <FaCheckCircle size={13} color="#F5A623" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="d-flex gap-2 flex-wrap mb-4">
                  {svc.applications.map((app, i) => (
                    <span className="svc-app-tag" key={i}>{app}</span>
                  ))}
                </div>

                <div className="d-flex gap-3 pt-3 border-top">
                  <Link to="/products" className="btn-brand" style={{ fontSize: '0.8rem', padding: '10px 18px' }}>
                    View Catalog <FaArrowRight size={11} />
                  </Link>
                  <a href={WA} target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '0.8rem', padding: '10px 18px' }}>
                    <FaWhatsapp size={13} /> Quick RfQ
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Services;
