import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const SERVICES = [
  { label: "HR Advisory & Consulting", path: "/services#advisory" },
  { label: "Fractional & Outsourced HR", path: "/services#fractional" },
  { label: "HR Systems Implementation", path: "/services#systems" },
  { label: "Work Pass Advisory", path: "/services#workpass" },
  { label: "Workplace Psychology Workshops", path: "/services#workshops" },
];

const COMPANY = [
  { label: "About", path: "/about" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Insights", path: "/insights" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-paper-2/60">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              HR consulting that diagnoses the psychological <em className="not-italic font-medium text-ink">why</em> behind workplace problems, not just the policy fix. A psychology-literate HR consultancy for Singapore SMEs.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              A product of <span className="font-medium text-ink">HRM Pte Ltd</span>, Singapore.
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
            © {new Date().getFullYear()} HRM Pte Ltd. All rights reserved. HRME and the HRME wordmark are trademarks of HRM Pte Ltd.
          </p>
          <p className="text-xs text-muted-foreground">
            SHRM-SCP · IHRP-SP credentialed consultants · Organisational psychology foundation
          </p>
        </div>
      </div>
    </footer>
  );
}
