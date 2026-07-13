"use client";

import { motion } from "framer-motion";
import { GitCommit, GitPullRequest, GitBranch, Star } from "lucide-react";

export default function GithubActivity() {
  // Mock contribution data for a rich heatmap
  const generateContributions = () => {
    const days = [];
    for (let i = 0; i < 365; i++) {
      const level = Math.random() > 0.8 ? Math.floor(Math.random() * 4) : 0;
      days.push(level);
    }
    return days;
  };

  const contributions = generateContributions();

  return (
    <section id="github" className="py-24 relative z-10 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex items-center justify-end text-right"
        >
          <div>
            <div className="w-12 h-1 bg-gradient-to-l from-[#2ea043] to-transparent mb-4 ml-auto" />
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">GitHub<span className="text-[#2ea043]">.Activity</span></h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-panel p-6 rounded-2xl border border-white/5"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white">
              <GitCommit className="w-5 h-5 text-[#2ea043]" /> Contribution Heatmap
            </h3>
            
            <div className="overflow-x-auto pb-4 scrollbar-hide">
              <div className="flex gap-1 min-w-[800px]">
                {Array.from({ length: 52 }).map((_, weekIdx) => (
                  <div key={weekIdx} className="flex flex-col gap-1">
                    {Array.from({ length: 7 }).map((_, dayIdx) => {
                      const level = contributions[weekIdx * 7 + dayIdx] || 0;
                      const colors = [
                        "bg-[#161b22] border border-white/5",
                        "bg-[#0e4429]",
                        "bg-[#006d32]",
                        "bg-[#26a641]",
                        "bg-[#39d353]",
                      ];
                      return (
                        <motion.div
                          key={dayIdx}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "-10%" }}
                          transition={{ delay: (weekIdx * 7 + dayIdx) * 0.002 }}
                          className={`w-3 h-3 rounded-sm ${colors[level]} hover:ring-1 hover:ring-white/50 transition-all cursor-pointer`}
                          title={`${level * 3} contributions`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {[
              { label: "Total Commits", value: "1,245", icon: GitCommit, color: "text-[#2ea043]" },
              { label: "Pull Requests", value: "142", icon: GitPullRequest, color: "text-blue-400" },
              { label: "Repositories", value: "17", icon: GitBranch, color: "text-purple-400" },
              { label: "Stars Earned", value: "1", icon: Star, color: "text-yellow-400" },
            ].map((stat, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-xl border border-white/5 flex items-center gap-4 hover:border-white/20 transition-colors group cursor-default">
                <div className={`p-4 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
