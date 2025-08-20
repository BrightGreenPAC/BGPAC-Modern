export default function Header(){
  return (
    <header className="top">
      <div className="container nav" role="navigation" aria-label="Main">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <svg viewBox="0 0 64 64" width="36" height="36" aria-hidden="true">
            <defs><linearGradient id="grad" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stopColor="#7ED957"/><stop offset="100%" stopColor="#8E44AD"/></linearGradient></defs>
            <circle cx="32" cy="36" r="12" fill="url(#grad)"/>
            <g stroke="url(#grad)" strokeWidth="3" strokeLinecap="round">
              <line x1="32" y1="6" x2="32" y2="16"/><line x1="12" y1="14" x2="20" y2="22"/>
              <line x1="52" y1="14" x2="44" y2="22"/><line x1="6" y1="36" x2="16" y2="36"/>
              <line x1="48" y1="36" x2="58" y2="36"/>
            </g>
          </svg>
          <div className="wordmark" aria-label="Bright Green">Bright Green</div>
        </div>
        <nav className="links">
          <a href="#mission">Our Mission</a>
          <a href="#issues">Issues</a>
          <a href="#events">Events</a>
          <a href="#take-action">Take Action</a>
          <a href="#news">News</a>
          <a href="#donate" className="btn primary" onClick={(e)=>{e.preventDefault(); document.querySelector('[data-open-donate]')?.click();}}>Donate</a>
        </nav>
      </div>
    </header>
  );
}
