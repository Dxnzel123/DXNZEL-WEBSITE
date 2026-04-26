import Image from 'next/image';
import Layout from '../components/Layout';
import GlitchText from '../components/GlitchText';

const timeline = [
  { year: '2019', event: 'The Beginning', desc: 'Started making music in a bedroom studio, experimenting with sound and darkness.' },
  { year: '2020', event: 'First Releases', desc: 'Dropped debut singles that caught attention in underground circles.' },
  { year: '2021', event: 'Finding the Sound', desc: 'Developed a signature cinematic style that blended trap, atmospherics, and storytelling.' },
  { year: '2022', event: 'Breakthrough', desc: 'First major project solidified DXNZEL as a name to watch.' },
  { year: '2023', event: 'Global Reach', desc: 'Streams reached new territories. Collaborations expanded the sonic universe.' },
  { year: '2024', event: 'The World', desc: 'Multiple projects. Elevated production. Welcome to my world.' },
];

export default function Bio() {
  return (
    <Layout title="Bio" description="The story of DXNZEL — artist, visionary, world-builder.">

      <section className="bio-hero">
        <div className="bio-hero-bg">
          <Image
            src="/assets/artist.jpg"
            alt="DXNZEL"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
          <div className="bio-hero-overlay" />
        </div>
        <div className="bio-hero-content">
          <span className="page-label">// the story</span>
          <h1 className="bio-hero-title"><GlitchText text="DXNZEL" /></h1>
          <p className="bio-hero-sub">artist · visionary · world-builder</p>
        </div>
      </section>

      <section className="bio-body">
        <div className="container">

          <div className="bio-intro">
            <p className="bio-quote">
              "I don't make music. I build worlds."
            </p>
          </div>

          <div className="bio-main">
            <div className="bio-text-col">
              <h2 className="bio-section-title">The Origin</h2>
              <p className="bio-paragraph">
                DXNZEL emerged from the shadows of an unnamed city, a place where the streets 
                speak in frequencies most can't hear. From a young age, sound was not just music — 
                it was architecture, shelter, a way to construct something real out of nothing.
              </p>
              <p className="bio-paragraph">
                The name DXNZEL is more than a moniker. It's a signal — a transmission from a 
                frequency that exists just outside the visible spectrum. Every track is a portal, 
                every album a dimension.
              </p>
              <h2 className="bio-section-title" style={{ marginTop: '3rem' }}>The Sound</h2>
              <p className="bio-paragraph">
                Cinematic. Dark. Atmospheric. DXNZEL's music exists at the intersection of 
                emotional depth and sonic innovation. Influenced by the visual quality of film 
                scores and the raw honesty of street narratives, the sound is something entirely new.
              </p>
              <p className="bio-paragraph">
                Production that feels like weather. Lyrics that hit like memory. An experience 
                that doesn't just play — it immerses.
              </p>
            </div>

            <div className="bio-aside">
              <div className="bio-stats">
                <div className="stat-item">
                  <span className="stat-num">∞</span>
                  <span className="stat-label">Streams</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">—</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">1</span>
                  <span className="stat-label">World</span>
                </div>
              </div>
              <div className="bio-artist-img">
                <Image
                  src="/assets/artist.jpg"
                  alt="DXNZEL Portrait"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
            </div>
          </div>

          {/* TIMELINE */}
          <div className="timeline-section">
            <h2 className="bio-section-title centered">Journey</h2>
            <div className="timeline">
              {timeline.map((item, i) => (
                <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h3 className="timeline-event">{item.event}</h3>
                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="timeline-line" />
            </div>
          </div>

        </div>
      </section>

      <style jsx>{`
        .bio-hero {
          position: relative;
          height: 85vh;
          min-height: 500px;
          display: flex;
          align-items: flex-end;
          padding-bottom: 5rem;
          overflow: hidden;
        }

        .bio-hero-bg {
          position: absolute;
          inset: 0;
        }

        .bio-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.4) 50%,
            rgba(0,0,0,0.95) 100%
          );
        }

        .bio-hero-content {
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

        .bio-hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(5rem, 14vw, 12rem);
          letter-spacing: 0.06em;
          color: #fff;
          line-height: 0.9;
          text-shadow: 0 0 60px rgba(255,107,0,0.3);
        }

        .bio-hero-sub {
          font-family: 'Space Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          color: rgba(255,255,255,0.35);
          margin-top: 1rem;
        }

        .bio-body {
          background: #000;
          padding: 7rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .bio-intro {
          text-align: center;
          margin-bottom: 6rem;
          padding: 3rem;
          border: 1px solid rgba(255,107,0,0.15);
          position: relative;
        }

        .bio-intro::before,
        .bio-intro::after {
          content: '';
          position: absolute;
          width: 40px;
          height: 40px;
          border-color: #ff6b00;
          border-style: solid;
        }

        .bio-intro::before {
          top: -1px; left: -1px;
          border-width: 1px 0 0 1px;
        }

        .bio-intro::after {
          bottom: -1px; right: -1px;
          border-width: 0 1px 1px 0;
        }

        .bio-quote {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          letter-spacing: 0.05em;
          color: rgba(255,255,255,0.85);
          font-style: italic;
        }

        .bio-main {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 5rem;
          margin-bottom: 7rem;
        }

        .bio-section-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          letter-spacing: 0.1em;
          color: #ff6b00;
          margin-bottom: 1.5rem;
        }

        .bio-section-title.centered {
          text-align: center;
          color: #fff;
          font-size: 2.5rem;
          margin-bottom: 4rem;
        }

        .bio-paragraph {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1rem;
          line-height: 1.9;
          color: rgba(255,255,255,0.5);
          margin-bottom: 1.5rem;
          font-weight: 400;
          letter-spacing: 0.02em;
        }

        .bio-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .stat-item {
          text-align: center;
          padding: 1.5rem 0.5rem;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .stat-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          color: #ff6b00;
          display: block;
        }

        .stat-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.55rem;
          letter-spacing: 0.3em;
          color: rgba(255,255,255,0.3);
          text-transform: uppercase;
          display: block;
          margin-top: 0.25rem;
        }

        .bio-artist-img {
          position: relative;
          aspect-ratio: 3/4;
          overflow: hidden;
        }

        /* TIMELINE */
        .timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(255,107,0,0.4), transparent);
          transform: translateX(-50%);
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 2rem;
          padding: 2rem 0;
        }

        .timeline-item.left .timeline-year {
          text-align: right;
          order: 1;
        }

        .timeline-item.left .timeline-dot {
          order: 2;
        }

        .timeline-item.left .timeline-content {
          order: 3;
        }

        .timeline-item.right .timeline-year {
          order: 3;
          text-align: left;
        }

        .timeline-item.right .timeline-dot {
          order: 2;
        }

        .timeline-item.right .timeline-content {
          order: 1;
          text-align: right;
        }

        .timeline-year {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.5rem;
          color: rgba(255,107,0,0.4);
          letter-spacing: 0.1em;
        }

        .timeline-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ff6b00;
          box-shadow: 0 0 15px rgba(255,107,0,0.6);
          flex-shrink: 0;
          z-index: 1;
        }

        .timeline-event {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.3rem;
          letter-spacing: 0.1em;
          color: #fff;
          margin-bottom: 0.4rem;
        }

        .timeline-desc {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.35);
          line-height: 1.6;
          font-weight: 400;
        }

        @media (max-width: 900px) {
          .bio-main {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .bio-artist-img {
            aspect-ratio: 16/9;
          }
        }

        @media (max-width: 768px) {
          .timeline-item {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }

          .timeline-line { display: none; }

          .timeline-item.left .timeline-year,
          .timeline-item.right .timeline-year,
          .timeline-item.left .timeline-dot,
          .timeline-item.right .timeline-dot,
          .timeline-item.left .timeline-content,
          .timeline-item.right .timeline-content {
            order: unset;
            text-align: left;
          }

          .timeline-item {
            padding-left: 1rem;
            border-left: 1px solid rgba(255,107,0,0.3);
          }
        }
      `}</style>
    </Layout>
  );
}
