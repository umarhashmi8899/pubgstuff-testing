"use client";

import { cn } from "@/lib/utils";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import React, { useEffect } from "react";

export interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  duration?: number;
}

const defaultColors = ["#6366f1", "#a855f7", "#ec4899", "#ef4444", "#f97316"];

export function AnimatedGradientText({
  children,
  className,
  colors = defaultColors,
  duration = 5000,
}: AnimatedGradientTextProps) {
  const color = useMotionValue(colors[0]);

  useEffect(() => {
    const animation = animate(color, colors, {
      ease: "easeInOut",
      duration: duration / 1000,
      repeat: Infinity,
      repeatType: "mirror",
    });
    return () => animation.stop();
  }, [color, colors, duration]);

  const backgroundImage = useMotionTemplate`radial-gradient(120% 120% at 50% 0%, ${color} 50%, transparent 100%)`;

  return (
    <motion.span
      style={{
        WebkitTextFillColor: "transparent",
        WebkitBackgroundClip: "text",
        backgroundImage,
      }}
      className={cn(
        "relative z-10",
        className
      )}
    >
      {children}
    </motion.span>
  );
}
