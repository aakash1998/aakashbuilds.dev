export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/aakashpatel05',
  github: 'https://github.com/aakash1998',
  email: 'aakash98.pt@gmail.com',
  calendly: 'https://calendly.com/helloaakash30/15-min-free-consultation',
} as const;

export interface Note {
  date: string;
  category: string;
  title: string;
  description: string;
  href: string;
}

export const notes: Note[] = [
  {
    date: 'Sep 2026',
    category: 'Reconciliation',
    title: 'A $0.03 discrepancy once took down my entire reconciliation pipeline.',
    description:
      'One system rounded up, the other rounded down. Finance doesn\u2019t do \u201Cclose enough.\u201D Decimals deserve permanent suspicion.',
    href: LINKS.linkedin,
  },
  {
    date: 'Sep 2026',
    category: 'Data quality',
    title: 'The AI agent told me the data was \u2018clean enough.\u2019 It was not clean enough.',
    description:
      '40% nulls in a required field. Dates in four formats. Agents optimize for finishing, not for being right \u2014 so a human does the trusting.',
    href: LINKS.linkedin,
  },
  {
    date: 'Oct 2026',
    category: 'Cost',
    title: 'We cut our scraping bill by 73%. The AI agent deserves about 20% of the credit.',
    description:
      '$150 a day down to under $40. The savings hid in the boring stuff: caching, dedupe, killing zombie cron jobs. The invoice doesn\u2019t care how clever your agent is.',
    href: LINKS.linkedin,
  },
  {
    date: 'Sep 2026',
    category: 'AI agents',
    title: 'Day 2 of Muse.',
    description:
      'Handed an agent my website rebuild: it pushed to GitHub and fixed its own failed deploy while I made coffee. Useful. Still worth checking its work.',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity/7508052490576244736/',
  },
];

export interface CaseStudy {
  slug: string;
  category: string;
  headline: string;
  description: string;
  problem: string;
  approach: string;
  outcome: string;
  metric: string;
  tech: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'data-platform',
    category: 'Data Platform',
    headline: '35% faster pipelines. ~20% lower compute cost.',
    description:
      'A production data platform running across Microsoft Fabric and Databricks. Over time it had accumulated orchestration and compute overhead \u2014 slow to run, expensive to keep running, still responsible for the same datasets on the same schedule.',
    problem:
      'The platform had grown organically. Orchestration and compute overhead had piled up to the point where pipelines were slow and expensive \u2014 while still having to deliver the same reliable datasets, on the same schedule, with the same guarantees.',
    approach:
      'Orchestration was redesigned and compute simplified: fewer moving parts, less redundant processing, workloads sized and scheduled for what they actually needed. Nothing exotic \u2014 mostly removing work the system didn\u2019t need to do.',
    outcome:
      'Pipeline runtime down 35%. Compute cost down ~20%. Same datasets, same reliability, a third less waiting.',
    metric: '35% faster pipelines \u2014 ~20% lower compute cost',
    tech: 'Microsoft Fabric \u00B7 Databricks \u00B7 Spark',
  },
  {
    slug: 'enterprise-ai',
    category: 'Production AI',
    headline: 'Making enterprise AI answers trustworthy enough to use.',
    description:
      'A retrieval-augmented assistant that answers tax and HR questions from real enterprise documents. Building the RAG pipeline was the easy part. The actual work was making the answers trustworthy: measuring retrieval quality, evaluating hallucinations, and proving the system was safe to ship before anyone depended on it.',
    problem:
      'Enterprise documents are messy, and a wrong answer about tax or HR policy is worse than no answer. A demo that retrieves documents is a weekend project. A system employees can trust with real questions is an engineering problem.',
    approach:
      'Semantic search with re-ranking over the document corpus, orchestrated as an explicit pipeline so every step could be inspected. Before deployment, retrieval quality and hallucination rates were evaluated automatically. The system didn\u2019t ship until the numbers justified it.',
    outcome:
      'A production assistant grounded in the company\u2019s own documents, with measured retrieval quality and evaluated failure modes. Not a chatbot demo with good vibes.',
    metric: 'Shipped only after the evaluation numbers justified it.',
    tech: 'Azure AI Search \u00B7 Azure OpenAI \u00B7 Copilot Studio \u00B7 LangGraph',
  },
  {
    slug: 'voice-ai',
    category: 'Real-time AI',
    headline: 'Building a voice AI system where latency is part of the product.',
    description:
      'A conversational voice application: speech recognition, LLM inference, and speech synthesis, orchestrated asynchronously over WebSockets. In voice, a fraction of a second is the difference between a conversation and a chore \u2014 so the system was designed around the latency budget from the start.',
    problem:
      'Three slow operations in sequence \u2014 hear, think, speak \u2014 with a human waiting on the other end. Run them one after another and the conversation feels broken. The product only works if the whole pipeline fits inside a latency budget a person finds natural.',
    approach:
      'The pipeline runs asynchronously over WebSockets: recognition, inference, and synthesis overlap instead of waiting on each other. Each stage is monitored like infrastructure \u2014 in a real-time system, a slow stage is a product defect.',
    outcome:
      'A voice system that holds a natural conversation. Built like infrastructure, monitored like infrastructure, with latency treated as a feature rather than a number on a dashboard.',
    metric: 'Latency designed in, not measured after.',
    tech: 'Deepgram \u00B7 Groq \u00B7 ElevenLabs \u00B7 Twilio \u00B7 FastAPI',
  },
];
