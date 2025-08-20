import Image from 'next/image';
import DonateModal from '../components/DonateModal';
import EventTable from '../components/EventTable';
import events from '../data/events.json';
import posts from '../data/posts.json';
import { useState } from 'react';

export default function Home(){
  const [open, setOpen] = useState(false);
  return (
    <main id="main">
      <section className="section" style={{padding:'80px 0 40px'}}>
        <div className="container" style={{border:'1px solid var(--border)',borderRadius:'18px',overflow:'hidden',boxShadow:'var(--shadow)'}}>
          <div className="grid" style={{gridTemplateColumns:'1.2fr .8fr'}}>
            <div style={{minHeight:360, position:'relative'}} aria-label="Oregon community with sunrise overlay" role="img">
              <Image src="/hero-image.jpg" alt="" fill priority style={{objectFit:'cover'}} />
              <div style={{position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(126,217,87,.40), rgba(244,208,63,.40))'}}/>
            </div>
            <div style={{padding:24}}>
              <span className="badge" style={{display:'inline-flex',alignItems:'center',gap:8,padding:'6px 10px',borderRadius:999,font:'700 12px/1 League Spartan',border:'1px solid var(--border)',background:'#fff'}}>Uplift & Energy</span>
              <h1 style={{fontSize:42,lineHeight:1.1,margin:'10px 0 6px'}}>A People‑Powered PAC for a Brighter Future</h1>
              <p className="lead" style={{color:'var(--muted)',fontSize:18}}>We organize, invest, and take action for climate, fairness, and thriving communities in Oregon and beyond.</p>
              <div className="cta" style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:12}}>
                <button className="btn primary" onClick={()=>setOpen(true)}>Donate</button>
                <a href="#take-action" className="btn secondary">Volunteer</a>
                <a href="#mission" className="btn outline">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="section" style={{padding:'40px 0'}}>
        <div className="container grid" style={{gridTemplateColumns:'1fr 1fr'}}>
          <div>
            <h2>Bright Green: Register. Resist. Reimagine. Rebuild.</h2>
            <p>Our mission is to accelerate a bright‑green future—one that pairs bold climate solutions with economic dignity and democratic renewal. We register voters, resist rollbacks, reimagine policy, and rebuild local power.</p>
            <ul>
              <li><strong>Register:</strong> expand the electorate with inclusive outreach.</li>
              <li><strong>Resist:</strong> defend progress and counter disinformation.</li>
              <li><strong>Reimagine:</strong> champion pragmatic, future‑forward ideas.</li>
              <li><strong>Rebuild:</strong> strengthen community capacity at every level.</li>
            </ul>
          </div>
          <div className="tile" aria-hidden="true" style={{minHeight:260,background:'linear-gradient(180deg, rgba(126,217,87,.35), rgba(244,208,63,.35))',display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid var(--border)',borderRadius:12,backgroundColor:'#fff'}}>
            <div style={{textAlign:'center'}}>
              <div className="badge" style={{marginBottom:10,display:'inline-flex',alignItems:'center',gap:8,padding:'6px 10px',border:'1px solid var(--border)',borderRadius:999,font:'700 12px/1 League Spartan',background:'#fff'}}>Our Approach</div>
              <p style={{margin:0,color:'#333'}}>Optimistic. Action‑oriented. Inclusive.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="issues" className="section" style={{paddingTop:0}}>
        <div className="container">
          <h2 style={{marginBottom:16}}>Our Priorities</h2>
          <div className="grid" style={{gridTemplateColumns:'repeat(4,1fr)'}}>
            {['Clean Energy','Democratic Access','Community Resilience','Fair Growth'].map((title,i)=> (
              <article key={i} className="tile" style={{padding:18,border:'1px solid var(--border)',borderRadius:12,background:'#fff'}}>
                <h3 style={{marginTop:0}}>{title}</h3>
                <p>Short description for {title.toLowerCase()}…</p>
                <a href="#" className="btn outline">Read More</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="section" style={{padding:'40px 0'}}>
        <div className="container">
          <h2>Upcoming Events</h2>
          <EventTable rows={events} />
        </div>
      </section>

      <section id="take-action" className="section" style={{background:'#fff',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)',padding:'40px 0'}}>
        <div className="container grid" style={{gridTemplateColumns:'1.1fr .9fr',alignItems:'start'}}>
          <div>
            <h2>Take Action Today</h2>
            <p className="lead" style={{color:'var(--muted)'}}>Join volunteers across Oregon. You’ll get invites to trainings, events, and local teams.</p>
            <form className="tile" aria-label="Volunteer sign up" style={{padding:16,border:'1px solid var(--border)',borderRadius:12,background:'#fff'}} onSubmit={(e)=>e.preventDefault()}>
              <div className="field"><label className="label" htmlFor="name">Full Name</label><input id="name" className="input" placeholder="Alex Example" required/></div>
              <div className="field"><label className="label" htmlFor="email">Email</label><input id="email" className="input" type="email" placeholder="you@example.org" required/></div>
              <div className="field"><label className="label" htmlFor="zip">ZIP Code</label><input id="zip" className="input" inputMode="numeric" placeholder="97201"/></div>
              <button type="submit" className="btn secondary">Sign Up</button>
            </form>
          </div>
          <aside className="tile" style={{padding:18,border:'1px solid var(--border)',borderRadius:12,background:'#fff'}}>
            <h3 style={{marginTop:0}}>Fuel the Work</h3>
            <p>Every dollar powers voter outreach, training, and organizing. Contributions are <strong>not tax‑deductible</strong>.</p>
            <button className="btn primary" onClick={()=>setOpen(true)}>Donate</button>
          </aside>
        </div>
      </section>

      <section id="news" className="section" style={{padding:'40px 0'}}>
        <div className="container">
          <h2>News & Updates</h2>
          <div className="grid" style={{gridTemplateColumns:'repeat(3,1fr)'}}>
            {posts.map((p,i)=> (
              <article key={i} style={{background:'#fff',border:'1px solid var(--border)',borderRadius:'18px',boxShadow:'var(--shadow)',overflow:'hidden'}}>
                <div style={{padding:'16px 16px 6px'}}><span className="badge" style={{border:'1px solid var(--border)',padding:'6px 10px',borderRadius:999,font:'700 12px/1 League Spartan',background:'#fff'}}>{p.tag}</span></div>
                <div style={{padding:'0 16px 16px'}}>
                  <h3 style={{margin:'8px 0 6px'}}>{p.title}</h3>
                  <p className="subtle" style={{opacity:.85}}>{p.snippet}</p>
                  <a href="#" className="btn outline">Read</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DonateModal open={open} onClose={()=>setOpen(false)} />
    </main>
  );
}
