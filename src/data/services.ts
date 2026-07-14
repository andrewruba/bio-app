export type Service = {
  slug: string;
  number: string;
  name: string;
  navName: string;
  category: string;
  headline: string;
  description: string;
  metaDescription: string;
  problemTitle: string;
  problem: string[];
  outcomes: { title: string; text: string }[];
  deliverables: string[];
  steps: { title: string; text: string }[];
  fit: string[];
  assurance: string;
  cta: string;
};

export const services: Service[] = [
  {
    slug: "workflow-scan",
    number: "01",
    name: "WorkflowScan",
    navName: "Workflow discovery",
    category: "Process discovery & application planning",
    headline: "Find the application worth building before you fund the build.",
    description:
      "Map one recurring scientific process, identify costly manual steps, define intended use, and leave with a practical application plan.",
    metaDescription:
      "A focused life-sciences workflow modernization assessment covering process mapping, ROI, architecture, intended use, and GxP validation scope.",
    problemTitle: "The request sounds simple. The current process rarely is.",
    problem: [
      "A spreadsheet or analyst-owned SAS, R, or Python script may sit inside a much larger process of exports, reconciliations, reviews, approvals, and workarounds. Starting with a feature list misses the work that actually needs to change.",
      "WorkflowScan gives process owners, scientists, quality, and IT the same view before technology and validation decisions become expensive. It separates a useful first release from larger changes that can wait."
    ],
    outcomes: [
      { title: "A focused first release", text: "Prioritize one process and the smallest application that creates measurable value." },
      { title: "A decision-ready plan", text: "Connect the current pain, risk, expected value, architecture, timeline, and cost." },
      { title: "The right validation scope", text: "Classify intended use early so the team prepares the evidence and controls the application actually needs." }
    ],
    deliverables: [
      "Current-state workflow and system map",
      "User, handoff, and failure-point inventory",
      "Intended-use and preliminary GxP assessment",
      "Ranked application backlog",
      "Expected value and baseline measures",
      "Recommended architecture and delivery plan",
      "Prototype scope and estimated build timeline and cost range"
    ],
    steps: [
      { title: "Observe", text: "Interview the people doing and approving the work; review representative inputs and outputs." },
      { title: "Map", text: "Make the actual process, manual decisions, systems, controls, and failure points visible." },
      { title: "Classify", text: "Define intended use, criticality, data and integration boundaries, and validation or control level." },
      { title: "Prioritize", text: "Select the smallest useful application and frame the roadmap around measurable outcomes." }
    ],
    fit: [
      "A recurring spreadsheet or SAS script has become a bottleneck",
      "Several teams disagree about what the application should do",
      "Quality or IT needs a clear intended-use and control boundary",
      "A leader needs a credible plan before requesting build funding"
    ],
    assurance:
      "The scan does not validate a system. It gives the process owner, quality partner, and technical team the preliminary intended-use, risk, and responsibility decisions needed to define the validation approach.",
    cta: "Map the workflow"
  },
  {
    slug: "app-sprint",
    number: "02",
    name: "AppSprint",
    navName: "Prototype sprint",
    category: "One-to-two-week application sprint",
    headline: "Put a real scientific workflow on screen in days, not quarters.",
    description:
      "Build one useful end-to-end task in R or Python, then test it with the people who will actually use it.",
    metaDescription:
      "Rapid R, Python, Shiny, Streamlit, or Dash prototype development for pharma and scientific workflows, delivered in one to two weeks.",
    problemTitle: "Slides hide the hard questions. Working software surfaces them.",
    problem: [
      "Teams can spend months debating an application that users have never touched. The first real interaction then reveals a misunderstood decision, missing data, or user path that does not fit the lab or review room.",
      "AppSprint turns an idea into one working end-to-end task. It is fast because the scope is narrow and the acceptance criteria are clear—not because quality is deferred."
    ],
    outcomes: [
      { title: "User feedback before commitment", text: "Test usefulness and technical feasibility before funding a full production build." },
      { title: "Something concrete to review", text: "Give scientists, quality, IT, and sponsors a working prototype they can evaluate together." },
      { title: "A head start on production", text: "Retain the code structure, tests, and design decisions when the application advances." }
    ],
    deliverables: [
      "One end-to-end application path",
      "R or Python analytical logic",
      "Representative controlled or synthetic data",
      "Initial requirements and acceptance tests",
      "Technical and UX decision log",
      "User feedback and recommendation",
      "Production and validation plan"
    ],
    steps: [
      { title: "Choose the question", text: "Agree on the one decision the prototype must enable." },
      { title: "Define the prototype", text: "Write the user steps, scope, inputs, outputs, and acceptance examples." },
      { title: "Build in the open", text: "Use AI-accelerated engineering and frequent demonstrations to shorten the feedback cycle." },
      { title: "Decide with users", text: "Run realistic scenarios and choose to proceed, adjust, or stop based on observed use and feedback." }
    ],
    fit: [
      "The current process is understood but the interface and user steps are not",
      "A sponsor needs a credible demonstration to secure funding",
      "A team wants to compare interface or technical approaches",
      "The production build needs early user and architecture feedback"
    ],
    assurance:
      "A sprint is not a production release. It does establish version-controlled code, clear acceptance examples, and recorded design decisions so a validated build does not begin from a disposable demo.",
    cta: "Scope a sprint"
  },
  {
    slug: "production-build",
    number: "03",
    name: "ProductionBuild",
    navName: "Production apps",
    category: "Scientific application engineering",
    headline: "Move trusted analysis out of scripts and into an application teams can rely on.",
    description:
      "Design, engineer, integrate, test, deploy, and hand over a production R or Python application around the way scientific work really happens.",
    metaDescription:
      "Production R and Python application development for life sciences using Shiny, Streamlit, Dash, APIs, React, cloud, and customer-owned infrastructure.",
    problemTitle: "Correct calculations are necessary. A production application needs more.",
    problem: [
      "Scientific logic often begins in a notebook, script, macro, or local dashboard. Once a team depends on it, access, data handling, performance, testing, monitoring, releases, and support matter just as much as the calculation or model.",
      "ProductionBuild separates analytical logic from the interface and engineers the complete application around it. The result can be deployed into the environment your organization already manages."
    ],
    outcomes: [
      { title: "Shorter turnaround time", text: "Replace file passing and repeated script execution with a guided, reusable process." },
      { title: "Results ready to review", text: "Make calculations, assumptions, data-quality checks, and review status visible to users." },
      { title: "An application your team can support", text: "Deploy into your infrastructure with documented code, architecture, and support procedures." }
    ],
    deliverables: [
      "Application requirements and interaction design",
      "Tested R/Python packages or services",
      "Shiny, Streamlit, Dash, React, or another appropriate user interface",
      "Data and system integrations",
      "Automated unit, integration, and end-to-end tests",
      "Deployment, monitoring, and logging configuration",
      "Documentation, training, handover, and post-launch support"
    ],
    steps: [
      { title: "Plan", text: "Turn the current process into prioritized requirements and a release plan." },
      { title: "Engineer", text: "Build modular calculations and model code, the user interface, integrations, and deployment configuration in short increments." },
      { title: "Verify", text: "Test calculations, data interfaces, user paths, access controls, and operational behavior." },
      { title: "Release", text: "Deploy, train users, resolve early issues, and hand over support documentation and knowledge." }
    ],
    fit: [
      "Scientists repeatedly rerun or reconcile the same analysis",
      "A useful internal app needs enterprise engineering",
      "Users need a step-by-step analysis or review process rather than another dashboard",
      "The application must integrate with approved data and deployment platforms"
    ],
    assurance:
      "Every production build includes version-controlled code, code review, automated tests, release records, and support documentation. If intended use requires formal validation, ValidatedBuild adds risk assessment, traceability, qualification evidence, and approval activities from day one.",
    cta: "Discuss a production app"
  },
  {
    slug: "validated-build",
    number: "04",
    name: "ValidatedBuild",
    navName: "Validated apps",
    category: "GxP application engineering & validation support",
    headline: "Build validation into the application from the first requirement.",
    description:
      "Develop the application, requirements, risk assessment, tests, traceability, release controls, and validation evidence together.",
    metaDescription:
      "Validation-ready R, Python, Shiny, Streamlit, and analytical application development with intended use, risk assessment, traceability, test evidence, and controlled release.",
    problemTitle: "Validation cannot rescue an application that was never designed to be testable.",
    problem: [
      "When validation begins after the code is finished, teams reconstruct requirements, discover behavior that is difficult to test, and create documents that no longer match the application. The delay looks like a documentation problem but begins as an engineering problem.",
      "ValidatedBuild keeps requirements, risks, controls, tests, and releases linked throughout development. Evidence is captured as the application changes, while your quality organization retains approval authority."
    ],
    outcomes: [
      { title: "Ready for quality review", text: "Give quality and IT a clear intended use, risk assessment, controls, traceability, and release evidence." },
      { title: "Less work at validation", text: "Capture approvals, versions, test results, and changes during development rather than at the end." },
      { title: "Designed for controlled change", text: "Define change control, regression testing, and periodic review before go-live." }
    ],
    deliverables: [
      "Intended-use and GxP classification support",
      "Validation plan and responsibility matrix",
      "Requirements and functional/architecture specifications",
      "Process and technical risk assessments",
      "Requirements-to-test traceability",
      "IQ/OQ/PQ or equivalent risk-based qualification support",
      "Deviation, release, and validation summary records",
      "SOP and ongoing-review inputs"
    ],
    steps: [
      { title: "Frame intended use", text: "Align process owner, quality, and engineering on claims, users, records, and boundaries." },
      { title: "Design for control", text: "Translate risks into architecture, data integrity, access, audit, review, and test controls." },
      { title: "Build evidence continuously", text: "Link reviewed requirements and risks to automated and manual verification evidence." },
      { title: "Support release approval", text: "Assemble the traceable release package and resolve findings with customer QA." }
    ],
    fit: [
      "An analytical application supports a regulated or submission-related process",
      "An existing useful app cannot pass internal approval",
      "Traceability and controlled release are currently manual",
      "Quality needs a supplier who understands both software and scientific use"
    ],
    assurance:
      "Validation is a shared responsibility. We engineer the application, perform agreed verification activities, and supply records for review. Your process owner and quality unit determine intended use and approve the validated state.",
    cta: "Scope a validated build"
  },
  {
    slug: "app-assure",
    number: "05",
    name: "AppAssure",
    navName: "Application support",
    category: "Application support & controlled change",
    headline: "Keep the application supported, current, and ready for its next release.",
    description:
      "Manage releases, updates, incidents, validation evidence, and periodic review through one support and change-control process.",
    metaDescription:
      "Ongoing support, controlled releases, regression testing, change impact assessment, and periodic review for regulated scientific applications.",
    problemTitle: "Go-live is the beginning of the application lifecycle.",
    problem: [
      "Dependencies change, platforms update, users request improvements, security findings appear, and scientific methods evolve. Without a defined support and change-control process, teams choose between freezing a useful application and changing it without reliable evidence.",
      "AppAssure combines application support with risk-based change control so the application remains useful, monitored, and inspection-ready as it evolves."
    ],
    outcomes: [
      { title: "Controlled change", text: "Assess impact, select regression scope, approve, release, and retain evidence consistently." },
      { title: "Reliable day-to-day operation", text: "Monitor application health, dependencies, incidents, performance, access, backup, and recovery." },
      { title: "Inspection readiness", text: "Keep the current release, traceability, reviews, deviations, and support records together." }
    ],
    deliverables: [
      "Monitoring, incident response, and service reporting",
      "Dependency and security update management",
      "Change-impact and regression planning",
      "Controlled release and deployment records",
      "Traceability and documentation updates",
      "Periodic evaluation and access-review support",
      "Audit, deviation, and CAPA support",
      "Planned enhancement capacity"
    ],
    steps: [
      { title: "Baseline", text: "Confirm the approved release, architecture, responsibilities, service levels, and evidence inventory." },
      { title: "Observe", text: "Monitor application health, platform and dependency changes, user needs, and control performance." },
      { title: "Assess and release", text: "Classify each change, run the right regression scope, review evidence, and deploy predictably." },
      { title: "Review", text: "Aggregate service, access, incident, backup, change, and validation records for periodic review." }
    ],
    fit: [
      "An important R or Python application has no clear long-term owner",
      "Updates are delayed because every release becomes a validation project",
      "Support and validation are split across disconnected vendors",
      "Quality needs current evidence rather than an archive from initial go-live"
    ],
    assurance:
      "The service scope defines supported releases, enhancement capacity, response targets, customer approvals, and validation activities. Major changes are planned separately so ongoing support has clear limits and responsibilities.",
    cta: "Plan application support"
  },
  {
    slug: "app-factory",
    number: "06",
    name: "AppFactory",
    navName: "Application portfolio",
    category: "Portfolio delivery model",
    headline: "Deliver more scientific applications without rebuilding the foundation each time.",
    description:
      "Deliver a roadmap of scientific applications through a shared team, design system, architecture, validation process, and release process.",
    metaDescription:
      "A life-sciences application delivery team combining dedicated capacity, reusable components, standard testing and validation practices, and managed releases.",
    problemTitle: "A portfolio built project by project repeats the expensive parts.",
    problem: [
      "Independent teams solve identity, file ingestion, review, audit events, testing, deployment, and documentation again for every app. Quality reviews unfamiliar patterns, users get inconsistent applications, and delivery speed resets to zero.",
      "AppFactory standardizes common application features while keeping each scientific process and its calculations specific. Each release improves the foundation used for the next application."
    ],
    outcomes: [
      { title: "Faster delivery with each application", text: "Reuse proven foundations, controls, interface patterns, and validation templates." },
      { title: "Consistent applications and controls", text: "Give users, quality, IT, and process owners a recognizable experience and release process." },
      { title: "Capacity tied to a roadmap", text: "Move from isolated statements of work to quarterly portfolio priorities and outcomes." }
    ],
    deliverables: [
      "Quarterly application roadmap and intake process",
      "Dedicated or shared cross-functional application team",
      "Standard architecture and design system",
      "Reusable data, review, audit, and reporting components",
      "Common test and validation patterns",
      "Managed deployment and release cadence",
      "Portfolio health, value, and risk reporting"
    ],
    steps: [
      { title: "Establish the shared foundation", text: "Confirm platforms, standards, responsibilities, reusable components, and intake criteria." },
      { title: "Prioritize the portfolio", text: "Rank processes by current pain, feasibility, intended use, reuse potential, and measurable value." },
      { title: "Deliver in planned releases", text: "Evaluate upcoming applications while building the current priorities and improving shared components." },
      { title: "Measure and improve", text: "Track adoption, turnaround time, release effort, defects, validation effort, and component reuse." }
    ],
    fit: [
      "One business unit has a visible backlog of analytical applications",
      "Several teams are independently solving the same technical and support requirements",
      "The first production apps reveal reusable features and process patterns",
      "Leadership wants a durable internal application delivery function"
    ],
    assurance:
      "Each application still receives testing and validation based on intended use. AppFactory standardizes delivery controls and evidence templates, while each application retains its own requirements, risks, test results, approvals, and release history.",
    cta: "Design the app factory"
  }
];

export const serviceBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service])
) as Record<string, Service>;
