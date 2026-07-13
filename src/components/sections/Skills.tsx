"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", level: 90, projects: 12, color: "#00f0ff" },
  { name: "Node.js / Express", level: 85, projects: 15, color: "#00ff66" },
  { name: "MongoDB", level: 80, projects: 10, color: "#47A248" },
  { name: "TypeScript", level: 75, projects: 8, color: "#3178C6" },
  { name: "Tailwind CSS", level: 95, projects: 20, color: "#38bdf8" },
  { name: "Docker / AWS", level: 70, projects: 5, color: "#FF9900" },
];

export default function Skills() {
  return (
    <section className="py-24 relative z-10 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Energy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-cyan-neon)]">Core</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, idx) => {
            const circumference = 2 * Math.PI * 40;
            const strokeDashoffset = circumference - (skill.level / 100) * circumference;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
                className="relative group flex flex-col items-center"
              >
                <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                  {/* Background Circle */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="40"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="6"
                      fill="transparent"
                    />
                    {/* Progress Circle */}
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="40"
                      stroke={skill.color}
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      whileInView={{ strokeDashoffset }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 + idx * 0.1 }}
                      className="drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-2xl font-bold text-white">{skill.level}%</span>
                  </div>
                </div>

                <h4 className="text-lg font-medium text-white mb-1 text-center">{skill.name}</h4>
                
                {/* Hover Details */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 border border-white/20 px-4 py-2 rounded-lg text-sm text-gray-300 pointer-events-none whitespace-nowrap z-20 backdrop-blur-md">
                  Used in {skill.projects} projects
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/90"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
