// components/Header.jsx
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="nav">
          <div className="brand">
            <Link href="/">Bright Green PAC</Link>
          </div>
          <nav className="links" aria-label="Primary">
            <Link href="/about">About</Link>
            <Link href="/issues">Issues</Link>
            <Link href="/news">News</Link>
            <Link href="/events">Events</Link>
            <Link href="/donate" className="btn primary btn-sm">Donate</Link>
          </nav>
          <button
            type="button"
            className="hamburger"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
            aria-controls="site-drawer"
            aria-expanded={open ? 'true' : 'false'}
          >
            ☰ Menu
          </button>
        </div>
      </header>

      <div
        className={`backdrop ${open ? 'on' : ''}`}
        onClick={() => setOpen(false)}
      />
      <aside className={`drawer ${open ? 'on' : ''}`} id="site-drawer">
        <header>
          <div className="brand">Bright Green PAC</div>
          <button
            type="button"
            className="hamburger"
            onClick={() => setOpen(false)}
            aria-label="Close navigation"
          >
            ✕
          </button>
        </header>
        <nav>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/issues" onClick={() => setOpen(false)}>Issues</Link>
          <Link href="/news" onClick={() => setOpen(false)}>News</Link>
          <Link href="/events" onClick={() => setOpen(false)}>Events</Link>
          <Link href="/donate" onClick={() => setOpen(false)} className="btn primary">Donate</Link>
        </nav>
      </aside>
    </>
  );
}
