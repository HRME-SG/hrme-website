import React from "react";
import { Wrench, AlertCircle, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

const PATTERNS = [
  {
    sector: "Technology",
    pillar: "Recruitment & Onboarding",
    symptom: "New hires took 2–3 months to become productive. No structured onboarding, no clear first-90-days plan.",
    gap: "Nothing formal existed beyond a laptop and a Slack invite. Every new hire's ramp-up depended entirely on which team they landed in.",
    built: "Built a standard onboarding system — checklist, first-90-days plan, and manager enablement guide. Ramp-up time dropped by more than half.",
  },
  {
    sector: "Professional services",
    pillar: "Policies & Handbook",
    symptom: "A firm doubled headcount in a year with no employee handbook. Leave, conduct, and disciplinary matters were handled case-by-case, inconsistently.",
    gap: "No documented policy existed for the situations that actually came up — leading to inconsistent decisions and growing employee frustration.",
    built: "Built a full employee handbook — leave policy, code of conduct, disciplinary framework — matched to how the firm actually operates, not generic boilerplate.",
  },
  {
    sector: "Retail",
    pillar: "Exit & Offboarding",
    symptom: "Every termination and resignation was handled differently. No standard process, no consistent documentation, real compliance exposure.",
    gap: "Managers were improvising exit conversations and paperwork under pressure, with no template or process to fall back on.",
    built: "Built a standard offboarding process — termination checklist, exit interview framework, and compliant documentation templates. Every exit now follows the same process.",
  },
];

export default function CaseStudies() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink pt-32 pb-24 sm:pt-40 sm:pb-28">
        <div className="grid-fade absolute inset-0 opacity-40" />
        <div className="glow-orb h-80 w-80 bg-brand/25 -left-16 top-0" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-2" /> Results
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-heading text-4xl font-700 leading-[1.08] text-white sm:text-5xl md:text-6xl">
              The gaps we find. <span className="text-gradient-brand">The systems we build.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              The recurring HR gaps our consultants find across Singapore SMEs — and the systems we built to close them.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PATTERNS */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Recurring gaps"
            title="Three gaps we find again and again."
            description="Anonymised by design — the sectors and gaps are real, the system built is what changed."
          />
          <div className="mt-14 space-y-6">
            {PATTERNS.map((o, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="card-lift rounded-3xl border border-border bg-card p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand">{o.sector}</span>
                    <span className="text-sm font-medium text-muted-foreground">{o.pillar}</span>
                  </div>
                  <div className="mt-6 grid gap-6 md:grid-cols-3">
                    <div>
                      <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        <AlertCircle size={14} className="text-amber-500" /> The symptom
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink">{o.symptom}</p>
                    </div>
                    <div>
                      <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        <Wrench size={14} className="text-brand" /> The gap
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink">{o.gap}</p>
                    </div>
                    <div>
                      <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        <CheckCircle2 size={14} className="text-emerald-500" /> What we built
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink">{o.built}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Your gap could be the next pattern we close." description="Book a consultation. We'll tell you exactly what's missing — and what it takes to build it." />
    </>
  );
}
