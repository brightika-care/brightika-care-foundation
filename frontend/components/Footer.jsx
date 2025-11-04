export default function Footer(){
  return (
    <footer style={{borderTop:'1px solid rgba(2,6,23,0.06)',marginTop:40}}>
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'1rem 0'}}>
        <div><strong>Brightika Care Foundation</strong><div style={{fontSize:13,color:'#64748b'}}>© {new Date().getFullYear()} Brightika Care Foundation</div></div>
        <div style={{fontSize:14,color:'#475569'}}>Contact: 7501977757 • bcf.rehab@gmail.com</div>
      </div>
    </footer>
  );
}
