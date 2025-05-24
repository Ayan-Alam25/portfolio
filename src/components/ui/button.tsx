"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// Merge the props types properly
type MergedButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement> & HTMLMotionProps<"button">,
  "onDrag" | "ref"
> & {
  variant?: "default" | "outline" | "ghost";
};

export const Button = React.forwardRef<HTMLButtonElement, MergedButtonProps>(
  ({ className = " ", variant = "default", ...props }, ref) => {
    return (
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variant === "default"
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "",
          variant === "outline"
            ? "border border-input hover:bg-accent hover:text-accent-foreground"
            : "",
          variant === "ghost"
            ? "hover:bg-accent hover:text-accent-foreground"
            : "",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
