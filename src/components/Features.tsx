import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { WordsPullUpMultiStyle } from "./WordsPullUpMultiStyle";

const featureData = [
  {
    type: "video",
    title: "Interactive Experiences.",
    src: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4",
  },
  {
    type: "project",
    title: "Stock Portfolio Advisor",
    link: "https://github.com/phonethantzaw/stock-portfolio-advisor",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85",
    items: [
      "AI-powered portfolio recommendations",
      "Next.js, Tailwind, Shadcn UI frontend",
      "Spring Boot & PostgreSQL backend",
      "Keycloak OAuth2 Authentication",
    ],
  },
  {
    type: "project",
    title: "Finex AI",
    link: "https://github.com/phonethantzaw/finexai",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85",
    items: [
      "RAG financial assistant (Gemini 2.5)",
      "React 19 & TypeScript SPA",
      "Java 21, Spring AI integrations",
      "pgvector & Ollama embeddings",
    ],
  },
];

export function Features() {
  const headerSegments = [
    { text: "Featured Projects. ", className: "text-[#DEDBC8]" },
    { text: "Built for performance. Powered by AI.", className: "text-gray-500" },
  ];

  return (
    <section id="projects" className="min-h-screen bg-black relative p-4 md:p-6 pb-20 scroll-mt-10">
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="mb-12 md:mb-16 mt-10 md:mt-0 px-4 md:px-0">
          <WordsPullUpMultiStyle 
            segments={headerSegments} 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal !justify-start text-left" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-2 md:gap-4 lg:h-[480px]">
          {featureData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full min-h-[350px] lg:min-h-0"
            >
              {card.type === "video" ? (
                <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={card.src} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 pointer-events-none"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[#E1E0CC] text-lg font-medium">{card.title}</p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full bg-[#111111] border border-white/5 rounded-2xl p-8 flex flex-col hover:bg-[#161616] hover:border-white/10 transition-all duration-300 shadow-sm hover:shadow-md">
                  <div className="flex justify-between items-start mb-10">
                    <img src={card.icon} alt={card.title} className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover" />
                  </div>
                  
                  <h3 className="text-[#DEDBC8] text-lg font-medium mb-6">{card.title}</h3>
                  
                  <ul className="space-y-4 mb-auto flex-grow">
                    {card.items?.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-gray-400 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={card.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group mt-8 w-fit cursor-pointer">
                    <span className="text-[#DEDBC8] text-sm group-hover:text-white transition-colors">View on Github</span>
                    <ArrowRight className="w-4 h-4 text-[#DEDBC8] group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
