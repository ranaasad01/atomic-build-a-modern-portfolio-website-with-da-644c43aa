import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "nexus-dashboard",
    title: "Nexus Dashboard",
    description:
      "A real-time analytics dashboard for SaaS businesses with live charts, user segmentation, and revenue tracking.",
    longDescription:
      "Nexus Dashboard is a comprehensive analytics platform built for modern SaaS companies. It features real-time data visualization using WebSockets, interactive charts powered by Recharts, and a fully customizable widget system. The dashboard supports multi-tenant architecture, role-based access control, and integrates with popular payment processors to surface revenue metrics. Built with performance in mind, it handles millions of events per day with sub-second query times thanks to a Redis caching layer and optimized PostgreSQL queries.",
    image: "/projects/nexus-dashboard.jpg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Recharts", "Prisma"],
    category: "fullstack",
    liveUrl: "https://nexus-demo.vercel.app",
    githubUrl: "https://github.com/alexdev/nexus-dashboard",
    featured: true,
    year: 2024,
  },
  {
    slug: "aurora-ui",
    title: "Aurora UI",
    description:
      "An open-source React component library with 50+ accessible components, dark mode support, and a Figma design system.",
    longDescription:
      "Aurora UI is a production-ready React component library built with accessibility and developer experience at its core. Every component follows WAI-ARIA guidelines, supports keyboard navigation, and ships with full TypeScript types. The library includes a comprehensive Storybook documentation site, automated visual regression tests with Chromatic, and a companion Figma design system with 200+ components and design tokens. Aurora UI has been downloaded over 50,000 times and is used by teams at several Fortune 500 companies.",
    image: "/projects/aurora-ui.jpg",
    tags: ["React", "TypeScript", "Storybook", "Radix UI", "CSS-in-JS", "Figma"],
    category: "frontend",
    liveUrl: "https://aurora-ui.dev",
    githubUrl: "https://github.com/alexdev/aurora-ui",
    featured: true,
    year: 2024,
  },
  {
    slug: "pulse-api",
    title: "Pulse API",
    description:
      "A high-performance REST & GraphQL API gateway with rate limiting, caching, and automatic OpenAPI documentation.",
    longDescription:
      "Pulse API is a developer-first API gateway that sits in front of your microservices and provides a unified interface for clients. It features automatic request/response transformation, intelligent rate limiting with Redis, response caching with cache invalidation strategies, and generates OpenAPI 3.0 documentation automatically from your route definitions. The gateway handles authentication via JWT and OAuth 2.0, provides detailed request logging and tracing with OpenTelemetry, and includes a web-based admin panel for monitoring traffic and managing API keys.",
    image: "/projects/pulse-api.jpg",
    tags: ["Node.js", "GraphQL", "Redis", "Docker", "OpenTelemetry", "PostgreSQL"],
    category: "backend",
    liveUrl: "https://pulse-api.io",
    githubUrl: "https://github.com/alexdev/pulse-api",
    featured: true,
    year: 2023,
  },
  {
    slug: "wanderlust-app",
    title: "Wanderlust",
    description:
      "A travel planning mobile app with AI-powered itinerary generation, offline maps, and social trip sharing.",
    longDescription:
      "Wanderlust reimagines travel planning by combining AI-powered itinerary generation with collaborative trip planning features. Users can describe their ideal trip in natural language and the app generates a detailed day-by-day itinerary with restaurant recommendations, activity bookings, and transportation options. The app features offline-capable maps using MapLibre, real-time collaboration so travel companions can edit itineraries together, and a social feed where travelers share their experiences. Built with React Native and Expo, it runs natively on both iOS and Android.",
    image: "/projects/wanderlust.jpg",
    tags: ["React Native", "Expo", "OpenAI", "MapLibre", "Supabase", "TypeScript"],
    category: "mobile",
    liveUrl: "https://wanderlust.app",
    githubUrl: "https://github.com/alexdev/wanderlust",
    featured: false,
    year: 2023,
  },
  {
    slug: "codeflow-ide",
    title: "CodeFlow IDE",
    description:
      "A browser-based code editor with real-time collaboration, AI code completion, and one-click cloud deployments.",
    longDescription:
      "CodeFlow IDE brings the power of a desktop IDE to the browser with zero setup required. It features a Monaco-based editor with syntax highlighting for 50+ languages, real-time collaborative editing powered by CRDTs (Conflict-free Replicated Data Types), and AI-powered code completion using a fine-tuned language model. Developers can spin up isolated cloud environments for any project in seconds, run terminal commands directly in the browser, and deploy to major cloud providers with a single click. The IDE supports extensions and has a growing marketplace with 200+ community-built plugins.",
    image: "/projects/codeflow-ide.jpg",
    tags: ["React", "Monaco Editor", "WebSockets", "Docker", "Kubernetes", "Go"],
    category: "fullstack",
    liveUrl: "https://codeflow.dev",
    githubUrl: "https://github.com/alexdev/codeflow-ide",
    featured: false,
    year: 2023,
  },
  {
    slug: "fintrack-pro",
    title: "FinTrack Pro",
    description:
      "A personal finance tracker with bank sync, smart categorization, budget forecasting, and investment portfolio tracking.",
    longDescription:
      "FinTrack Pro helps individuals take control of their finances with automatic bank account synchronization via Plaid, AI-powered transaction categorization that learns from user corrections, and sophisticated budget forecasting based on spending patterns. The investment portfolio tracker supports stocks, ETFs, crypto, and real estate, providing a unified net worth view with historical performance charts. The app includes bill tracking with payment reminders, tax report generation, and a financial health score that gamifies good financial habits.",
    image: "/projects/fintrack-pro.jpg",
    tags: ["Next.js", "Plaid API", "Chart.js", "PostgreSQL", "Stripe", "TypeScript"],
    category: "fullstack",
    liveUrl: "https://fintrack.pro",
    githubUrl: "https://github.com/alexdev/fintrack-pro",
    featured: false,
    year: 2022,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "all") return projects;
  return projects.filter((p) => p.category === category);
}
