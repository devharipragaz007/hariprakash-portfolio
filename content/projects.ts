export const projects = [
  // --- Entrepreneurial Projects ---
  {
    slug: "goalkeeper",
    title: "GoalKeeper",
    description:
      "A UPI-based micro-savings platform for the Indian market, enabling users to save with every transaction through round-ups.",
    problem:
      "Encouraging consistent saving habits is challenging. Small, frequent savings can build significant capital over time but are often overlooked.",
    solution:
      "GoalKeeper links to users' UPI accounts, automatically rounding up transactions to the nearest ₹10 and investing the difference into a user-defined savings goal.",
    impact:
      "Aims to democratize saving and investing for young Indians by making it effortless and integrated into daily spending habits.",
    tech: [
      "Next.js",
      "Node.js (TypeScript)",
      "Prisma",
      "PostgreSQL",
      "Kafka",
      "AWS Lambda",
      "API Gateway",
      "Terraform",
    ],
    status: "MVP in progress",
    cta: "Seeking co-builders & design partners",
  },
  {
    slug: "ai-podcast-assist",
    title: "AI Podcast Assist",
    description:
      "An AI agent that automates the entire podcast lifecycle, from guest research and show structuring to post-production and content repurposing.",
    problem:
      "Podcasting involves immense manual effort in pre-production (research, outlining) and post-production (show notes, social clips, blog posts).",
    solution:
      "This AI agent ingests guest information, suggests interview questions, generates a structured show outline, transcribes the episode, and creates derivative content (summaries, quotes, social media posts).",
    impact:
      "Reduced preparation and repurposing time by ~70% in initial pilot tests, allowing creators to focus on producing high-quality content.",
    tech: [
      "Next.js",
      "Python (FastAPI)",
      "LLMs (OpenAI/Gemini)",
      "RAG",
      "Vector DB",
      "Celery",
      "AWS",
    ],
    status: "Private beta",
    cta: "Seeking 3 design partners",
  },
  {
    slug: "smart-gold-savings",
    title: "Smart Gold Savings Platform",
    description:
      "An aggregator for jeweller-backed gold savings schemes, providing users with reminders, tracking, and comparative analytics.",
    problem:
      "Managing multiple gold schemes is cumbersome, and it's hard to track real returns or get timely reminders for installments.",
    solution:
      "A centralized dashboard to add, manage, and monitor various gold savings schemes. The platform sends automated payment reminders and visualizes investment growth.",
    impact:
      "Improves transparency and user trust, helping families maximize the value of their gold savings.",
    tech: ["React Native", "Node.js", "Express", "MongoDB", "AWS"],
    status: "Discovery + prototype",
    cta: "Validating market need",
  },
  {
    slug: "the-third-persons",
    title: "The Third Persons (TTP)",
    description:
      "A social-first e-commerce brand for the LGBTQ+ community, leveraging AI for visual creation and marketing copy.",
    problem:
      "Authentic and creative marketing in niche e-commerce is time-consuming and expensive for new brands.",
    solution:
      "Utilizing generative AI to create unique product mockups, ad creatives, and social media copy, enabling rapid experimentation and A/B testing of brand concepts.",
    impact:
      "Early traction on social platforms with strong Gen Z resonance, demonstrating market potential.",
    tech: [
      "Shopify",
      "Generative AI (Midjourney)",
      "LLMs (Copywriting)",
      "Social Media APIs",
    ],
    status: "Live experiments",
    cta: "Collaborations welcome",
  },
  {
    slug: "family-wealth-tracker",
    title: "Family Wealth Tracker",
    description:
      "An AI-assisted tool for consolidating and tracking a family's multi-generational wealth across various asset classes.",
    problem:
      "Families often have assets spread across real estate, stocks, mutual funds, and more, making it difficult to get a holistic view of their net worth and performance.",
    solution:
      "The platform uses AI to ingest statements and documents (e.g., property deeds, stock holdings), automatically categorizing and creating a unified dashboard with alerts and performance insights.",
    impact:
      "Helps families achieve financial clarity, improving long-term planning and decision-making.",
    tech: [
      "Next.js",
      "Python",
      "OCR",
      "LLMs (Data Extraction)",
      "PostgreSQL",
      "AWS",
    ],
    status: "MVP planning",
    cta: "Seeking early adopters for feedback",
  },

  // --- Resume / Professional Projects ---
  {
    slug: "amazon-connect-flow-optimization",
    title: "Amazon Connect Flow Optimization",
    description:
      "Optimized Petco’s customer service experience with 50+ Amazon Connect flows integrated with AWS services.",
    problem:
      "Customer support workflows were slow, increasing call handling time and impacting satisfaction.",
    solution:
      "Implemented 50+ Amazon Connect flows and 25+ AWS Lambda functions with DynamoDB and S3 integration.",
    impact:
      "Reduced call handling time by 20%, processing time by 35%, and improved system uptime to 99.9%.",
    tech: ["Angular", "AWS Lambda", "Node.js", "Python", "DynamoDB", "S3", "QuickSight"],
    status: "In production",
    cta: "Delivered at Petco",
  },
  {
    slug: "custom-ccp-implementation",
    title: "Custom Contact Control Panel (CCP)",
    description:
      "Developed a custom CCP for Amazon Connect to streamline customer support operations.",
    problem:
      "Default CCP lacked flexibility and slowed down customer support agents.",
    solution:
      "Built a custom Angular-based CCP integrated with AWS Lambda and DynamoDB for real-time data sync.",
    impact:
      "Reduced response time by 15%, improved agent productivity by 25%, and increased satisfaction by 20%.",
    tech: ["Angular", "AWS Lambda", "Node.js", "Python", "DynamoDB", "S3", "QuickSight"],
    status: "In production",
    cta: "Delivered at Petco",
  },
  {
    slug: "datatwin-tax-reconciliation",
    title: "DataTwin - Tax Reconciliation (OneRetail)",
    description:
      "A tax reconciliation platform for retail organizations, automating cross-invoice and financial reconciliation.",
    problem:
      "Manual reconciliation was time-consuming and error-prone for retail clients.",
    solution:
      "Built a platform to automate reconciliation with recommendations and accuracy checks.",
    impact:
      "Improved financial accuracy and streamlined reconciliation workflows.",
    tech: ["ReactJS", "Node.js", "Express", "AWS DynamoDB", "AWS Lambda", "Terraform", "QuickSight"],
    status: "Delivered",
    cta: "Delivered at OneIntegral Technologies",
  },
  {
    slug: "datatwin-partner-performance",
    title: "DataTwin - Partner/Sales Performance & Payouts (OneCommerce)",
    description:
      "A SaaS platform to manage partner commissions, sales incentives, and performance bonuses.",
    problem:
      "Tracking partner performance and payouts manually caused inefficiencies and disputes.",
    solution:
      "Automated payout calculations with real-time transparency and accuracy.",
    impact:
      "Reduced errors in payouts and improved partner trust.",
    tech: ["ReactJS", "Node.js", "Express", "AWS DynamoDB", "AWS Lambda", "Terraform", "QuickSight"],
    status: "Delivered",
    cta: "Delivered at OneIntegral Technologies",
  },
  {
    slug: "datatwin-fixed-asset-reconciliation",
    title: "DataTwin - Fixed Asset Reconciliation (FAR)",
    description:
      "Streamlined fixed asset reconciliation processes with intelligent discrepancy detection.",
    problem:
      "Companies struggled to reconcile fixed assets with financial records, leading to compliance risks.",
    solution:
      "Automated reconciliation and insights with React, Node.js, and MongoDB.",
    impact:
      "Reduced errors and enhanced financial reporting.",
    tech: ["ReactJS", "Node.js", "Express", "MongoDB", "AWS Lambda", "Terraform", "QuickSight"],
    status: "Delivered",
    cta: "Delivered at OneIntegral Technologies",
  },
  {
    slug: "datatwin-lease-accounting",
    title: "DataTwin - Lease Accounting & Management System (LAMS)",
    description:
      "A platform to manage lease contracts, automate lease accounting, and ensure compliance.",
    problem:
      "Lease management was complex and error-prone for clients with multiple contracts.",
    solution:
      "Developed a lease accounting system with automation and real-time insights.",
    impact:
      "Improved compliance and decision-making efficiency.",
    tech: ["ReactJS", "Node.js", "Express", "MongoDB", "AWS Lambda", "Terraform", "QuickSight"],
    status: "Delivered",
    cta: "Delivered at OneIntegral Technologies",
  },
  {
    slug: "knitpack-erp",
    title: "Knitpack (ERP Software)",
    description:
      "An ERP platform for garment manufacturing businesses.",
    problem:
      "Manual processes slowed production and increased costs.",
    solution:
      "Implemented automated workflows, testing tools, and responsive UI.",
    impact:
      "Cut manual testing by 50%, improved engagement by 15%, reduced AWS costs by 20%.",
    tech: ["AngularJS", "PHP (CodeIgniter)", "MySQL", "AWS"],
    status: "Delivered",
    cta: "Delivered at Global Software Solutions",
  },
  {
    slug: "myboss-office-automation",
    title: "MyBoss (Office Automation)",
    description:
      "A web-based office automation system for SMEs.",
    problem:
      "Routine office tasks required manual data entry, leading to inefficiency.",
    solution:
      "Developed AngularJS frontend + backend APIs with AWS Lambda for automation.",
    impact:
      "Cut response times by 30%, reduced manual data errors by 25%, improved engagement by 20%.",
    tech: ["AngularJS", "PHP (CodeIgniter)", "MySQL", "AWS Lambda"],
    status: "Delivered",
    cta: "Delivered at Global Software Solutions",
  },
];
