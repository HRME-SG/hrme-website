import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, ShieldCheck, Stethoscope, Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import DiagnosisDevice from "@/components/DiagnosisDevice";
import DiagnosticReport from "@/components/DiagnosticReport";
import CTASection from "@/components/CTASection";
import { PAIN_POINTS, DIAGNOSES, SERVICES, METHOD_STEPS, INSIGHTS } from "@/lib/siteData";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-ink pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="grid-fade absolute inset-0 opacity-40" />
        <div className="glow-orb h-80 w-80 bg-brand/30 -left-20 -top-10" />
        <div className="glow-orb h-96 w-96 bg-brand-2/20 right-[-6rem] top-40" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-2" />
                HR consulting, diagnosed — not just documented
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-heading text-4xl font-700 leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-[4.1rem]">
                We don't just tell you what the SOP says.
                <br />
                <span className="text-gradient-brand">We tell you what's actually driving the behaviour.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
                HRME is a full-service HR consultancy for Singapore SMEs. Our consultants pair formal HR credentials with a foundation in organisational psychology — so you get the real cause, not just the compliant fix.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-ink transition-transform hover:scale-[1.03]"
                >
                  Book a consultation
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-medium text-white/80 transition-colors hover:bg-white/5"
                >
                  See how we diagnose
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/40">
                <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-brand-2" /> SHRM-SCP</span>
                <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-brand-2" /> IHRP-SP</span>
                <span className="flex items-center gap-2"><Brain size={16} className="text-brand-2" /> Organisational psychology</span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <DiagnosticReport dark />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== DIAGNOSIS DEVICE BAND ===== */}
      <section className="relative bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            align="center"
            eyebrow="The HRME method"
            title={<>Most HR consultants recite the framework. <span className="text-gradient">We diagnose the psychology.</span></>}
            description="Here's the recurring pattern across the work we do — the obvious HR fix, struck through, beside the real cause our consultants find underneath."
          />
          <div className="mt-14 space-y-4">
            {DIAGNOSES.map((d, i) => (
              <DiagnosisDevice key={i} index={i} fix={d.fix} cause={d.cause} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== PAIN POINTS ===== */}
      <section className="relative overflow-hidden bg-paper-2/50 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Sound familiar?"
                title="The five things HR Directors quietly tell us."
                description="If any of these is sitting in your head right now, you're exactly who we work with."
              />
              <Reveal delay={0.1}>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:scale-[1.03]"
                >
                  Let's talk it through <ArrowRight size={16} />
                </Link>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-3">
                {PAIN_POINTS.map((p, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className="card-lift flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-soft font-heading text-sm font-700 text-brand tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="pt-1.5 text-lg leading-snug text-ink">{p}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES PREVIEW ===== */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="Five services. One diagnostic lens."
              description="Every engagement starts with the same question: what's the behaviour, and what's driving it?"
            />
            <Reveal delay={0.1}>
              <Link to="/services" className="group inline-flex items-center gap-2 text-sm font-medium text-brand">
                All services <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 0.07}>
                <Link
                  to={`/services#${s.id}`}
                  className="card-lift group flex h-full flex-col rounded-2xl border border-border bg-card p-7"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <Stethoscope size={20} />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-600 text-ink">{s.name}</h3>
                  <p className="mt-2 text-sm text-brand">{s.tagline}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                    Read more
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={0.14}>
              <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-brand/40 bg-brand-soft/50 p-7">
                <p className="font-heading text-lg font-600 text-ink">Not sure which fits?</p>
                <p className="mt-2 text-sm text-muted-foreground">Most engagements blend two or three. We'll map it on a call.</p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand">
                  Book a consultation <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== METHOD ===== */}
      <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
        <div className="glow-orb h-72 w-72 bg-brand/25 right-[-4rem] top-10" />
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionHeading
            dark
            eyebrow="How we work"
            title={<>Diagnose. Decode. Design. Deploy.</>}
            description="A method that turns 'our culture feels broken' into a behaviour you can actually change."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {METHOD_STEPS.map((m, i) => (
              <Reveal key={m.step} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                  <span className="font-heading text-3xl font-700 text-gradient-brand">{m.step}</span>
                  <h3 className="mt-4 font-heading text-xl font-600 text-white">{m.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CREDENTIALS / ABOUT PREVIEW ===== */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <div className="relative">
                <div className="glow-orb h-60 w-60 bg-brand/15 left-[-2rem] top-[-2rem]" />
                <div className="relative rounded-3xl border border-border bg-card p-8 shadow-xl">
                  <Quote className="text-brand" size={32} />
                  <p className="mt-5 font-heading text-2xl font-500 leading-snug text-ink">
                    "We're not a founder with a framework. We're a firm of consultants who read the room — the policy and the people."
                  </p>
                  <p className="mt-6 text-sm text-muted-foreground">— The HRME consulting team</p>
                  <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                    <div>
                      <p className="font-heading text-2xl font-700 text-ink">SHRM-SCP</p>
                      <p className="mt-1 text-xs text-muted-foreground">Senior HR credential</p>
                    </div>
                    <div>
                      <p className="font-heading text-2xl font-700 text-ink">IHRP-SP</p>
                      <p className="mt-1 text-xs text-muted-foreground">Singapore HR</p>
                    </div>
                    <div>
                      <p className="font-heading text-2xl font-700 text-gradient-brand">Org. psych</p>
                      <p className="mt-1 text-xs text-muted-foreground">Behavioural foundation</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="Why HRME"
                title="Credentials that mean something — used differently."
                description="Most HR consultants lead with compliance. Our consultants lead with the question behind it: why are people behaving this way? Then we bring the credentials to bear on the answer."
              />
              <Reveal delay={0.1}>
                <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand">
                  Meet the firm <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INSIGHTS PREVIEW ===== */}
      <section className="bg-paper-2/50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Insights"
              title="Hard truths, plainly said."
              description="Field notes from our consultants — the hook, the scenario, the hard truth, and the question to take back to your team."
            />
            <Reveal delay={0.1}>
              <Link to="/insights" className="group inline-flex items-center gap-2 text-sm font-medium text-brand">
                All insights <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {INSIGHTS.map((ins, i) => (
              <Reveal key={ins.slug} delay={i * 0.08}>
                <Link to="/insights" className="card-lift flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                  <span className="inline-flex w-fit rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand">{ins.tag}</span>
                  <h3 className="mt-5 font-heading text-xl font-600 leading-snug text-ink">{ins.hook}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{ins.scenario}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                    Read the hard truth <ArrowRight size={15} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
