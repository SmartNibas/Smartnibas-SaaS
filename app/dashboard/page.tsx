import AppShell from '@/lib/AppShell';

const docs = [
  ['Roy Residence', 'Quotation', '₹86,500', 'Final'],
  ['Lake Town Villa', 'Proforma', '₹1,22,000', 'Draft'],
  ['CC2 Office', 'Invoice', '₹69,500', 'Paid'],
  ['Hatiara Heights', 'AMC Renewal', '₹18,000', 'Due'],
];

export default function Dashboard() {
  return (
    <AppShell active="dashboard">
      <div className="hero-dashboard">
        <div>
          <p className="eyebrow">COMMAND CENTER</p>
          <h1>Enterprise Billing Overview</h1>
          <p>Real-time quotation, invoice, subscription renewal and approval analytics for SmartNibas SaaS.</p>
        </div>
        <span className="live-badge"><i /> LIVE DASHBOARD ACTIVE</span>
      </div>

      <div className="pro-tip">💡 PRO TIP: Pending renewals and draft documents will trigger admin action alerts after database integration.</div>

      <section className="kpi-grid">
        <div className="kpi-card blue"><span>TODAY'S REVENUE</span><h2>₹2,78,000</h2><p>+18% FROM LAST MONTH</p></div>
        <div className="kpi-card purple"><span>ACTIVE SUBSCRIPTIONS</span><h2>38</h2><p>APPROVED RENTAL USERS</p></div>
        <div className="kpi-card red"><span>PENDING RENEWALS</span><h2>14</h2><p>ACTION NEEDED</p></div>
        <div className="kpi-card green"><span>FINAL DOCUMENTS</span><h2>66</h2><p>LIFETIME GENERATED BILLS</p></div>
      </section>

      <section className="dashboard-layout">
        <div className="panel large">
          <div className="panel-head"><h2>Sales Velocity</h2><span>Last 7 days</span></div>
          <div className="chart-card">
            <div className="chart-grid"><span>₹36000</span><span>₹27000</span><span>₹18000</span><span>₹9000</span><span>₹0</span></div>
            <svg viewBox="0 0 700 260" className="line-chart" preserveAspectRatio="none">
              <defs><linearGradient id="g" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#034f8c" stopOpacity=".42"/><stop offset="1" stopColor="#034f8c" stopOpacity="0"/></linearGradient></defs>
              <path d="M0,35 C90,85 155,165 230,235 C340,260 470,252 700,250 L700,260 L0,260 Z" fill="url(#g)" />
              <path d="M0,35 C90,85 155,165 230,235 C340,260 470,252 700,250" fill="none" stroke="#034f8c" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <div className="chart-days"><span>May 17</span><span>May 18</span><span>May 19</span><span>May 20</span><span>May 21</span><span>May 22</span><span>May 23</span></div>
          </div>
        </div>

        <aside className="panel actions-panel">
          <div className="panel-head"><h2>Quick Actions</h2></div>
          <a className="action primary" href="/invoices/new">🧾 Create Invoice</a>
          <a className="action" href="/print">🖨 Direct Print</a>
          <a className="action" href="/admin/users">🛡 Approve Users</a>
          <a className="action" href="/pricing">💳 Manage Rental Plans</a>
          <div className="bot-orb">AI</div>
        </aside>
      </section>

      <section className="dashboard-layout bottom">
        <div className="panel" id="customers">
          <div className="panel-head"><h2>Recent Documents</h2><a href="/invoices/new">New +</a></div>
          <table className="enterprise-table"><thead><tr><th>Customer</th><th>Type</th><th>Amount</th><th>Status</th></tr></thead><tbody>{docs.map((r) => <tr key={r[0]}>{r.map((c, i) => <td key={c}>{i===3 ? <span className={`status ${c.toLowerCase()}`}>{c}</span> : c}</td>)}</tr>)}</tbody></table>
        </div>
        <div className="panel" id="renewals">
          <div className="panel-head"><h2>Renewal Monitor</h2><span>Rental Control</span></div>
          <div className="renewal-list">
            <div><b>7</b><span>Due in 7 days</span></div>
            <div><b>3</b><span>Expired users</span></div>
            <div><b>24</b><span>Monthly users</span></div>
            <div><b>11</b><span>Yearly users</span></div>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
