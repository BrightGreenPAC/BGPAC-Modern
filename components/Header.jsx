// components/Header.jsx
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close the drawer on ESC or route change (best effort without router listener)
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

          {/* Desktop links */}
          <nav className="links" aria-label="Primary">
            <Link href="/about">About</Link>
            <Link href="/issues">Issues</Link>
            <Link href="/news">News</Link>
            <Link href="/events">Events</Link>
            {/* CTA uses theme button styles */}
            <Link href="/donate" className="btn primary btn-sm">Donate</Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="hamburger"
            aria-label="Open navigation"
            aria-controls="site-drawer"
            aria-expanded={open ? 'true' : 'false'}
            onClick={() => setOpen(true)}
          >
            ☰ Menu
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`backdrop ${open ? 'on' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* Mobile Drawer */}
      <aside
        id="site-drawer"
        className={`drawer ${open ? 'on' : ''}`}
        aria-hidden={!open}
        aria-label="Mobile Navigation"
      >
        <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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

        <nav role="menu" style={{ display: 'flex', flexDirection: 'column' }}>
          <Link href="/about" onClick={() => setOpen(false)} role="menuitem">About</Link>
          <Link href="/issues" onClick={() => setOpen(false)} role="menuitem">Issues</Link>
          <Link href="/news" onClick={() => setOpen(false)} role="menuitem">News</Link>
          <Link href="/events" onClick={() => setOpen(false)} role="menuitem">Events</Link>
          <Link
            href="/donate"
            onClick={() => setOpen(false)}
            role="menuitem"
            className="btn primary"
            style={{ margin: '12px' }}
          >
            Donate
          </Link>
        </nav>
      </aside>
    </>
  );
}
