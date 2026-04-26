import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">DXNZEL</span>
          <p className="footer-tagline">welcome to my world</p>
        </div>

        <div className="footer-links">
          <Link href="/music">Music</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/bio">Bio</Link>
          <Link href="/news">News</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-social">
          <a href="#" aria-label="Spotify" className="social-link">SP</a>
          <a href="#" aria-label="Instagram" className="social-link">IG</a>
          <a href="#" aria-label="YouTube" className="social-link">YT</a>
          <a href="#" aria-label="Twitter" className="social-link">X</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">© {new Date().getFullYear()} DXNZEL. All rights reserved.</span>
        <span className="footer-credit">Built for the world</span>
      </div>

      <style jsx>{`
        .footer {
          background: #000;
          border-top: 1px solid rgba(255,107,0,0.15);
          padding: 4rem 3rem 2rem;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #ff6b00, transparent);
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.5rem;
          letter-spacing: 0.15em;
          color: #fff;
          text-shadow: 0 0 30px rgba(255,107,0,0.5);
          display: block;
          margin-bottom: 0.5rem;
        }

        .footer-tagline {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.2em;
          text-transform: lowercase;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links a {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          transition: color 0.3s ease;
          text-decoration: none;
        }

        .footer-links a:hover {
          color: #ff6b00;
        }

        .footer-social {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .social-link {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          color: rgba(255,255,255,0.4);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 0.4rem 0.6rem;
          transition: all 0.3s ease;
          letter-spacing: 0.05em;
          text-decoration: none;
        }

        .social-link:hover {
          color: #ff6b00;
          border-color: rgba(255,107,0,0.5);
          box-shadow: 0 0 15px rgba(255,107,0,0.2);
        }

        .footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.06);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-copy,
        .footer-credit {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.1em;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 3rem 1.5rem 2rem;
          }

          .footer-inner {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-social {
            flex-wrap: wrap;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
