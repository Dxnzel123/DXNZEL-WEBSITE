import { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import GlitchText from '../components/GlitchText';

const images = [1,2,3,4,5,6].map(i => ({
  src: `/assets/gallery${i}.jpg`,
  alt: `DXNZEL Gallery ${i}`,
  id: i,
}));

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <Layout title="Gallery" description="Visual world of DXNZEL — official gallery.">
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <span className="page-label">// visual world</span>
          <h1 className="page-title"><GlitchText text="Gallery" /></h1>
        </div>
      </section>

      <section className="gallery-page">
        <div className="gallery-masonry">
          {images.map((img) => (
            <button
              key={img.id}
              className="gallery-item"
              onClick={() => setSelected(img)}
              aria-label={img.alt}
            >
              <div className="gallery-img-wrap">
                <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} />
                <div className="gallery-item-overlay">
                  <span className="gallery-item-num">0{img.id}</span>
                  <span className="gallery-item-plus">+</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <button className="lightbox-close" onClick={() => setSelected(null)}>✕</button>
          <div className="lightbox-img-wrap" onClick={e => e.stopPropagation()}>
            <Image src={selected.src} alt={selected.alt} fill style={{ objectFit: 'contain' }} />
          </div>
          <div className="lightbox-nav">
            <button
              className="lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                const idx = images.findIndex(i => i.id === selected.id);
                setSelected(images[(idx - 1 + images.length) % images.length]);
              }}
            >←</button>
            <span className="lightbox-counter">
              {images.findIndex(i => i.id === selected.id) + 1} / {images.length}
            </span>
            <button
              className="lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                const idx = images.findIndex(i => i.id === selected.id);
                setSelected(images[(idx + 1) % images.length]);
              }}
            >→</button>
          </div>
        </div>
      )}

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
          background: radial-gradient(ellipse at 70% 50%, rgba(255,107,0,0.1) 0%, transparent 60%),
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

        .gallery-page {
          background: #030305;
          padding: 4rem 2rem;
        }

        .gallery-masonry {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.6rem;
        }

        .gallery-item {
          background: none;
          border: none;
          padding: 0;
          display: block;
          cursor: pointer;
        }

        .gallery-img-wrap {
          position: relative;
          aspect-ratio: 3/4;
          overflow: hidden;
        }

        .gallery-img-wrap:nth-child(even) {
          aspect-ratio: 4/3;
        }

        .gallery-item-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-item:hover .gallery-item-overlay {
          opacity: 1;
        }

        .gallery-item-plus {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.5rem;
          color: rgba(255,107,0,0.9);
        }

        .gallery-item-num {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          color: rgba(255,107,0,0.6);
          letter-spacing: 0.2em;
        }

        /* LIGHTBOX */
        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 9000;
          background: rgba(0,0,0,0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .lightbox-close {
          position: absolute;
          top: 1.5rem;
          right: 2rem;
          background: none;
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          font-size: 1rem;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1;
        }

        .lightbox-close:hover {
          border-color: #ff6b00;
          color: #ff6b00;
        }

        .lightbox-img-wrap {
          position: relative;
          width: min(90vw, 900px);
          height: min(80vh, 700px);
        }

        .lightbox-nav {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .lightbox-prev, .lightbox-next {
          background: none;
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          font-size: 1rem;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .lightbox-prev:hover, .lightbox-next:hover {
          border-color: #ff6b00;
          color: #ff6b00;
        }

        .lightbox-counter {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.2em;
        }

        @media (max-width: 768px) {
          .gallery-masonry {
            grid-template-columns: 1fr 1fr;
            gap: 0.4rem;
          }

          .gallery-page {
            padding: 3rem 1rem;
          }
        }
      `}</style>
    </Layout>
  );
}
