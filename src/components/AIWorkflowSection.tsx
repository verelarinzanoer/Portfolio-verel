"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Understand the Brief",
    desc: "I ask a lot of questions before touching any tool. Goals, users, constraints — all of it. This phase is about listening deeply and mapping out the real problem, not the surface one.",
    badge: "CLAUDE AI — RESEARCH & ANALYSIS",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&q=80&fit=crop",
    color: "#A855F7",
  },
  {
    num: "02",
    title: "Sketch & Structure",
    desc: "Layouts first, visuals later. Quick wireframes to lock in the logic. I move fast here — the goal is alignment on structure before we invest in polish.",
    badge: "V0 + BOLT — RAPID PROTOTYPING",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=900&q=80&fit=crop",
    color: "#7C3AED",
  },
  {
    num: "03",
    title: "Generate Visuals",
    desc: "Product photos, illustrations, brand assets — all AI-generated, all reviewed by me. Every output gets a human eye before it ships.",
    badge: "GEMINI + CANVA AI — ASSET GENERATION",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&q=80&fit=crop",
    color: "#EC4899",
  },
  {
    num: "04",
    title: "Design & Refine",
    desc: "High-fidelity UI in Figma. Every screen is intentional, not just good-looking. I obsess over spacing, hierarchy, and micro-interactions.",
    badge: "FIGMA — UI DESIGN",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80&fit=crop",
    color: "#06B6D4",
  },
  {
    num: "05",
    title: "Deliver & Stay Open",
    desc: "I hand off with full documentation. If something needs fixing after launch, I'm still here. Great work doesn't end at delivery — it evolves.",
    badge: "CHATGPT — DOCUMENTATION & COPY",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80&fit=crop",
    color: "#10B981",
  },
];

export default function AIWorkflowSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="workflow" className="w-full bg-[#0A0A0A] px-[4vw] py-24 md:py-32">
      <div className="max-w-7xl mx-auto w-full">

        {/* Header */}
        <div className="mb-16 md:mb-20">
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

        {/* Accordion — Desktop: horizontal panels, Mobile: vertical */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-2 md:h-[520px]">
          {steps.map((step, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={index}
                onClick={() => setActiveIndex(index)}
                animate={{
                  flex: isActive ? 4 : 1,
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{
                  minWidth: 0,
                  border: isActive
                    ? `1px solid ${step.color}40`
                    : "1px solid rgba(255,255,255,0.06)",
                  background: "#111111",
                }}
              >
                {/* Background image — only visible when active */}
                <div className="absolute inset-0">
                  <motion.img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    animate={{ opacity: isActive ? 0.18 : 0.06 }}
                    transition={{ duration: 0.5 }}
                    style={{ filter: "saturate(0.7)" }}
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: isActive
                        ? `linear-gradient(135deg, ${step.color}22 0%, #0A0A0A 60%)`
                        : "linear-gradient(135deg, #1a1a1a 0%, #0A0A0A 100%)",
                    }}
                  />
                </div>

                {/* Glow accent when active */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
                    style={{ background: step.color }}
                  />
                )}

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-5 md:p-6">

                  {/* Top: Number */}
                  <div className="flex items-center gap-3">
                    <span
                      className="font-mono text-xs font-bold tracking-widest"
                      style={{ color: isActive ? step.color : "#444" }}
                    >
                      {step.num}
                    </span>
                    {isActive && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className="h-px flex-1 origin-left"
                        style={{ background: `${step.color}60` }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                      />
                    )}
                  </div>

                  {/* Collapsed: Rotated Title */}
                  {!isActive && (
                    <div className="flex-1 flex items-center justify-center">
                      <span
                        className="hidden md:block font-bold text-sm text-[#555] whitespace-nowrap"
                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                      >
                        {step.title}
                      </span>
                      {/* Mobile collapsed: horizontal title */}
                      <span className="md:hidden font-bold text-base text-[#555]">
                        {step.title}
                      </span>
                    </div>
                  )}

                  {/* Expanded: Full content */}
                  {isActive && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.35, delay: 0.15 }}
                        className="flex-1 flex flex-col justify-end gap-4 mt-4"
                      >
                        {/* Image thumbnail - Desktop only */}
                        <div className="hidden md:block flex-1 min-h-0 rounded-xl overflow-hidden max-h-52">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-full object-cover"
                            style={{ filter: "saturate(0.8) brightness(0.9)" }}
                          />
                        </div>

                        {/* Title */}
                        <h4 className="text-xl md:text-2xl font-bold text-[#F5F5F5] leading-tight">
                          {step.title}
                        </h4>

                        {/* Description */}
                        <p className="text-sm text-[#888] leading-relaxed max-w-xs md:max-w-sm">
                          {step.desc}
                        </p>

                        {/* Badge */}
                        <div
                          className="inline-flex items-center self-start px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-widest uppercase"
                          style={{
                            background: `${step.color}18`,
                            border: `1px solid ${step.color}40`,
                            color: step.color,
                          }}
                        >
                          {step.badge}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Step dots indicator */}
        <div className="flex items-center gap-2 mt-6 justify-center">
          {steps.map((step, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: activeIndex === i ? 24 : 6,
                height: 6,
                background: activeIndex === i ? step.color : "#333",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
