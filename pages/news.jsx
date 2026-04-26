import Layout from '../components/Layout';
import GlitchText from '../components/GlitchText';
import SectionTitle from '../components/SectionTitle';

const newsItems = [
  {
    id: 1,
    date: 'APR 2024',
    category: 'Release',
    title: 'New Single Dropping Soon',
    excerpt: 'DXNZEL announces an upcoming single that pushes the sonic boundaries even further. Stay locked in.',
    featured: true,
  },
  {
    id: 2,
    date: 'MAR 2024',
    category: 'Event',
    title: 'Live Performance Announced',
    excerpt: 'First live performance of the year confirmed. Location and tickets coming soon.',
    featured: false,
  },
  {
    id: 3,
    date: 'FEB 2024',
    category: 'Press',
    title: 'Featured in Underground Mag',
    excerpt: 'DXNZEL sits down with Underground Magazine to discuss creative process and the making of the latest project.',
    featured: false,
  },
  {
    id: 4,
    date: 'JAN 2024',
    category: 'Project',
    title: 'EP Hits 1M Streams',
    excerpt: 'The latest project crosses one million streams across all platforms. Thank you to every listener.',
    featured: false,
  },
  {
    id: 5,
    date: 'DEC 2023',
    category: 'Update',
    title: 'End of Year Message',
    excerpt: '2023 was a year of growth, sacrifice, and elevation. What comes next is bigger than you can imagine.',
    featured: false,
  },
];

const categoryColors = {
  Release: '#ff6b00',
  Event: '#0080ff',
  Press: '#8040ff',
  Project: '#00c86e',
  Update: '#ff3c80',
};

export default function News() {
  const featured = newsItems.find(n => n.featured);
  const rest = newsItems.filter(n => !n.featured);

  return (
    <Layout title="News" description="Latest news and updates from DXNZEL.">
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <span className="page-label">// latest updates</span>
          <h1 className="page-title"><GlitchText text="News" /></h1>
        </div>
      </section>

      <section className="news-page">
        <div className="container">

          {/* FEATURED */}
          {featured && (
            <div className="featured-card">
              <div className="featured-meta">
                <span className="news-cat" style={{ '--cat-color': categoryColors[featured.category] }}>
                  {featured.category}
                </span>
                <span className="news-date">{featured.date}</span>
                <span className="featured-badge">Featured</span>
              </div>
              <h2 className="featured-title">{featured.title}</h2>
              <p className="featured-excerpt">{featured.excerpt}</p>
              <button className="read-more-btn">Read More →</button>
            </div>
          )}

          {/* NEWS GRID */}
          <div className="news-grid">
            {rest.map(item => (
              <article key={item.id} className="news-card">
                <div className="news-card-meta">
                  <span
                    className="news-cat"
                    style={{ '--cat-color': categoryColors[item.category] }}
                  >
                    {item.category}
                  </span>
                  <span className="news-date">{item.date}</span>
                </div>
                <h3 className="news-card-title">{item.title}</h3>
                <p className="news-card-excerpt">{item.excerpt}</p>
                <button className="read-more-link">Read More →</button>
              </article>
            ))}
          </div>

          {/* NEWSLETTER */}
          <div className="newsletter-section">
            <SectionTitle
              label="// stay connected"
              title="Subscribe"
              subtitle="Get updates on new music, shows, and more"
            />
            <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                className="newsletter-input"
                placeholder="Enter your email address"
              />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
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
          background: radial-gradient(ellipse at 50% 80%, rgba(255,107,0,0.1) 0%, transparent 60%),
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

        .news-page {
          background: #000;
          padding: 6rem 0;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .featured-card {
          border: 1px solid rgba(255,107,0,0.2);
          padding: 3rem;
          margin-bottom: 3rem;
          position: relative;
          background: rgba(255,107,0,0.03);
          transition: border-color 0.3s ease;
        }

        .featured-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 3px;
          height: 100%;
          background: #ff6b00;
        }

        .featured-card:hover {
          border-color: rgba(255,107,0,0.4);
        }

        .featured-meta {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          margin-bottom: 1.2rem;
        }

        .news-cat {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          color: var(--cat-color);
          text-transform: uppercase;
          border: 1px solid var(--cat-color);
          padding: 0.2rem 0.6rem;
          opacity: 0.9;
        }

        .news-date {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          color: rgba(255,255,255,0.25);
          letter-spacing: 0.2em;
        }

        .featured-badge {
          font-family: 'Space Mono', monospace;
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          background: #ff6b00;
          color: #000;
          padding: 0.2rem 0.5rem;
          text-transform: uppercase;
        }

        .featured-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.8rem, 4vw, 3rem);
          letter-spacing: 0.06em;
          color: #fff;
          margin-bottom: 1rem;
        }

        .featured-excerpt {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.8;
          margin-bottom: 1.5rem;
          max-width: 600px;
        }

        .read-more-btn {
          background: transparent;
          border: 1px solid rgba(255,107,0,0.4);
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

        .read-more-btn:hover {
          background: rgba(255,107,0,0.1);
          border-color: #ff6b00;
        }

        .news-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.04);
          margin-bottom: 6rem;
        }

        .news-card {
          background: #000;
          padding: 2rem 2.5rem;
          transition: background 0.3s ease;
        }

        .news-card:hover {
          background: rgba(255,107,0,0.02);
        }

        .news-card-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .news-card-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.4rem;
          letter-spacing: 0.08em;
          color: #fff;
          margin-bottom: 0.8rem;
          line-height: 1.1;
        }

        .news-card-excerpt {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.35);
          line-height: 1.7;
          margin-bottom: 1.2rem;
        }

        .read-more-link {
          background: none;
          border: none;
          color: rgba(255,107,0,0.6);
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          padding: 0;
          transition: color 0.3s ease;
        }

        .read-more-link:hover {
          color: #ff6b00;
        }

        /* NEWSLETTER */
        .newsletter-section {
          text-align: center;
        }

        .newsletter-form {
          display: flex;
          max-width: 500px;
          margin: 0 auto;
          gap: 0;
        }

        .newsletter-input {
          flex: 1;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-right: none;
          color: #fff;
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.95rem;
          padding: 0.9rem 1.2rem;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .newsletter-input:focus {
          border-color: rgba(255,107,0,0.4);
        }

        .newsletter-input::placeholder {
          color: rgba(255,255,255,0.2);
        }

        .newsletter-btn {
          background: #ff6b00;
          border: 1px solid #ff6b00;
          color: #000;
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 0.9rem 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .newsletter-btn:hover {
          background: transparent;
          color: #ff6b00;
        }

        @media (max-width: 768px) {
          .news-grid {
            grid-template-columns: 1fr;
          }

          .featured-card {
            padding: 2rem 1.5rem;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .newsletter-input {
            border-right: 1px solid rgba(255,255,255,0.08);
            border-bottom: none;
          }
        }
      `}</style>
    </Layout>
  );
}
