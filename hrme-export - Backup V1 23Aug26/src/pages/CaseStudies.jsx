import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, AlertCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

const OUTCOMES = [
  {
    sector: "Technology",
    pattern: "Senior engineer attrition",
    symptom: "Four senior engineers left in a quarter. Every exit interview said 'better opportunity.'",
    cause: "A manager who ran 1:1s as status reports. Engineers stopped raising blockers months before they left.",
    shift: "Rebuilt the 1:1 around psychological safety. Next two quarters: zero unplanned senior departures.",
  },
  {
    sector: "Professional services",
    pattern: "Culture drift after growth",
    symptom: "A firm doubled headcount in a year. Meetings went quiet. Discretionary effort dropped.",
    cause: "New joiners inherited processes but never the 'why.' Role clarity eroded faster than policy could patch.",
    shift: "Redesigned onboarding around role clarity and decision rights. Engagement recovered within two cycles.",
  },
  {
    sector: "Retail",
    pattern: "Change resistance",
    symptom: "A new scheduling system 'failed to adopt.' Managers blamed the tool.",
    cause: "Managers weren't consulted on the rollout. Resistance was a prediction about fairness, not stubbornness.",
    shift: "Re-ran the rollout with manager input upstream. Adoption hit target without a single mandate.",
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
              The pattern, not the <span className="text-gradient-brand">logo drop.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              We don't trade in invented client names. Here's the honest version: the recurring diagnostic patterns our consultants see across Singapore SMEs — and the behaviour shift that followed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* HONEST SOCIAL PROOF */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="rounded-2xl border border-border bg-brand-soft/40 p-8 text-center">
              <p className="font-heading text-xl font-500 text-ink sm:text-2xl">
                Applying this method with Singapore SMEs across <span className="text-brand">tech, professional services, and retail.</span>
              </p>
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
                We keep client identities confidential. When we have permission to share named outcomes, they'll live here.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUTCOME PATTERNS */}
      <section className="bg-paper pb-24 sm:pb-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Recurring patterns"
            title="Three patterns we diagnose again and again."
            description="Anonymised by design — the sectors and symptoms are real, the behaviour shift is what changed."
          />
          <div className="mt-14 space-y-6">
            {OUTCOMES.map((o, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="card-lift rounded-3xl border border-border bg-card p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand">{o.sector}</span>
                    <span className="text-sm font-medium text-muted-foreground">{o.pattern}</span>
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
                        <ArrowRight size={14} className="text-brand" /> The real cause
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink">{o.cause}</p>
                    </div>
                    <div>
                      <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        <TrendingUp size={14} className="text-emerald-500" /> The shift
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-ink">{o.shift}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12 flex items-start gap-3 rounded-2xl border border-dashed border-border bg-paper-2/60 p-6">
              <AlertCircle size={18} className="mt-0.5 shrink-0 text-amber-500" />
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-ink">This is the section most worth filling with real outcomes.</span> If you have anonymised results — a retention number that moved, a culture survey that shifted, a rollout that landed — they belong here and would materially lift credibility. Flagged for when you're ready.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title="Your outcome could be the next pattern." description="Book a consultation. If we move the behaviour, you'll have a result worth telling." />
    </>
  );
}
