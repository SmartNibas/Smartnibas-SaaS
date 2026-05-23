import AppShell from '@/lib/AppShell';

export default function AdminUsers() {
  return (
    <AppShell active="admin">
      <div className="hero-dashboard compact"><div><p className="eyebrow">ACCESS CONTROL</p><h1>Admin Approval Center</h1><p>Approve users, control trial, subscription and blocked access status.</p></div><button className="btn solid">Approve Selected</button></div>
      <section className="kpi-grid three"><div className="kpi-card blue"><span>PENDING USERS</span><h2>12</h2><p>WAITING APPROVAL</p></div><div className="kpi-card green"><span>APPROVED</span><h2>38</h2><p>ACTIVE ACCOUNTS</p></div><div className="kpi-card red"><span>BLOCKED</span><h2>3</h2><p>EXPIRED / HOLD</p></div></section>
      <section className="panel"><div className="panel-head"><h2>User Access Queue</h2><span>Admin only</span></div><table className="enterprise-table"><thead><tr><th>User</th><th>Email</th><th>Trial</th><th>Plan</th><th>Status</th><th>Action</th></tr></thead><tbody><tr><td>Arindam Sen</td><td>arindam@example.com</td><td>26 days left</td><td>Monthly</td><td><span className="status due">Pending</span></td><td><button className="mini-btn">Approve</button></td></tr><tr><td>Priya Das</td><td>priya@example.com</td><td>Active</td><td>Yearly</td><td><span className="status final">Approved</span></td><td><button className="mini-btn muted">View</button></td></tr><tr><td>Demo User</td><td>demo@example.com</td><td>Expired</td><td>Monthly</td><td><span className="status draft">Blocked</span></td><td><button className="mini-btn danger">Extend</button></td></tr></tbody></table></section>
    </AppShell>
  );
}
