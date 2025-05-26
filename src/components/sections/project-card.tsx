"use client";

import { MotionDiv } from "@/components/ui/motion-div";
import Link from "next/link";
import { Project } from "@/types/types";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <MotionDiv
      whileHover={{ y: -10 }}
      className="bg-background border border-foreground/10 rounded-xl overflow-hidden shadow-lg"
    >
      <div className="relative aspect-video bg-foreground/5">
        {/* Replace with your actual image component */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={project.image} alt={project.title}></img>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <span className="text-sm text-foreground/50">{project.category}</span>
        </div>

        <p className="text-foreground/70 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-foreground/5 rounded-full bg-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={project.link}
          target="_blank"
          className="inline-flex items-center text-primary font-medium hover:underline"
        >
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </MotionDiv>
  );
}
