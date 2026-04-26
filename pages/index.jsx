import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import GlitchText from '../components/GlitchText';
import SectionTitle from '../components/SectionTitle';

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [introVisible, setIntroVisible] = useState(true);
  const heroRef = useRef(null);

  const handleEnter = () => {
    setEntered(true);
    setTimeout(() => setIntroVisible(false), 1200);
  };

  // Parallax on hero
  useEffect(() => {
    if (!entered) return;
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [entered]);

  const galleryImages = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {/* INTRO SPLASH */}
      {introVisible && (
        <div className={`intro-splash ${entered ? 'exiting' : ''}`}>
          <div className="intro-bg" />
          <div className="intro-content">
            <div className="intro-lines">
              <div className="intro-line" />
              <div className="intro-line" />
            </div>
            <h1 className="intro-name">DXNZEL</h1>
            <p className="intro-sub">welcome to my world</p>
            <button className="enter-btn" onClick={handleEnter}>
              <span className="btn-text">Enter Site</span>
              <span className="btn-arrow">→</span>
            </button>
          </div>
          <div className="scanline" />
        </div>
      )}

      {/* MAIN SITE */}
      <div className={`site-wrapper ${entered ? 'visible' : ''}`}>
        <Layout title="DXNZEL" description="Official website of DXNZEL — welcome to my world">

          {/* HERO */}
          <section className="hero">
            <div className="hero-media" ref={heroRef}>
              <Image
                src="/assets/hero.jpg"
                alt="DXNZEL Hero"
                fill
                priority
                className="hero-img"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <video
                className="hero-video"
                src="/assets/intro.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <div className="hero-overlay" />
            <div className="hero-vignette" />

            <div className="hero-content">
              <span className="hero-label">— OFFICIAL —</span>
              <h1 className="hero-name">
                <GlitchText text="DXNZEL" />
              </h1>
              <p className="hero-subtitle">welcome to my world</p>
              <div className="hero-cta-row">
                <Link href="/music" className="hero-btn primary">
                  Latest Music
                </Link>
                <Link href="/gallery" className="hero-btn secondary">
                  Gallery
                </Link>
              </div>
            </div>

            <div className="scroll-hint">
              <span className="scroll-text">SCROLL</span>
              <div className="scroll-bar" />
            </div>
          </section>

          {/* FEATURED MUSIC */}
          <section className="section music-section">
            <div className="container">
              <SectionTitle
                label="// latest drop"
                title="Featured Music"
                subtitle="Stream the latest from DXNZEL"
              />
              <div className="music-grid">
                <div className="music-embed-card">
                  <div className="embed-label">Spotify</div>
                  <div className="embed-placeholder">
                    <p className="embed-note"><iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/5kE96uht7eOUtWeBJMTRfo?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></p>
                    <iframe
                      className="spotify-embed"
                      src="https://open.spotify.com/embed/track/5kE96uht7eOUtWeBJMTRfo?utm_source=generator&theme=0"
                      width="100%"
                      height="152"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      title="Spotify Player"
                    />
                  </div>
                </div>

                <div className="music-embed-card">
                  <div className="embed-label">YouTube</div>
                  <div className="yt-embed-wrap">
                    <p className="embed-note"><iframe width="560" height="315" src="https://www.youtube.com/embed/bXVZg1lUigc?si=WvTg-V-7LU6kcpUW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                      className="yt-embed"
                      src="https://www.youtube.com/embed/5kE96uht7eOUtWeBJMTRfo"
                      title="DXNZEL YouTube"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
              <div className="music-cta">
                <Link href="/music" className="section-link">View All Music →</Link>
              </div>
            </div>
          </section>

          {/* GALLERY PREVIEW */}
          <section className="section gallery-section">
            <div className="container">
              <SectionTitle label="// visuals" title="Gallery" />
              <div className="gallery-grid">
                {galleryImages.map(i => (
                  <Link key={i} href="/gallery" className="gallery-item">
                    <div className="gallery-img-wrap">
                      <Image
                        src={`/assets/gallery${i}.jpg`}
                        alt={`Gallery ${i}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="gallery-img"
                      />
                      <div className="gallery-overlay">
                        <span className="gallery-num">0{i}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="gallery-cta">
                <Link href="/gallery" className="section-link">View Full Gallery →</Link>
              </div>
            </div>
          </section>

          {/* BIO PREVIEW */}
          <section className="section bio-section">
            <div className="container">
              <div className="bio-grid">
                <div className="bio-img-wrap">
                  <Image
                    src="/assets/artist.jpg"
                    alt="DXNZEL"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    className="bio-img"
                  />
                  <div className="bio-img-overlay" />
                </div>
                <div className="bio-content">
                  <span className="section-label-inline">// about</span>
                  <h2 className="bio-title">The World<br />of DXNZEL</h2>
                  <p className="bio-text">
                    Born from the shadows, forged in sound. DXNZEL is an artist who exists 
                    at the intersection of mystery and melody — where every track is a 
                    portal into a cinematic universe uniquely his own.
                  </p>
                  <p className="bio-text">
                    With a sound that defies genre and a visual world that commands attention, 
                    DXNZEL is not just an artist — he is an experience.
                  </p>
                  <Link href="/bio" className="bio-link">Read Full Story →</Link>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT/BOOKING SECTION */}
          <section className="section contact-section">
            <div className="container">
              <SectionTitle
                label="// get in touch"
                title="Bookings & Contact"
                subtitle="For features, collaborations & bookings"
              />
              <div className="contact-glass">
                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-row">
                    <div className="form-field">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-input" placeholder="Your name" />
                    </div>
                    <div className="form-field">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-input" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Subject</label>
                    <select className="form-input form-select">
                      <option value="">Select inquiry type</option>
                      <option value="booking">Live Booking</option>
                      <option value="feature">Feature / Collab</option>
                      <option value="media">Press / Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Message</label>
                    <textarea className="form-input form-textarea" placeholder="Tell me more..." rows={5} />
                  </div>
                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>

        </Layout>
      </div>

      <style jsx>{`
        /* ─── INTRO SPLASH ─── */
        .intro-splash {
          position: fixed;
          inset: 0;
          z-index: 9000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .intro-splash.exiting {
          opacity: 0;
          transform: scale(1.03);
          pointer-events: none;
        }

        .intro-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, #0a0008 0%, #000 70%);
          animation: slowZoom 8s ease-out forwards;
        }

        @keyframes slowZoom {
          from { transform: scale(1); }
          to { transform: scale(1.06); }
        }

        .intro-content {
          position: relative;
          z-index: 1;
          text-align: center;
          animation: fadeIn 1.2s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .intro-lines {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .intro-line {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #ff6b00, transparent);
          animation: expandLine 1.5s ease forwards;
        }

        @keyframes expandLine {
          from { width: 0; opacity: 0; }
          to { width: 60px; opacity: 1; }
        }

        .intro-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(5rem, 18vw, 14rem);
          letter-spacing: 0.1em;
          line-height: 0.9;
          color: #fff;
          animation: glowPulse 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        @keyframes glowPulse {
          0%, 100% { text-shadow: 0 0 30px rgba(255,107,0,0.5), 0 0 80px rgba(255,107,0,0.25); }
          50% { text-shadow: 0 0 60px rgba(255,107,0,0.8), 0 0 120px rgba(255,107,0,0.4), 0 0 200px rgba(255,107,0,0.2); }
        }

        .intro-sub {
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.35em;
          color: rgba(255,255,255,0.4);
          text-transform: lowercase;
          margin-top: 1rem;
          margin-bottom: 3.5rem;
          animation: fadeIn 1.5s ease 0.8s both;
        }

        .enter-btn {
          background: transparent;
          border: 1px solid rgba(255,107,0,0.5);
          color: #fff;
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          padding: 1rem 2.5rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          animation: fadeIn 1.5s ease 1.2s both;
        }

        .enter-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #ff6b00;
          transform: translateX(-101%);
          transition: transform 0.3s ease;
          z-index: -1;
        }

        .enter-btn:hover {
          border-color: #ff6b00;
          color: #000;
          box-shadow: 0 0 40px rgba(255,107,0,0.4);
        }

        .enter-btn:hover::before {
          transform: translateX(0);
        }

        .btn-arrow {
          font-size: 1rem;
          transition: transform 0.3s ease;
        }

        .enter-btn:hover .btn-arrow {
          transform: translateX(4px);
        }

        .scanline {
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255,107,0,0.3), transparent);
          animation: scanline 4s linear infinite;
          pointer-events: none;
        }

        @keyframes scanline {
          from { top: 0; }
          to { top: 100%; }
        }

        /* ─── SITE WRAPPER ─── */
        .site-wrapper {
          opacity: 0;
          transition: opacity 0.8s ease 0.3s;
        }

        .site-wrapper.visible {
          opacity: 1;
        }

        /* ─── HERO ─── */
        .hero {
          position: relative;
          height: 100vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .hero-media {
          position: absolute;
          inset: 0;
          will-change: transform;
        }

        :global(.hero-img) {
          animation: slowZoom 15s ease-out forwards !important;
        }

        @keyframes slowZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }

        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.5;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.3) 0%,
            rgba(0,0,0,0.5) 40%,
            rgba(0,0,0,0.85) 100%
          );
          z-index: 1;
        }

        .hero-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%);
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          text-align: center;
          animation: fadeIn 1.5s ease 0.3s both;
        }

        .hero-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.45em;
          color: rgba(255,107,0,0.8);
          display: block;
          margin-bottom: 1.5rem;
        }

        .hero-name {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(5rem, 16vw, 14rem);
          letter-spacing: 0.06em;
          line-height: 0.9;
          color: #fff;
          text-shadow: 0 0 40px rgba(255,107,0,0.4), 0 0 100px rgba(255,107,0,0.15);
          animation: glowPulse 4s ease-in-out infinite;
        }

        .hero-subtitle {
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          letter-spacing: 0.35em;
          color: rgba(255,255,255,0.45);
          text-transform: lowercase;
          margin-top: 1.2rem;
          margin-bottom: 3rem;
        }

        .hero-cta-row {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-btn {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          padding: 0.85rem 2rem;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .hero-btn.primary {
          background: #ff6b00;
          color: #000;
          border: 1px solid #ff6b00;
          box-shadow: 0 0 30px rgba(255,107,0,0.35);
        }

        .hero-btn.primary:hover {
          background: transparent;
          color: #ff6b00;
          box-shadow: 0 0 50px rgba(255,107,0,0.5);
        }

        .hero-btn.secondary {
          background: transparent;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .hero-btn.secondary:hover {
          border-color: rgba(255,107,0,0.5);
          color: #ff6b00;
          box-shadow: 0 0 25px rgba(255,107,0,0.2);
        }

        .scroll-hint {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
          animation: float 2.5s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-8px); }
        }

        .scroll-text {
          font-family: 'Space Mono', monospace;
          font-size: 0.55rem;
          letter-spacing: 0.4em;
          color: rgba(255,255,255,0.3);
        }

        .scroll-bar {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(255,107,0,0.6), transparent);
          animation: expandBar 1.5s ease-in-out infinite;
        }

        @keyframes expandBar {
          0% { height: 20px; opacity: 0.3; }
          50% { height: 40px; opacity: 1; }
          100% { height: 20px; opacity: 0.3; }
        }

        /* ─── SECTIONS ─── */
        .section {
          padding: 8rem 0;
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-label-inline {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          color: #ff6b00;
          display: block;
          margin-bottom: 1rem;
        }

        /* ─── MUSIC SECTION ─── */
        .music-section {
          background: #000;
        }

        .music-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .music-embed-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          padding: 1.5rem;
          transition: border-color 0.3s ease;
        }

        .music-embed-card:hover {
          border-color: rgba(255,107,0,0.2);
        }

        .embed-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          color: #ff6b00;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }

        .embed-note {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.25);
          margin-bottom: 0.75rem;
          font-style: italic;
        }

        :global(.spotify-embed) {
          border-radius: 0 !important;
          border: none;
        }

        .yt-embed-wrap {
          position: relative;
        }

        :global(.yt-embed) {
          width: 100%;
          aspect-ratio: 16/9;
          display: block;
          border: none;
        }

        .music-cta, .gallery-cta {
          text-align: center;
          margin-top: 3rem;
        }

        .section-link {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          border-bottom: 1px solid rgba(255,107,0,0.3);
          padding-bottom: 2px;
          transition: all 0.3s ease;
          text-transform: uppercase;
        }

        .section-link:hover {
          color: #ff6b00;
          border-bottom-color: #ff6b00;
        }

        /* ─── GALLERY SECTION ─── */
        .gallery-section {
          background: #030305;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
        }

        .gallery-item {
          display: block;
          text-decoration: none;
        }

        .gallery-img-wrap {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
        }

        :global(.gallery-img) {
          transition: transform 0.6s ease !important;
        }

        .gallery-item:hover :global(.gallery-img) {
          transform: scale(1.08) !important;
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
          padding: 1rem;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-num {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: rgba(255,107,0,0.8);
          letter-spacing: 0.2em;
        }

        /* ─── BIO SECTION ─── */
        .bio-section {
          background: #000;
        }

        .bio-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .bio-img-wrap {
          position: relative;
          aspect-ratio: 3/4;
          overflow: hidden;
        }

        :global(.bio-img) {
          transition: transform 0.8s ease !important;
        }

        .bio-img-wrap:hover :global(.bio-img) {
          transform: scale(1.04) !important;
        }

        .bio-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,107,0,0.1) 0%, transparent 60%);
          pointer-events: none;
        }

        .bio-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          letter-spacing: 0.05em;
          line-height: 0.95;
          color: #fff;
          margin-bottom: 1.8rem;
          margin-top: 0.8rem;
        }

        .bio-text {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(255,255,255,0.55);
          margin-bottom: 1.2rem;
          font-weight: 400;
          letter-spacing: 0.03em;
        }

        .bio-link {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: #ff6b00;
          text-decoration: none;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          margin-top: 1rem;
          transition: letter-spacing 0.3s ease;
        }

        .bio-link:hover {
          letter-spacing: 0.3em;
        }

        /* ─── CONTACT SECTION ─── */
        .contact-section {
          background: #030305;
        }

        .contact-glass {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          backdrop-filter: blur(10px);
          padding: 3rem;
          max-width: 700px;
          margin: 0 auto;
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
          color: rgba(255,107,0,0.8);
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
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          outline: none;
          width: 100%;
        }

        .form-input:focus {
          border-color: rgba(255,107,0,0.5);
          box-shadow: 0 0 20px rgba(255,107,0,0.1);
        }

        .form-input::placeholder {
          color: rgba(255,255,255,0.2);
        }

        .form-select {
          appearance: none;
          cursor: pointer;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          background: #ff6b00;
          color: #000;
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          padding: 1rem 2rem;
          border: 1px solid #ff6b00;
          cursor: pointer;
          transition: all 0.3s ease;
          align-self: flex-start;
        }

        .submit-btn:hover {
          background: transparent;
          color: #ff6b00;
          box-shadow: 0 0 40px rgba(255,107,0,0.3);
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 900px) {
          .bio-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .bio-img-wrap {
            aspect-ratio: 16/9;
          }
        }

        @media (max-width: 768px) {
          .section {
            padding: 5rem 0;
          }

          .music-grid {
            grid-template-columns: 1fr;
          }

          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-glass {
            padding: 2rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr 1fr;
            gap: 0.3rem;
          }
        }
      `}</style>
    </>
  );
}
