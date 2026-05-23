import AppShell from '@/lib/AppShell';

export default function NewInvoice() {
  return (
    <AppShell active="invoice">
      <div className="hero-dashboard compact">
        <div><p className="eyebrow">BILLING DESK</p><h1>Document Builder</h1><p>Create invoice, quotation or proforma with draft/final workflow and print preview.</p></div>
        <div className="head-actions"><button className="btn ghost">Save Draft</button><button className="btn solid">Finalize</button></div>
      </div>
      <section className="billing-grid">
        <div className="invoice-sheet premium-sheet">
          <div className="sheet-head"><div><img src="/logo.png" alt="SmartNibas"/><h2>SmartNibas Automation Pvt. Ltd.</h2><p>www.smartnibas.com<br/>Aashiyana Bhaban, Door no 1B, Roypara Hatiara Road, Near CC2, Kolkata 700157<br/>GST: 19ABRCS8679J1Z2</p></div><div><h1>PROFORMA</h1><p>#SN-2026-001</p></div></div>
          <div className="customer-box"><div><span>Customer</span><b>Roy Residence</b></div><div><span>Date</span><b>23 May 2026</b></div><div><span>Status</span><b>Draft</b></div></div>
          <table className="enterprise-table"><thead><tr><th>Description</th><th>Qty</th><th>Rate</th><th>Total</th></tr></thead><tbody><tr><td>Smart Home Automation Package</td><td>1</td><td>₹75,000</td><td>₹75,000</td></tr><tr><td>Installation & Configuration</td><td>1</td><td>₹10,000</td><td>₹10,000</td></tr></tbody></table>
          <div className="totals"><div><span>Subtotal</span><b>₹85,000</b></div><div><span>GST</span><b>₹15,300</b></div><div className="grand"><span>Total</span><b>₹1,00,300</b></div></div>
          <div className="bank"><b>Bank Details</b><p>Company: SmartNibas Automation Pvt. Ltd.<br/>Bank: State Bank of India<br/>A/C No: 44734066415<br/>IFSC: SBIN0064519<br/>Branch: Mangaldeep</p></div>
        </div>
        <aside className="panel builder-panel"><h2>Quick Setup</h2><div className="form"><select><option>Proforma</option><option>Quotation</option><option>Invoice</option></select><input placeholder="Customer Name"/><input placeholder="Customer Mobile"/><textarea placeholder="Address" rows={4}/><input placeholder="Document Amount"/><a className="action primary" href="/print">Print Preview</a></div></aside>
      </section>
    </AppShell>
  );
}
