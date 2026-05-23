import './globals.css';
import Providers from '@/lib/Providers';

export const metadata = {
  title:'SmartNibas Billing SaaS',
  description:'Premium invoice, quotation and rental billing platform'
};

export default function RootLayout({
  children
}:{
  children:React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
