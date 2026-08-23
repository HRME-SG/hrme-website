import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function CTASection({ title, description, ctaLabel = "Book a consultation", ctaTo = "/contact" }) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="glow-orb h-72 w-72 bg-brand/30 -left-10 top-0" />
      <div className="glow-orb h-80 w-80 bg-brand-2/20 right-0 bottom-0" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-600 leading-tight text-white sm:text-4xl md:text-5xl">
            {title || "Let's diagnose what's really driving it."}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/60">
            {description || "Book a consultation with our consultants. We'll map the behaviour behind the symptom before we touch a single policy."}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to={ctaTo}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-medium text-ink transition-transform hover:scale-[1.03]"
            >
              {ctaLabel}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-medium text-white/80 transition-colors hover:bg-white/5"
            >
              Explore services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
