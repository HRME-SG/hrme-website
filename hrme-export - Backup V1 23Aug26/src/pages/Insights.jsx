import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { INSIGHTS } from "@/lib/siteData";

const TAGS = ["All", "Retention", "Culture", "Change"];

export default function Insights() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? INSIGHTS : INSIGHTS.filter((i) => i.tag === filter);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink pt-32 pb-24 sm:pt-40 sm:pb-28">
        <div className="grid-fade absolute inset-0 opacity-40" />
        <div className="glow-orb h-80 w-80 bg-brand/25 right-[-4rem] top-0" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-2" /> Insights
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-heading text-4xl font-700 leading-[1.08] text-white sm:text-5xl md:text-6xl">
              Hard truths, <span className="text-gradient-brand">plainly said.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              Field notes from our consultants. Each one follows the same shape we use in our LinkedIn writing — a hook, a scenario, a hard truth, the bullets, and a question to take back to your team.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FILTER + CARDS */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors " +
                    (filter === t ? "bg-ink text-paper" : "border border-border text-muted-foreground hover:text-ink")
                  }
                >
                  {t}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {visible.map((ins, i) => (
              <Reveal key={ins.slug} delay={(i % 2) * 0.08}>
                <article className="card-lift flex h-full flex-col rounded-3xl border border-border bg-card p-8">
                  <span className="inline-flex w-fit rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand">{ins.tag}</span>
                  <h2 className="mt-5 font-heading text-2xl font-600 leading-snug text-ink">{ins.hook}</h2>

                  <div className="mt-5 space-y-4 text-sm leading-relaxed">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Scenario</p>
                      <p className="mt-1.5 text-foreground/80">{ins.scenario}</p>
                    </div>
                    <div className="rounded-xl border-l-2 border-brand bg-brand-soft/40 p-4">
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand">The hard truth</p>
                      <p className="mt-1.5 font-medium text-ink">{ins.hardTruth}</p>
                    </div>
                    <ul className="space-y-2">
                      {ins.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-foreground/80">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex items-start gap-3 border-t border-border pt-5">
                    <HelpCircle size={18} className="mt-0.5 shrink-0 text-brand" />
                    <p className="font-heading text-base font-500 italic text-ink">{ins.question}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-14 rounded-2xl border border-border bg-paper-2/60 p-8 text-center">
              <p className="text-base text-muted-foreground">
                More field notes land on our LinkedIn as we write them.{" "}
                <Link to="/contact" className="font-medium text-brand hover:underline">
                  Start a conversation with our consultants →
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title="Want the question before the framework?" description="Book a consultation. We'll hand you the right question first — then the answer." />
    </>
  );
}
