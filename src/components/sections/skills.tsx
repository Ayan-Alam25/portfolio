"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useRef } from "react";

const BASE_URL = "https://simpleskill.icons.workers.dev/svg";

const skills = [
  {
    name: "React",
    category: "Frontend",
    logo: `${BASE_URL}?i=react&theme=light`,
    description: "Dynamic, component-driven user interfaces",
    level: 95,
  },
  {
    name: "Next.js",
    category: "Frontend",
    logo: `${BASE_URL}?i=nextdotjs&theme=light`,
    description: "Optimized server-side rendering and static sites",
    level: 90,
  },
  {
    name: "C++",
    category: "Language",
    logo: `${BASE_URL}?i=cplusplus&theme=light`,
    description: "High-performance, object-oriented programming",
    level: 85,
  },
  {
    name: "TypeScript",
    category: "Language",
    logo: `${BASE_URL}?i=typescript&theme=light`,
    description: "Type-safe coding for robust applications",
    level: 88,
  },
  {
    name: "JavaScript",
    category: "Language",
    logo: `${BASE_URL}?i=javascript&theme=light`,
    description: "Powering interactive web experiences",
    level: 92,
  },
  {
    name: "Python",
    category: "Language",
    logo: `${BASE_URL}?i=python&theme=light`,
    description: "Clean and efficient coding for data analysis",
    level: 87,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    logo: `${BASE_URL}?i=tailwindcss&theme=light`,
    description: "Rapid, responsive styling with utility-first CSS",
    level: 90,
  },
  {
    name: "Node.js",
    category: "Backend",
    logo: `${BASE_URL}?i=nodedotjs&theme=light`,
    description: "Scalable server-side JavaScript solutions",
    level: 82,
  },
  {
    name: "Express",
    category: "Backend",
    logo: `${BASE_URL}?i=express&theme=light`,
    description: "Lightweight APIs with minimalist frameworks",
    level: 80,
  },
  {
    name: "MongoDB",
    category: "Database",
    logo: `${BASE_URL}?i=mongodb&theme=light`,
    description: "Flexible NoSQL database for modern apps",
    level: 75,
  },
  {
    name: "Framer Motion",
    category: "Animation",
    logo: `${BASE_URL}?i=framer&theme=light`,
    description: "Smooth animations for engaging interfaces",
    level: 85,
  },
  {
    name: "Git",
    category: "Tool",
    logo: `${BASE_URL}?i=git&theme=light`,
    description: "Version control for collaborative development",
    level: 88,
  },
  {
    name: "Docker",
    category: "DevOps",
    logo: `${BASE_URL}?i=docker&theme=light`,
    description: "Containerization for consistent deployments",
    level: 70,
  },
];

const categories = [...new Set(skills.map((skill) => skill.category))];

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const filteredSkills = selectedCategory
    ? skills.filter((skill) => skill.category === selectedCategory)
    : skills;

  return (
    <section
      ref={containerRef}
      className="relative py-16 md:py-28 overflow-hidden bg-white"
      aria-labelledby="skills-heading"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <motion.div
          style={{ y: y1, rotate }}
          className="absolute top-32 -right-20 w-32 h-32 bg-gradient-to-br from-blue-50 to-gray-50 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-40 -left-24 w-48 h-48 bg-gradient-to-tr from-gray-50 to-blue-50 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-bl from-gray-100 to-transparent rounded-full blur-2xl opacity-40"
        />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`vertical-${i}`}
              className="absolute w-px bg-gradient-to-b from-transparent via-gray-200/60 to-transparent h-full"
              style={{ left: `${12.5 * (i + 1)}%` }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ delay: i * 0.1, duration: 1.5 }}
            />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={`horizontal-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-gray-200/60 to-transparent w-full"
              style={{ top: `${16.67 * (i + 1)}%` }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: i * 0.15, duration: 1.5 }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header Section - Matching FeaturedWork style */}
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div >
              <motion.h2
                id="skills-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[0.9] text-gray-900"
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
              >
                My Tech{" "}
                <span className="relative inline-block">
                  <span className="font-medium">Arsenal</span>
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gray-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  />
                </span>
              </motion.h2>
            </div>
            <motion.p
              className="text-lg md:text-xl mt-6 text-gray-500 font-light leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Tools and technologies I've mastered to craft exceptional digital
              experiences
            </motion.p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Enhanced Category Navigation */}
          <motion.div
            className="lg:w-1/4 lg:sticky lg:top-24 self-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-gray-200/50 shadow-lg lg:shadow-none lg:bg-transparent lg:border-0 lg:backdrop-blur-none">
              <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
                <CategoryButton
                  label="All"
                  isActive={selectedCategory === null}
                  onClick={() => setSelectedCategory(null)}
                  count={skills.length}
                />
                {categories.map((category) => (
                  <CategoryButton
                    key={category}
                    label={category}
                    isActive={selectedCategory === category}
                    onClick={() => setSelectedCategory(category)}
                    count={
                      skills.filter((skill) => skill.category === category)
                        .length
                    }
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Skills Grid */}
          <div className="lg:w-3/4">
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
            >
              {filteredSkills.map((skill, index) => (
                <SkillCard
                  key={`${skill.name}-${selectedCategory}`}
                  skill={skill}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Enhanced Category Button Component
function CategoryButton({
  label,
  isActive,
  onClick,
  count,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
  count: number;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "relative px-4 py-2.5 lg:px-6 lg:py-3 rounded-xl text-sm lg:text-base font-medium whitespace-nowrap",
        "transition-all duration-300 min-w-fit flex items-center justify-between gap-3",
        isActive
          ? "bg-gray-900 text-white shadow-lg"
          : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200/50 hover:border-gray-300"
      )}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      aria-pressed={isActive}
    >
      <span>{label}</span>
      <motion.span
        className={cn(
          "text-xs px-2 py-0.5 rounded-full font-medium min-w-[20px] text-center",
          isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
        )}
        animate={{ scale: isActive ? 1.1 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {count}
      </motion.span>

      {/* Active indicator */}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-600/10 to-gray-900/10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
}

// Enhanced Skill Card Component
function SkillCard({ skill, index }: { skill: any; index: number }) {
const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    damping: 20,
    stiffness: 300,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    damping: 20,
    stiffness: 300,
  });

  const handleMouseMove = (e:any) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          delay: index * 0.1,
          duration: 0.6,
          ease: [0.25, 0.8, 0.25, 1],
        },
      }}
      whileHover={{
        scale: 1.05,
        y: -8,
        transition: { duration: 0.3 },
      }}
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative h-full"
      role="group"
      aria-label={`Skill: ${skill.name}`}
    >
      {/* Main Card */}
      <div className="relative bg-white border border-gray-200/50 rounded-2xl p-4 sm:p-6 h-full flex flex-col items-center text-center shadow-lg group-hover:shadow-2xl transition-all duration-500 overflow-hidden">
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-gray-50/0 to-blue-50/0 group-hover:from-gray-50/50 group-hover:via-gray-50/30 group-hover:to-gray-50/50 transition-all duration-500 rounded-2xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />

        {/* Skill Icon */}
        <motion.div
          className="relative z-10 mb-3 sm:mb-4"
          whileHover={{
            scale: 1.2,
            rotate: [0, 10, -10, 0],
            transition: { duration: 0.5 },
          }}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 relative">
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-full h-full object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
              loading="lazy"
            />
            {/* Glow effect behind icon */}
            <motion.div
              className="absolute inset-0 bg-gray-400/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ zIndex: -1 }}
            />
          </div>
        </motion.div>

        {/* Skill Name */}
        <motion.h3
          className="text-base sm:text-lg font-medium text-gray-900 mb-1 relative z-10"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          {skill.name}
        </motion.h3>

        {/* Category Badge */}
        <motion.span
          className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-full mb-3 relative z-10 font-medium"
          whileHover={{ scale: 1.05 }}
        >
          {skill.category}
        </motion.span>

        {/* Skill Level Progress Bar */}
        <div className="w-full mb-3 relative z-10">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Proficiency</span>
            <span>{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <motion.div
              className="bg-gradient-to-r from-gray-600 to-gray-900 h-1.5 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{
                delay: index * 0.1 + 0.5,
                duration: 1.5,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            />
          </div>
        </div>

        {/* Description (Expanding on Hover) */}
        <motion.p
          className="text-xs sm:text-sm text-gray-600 leading-relaxed relative z-10 overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          whileHover={{
            height: "auto",
            opacity: 1,
            transition: { duration: 0.3 },
          }}
        >
          {skill.description}
        </motion.p>

        {/* Hover Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200/50 transition-all duration-300 pointer-events-none"
          whileHover={{
            background:
              "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(107, 114, 128, 0.1))",
          }}
        />

        {/* Corner Accent */}
        <motion.div
          className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.5 }}
        />
      </div>

      {/* Floating Elements on Hover */}
      <motion.div
        className="absolute -top-2 -right-2 w-4 h-4 bg-gray-400/20 rounded-full blur-sm opacity-0 group-hover:opacity-100"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}
