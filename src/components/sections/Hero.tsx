"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, ChevronRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "JavaScript Engineer",
  "Problem Solver",
  "Building Scalable Web Apps",
  "Continuous Learner"
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-emerald-neon)] animate-pulse" />
            <span className="text-sm text-gray-300">Available for new opportunities</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6"
          >
            FAYIS <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-purple-neon)]">
              KANTHAPURAM
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-12 flex items-center justify-center mb-10"
          >
            <p className="text-xl md:text-3xl text-gray-400 font-light">
              I am a{" "}
              <span className="font-semibold text-white relative">
                {roles[currentRole]}
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-[var(--color-electric)]"
                  layoutId="role-underline"
                />
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Explore Projects <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a href="/resume.pdf" target="_blank" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2 font-medium">
              <Download className="w-4 h-4" /> Download Resume
            </a>
            
            <div className="flex items-center gap-3 ml-2">
              <a href="https://github.com/FayisKanthapuram" target="_blank" rel="noreferrer" className="p-4 rounded-full border border-white/20 hover:bg-white/10 hover:text-[var(--color-electric)] transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/fayis-kanthapuram/" target="_blank" rel="noreferrer" className="p-4 rounded-full border border-white/20 hover:bg-white/10 hover:text-[var(--color-electric)] transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
