import Hero from "@/components/sections/hero";
import {FeaturedWork} from "@/components/sections/featured-work";
import { MotionDiv } from "@/components/ui/motion-div";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="container mx-auto px-4"
      >
        <FeaturedWork />
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
        className="container mx-auto px-4 py-16"
      >
        <Skills />
      </MotionDiv>
    </>
  );
}
