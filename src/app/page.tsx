"use client";

import { useState, useEffect } from "react";
import Background from "@/components/ui/Background";
import CustomCursor from "@/components/ui/CustomCursor";
import FloatingNav from "@/components/ui/FloatingNav";
import CommandPalette from "@/components/ui/CommandPalette";
import BootSequence from "@/components/sections/BootSequence";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechGalaxy from "@/components/sections/TechGalaxy";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import GithubActivity from "@/components/sections/GithubActivity";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Lenis from "lenis";

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

import { AnimatePresence } from "framer-motion";

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
          <TechGalaxy />
          <Skills />
          <Projects />
          <Journey />
          <GithubActivity />
          <Contact />
          
          <footer className="py-8 border-t border-white/10 bg-[#050505] text-center font-mono text-sm text-gray-500">
            <p className="mb-2">{"> Built with Next.js + Tailwind + Framer Motion"}</p>
            <p>{"> Designed & Developed by Fayis Kanthapuram"}</p>
          </footer>
        </main>
      )}
    </AnimatePresence>
  );
}
