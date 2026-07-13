"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Background from "@/components/ui/Background";
import CustomCursor from "@/components/ui/CustomCursor";
import FloatingNav from "@/components/ui/FloatingNav";
import CommandPalette from "@/components/ui/CommandPalette";
import BootSequence from "@/components/sections/BootSequence";
import Hero from "@/components/sections/Hero";
import Lenis from "lenis";
import { AnimatePresence } from "framer-motion";

// Lazy load sections below the fold for better performance
const About = dynamic(() => import("@/components/sections/About"), { ssr: false });
const Skills = dynamic(() => import("@/components/sections/Skills"), { ssr: false });
const Learning = dynamic(() => import("@/components/sections/Learning"), { ssr: false });
const Projects = dynamic(() => import("@/components/sections/Projects"), { ssr: false });
const Journey = dynamic(() => import("@/components/sections/Journey"), { ssr: false });
const GithubActivity = dynamic(() => import("@/components/sections/GithubActivity"), { ssr: false });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: false });

export default function Home() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    if (!booting) {
      // Initialize smooth scrolling
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, [booting]);

  return (
    <>
      <CustomCursor />
      <AnimatePresenceWrapper booting={booting} setBooting={setBooting} />
    </>
  );
}

function AnimatePresenceWrapper({ booting, setBooting }: { booting: boolean; setBooting: (b: boolean) => void }) {
  return (
    <AnimatePresence mode="wait">
      {booting ? (
        <BootSequence key="boot" onComplete={() => setBooting(false)} />
      ) : (
        <main key="main" className="relative w-full">
          <Background />
          <FloatingNav />
          <CommandPalette />
          
          <Hero />
          <About />
          <Skills />
          <Learning />
          <Projects />
          <Journey />
          <GithubActivity />
          <Contact />
          
          <footer className="py-8 border-t border-white/10 bg-[#050505] flex flex-col items-center justify-center font-mono text-sm text-gray-500">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
              <div className="flex items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <span className="text-xl font-black text-[var(--color-electric)] tracking-tighter">F</span>
                <span className="text-xl font-black text-[var(--color-purple-neon)] tracking-tighter">&lt;</span>
              </div>
            </div>
            <p className="mb-2">{"> Built with Next.js + Tailwind + Framer Motion"}</p>
            <p>{"> Designed & Developed by Fayis Kanthapuram"}</p>
          </footer>
        </main>
      )}
    </AnimatePresence>
  );
}
