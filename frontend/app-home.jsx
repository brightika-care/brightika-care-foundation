export default function Home(){ return (
  <section style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24}}>
    <div>
      <h1 style={{fontSize:34,margin:0}}>We Create Lives — Brightika Care Foundation</h1>
      <p style={{color:'#475569',marginTop:12}}>Medically supervised de-addiction, psychiatric treatment and dignified old-age care — restoring hope and supporting recovery.</p>
      <div style={{marginTop:18,display:'flex',gap:12}}>
        <a className="btn-primary" href="/services">Our Services</a>
        <a className="btn-ghost" href="/contact">Contact Us</a>
      </div>
    </div>
    <div><img src="/public/hero.jpg" alt="hero" style={{width:'100%',height:320,objectFit:'cover',borderRadius:10}}/></div>
  </section>
);}
