"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Code, Briefcase, Mail, Command } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "GitHub", href: "#github", icon: FaGithub },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Determine active section
      const sections = navItems.map((item) => item.name.toLowerCase());
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-panel rounded-full px-6 py-3 flex items-center gap-2 md:gap-4 shadow-[0_0_20px_rgba(0,240,255,0.1)]"
        >
          {/* F< Logo */}
          <div className="flex items-center cursor-pointer mr-2 pr-4 border-r border-white/10 hidden md:flex" onClick={() => scrollTo('#home')}>
            <span className="text-xl font-black text-[var(--color-electric)] tracking-tighter">F</span>
            <span className="text-xl font-black text-[var(--color-purple-neon)] tracking-tighter">&lt;</span>
          </div>
          
          {navItems.map((item) => {
            const isActive = activeSection === item.name.toLowerCase();
            return (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className="relative px-3 py-2 text-sm font-medium transition-colors group"
                aria-label={item.name}
              >
                <span className={cn(
                  "relative z-10 flex items-center gap-2",
                  isActive ? "text-white" : "text-gray-400 group-hover:text-white"
                )}>
                  <item.icon className="w-4 h-4 md:hidden" />
                  <span className="hidden md:inline-block">{item.name}</span>
                </span>
                
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {isActive && (
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--color-electric)] rounded-full text-glow-electric" />
                )}
              </button>
            );
          })}
          
          <div className="w-px h-6 bg-white/20 mx-2" />
          
          <button 
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 group"
            onClick={() => {
              window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }));
            }}
            title="Command Palette (Ctrl+K)"
          >
            <Command className="w-4 h-4 text-gray-400 group-hover:text-white" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
