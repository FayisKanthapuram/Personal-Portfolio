"use client";

import { motion } from "framer-motion";
import { Terminal, Code, Cpu, Shield, Zap } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Built", value: "20+" },
    { label: "Repositories", value: "17" },
    { label: "Technologies", value: "15+" }
  ];

  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/5 bg-[#050505]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex items-center gap-4"
        >
          <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-electric)] to-transparent" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">System<span className="text-[var(--color-electric)]">.Identity</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Developer Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel p-8 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Terminal className="w-24 h-24 text-[var(--color-electric)]" />
            </div>
            
            <h3 className="text-2xl font-semibold mb-4 text-white">Developer Profile</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I am a passionate MERN Stack Developer who enjoys solving real-world problems and building production-ready applications. I thrive on architecting scalable backend systems, designing intuitive user interfaces, and writing clean, maintainable code. Whether it's optimizing database queries or creating seamless frontend interactions, I am driven by the impact technology can make.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="bg-black/50 p-4 rounded-xl border border-white/5">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Core Values / Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center gap-6"
          >
            {[
              { icon: Cpu, title: "Scalable Architecture", desc: "Building systems that can handle growth effortlessly." },
              { icon: Zap, title: "High Performance", desc: "Optimizing every byte for lightning-fast load times." },
              { icon: Code, title: "Clean Code", desc: "Writing maintainable, readable, and robust codebases." },
              { icon: Shield, title: "Secure Systems", desc: "Implementing best practices for application security." }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="p-3 bg-[var(--color-electric)]/10 text-[var(--color-electric)] rounded-lg">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
