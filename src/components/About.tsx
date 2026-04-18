import { WordsPullUpMultiStyle } from "./WordsPullUpMultiStyle";
import { AnimatedParagraph } from "./AnimatedParagraph";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import resumePdf from "../assets/Phone_Zaw_Resume.pdf";

export function About() {
  const segments = [
    { text: "Phone Zaw, ", className: "font-normal" },
    { text: "a Java Fullstack Developer. ", className: "font-serif italic" },
    { text: "I architect scalable backends and craft clean, modern digital experiences.", className: "font-normal" },
  ];

  return (
    <section id="about" className="bg-black py-20 px-4 md:px-6 w-full flex justify-center scroll-mt-10">
      <div className="bg-[#101010] rounded-2xl p-8 md:p-16 lg:p-24 w-full flex flex-col items-center text-center max-w-6xl">
        <span className="text-primary text-[10px] sm:text-xs tracking-widest mb-6 md:mb-10 uppercase">About Me</span>

        <div className="max-w-3xl mx-auto mb-10 md:mb-16">
          <WordsPullUpMultiStyle
            segments={segments}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] sm:leading-[0.9] text-primary"
          />
        </div>

        <AnimatedParagraph
          text="I specialize in building robust enterprise applications with Java, Spring Boot, and modern automated workflows, seamlessly integrated with sleek React and AI-driven interfaces."
          className="text-[#DEDBC8] text-xs sm:text-sm md:text-base max-w-xl text-center leading-relaxed"
        />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 md:mt-16"
        >
          <a
            href={resumePdf}
            download="Phone_Zaw_Resume.pdf"
            className="group flex items-center justify-center gap-3 bg-[#DEDBC8] text-black rounded-full px-7 py-3 transition-all duration-300 hover:bg-white hover:scale-[1.02] active:scale-95 shadow-sm hover:shadow-md"
          >
            <span className="font-medium text-sm">Download Resume</span>
            <Download className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
