export default function EventTable({ rows=[] }){
  return (
    <div className="table-wrap" role="region" aria-label="Upcoming events" style={{overflow:'auto',border:'1px solid var(--border)',borderRadius:12,background:'#fff'}}>
      <table style={{borderCollapse:'collapse',width:'100%'}}>
        <thead><tr><th style={th}>Date</th><th style={th}>Event</th><th style={th}>Location</th><th style={th}>Action</th></tr></thead>
        <tbody>
          {rows.map((r,i)=> (
            <tr key={i}>
              <td style={td}>{r.date}</td>
              <td style={td}>{r.title}</td>
              <td style={td}>{r.location}</td>
              <td style={td}><a className="btn outline" href={r.href || '#'}>Details</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
const th = {padding:'12px 14px',borderBottom:'1px solid var(--border)',textAlign:'left',fontFamily:'League Spartan',fontWeight:700,letterSpacing:'.3px',fontSize:12,color:'#444',background:'#fbfaf4'};
const td = {padding:'12px 14px',borderBottom:'1px solid var(--border)',fontSize:14};
