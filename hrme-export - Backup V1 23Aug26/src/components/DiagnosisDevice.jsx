import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * The signature HRME diagnosis motif:
 * a generic HR fix struck through, with the real psychological cause beside it.
 */
export default function DiagnosisDevice({ fix, cause, index = 0, className, dark = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 rounded-2xl border p-5",
        dark ? "border-white/10 bg-white/[0.03]" : "border-border bg-card",
        className
      )}
    >
      <div className="flex-1 min-w-0">
        <span
          className={cn(
            "text-xs uppercase tracking-[0.18em] font-medium",
            dark ? "text-white/40" : "text-muted-foreground"
          )}
        >
          The obvious fix
        </span>
        <p className={cn("mt-1 text-lg font-medium line-through decoration-2", dark ? "text-white/50" : "text-muted-foreground")}>
          {fix}
        </p>
      </div>
      <ArrowRight className={cn("shrink-0 rotate-90 sm:rotate-0", dark ? "text-brand-2" : "text-brand")} size={20} />
      <div className="flex-1 min-w-0">
        <span className="text-xs uppercase tracking-[0.18em] font-medium text-brand">The real cause</span>
        <p className={cn("mt-1 text-lg font-semibold", dark ? "text-white" : "text-ink")}>{cause}</p>
      </div>
    </motion.div>
  );
}
