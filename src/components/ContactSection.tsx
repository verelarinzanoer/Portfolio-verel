"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";

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
    <section 
      id="contact" 
      className="relative w-full min-h-screen bg-black flex flex-col lg:flex-row items-stretch overflow-hidden border-t border-[#1A1A1A]"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      {/* Left content - Contact Details */}
      <div className="flex-1 relative z-10 flex flex-col justify-center items-start px-8 sm:px-12 md:px-20 lg:px-24 py-16 md:py-24">
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2.5 mb-6"
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
          className="font-bold leading-[1.05] tracking-tight text-[clamp(2.8rem,7vw,7rem)] text-left"
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
          className="mt-6 text-left text-[#888888] text-sm md:text-lg max-w-md leading-relaxed"
        >
          Tell me what you&apos;re building — I&apos;ll tell you if I can help.
        </motion.p>

        {/* CTA Button */}
        <motion.a 
          href="mailto:verel@email.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 100 }}
          className="mt-10 px-8 py-3.5 md:px-10 md:py-4 rounded-full bg-[#A855F7] text-white font-medium text-sm md:text-base transition-all duration-300 hover:bg-[#9333EA] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-[1.02] active:scale-95 z-20"
        >
          Start a Conversation →
        </motion.a>
      </div>

      {/* Right content - Spline 3D Scene (Stretches full height on desktop, takes remaining space) */}
      <div className="flex-1 relative w-full min-h-[450px] lg:min-h-screen bg-gradient-to-b from-transparent to-black/30 lg:bg-none">
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full absolute inset-0"
        />
      </div>
    </section>
  );
}
