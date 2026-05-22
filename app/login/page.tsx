import Link from 'next/link';
import { company } from '@/lib/data';

export default function LoginPage() {
  return (
    <main className="app-shell">
      <section className="page" style={{maxWidth:520}}>
        <div className="card">
          <div className="brand" style={{marginBottom:20}}><img src="/logo.png" alt="SmartNibas" /><span>{company.name}<small>Secure SaaS Login</small></span></div>
          <h1 style={{fontSize:32}}>Login access</h1>
          <p>Google OAuth structure is ready. Until credentials are added, this button routes to a safe demo endpoint and will not break Vercel build.</p>
          <div className="grid">
            <Link className="btn primary" href="/api/auth/google">Continue with Google</Link>
            <Link className="btn" href="/dashboard">Open Demo Dashboard</Link>
          </div>
          <p><strong>Restriction logic:</strong> New users remain pending until admin approval. After approval they receive a 30-day trial or paid monthly/yearly rental access.</p>
        </div>
      </section>
    </main>
  );
}
