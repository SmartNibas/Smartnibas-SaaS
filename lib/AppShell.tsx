"use client";

import Link from "next/link";
import React from "react";

const menu = [
  ["dashboard", "▦", "Dashboard", "/dashboard", "Core"],
  ["invoice", "🧾", "Billing Desk", "/invoices/new", "Docs"],
  ["customers", "👥", "Customers", "/dashboard#customers", "CRM"],
  ["renewals", "⏱", "Renewal Monitor", "/dashboard#renewals", "Alerts"],
  ["admin", "🛡", "Admin Approval", "/admin/users", "Access"],
  ["pricing", "💳", "Subscription", "/pricing", "Rental"],
  ["print", "🖨", "Print Center", "/print", "A4"],
];

export default function AppShell({
  children,
  active = "dashboard",
}: {
  children: React.ReactNode;
  active?: string;
}) {
  return (
    <div className="enterprise-shell">
      <aside className="enterprise-sidebar">
        <div className="sidebar-brand">
          <div className="sidebar-logo-box">
            <img src="/logo.png" alt="SmartNibas" />
          </div>
          <div>
            <h3>SmartNibas</h3>
            <p>SUPER ADMIN SESSION</p>
          </div>
        </div>

        <nav className="enterprise-menu">
          {menu.map(([key, icon, label, href, tag]) => (
            <Link
              key={key}
              href={href}
              className={active === key ? "active" : ""}
            >
              <span className="menu-icon">{icon}</span>
              <span className="menu-label">{label}</span>
              <small>{tag}</small>
            </Link>
          ))}
        </nav>

        <div className="sidebar-upgrade">
          <span>RENTAL STATUS</span>
          <strong>Admin Free Forever</strong>
          <p>Users: 30-day trial + paid renewal control.</p>
        </div>
      </aside>

      <section className="enterprise-main">
        <header className="enterprise-topbar no-print">
          <div className="top-left">
            <button className="collapse-dot">▣</button>
            <span className="sync-pill"><i /> SYNC ACTIVE</span>
          </div>

          <nav className="module-tabs">
            <Link className={active === "dashboard" ? "active" : ""} href="/dashboard">Dashboard</Link>
            <Link className={active === "invoice" ? "active red" : ""} href="/invoices/new">Billing</Link>
            <Link href="/dashboard#renewals">Renewals</Link>
            <Link href="/pricing">Plans</Link>
          </nav>

          <div className="profile-pill">
            <div className="profile-avatar">SN</div>
            <div>
              <strong>Admin</strong>
              <span>SmartNibas Control</span>
            </div>
          </div>
        </header>

        <main className="enterprise-content">{children}</main>
      </section>
    </div>
  );
}
