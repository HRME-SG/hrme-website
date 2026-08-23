// Shared site content for HRME — used across Home, Services, Insights.

export const PILLARS = [
  {
    id: "compliance",
    name: "Compliance Foundation",
    tagline: "Contracts, CPF, and work passes done right from day one.",
    summary:
      "Employment Act-compliant contracts, CPF and payroll setup, and work pass basics — the legal groundwork most SMEs are missing without realising it.",
    includes: [
      "Employment contract drafting & review",
      "CPF and statutory compliance setup",
      "Work pass eligibility guidance (advisory)",
      "Employment-law risk review",
      "Compliance audit for existing practices",
    ],
    diagnosis: { fix: "Copy a contract template off the internet", cause: "It doesn't match your actual employment terms" },
  },
  {
    id: "policies",
    name: "Policies & Handbook",
    tagline: "The rulebook that doesn't exist yet.",
    summary:
      "Leave policy, code of conduct, disciplinary framework, WFH policy — written for how your business actually runs, not copied from a template nobody reads.",
    includes: [
      "Employee handbook development",
      "Leave & attendance policy design",
      "Code of conduct & disciplinary framework",
      "WFH / flexible work policy",
      "Policy rollout & manager briefing",
    ],
    diagnosis: { fix: "Buy a generic handbook template", cause: "It doesn't reflect how your team actually works" },
  },
  {
    id: "recruitment",
    name: "Recruitment & Onboarding Systems",
    tagline: "A real process instead of 'figure it out.'",
    summary:
      "Job description templates, interview scorecards, offer letters, and an onboarding checklist that gets new hires productive instead of lost.",
    includes: [
      "Job description & scorecard templates",
      "Interview process design",
      "Offer letter templates",
      "Onboarding checklist & first-90-days plan",
      "Hiring manager enablement",
    ],
    diagnosis: { fix: "Post the job and wing the interview", cause: "No structure means no consistent hiring signal" },
  },
  {
    id: "performance",
    name: "Performance & Growth Systems",
    tagline: "A review system people actually use.",
    summary:
      "A simple, working performance and goal-setting framework — built to be used quarter after quarter, not a form that gets filled once a year under duress.",
    includes: [
      "Performance review framework design",
      "Goal-setting & OKR structure",
      "Manager coaching guides",
      "Performance improvement plan (PIP) templates",
      "Promotion & compensation review structure",
    ],
    diagnosis: { fix: "Send out a review form once a year", cause: "No one uses it because it was never built to be used" },
  },
  {
    id: "payroll",
    name: "Payroll / HRIS Setup",
    tagline: "The right system for your size — not enterprise overkill.",
    summary:
      "Selecting and implementing a lightweight HRIS and payroll system that fits an SME's actual headcount and budget, set up correctly from the start.",
    includes: [
      "HRIS / payroll system selection",
      "Implementation & data migration",
      "Process & workflow design",
      "Manager and employee enablement",
      "Post-go-live support",
    ],
    diagnosis: { fix: "Buy the most expensive HRIS", cause: "Your processes don't match the tool" },
  },
  {
    id: "offboarding",
    name: "Exit & Offboarding",
    tagline: "Clean, compliant, not improvised each time.",
    summary:
      "A repeatable, compliant process for exits and terminations — so every departure is handled consistently, not reinvented under pressure.",
    includes: [
      "Termination & resignation process design",
      "Exit interview framework",
      "Warning letter & disciplinary documentation templates",
      "Final settlement & compliance checklist",
      "Knowledge-transfer process",
    ],
    diagnosis: { fix: "Improvise the exit conversation", cause: "Every departure gets handled differently, and inconsistently" },
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
    body: "We build it with you and hand it over ready to use — documented, trained, and yours to run.",
  },
];

export const INSIGHTS = [
  {
    slug: "contracts-dont-say",
    tag: "Compliance",
    hook: "Your employment contracts probably don't say what you think they say.",
    scenario:
      "A 30-person firm had contracts for every employee — drafted years ago from a template, never updated as roles and pay structures changed.",
    hardTruth:
      "A contract that was compliant when it was written isn't automatically compliant now. Employment law, your actual practices, and the original template drift apart quietly, every year.",
    bullets: [
      "Most SMEs' contracts were written once and never revisited.",
      "The gap between what's written and what's actually practiced is exactly where disputes happen.",
      "A five-minute contract review now is cheaper than a dispute later.",
    ],
    question: "When did you last actually re-read your own employment contract template?",
  },
  {
    slug: "cost-of-no-onboarding",
    tag: "Recruitment",
    hook: "The real cost of no onboarding process isn't the paperwork. It's the ramp-up time.",
    scenario:
      "A tech firm's new hires took two to three months to become fully productive — not because they were unqualified, but because there was no structured first-90-days plan.",
    hardTruth:
      "Without a real onboarding system, every new hire's ramp-up time depends entirely on which manager they happen to land under.",
    bullets: [
      "Ad-hoc onboarding means inconsistent ramp-up, every single hire.",
      "A documented first-90-days plan is one of the highest-leverage systems an SME can build.",
      "The cost isn't visible on a P&L line — it's buried in months of under-productivity.",
    ],
    question: "If your best manager left tomorrow, would new hires still ramp up the same way?",
  },
  {
    slug: "handbook-doesnt-protect",
    tag: "Policies",
    hook: "A handbook that isn't followed doesn't protect you. It just documents what you didn't do.",
    scenario:
      "A firm had a full employee handbook — leave policy, code of conduct, disciplinary process — that nobody, including managers, had actually read since it was issued.",
    hardTruth:
      "A policy that exists on paper but isn't applied consistently is worse than no policy at all in a dispute — it shows you knew the standard and didn't follow it.",
    bullets: [
      "A handbook only protects you if your actual practice matches what it says.",
      "Most SMEs' handbooks were written once, distributed once, and never revisited.",
      "Rolling out a policy means briefing managers on it, not just emailing a PDF.",
    ],
    question: "If we asked your managers to quote your own disciplinary policy, could they?",
  },
];
