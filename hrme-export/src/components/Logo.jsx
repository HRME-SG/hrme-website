import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Logo({ className, onLight = false }) {
  return (
    <Link to="/" className={cn("inline-flex items-center gap-1 select-none", className)} aria-label="HRME home">
      <span
        className="font-heading font-700 text-2xl tracking-tight"
        style={{ color: onLight ? "hsl(var(--paper))" : "hsl(var(--ink))" }}
      >
        HR
      </span>
      <span className="font-heading font-700 text-2xl tracking-tight text-white px-2 py-0.5 rounded-md bg-brand leading-none">
        ME
      </span>
    </Link>
  );
}
