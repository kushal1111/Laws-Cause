import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function ArrowNudge() {
  const reduce = useReducedMotion();
  return (
    <motion.span
      aria-hidden="true"
      className="inline-flex"
      whileHover={reduce ? undefined : { x: 4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
    </motion.span>
  );
}
