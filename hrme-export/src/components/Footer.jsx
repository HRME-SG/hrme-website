import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const SERVICES = [
  { label: "Compliance Foundation", path: "/services#compliance" },
  { label: "Policies & Handbook", path: "/services#policies" },
  { label: "Recruitment & Onboarding", path: "/services#recruitment" },
  { label: "Performance & Growth", path: "/services#performance" },
  { label: "Payroll / HRIS Setup", path: "/services#payroll" },
  { label: "Exit & Offboarding", path: "/services#offboarding" },
];

const COMPANY = [
  { label: "About", path: "/about" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Insights", path: "/insights" },
  { label: "Contact", path: "/contact" },
];

const LEGAL = [
  { label: "Privacy Policy", path: "/privacy.html" },
  { label: "Terms of Service", path: "/terms.html" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-paper-2/60">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              We build the HR foundation Singapore SMEs are missing — contracts, policies, onboarding, performance, payroll, and offboarding.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              A product of <span className="font-medium text-ink">HRME Pte Ltd</span>, Singapore.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              UEN 202637733M<br />
              7 Temasek Boulevard, #12-07 Suntec Tower One, Singapore 038987
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Services</p>
            <ul className="mt-4 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <Link to={s.path} className="text-sm text-foreground/75 transition-colors hover:text-brand">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Company</p>
            <ul className="mt-4 space-y-3">
              {COMPANY.map((c) => (
                <li key={c.label}>
                  <Link to={c.path} className="text-sm text-foreground/75 transition-colors hover:text-brand">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Get in touch</p>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/contact" className="text-sm text-foreground/75 transition-colors hover:text-brand">
                  Book a consultation
                </Link>
              </li>
              <li>
                <a href="mailto:hello@hrme.sg" className="text-sm text-foreground/75 transition-colors hover:text-brand">
                  hello@hrme.sg
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} HRME Pte Ltd. All rights reserved. HRME and the HRME wordmark are trademarks of HRME Pte Ltd.
          </p>
          <div className="flex items-center gap-5">
            {LEGAL.map((l) => (
              <a key={l.label} href={l.path} className="text-xs text-muted-foreground transition-colors hover:text-brand">
                {l.label}
              </a>
            ))}
            <p className="text-xs text-muted-foreground">
              SHRM-SCP · IHRP-SP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
