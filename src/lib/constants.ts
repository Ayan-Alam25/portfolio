import { Project } from "@/types/types";

export const projects: readonly Project[] = [
  {
    id: 1,
    title: "Pixo",
    description:
      "A social media platform for artists to showcase their work and connect with fans.",
    category: "Full Stack Development",
    image: "/pixo.png",
    link: "https://pixo-phi.vercel.app/",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "uploadthing", "Shadcn UI"],
  },
  {
    id: 2,
    title: "Vibe Stream",
    description:
      "A Music Streaming Web App with advance features like admin panel and live chat.",
    category: "Full Stack Development",
    image: "/vibe-stream.png",
    link: "https://vibe-stream.onrender.com/",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: 3,
    title: "AI Translator",
    description:
      "AI Translator is a web app that allows you to translate text from one language to another.",
    category: "Full Stack Development",
    image: "/ai-translator.png",
    link: "https://ai-translator-opal.vercel.app/",
    tags: ["Next.js", "Tailwind CSS", "Clerk", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Live Docs",
    description:
      "A Collabrative Document Editor with Live Collaboration Features.",
    category: "Full Stack Development",
    image: "/live-doc.png",
    link: "https://live-docs-iota-livid.vercel.app/sign-in",
    tags: ["Next.js", "LiveBlocks", "Clerk", "PostgreSQL"],
  },

  {
    id: 5,
    title: "Chatty",
    description:
      "A Chat App with 30+ different themes and realtime chat features.",
    category: "Full Stack Development",
    image: "/chatty.png",
    link: "https://realtime-chat-app-ibav.onrender.com/login",
    tags: ["MERN Stack", "Cloudinary", "Tailwind CSS", "Socket.io"],
  },

  {
    id: 6,
    title: "Zentry",
    description:
      "A modern and interactive replica of the Zentry website with GSAP animations and music.",
    category: "Frontend Development",
    image: "/zentry.png",
    link: "https://zentry-gaming.netlify.app/",
    tags: ["React.js", "GSAP", "Tailwind CSS", "Netlify"],
  },
  {
    id: 7,
    title: "Nike Landing Page",
    description:
      "A Clean and modern Nike landing page built with React and Tailwind CSS.",
    category: "Frontend Development",
    image: "/nike.png",
    link: "https://mynikelanding.netlify.app/",
    tags: ["React.js", "Tailwind CSS", "Netlify"],
  },
  // Add more projects
] as const;
