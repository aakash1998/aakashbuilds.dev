export const LINKS = {
  linkedin: "https://www.linkedin.com/in/aakashpatel05",
  github: "https://github.com/aakash1998",
  email: "aakash98.pt@gmail.com",
};

export interface Note {
  index: string;
  title: string;
  category: string;
  date: string;
  description?: string;
  url: string;
}

export const notes: Note[] = [
  {
    index: "01",
    title: "A $0.03 discrepancy took down a reconciliation pipeline.",
    category: "Reconciliation",
    date: "Sep 2026",
    description:
      'One system rounded up, the other rounded down. Finance doesn\'t do "close enough." Decimals deserve permanent suspicion.',
    url: LINKS.linkedin,
  },
  {
    index: "02",
    title: 'When an AI agent says the data is "clean enough."',
    category: "Data quality",
    date: "Sep 2026",
    description:
      "40% nulls in a required field. Dates in four formats. Agents optimize for finishing, not for being right — so a human does the trusting.",
    url: LINKS.linkedin,
  },
  {
    index: "03",
    title: "How we cut a scraping bill by 73%.",
    category: "Infrastructure",
    date: "Oct 2026",
    description:
      "The invoice doesn't care how clever your agent is.",
    url: LINKS.linkedin,
  },
  {
    index: "04",
    title: "Day 2 of Muse.",
    category: "AI agents",
    date: "Sep 2026",
    description:
      "Handed an agent a website rebuild: it pushed to GitHub and fixed its own failed deploy while I made coffee. Useful. Still worth checking its work.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity/7508052490576244736/",
  },
];

export interface FlowItem {
  title: string;
  sub?: string;
  note?: string;
}

export const heroFlow: FlowItem[] = [
  { title: "Sources", sub: "Operational systems, documents, events" },
  { title: "Ingestion", sub: "Batch + streaming pipelines" },
  { title: "Transformation", sub: "Modeled, tested, versioned" },
  { title: "Validation", sub: "Reconciliation + quality checks" },
  { title: "Serving", sub: "Warehouses, APIs, downstream users" },
  { title: "AI / Analytics", sub: "Grounded in data that is right" },
];

export const platformFlow: FlowItem[] = [
  { title: "Sources", sub: "ERP / leasing / finance systems" },
  { title: "Fabric ingestion", sub: "Scheduled + event-driven loads" },
  { title: "Delta / OneLake", sub: "Single governed storage layer" },
  { title: "Transformation / Spark", sub: "Simplified orchestration" },
  { title: "Quality + reconciliation", sub: "Checks before anything ships" },
  { title: "Analytics / downstream users", sub: "50+ stakeholders" },
];

export const ragFlow: FlowItem[] = [
  { title: "Documents", sub: "Tax + HR policy corpus" },
  { title: "Chunking / indexing", sub: "Semantic embeddings", note: "retrieval quality" },
  { title: "Azure AI Search", sub: "Hybrid retrieval" },
  { title: "Re-ranking", sub: "Precision before generation", note: "grounding" },
  { title: "LLM orchestration", sub: "LangGraph pipeline" },
  { title: "Evaluation", sub: "Hallucination checks pre-ship", note: "hallucination checks" },
  { title: "Answer", sub: "Cited, grounded, measured" },
];
