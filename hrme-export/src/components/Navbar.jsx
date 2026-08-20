import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Case Studies", path: "/case-studies" },
  { label: "Insights", path: "/insights" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 glass-nav border-b border-border/70 py-3"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Logo />

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              data-active={location.pathname === l.path}
              className="nav-link text-sm font-medium text-foreground/80 transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:scale-[1.03]"
          >
            Book a consultation
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          className="lg:hidden p-2 -mr-2 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-out",
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="glass-nav mx-4 mt-3 rounded-2xl border border-border bg-paper/90 p-4 shadow-xl">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className={cn(
                  "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                  location.pathname === l.path ? "bg-brand-soft text-brand" : "text-foreground/80 hover:bg-muted"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3 text-base font-medium text-paper"
            >
              Book a consultation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}