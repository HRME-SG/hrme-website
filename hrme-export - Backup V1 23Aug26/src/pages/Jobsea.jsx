import React from "react";
import AppLanding from "@/components/AppLanding";

export default function JobSea() {
  return (
    <AppLanding
      appName="JobSea"
      tagline="A subscription job board that respects both sides of the hire."
      description="JobSea is an early-stage subscription job board — built to give employers a predictable, transparent way to reach candidates, and job-seekers a calmer, higher-signal place to find work. No pay-to-boost games."
      statusLabel="Early build"
      storeLabel="In development"
      brand={{ name: "JS", hex: "#0D9488", soft: "#F0FDFA", text: "#115E59" }}
      features={[
        { title: "Subscription, simple", body: "One flat subscription for employers. No per-post pricing, no boosted-listing auctions." },
        { title: "Higher-signal listings", body: "Structured, honest job posts — so candidates spend less time filtering noise." },
        { title: "Privacy-respecting", body: "Job-seeker data is never sold. You control your profile and your applications." },
      ]}
      privacyPolicy={[
        {
          heading: "What we collect",
          body: "For job-seekers: the profile and application information you choose to provide. For employers: account, billing, and job-listing information. We also collect device and usage data to operate and secure the service.",
        },
        {
          heading: "How we use it",
          body: "We use your data to run the job board — showing listings, processing applications, managing subscriptions, and preventing fraud. We do not sell personal data to third parties.",
        },
        {
          heading: "Sharing",
          body: "When you apply to a role, the information you submit is shared with the relevant employer. We also use trusted processors (e.g. payments, hosting) under data-protection terms, and disclose data where required by law.",
        },
        {
          heading: "Data storage & security",
          body: "Data is stored on secure infrastructure operated by HRM Pte Ltd and its processors, with encryption in transit and at rest and access limited to authorised personnel.",
        },
        {
          heading: "Your rights",
          body: "You can access, correct, or delete your data within the app or by contacting support. Deleting your account removes your profile and associated data in line with this policy.",
        },
        {
          heading: "Changes to this policy",
          body: "We may update this policy as JobSea develops. We'll reflect changes by updating the 'last updated' date and, where appropriate, notifying you in-app.",
        },
      ]}
      supportEmail="support@jobsea.app"
    />
  );
}
