import Link from 'next/link';
import { company, documents, money, users } from '@/lib/data';

export default function DashboardPage() {
  const draftCount = documents.filter((d) => d.status === 'draft').length;
  const pendingUsers = users.filter((u) => u.status === 'pending').length;
  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand"><img src="/logo.png" alt="SmartNibas" /><span>Dashboard<small>{company.website}</small></span></div>
        <nav className="nav"><Link href="/">Home</Link><Link href="/invoices/new" className="primary">New Invoice</Link></nav>
      </header>
      <section className="page">
        <div className="grid three">
          <div className="card"><h2>Total Documents</h2><strong>{documents.length}</strong><p>Invoice, quotation and proforma records.</p></div>
          <div className="card"><h2>Drafts</h2><strong>{draftCount}</strong><p>Incomplete documents saved for later editing.</p></div>
          <div className="card"><h2>Approvals</h2><strong>{pendingUsers}</strong><p>Users waiting for admin approval.</p></div>
        </div>
        <div className="card" style={{marginTop:18}}>
          <h2>Customer-wise Final/Draft List</h2>
          <table>
            <thead><tr><th>Document</th><th>Type</th><th>Customer</th><th>Amount</th><th>Status</th><th>Action</th></tr></thead>
            <tbody>{documents.map((doc) => <tr key={doc.id}><td>{doc.id}</td><td>{doc.type}</td><td>{doc.customer}</td><td>{money(doc.amount)}</td><td><span className={`status ${doc.status === 'draft' ? 'pending' : 'active'}`}>{doc.status}</span></td><td><Link href="/invoices/new">Edit / Duplicate</Link></td></tr>)}</tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
