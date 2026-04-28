export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: "frontend" | "fullstack" | "backend" | "mobile";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
