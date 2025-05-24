import { Project } from "@/types/types";

export const projects: readonly Project[] = [
  {
    id: 1,
    title: "Vibe Stream",
    description:
      "A Music Streaming Web App with advance features like admin panel and live chat",
    category: "Web Development",
    image: "/vibe-stream.png",
    link: "https://vibe-stream.onrender.com/",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: 2,
    title: "AI Translator",
    description:
      "AI Translator is a web app that allows you to translate text from one language to another",
    category: "Web Development",
    image: "/ai-translator.png",
    link: "https://ai-translator-opal.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "Clerk", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Live Docs",
    description:
      "A Collabrative Document Editor with Live Collaboration Features",
    category: "Web Development",
    image: "/live-doc.png",
    link: "https://live-docs-iota-livid.vercel.app/sign-in",
    tags: ["Next.js", "LiveBlocks", "Clerk", "PostgreSQL"],
  },
  // Add more projects
] as const;
