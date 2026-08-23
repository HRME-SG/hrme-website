import React from "react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, description, align = "left", dark = false, className }) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          {eyebrow}
        </span>
      )}
      <h2 className={cn("mt-4 font-heading text-3xl font-600 leading-tight sm:text-4xl md:text-[2.6rem]", dark ? "text-white" : "text-ink")}>
        {title}
      </h2>
      {description && (
        <p className={cn("mt-4 text-lg leading-relaxed", dark ? "text-white/60" : "text-muted-foreground")}>{description}</p>
      )}
    </Reveal>
  );
}
