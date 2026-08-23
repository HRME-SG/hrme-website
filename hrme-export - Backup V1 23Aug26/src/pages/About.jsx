import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, ShieldCheck, Users, Eye, Compass, Layers } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import DiagnosisDevice from "@/components/DiagnosisDevice";
import CTASection from "@/components/CTASection";

const VALUES = [
  { icon: Eye, title: "Diagnose before we prescribe", body: "We never hand you a framework we haven't pressure-tested against your actual behaviour." },
  { icon: Brain, title: "Psychology, then policy", body: "Policy is the floor. The behaviour is the ceiling. We design for both, in that order." },
  { icon: Compass, title: "Plainly said", body: "No jargon, no 'thought leadership.' Just the hard truth, said in a way you can act on." },
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
              We're the HR firm that <span className="text-gradient-brand">reads the room</span> — not just the handbook.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              HRME is a full-service HR consultancy, not a personal brand. Our consultants bring formal HR credentials and a foundation in organisational psychology to every engagement — so you get a firm's depth of judgment, not a single voice.
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
                eyebrow="Our philosophy"
                title="The 'why' is the whole point."
                description="Most HR work stops at the symptom: turnover, a broken review cycle, a culture that 'feels off.' We start there — and keep going until we've found the behaviour driving it."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-4">
                <DiagnosisDevice index={0} fix="Update the employee handbook" cause="They don't feel safe raising it" />
                <DiagnosisDevice index={1} fix="Run another engagement survey" cause="No one trusts it's anonymous" />
                <DiagnosisDevice index={2} fix="Rewrite the performance review" cause="Managers avoid the hard conversation" />
              </div>
              <Reveal delay={0.1}>
                <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                  That gap — between the obvious fix and the real cause — is where our consultants live. It's also where the work that actually sticks gets done.
                </p>
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
            title="Formal HR credentials, used by psychology-literate consultants."
            description="Credentials matter — but only when the people holding them know how to read behaviour, not just policy. That combination is the firm's capability."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              { tag: "SHRM-SCP", title: "Senior Certified Professional", body: "The senior global HR credential — strategy, behavioural competency, and the full people function." },
              { tag: "IHRP-SP", title: "Singapore HR, Senior", body: "The Singapore standard for senior HR practitioners, mapped to local employment law and practice." },
              { tag: "Org. psychology", title: "Behavioural foundation", body: "The lens we apply to every symptom: safety, role clarity, recognition, trust, and change." },
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
          <SectionHeading eyebrow="How we work with you" title="Four things you can expect from every engagement." />
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
                HRME was built as an institutional firm. When you work with us, you get the combined judgment of consultants who've held senior HR and people roles — backed by a shared method and a shared standard. No single point of failure, no solo bandwidth limits.
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

      <CTASection title="Want a firm that reads the room?" description="Book a consultation. We'll bring the credentials and the psychology — in that order." />
    </>
  );
}
