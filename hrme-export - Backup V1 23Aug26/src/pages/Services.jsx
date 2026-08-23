import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Stethoscope, Info } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import DiagnosisDevice from "@/components/DiagnosisDevice";
import CTASection from "@/components/CTASection";
import { SERVICES } from "@/lib/siteData";

export default function Services() {
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
              Five services. <span className="text-gradient-brand">One diagnostic lens.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              Every engagement starts with the same question — what's the behaviour, and what's driving it? — then lands in the service that fits.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="space-y-24">
            {SERVICES.map((s, i) => (
              <div key={s.id} id={s.id} className="scroll-mt-28">
                <div className="grid gap-10 lg:grid-cols-12">
                  <div className="lg:col-span-5">
                    <Reveal>
                      <span className="font-heading text-5xl font-700 text-gradient-brand tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="mt-4 font-heading text-2xl font-600 text-ink sm:text-3xl">{s.name}</h2>
                      <p className="mt-2 text-base text-brand">{s.tagline}</p>
                      <p className="mt-5 text-base leading-relaxed text-muted-foreground">{s.summary}</p>
                      {s.note && (
                        <p className="mt-5 flex items-start gap-2 rounded-xl border border-amber-300/50 bg-amber-50 p-4 text-sm text-amber-800">
                          <Info size={16} className="mt-0.5 shrink-0" /> {s.note}
                        </p>
                      )}
                      <Link
                        to="/contact"
                        className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform hover:scale-[1.03]"
                      >
                        Book this service <ArrowRight size={16} />
                      </Link>
                    </Reveal>
                  </div>
                  <div className="lg:col-span-7">
                    <Reveal delay={0.1}>
                      <div className="rounded-2xl border border-border bg-card p-7">
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">What's included</p>
                        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                          {s.includes.map((item) => (
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
                        <DiagnosisDevice fix={s.diagnosis.fix} cause={s.diagnosis.cause} />
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCOPE NOTE */}
      <section className="bg-paper-2/50 py-20">
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
