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
    category: "Discovery & application strategy",
    headline: "Find the application worth building before you fund the build.",
    description:
      "Map one scientific workflow, expose the costly handoffs, define intended use, and leave with a defensible application plan.",
    metaDescription:
      "A focused life-sciences workflow modernization assessment covering process mapping, ROI, architecture, intended use, and GxP validation scope.",
    problemTitle: "The request sounds simple. The workflow rarely is.",
    problem: [
      "A spreadsheet, SAS program, or analyst-owned script may sit inside a much larger process of exports, reconciliations, reviews, approvals, and workarounds. Starting with a feature list misses the work that actually needs to change.",
      "WorkflowScan creates a shared view before technology and validation decisions become expensive. It also separates a useful first release from the enterprise transformation that can wait."
    ],
    outcomes: [
      { title: "A bounded first move", text: "Prioritize one workflow and the narrowest release that creates measurable value." },
      { title: "An approval-ready case", text: "Connect user pain, risk, expected value, architecture, timeline, and cost." },
      { title: "The right assurance level", text: "Classify intended use early so the team neither over- nor under-engineers evidence." }
    ],
    deliverables: [
      "Current-state workflow and system map",
      "User, handoff, and failure-point inventory",
      "Intended-use and preliminary GxP assessment",
      "Ranked application backlog",
      "Value hypothesis and baseline measures",
      "Recommended architecture and delivery plan",
      "Prototype scope and build-range estimate"
    ],
    steps: [
      { title: "Observe", text: "Interview the people doing and approving the work; review representative inputs and outputs." },
      { title: "Map", text: "Make the actual process, manual decisions, systems, controls, and failure points visible." },
      { title: "Classify", text: "Define intended use, criticality, data and integration boundaries, and assurance level." },
      { title: "Prioritize", text: "Select the smallest useful application and frame the roadmap around measurable outcomes." }
    ],
    fit: [
      "A recurring spreadsheet or SAS workflow has become a bottleneck",
      "Several teams disagree about what the application should do",
      "Quality or IT needs a clear intended-use and control boundary",
      "A leader needs a credible plan before requesting build funding"
    ],
    assurance:
      "The scan does not declare a system validated. It gives your process owner, quality partner, and technical team the intended-use, risk, and responsibility decisions needed to scope assurance correctly.",
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
      "Build the narrowest useful slice with production-minded R or Python patterns, then test it with the people who will actually use it.",
    metaDescription:
      "Rapid R, Python, Shiny, Streamlit, or Dash prototype development for pharma and scientific workflows, delivered in one to two weeks.",
    problemTitle: "Slides hide the hard questions. Working software surfaces them.",
    problem: [
      "Teams can spend months debating an application that users have never touched. The first real interaction then reveals a misunderstood decision, missing data, or workflow that does not fit the lab or review room.",
      "AppSprint turns a hypothesis into one working business path. It is fast because the scope is narrow and the standards are explicit—not because quality is deferred."
    ],
    outcomes: [
      { title: "Evidence before commitment", text: "Test desirability and feasibility before funding a full production build." },
      { title: "A shared object", text: "Give scientists, quality, architecture, and sponsors something concrete to evaluate." },
      { title: "A head start", text: "Retain the repository structure, tests, and design decisions when the idea advances." }
    ],
    deliverables: [
      "One end-to-end application path",
      "R or Python analytical logic",
      "Representative controlled or synthetic data",
      "Initial requirements and acceptance tests",
      "Technical and UX decision log",
      "User feedback and recommendation",
      "Production and assurance roadmap"
    ],
    steps: [
      { title: "Choose the question", text: "Agree on the one decision the prototype must enable." },
      { title: "Specify the slice", text: "Write the user path, boundaries, inputs, outputs, and acceptance examples." },
      { title: "Build in the open", text: "Use AI-accelerated engineering and frequent demonstrations to compress feedback." },
      { title: "Decide with users", text: "Run real scenarios and choose to proceed, adjust, or stop with evidence." }
    ],
    fit: [
      "The workflow is understood but the product shape is not",
      "A sponsor needs a credible demonstration to secure funding",
      "A team wants to compare interface or technical approaches",
      "The production build needs early user and architecture feedback"
    ],
    assurance:
      "A sprint is not a production release. It does establish controlled code, explicit acceptance examples, and traceable decisions so a validated build does not begin from a disposable demo.",
    cta: "Scope a sprint"
  },
  {
    slug: "production-build",
    number: "03",
    name: "ProductionBuild",
    navName: "Production apps",
    category: "Scientific application engineering",
    headline: "Move trusted analysis out of scripts and into a product people can operate.",
    description:
      "Design, engineer, integrate, test, deploy, and hand over a production R or Python application around the way scientific work really happens.",
    metaDescription:
      "Production R and Python application development for life sciences using Shiny, Streamlit, Dash, APIs, React, cloud, and customer-owned infrastructure.",
    problemTitle: "Correct calculations are necessary. A production product needs more.",
    problem: [
      "Scientific logic often begins in a notebook, script, macro, or local dashboard. Once a team depends on it, the surrounding product concerns—identity, data boundaries, performance, testing, monitoring, releases, and support—matter just as much as the model.",
      "ProductionBuild separates analytical logic from the interface and engineers the complete operating system around it. The result is deployable into the environment your organization already governs."
    ],
    outcomes: [
      { title: "Shorter cycle time", text: "Replace file passing and repetitive execution with guided, reusable workflows." },
      { title: "Reliable decisions", text: "Make calculations, assumptions, data quality, and review status visible to users." },
      { title: "A product your team owns", text: "Deploy into customer infrastructure with documented code, architecture, and operations." }
    ],
    deliverables: [
      "Product discovery and interaction design",
      "Tested R/Python packages or services",
      "Shiny, Streamlit, Dash, React, or fit-for-purpose UI",
      "Data and system integrations",
      "Automated unit, integration, and end-to-end tests",
      "Deployment, monitoring, and logging configuration",
      "Documentation, training, handover, and hypercare"
    ],
    steps: [
      { title: "Shape", text: "Turn the workflow into a prioritized product backlog and release plan." },
      { title: "Engineer", text: "Build modular analytical logic, UI, integrations, and infrastructure in short increments." },
      { title: "Verify", text: "Test calculations, contracts, user paths, security boundaries, and operational behavior." },
      { title: "Release", text: "Deploy, train, observe real use, resolve early friction, and transfer operating knowledge." }
    ],
    fit: [
      "Scientists repeatedly rerun or reconcile the same analysis",
      "A useful internal app needs enterprise engineering",
      "Users need a guided decision workflow rather than another dashboard",
      "The product must integrate with governed data and deployment platforms"
    ],
    assurance:
      "Every production build includes controlled source, review, automated tests, release records, and operating documentation. If intended use requires formal validation evidence, ValidatedBuild adds the risk, traceability, qualification, and approval workstream from day one.",
    cta: "Discuss a production app"
  },
  {
    slug: "validated-build",
    number: "04",
    name: "ValidatedBuild",
    navName: "Validated apps",
    category: "Application-level assurance",
    headline: "Build the application and its evidence as one delivery system.",
    description:
      "Integrate intended use, risk, requirements, testing, traceability, release controls, and validation evidence into the engineering lifecycle.",
    metaDescription:
      "Validation-ready R, Python, Shiny, Streamlit, and analytical application development with intended use, risk assessment, traceability, test evidence, and controlled release.",
    problemTitle: "Validation cannot rescue an application that was never designed to be testable.",
    problem: [
      "When assurance begins after the code is finished, teams reconstruct requirements, discover untestable behaviors, and generate documents that drift from the product. The delay looks like a documentation problem but starts as an engineering problem.",
      "ValidatedBuild makes requirements, risks, controls, tests, and releases connected artifacts. Evidence is generated as the product changes, while your quality organization retains approval authority."
    ],
    outcomes: [
      { title: "Reviewable by design", text: "Give quality and architecture clear intended use, controls, traceability, and release evidence." },
      { title: "Less evidence reconstruction", text: "Capture approvals, versions, tests, and changes during delivery rather than at the end." },
      { title: "A maintainable state", text: "Start with the change and periodic-review model the application will need after go-live." }
    ],
    deliverables: [
      "Intended-use and GxP classification support",
      "Validation plan and responsibility matrix",
      "Requirements and functional/architecture specifications",
      "Process and technical risk assessments",
      "Requirements-to-test traceability",
      "IQ/OQ/PQ or equivalent risk-based assurance support",
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
      "Validation is a shared responsibility. We engineer the application and evidence system, support risk-based verification, and supply records for review. Your process owner and quality unit determine intended use and approve the validated state.",
    cta: "Scope the assurance path"
  },
  {
    slug: "app-assure",
    number: "05",
    name: "AppAssure",
    navName: "Managed assurance",
    category: "Support & managed validated state",
    headline: "Keep the application dependable after the launch deck disappears.",
    description:
      "Operate releases, updates, incidents, evidence, and periodic review through one application support and assurance model.",
    metaDescription:
      "Ongoing support, controlled releases, regression testing, change impact assessment, and periodic review for regulated scientific applications.",
    problemTitle: "Go-live is the beginning of the application lifecycle.",
    problem: [
      "Dependencies change, platforms update, users request improvements, security findings appear, and scientific methods evolve. Without an operating model, teams choose between freezing a useful product and changing it without reliable evidence.",
      "AppAssure combines product support with risk-based change control so the application remains useful, observable, and inspection-ready as it evolves."
    ],
    outcomes: [
      { title: "Controlled change", text: "Assess impact, select regression scope, approve, release, and retain evidence consistently." },
      { title: "Operational confidence", text: "Monitor health, dependencies, incidents, performance, access, and recovery expectations." },
      { title: "Inspection readiness", text: "Keep the current release, traceability, reviews, deviations, and operating records together." }
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
      { title: "Observe", text: "Monitor product health, platform and dependency changes, user needs, and control performance." },
      { title: "Assess and release", text: "Classify each change, run the right regression scope, review evidence, and deploy predictably." },
      { title: "Review", text: "Aggregate service, access, incident, backup, change, and validation records for periodic review." }
    ],
    fit: [
      "A material R/Python application has no clear long-term owner",
      "Updates are delayed because every release becomes a validation project",
      "Support and validation are split across disconnected vendors",
      "Quality needs current evidence rather than an archive from initial go-live"
    ],
    assurance:
      "The service scope explicitly defines supported releases, enhancement capacity, response targets, customer approvals, and validation activities. Major changes remain separately planned so assurance does not become an unlimited development promise.",
    cta: "Plan ongoing assurance"
  },
  {
    slug: "app-factory",
    number: "06",
    name: "AppFactory",
    navName: "Application portfolio",
    category: "Portfolio delivery model",
    headline: "Turn one successful application into a repeatable product capability.",
    description:
      "Deliver a roadmap of scientific applications through a shared team, design system, architecture, assurance process, and operating model.",
    metaDescription:
      "A regulated application factory for pharma and life sciences, combining dedicated delivery capacity, reusable components, standard assurance, and managed releases.",
    problemTitle: "A portfolio built project by project repeats the expensive parts.",
    problem: [
      "Independent teams solve identity, file ingestion, review, audit events, testing, deployment, and documentation again for every app. Quality reviews unfamiliar patterns, users get inconsistent products, and delivery speed resets to zero.",
      "AppFactory standardizes the common layer while keeping scientific logic and workflow design specific. Each release improves the system used for the next one."
    ],
    outcomes: [
      { title: "Compounding delivery speed", text: "Reuse proven foundations, controls, interaction patterns, and evidence structures." },
      { title: "A coherent portfolio", text: "Give users, quality, IT, and product owners one recognizable operating model." },
      { title: "Capacity tied to a roadmap", text: "Move from isolated statements of work to quarterly portfolio priorities and outcomes." }
    ],
    deliverables: [
      "Quarterly application roadmap and intake process",
      "Dedicated or shared cross-functional product pod",
      "Standard architecture and design system",
      "Reusable data, review, audit, and reporting components",
      "Common test and assurance patterns",
      "Managed deployment and release cadence",
      "Portfolio health, value, and risk reporting"
    ],
    steps: [
      { title: "Establish the factory", text: "Baseline platforms, standards, responsibilities, reusable components, and intake criteria." },
      { title: "Prioritize the portfolio", text: "Rank workflows by pain, feasibility, intended use, reuse potential, and measurable value." },
      { title: "Deliver in waves", text: "Run parallel discovery and build lanes while the common platform grows deliberately." },
      { title: "Measure and improve", text: "Track adoption, cycle time, release effort, defects, assurance effort, and component reuse." }
    ],
    fit: [
      "One business unit has a visible backlog of analytical applications",
      "Several teams are independently solving the same product concerns",
      "The first production apps reveal repeatable workflow patterns",
      "Leadership wants a durable internal application capability"
    ],
    assurance:
      "Applications still receive assurance based on intended use. The factory standardizes the delivery controls and evidence model, while each product retains its own requirements, risks, test results, approvals, and release history.",
    cta: "Design the app factory"
  }
];

export const serviceBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service])
) as Record<string, Service>;
