import Hero from "@/components/sections/hero";
import {FeaturedWork} from "@/components/sections/featured-work";
import { MotionDiv } from "@/components/ui/motion-div";

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
    </>
  );
}
