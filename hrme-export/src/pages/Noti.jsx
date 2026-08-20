import React from "react";
import AppLanding from "@/components/AppLanding";

export default function Noti() {
  return (
    <AppLanding
      appName="NOTI"
      tagline="A dating app built around real connection."
      description="NOTI is a new dating experience in development — designed to cut the noise and surface the conversations worth having. We're building it carefully, with privacy and safety at the foundation."
      statusLabel="In development"
      storeLabel="Coming soon"
      brand={{ name: "NO", hex: "#EC4899", soft: "#FDF2F8", text: "#9D174D" }}
      features={[
        { title: "Intention-led matching", body: "Profiles lead with intent, not just photos — so matches start closer to meaningful." },
        { title: "Safety first", body: "Verification, reporting, and block tools are built in from day one, not bolted on later." },
        { title: "Private by default", body: "Your data stays yours. No selling profile data, no behavioural ad targeting." },
      ]}
      privacyPolicy={[
        {
          heading: "What we collect",
          body: "NOTI collects the information needed to create and operate your account — such as your email, profile content you choose to add, and match and messaging activity. We collect device and usage data to keep the service secure and functioning.",
        },
        {
          heading: "How we use it",
          body: "We use your data to provide matching, messaging, and account features, to verify users, prevent abuse, and improve the product. We do not sell your personal data to third parties.",
        },
        {
          heading: "Sharing",
          body: "We share data only with service providers who help us run NOTI (e.g. hosting, analytics) under appropriate data-protection terms, or where required by law.",
        },
        {
          heading: "Data storage & security",
          body: "Data is stored on secure infrastructure operated by HRM Pte Ltd and its processors. We use encryption in transit and at rest and limit access to authorised personnel.",
        },
        {
          heading: "Your rights",
          body: "You can access, correct, or delete your data at any time within the app or by contacting support. Deleting your account permanently removes your profile and associated data in line with this policy.",
        },
        {
          heading: "Changes to this policy",
          body: "We may update this policy as NOTI evolves. We'll reflect changes by updating the 'last updated' date and, where appropriate, notifying you in-app.",
        },
      ]}
      supportEmail="support@noti.app"
    />
  );
}
