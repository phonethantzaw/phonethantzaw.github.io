import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About Me", href: "#about" },
    { label: "Projects", href: "#projects" },
  ];

  return (
    <section className="h-screen w-full p-4 md:p-6 bg-black">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4" type="video/mp4" />
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none"></div>

        {/* Navbar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-full max-w-max">
          <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 flex items-center justify-center gap-6 sm:gap-8 md:gap-14 lg:gap-16">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-xs sm:text-sm md:text-base font-medium whitespace-nowrap transition-colors duration-300"
                style={{ color: "rgba(225, 224, 204, 0.8)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(225, 224, 204, 0.8)")}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 w-full p-6 md:p-10 z-10">
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-12 md:col-span-8">
            </div>

            <div className="col-span-12 md:col-span-4 flex flex-col items-start md:items-end justify-end mb-4 md:mb-10 text-left md:text-right gap-6">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.2] max-w-sm"
              >
                I am a Java Fullstack Developer dedicated to building scalable backend integration systems, robust AI pipelines, and visually engaging frontend applications.
              </motion.p>

              <motion.a
                href="#about"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center w-fit bg-[#DEDBC8] text-black rounded-full pl-6 pr-2 py-2 gap-3 hover:bg-white transition-all duration-300 hover:pr-3 cursor-pointer shadow-sm hover:shadow-md"
              >
                <span className="font-medium text-sm sm:text-base whitespace-nowrap">View my profile</span>
                <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:bg-[#1a1a1a]">
                  <ArrowRight className="text-[#DEDBC8] w-4 h-4 sm:w-5 sm:h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
