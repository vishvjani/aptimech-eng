import React, { useState } from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import './Contact.css';

const waSales = "https://wa.me/917046500555?text=Hello%20Mr.%20Ankit%2C%20I%20would%20like%20to%20make%20an%20inquiry%20with%20Aptismech%20Corporation.";
const waOps   = "https://wa.me/918866616585?text=Hello%20Mr.%20Mayurbhai%2C%20I%20would%20like%20to%20discuss%20a%20requirement%20with%20Aptismech.";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', company: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const msg = `Hello Aptismech Corporation LLP,%0A%0AName: ${formData.name}%0ACompany: ${formData.company}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AService: ${formData.service}%0A%0AMessage: ${formData.message}%0A%0ASent from Website Contact Form.`;
    window.open(`https://wa.me/918866616585?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-7">
              <span className="page-hero-eyebrow">Contact & Inquiry Hub</span>
              <h1 className="page-hero-title">
                Let's Build Something <span style={{ color: '#F5A623' }}>Precise.</span>
              </h1>
              <p className="page-hero-desc mx-auto">
                Reach our technical team directly for quotations, custom requirements, or any industrial inquiry.
                Fast response guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section style={{ padding: '90px 0', background: 'var(--off-white)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="row gy-5">

            {/* Contact Info */}
            <div className="col-lg-5">
              <span className="eyebrow">Reach Us</span>
              <h2 className="section-title">Contact Information</h2>
              <div className="rule" />
              <p style={{ fontFamily: 'Inter', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Contact our technical partners directly for quotations, product specifications, or any industrial requirement.
              </p>

              {/* Address */}
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <FaMapMarkerAlt size={16} color="#F5A623" />
                </div>
                <div>
                  <span className="contact-info-label">Registered Office & Plant</span>
                  <span className="contact-info-value" style={{ cursor: 'default' }}>
                    Shed No. 3, Jasmatnagar, Street No. 4,<br />
                    Plot No. 6, Vavdi Industrial Area,<br />
                    <strong>Rajkot-360004, Gujarat, India.</strong>
                  </span>
                  <a href="https://maps.google.com/?q=Vavdi+Industrial+Area+Rajkot+Gujarat"
                    target="_blank" rel="noreferrer"
                    style={{ fontSize: '0.75rem', color: 'var(--orange)', fontFamily: 'Inter', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginTop: '0.4rem' }}>
                    📍 View on Google Maps →
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <FaEnvelope size={15} color="#F5A623" />
                </div>
                <div>
                  <span className="contact-info-label">Corporate Email</span>
                  <a href="mailto:AptisMech.Corporation.llp@gmail.com" className="contact-info-value contact-link">
                    AptisMech.Corporation.llp@gmail.com
                  </a>
                </div>
              </div>

              {/* Partner 1 */}
              <div className="contact-partner-card">
                <div className="partner-card-header">
                  <div className="partner-mini-avatar">AD</div>
                  <div>
                    <div className="partner-mini-name">Mr. Ankit Dholakiya</div>
                    <div className="partner-mini-role">Designated Partner — Sales</div>
                  </div>
                </div>
                <div className="partner-contact-row">
                  <a href="tel:+917046500555" className="partner-contact-pill">
                    <FaPhone size={10} /> +91 70465 00555
                  </a>
                  <a href={waSales} target="_blank" rel="noreferrer" className="partner-contact-pill partner-wa-pill">
                    <FaWhatsapp size={11} /> WhatsApp
                  </a>
                </div>
              </div>

              {/* Partner 2 */}
              <div className="contact-partner-card">
                <div className="partner-card-header">
                  <div className="partner-mini-avatar" style={{ background: 'linear-gradient(135deg, var(--navy-light) 0%, var(--navy) 100%)' }}>MJ</div>
                  <div>
                    <div className="partner-mini-name">Mr. Mayurbhai Jani</div>
                    <div className="partner-mini-role">Designated Partner — Operations</div>
                  </div>
                </div>
                <div className="partner-contact-row">
                  <a href="tel:+918866616585" className="partner-contact-pill">
                    <FaPhone size={10} /> +91 88666 16585
                  </a>
                  <a href={waOps} target="_blank" rel="noreferrer" className="partner-contact-pill partner-wa-pill">
                    <FaWhatsapp size={11} /> WhatsApp
                  </a>
                </div>
              </div>

              <div className="mt-3 d-flex flex-column gap-2">
                <a href="https://wa.me/918866616585?text=Hello%20Aptismech%2C%20I%20would%20like%20to%20request%20a%20product%20quotation."
                  target="_blank" rel="noreferrer" className="btn-brand w-100 justify-content-center">
                  <FaWhatsapp size={15} /> Send WhatsApp Message
                </a>
                <a href="mailto:AptisMech.Corporation.llp@gmail.com" className="btn-outline w-100 justify-content-center">
                  <FaEnvelope size={13} /> Send Email
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="col-lg-7">
              <div className="contact-form-card">
                {submitted ? (
                  <div className="text-center py-5">
                    <FaCheckCircle size={64} color="#F5A623" style={{ marginBottom: '1.2rem' }} />
                    <h3 style={{ fontFamily: 'Barlow', color: 'var(--navy)', fontWeight: 900, fontSize: '1.7rem' }}>
                      Inquiry Sent Successfully!
                    </h3>
                    <p style={{ fontFamily: 'Inter', color: 'var(--text-muted)', maxWidth: 380, margin: '0.5rem auto 1.5rem', lineHeight: 1.7, fontSize: '0.9rem' }}>
                      Forwarded via WhatsApp to our technical team. We will respond within 2 business hours.
                    </p>
                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                      <button className="btn-brand" onClick={() => setSubmitted(false)}>
                        Send Another Inquiry
                      </button>
                      <a href="https://wa.me/918866616585" target="_blank" rel="noreferrer" className="btn-outline">
                        <FaWhatsapp /> Follow Up
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="contact-form-title">Request for Quotation (RfQ)</h3>
                    <p className="contact-form-sub">
                      Fill the form and we'll respond within 2 hours via WhatsApp / Email.
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div className="row gy-3">
                        <div className="col-md-6">
                          <label className="field-label">Full Name *</label>
                          <input className="field-input" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required />
                        </div>
                        <div className="col-md-6">
                          <label className="field-label">Company / Organization</label>
                          <input className="field-input" type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company name" />
                        </div>
                        <div className="col-md-6">
                          <label className="field-label">Mobile Number *</label>
                          <input className="field-input" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
                        </div>
                        <div className="col-md-6">
                          <label className="field-label">Email Address</label>
                          <input className="field-input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" />
                        </div>
                        <div className="col-12">
                          <label className="field-label">Product / Service Requirement *</label>
                          <select className="field-input" name="service" value={formData.service} onChange={handleChange} required>
                            <option value="">— Select Requirement —</option>
                            <optgroup label="Power Press Machinery">
                              <option>Mechanical Power Press (C-Frame) — Custom Tonnage</option>
                              <option>Mechanical Power Press (H-Frame) — Custom Tonnage</option>
                              <option>Pneumatic Assembly Press — Benchtop / Floor</option>
                              <option>Hydro-Pneumatic Hybrid System</option>
                            </optgroup>
                            <optgroup label="Industrial Services">
                              <option>Precision CNC Machining Job Work</option>
                              <option>Non-Ferrous Scrap — Copper / Brass / Aluminium</option>
                              <option>Industrial Spares & Maintenance Support</option>
                            </optgroup>
                            <option>General / Multiple Requirements</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <label className="field-label">Detailed Requirements / Message *</label>
                          <textarea
                            className="field-input"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Describe your requirements — tonnage, bed size, material, quantity, delivery timeline, etc."
                            style={{ resize: 'vertical' }}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <div className="form-notice">
                            <FaWhatsapp size={14} color="#25D366" />
                            <span>Submitting opens WhatsApp with your details pre-filled. Our team responds within 2 hours.</span>
                          </div>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn-brand w-100 justify-content-center" style={{ padding: '14px', fontSize: '0.9rem' }}>
                            <FaWhatsapp size={16} /> Submit Inquiry via WhatsApp
                          </button>
                        </div>
                        <div className="col-12 text-center">
                          <span style={{ fontFamily: 'Inter', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                            Or email:{' '}
                            <a href="mailto:AptisMech.Corporation.llp@gmail.com"
                              style={{ color: 'var(--orange-dark)', fontWeight: 600, textDecoration: 'none' }}>
                              AptisMech.Corporation.llp@gmail.com
                            </a>
                          </span>
                        </div>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section style={{ padding: '0 0 80px', background: 'var(--off-white)' }}>
        <div className="container">
          <div className="map-wrapper">
            <div className="map-header">
              <div>
                <h3 className="map-title">📍 Visit Our Plant</h3>
                <p className="map-subtitle">
                  Shed No. 3, Jasmatnagar, Street No. 4, Plot No. 6, Vavdi Industrial Area, Rajkot-360004, Gujarat.
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Vavdi+Industrial+Area+Rajkot+Gujarat"
                target="_blank" rel="noreferrer"
                className="btn-brand"
                style={{ fontSize: '0.78rem', padding: '9px 16px', whiteSpace: 'nowrap' }}
              >
                Open in Maps
              </a>
            </div>
            <div className="map-embed-container">
              <iframe
                title="Aptismech Location — Vavdi Industrial Area, Rajkot"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.688695286!2d70.7764!3d22.2932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca2b73d1bf3b%3A0xe44b7dfb234ca89c!2sVavdi%20Industrial%20Area%2C%20Rajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
