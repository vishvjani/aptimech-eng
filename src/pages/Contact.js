import React, { useState } from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import './Contact.css';

const waSales = "https://wa.me/917046500555?text=Hello%20Mr.%20Ankit%2C%20I%20would%20like%20to%20make%20an%20inquiry%20with%20AptisMech%20Corporation.";
const waOps   = "https://wa.me/918866616585?text=Hello%20Mr.%20Mayurbhai%2C%20I%20would%20like%20to%20discuss%20a%20requirement%20with%20AptisMech.";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', company: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const msg = `Hello AptisMech Corporation LLP,%0A%0AName: ${formData.name}%0ACompany: ${formData.company}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AProduct/Requirement: ${formData.service}%0A%0AMessage: ${formData.message}%0A%0ASent from Website Contact Form.`;
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
                Reach our technical partners directly for quotations, raw material supplies, machinery specs, or custom industrial requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section style={{ padding: '80px 0', background: 'var(--off-white)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="row gy-5">

            {/* Contact Info */}
            <div className="col-lg-5">
              <span className="eyebrow">Reach Us</span>
              <h2 className="section-title">Direct Contact Information</h2>
              <div className="rule" />
              <p style={{ fontFamily: 'Inter', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Contact our key partners directly for wholesale quotations, material specs, or machine procurement.
              </p>

              {/* Address */}
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <FaMapMarkerAlt size={16} color="#F5A623" />
                </div>
                <div>
                  <span className="contact-info-label">Plant & Office Location</span>
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
                    <div className="partner-mini-role">Partner</div>
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
                    <div className="partner-mini-role">Partner</div>
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
                <a href="https://wa.me/918866616585?text=Hello%20AptisMech%2C%20I%20would%20like%20to%20request%20a%20product%20quotation."
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
                      Inquiry Forwarded Successfully!
                    </h3>
                    <p style={{ fontFamily: 'Inter', color: 'var(--text-muted)', maxWidth: 380, margin: '0.5rem auto 1.5rem', lineHeight: 1.7, fontSize: '0.9rem' }}>
                      Forwarded via WhatsApp to our key partners. We will respond within 2 business hours.
                    </p>
                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                      <button className="btn-brand" onClick={() => setSubmitted(false)}>
                        Send Another Inquiry
                      </button>
                      <a href="https://wa.me/918866616585" target="_blank" rel="noreferrer" className="btn-outline">
                        <FaWhatsapp /> Follow Up on WhatsApp
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="contact-form-title">Request for Quotation (RfQ)</h3>
                    <p className="contact-form-sub">
                      Fill out the form below for instant pricing, catalog sheets, and delivery timelines.
                    </p>

                    <form onSubmit={handleSubmit} className="contact-form">
                      <div className="row gy-3">
                        <div className="col-md-6">
                          <label className="field-label">Your Name *</label>
                          <input className="field-input" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Rajesh Patel" required />
                        </div>
                        <div className="col-md-6">
                          <label className="field-label">Company / Enterprise *</label>
                          <input className="field-input" type="text" name="company" value={formData.company} onChange={handleChange} placeholder="e.g. Apex Engineering Works" required />
                        </div>
                        <div className="col-md-6">
                          <label className="field-label">Mobile Number *</label>
                          <input className="field-input" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" required />
                        </div>
                        <div className="col-md-6">
                          <label className="field-label">Email Address</label>
                          <input className="field-input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" />
                        </div>
                        <div className="col-12">
                          <label className="field-label">Product / Material Category *</label>
                          <select className="field-input" name="service" value={formData.service} onChange={handleChange} required>
                            <option value="">— Select Category —</option>
                            <optgroup label="Industrial Machinery">
                              <option>Mechanical Multi-Functional Ironworker</option>
                              <option>Hydraulic C-Type & H-Type Presses</option>
                              <option>Hydraulic Busbar Bending Machine</option>
                              <option>Heavy Drill & Milling Machines</option>
                            </optgroup>
                            <optgroup label="Raw Materials">
                              <option>CRC Sheets & Slit Coils (Cold Rolled)</option>
                              <option>MS Coils & Plates (Mild Steel)</option>
                              <option>SS Coils & Strips (SS 304 / 316)</option>
                            </optgroup>
                            <optgroup label="Spares & Scrap">
                              <option>Precision Hardware, Collars, Flanges & Eye Bolts</option>
                              <option>Three-Phase Induction Motors & Tooling</option>
                              <option>Categorized Metal Scrap (Copper, Brass, Al, SS)</option>
                            </optgroup>
                            <option>Multiple Requirements / Project Supply</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <label className="field-label">Detailed Requirements / Specifications *</label>
                          <textarea
                            className="field-input"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Describe your requirement — machine tonnage, coil thickness/width, quantity, delivery location, etc."
                            style={{ resize: 'vertical' }}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <div className="form-notice">
                            <FaWhatsapp size={14} color="#25D366" />
                            <span>Submitting opens WhatsApp with your pre-filled inquiry. Our partners respond promptly.</span>
                          </div>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn-brand w-100 justify-content-center" style={{ padding: '14px', fontSize: '0.9rem' }}>
                            Submit RfQ via WhatsApp →
                          </button>
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
    </>
  );
};

export default Contact;
