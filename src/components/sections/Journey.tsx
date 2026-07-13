"use client";

import { motion } from "framer-motion";

const milestones = [
  { year: "2021", title: "Started Programming", desc: "Wrote my first lines of code in C, discovering a passion for logic and problem solving." },
  { year: "2022", title: "Learned JavaScript", desc: "Transitioned to the web, mastering JS fundamentals and DOM manipulation." },
  { year: "2023", title: "Built MERN Apps", desc: "Developed full-stack capabilities with React, Node, Express, and MongoDB." },
  { year: "2024", title: "System Design & Deployment", desc: "Focused on scalable architectures, AWS, Docker, and CI/CD pipelines." },
  { year: "Future", title: "AI & SaaS Development", desc: "Exploring AI integration, next-gen SaaS platforms, and distributed systems." },
];

export default function Journey() {
  return (
    <section id="journey" className="py-32 relative z-10 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-emerald-neon)] to-[var(--color-cyan-neon)]">Journey</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Glowing Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-emerald-neon)] via-[var(--color-cyan-neon)] to-[var(--color-purple-neon)] md:-translate-x-1/2 rounded-full opacity-30" />

          {/* Animated Line filling up */}
          <motion.div 
            className="absolute left-[28px] md:left-1/2 top-0 w-1 bg-gradient-to-b from-[var(--color-emerald-neon)] to-[var(--color-cyan-neon)] md:-translate-x-1/2 rounded-full shadow-[0_0_15px_var(--color-emerald-neon)]"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <div className="flex flex-col gap-12 relative">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`flex-1 w-full pl-16 md:pl-0 ${idx % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <h3 className="text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.desc}</p>
                </div>
                
                {/* Node */}
                <div className="absolute left-0 md:relative md:left-auto w-14 h-14 rounded-full bg-black border-2 border-[var(--color-electric)] flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-electric)]/20 flex items-center justify-center text-xs font-bold text-white">
                    {milestone.year === "Future" ? "∞" : milestone.year.slice(2)}
                  </div>
                </div>

                <div className={`flex-1 hidden md:block ${idx % 2 === 0 ? "text-right" : "text-left"}`}>
                  <span className="text-5xl font-black text-white/5">{milestone.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
