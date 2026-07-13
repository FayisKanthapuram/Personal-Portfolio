"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLogs = [
  "Initializing Developer Environment...",
  "Loading React Framework...",
  "Loading Node.js Runtime...",
  "Connecting to GitHub API...",
  "Reading LinkedIn Profile...",
  "Building Portfolio...",
  "Compiling Experience...",
  "Optimizing Performance...",
  "Portfolio Ready."
];

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [logs, setLogs] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      if (currentIndex < bootLogs.length) {
        setLogs((prev) => [...prev, bootLogs[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(onComplete, 800);
        }, 500);
      }
    }, 300);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] bg-black flex flex-col justify-center px-8 md:px-24 font-mono text-[var(--color-electric)]"
        >
          <div className="max-w-3xl w-full mx-auto">
            <div className="mb-8">
              <span className="text-white text-2xl font-bold tracking-widest">SYSTEM BOOT</span>
              <div className="w-full h-px bg-white/20 mt-4"></div>
            </div>
            
            <div className="flex flex-col gap-2">
              {logs.map((log, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-4"
                >
                  <span className="text-white/50">{`[${new Date().toISOString().split('T')[1].substring(0, 8)}]`}</span>
                  <span className={index === bootLogs.length - 1 ? "text-[var(--color-emerald-neon)] font-bold" : ""}>
                    {log}
                  </span>
                </motion.div>
              ))}
              
              {logs.length < bootLogs.length && (
                <motion.div
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-3 h-5 bg-[var(--color-electric)] mt-2"
                />
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
