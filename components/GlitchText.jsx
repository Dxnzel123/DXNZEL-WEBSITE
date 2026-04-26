export default function GlitchText({ text, className = '' }) {
  return (
    <span className={`glitch-wrap ${className}`} data-text={text}>
      {text}
      <style jsx>{`
        .glitch-wrap {
          position: relative;
          display: inline-block;
        }

        .glitch-wrap::before,
        .glitch-wrap::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-wrap::before {
          color: #ff3c00;
          animation: glitch 3s infinite linear alternate-reverse;
          opacity: 0.7;
        }

        .glitch-wrap::after {
          color: #0080ff;
          animation: glitch 2s infinite linear alternate-reverse;
          opacity: 0.5;
        }

        @keyframes glitch {
          0% { clip-path: inset(40% 0 61% 0); transform: translate(-2px, 0); }
          20% { clip-path: inset(92% 0 1% 0); transform: translate(1px, 0); }
          40% { clip-path: inset(43% 0 1% 0); transform: translate(-1px, 0); }
          60% { clip-path: inset(25% 0 58% 0); transform: translate(2px, 0); }
          80% { clip-path: inset(54% 0 7% 0); transform: translate(-2px, 0); }
          100% { clip-path: inset(58% 0 43% 0); transform: translate(1px, 0); }
        }
      `}</style>
    </span>
  );
}
