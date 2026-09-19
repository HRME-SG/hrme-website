import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Stethoscope, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import DiagnosisDevice from "@/components/DiagnosisDevice";
import CTASection from "@/components/CTASection";
import { PILLARS, ADD_ON } from "@/lib/siteData";
import useMeta from "@/lib/useMeta";

export default function Services() {
  useMeta(
    "HR Services for Singapore SMEs | Compliance, Policies, Payroll & More — HRME",
    "Six core HR pillars built for your business: compliance foundation, policies and handbook, recruitment and onboarding, performance systems, payroll/HRIS setup, and offboarding."
  );
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink pt-32 pb-24 sm:pt-40 sm:pb-28">
        <div className="grid-fade absolute inset-0 opacity-40" />
        <div className="glow-orb h-80 w-80 bg-brand/25 right-[-4rem] top-0" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-2" /> Services
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-heading text-4xl font-700 leading-[1.08] text-white sm:text-5xl md:text-6xl">
              Six pillars. <span className="text-gradient-brand">One HR foundation.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              We build the HR systems your business is missing — one pillar, several, or all six — so you're not figuring this out alone.
            </p>
          </Reveal>
        </div>
      </section>

      {/* OPEN INVITATION */}
      <section className="bg-brand-soft/60 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="flex items-center gap-3 text-base font-medium text-ink">
            <MessageCircle size={20} className="shrink-0 text-brand" />
            Not sure which pillars you need, or just want to talk through what you're facing? Feel free to reach out — no pitch, just a conversation.
          </p>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:scale-[1.03]"
          >
            Get in touch <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* SIX PILLARS DETAIL */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="space-y-24">
            {PILLARS.map((p, i) => (
              <div key={p.id} id={p.id} className="scroll-mt-28">
                <div className="grid gap-10 lg:grid-cols-12">
                  <div className="lg:col-span-5">
                    <Reveal>
                      <span className="font-heading text-5xl font-700 text-gradient-brand tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="mt-4 font-heading text-2xl font-600 text-ink sm:text-3xl">{p.name}</h2>
                      <p className="mt-2 text-base text-brand">{p.tagline}</p>
                      <p className="mt-5 text-base leading-relaxed text-muted-foreground">{p.summary}</p>
                      <Link
                        to="/contact"
                        className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:scale-[1.03]"
                      >
                        Ask about this <ArrowRight size={16} />
                      </Link>
                    </Reveal>
                  </div>
                  <div className="lg:col-span-7">
                    <Reveal delay={0.1}>
                      <div className="rounded-2xl border border-border bg-card p-7">
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">What's included</p>
                        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                          {p.includes.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                              <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                    <Reveal delay={0.15}>
                      <div className="mt-5">
                        <DiagnosisDevice fix={p.diagnosis.fix} cause={p.diagnosis.cause} />
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADD-ON: WORKSHOPS */}
      <section className="bg-paper-2/50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="flex flex-col items-start gap-5 rounded-2xl border border-dashed border-brand/40 bg-brand-soft/30 p-8 sm:flex-row sm:items-center">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink text-paper">
                <Stethoscope size={20} />
              </span>
              <div className="flex-1">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand">Also available</p>
                <h3 className="mt-1 font-heading text-lg font-600 text-ink">{ADD_ON.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ADD_ON.summary}</p>
              </div>
              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-muted"
              >
                Ask about this <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SCOPE NOTE */}
      <section className="bg-paper pb-20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-8 sm:flex-row sm:items-center">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink text-paper">
                <Stethoscope size={20} />
              </span>
              <div>
                <h3 className="font-heading text-lg font-600 text-ink">What we deliberately don't do</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  HRME does not offer recruitment, talent acquisition, headhunting, or placement services, and we don't submit or process work-pass applications on a client's behalf. Our work pass and HR systems engagements are advisory and delivered under client company authorisation. It keeps our advice honest and our scope clear.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title="Tell us the symptom. We'll find the cause." />
    </>
  );
}
