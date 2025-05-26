"use client";

import { projects } from "@/lib/constants";
import { MotionDiv } from "@/components/ui/motion-div";
import {
  motion,
  useScroll,
  useTransform,
  animate,
  useMotionValue,
} from "framer-motion";
import { useRef, useEffect } from "react";
import { ArrowRight, MoveRight } from "lucide-react";
import Link from "next/link";

export function FeaturedWork() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // Animated path for the dynamic connection
  const pathLength = useMotionValue(0);
  const secondaryPathLength = useMotionValue(0);

  useEffect(() => {
    const animation = animate(pathLength, 1, {
      duration: 2.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    });

    const secondaryAnimation = animate(secondaryPathLength, 1, {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay: 0.5,
    });

    return () => {
      animation.stop();
      secondaryAnimation.stop();
    };
  }, []);

  const featuredProjects = projects.slice(0, 3);

  return (
    <section
      ref={containerRef}
      className="relative pt-32  overflow-hidden bg-white"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 md:mb-0"
          >
            <h2 className="text-4xl md:text-6xl font-bold">
              Featured <span className="text-gray-900">Works</span>
            </h2>
            <p className="text-lg md:text-xl mt-4 max-w-md text-gray-600">
              A curated selection of projects
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link
              href="/work"
              className="group flex items-center gap-2 text-lg text-gray-900 hover:text-gray-700"
            >
              View all
              <MoveRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Link>
          </MotionDiv>
        </div>

        <div className="relative h-[130vh]">
          {/* Dynamic Connection SVG */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Primary Flowing Path */}
            <defs>
              <linearGradient
                id="pathGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#B3B6BA", stopOpacity: 0.8 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#B3B6BA",  stopOpacity: 0.1}}
                />
              </linearGradient>
            </defs>
            <motion.path
              ref={pathRef}
              d="M10,60 C30,40 60,30 90,60 C70,80 40,90 10,60"
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="0.3"
              strokeDasharray="2 2"
              style={{
                pathLength,
                opacity: useTransform(
                  scrollYProgress,
                  [0, 0.2, 0.8, 1],
                  [0, 1, 1, 0]
                ),
              }}
            />
            
          
            {/* Particle-like Dots */}
            <motion.circle
              cx="10"
              cy="60"
              r="0.5"
              fill="#383838"
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [0, 0.2, 0.8, 1],
                  [0, 1, 1, 0]
                ),
                scale: useTransform(pathLength, [0, 0.5, 1], [0.5, 1.2, 0.5]),
              }}
            />
            <motion.circle
              cx="90"
              cy="60"
              r="0.5"
              fill="#383838"
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [0, 0.2, 0.8, 1],
                  [0, 1, 1, 0]
                ),
                scale: useTransform(
                  secondaryPathLength,
                  [0, 0.5, 1],
                  [0.5, 1.2, 0.5]
                ),
              }}
            />
          </svg>

          {/* Project 1 - Large Center Card */}
          <motion.div
            style={{ y: y1 }}
            className="absolute left-0 right-0 mx-auto w-full max-w-3xl"
          >
            <ProjectCard
              project={featuredProjects[0]}
              size="large"
              className="bg-white border border-gray-200"
            />
          </motion.div>

          {/* Project 2 - Left Side Card */}
          <motion.div
            style={{ y: y2 }}
            className="absolute left-0 top-[40%] w-full max-w-md"
          >
            <ProjectCard
              project={featuredProjects[1]}
              size="medium"
              className="bg-white border border-gray-200"
            />
          </motion.div>

          {/* Project 3 - Right Side Card */}
          <motion.div
            style={{ y: y3 }}
            className="absolute right-0 top-[60%] w-full max-w-md"
          >
            <ProjectCard
              project={featuredProjects[2]}
              size="medium"
              className="bg-white border border-gray-200"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  size = "medium",
  className = "",
}: {
  project: any;
  size?: "small" | "medium" | "large";
  className?: string;
}) {
  const sizeClasses = {
    small: "h-64",
    medium: "h-80",
    large: "h-96",
  };

  return (
    <MotionDiv
      whileHover={{ scale: 1.02 }}
      className={`rounded-xl overflow-hidden shadow-md ${sizeClasses[size]} ${className}`}
    >
      <div className="relative h-full group">
        {/* Image Placeholder */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center`}
        >
          <img src={project?.image} alt={project?.title} className="h-full w-full object-cover"/>
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-8 flex flex-col justify-end">
          <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-2xl font-bold text-white mb-2">
              {project?.title}
            </h3>
            <p className="text-white/80 mb-4 line-clamp-2">
              {project?.description}
            </p>
          </div>

          <div className="absolute top-6 right-6">
            <Link href={project?.link}>
              <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                <ArrowRight className="text-gray-900" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
