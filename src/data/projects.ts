export type ProjectCategory = "professional" | "personal" | "academic";

export type ProjectChallenge = {
  challenge: string;
  solution: string;
};

export type Project = {
  slug: string;
  title: string;
  type: string;
  category: ProjectCategory;
  summary: string;
  stack: string[];
  overview: string;
  problemStatement: string;
  contribution: string[];
  keyFeatures: string[];
  challenges: ProjectChallenge[];
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "codelessiq",
    title: "CodelessIQ – AI Website Generator",
    type: "Professional Experience",
    category: "professional",
    summary:
      "An AI-powered website generation platform that builds responsive, multi-page websites from structured user inputs and generative AI.",
    stack: ["Python", "FastAPI", "Google Gemini", "MongoDB", "ChromaDB"],
    overview:
      "An AI-powered website generation platform designed to generate responsive, multi-page websites using structured user inputs and generative AI.",
    problemStatement:
      "Building a multi-page website from scratch is slow and repetitive. Teams need a way to turn structured product and content inputs into usable, responsive site structures without writing every page by hand — while keeping generation reliable and API-driven.",
    contribution: [
      "Developed backend services using FastAPI.",
      "Integrated Google Gemini for AI-powered website generation.",
      "Implemented prompt engineering workflows.",
      "Worked on multi-page website generation.",
      "Contributed to backend architecture and API development.",
    ],
    keyFeatures: [
      "Structured input to multi-page website generation",
      "Gemini-powered content and layout generation workflows",
      "FastAPI-based REST services for generation and project handling",
      "Persistent project storage with MongoDB",
      "Vector-assisted retrieval support with ChromaDB",
    ],
    challenges: [
      {
        challenge:
          "Producing coherent multi-page output from generative models without leaking proprietary pipeline details into fragile, one-off prompts.",
        solution:
          "Designed reusable prompt engineering workflows and FastAPI service boundaries so generation steps stayed structured, testable and easier to iterate on.",
      },
      {
        challenge:
          "Keeping generated sites consistent across pages while managing project state and retrieval context.",
        solution:
          "Used MongoDB for project persistence and ChromaDB for contextual retrieval, separating storage concerns from the generation API layer.",
      },
    ],
    note: "This case study describes my professional contributions without revealing proprietary generation pipelines or confidential company implementation details.",
  },
  {
    slug: "scam-detection",
    title: "AI Scam Detection System",
    type: "Professional Experience",
    category: "professional",
    summary:
      "An AI-powered scam detection and verification system that analyses suspicious URLs and identifies potential security threats.",
    stack: ["Python", "FastAPI", "NVIDIA NIM", "LLMs", "VirusTotal API", "WHOIS"],
    overview:
      "An AI-powered scam detection and verification system designed to analyse suspicious URLs and identify potential security threats.",
    problemStatement:
      "Suspicious links are difficult to assess quickly using a single signal. Security workflows need combined threat intelligence, domain context and LLM-assisted analysis to help reviewers decide whether a URL is likely malicious.",
    contribution: [
      "Integrated LLM-based analysis.",
      "Worked with VirusTotal API for threat intelligence.",
      "Implemented WHOIS-based domain information retrieval.",
      "Developed backend services for analysing suspicious URLs.",
    ],
    keyFeatures: [
      "Suspicious URL analysis through backend APIs",
      "LLM-assisted threat assessment via NVIDIA NIM",
      "VirusTotal threat intelligence lookups",
      "WHOIS domain metadata retrieval",
      "Combined signals to support scam verification decisions",
    ],
    challenges: [
      {
        challenge:
          "A single data source was not enough to assess scam risk with useful confidence.",
        solution:
          "Combined VirusTotal reputation signals, WHOIS domain context and NVIDIA NIM LLM analysis inside FastAPI services so reviewers received a richer verification view.",
      },
      {
        challenge:
          "External APIs and LLM responses vary in structure and reliability.",
        solution:
          "Normalised integrations behind backend service layers so URL analysis remained consistent even when individual providers returned incomplete or uneven data.",
      },
    ],
    note: "This case study focuses on integrations and backend responsibilities from professional work, without exposing confidential detection rules or internal scoring logic.",
  },
  {
    slug: "credit-card-fraud",
    title: "Credit Card Fraud Detection",
    type: "Professional Experience",
    category: "professional",
    summary:
      "A machine-learning-based fraud detection system that identifies potentially fraudulent credit card transactions through an API-backed model.",
    stack: ["Python", "Scikit-learn", "Random Forest", "FastAPI"],
    overview:
      "A machine-learning-based fraud detection system designed to identify potentially fraudulent credit card transactions.",
    problemStatement:
      "Fraudulent transactions are rare but costly. Teams need a practical classification workflow that can preprocess transaction data, evaluate model performance and expose predictions through a reliable API.",
    contribution: [
      "Worked on machine learning model development.",
      "Implemented Random Forest classification.",
      "Performed data preprocessing and model evaluation.",
      "Developed API-based model integration.",
    ],
    keyFeatures: [
      "Random Forest classification for fraud prediction",
      "Data preprocessing and model evaluation workflow",
      "FastAPI endpoints for model inference",
      "Structured API responses for prediction results",
    ],
    challenges: [
      {
        challenge:
          "Fraud datasets are typically imbalanced, which can distort naive classifier behaviour.",
        solution:
          "Focused on careful preprocessing and evaluation so the Random Forest model could be assessed beyond raw accuracy before API integration.",
      },
      {
        challenge:
          "A trained model only becomes useful when other services can call it reliably.",
        solution:
          "Wrapped the model behind FastAPI prediction endpoints with clear request and response handling for practical integration.",
      },
    ],
    note: "This case study describes model development and API integration work from professional experience without sharing confidential datasets or production credentials.",
  },
  {
    slug: "chat-recommender",
    title: "Chat Recommender",
    type: "Personal Project",
    category: "personal",
    summary:
      "A conversational service-recommendation project designed around natural dialogue and useful suggestion flows.",
    stack: ["Conversational Interface", "Service Recommendations"],
    overview:
      "A conversational interface for recommending services based on user needs expressed in natural language.",
    problemStatement:
      "Users often struggle to choose the right service when options are numerous and poorly filtered. A conversational recommender can narrow choices through dialogue instead of static menus.",
    contribution: [
      "Designed a conversational recommendation concept and interaction flow.",
      "Worked on structuring service suggestions from user intent.",
    ],
    keyFeatures: [
      "Conversational recommendation interface",
      "Intent-driven service suggestions",
    ],
    challenges: [
      {
        challenge:
          "Turning open-ended conversation into useful recommendations requires clear intent handling.",
        solution:
          "Focused the project on mapping conversational cues to structured recommendation responses rather than overclaiming complex ranking systems.",
      },
    ],
  },
  {
    slug: "seminar-ppt-generator",
    title: "Seminar PPT Generator",
    type: "Personal Project",
    category: "personal",
    summary:
      "A Gemini-assisted seminar content and presentation-generation project built with FastAPI and Streamlit.",
    stack: ["Python", "FastAPI", "Streamlit", "Gemini"],
    overview:
      "A Gemini-assisted application for generating seminar content and presentation materials through a FastAPI backend and Streamlit interface.",
    problemStatement:
      "Preparing seminar content and slide structure manually takes time. This project explores generating draft seminar material with generative AI while keeping the workflow accessible through a simple UI.",
    contribution: [
      "Built FastAPI backend services for generation workflows.",
      "Created a Streamlit frontend for interacting with the generator.",
      "Integrated Gemini for seminar content generation.",
    ],
    keyFeatures: [
      "Gemini-assisted seminar content generation",
      "FastAPI backend for generation requests",
      "Streamlit interface for user interaction",
    ],
    challenges: [
      {
        challenge:
          "Generated seminar content needs structure that is useful for presentation drafting.",
        solution:
          "Separated generation logic into backend services and used a Streamlit UI so content could be requested, reviewed and iterated quickly.",
      },
    ],
  },
  {
    slug: "road-accident-ml",
    title: "Road Accident Analysis Using Interpretable ML",
    type: "Academic Project",
    category: "academic",
    summary:
      "An academic project analysing accident patterns and contributing risk factors using interpretable machine-learning outputs.",
    stack: ["Machine Learning", "Data Preprocessing", "Visual Analytics"],
    overview:
      "An academic project analysing accident patterns and contributing risk factors using interpretable machine-learning outputs and visual analytics.",
    problemStatement:
      "Road accident data contains patterns that are hard to see in raw tables. Interpretable machine learning and visual analysis help surface contributing risk factors for safer decision-making.",
    contribution: [
      "Worked on data preprocessing for accident analysis.",
      "Built interactive visualisations of accident patterns.",
      "Used interpretable machine-learning outputs to highlight risk-factor insights.",
    ],
    keyFeatures: [
      "Interactive accident pattern dashboard",
      "Risk-factor insight visualisation",
      "Interpretable machine-learning analysis",
    ],
    challenges: [
      {
        challenge:
          "Raw accident records are noisy and difficult to interpret without structured analysis.",
        solution:
          "Combined preprocessing, interpretable model outputs and visual analytics so patterns and risk factors were easier to communicate.",
      },
    ],
  },
];

export const professionalProjects = projects.filter((p) => p.category === "professional");
export const otherProjects = projects.filter((p) => p.category !== "professional");
