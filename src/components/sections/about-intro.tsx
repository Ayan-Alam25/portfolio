import { ArrowDown } from "lucide-react";

export default function AboutIntro() {
  return (
    <section className="py-12 md:py-16 px-4 text-black">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold animate-fadeIn mb-6">
          About Me
        </h2>
        <p className="text-base md:text-lg mt-4 max-w-2xl py-12 mx-auto animate-fadeIn px-4 md:px-0">
          Hi, I'm Ayan Alam, a final-year Computer Science Engineering student
          from Jharkhand, India. I'm passionate about web development and aim to
          become a skilled web developer. I work primarily with the MERN stack.
          In addition to web development, I'm also a competitive programmer,
          constantly improving my problem-solving skills and algorithms. I'm
          eager to apply my skills in web development to create impactful,
          efficient, and user-friendly applications.
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <div className="flex items-center gap-1 text-sm font-light text-gray-600 animate-bounce">
          <span>Scroll down to learn more about me</span>
          <ArrowDown className="h-4 w-4" />
        </div>
      </div>
    </section>
  );
}
