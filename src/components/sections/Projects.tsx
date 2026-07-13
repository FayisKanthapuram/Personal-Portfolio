"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, Server, Layout, Database } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "Mobiverse",
    description: "A comprehensive e-commerce platform providing a seamless shopping experience for mobile devices.",
    features: [
      "Built a complete MVC architecture using Node.js and Express",
      "Implemented secure JWT authentication and role-based access",
      "Integrated Razorpay payment gateway for seamless checkouts",
      "Designed dynamic responsive UI with EJS and Tailwind CSS"
    ],
    tech: ["EJS", "Node.js", "Express", "MongoDB", "Razorpay"],
    github: "https://github.com/FayisKanthapuram/Mobiverse",
    live: "#",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-cyan-500/50"
  },
  {
    title: "Diamond Pappadam ERP",
    description: "An enterprise resource planning solution managing inventory, sales, and distribution seamlessly.",
    features: [
      "Developed an interactive sales dashboard with real-time analytics",
      "Engineered inventory management with automated stock alerts",
      "Built a secure multi-tenant backend architecture",
      "Optimized database queries in MongoDB for large datasets"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    github: "https://github.com/FayisKanthapuram/Diamond-Pappadam",
    live: "https://diamond-pappadam.vercel.app",
    color: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50"
  },
  {
    title: "ZyraGo",
    description: "A scalable dual-repository web application leveraging TypeScript and microservice concepts.",
    features: [
      "Architected a scalable frontend using Next.js and TypeScript",
      "Implemented a robust REST API with Express and strict typings",
      "Configured secure cross-origin resource sharing (CORS)",
      "Deployed frontend to Vercel and backend to AWS EC2"
    ],
    tech: ["TypeScript", "Next.js", "Node.js", "Express", "AWS"],
    github: "https://github.com/FayisKanthapuram/ZyraGo-frontend",
    live: "#",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50"
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

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group glass-panel rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 ${project.border} relative`}
            >
              {/* Animated Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
              
              <div className="flex flex-col lg:flex-row h-full relative z-10">
                
                {/* Project Image Placeholder */}
                <div className="lg:w-5/12 relative min-h-[250px] lg:min-h-full bg-white/5 border-b lg:border-b-0 lg:border-r border-white/5 overflow-hidden flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <Layout className="w-16 h-16 text-white/20 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span key={i} className="px-2 py-1 text-[10px] font-bold text-white uppercase tracking-wider bg-black/50 backdrop-blur-md rounded border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:w-7/12 p-8 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      {project.github !== "#" && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors" aria-label="View Source">
                          <FaGithub className="w-4 h-4" />
                        </a>
                      )}
                      {project.live !== "#" && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-[var(--color-electric)]/10 hover:bg-[var(--color-electric)]/20 text-[var(--color-electric)] transition-colors" aria-label="View Live Site">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-8 flex-grow">
                    <h4 className="text-sm font-semibold text-white mb-3 tracking-wider flex items-center gap-2">
                      <Server className="w-4 h-4 text-[var(--color-electric)]" /> Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-[var(--color-purple-neon)] mt-1">▹</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-full border border-white/10 hover:border-white/20 transition-colors cursor-default">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
