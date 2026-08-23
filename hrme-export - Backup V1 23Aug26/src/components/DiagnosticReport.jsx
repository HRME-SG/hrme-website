import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Activity, TrendingDown, Brain, Gauge } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Product-style "diagnostic report" panel — gives the services site a tangible,
 * product-like visual anchor (risk tags, root-cause breakdown, confidence score).
 */
export default function DiagnosticReport({ className, dark = false }) {
  const rootCauses = [
    { label: "Psychological safety gap", value: 62, icon: ShieldAlert },
    { label: "Unclear role boundaries", value: 41, icon: Activity },
    { label: "Recognition deficit", value: 33, icon: TrendingDown },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative rounded-3xl border p-6 sm:p-7 shadow-2xl",
        dark ? "border-white/10 bg-white/[0.04] backdrop-blur-xl" : "border-border bg-card",
        className
      )}
      style={{ transformPerspective: 1200 }}
    >
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white">
            <Brain size={18} />
          </span>
          <div>
            <p className={cn("text-xs uppercase tracking-[0.18em]", dark ? "text-white/40" : "text-muted-foreground")}>
              HRME Diagnostic Report
            </p>
            <p className={cn("font-heading font-600 text-sm", dark ? "text-white" : "text-ink")}>
              Retention · Q3 review
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live
        </span>
      </div>

      {/* risk tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {["Attrition risk", "Culture drift", "Manager gap"].map((t, i) => (
          <span
            key={t}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium",
              i === 0
                ? "bg-red-500/10 text-red-600"
                : i === 1
                ? "bg-amber-500/10 text-amber-600"
                : "bg-brand-soft text-brand"
            )}
          >
            {t}
          </span>
        ))}
      </div>

      {/* root cause breakdown */}
      <div className="mt-6 space-y-4">
        <p className={cn("text-xs uppercase tracking-[0.18em]", dark ? "text-white/40" : "text-muted-foreground")}>
          Root-cause breakdown
        </p>
        {rootCauses.map((c, i) => {
          const Icon = c.icon;
          return (
            <div key={c.label}>
              <div className="flex items-center justify-between text-sm">
                <span className={cn("flex items-center gap-2", dark ? "text-white/80" : "text-foreground")}>
                  <Icon size={14} className="text-brand" /> {c.label}
                </span>
                <span className={cn("font-medium tabular-nums", dark ? "text-white" : "text-ink")}>{c.value}%</span>
              </div>
              <div className={cn("mt-1.5 h-1.5 w-full overflow-hidden rounded-full", dark ? "bg-white/10" : "bg-muted")}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${c.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-brand-2 to-brand"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* confidence score */}
      <div className={cn("mt-6 flex items-center justify-between rounded-2xl border p-4", dark ? "border-white/10" : "border-border")}>
        <div className="flex items-center gap-2">
          <Gauge size={18} className="text-brand" />
          <span className={cn("text-sm", dark ? "text-white/80" : "text-foreground")}>Diagnostic confidence</span>
        </div>
        <span className="font-heading text-2xl font-700 text-gradient-brand tabular-nums">94%</span>
      </div>
    </motion.div>
  );
}
