"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <main className="login-premium">
      <section className="login-box">
        <img src="/logo.png" alt="SmartNibas" />
        <p className="eyebrow">SECURE ACCESS</p>

        <h1>SmartNibas Login</h1>

        <p>
          Google OAuth-ready login with admin approval before dashboard access.
        </p>

        <button
          className="login-google"
          onClick={() => signIn("google")}
        >
          Continue with Google
        </button>

        <a className="login-preview" href="/dashboard">
          Preview Dashboard
        </a>

        <small>
          Admin free forever • Users get 30-day trial + rental
        </small>
      </section>
    </main>
  );
}
