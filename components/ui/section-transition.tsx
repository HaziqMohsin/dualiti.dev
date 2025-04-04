"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTransition({ children, className }: SectionTransitionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}