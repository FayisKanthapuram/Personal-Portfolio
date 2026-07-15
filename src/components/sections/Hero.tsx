"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, ChevronRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Image from "next/image";

const roles = [
  "MERN Stack Developer",
  "Full Stack Developer",
  "React & Node Specialist",
  "Building Scalable Apps"
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  // Mouse Parallax values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window !== "undefined") {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth) * 2 - 1);
      mouseY.set((clientY / innerHeight) * 2 - 1);
    }
  };

  // Transform values for parallax effect
  const x1 = useTransform(mouseX, [-1, 1], [-20, 20]);
  const y1 = useTransform(mouseY, [-1, 1], [-20, 20]);
  const x2 = useTransform(mouseX, [-1, 1], [-40, 40]);
  const y2 = useTransform(mouseY, [-1, 1], [-40, 40]);
  
  // 3D Tilt
  const rotateX = useTransform(mouseY, [-1, 1], [4, -4]);
  const rotateY = useTransform(mouseX, [-1, 1], [-4, 4]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-20">
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
              FAYIS <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-purple-neon)]">
                KANTHAPURAM
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col items-center lg:items-start justify-center lg:justify-start mb-10"
            >
              <p className="text-base md:text-lg text-gray-400 font-light mb-4 max-w-lg">
                I build scalable, modern, and high-performance full-stack web applications using React, Node.js, Express, MongoDB, and TypeScript.
              </p>
              <p className="text-xl md:text-3xl text-gray-400 font-light">
                I am a{" "}
                <span className="font-semibold text-white relative inline-block">
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
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                  View Projects <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a href="/resume.pdf" target="_blank" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2 font-medium">
                <Download className="w-4 h-4" /> Download Resume
              </a>

              <a href="#contact" className="px-8 py-4 rounded-full border border-transparent bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-2 font-medium">
                Contact Me
              </a>
              
              <div className="flex items-center gap-3 lg:ml-2">
                <a href="https://github.com/FayisKanthapuram" target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="p-4 rounded-full border border-white/20 hover:bg-white/10 hover:text-[var(--color-electric)] transition-colors">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/fayis-kanthapuram/" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="p-4 rounded-full border border-white/20 hover:bg-white/10 hover:text-[var(--color-electric)] transition-colors">
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a href="https://x.com/FKanthapuram" target="_blank" rel="noreferrer" aria-label="X (Twitter) Profile" className="p-4 rounded-full border border-white/20 hover:bg-white/10 hover:text-[var(--color-electric)] transition-colors">
                  <FaXTwitter className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: B&W Cinematic Portrait */}
          <div className="flex items-end justify-center perspective-1000 w-full h-[500px] lg:h-[700px] relative">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              style={{ rotateX, rotateY }}
              className="relative w-full max-w-[600px] h-full transform-style-3d pointer-events-none flex items-end justify-center"
            >
              {/* Animated Glow Behind Image */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[70%] h-[70%] bg-gradient-to-tr from-[var(--color-electric)] to-[var(--color-purple-neon)] rounded-full blur-[80px] -z-10" 
              />
              
              {/* Floating Developer Particles */}
              <motion.div style={{ x: x2, y: y2 }} className="absolute inset-0 pointer-events-none z-10">
                <motion.div 
                  animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[10%] left-[5%] text-[var(--color-electric)] opacity-60 font-mono text-sm"
                >
                  {"<React />"}
                </motion.div>
                <motion.div 
                  animate={{ y: [15, -15, 15], rotate: [0, -10, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-[20%] right-[5%] text-[var(--color-purple-neon)] opacity-60 font-mono text-sm"
                >
                  {"{ code: alive }"}
                </motion.div>
                <motion.div 
                  animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[40%] right-[-5%] text-[#2ea043] opacity-50 font-mono text-xs hidden md:block"
                >
                  {"git commit -m 'init'"}
                </motion.div>
              </motion.div>

              {/* The Cinematic B&W Portrait */}
              <motion.div 
                style={{ x: x1, y: y1 }}
                className="relative w-full h-full z-20 flex items-end justify-center"
              >
                <div className="relative w-full h-full drop-shadow-[0_0_20px_rgba(0,240,255,0.1)]" style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}>
                  <Image
                    src="/hero-processed.png"
                    alt="Fayis Kanthapuram - MERN Stack Developer"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain object-bottom"
                  />
                </div>

                {/* Cinematic Overlays (Rim Lighting & Glows) */}
                <div className="absolute inset-0 z-30 mix-blend-overlay opacity-80 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}>
                  {/* Left Cyan Rim */}
                  <div className="absolute inset-y-0 left-[10%] w-[30%] bg-gradient-to-r from-[var(--color-electric)] to-transparent" />
                  {/* Right Purple Rim */}
                  <div className="absolute inset-y-0 right-[10%] w-[30%] bg-gradient-to-l from-[var(--color-purple-neon)] to-transparent" />
                  {/* Laptop Screen Glow (Bottom Up) */}
                  <div className="absolute bottom-0 inset-x-0 h-[40%] bg-gradient-to-t from-[var(--color-electric)] to-transparent" />
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
