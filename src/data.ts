/* ── data.ts ── Single source of truth for all site content ── */

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// ─── Types ───────────────────────────────────────────────

export interface Profile {
  name: string;
  oneLiner: string;
  metrics: { v: string; l: string; project: string }[];
  email: string;
  github: string;
  twitter: string;
  linkedin: string;
}

export interface About {
  para1: string;
  para2: string;
  looking: string;
}

export interface WorkEntry {
  id: string;
  company: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  role: string;
  dates: string;
  stack: string[];
  summary: string;
  detail?: string;
  note?: string;
  headline?: string;
  color: "sage" | "plum" | "clay" | "slate";
  youtube?: string | null;
  githubUrl?: string | null;
  websiteUrl?: string | null;
  liveUrl?: string | null;
  demoUrl?: string | null;
  demoImage?: string | null;
}

export interface FooterData {
  certifications: string[];
  stack: string[];
  education: string;
}

// ─── Profile ─────────────────────────────────────────────

export const PROFILE: Profile = {
  name: "Alina Chen",
  oneLiner: "Product & Growth \u2014 I ship 0\u21921 products and grow them to revenue.",
  metrics: [
    { v: "Product Manager", l: "iterated prototypes based on feedback from 100+ active users", project: "AdamsMyth" },
    { v: "Entrepreneur", l: "grew startup 0 to $50K MRR", project: "Brderless" },
    { v: "Solution Strategist", l: "currently building", project: "ckpt" },
  ],
  email: "alina.chenyy@gmail.com",
  github: "LilChainyy",
  twitter: "YiyanChenX",
  linkedin: "alina-c-1325731a3",
};

// ─── About ───────────────────────────────────────────────

export const ABOUT: About = {
  para1: "My best way of learning AI is through building. Building pushes me to think user-first to solve real pain points, while rapidly prototyping with AI tools and iterating on feedback.",
  para2: "I graduated from U Rochester in Economics, which led me into finance at EY, after that I joined as growth lead at Brderless.",
  looking: "Looking for founding PM, product, or solutions roles at AI startups.",
};

// ─── Work ────────────────────────────────────────────────

export const WORK: WorkEntry[] = [
  {
    id: "brderless",
    company: "Brderless",
    role: "Founding Growth Lead",
    dates: "Dec 2025 \u2013 Apr 2026",
    location: "New York, NY",
    bullets: [
      "Drove $0 \u2192 $50K+ MRR; grew sponsor base from 2 to 10.",
      "Diagnosed a recurring \u201chow are you different\u201d objection killing 3 of 5 lost deals; shipped a case-study one-pager that converted BD contacts into warm intro sources.",
      "Replaced cold outreach with brand-led inbound \u2014 founder residency expansion and content featuring serial founders + AI research lab leadership.",
    ],
  },
  {
    id: "ey",
    company: "Ernst & Young \u2013 Parthenon",
    role: "M&A Consultant \u2014 Tech & Telehealth",
    dates: "Aug 2024 \u2013 Oct 2025",
    location: "New York, NY",
    bullets: [
      "Buy-side diligence on a $6B cloud infrastructure acquisition and an $80M life sciences carve-out.",
      "Cleaned multi-year billing data in Power BI to compute growth, retention, expansion \u2014 surfaced CAC/LTV risks that informed buyer pricing negotiations.",
      "Normalized one-time expenses and projected standalone financials with management\u2019s forward plans for the carve-out.",
    ],
  },
  {
    id: "jefferies",
    company: "Jefferies",
    role: "IB Summer Analyst \u2014 Energy & Power",
    dates: "Jun 2023 \u2013 Aug 2023",
    location: "Houston, TX",
    bullets: [
      "Contributed to a $500M sell-side fundraiser (upstream energy) and a $1B Series A (clean energy).",
      "Cash-flow modeling, stress testing, 150+ project pipeline synthesis.",
    ],
  },
];

// ─── Featured Projects ──────────────────────────────────

export const FEATURED: Project[] = [
  {
    id: "ckpt",
    name: "Ckpt",
    tagline: "Version control layer for engineer-agent collaboration.\nIn active user testing with early SWE adopters, iterating on workflow fit.",
    role: "Personal Venture \u00b7 Solo Build",
    dates: "",
    stack: ["MCP", "TypeScript", "Next.js"],
    summary: "",
    detail: "Engineers work alongside Claude Code and Codex, but the reasoning behind each change (constraints, dead ends, trade-offs) disappears between sessions and handoffs. ckpt captures that layer.\n\nShipped a 4-component system: a git-wrapping CLI (ckpt add/commit/push) with local SQLite sync, FastAPI + Postgres backend, Next.js web app with timeline and compare views, and an MCP server exposing reasoning tools natively to coding agents. Open webhook protocol so any AI coding tool can push records in. Teams scoped through GitHub OAuth.",
    note: "Originated at Google DeepMind & Datadog Self-Improving Agents Hack NYC. Currently demoing to engineers and iterating on capture friction.",
    color: "sage",
    youtube: null,
    githubUrl: null,
    websiteUrl: "https://ckpt-me-web.vercel.app/",
    liveUrl: "https://ckpt-me-web.vercel.app/",
    demoImage: `${BASE_PATH}/ckpt-screenshot.png`,
  },
  {
    id: "adamsmyth",
    name: "AdamsMyth",
    tagline: "Adaptive investing education platform.\nConducted user interviews, rebuilt core product loop, targeting 100 production users.",
    role: "Product \u00b7 Lead Builder",
    dates: "",
    stack: ["Pinecone", "React", "Supabase"],

    summary: "",
    detail: "Full-stack web app where users take an investor persona quiz, browse matched investment themes, research companies, and learn through an AI advisor that tracks progress.\n\nWrote the PRD, led the team, shipped end-to-end. Built a weighted match-scoring engine that ranks themes against user risk/timeline/sector profile, streaming LLM chat over persisted message history, and a rubric-based eval loop that grades each conversation across business model, financials, and catalyst dimensions to drive personalized learning paths.",
    note: "Live in production. Incubated through Beta University Cohort 11.",
    color: "plum",
    youtube: null,
    liveUrl: "https://adamsmyth.app/",
    demoImage: `${BASE_PATH}/adamsmyth-screenshot.png`,
  },
];

// ─── More Projects ──────────────────────────────────────

export const MORE: Project[] = [
  {
    id: "futureme",
    name: "futureMe",
    tagline: "Multi-agent decision support for life's big calls",
    role: "Product \u00b7 Lead Builder",
    dates: "",
    stack: ["AG2", "Multi-Agent Orchestration", "Python"],
    summary: "",
    detail: "Six AI agents \u2014 optimist, realist, risk analyst, future-self simulator, and more \u2014 debate a user\u2019s life decision and deliver a personalized report with four possible future scenarios. Type in a dilemma like \u201cstay at my job or move abroad,\u201d and get a nuanced breakdown of tradeoffs, risks, and letters from four versions of your future self \u2014 clarity without being told what to do.",
    color: "clay",
    youtube: null,
    liveUrl: "https://robo-nurse-hackathon.vercel.app/",
  },
  {
    id: "fin-rag",
    name: "fin_RAG",
    tagline: "Auditable RAG over SEC filings",
    role: "Builder",
    dates: "",
    summary: "Streamed answers with source citations over Apple\u2019s 10-Q. Source-chunks panel sits next to every answer \u2014 a RAG tool you can\u2019t audit is just a chatbot with extra steps.",
    stack: ["Python", "FastAPI", "OpenAI", "Pinecone"],
    color: "slate",
    youtube: "https://www.youtube.com/embed/HmGXp4-VXjg",
  },
  {
    id: "mental-map",
    name: "Mental Map",
    tagline: "3D concept exploration with hand tracking",
    role: "Builder",
    dates: "",
    summary: "Search a concept and see related ideas in 3D. MediaPipe tracks hand gestures at 30fps; Claude synthesizes hidden bridges between clusters via BFS.",
    stack: ["Three.js", "MediaPipe", "Claude", "Python"],
    color: "plum",
    youtube: "https://www.youtube.com/embed/Sc8VAEn97YE",
  },
  {
    id: "medrover",
    name: "MedRover",
    tagline: "Voice-based clinical intake rover",
    role: "Hackathon \u2014 3rd place SF",
    dates: "",
    summary: "Raspberry Pi rover that runs voice intake in the patient\u2019s language, triages by severity, and reads prescription prices back. Shipped in 4 hours.",
    stack: ["Raspberry Pi", "Whisper", "Python"],
    color: "sage",
    youtube: null,
    demoUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7439049966523691008/",
    demoImage: `${BASE_PATH}/medrover-demo.png`,
    websiteUrl: "https://robo-nurse-hackathon.vercel.app/",
  },
  {
    id: "kickclaw",
    name: "KickClaw",
    tagline: "AI agents with real money on the line",
    role: "Hackathon \u2014 Betaworks ClawHack NYC",
    dates: "",
    summary: "Agents with distinct investment personalities pitch projects, debate, and put real USDC on the line. Shipped at Betaworks ClawHack NYC.",
    stack: ["TypeScript", "Next.js", "USDC", "Claude"],
    color: "sage",
    youtube: null,
    liveUrl: "https://kickclaw.vercel.app/",
  },
  {
    id: "kalshi",
    name: "Kalshi Arbitrage",
    tagline: "3-phase systematic experiment",
    role: "Solo build",
    dates: "",
    summary: "Detect \u2192 simulate slippage \u2192 execute, with explicit kill criteria \u2014 so the data could tell me to walk away rather than confirm what I wanted to believe.",
    stack: ["Python", "Pandas", "Kalshi API"],
    color: "slate",
    youtube: null,
  },
];

// ─── Footer ─────────────────────────────────────────────

export const FOOTER: FooterData = {
  certifications: ["CFA Level I", "SIE"],
  stack: ["Python", "TypeScript", "SQL (Postgres)", "Next.js", "FastAPI", "Supabase", "MCP", "Excel", "Alteryx"],
  education: "B.A. Economics + Brain & Cognitive Science, University of Rochester",
};
