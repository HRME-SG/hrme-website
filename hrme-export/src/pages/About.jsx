import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Users, Wrench, Layers, FileCheck, Hammer } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

const VALUES = [
  { icon: Hammer, title: "Built to be used", body: "We don't hand over a document and disappear. Every system we build is designed to actually run, day to day, not sit in a drawer." },
  { icon: FileCheck, title: "Compliant by construction", body: "Every contract, policy, and process is built correct from the start — grounded in Singapore employment law, not adapted after the fact." },
  { icon: Wrench, title: "Practical, not theoretical", body: "No frameworks for their own sake. Every pillar we build earns its place by being something your team will actually use." },
  { icon: Layers, title: "Institutional, not personal", body: "You get a firm's depth of judgment, not a single person's bandwidth." },
];

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink pt-32 pb-24 sm:pt-40 sm:pb-28">
        <div className="grid-fade absolute inset-0 opacity-40" />
        <div className="glow-orb h-80 w-80 bg-brand/25 -left-16 top-0" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-2" /> About HRME
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-heading text-4xl font-700 leading-[1.08] text-white sm:text-5xl md:text-6xl">
              We're the HR firm that <span className="text-gradient-brand">builds the foundation</span> — not just the advice.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              HRME builds the HR systems Singapore SMEs are missing — contracts, policies, onboarding, performance, payroll, and offboarding. Our consultants bring formal HR credentials and hands-on experience building HR functions from scratch, so what we build actually holds up.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Our approach"
                title="Most SMEs don't lack HR advice. They lack HR infrastructure."
                description="A founder can usually tell you what's going wrong. What's missing is the actual system — the contract, the policy, the process — to fix it and keep it fixed."
              />
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="space-y-5">
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <p className="text-sm font-medium text-brand">The pattern we see repeatedly</p>
                    <p className="mt-2 text-base leading-relaxed text-ink">
                      A business grows past "the founder handles everyone" — but nobody ever sat down and built the contracts, the onboarding process, the performance system, or the exit procedure. Every HR moment gets improvised, one more time, under pressure.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border bg-card p-6">
                    <p className="text-sm font-medium text-brand">What we build instead</p>
                    <p className="mt-2 text-base leading-relaxed text-ink">
                      A working foundation across six pillars — compliance, policies, recruitment, performance, payroll systems, and offboarding — built for your business specifically, documented, and handed over ready to run.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FIRM CAPABILITIES / CREDENTIALS */}
      <section className="bg-paper-2/50 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            align="center"
            eyebrow="The firm's credentials"
            title="Formal HR credentials, applied to real infrastructure."
            description="Credentials matter — but only when the people holding them know how to actually build a working HR function, not just advise on one."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              { tag: "SHRM-SCP", title: "Senior Certified Professional", body: "The senior global HR credential — strategy, behavioural competency, and the full people function." },
              { tag: "IHRP-SP", title: "Singapore HR, Senior", body: "The Singapore standard for senior HR practitioners, mapped to local employment law and practice." },
              { tag: "13+ years", title: "Hands-on HR leadership", body: "Built HR functions from scratch at multiple companies — not theory, direct experience standing up the same six pillars we build for clients." },
            ].map((c, i) => (
              <Reveal key={c.tag} delay={i * 0.08}>
                <div className="card-lift h-full rounded-2xl border border-border bg-card p-8">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <ShieldCheck size={20} />
                  </span>
                  <p className="mt-5 font-heading text-lg font-700 text-gradient-brand">{c.tag}</p>
                  <h3 className="mt-2 font-heading text-xl font-600 text-ink">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="How we build" title="Four things you can expect from every engagement." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.07}>
                  <div className="card-lift h-full rounded-2xl border border-border bg-card p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-paper">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-5 font-heading text-lg font-600 text-ink">{v.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM / INSTITUTIONAL */}
      <section className="bg-paper-2/50 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-sm sm:p-14">
              <Users className="mx-auto text-brand" size={32} />
              <h2 className="mt-6 font-heading text-2xl font-600 text-ink sm:text-3xl">
                A team of consultants, not a single founder's story.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                HRME was built as an institutional firm. When you work with us, you get the combined judgment of consultants who've held senior HR roles and built HR functions from the ground up — backed by a shared method and a shared standard. No single point of failure, no solo bandwidth limits.
              </p>
              <Link
                to="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-medium text-paper transition-transform hover:scale-[1.03]"
              >
                Talk to our consultants <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection title="Want a firm that builds, not just advises?" description="Book a consultation. We'll show you exactly what's missing — and what it takes to build it." />
    </>
  );
}
