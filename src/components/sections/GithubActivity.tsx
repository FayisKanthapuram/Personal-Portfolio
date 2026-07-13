"use client";

import { motion } from "framer-motion";
import { GitCommit, GitPullRequest, GitBranch, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { GitHubCalendar } from 'react-github-calendar';

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  public_gists: number;
}

export default function GithubActivity() {
  const [stats, setStats] = useState<GitHubStats | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/FayisKanthapuram')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(console.error);
  }, []);

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
            className="lg:col-span-2 glass-panel p-6 rounded-2xl border border-white/5 flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white">
              <GitCommit className="w-5 h-5 text-[#2ea043]" /> Contribution Heatmap
            </h3>
            
            <div className="overflow-x-auto pb-4 scrollbar-hide flex-1 flex items-center justify-center">
              <div className="min-w-[700px] text-white">
                <GitHubCalendar 
                  username="FayisKanthapuram"
                  colorScheme="dark"
                  theme={{
                    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
                  }}
                  blockSize={12}
                  blockMargin={4}
                  fontSize={14}
                />
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
              { label: "Repositories", value: stats?.public_repos !== undefined ? stats.public_repos : "...", icon: GitBranch, color: "text-[#2ea043]" },
              { label: "Followers", value: stats?.followers !== undefined ? stats.followers : "...", icon: Star, color: "text-blue-400" },
              { label: "Following", value: stats?.following !== undefined ? stats.following : "...", icon: GitPullRequest, color: "text-purple-400" },
              { label: "Gists", value: stats?.public_gists !== undefined ? stats.public_gists : "...", icon: GitCommit, color: "text-yellow-400" },
            ].map((stat, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-xl border border-white/5 flex items-center gap-4 hover:border-white/20 transition-colors group cursor-default flex-1">
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
