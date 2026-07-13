"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "React", orbit: 1, speed: 15, delay: 0 },
  { name: "Next.js", orbit: 1, speed: 15, delay: 7.5 },
  { name: "Node.js", orbit: 2, speed: 25, delay: 0 },
  { name: "Express", orbit: 2, speed: 25, delay: 8.3 },
  { name: "MongoDB", orbit: 2, speed: 25, delay: 16.6 },
  { name: "TypeScript", orbit: 3, speed: 35, delay: 0 },
  { name: "JavaScript", orbit: 3, speed: 35, delay: 8.75 },
  { name: "Tailwind CSS", orbit: 3, speed: 35, delay: 17.5 },
  { name: "Redux", orbit: 3, speed: 35, delay: 26.25 },
  { name: "Git", orbit: 4, speed: 45, delay: 0 },
  { name: "Docker", orbit: 4, speed: 45, delay: 11.25 },
  { name: "AWS", orbit: 4, speed: 45, delay: 22.5 },
  { name: "Linux", orbit: 4, speed: 45, delay: 33.75 },
  { name: "Firebase", orbit: 5, speed: 55, delay: 0 },
];

export default function TechGalaxy() {
  return (
    <section id="skills" className="py-32 relative z-10 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cyan-neon)] to-[var(--color-purple-neon)]">Galaxy</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My technology stack orbits around modern, scalable, and efficient tools.
          </p>
        </motion.div>

        <div className="relative w-full max-w-4xl mx-auto aspect-square flex items-center justify-center mt-20">
          {/* Central Sun/Core */}
          <div className="absolute w-24 h-24 bg-[var(--color-electric)] rounded-full blur-[50px] animate-pulse"></div>
          <div className="absolute w-20 h-20 bg-white rounded-full flex items-center justify-center font-bold text-black z-50 shadow-[0_0_30px_var(--color-electric)]">
            Core
          </div>

          {/* Orbits */}
          {[1, 2, 3, 4, 5].map((orbitNum) => (
            <div
              key={orbitNum}
              className="absolute rounded-full border border-white/5"
              style={{
                width: `${orbitNum * 140 + 80}px`,
                height: `${orbitNum * 140 + 80}px`,
              }}
            />
          ))}

          {/* Technologies */}
          {technologies.map((tech, i) => {
            const radius = (tech.orbit * 140 + 80) / 2;
            
            return (
              <motion.div
                key={i}
                className="absolute"
                animate={{ rotate: 360 }}
                transition={{
                  duration: tech.speed,
                  repeat: Infinity,
                  ease: "linear",
                  delay: -tech.delay
                }}
                style={{
                  width: `${radius * 2}px`,
                  height: `${radius * 2}px`,
                }}
              >
                <div
                  className="absolute left-1/2 -top-5 -translate-x-1/2 group cursor-pointer"
                  style={{ transformOrigin: "center center" }}
                >
                  <motion.div 
                    className="relative flex items-center justify-center px-4 py-2 bg-black/80 backdrop-blur-md border border-white/20 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: tech.speed,
                      repeat: Infinity,
                      ease: "linear",
                      delay: -tech.delay
                    }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 240, 255, 0.1)', borderColor: 'rgba(0, 240, 255, 0.5)' }}
                  >
                    <span className="text-white text-sm whitespace-nowrap">{tech.name}</span>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
