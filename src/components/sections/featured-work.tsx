"use client";

import { projects } from "@/lib/constants";
import { MotionDiv } from "@/components/ui/motion-div";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useEffect } from "react";
import Link from "next/link";

export function FeaturedWork() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Enhanced parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 2]);

  const featuredProjects = projects.slice(0, 3);

  return (
    <section
      ref={containerRef}
      className="relative py-16 md:py-28 overflow-hidden bg-white"
    >
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <motion.div
          style={{ y: y1, rotate }}
          className="absolute top-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-50 to-gray-50 rounded-full blur-3xl opacity-30"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-1/2 -right-32 w-64 h-64 bg-gradient-to-bl from-gray-50 to-blue-50 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          style={{ y: y3 }}
          className="absolute bottom-20 left-1/3 w-32 h-32 bg-gradient-to-tr from-gray-100 to-transparent rounded-full blur-2xl opacity-40"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section with enhanced typography */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-20">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
            className="mb-8 lg:mb-0 max-w-2xl"
          >
            <div >
              <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[0.9]"
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
              >
                Selected{" "}
                <span className="relative inline-block">
                  <span className="text-gray-900 font-medium">Projects</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 h-0.5 bg-gray-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  />
                </span>
              </motion.h2>
            </div>
            <motion.p
              className="text-lg md:text-xl mt-6 text-gray-500 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              A curated collection of my most impactful digital experiences
            </motion.p>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.7,
              ease: [0.25, 0.8, 0.25, 1],
            }}
          >
            <Link
              href="/work"
              className="group relative flex items-center gap-3 text-lg md:text-xl text-gray-900 font-medium"
            >
              <span className="relative z-10 transition-all group-hover:text-blue-600">
                Explore all projects
              </span>
              <motion.span
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 text-gray-900 transition-all group-hover:border-blue-600 group-hover:text-blue-600 group-hover:bg-blue-50"
                whileHover={{ scale: 1.1, rotate: 45 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>

              {/* Animated underline */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-blue-600 rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: "calc(100% - 52px)" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </MotionDiv>
        </div>

        {/* Projects Grid with staggered layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
          {/* Main Featured Project - Enhanced */}
          <motion.div style={{ y: y1 }} className="lg:col-span-8 row-span-1">
            <ProjectCard
              project={featuredProjects[0]}
              layout="featured"
              index={0}
              className="h-full min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]"
            />
          </motion.div>

          {/* Side Projects - Stacked */}
          <div className="lg:col-span-4 flex flex-col gap-4 md:gap-6">
            <motion.div style={{ y: y2 }} className="flex-1">
              <ProjectCard
                project={featuredProjects[1]}
                layout="compact"
                index={1}
                className="h-full min-h-[200px] sm:min-h-[240px]"
              />
            </motion.div>
            <motion.div style={{ y: y3 }} className="flex-1">
              <ProjectCard
                project={featuredProjects[2]}
                layout="compact"
                index={2}
                className="h-full min-h-[200px] sm:min-h-[240px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  layout = "featured",
  index,
  className = "",
}: {
  project: any;
  layout?: "featured" | "compact";
  index: number;
  className?: string;
}) {
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

  const handleMouseMove = (e: any) => {
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
    <MotionDiv
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      viewport={{ once: true, margin: "-10%" }}
      className={`relative group overflow-hidden rounded-2xl lg:rounded-3xl ${className}`}
      style={{
        perspective: 1000,
        rotateX: layout === "featured" ? rotateX : 0,
        rotateY: layout === "featured" ? rotateY : 0,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={project.link} className="block h-full w-full relative">
        {/* Enhanced Image Container */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-gray-900/5 z-10"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
          />
        </div>

        {/* Dynamic Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 0.9 }}
          transition={{ duration: 0.4 }}
        />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white text-xl opacity-0 group-hover:opacity-100"
          initial={{ scale: 0, rotate: -45 }}
          whileHover={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          ↗
        </motion.div>

        {/* Enhanced Text Overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 ${
            layout === "featured" ? "lg:p-10" : ""
          }`}
        >
          <div className="space-y-2">
          
            <motion.h3
              className={`text-white font-medium leading-tight ${
                layout === "featured"
                  ? "text-xl sm:text-2xl lg:text-3xl"
                  : "text-lg sm:text-xl"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {project.title}
            </motion.h3>

            {layout === "featured" && (
              <motion.p
                className="text-white/70 text-sm sm:text-base max-w-md leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {project.description ||
                  "Discover the story behind this project"}
              </motion.p>
            )}

            {/* Interactive Progress Bar */}
            <motion.div
              className="w-0 h-0.5 bg-gradient-to-r from-gray-400 to-white rounded-full group-hover:w-16 sm:group-hover:w-20 transition-all duration-500"
              style={{ marginTop: layout === "featured" ? "16px" : "12px" }}
            />
          </div>
        </div>

        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 rounded-2xl lg:rounded-3xl pointer-events-none"
          initial={{
            background: "linear-gradient(45deg, transparent, transparent)",
          }}
          whileHover={{
            background:
              "linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(255, 255, 255, 0.1))",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
          transition={{ duration: 0.5 }}
          style={{
            background: "linear-gradient(45deg, transparent, transparent)",
            padding: "1px",
          }}
        >
          <div className="w-full h-full rounded-2xl lg:rounded-3xl bg-transparent" />
        </motion.div>

        {/* Shimmer Effect */}
        <motion.div
          className="absolute inset-0 -top-full bg-gradient-to-b from-transparent via-white/10 to-transparent group-hover:top-full pointer-events-none"
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
            transform: "skewY(-10deg)",
          }}
        />
      </Link>
    </MotionDiv>
  );
}
