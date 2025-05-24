import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/lib/constants";
import { MotionDiv } from "@/components/ui/motion-div";

export default function WorkPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-5xl font-bold mb-16 text-center font-space-grotesk">
        Selected <span className="text-primary">Work</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <MotionDiv
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}
