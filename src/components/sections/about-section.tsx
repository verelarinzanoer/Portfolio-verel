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
            className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter leading-[1.1] max-w-3xl"
          >
            <span style={{ color: "#F5F5F5" }} className="block">Design that works.</span>
            <span style={{ color: "#A855F7" }} className="block">AI that helps.</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            viewport={{ once: true, margin: "-100px" }}
            className="text-sm sm:text-base leading-relaxed max-w-[48ch] mt-6 font-normal"
            style={{ color: "#666" }}
          >
            I'm Muhammad Verel, a UI/UX Designer based in Indonesia. I use AI tools — Figma, V0, Claude, Gemini — not to replace the thinking, but to move faster through it. Three years in, still obsessed with the details that most people scroll past.
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
          <h3 className="text-xl md:text-2xl leading-snug">
            <span style={{ color: "#F5F5F5", fontWeight: "bold" }}>3+ years</span>
            <span style={{ color: "#888", fontWeight: "normal" }}> designing products that ship — and actually get used.</span>
          </h3>

          {/* Part B */}
          <p
            className="text-base max-w-[52ch] mx-auto leading-relaxed font-normal"
            style={{ color: "#666" }}
          >
            I've worked on mobile apps, booking websites, POS systems, and brand projects — mostly from scratch. My process starts with research, slows down at the details, and doesn't stop until the user flow makes sense.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
