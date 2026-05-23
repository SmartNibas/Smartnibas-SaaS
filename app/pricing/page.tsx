import AppShell from '@/lib/AppShell';

export default function Pricing() {
  return (
    <AppShell active="pricing">
      <div className="hero-dashboard compact"><div><p className="eyebrow">RENTAL ENGINE</p><h1>Subscription Plans</h1><p>Razorpay-ready monthly/yearly rental control for normal users. Admin remains free forever.</p></div></div>
      <section className="pricing-grid"><div className="price-card"><span>ADMIN</span><h2>Free</h2><p>Owner account with full control.</p><button>Current Plan</button></div><div className="price-card featured"><span>MONTHLY RENTAL</span><h2>₹499</h2><p>After 30-day free trial. Best for regular users.</p><button>Subscribe Monthly</button></div><div className="price-card"><span>YEARLY RENTAL</span><h2>₹4,999</h2><p>Annual subscription with renewal tracking.</p><button>Subscribe Yearly</button></div></section>
    </AppShell>
  );
}
