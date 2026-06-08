"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export default function ContactSection() {
  // Stagger variants for the headline text words
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", damping: 20, stiffness: 100 }
    },
  };

  return (
    <section id="contact" className="w-full min-h-screen bg-[#080808] flex flex-col justify-between border-t border-[#1A1A1A]">
      
      {/* Top spacer just to balance flex-between layout */}
      <div className="pt-8 w-full shrink-0" />

      {/* Main Center Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-[4vw] py-16 md:py-24">
        
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2.5 mb-8 md:mb-10"
        >
          <div className="w-[6px] h-[6px] bg-[#22C55E] rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#555] font-semibold mt-0.5">
            AVAILABLE FOR WORK
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center font-bold leading-[1.05] tracking-tight text-[clamp(3rem,9vw,8rem)]"
        >
          <motion.span variants={wordVariants} className="block text-[#F5F5F5]">
            Got a project
          </motion.span>
          <motion.span variants={wordVariants} className="block text-[#A855F7] drop-shadow-[0_0_20px_rgba(168,85,247,0.15)]">
            in mind?
          </motion.span>
        </motion.h2>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 md:mt-8 text-center text-[#555] text-sm md:text-lg max-w-md leading-relaxed"
        >
          Tell me what you're building — I'll tell you if I can help.
        </motion.p>

        {/* CTA Button */}
        <motion.a 
          href="mailto:verel@email.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 100 }}
          className="mt-10 md:mt-12 px-8 py-3.5 md:px-10 md:py-4 rounded-full bg-[#A855F7] text-white font-medium text-sm md:text-base transition-all duration-300 hover:bg-[#9333EA] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-[1.02] active:scale-95"
        >
          Start a Conversation →
        </motion.a>
      </div>
    </section>
  );
}
