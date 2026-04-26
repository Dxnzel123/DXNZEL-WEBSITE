import { useState } from 'react';
import Layout from '../components/Layout';
import GlitchText from '../components/GlitchText';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout title="Contact" description="Book DXNZEL — inquiries, collaborations, press.">
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <span className="page-label">// reach out</span>
          <h1 className="page-title"><GlitchText text="Contact" /></h1>
        </div>
      </section>

      <section className="contact-page">
        <div className="container">
          <div className="contact-layout">

            <div className="contact-info">
              <h2 className="info-title">Let's Build Something</h2>
              <p className="info-text">
                For bookings, features, press inquiries, and business matters. 
                Reach out through the form or connect via the channels below.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <span className="info-label">Bookings</span>
                  <span className="info-value">the23spaceman@gmail.com.com</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Press</span>
                  <span className="info-value">the23soaceman@gmail.com.com</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Management</span>
                  <span className="info-value">the23spaceman@gmail.com.com</span>
                </div>
              </div>

              <div className="social-links">
                <span className="info-label" style={{ marginBottom: '1rem', display: 'block' }}>Follow</span>
                <div className="social-row">
                  {['Instagram', 'Spotify', 'YouTube', 'Twitter/X', 'Audiomack'].map(s => (
                    <a key={s} href="#" className="social-pill">{s}</a>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-form-wrap">
              {!submitted ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">Name *</label>
                      <input
                        type="text"
                        name="name"
                        className="form-input"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-field">
                      <label className="form-label">Email *</label>
                      <input
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="the23spaceman@gmail.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label className="form-label">Inquiry Type *</label>
                    <select name="subject" className="form-input form-select" value={form.subject} onChange={handleChange} required>
                      <option value="">Select inquiry type</option>
                      <option value="booking">Live Booking / Show</option>
                      <option value="feature">Feature / Collaboration</option>
                      <option value="press">Press / Interview</option>
                      <option value="sync">Sync / Licensing</option>
                      <option value="management">Management</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="form-label">Message *</label>
                    <textarea
                      name="message"
                      className="form-input form-textarea"
                      placeholder="Describe your project, request, or inquiry in detail..."
                      rows={7}
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-footer">
                    <p className="form-note">* This is a frontend-only form. Connect a backend or Formspree to send emails.</p>
                    <button type="submit" className="submit-btn">
                      Send Message
                      <span className="submit-arrow">→</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="success-state">
                  <div className="success-icon">✓</div>
                  <h3 className="success-title">Message Received</h3>
                  <p className="success-text">Thank you for reaching out. We'll get back to you soon.</p>
                  <button className="reset-btn" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}>
                    Send Another
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-hero {
          position: relative;
          height: 45vh;
          min-height: 280px;
          display: flex;
          align-items: flex-end;
          padding-bottom: 4rem;
          overflow: hidden;
        }

        .page-hero-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 20% 60%, rgba(255,107,0,0.1) 0%, transparent 60%),
                      linear-gradient(180deg, #000 0%, #050508 100%);
        }

        .page-hero-content {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          width: 100%;
        }

        .page-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          color: #ff6b00;
          display: block;
          margin-bottom: 0.8rem;
        }

        .page-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3.5rem, 10vw, 8rem);
          letter-spacing: 0.06em;
          color: #fff;
          line-height: 0.9;
        }

        .contact-page {
          background: #000;
          padding: 7rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 6rem;
          align-items: start;
        }

        .info-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.2rem;
          letter-spacing: 0.08em;
          color: #fff;
          margin-bottom: 1.2rem;
        }

        .info-text {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.95rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.4);
          margin-bottom: 2.5rem;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          margin-bottom: 3rem;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          padding-bottom: 1.2rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .info-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          color: rgba(255,107,0,0.7);
          text-transform: uppercase;
        }

        .info-value {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.05em;
          font-weight: 500;
        }

        .social-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .social-pill {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.4);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 0.4rem 0.8rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-pill:hover {
          border-color: rgba(255,107,0,0.4);
          color: #ff6b00;
        }

        /* FORM */
        .contact-form-wrap {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          padding: 3rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          color: rgba(255,107,0,0.75);
          text-transform: uppercase;
        }

        .form-input {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #fff;
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          padding: 0.85rem 1rem;
          outline: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          width: 100%;
          letter-spacing: 0.03em;
        }

        .form-input:focus {
          border-color: rgba(255,107,0,0.5);
          box-shadow: 0 0 20px rgba(255,107,0,0.08);
        }

        .form-input::placeholder {
          color: rgba(255,255,255,0.18);
        }

        .form-select {
          appearance: none;
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='rgba(255,107,0,0.6)' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 2.5rem;
        }

        .form-select option {
          background: #0f0f18;
          color: #fff;
        }

        .form-textarea {
          resize: vertical;
          min-height: 150px;
          font-family: 'Rajdhani', sans-serif;
        }

        .form-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .form-note {
          font-family: 'Space Mono', monospace;
          font-size: 0.55rem;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.05em;
          flex: 1;
        }

        .submit-btn {
          background: #ff6b00;
          color: #000;
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          padding: 0.9rem 2rem;
          border: 1px solid #ff6b00;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          white-space: nowrap;
        }

        .submit-btn:hover {
          background: transparent;
          color: #ff6b00;
          box-shadow: 0 0 30px rgba(255,107,0,0.25);
        }

        .submit-arrow {
          transition: transform 0.3s ease;
        }

        .submit-btn:hover .submit-arrow {
          transform: translateX(4px);
        }

        /* SUCCESS */
        .success-state {
          text-align: center;
          padding: 5rem 2rem;
        }

        .success-icon {
          width: 60px;
          height: 60px;
          border: 1px solid #ff6b00;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          color: #ff6b00;
          margin: 0 auto 1.5rem;
          box-shadow: 0 0 30px rgba(255,107,0,0.2);
        }

        .success-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.5rem;
          letter-spacing: 0.1em;
          color: #fff;
          margin-bottom: 0.8rem;
        }

        .success-text {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1rem;
          color: rgba(255,255,255,0.4);
          margin-bottom: 2rem;
        }

        .reset-btn {
          background: transparent;
          border: 1px solid rgba(255,107,0,0.3);
          color: #ff6b00;
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 0.7rem 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .reset-btn:hover {
          border-color: #ff6b00;
          background: rgba(255,107,0,0.08);
        }

        @media (max-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-form-wrap {
            padding: 2rem 1.5rem;
          }

          .form-footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </Layout>
  );
}
