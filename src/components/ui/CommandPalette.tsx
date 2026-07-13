"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Home, Code, Mail, User, Terminal, X, Music } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const commands = [
    { id: "home", title: "Go to Home", icon: Home, action: () => scrollTo("#home") },
    { id: "about", title: "Go to About", icon: User, action: () => scrollTo("#about") },
    { id: "projects", title: "Go to Projects", icon: Code, action: () => scrollTo("#projects") },
    { id: "contact", title: "Go to Contact", icon: Mail, action: () => scrollTo("#contact") },
    { id: "github", title: "View GitHub Profile", icon: FaGithub, action: () => window.open("https://github.com/FayisKanthapuram", "_blank") },
    { id: "terminal", title: "Toggle Terminal Mode", icon: Terminal, action: () => console.log("Terminal Mode Activated") },
    { id: "music", title: "Toggle Music", icon: Music, action: () => console.log("Music Toggled") },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(search.toLowerCase())
  );

  const scrollTo = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl bg-[#0a0a0a] border border-[#222] rounded-2xl shadow-2xl overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.1)]"
          >
            <div className="flex items-center px-4 py-3 border-b border-[#222]">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Type a command or search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500 text-lg"
                autoFocus
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded bg-[#222] text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="max-h-[60vh] overflow-y-auto p-2 scrollbar-hide">
              {filteredCommands.length > 0 ? (
                <div className="flex flex-col gap-1">
                  {filteredCommands.map((cmd) => (
                    <button
                      key={cmd.id}
                      onClick={cmd.action}
                      className="flex items-center px-4 py-3 rounded-xl hover:bg-[#1a1a1a] transition-colors group text-left w-full"
                    >
                      <cmd.icon className="w-5 h-5 text-gray-400 mr-4 group-hover:text-[var(--color-electric)] transition-colors" />
                      <span className="text-gray-300 group-hover:text-white font-medium">
                        {cmd.title}
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center text-gray-500">
                  No commands found for "{search}"
                </div>
              )}
            </div>
            
            <div className="px-4 py-3 border-t border-[#222] bg-[#050505] flex justify-between items-center text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <span><kbd className="bg-[#222] px-1.5 py-0.5 rounded text-gray-300 mr-1">↑</kbd><kbd className="bg-[#222] px-1.5 py-0.5 rounded text-gray-300">↓</kbd> to navigate</span>
                <span><kbd className="bg-[#222] px-1.5 py-0.5 rounded text-gray-300">Enter</kbd> to select</span>
              </div>
              <span><kbd className="bg-[#222] px-1.5 py-0.5 rounded text-gray-300">ESC</kbd> to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
