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
    ["admin", "Admin Approval", "/admin"],
    ["pricing", "Subscription", "/pricing"],
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-[260px] bg-[#0f172a] text-white p-5 shadow-xl">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h2 className="font-bold text-lg">SmartNibas SaaS</h2>
              <p className="text-xs text-slate-300">
                Rental Billing Platform
              </p>
            </div>
          </div>
        </div>

        <nav className="space-y-2">
          {links.map(([key, label, href]) => (
            <Link
              key={key}
              href={href}
              className={`block px-4 py-3 rounded-xl transition-all ${
                active === key
                  ? "bg-cyan-500 text-white shadow-lg"
                  : "hover:bg-slate-800 text-slate-300"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        <div className="bg-white rounded-3xl shadow-md p-6 min-h-[85vh]">
          {children}
        </div>
      </main>
    </div>
  );
}
