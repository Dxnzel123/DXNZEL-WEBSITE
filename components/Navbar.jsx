import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/music', label: 'Music' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/bio', label: 'Bio' },
    { href: '/news', label: 'News' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Link href="/" className="navbar-logo">
          <span className="logo-text">DXNZEL</span>
        </Link>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link ${router.pathname === href ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div
        className={`menu-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 3rem;
          transition: all 0.5s ease;
        }

        .navbar.scrolled {
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 1rem 3rem;
          border-bottom: 1px solid rgba(255,107,0,0.15);
        }

        .navbar-logo {
          text-decoration: none;
          z-index: 1001;
        }

        .logo-text {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.8rem;
          letter-spacing: 0.15em;
          color: #fff;
          text-shadow: 0 0 20px rgba(255,107,0,0.6);
          transition: text-shadow 0.3s ease;
        }

        .logo-text:hover {
          text-shadow: 0 0 40px rgba(255,107,0,0.9), 0 0 80px rgba(255,107,0,0.4);
        }

        .navbar-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .nav-link {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          position: relative;
          transition: color 0.3s ease;
          padding: 0.25rem 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #ff6b00;
          transition: width 0.3s ease;
          box-shadow: 0 0 8px rgba(255,107,0,0.8);
        }

        .nav-link:hover,
        .nav-link.active {
          color: #fff;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 4px;
          z-index: 1001;
          cursor: pointer;
        }

        .hamburger span {
          display: block;
          width: 24px;
          height: 1.5px;
          background: #fff;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
          background: #ff6b00;
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
          background: #ff6b00;
        }

        .menu-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          z-index: 998;
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 1.2rem 1.5rem;
          }

          .navbar.scrolled {
            padding: 0.9rem 1.5rem;
          }

          .hamburger {
            display: flex;
          }

          .menu-overlay.open {
            display: block;
          }

          .navbar-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: min(300px, 80vw);
            height: 100vh;
            background: rgba(5,5,8,0.98);
            backdrop-filter: blur(30px);
            flex-direction: column;
            justify-content: center;
            gap: 2rem;
            padding: 4rem 2.5rem;
            border-left: 1px solid rgba(255,107,0,0.15);
            transition: right 0.4s cubic-bezier(0.77, 0, 0.175, 1);
            z-index: 999;
          }

          .navbar-links.open {
            right: 0;
          }

          .nav-link {
            font-size: 1.1rem;
            letter-spacing: 0.25em;
          }
        }
      `}</style>
    </>
  );
}
