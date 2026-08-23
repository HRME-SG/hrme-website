import React from "react";
import { Link } from "react-router-dom";
import { Shield, Mail, ArrowLeft, Check } from "lucide-react";

/**
 * Reusable landing page for HRM Pte Ltd's standalone apps (AKids, NOTI, JobSea).
 * Each app carries its own distinct sub-brand identity, independent of HRME's
 * navy/indigo system. Used to satisfy App Store / Google Play privacy-policy
 * and support-URL requirements with stable, permanent URLs.
 *
 * Props drive the per-app branding and content.
 */
export default function AppLanding({
  appName,
  tagline,
  description,
  statusLabel,
  storeLabel,
  features,
  privacyPolicy,
  supportEmail,
  brand, // { name, hex, soft, text, ring }
}) {
  const b = brand;
  return (
    <div className="min-h-screen bg-white" style={{ color: "#1a1a1a" }}>
      {/* minimal sub-brand nav */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur" style={{ borderColor: `${b.hex}22` }}>
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-xl font-bold text-white"
              style={{ backgroundColor: b.hex, fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {b.name}
            </span>
            <span className="font-heading text-lg font-700" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {appName}
            </span>
          </div>
          <a
            href="#privacy"
            className="text-sm font-medium transition-colors"
            style={{ color: b.hex }}
          >
            Privacy
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="relative overflow-hidden" style={{ background: `linear-gradient(180deg, ${b.soft}, #ffffff)` }}>
        <div
          className="absolute -right-16 -top-16 h-72 w-72 rounded-full opacity-30 blur-3xl"
          style={{ backgroundColor: b.hex }}
        />
        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center sm:py-28">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium"
            style={{ backgroundColor: `${b.hex}14`, color: b.hex }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: b.hex }} />
            {statusLabel}
          </span>
          <h1
            className="mt-6 text-4xl font-700 leading-tight sm:text-5xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1a1a1a" }}
          >
            {appName}
          </h1>
          <p className="mt-4 text-xl font-medium" style={{ color: b.text }}>
            {tagline}
          </p>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-600">{description}</p>
          {storeLabel && (
            <div className="mt-9">
              <span
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
                style={{ backgroundColor: b.hex }}
              >
                {storeLabel}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* features */}
      {features && features.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 py-20">
          <div className="grid gap-5 sm:grid-cols-3">
            {features.map((f, i) => (
              <div key={i} className="rounded-2xl border p-6" style={{ borderColor: `${b.hex}22`, backgroundColor: b.soft }}>
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-white"
                  style={{ backgroundColor: b.hex }}
                >
                  <Check size={18} />
                </span>
                <h3 className="mt-4 font-heading text-base font-600" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.body}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* privacy policy */}
      <section id="privacy" className="mx-auto max-w-3xl px-6 py-20">
        <h2
          className="text-2xl font-700 sm:text-3xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#1a1a1a" }}
        >
          Privacy Policy
        </h2>
        <p className="mt-4 text-sm text-gray-500">Last updated: August 2026</p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray-700">
          {privacyPolicy.map((p, i) => (
            <div key={i}>
              <h3 className="font-heading text-base font-600 text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {p.heading}
              </h3>
              <p className="mt-2">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* support */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <div className="rounded-2xl border p-8 text-center" style={{ borderColor: `${b.hex}22`, backgroundColor: b.soft }}>
          <span
            className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl text-white"
            style={{ backgroundColor: b.hex }}
          >
            <Mail size={20} />
          </span>
          <h3 className="mt-5 font-heading text-lg font-600" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Support
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Questions, bug reports, or data requests for {appName}? Email us — we respond within two business days.
          </p>
          <a
            href={`mailto:${supportEmail}`}
            className="mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
            style={{ backgroundColor: b.hex }}
          >
            <Mail size={16} /> {supportEmail}
          </a>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t" style={{ borderColor: `${b.hex}22` }}>
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="font-heading font-700" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {appName}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                A product of <span className="font-medium text-gray-700">HRM Pte Ltd</span>, Singapore.
              </p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
            >
              <ArrowLeft size={16} /> hrme.sg
            </Link>
          </div>
          <p className="mt-6 text-xs text-gray-400">
            © {new Date().getFullYear()} HRM Pte Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export function ShieldIcon(props) {
  return <Shield {...props} />;
}
