import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "../utils/cn";

export interface TextSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  className?: string;
}

export function WordsPullUpMultiStyle({ segments, className }: WordsPullUpMultiStyleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const pullupVariant: Variants = {
    initial: { y: 40, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.08,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const allWords = segments.flatMap((segment) => 
    segment.text.split(" ").filter(w => w !== "").map(word => ({
      word,
      className: segment.className
    }))
  );

  return (
    <div ref={ref} className={cn("inline-flex flex-wrap justify-center overflow-hidden", className)}>
      {allWords.map((item, i) => (
        <div key={i} className="overflow-hidden inline-block mr-[0.25em]">
          <motion.div
            custom={i}
            variants={pullupVariant}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className={item.className}
          >
            {item.word}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
