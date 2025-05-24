"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function AnimatedBorder({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    gsap.to(".animated-border", {
      borderColor: "var(--accent-color)",
      duration: 1,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="animated-border border-2 p-4 rounded-lg">{children}</div>
  );
}
