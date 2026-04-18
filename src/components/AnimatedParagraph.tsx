import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { cn } from "../utils/cn";

interface AnimatedLetterProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function AnimatedLetter({ children, progress, range }: AnimatedLetterProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }}>
      {children}
    </motion.span>
  );
}

interface AnimatedParagraphProps {
  text: string;
  className?: string;
}

export function AnimatedParagraph({ text, className }: AnimatedParagraphProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"]
  });

  const chars = text.split("");

  return (
    <p ref={ref} className={cn("inline-block", className)}>
      {chars.map((char, i) => {
        const charProgress = i / chars.length;
        const start = Math.max(0, charProgress - 0.1);
        const end = Math.min(1, charProgress + 0.05);
        
        return (
          <AnimatedLetter 
            key={i} 
            progress={scrollYProgress} 
            range={[start, end]}
          >
            {char}
          </AnimatedLetter>
        );
      })}
    </p>
  );
}
