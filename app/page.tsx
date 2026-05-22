const Logo = () => <img src="/logo.png" alt="SmartNibas" />;
export default function Home(){
 return <>
  <header className="topbar">
   <a className="brand" href="/"><Logo/><div><h2>SmartNibas Automation Pvt. Ltd.</h2><span>www.smartnibas.com</span></div></a>
   <nav className="nav"><a className="btn" href="/login">Login</a><a className="btn primary" href="/dashboard">Open Dashboard</a></nav>
  </header>
  <main className="hero">
   <section>
    <span className="pill">Commercial Billing SaaS</span>
    <h1>Premium rental billing, invoice and renewal platform.</h1>
    <p>A high-end billing workspace for quotation, proforma, invoice, draft management, direct printing, renewal tracking, admin approval and subscription-based access control.</p>
    <div className="hero-actions"><a className="btn primary" href="/dashboard">Launch Dashboard</a><a className="btn" href="/invoices/new">Create Document</a><a className="btn" href="/admin">Admin Approval</a></div>
    <div className="stat-row"><div className="stat"><h3>₹2.78L</h3><span>Sample Revenue</span></div><div className="stat"><h3>42</h3><span>Renewals</span></div><div className="stat"><h3>30</h3><span>Trial Days</span></div><div className="stat"><h3>A4</h3><span>Direct Print</span></div></div>
   </section>
   <section className="showcase"><div className="orb one"></div><div className="orb two"></div><div className="glass-card invoice-preview">
    <div className="preview-head"><div><b>Invoice Preview</b><p style={{color:'#66758b'}}>Smart Home Automation Package</p></div><div className="preview-total">₹86,500</div></div>
    <div className="mini-grid"><div className="mini"><b>Draft</b><span>Save incomplete work</span></div><div className="mini"><b>Final</b><span>Lock and print</span></div><div className="mini"><b>GST</b><span>19ABRCS8679J1Z2</span></div><div className="mini"><b>Bank</b><span>SBI Mangaldeep</span></div></div>
   </div></section>
  </main>
 </>
}
