import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SmartNibas Billing SaaS',
  description: 'Commercial billing, invoice, proforma and subscription management platform for SmartNibas Automation Pvt. Ltd.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
