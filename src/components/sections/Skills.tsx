"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "from-[var(--color-electric)]"
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "NestJS"],
    color: "from-[#00ff66]"
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Redis"],
    color: "from-[#47A248]"
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "AWS", "Vercel", "Postman"],
    color: "from-[var(--color-purple-neon)]"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-electric)] to-transparent mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-cyan-neon)]">Stack</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-8 rounded-2xl border border-white/5 relative overflow-hidden group"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color} to-transparent opacity-50`} />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-xl text-gray-300 group-hover:text-white transition-colors">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 text-sm font-medium text-gray-400 bg-white/5 rounded-lg border border-white/5 hover:border-white/20 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
