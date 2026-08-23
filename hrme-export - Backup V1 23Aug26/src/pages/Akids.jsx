import React from "react";
import AppLanding from "@/components/AppLanding";

export default function Akids() {
  return (
    <AppLanding
      appName="AKids Dictionary"
      tagline="A friendly picture-first dictionary for curious kids."
      description="AKids Dictionary helps young learners explore words with simple definitions, clear pronunciation, and bright visuals — built for early readers and the grown-ups reading alongside them."
      statusLabel="Live on Google Play"
      storeLabel="Available on Google Play"
      brand={{ name: "AK", hex: "#F59E0B", soft: "#FEF8E7", text: "#92400E" }}
      features={[
        { title: "Picture-first", body: "Every word is paired with a clear illustration so meaning lands before reading does." },
        { title: "Read-aloud audio", body: "Tap a word to hear it pronounced — supporting early phonics and confidence." },
        { title: "Kid-safe by design", body: "No ads, no chat, no behavioural tracking. A calm space to learn words." },
      ]}
      privacyPolicy={[
        {
          heading: "What we collect",
          body: "AKids Dictionary does not require an account and does not collect personally identifiable information from children. Usage is limited to anonymous, aggregate analytics (e.g. app launch counts) used only to improve the app.",
        },
        {
          heading: "Children's privacy",
          body: "AKids Dictionary is designed for children and is built to comply with applicable children's privacy standards, including Singapore's PDPA and Google Play Families policies. No personal data is sold or shared for advertising.",
        },
        {
          heading: "Data storage & security",
          body: "Any anonymous analytics are processed and stored on secure infrastructure operated by HRM Pte Ltd. We do not store personal data of child users.",
        },
        {
          heading: "Your rights",
          body: "If you believe any data has been collected in error, or wish to request deletion, contact us at the support email below and we will action it promptly.",
        },
        {
          heading: "Changes to this policy",
          body: "We may update this policy from time to time. Material changes will be reflected by an updated 'last updated' date and, where appropriate, in-app notice.",
        },
      ]}
      supportEmail="support@akids.app"
    />
  );
}
