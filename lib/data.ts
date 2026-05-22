export type UserStatus = 'pending' | 'active' | 'blocked';
export type DocumentStatus = 'draft' | 'final';
export type DocumentType = 'Invoice' | 'Quotation' | 'Proforma';

export const company = {
  name: 'SmartNibas Automation Pvt. Ltd.',
  website: 'www.smartnibas.com',
  email: 'smartnibas@gmail.com',
  phone: '9903362706',
  gst: '19ABRCS8679J1Z2',
  address: 'Aashiyana Bhaban, Door no 1B, Roypara Hatiara Road, Near CC2, Kolkata 700157',
  bank: {
    company: 'SmartNibas Automation Pvt. Ltd.',
    bank: 'State Bank of India',
    account: '44734066415',
    ifsc: 'SBIN0064519',
    branch: 'Mangaldeep'
  }
};

export const users = [
  { id: 1, name: 'Admin', email: 'admin@smartnibas.com', role: 'admin', status: 'active' as UserStatus, plan: 'Free Forever', expiry: 'Never' },
  { id: 2, name: 'Demo Customer', email: 'customer@example.com', role: 'user', status: 'pending' as UserStatus, plan: '30 Day Trial', expiry: 'Pending approval' },
  { id: 3, name: 'Rental User', email: 'rental@example.com', role: 'user', status: 'active' as UserStatus, plan: 'Monthly', expiry: '2026-06-22' }
];

export const documents = [
  { id: 'INV-1001', type: 'Invoice' as DocumentType, customer: 'Roy Residence', amount: 84500, status: 'final' as DocumentStatus, date: '2026-05-22' },
  { id: 'PRO-1002', type: 'Proforma' as DocumentType, customer: 'Greenview Apartment', amount: 126000, status: 'draft' as DocumentStatus, date: '2026-05-22' },
  { id: 'QUO-1003', type: 'Quotation' as DocumentType, customer: 'Hatiara Heights', amount: 67500, status: 'final' as DocumentStatus, date: '2026-05-21' }
];

export const products = [
  { name: 'Smart Home Automation Package', qty: 1, rate: 45000 },
  { name: 'CCTV & Access Control Setup', qty: 1, rate: 28500 },
  { name: 'Installation & Configuration', qty: 1, rate: 11000 }
];

export function money(value: number) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
}
