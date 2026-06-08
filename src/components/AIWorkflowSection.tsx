"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Understand the Brief",
    desc: "I ask a lot of questions before touching any tool. Goals, users, constraints — all of it.",
    badge: "CLAUDE AI — RESEARCH & ANALYSIS"
  },
  {
    num: "02",
    title: "Sketch & Structure",
    desc: "Layouts first, visuals later. Quick wireframes to lock in the logic.",
    badge: "V0 + BOLT — RAPID PROTOTYPING"
  },
  {
    num: "03",
    title: "Generate Visuals",
    desc: "Product photos, illustrations, brand assets — all AI-generated, all reviewed by me.",
    badge: "GEMINI + CANVA AI — ASSET GENERATION"
  },
  {
    num: "04",
    title: "Design & Refine",
    desc: "High-fidelity UI in Figma. Every screen is intentional, not just good-looking.",
    badge: "FIGMA — UI DESIGN"
  },
  {
    num: "05",
    title: "Deliver & Stay Open",
    desc: "I hand off with full documentation. If something needs fixing after launch, I'm still here.",
    badge: "CHATGPT — DOCUMENTATION & COPY"
  }
];

export default function AIWorkflowSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the container for the vertical line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Map scroll progress (0 to 1) to a height percentage (0% to 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="workflow" className="w-full bg-[#0A0A0A] px-[4vw] pb-0 pt-0 md:pb-0 md:pt-0">
      <div className="max-w-4xl mx-auto w-full">

        {/* Header */}
        <div className="mb-20 md:mb-32">
          <h3 className="text-xs uppercase tracking-[0.3em] text-[#A855F7] mb-4 md:mb-6 font-semibold">
            THE PROCESS
          </h3>
          <h2 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[1.05] tracking-tight text-[#F5F5F5]">
            My Workflow.
          </h2>
          <p className="mt-4 md:mt-6 text-[#666] max-w-lg text-sm md:text-base leading-relaxed">
            Same process, every project: I think, AI speeds up the execution, then I fix what needs fixing.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-2 md:pl-0" ref={containerRef}>

          {/* Static Timeline Line Background */}
          <div className="absolute left-[3px] md:left-[80px] top-2 bottom-2 w-[1px] bg-[#1F1F1F]" />

          {/* Animated Timeline Line Overlay */}
          <motion.div
            className="absolute left-[3px] md:left-[80px] top-2 w-[1px] bg-[#A855F7] origin-top"
            style={{ height: lineHeight }}
          />

          {/* Timeline Steps */}
          <div className="flex flex-col gap-16 md:gap-24 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex items-start relative group"
              >
                {/* Left Side: Number & Node */}
                <div className="flex items-center absolute left-[-6px] md:left-[16px] top-1">
                  {/* Number (Desktop) */}
                  <span className="hidden md:inline-block font-mono text-xs text-[#A855F7] tracking-widest mr-8 mt-0.5">
                    {step.num}
                  </span>

                  {/* Circle Node */}
                  <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#A855F7] relative z-10 shadow-[0_0_12px_rgba(168,85,247,0.6)] ml-1 md:ml-0" />
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-col items-start pl-8 md:pl-[140px] pt-0">
                  {/* Number (Mobile only) */}
                  <span className="md:hidden font-mono text-[10px] text-[#A855F7] tracking-widest mb-2 mt-0.5">
                    {step.num}
                  </span>

                  <h4 className="text-xl md:text-2xl font-bold text-[#F5F5F5] mb-2 md:mb-3 leading-tight">
                    {step.title}
                  </h4>

                  <p className="text-sm md:text-base text-[#666] max-w-md leading-relaxed">
                    {step.desc}
                  </p>

                  {/* AI Tool Badge */}
                  <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 mt-4 md:mt-5 rounded-full border border-[#2A2A2A] bg-transparent">
                    <span className="text-[10px] md:text-xs text-[#A855F7] font-medium tracking-wider uppercase">
                      {step.badge}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
