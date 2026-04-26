import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import GlitchText from '../components/GlitchText';

const tracks = [
  { title: 'TRACK ONE', feat: '', spotifyId: '4MUBLPlWrWFn5eyXvy4B87', youtubeId: 'bXVZg1lUigc', year: '2024' },
  { title: 'TRACK TWO', feat: 'feat. Artist', spotifyId: '7Hhx8QxQpd7noofHCfgF9j
', youtubeId: 'GFfyGDdZv18', year: '2024' },
  { title: 'TRACK THREE', feat: '', spotifyId: '0iFTshveOSDh7R5bDxCj6g', youtubeId: 'RP4tNeefvc', year: '2024' },
];

export default function Music() {
  return (
    <Layout title="Music" description="Stream DXNZEL's latest music on all platforms.">
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <span className="page-label">// discography</span>
          <h1 className="page-title"><GlitchText text="Music" /></h1>
        </div>
      </section>

      <section className="music-page">
        <div className="container">
          <SectionTitle label="// latest releases" title="Featured Tracks" />

          <div className="embeds-section">
            {tracks.map((track, i) => (
              <div key={i} className="track-card">
                <div className="track-meta">
                  <span className="track-number">0{i + 1}</span>
                  <div>
                    <h3 className="track-title">{track.title}</h3>
                    {track.feat && <span className="track-feat">{track.feat}</span>}
                    <span className="track-year">{track.year}</span>
                  </div>
                </div>
                <div className="track-players">
                  <div className="player-wrap">
                    <div className="player-label">Spotify</div>
                    <iframe
                      src={`https://open.spotify.com/embed/track/${track.spotifyId}?utm_source=generator&theme=0`}
                      width="100%"
                      height="80"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      title={`Spotify: ${track.title}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="platforms-section">
            <SectionTitle label="// stream everywhere" title="All Platforms" />
            <div className="platform-grid">
              {[
                { name: 'Spotify', color: '#1DB954', link: '#' },
                { name: 'Apple Music', color: '#FC3C44', link: '#' },
                { name: 'Audiomack', color: '#FF8C00', link: '#' },
                { name: 'YouTube Music', color: '#FF0000', link: '#' },
                { name: 'Tidal', color: '#fff', link: '#' },
                { name: 'SoundCloud', color: '#FF5500', link: '#' },
              ].map(({ name, color, link }) => (
                <a key={name} href={link} className="platform-card" style={{ '--pcolor': color }}>
                  <span className="platform-dot" />
                  <span className="platform-name">{name}</span>
                  <span className="platform-arrow">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page-hero {
          position: relative;
          height: 45vh;
          min-height: 300px;
          display: flex;
          align-items: flex-end;
          padding-bottom: 4rem;
          overflow: hidden;
        }

        .page-hero-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 30% 50%, rgba(255,107,0,0.12) 0%, transparent 60%),
                      linear-gradient(180deg, #000 0%, #050508 100%);
        }

        .page-hero-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 60px,
            rgba(255,255,255,0.01) 60px,
            rgba(255,255,255,0.01) 61px
          );
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
          text-shadow: 0 0 40px rgba(255,107,0,0.2);
        }

        .music-page {
          background: #000;
          padding: 6rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .embeds-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 6rem;
        }

        .track-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          padding: 1.5rem 2rem;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 2rem;
          align-items: center;
          transition: border-color 0.3s ease;
        }

        .track-card:hover {
          border-color: rgba(255,107,0,0.2);
        }

        .track-meta {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .track-number {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: rgba(255,107,0,0.5);
          letter-spacing: 0.1em;
          min-width: 20px;
        }

        .track-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.4rem;
          letter-spacing: 0.1em;
          color: #fff;
          margin-bottom: 0.2rem;
        }

        .track-feat {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.1em;
          display: block;
        }

        .track-year {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          color: rgba(255,107,0,0.4);
          display: block;
          margin-top: 0.2rem;
        }

        .track-players {
          min-width: 0;
        }

        .player-wrap {
          width: 100%;
        }

        .player-label {
          font-family: 'Space Mono', monospace;
          font-size: 0.55rem;
          letter-spacing: 0.3em;
          color: rgba(255,107,0,0.5);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }

        .platform-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .platform-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          padding: 1.2rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .platform-card:hover {
          border-color: var(--pcolor);
          background: rgba(255,255,255,0.04);
          transform: translateX(4px);
        }

        .platform-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--pcolor);
          flex-shrink: 0;
        }

        .platform-name {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: #fff;
          flex: 1;
        }

        .platform-arrow {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.2);
          transition: color 0.3s ease;
        }

        .platform-card:hover .platform-arrow {
          color: var(--pcolor);
        }

        @media (max-width: 768px) {
          .track-card {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .platform-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 480px) {
          .platform-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  );
}
