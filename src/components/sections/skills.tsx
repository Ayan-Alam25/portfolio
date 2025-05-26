"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

const BASE_URL = "https://simpleskill.icons.workers.dev/svg";

const skills = [
  {
    name: "React",
    category: "Frontend",
    logo: `${BASE_URL}?i=react&theme=light`,
    description: "Dynamic, component-driven user interfaces",
  },
  {
    name: "Next.js",
    category: "Frontend",
    logo: `${BASE_URL}?i=nextdotjs&theme=light`,
    description: "Optimized server-side rendering and static sites",
  },
  {
    name: "C++",
    category: "Language",
    logo: `${BASE_URL}?i=cplusplus&theme=light`,
    description: "High-performance, object-oriented programming",
  },
  {
    name: "TypeScript",
    category: "Language",
    logo: `${BASE_URL}?i=typescript&theme=light`,
    description: "Type-safe coding for robust applications",
  },
  {
    name: "JavaScript",
    category: "Language",
    logo: `${BASE_URL}?i=javascript&theme=light`,
    description: "Powering interactive web experiences",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    logo: `${BASE_URL}?i=tailwindcss&theme=light`,
    description: "Rapid, responsive styling with utility-first CSS",
  },
  {
    name: "Node.js",
    category: "Backend",
    logo: `${BASE_URL}?i=nodedotjs&theme=light`,
    description: "Scalable server-side JavaScript solutions",
  },
  {
    name: "Express",
    category: "Backend",
    logo: `${BASE_URL}?i=express&theme=light`,
    description: "Lightweight APIs with minimalist frameworks",
  },
  {
    name: "MongoDB",
    category: "Database",
    logo: `${BASE_URL}?i=mongodb&theme=light`,
    description: "Flexible NoSQL database for modern apps",
  },
  {
    name: "Framer Motion",
    category: "Animation",
    logo: `${BASE_URL}?i=framer&theme=light`,
    description: "Smooth animations for engaging interfaces",
  },
  {
    name: "Git",
    category: "Tool",
    logo: `${BASE_URL}?i=git&theme=light`,
    description: "Version control for collaborative development",
  },
  {
    name: "Docker",
    category: "DevOps",
    logo: `${BASE_URL}?i=docker&theme=light`,
    description: "Containerization for consistent deployments",
  },
];

const categories = [...new Set(skills.map((skill) => skill.category))];

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: index * 0.1, duration: 0.6, ease: "easeOut" },
  }),
  hover: {
    scale: 1.03,
    y: -5,
    boxShadow: "0 12px 24px rgba(100, 100, 100, 0.2)", // Changed to gray
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Animation for icons
const iconVariants = {
  hover: {
    scale: 1.15,
    rotate: [0, 5, -5, 0],
    transition: { duration: 0.5, repeat: 1, ease: "easeInOut" },
  },
};

// Animation for glowing border
const borderVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hover: {
    opacity: 1,
    scale: 1.1,
    borderColor: "rgba(100, 100, 100, 0.3)", // Changed to gray
    transition: { duration: 0.3 },
  },
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredSkills = selectedCategory
    ? skills.filter((skill) => skill.category === selectedCategory)
    : skills;

  return (
    <section
      className="py-12 md:py-20 bg-transparent"
      aria-labelledby="skills-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block relative"
          >
            <h2
              id="skills-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight relative z-10"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                My Tech Arsenal
              </span>
            </h2>
           
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Tools and technologies I've mastered to craft exceptional digital
            experiences
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Category Navigation */}
          <motion.div
            className="md:w-1/4 sticky top-20 md:top-24 flex flex-row md:flex-col gap-2 md:gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setSelectedCategory(null)}
              className={cn(
                "px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap",
                "transition-colors duration-300",
                selectedCategory === null
                  ? "bg-gradient-to-r from-primary to-secondary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
              aria-pressed={selectedCategory === null}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap",
                  "transition-colors duration-300",
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary to-secondary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="md:w-3/4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.05 }}
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={cardVariants}
                className={cn(
                  "relative bg-white/5 backdrop-blur-lg border border-gray-200/50",
                  "rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 flex flex-col items-center text-center",
                  "shadow-md hover:shadow-lg transition-all duration-400",
                  "group overflow-hidden h-full"
                )}
                role="group"
                aria-label={`Skill: ${skill.name}`}
              >
                {/* Glowing border effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-xl md:rounded-2xl group-hover:border-gray-300/50"
                  variants={borderVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                />

                {/* Animated logo */}
                <motion.div
                  className="mb-2 md:mb-4 text-gray-700 w-8 h-8 md:w-10 md:h-10"
                  variants={iconVariants}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </motion.div>

                {/* Skill name */}
                <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900">
                  {skill.name}
                </h3>

                {/* Category */}
                <span className="text-xs mt-1 text-gray-500">
                  {skill.category}
                </span>

                {/* Description (visible on hover) */}
                <p className="text-xs md:text-sm text-gray-600 mt-2 md:mt-3 max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-400 ease-in-out">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
