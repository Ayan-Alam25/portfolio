import { MagneticButton } from "@/components/ui/magnetic-button";
import { CanvasEffect } from "@/components/ui/canvas-effect";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <CanvasEffect />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-space-grotesk">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Creative
            </span>{" "}
            <br />
            Digital Experiences
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            Crafting immersive digital journeys that captivate and inspire.
          </p>
          <Link href="/work">
            <MagneticButton>
              <span className="flex items-center gap-2">
                View Work <ArrowRight size={20} />
              </span>
            </MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
