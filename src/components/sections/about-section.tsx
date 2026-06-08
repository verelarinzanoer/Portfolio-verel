"use client";

import React from "react";
import { motion } from "framer-motion";

const slideUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 18,
      delay: delay,
    },
  }),
};

export function AboutSection() {
  return (
    <section className="relative w-full bg-[#0A0A0A] py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">

        {/* TOP: Badge, Heading, Subtext */}
        <div className="flex flex-col items-center text-center max-w-4xl">
          {/* Badge/label */}
          <motion.span
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true, margin: "-100px" }}
            className="px-3 py-1 text-xs uppercase tracking-widest text-[#A855F7] border border-[#A855F7]/30 rounded-full bg-[#A855F7]/5 font-medium select-none mb-6"
          >
            About Me
          </motion.span>

          {/* Heading */}
          <motion.h2
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            custom={0.1}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-slate-50 leading-[1.1] max-w-3xl"
          >
            Designing with Intent. Creating with Purpose.
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            viewport={{ once: true, margin: "-100px" }}
            className="text-sm sm:text-base leading-relaxed text-zinc-400 max-w-[48ch] mt-6 font-normal"
          >
            I'm Muhammad Verel — a UI/UX Designer and AI Creative based in Indonesia. I bridge the gap between thoughtful design and emerging AI tools to craft experiences that feel both human and ahead of their time.
          </motion.p>
        </div>

        {/* MIDDLE: 16:9 Video Block with rounded-20 corners */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          custom={0.3}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full max-w-4xl mt-12 aspect-video rounded-[20px] overflow-hidden border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-zinc-900"
        >
          <video
            src="/vidio-verel-aboutme.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </motion.div>

        {/* BOTTOM: Copy block below video */}
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          custom={0.4}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center max-w-2xl mt-12 space-y-4"
        >
          {/* Part A */}
          <h3 className="text-xl md:text-2xl font-semibold text-slate-50 leading-snug">
            3+ years designing products people actually love to use.
          </h3>

          {/* Part B */}
          <p className="text-base text-zinc-400 max-w-[52ch] mx-auto leading-relaxed font-normal">
            From zero-to-one SaaS products to AI-powered interfaces, I've worked across brand identity, product design, and creative direction. My process is research-led, detail-obsessed, and always user-first.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
