import Link from 'next/link';
import { company, documents, money, users } from '@/lib/data';

export default function HomePage() {
  const totalRevenue = documents.reduce((sum, doc) => sum + doc.amount, 0);
  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand">
          <img src="/logo.png" alt="SmartNibas Logo" />
          <span>{company.name}<small>{company.website}</small></span>
        </div>
        <nav className="nav">
          <Link href="/login">Login</Link>
          <Link href="/dashboard" className="primary">Open Dashboard</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">Commercial Billing SaaS</span>
            <h1>Rental-ready invoice, quotation and subscription platform.</h1>
            <p>
              A clean deployable SmartNibas SaaS rebuild for Vercel. It includes admin approval flow,
              30-day trial model, Razorpay subscription placeholders, invoice/proforma/quotation screens,
              direct print layout and Hostinger MySQL schema.
            </p>
            <div className="actions">
              <Link className="btn primary" href="/dashboard">Go to Dashboard</Link>
              <Link className="btn" href="/invoices/new">Create Document</Link>
              <Link className="btn" href="/admin/users">Admin Approval</Link>
            </div>
          </div>
          <div className="panel">
            <h2>Deployment-safe MVP</h2>
            <p>This version is intentionally build-safe first. Add real OAuth, MySQL and Razorpay credentials in environment variables after deployment.</p>
            <div className="grid two">
              <div className="card"><strong>Admin</strong><p>Free forever account control.</p></div>
              <div className="card"><strong>Users</strong><p>Approval + 30-day trial + rental.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics">
        <div className="metric"><strong>{documents.length}</strong><span>Documents</span></div>
        <div className="metric"><strong>{users.length}</strong><span>Users</span></div>
        <div className="metric"><strong>{money(totalRevenue)}</strong><span>Sample Revenue</span></div>
        <div className="metric"><strong>Print</strong><span>A4 + Multi-page</span></div>
      </section>
    </main>
  );
}
