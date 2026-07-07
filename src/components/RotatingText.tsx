"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

type RotatingTextProps = {
  texts: string[];
  interval?: number;
  className?: string;
};

export default function RotatingText({
  texts,
  interval = 2500,
  className = "",
}: RotatingTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const currentText = texts[activeIndex] ?? "";

  useEffect(() => {
    if (shouldReduceMotion || texts.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % texts.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, shouldReduceMotion, texts.length]);

  if (shouldReduceMotion) {
    return <span className={className}>{texts[0] ?? ""}</span>;
  }

  return (
    <span className={`inline-grid overflow-hidden align-baseline ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          className="col-start-1 row-start-1"
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -18, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
