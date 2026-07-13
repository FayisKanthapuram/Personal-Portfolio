"use client";

import { motion } from "framer-motion";
import { Send, Terminal, Key, MapPin, Mail, FileText, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormState({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please make sure your .env variables are configured properly.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative z-10 bg-[#050505] border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="w-12 h-1 bg-gradient-to-r from-[var(--color-electric)] to-transparent mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric)] to-[var(--color-purple-neon)]">Connection</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">Open a secure channel to my inbox or connect with me via social networks.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-2xl border border-white/5"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[var(--color-electric)]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono">Email</p>
                    <a href="mailto:fayiskanthapuram@gmail.com" className="text-gray-300 hover:text-white transition-colors">fayiskanthapuram@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-[var(--color-purple-neon)]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-mono">Location</p>
                    <p className="text-gray-300">Kerala, India</p>
                  </div>
                </div>

                <div className="w-full h-px bg-white/10 my-2" />

                <div className="flex items-center gap-4">
                  <a href="https://github.com/FayisKanthapuram" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 hover:bg-white/10 transition-colors rounded-xl flex items-center justify-center text-gray-400 hover:text-white">
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/fayis-kanthapuram/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 hover:bg-white/10 transition-colors rounded-xl flex items-center justify-center text-gray-400 hover:text-[var(--color-electric)]">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a href="https://x.com/FKanthapuram" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white/5 hover:bg-white/10 transition-colors rounded-xl flex items-center justify-center text-gray-400 hover:text-[var(--color-electric)]">
                    <FaXTwitter className="w-5 h-5" />
                  </a>
                  <a href="/resume.pdf" target="_blank" className="h-12 px-4 bg-white/5 hover:bg-white/10 transition-colors rounded-xl flex items-center justify-center text-gray-400 hover:text-white gap-2 text-sm font-medium">
                    <FileText className="w-4 h-4" /> Resume
                  </a>
                </div>

                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] text-sm w-fit">
                  <CheckCircle className="w-4 h-4" />
                  Available for new opportunities
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-1 rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,240,255,0.05)] relative overflow-hidden h-full"
            >
              {/* Terminal Header */}
              <div className="bg-black/50 px-4 py-3 border-b border-white/5 flex items-center gap-2 rounded-t-xl">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-xs font-mono text-gray-400 flex items-center gap-2">
                  <Terminal className="w-3 h-3" /> payload.sh
                </span>
              </div>

              <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-6 relative z-10 bg-black/40 h-[calc(100%-45px)]">
                <div className="flex flex-col gap-2 group">
                  <label className="text-xs font-mono text-[var(--color-electric)] uppercase tracking-wider flex items-center gap-2">
                    <Key className="w-3 h-3" /> Identity
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="John Doe"
                    className="bg-transparent border-b border-white/10 px-0 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-electric)] transition-colors font-mono"
                  />
                </div>

                <div className="flex flex-col gap-2 group">
                  <label className="text-xs font-mono text-[var(--color-electric)] uppercase tracking-wider flex items-center gap-2">
                    <Key className="w-3 h-3" /> Origin (Email)
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="john@example.com"
                    className="bg-transparent border-b border-white/10 px-0 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-electric)] transition-colors font-mono"
                  />
                </div>

                <div className="flex flex-col gap-2 group flex-grow">
                  <label className="text-xs font-mono text-[var(--color-electric)] uppercase tracking-wider flex items-center gap-2">
                    <Key className="w-3 h-3" /> Payload (Message)
                  </label>
                  <textarea
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Initiating handshake..."
                    className="bg-transparent border-b border-white/10 px-0 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-electric)] transition-colors font-mono resize-none h-full min-h-[100px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="mt-4 relative group overflow-hidden rounded-lg bg-[var(--color-electric)]/10 border border-[var(--color-electric)]/50 px-8 py-4 text-[var(--color-electric)] font-mono uppercase tracking-widest transition-all hover:bg-[var(--color-electric)] hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      "Transmitting..."
                    ) : isSubmitted ? (
                      "Transmission Successful"
                    ) : (
                      <>
                        Transmit Data <Send className="w-4 h-4" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
