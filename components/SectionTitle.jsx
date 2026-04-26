export default function SectionTitle({ label, title, subtitle }) {
  return (
    <div className="section-title-wrap">
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}

      <style jsx>{`
        .section-title-wrap {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #ff6b00;
          display: block;
          margin-bottom: 1rem;
        }

        .section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.5rem, 6vw, 5rem);
          letter-spacing: 0.08em;
          line-height: 0.95;
          color: #fff;
          text-shadow: 0 0 60px rgba(255,107,0,0.15);
        }

        .section-subtitle {
          margin-top: 1.2rem;
          font-family: 'Rajdhani', sans-serif;
          font-size: 1rem;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.1em;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
}
