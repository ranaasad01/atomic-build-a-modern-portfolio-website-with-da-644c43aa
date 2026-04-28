import { SkillCategory } from "@/lib/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 82 },
      { name: "GraphQL", level: 78 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Docker / K8s", level: 75 },
      { name: "Go", level: 65 },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Vercel / AWS", level: 85 },
      { name: "Figma", level: 78 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "Testing (Jest/Playwright)", level: 82 },
    ],
  },
];

export const techIcons = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Redis", color: "#DC382D" },
  { name: "Docker", color: "#2496ED" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "GraphQL", color: "#E10098" },
  { name: "Figma", color: "#F24E1E" },
  { name: "AWS", color: "#FF9900" },
  { name: "Vercel", color: "#ffffff" },
];
