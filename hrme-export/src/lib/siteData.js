// Shared site content for HRME — used across Home, Services, Insights.

export const PILLARS = [
  {
    id: "compliance",
    name: "Compliance Foundation",
    tagline: "Contracts, CPF, and work passes done right from day one.",
    body: "Employment Act-compliant contracts, CPF and payroll setup, and work pass basics — the legal groundwork most SMEs are missing without realising it.",
  },
  {
    id: "policies",
    name: "Policies & Handbook",
    tagline: "The rulebook that doesn't exist yet.",
    body: "Leave policy, code of conduct, disciplinary framework, WFH policy — written for how your business actually runs, not copied from a template nobody reads.",
  },
  {
    id: "recruitment",
    name: "Recruitment & Onboarding",
    tagline: "A real process instead of 'figure it out.'",
    body: "Job description templates, interview scorecards, offer letters, and an onboarding checklist that gets new hires productive instead of lost.",
  },
  {
    id: "performance",
    name: "Performance & Growth",
    tagline: "A review system people actually use.",
    body: "A simple, working performance and goal-setting framework — built to be used quarter after quarter, not a form that gets filled once a year under duress.",
  },
  {
    id: "payroll",
    name: "Payroll / HRIS Setup",
    tagline: "The right system for your size — not enterprise overkill.",
    body: "Selecting and implementing a lightweight HRIS and payroll system that fits an SME's actual headcount and budget, set up correctly from the start.",
  },
  {
    id: "offboarding",
    name: "Exit & Offboarding",
    tagline: "Clean, compliant, not improvised each time.",
    body: "A repeatable, compliant process for exits and terminations — so every departure is handled consistently, not reinvented under pressure.",
  },
];

export const SERVICE_TIERS = [
  {
    id: "foundation-setup",
    name: "Foundation Setup",
    tagline: "We build your HR foundation from the ground up.",
    summary:
      "A hands-on, one-time project where HRME builds out your HR pillars from scratch — tailored to your business, not templates you're left to figure out alone.",
    format: "One-time project · scope varies by company size and starting point",
    cta: "Get a quote",
    diagnosis: { fix: "Buy an HR template pack off the internet", cause: "It doesn't fit how your business actually runs" },
  },
  {
    id: "fractional-retainer",
    name: "Fractional Retainer",
    tagline: "We run it for you, month to month.",
    summary:
      "Once your foundation exists, HRME handles the day-to-day HR matters that come up — hiring decisions, disputes, performance issues, warning letters — using the systems already built.",
    format: "Ongoing monthly engagement · SGD 3,000–5,000/month depending on scope",
    cta: "Talk to us",
    diagnosis: { fix: "Hire a full-time Head of HR", cause: "You need judgment on tap, not another headcount" },
  },
];

export const ADD_ON = {
  id: "workshops",
  name: "Workplace Psychology Workshops",
  tagline: "The emotional drivers, made practical.",
  summary:
    "Practical sessions that give your managers the psychology behind engagement, conflict, and change resistance — so they lead people, not just tasks.",
};

export const PAIN_POINTS = [
  "We're growing past 'the founder handles everyone' but can't justify a full-time Head of HR yet.",
  "We don't actually have compliant contracts, policies, or a real onboarding process — just whatever's in someone's head.",
  "Every time someone underperforms or leaves, we're improvising the process from scratch.",
  "We tried a generic HR template pack and it didn't fit how we actually operate.",
  "I need someone who understands both the psychology and the paperwork.",
];

export const DIAGNOSES = [
  { fix: "Update the employee handbook", cause: "They don't feel safe raising it" },
  { fix: "Rewrite the performance review", cause: "Managers avoid the hard conversation" },
  { fix: "Run another engagement survey", cause: "No one trusts it's anonymous" },
  { fix: "Hire an HR manager to 'fix things'", cause: "You need judgment, not another pair of hands" },
];

export const METHOD_STEPS = [
  {
    step: "01",
    title: "Diagnose",
    body: "We map the symptom you're seeing — turnover, conflict, drift — and trace it to the behaviour underneath.",
  },
  {
    step: "02",
    title: "Decode",
    body: "Our consultants read the organisational psychology behind it: safety, role clarity, recognition, trust.",
  },
  {
    step: "03",
    title: "Design",
    body: "We design the intervention — policy, system, or conversation — that actually shifts the behaviour.",
  },
  {
    step: "04",
    title: "Deploy",
    body: "We help you roll it out with managers, measure it, and adjust. Diagnosis you can see in the numbers.",
  },
];

export const INSIGHTS = [
  {
    slug: "exit-interviews-lie",
    tag: "Retention",
    hook: "Your exit interviews are lying to you.",
    scenario:
      "A 60-person tech firm lost four senior engineers in a quarter. Every exit interview cited 'better opportunity.' Polite, tidy, and almost entirely untrue.",
    hardTruth:
      "People don't tell you the real reason they're leaving — they tell you the reason that's safe to say.",
    bullets: [
      "'Better opportunity' is the exit-interview equivalent of 'it's not you, it's me.'",
      "The real driver is almost always a manager interaction, not a competitor's offer.",
      "If you only hear it on the way out, you built a culture where it wasn't safe to say it earlier.",
    ],
    question: "When was the last time an employee told you a hard truth while they still worked for you?",
  },
  {
    slug: "compliant-culture",
    tag: "Culture",
    hook: "Compliance is not culture.",
    scenario:
      "A professional-services firm had a flawless handbook, spot-on leave policies, and a team that quietly stopped speaking up in meetings.",
    hardTruth:
      "You can be fully compliant and still have a culture where nobody raises the real problem.",
    bullets: [
      "Policies set the floor. Psychological safety sets the ceiling.",
      "A culture audit that only reads your handbook audits nothing.",
      "The gap between 'what's written' and 'what's felt' is where your attrition lives.",
    ],
    question: "If we audited your culture by behaviour, not by document, what would we find?",
  },
  {
    slug: "change-resistance",
    tag: "Change",
    hook: "Resistance to change isn't stubbornness. It's information.",
    scenario:
      "A retail chain rolled out a new scheduling system. Managers 'resisted.' Leadership called it adoption problems. The real issue was never the software.",
    hardTruth:
      "What looks like resistance is usually a prediction — about workload, fairness, or whether anyone listened.",
    bullets: [
      "People resist change they weren't consulted on, not change itself.",
      "The fastest adopters are the ones who felt heard before the rollout.",
      "If you have to 'manage' resistance, you skipped a step upstream.",
    ],
    question: "Did your last change fail on rollout — or on the listening that never happened before it?",
  },
];
