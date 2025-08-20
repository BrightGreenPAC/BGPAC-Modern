// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <div className="footer-brand">
          <svg viewBox="0 0 64 64" width="36" height="36" aria-hidden="true">
            <circle cx="32" cy="36" r="12" fill="currentColor" />
            <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none">
              <line x1="32" y1="6" x2="32" y2="16" />
              <line x1="12" y1="14" x2="20" y2="22" />
              <line x1="52" y1="14" x2="44" y2="22" />
              <line x1="6" y1="36" x2="16" y2="36" />
              <line x1="48" y1="36" x2="58" y2="36" />
            </g>
          </svg>
          <span className="wordmark">Bright Green</span>
        </div>

        <nav className="footer-links" aria-label="Footer">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/compliance">Compliance</a>
          <a href="/privacy">Privacy</a>
        </nav>

        <p className="fineprint">
          Paid for by Bright Green PAC. Contributions are not tax-deductible.
        </p>
      </div>
    </footer>
  );
}
