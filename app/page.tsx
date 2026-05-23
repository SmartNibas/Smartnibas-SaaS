export default function Home() {
  return (
    <main className="landing-page">
      <div className="landing-orb one" />
      <div className="landing-orb two" />
      <section className="landing-hero-card">
        <img className="landing-logo" src="/logo.png" alt="SmartNibas" />
        <h1>SmartNibas Billing SaaS</h1>
        <p className="subline">PREMIUM AUTOMATION BUSINESS PLATFORM</p>
        <p className="landing-copy">A rental-ready invoice, quotation, proforma, subscription and approval system for modern automation businesses.</p>
        <div className="portal-grid">
          <a href="/login" className="portal-card"><span className="portal-icon blue">↗</span><h2>Secure Login</h2><p>Google OAuth-ready user entry with approval flow.</p><strong>LOGIN PORTAL →</strong></a>
          <a href="/dashboard" className="portal-card"><span className="portal-icon red">▦</span><h2>Admin Hub</h2><p>Control billing, users, renewals and documents.</p><strong>OPEN DASHBOARD →</strong></a>
          <a href="/invoices/new" className="portal-card"><span className="portal-icon gold">₹</span><h2>Billing Desk</h2><p>Create quotation, proforma and invoice records.</p><strong>CREATE DOCUMENT →</strong></a>
        </div>
        <footer>© 2026 SmartNibas Automation Pvt. Ltd. • www.smartnibas.com</footer>
      </section>
    </main>
  );
}
