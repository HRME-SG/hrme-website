import React, { useState } from "react";
import { ArrowRight, Check, Mail, Building2, User, MessageSquare, Loader2, AlertCircle } from "lucide-react";
import Reveal from "@/components/Reveal";

const CONTACT_EMAIL = "hello@hrme.sg";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xoearlov";

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | done | error

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setStatus("done");
        setForm({ name: "", company: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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
                  {status === "done" ? (
                    <div className="flex flex-col items-center py-12 text-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                        <Check size={28} />
                      </span>
                      <h2 className="mt-6 font-heading text-2xl font-600 text-ink">Message received.</h2>
                      <p className="mt-3 max-w-sm text-muted-foreground">
                        Thanks for reaching out. One of our consultants will reply within one business day to set up the call.
                      </p>
                      <button
                        onClick={() => setStatus("idle")}
                        className="mt-7 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-muted"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-heading text-2xl font-600 text-ink">Book a consultation</h2>
                      <p className="mt-2 text-sm text-muted-foreground">Tell us a little about what you're seeing. We'll come back with questions, not a pitch.</p>
                      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                        <div className="grid gap-5 sm:grid-cols-2">
                          <Field icon={User} label="Name" required>
                            <input
                              name="name"
                              required
                              value={form.name}
                              onChange={update("name")}
                              placeholder="Your name"
                              className="input-base"
                            />
                          </Field>
                          <Field icon={Building2} label="Company">
                            <input
                              name="company"
                              value={form.company}
                              onChange={update("company")}
                              placeholder="Company name"
                              className="input-base"
                            />
                          </Field>
                        </div>
                        <Field icon={Mail} label="Work email" required>
                          <input
                            name="email"
                            required
                            type="email"
                            value={form.email}
                            onChange={update("email")}
                            placeholder="you@company.com"
                            className="input-base"
                          />
                        </Field>
                        <Field icon={MessageSquare} label="What's going on?" required>
                          <textarea
                            name="message"
                            required
                            value={form.message}
                            onChange={update("message")}
                            placeholder="Tell us the symptom you're seeing — retention, culture, a change that won't land…"
                            rows={5}
                            className="input-base resize-none"
                          />
                        </Field>

                        {status === "error" && (
                          <p className="flex items-center gap-2 text-sm text-red-600">
                            <AlertCircle size={16} /> Something went wrong — please try again or email {CONTACT_EMAIL} directly.
                          </p>
                        )}

                        <button
                          type="submit"
                          disabled={status === "submitting"}
                          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 font-medium text-paper transition-transform hover:scale-[1.01] disabled:opacity-60 disabled:hover:scale-100 sm:w-auto"
                        >
                          {status === "submitting" ? (
                            <>
                              <Loader2 size={18} className="animate-spin" /> Sending…
                            </>
                          ) : (
                            <>
                              Send to our consultants
                              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  )}
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

        <style>{`
          .input-base {
            width: 100%;
            border-radius: 0.6rem;
            border: 1px solid hsl(var(--border));
            background: hsl(var(--paper));
            padding: 0.7rem 0.9rem 0.7rem 2.4rem;
            font-size: 0.95rem;
            color: hsl(var(--ink));
            outline: none;
            transition: border-color 0.2s, box-shadow 0.2s;
          }
          .input-base:focus {
            border-color: hsl(var(--brand));
            box-shadow: 0 0 0 3px hsl(var(--brand) / 0.15);
          }
          .input-base::placeholder { color: hsl(var(--muted-foreground) / 0.7); }
        `}</style>
      </section>
    </>
  );
}

function Field({ icon: Icon, label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink">
        {label} {required && <span className="text-brand">*</span>}
      </span>
      <div className="relative">
        <Icon size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        {children}
      </div>
    </label>
  );
}