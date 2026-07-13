"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Mobiverse",
    description: "A comprehensive e-commerce platform built with EJS and modern web technologies, providing a seamless shopping experience for mobile devices.",
    tech: ["EJS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/FayisKanthapuram/Mobiverse",
    live: "#",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-cyan-500/50"
  },
  {
    title: "Diamond Pappadam ERP",
    description: "An enterprise resource planning solution designed specifically for Diamond Pappadam, managing inventory, sales, and distribution seamlessly.",
    tech: ["JavaScript", "React", "Node.js", "MongoDB"],
    github: "https://github.com/FayisKanthapuram/Diamond-Pappadam",
    live: "https://diamond-pappadam.vercel.app",
    color: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50"
  },
  {
    title: "ZyraGo",
    description: "A dual-repository system containing frontend and backend for a modern, scalable web application leveraging TypeScript and microservice concepts.",
    tech: ["TypeScript", "Next.js", "Node.js", "Express"],
    github: "https://github.com/FayisKanthapuram/ZyraGo-frontend",
    live: "#",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50"
  },
  {
    title: "Next-Gen SaaS Platform",
    description: "Currently engineering a high-performance SaaS application utilizing AI integrations and scalable infrastructure to solve complex user workflows.",
    tech: ["React", "Next.js", "AI APIs", "AWS"],
    github: "#",
    live: "#",
    color: "from-orange-500/20 to-red-500/20",
    border: "group-hover:border-orange-500/50"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex items-center justify-between"
        >
          <div>
            <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-purple-neon)] to-transparent mb-4" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Featured<span className="text-[var(--color-purple-neon)]">.Projects</span></h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group glass-panel rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 ${project.border} relative`}
            >
              {/* Animated Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              <div className="p-8 relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex gap-3">
                    {project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                        <FaGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.live !== "#" && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[var(--color-electric)] transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-full border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
