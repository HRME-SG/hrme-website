import React from "react";
import { Mail } from "lucide-react";
import Reveal from "@/components/Reveal";

const CONTACT_EMAIL = "hello@hrme.sg";
const ZOHO_FORM_URL = "https://forms.zohopublic.sg/bronsonkwekhr1/form/ContactUs/formperma/VPfY490kYY1NvVyhKuhwEFfBHv0PelIzq0dfzqo4jN4";

export default function Contact() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="grid-fade absolute inset-0 opacity-40" />
        <div className="glow-orb h-80 w-80 bg-brand/25 -left-16 top-0" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-2" /> Contact
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-heading text-4xl font-700 leading-[1.08] text-white sm:text-5xl md:text-6xl">
              Tell us the symptom. <span className="text-gradient-brand">We'll find the cause.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              Book a consultation with our consultants. We'll map the behaviour behind the issue before we touch a single policy.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FORM + CONTACT DETAILS */}
      <section className="bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* FORM */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
                  <h2 className="font-heading text-2xl font-600 text-ink">Book a consultation</h2>
                  <p className="mt-2 mb-6 text-sm text-muted-foreground">Tell us a little about what you're seeing. We'll come back with questions, not a pitch.</p>
                  <iframe
                    aria-label="Book a consultation"
                    frameBorder="0"
                    style={{ height: "620px", width: "100%", border: "none" }}
                    src={ZOHO_FORM_URL}
                    title="HRME Consultation Enquiry Form"
                  />
                </div>
              </Reveal>
            </div>

            {/* CONTACT DETAILS */}
            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="rounded-3xl border border-border bg-card p-8">
                  <h3 className="font-heading text-lg font-600 text-ink">Reach us directly</h3>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand hover:underline">
                    <Mail size={16} /> {CONTACT_EMAIL}
                  </a>
                  <p className="mt-5 text-sm text-muted-foreground">
                    HRM Pte Ltd, Singapore. Consultancy engagements across the five HRME services.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}