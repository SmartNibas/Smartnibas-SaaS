import Link from 'next/link';
import { company, money, products } from '@/lib/data';

export default function NewInvoicePage() {
  const subtotal = products.reduce((sum, item) => sum + item.qty * item.rate, 0);
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + gst;
  return (
    <main className="app-shell">
      <header className="topbar no-print">
        <div className="brand"><img src="/logo.png" alt="SmartNibas" /><span>Create Document<small>Invoice / Quotation / Proforma</small></span></div>
        <nav className="nav"><Link href="/dashboard">Dashboard</Link><button className="btn" type="button">Save Draft</button><button className="btn primary" type="button">Save Final</button></nav>
      </header>
      <section className="page">
        <div className="grid two no-print" style={{marginBottom:18}}>
          <div className="card">
            <h2>Document Details</h2>
            <div className="form-row"><div><label>Document Type</label><select defaultValue="Proforma"><option>Invoice</option><option>Quotation</option><option>Proforma</option></select></div><div><label>Customer Name</label><input defaultValue="Roy Residence" /></div></div>
            <div className="form-row" style={{marginTop:14}}><div><label>Status</label><select defaultValue="Draft"><option>Draft</option><option>Final</option></select></div><div><label>Due Date</label><input type="date" defaultValue="2026-05-30" /></div></div>
          </div>
          <div className="card">
            <h2>Print & Export</h2>
            <p>Use browser print for system/network printer. PDF can be saved from the print dialog. Layout is A4 and multi-page safe.</p>
            <button className="btn primary" type="button">Use Ctrl+P / Print Button Below</button>
          </div>
        </div>

        <article className="invoice-paper">
          <div className="invoice-head">
            <div><img src="/logo.png" alt="SmartNibas" /><h2>{company.name}</h2><p>{company.address}<br />GST: {company.gst}<br />Website: {company.website} | Email: {company.email} | Mobile: {company.phone}</p></div>
            <div><h1 style={{fontSize:34, margin:0}}>PROFORMA</h1><p><strong>No:</strong> PRO-1002<br /><strong>Date:</strong> 22 May 2026<br /><strong>Status:</strong> Draft</p></div>
          </div>
          <div className="grid two" style={{marginTop:18}}>
            <div className="card"><strong>Bill To</strong><p>Roy Residence<br />Kolkata, West Bengal<br />Customer GST: —</p></div>
            <div className="card"><strong>Project</strong><p>Home Automation & Security System<br />Renewal/Rental billing supported</p></div>
          </div>
          <table style={{marginTop:18}}>
            <thead><tr><th>Item</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
            <tbody>{products.map((item) => <tr key={item.name}><td>{item.name}</td><td>{item.qty}</td><td>{money(item.rate)}</td><td>{money(item.qty * item.rate)}</td></tr>)}</tbody>
          </table>
          <div style={{display:'flex', justifyContent:'flex-end', marginTop:18}}>
            <table style={{maxWidth:360}}><tbody><tr><td>Subtotal</td><td>{money(subtotal)}</td></tr><tr><td>GST 18%</td><td>{money(gst)}</td></tr><tr><td><strong>Total</strong></td><td><strong>{money(total)}</strong></td></tr></tbody></table>
          </div>
          <div className="bank-box">
            <strong>Bank Details</strong><br />Company: {company.bank.company}<br />Bank: {company.bank.bank}<br />A/C No: {company.bank.account}<br />IFSC: {company.bank.ifsc}<br />Branch: {company.bank.branch}
          </div>
          <div className="card"><strong>Terms & Conditions</strong><p>Payment should be made as per agreed milestones. Subscription/rental access will remain active only during valid trial or paid plan period. Goods/services once installed are subject to warranty and service policy.</p></div>
        </article>
        <div className="print-actions no-print"><button className="btn primary" type="button">Print: press Ctrl+P</button><Link className="btn" href="/dashboard">Back</Link></div>
      </section>
    </main>
  );
}
