"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function Reveal({ delay = 0, children, ...props }: RevealProps) {
  const { className = "", style, ...rest } = props;

  return (
    <motion.div
      style={{ animationDelay: `${delay}s`, ...style }}
      className={`motion-safe:animate-[softReveal_0.75s_cubic-bezier(0.22,1,0.36,1)_both] ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
