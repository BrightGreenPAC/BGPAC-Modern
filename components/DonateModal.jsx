import { useEffect } from 'react';

export default function DonateModal({ open, onClose }){
  useEffect(()=>{
    if(!open) return;
    function onKey(e){ if(e.key==='Escape') onClose?.(); }
    window.addEventListener('keydown', onKey);
    return ()=> window.removeEventListener('keydown', onKey);
  },[open,onClose]);

  if(!open) return null;
  return (
    <div role="dialog" aria-modal="true" aria-labelledby="donateTitle"
         style={{position:'fixed',inset:0,display:'flex',alignItems:'center',justifyContent:'center',zIndex:60}}>
      <div onClick={onClose} aria-hidden="true"
           style={{position:'absolute',inset:0,background:'rgba(0,0,0,.45)',backdropFilter:'blur(2px)'}}/>
      <div className="panel" style={{position:'relative',background:'#fff',border:'1px solid var(--border)',borderRadius:16,boxShadow:'var(--shadow)',maxWidth:520,width:'92%',padding:20}}>
        <button className="btn outline" onClick={onClose} style={{position:'absolute',top:10,right:10}}>Close</button>
        <h2 id="donateTitle" style={{marginTop:0}}>Donate to Bright Green PAC</h2>
        <p>Select an amount or enter a custom donation.</p>
        <div style={{display:'flex',gap:10,flexWrap:'wrap',margin:'10px 0'}}>
          {[10,25,50,100].map(v => <button key={v} className="btn secondary">${'{'}v{'}'}</button>)}
        </div>
        <div style={{display:'flex',gap:10,flexWrap:'wrap',margin:'10px 0'}}>
          <input type="number" placeholder="Custom amount" className="input" style={{flex:'1 1 140px'}}/>
          <button className="btn primary" data-open-donate onClick={()=>alert('Mock contribution flow')}>Contribute</button>
        </div>
        <p style={{fontSize:12,color:'var(--muted)'}}>By donating you agree to our terms. Contributions are not tax‑deductible.</p>
      </div>
    </div>
  );
}
