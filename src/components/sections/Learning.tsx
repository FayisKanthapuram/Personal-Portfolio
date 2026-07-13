"use client";

import { motion } from "framer-motion";
import { BookOpen, Box, Cloud, Network } from "lucide-react";

const learningItems = [
  {
    title: "System Design",
    description: "Studying scalable architectures, load balancing, and distributed systems for handling high traffic.",
    icon: Network,
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    title: "Docker",
    description: "Containerizing applications for consistent development environments and seamless deployments.",
    icon: Box,
    color: "from-blue-400/20 to-cyan-400/20"
  },
  {
    title: "AWS",
    description: "Exploring cloud infrastructure, EC2, S3, and serverless architectures for scalable hosting.",
    icon: Cloud,
    color: "from-orange-500/20 to-yellow-500/20"
  },
  {
    title: "Scalable Backend",
    description: "Learning microservices, message queues (RabbitMQ/Kafka), and advanced caching strategies.",
    icon: BookOpen,
    color: "from-purple-500/20 to-pink-500/20"
  }
];

export default function Learning() {
  return (
    <section className="py-24 relative z-10 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Currently <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Learning</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {learningItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-8 rounded-2xl border border-white/5 relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
