export default function Footer(){
  return (
    <footer>
      <div className="container" style={{display:'grid',gridTemplateColumns:'1fr auto',alignItems:'start'}}>
        <div>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <svg viewBox="0 0 64 64" width="36" height="36" aria-hidden="true">
              <circle cx="32" cy="36" r="12" fill="#fff"/>
              <g stroke="#fff" strokeWidth="3" strokeLinecap="round">
                <line x1="32" y1="6" x2="32" y2="16"/><line x1="12" y1="14" x2="20" y2="22"/>
                <line x1="52" y1="14" x2="44" y2="22"/><line x1="6" y1="36" x2="16" y2="36"/>
                <line x1="48" y1="36" x2="58" y2="36"/>
              </g>
            </svg>
            <div className="wordmark" style={{color:'#fff'}}>Bright Green</div>
          </div>
          <p className="subtle" style={{marginTop:10}}>Paid for by Bright Green PAC. Contributions are not tax‑deductible.</p>
        </div>
        <nav className="subtle" style={{display:'flex',flexDirection:'column',gap:8,textAlign:'right'}}>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Compliance</a>
          <a href="#">Privacy</a>
        </nav>
      </div>
    </footer>
  );
}
