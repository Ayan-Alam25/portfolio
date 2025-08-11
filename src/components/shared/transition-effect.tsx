"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function TransitionEffect({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // If the route is /work, render children without animation
  if (pathname === "/work") {
    return <>{children}</>;
  }

  if(pathname === "/contact"){
    return <>{children}</>
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
