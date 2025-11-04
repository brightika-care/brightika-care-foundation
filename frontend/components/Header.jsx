'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Header(){
  const path = usePathname();
  const nav = [['/','Home'],['/about','About'],['/services','Services'],['/gallery','Gallery'],['/contact','Contact'],['/chat','Chat']];
  return (
    <header className="header">
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0.8rem 0'}}>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div className="logo-badge">BC</div>
          <div>
            <div style={{fontWeight:700}}>Brightika Care Foundation</div>
            <div style={{fontSize:12,color:'#475569'}}>De-addiction • Psychiatric • Old Age Care</div>
          </div>
        </div>
        <nav style={{display:'flex',gap:12,alignItems:'center'}}>
          {nav.map(([href,label])=> (<Link key={href} href={href} className={path===href ? 'underline' : ''}>{label}</Link>))}
          <a href={process.env.NEXT_PUBLIC_WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-ghost">WhatsApp</a>
          <Link href="/auth/login" className="btn-ghost">Login</Link>
        </nav>
      </div>
    </header>
  );
}
