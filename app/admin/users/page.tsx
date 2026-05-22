import Link from 'next/link';
import { company, users } from '@/lib/data';

export default function AdminUsersPage() {
  return (
    <main className="app-shell">
      <header className="topbar"><div className="brand"><img src="/logo.png" alt="SmartNibas" /><span>Admin Panel<small>User approval and subscription control</small></span></div><nav className="nav"><Link href="/dashboard">Dashboard</Link></nav></header>
      <section className="page">
        <div className="card">
          <h2>User Approval & Rental Access</h2>
          <p>Admin remains free forever. Other users must be approved, then get 30-day trial or monthly/yearly rental subscription.</p>
          <table>
            <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Plan</th><th>Expiry</th><th>Action</th></tr></thead>
            <tbody>{users.map((user) => <tr key={user.id}><td>{user.name}</td><td>{user.email}</td><td>{user.role}</td><td><span className={`status ${user.status}`}>{user.status}</span></td><td>{user.plan}</td><td>{user.expiry}</td><td><button className="btn" type="button">Approve / Extend</button></td></tr>)}</tbody>
          </table>
          <p style={{fontSize:12}}>API placeholders are included. Connect this page to MySQL after environment setup.</p>
        </div>
      </section>
    </main>
  );
}
