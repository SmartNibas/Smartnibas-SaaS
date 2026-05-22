"use client";

import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  active?: string;
};

export default function AppShell({
  children,
  active = "dashboard",
}: Props) {
  const links = [
    ["dashboard", "Dashboard", "/dashboard"],
    ["invoice", "Create Invoice", "/invoices/new"],
    ["admin", "Admin Approval", "/admin/users"],
    ["pricing", "Subscription", "/pricing"],
  ];

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="side-brand">
          <img
            src="/logo.png"
            alt="SmartNibas"
          />

          <div>
            <h3>SmartNibas SaaS</h3>
            <span>Rental Billing Platform</span>
          </div>
        </div>

        <nav className="menu">
          {links.map(([key, label, href]) => (
            <Link
              key={key}
              href={href}
              className={active === key ? "active" : ""}
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="main">
        {children}
      </main>
    </div>
  );
}
