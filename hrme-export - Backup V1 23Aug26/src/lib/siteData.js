// Shared site content for HRME — used across Home, Services, Insights.

export const SERVICES = [
  {
    id: "advisory",
    name: "HR Advisory & Consulting",
    tagline: "Diagnostic-led problem solving.",
    summary:
      "We diagnose the psychological why behind retention, culture, and performance issues — then design the fix that actually moves behaviour, not just the paperwork.",
    includes: [
      "Retention & exit-interview diagnostics",
      "Culture and engagement assessments",
      "Performance management design",
      "Manager capability reviews",
      "Change and restructure facilitation",
    ],
    diagnosis: { fix: "Rewrite the performance review form", cause: "Managers avoid the hard conversation" },
  },
  {
    id: "fractional",
    name: "Fractional & Outsourced HR",
    tagline: "Senior HR judgment, on tap.",
    summary:
      "Ongoing operational support and senior HR judgment for growing teams that need a trusted partner — without the cost of a full-time head of people.",
    includes: [
      "Embedded fractional HR lead",
      "Policy and handbook maintenance",
      "Employee relations casework",
      "Onboarding and offboarding design",
      "Monthly people-health reviews",
    ],
    diagnosis: { fix: "Hire an HR manager to 'fix things'", cause: "You need judgment, not another pair of hands" },
  },
  {
    id: "systems",
    name: "HR Systems Implementation",
    tagline: "Technology that supports the people strategy.",
    summary:
      "HRIS and HRMS rollouts designed around how your people actually work — not admin for its own sake. Delivered under client company authorisation.",
    includes: [
      "HRIS / HRMS selection and scoping",
      "Implementation and data migration",
      "Process and workflow design",
      "Manager and employee enablement",
      "Post-go-live optimisation",
    ],
    diagnosis: { fix: "Buy the most expensive HRIS", cause: "Your processes don't match the tool" },
  },
  {
    id: "workpass",
    name: "Work Pass Advisory",
    tagline: "EP / S Pass guidance, clearly explained.",
    summary:
      "Employment-law and work-pass guidance for Singapore employers — what the rules mean for your hiring plan, and how to stay on the right side of them. Advisory only.",
    includes: [
      "EP / S Pass eligibility read-outs",
      "Salary framework and benchmarking guidance",
      "MOM compliance advisory",
      "Renewal and appeal strategy guidance",
      "Employment-law risk reviews",
    ],
    diagnosis: { fix: "Resubmit the application faster", cause: "The role itself doesn't qualify" },
  },
  {
    id: "workshops",
    name: "Workplace Psychology Workshops",
    tagline: "The emotional drivers, made practical.",
    summary:
      "Practical sessions that give your managers the psychology behind engagement, conflict, and change resistance — so they lead people, not just tasks.",
    includes: [
      "Psychological safety in practice",
      "Conflict and difficult conversations",
      "Leading through change and resistance",
      "Engagement beyond the survey",
      "Custom team dynamics sessions",
    ],
    diagnosis: { fix: "Run another engagement survey", cause: "No one feels safe answering it honestly" },
  },
];

export const PAIN_POINTS = [
  "We keep losing good people and exit interviews don't tell us why.",
  "Our HR policies are compliant but our culture still feels broken.",
  "Generic HR consultants give us frameworks, not answers.",
  "We're growing too fast to keep 'winging it' on people decisions.",
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
