import AppShell from '@/lib/AppShell';
export default function Admin(){return <AppShell active="admin"><div className="page-head">
  <div>
    <h1>Admin Approval Center</h1>
    <p>Approve users, control access, trial and subscription status.</p>
  </div>
  <button className="btn primary">Approve Selected</button>
</div>
  <section className="card"><table className="table"><thead><tr><th>User</th><th>Email</th><th>Trial</th><th>Plan</th><th>Status</th></tr></thead><tbody><tr><td>Arindam Sen</td><td>arindam@example.com</td><td>26 days left</td><td>Monthly</td><td><span className="badge warn">Pending Approval</span></td></tr><tr><td>Priya Das</td><td>priya@example.com</td><td>Active</td><td>Yearly</td><td><span className="badge">Approved</span></td></tr><tr><td>Demo User</td><td>demo@example.com</td><td>Expired</td><td>Monthly</td><td><span className="badge warn">Blocked</span></td></tr></tbody></table></section></AppShell>}
