import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import type { CSSProperties } from "react";
import { cn } from "../utils/cn";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: CSSProperties;
}

export function WordsPullUp({ text, className, showAsterisk, style }: WordsPullUpProps) {
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

  const words = text.split(" ").filter(w => w !== "");

  return (
    <div ref={ref} className="flex flex-wrap justify-center overflow-visible">
      {words.map((word, i) => {
        const isLastWord = i === words.length - 1;
        return (
          <div key={i} className="overflow-hidden inline-block mr-[0.25em]">
            <motion.div
              custom={i}
              variants={pullupVariant}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              className={cn("relative inline-block", className)}
              style={style}
            >
              {word}
              {isLastWord && showAsterisk && (
                <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">
                  *
                </span>
              )}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
