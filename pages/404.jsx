import Link from 'next/link';
import GlitchText from '../components/GlitchText';

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="nf-bg" />
      <div className="nf-content">
        <span className="nf-label">// error 404</span>
        <h1 className="nf-title"><GlitchText text="LOST" /></h1>
        <p className="nf-sub">This page doesn't exist in my world.</p>
        <Link href="/" className="nf-btn">← Return Home</Link>
      </div>

      <style jsx>{`
        .not-found {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
        }

        .nf-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(255,107,0,0.08) 0%, transparent 60%);
        }

        .nf-content {
          position: relative;
          text-align: center;
        }

        .nf-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.4em;
          color: #ff6b00;
          display: block;
          margin-bottom: 1rem;
        }

        .nf-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(5rem, 20vw, 15rem);
          letter-spacing: 0.06em;
          color: #fff;
          line-height: 0.9;
          text-shadow: 0 0 60px rgba(255,107,0,0.3);
        }

        .nf-sub {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          color: rgba(255,255,255,0.3);
          margin-top: 1.5rem;
          margin-bottom: 3rem;
        }

        .nf-btn {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #ff6b00;
          border: 1px solid rgba(255,107,0,0.4);
          padding: 0.85rem 2rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .nf-btn:hover {
          background: rgba(255,107,0,0.1);
          border-color: #ff6b00;
        }
      `}</style>
    </div>
  );
}
