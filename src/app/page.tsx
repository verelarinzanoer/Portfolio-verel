"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import DotGridBg from "@/components/DotGridBg";
import { FlowArt, FlowSection } from "@/components/ui/story-scroll";
import AILabSection from "@/components/AILabSection";
import AIWorkflowSection from "@/components/AIWorkflowSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import GallerySection from "@/components/GallerySection";
import { AboutSection } from "@/components/sections/about-section";

// Skills arrays
const skillsRow1 = [
  "UI/UX Design",
  "Wireframing",
  "Prototyping",
  "Design System",
  "User Research",
  "Figma",
  "Interaction Design",
  "Visual Design",
];

const skillsRow2 = [
  "ChatGPT",
  "Claude AI",
  "Gemini",
  "V0",
  "Bolt",
  "Canva AI",
  "AI Product Photography",
  "AI Asset Generation",
  "Prompt Engineering",
];

// Project Showcase details
const projects = [
  {
    num: "01",
    label: "01 — MOBILE APP",
    title: "PREGNANCY\nTRACKER",
    tag: "Healttools · Hallobumil App",
    desc: "A weight tracking feature for expecting mothers. Calm UI, clinical clarity.",
    cta: "View Case Study →",
    href: "/Presentasi_Case_Study_Berat_Ideal_Mama.pdf",
    target: "_blank",
    bgColor: "#0A0A0A",
  },
  {
    num: "02",
    label: "02 — ENTERPRISE SYSTEM",
    title: "POS\nCHAKRA",
    tag: "Point of Sale System · B2B",
    desc: "A POS system designed for corporate scale — from order flow to daily reporting.",
    cta: "View Case Study →",
    href: "/pos-chakra-case-study.pdf",
    target: "_blank",
    bgColor: "#0F0F0F",
  },
  {
    num: "03",
    label: "03 — WEB DESIGN",
    title: "VILLA\nAMADAHA",
    tag: "Hospitality · Booking Website",
    desc: "Website for a villa rental — browse rooms, check facilities, book directly.",
    cta: "View Case Study →",
    href: "https://medium.com/@ahmadverelzanoe/case-study-villa-amadaha-9ece68f68535",
    target: "_blank",
    bgColor: "#111111",
  },
  {
    num: "04",
    label: "04 — COMMUNITY FEATURE",
    title: "BUMIL\nCOMMUNITY",
    tag: "Social Feature · Hallobumil App",
    desc: "A community feature inside Hallobumil — where mothers ask questions, share stories, and find support.",
    cta: "View Case Study →",
    href: "/Presentasi_Case_Study_Komunitas_In-App.pdf",
    target: "_blank",
    bgColor: "#020202ff",
  },
];

// Variants for the overall layout wrapper to trigger staggered entries
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Standard spring fade+slide up transition for text and elements
const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
      mass: 0.8,
    },
  },
};

// Special transition for layout elements like nav and footer
const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  // Helper to render skills items repeated for a seamless infinite loop
  const renderRow1Items = () => (
    <>
      {skillsRow1.map((skill, idx) => (
        <span key={`r1-${idx}`} className="flex items-center shrink-0">
          <span>{skill}</span>
          <span className="mx-4 text-[#A855F7] font-semibold select-none">·</span>
        </span>
      ))}
    </>
  );

  const renderRow2Items = () => (
    <>
      {skillsRow2.map((skill, idx) => (
        <span key={`r2-${idx}`} className="flex items-center shrink-0">
          <span>{skill}</span>
          <span className="mx-4 text-[#A855F7] font-semibold select-none">·</span>
        </span>
      ))}
    </>
  );

  return (
    <div className="relative w-full min-h-screen bg-[#0A0A0A] overflow-x-clip selection:bg-purple-500/20 selection:text-purple-300">
      {/* Interactive Dot Grid Canvas Background (Fixed across full viewport) */}
      <DotGridBg />

      {/* Hero Section Container (Full Viewport) */}
      <section className="relative min-h-screen flex flex-col justify-between px-6 py-6 md:px-12 md:py-8 lg:px-20 lg:py-12 overflow-hidden w-full">
        {/* Main staggered container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-between flex-1 w-full max-w-7xl mx-auto z-10"
        >
          {/* Top Header & Navigation */}
          <motion.header
            variants={fadeVariants}
            className="flex items-center gap-8 md:gap-12 py-2"
          >
            <a
              href="#"
              className="text-lg font-semibold tracking-tight text-[#F5F5F5] hover:text-[#A855F7] transition-colors duration-300"
            >
              Verel
            </a>
            <nav className="flex items-center gap-6 md:gap-8">
              <a
                href="#work"
                className="text-xs md:text-sm font-medium text-[#888888] hover:text-[#F5F5F5] transition-colors duration-300 relative group"
              >
                Work
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#A855F7] transition-all duration-300 group-hover:w-full" />
              </a>
              <a
                href="#ai-lab"
                className="text-xs md:text-sm font-medium text-[#888888] hover:text-[#F5F5F5] transition-colors duration-300 relative group"
              >
                AI Lab
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#A855F7] transition-all duration-300 group-hover:w-full" />
              </a>
              <a
                href="#contact"
                className="text-xs md:text-sm font-medium text-[#888888] hover:text-[#F5F5F5] transition-colors duration-300 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#A855F7] transition-all duration-300 group-hover:w-full" />
              </a>
            </nav>
          </motion.header>

          {/* Center-Left Hero Content */}
          <main className="flex items-center justify-between flex-1 max-w-7xl mx-auto py-12 md:py-20 w-full">
            {/* LEFT - existing text content */}
            <div className="flex flex-col items-start justify-center max-w-2xl">
              {/* Eyebrow Text */}
              <motion.div
                variants={slideUpVariants}
                className="mb-4 md:mb-5"
              >
                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#666666] select-none">
                  UI/UX Designer × AI Tools
                </span>
              </motion.div>

              {/* Headline - Line 1 */}
              <motion.h1
                variants={slideUpVariants}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F5F5F5] leading-[1.05]"
              >
                Designing
              </motion.h1>

              {/* Headline - Line 2 */}
              <motion.h1
                variants={slideUpVariants}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F5F5F5] leading-[1.05] mb-6 md:mb-8"
              >
                with <span className="text-[#A855F7] drop-shadow-[0_0_25px_rgba(168,85,247,0.15)]">Purpose.</span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                variants={slideUpVariants}
                className="text-sm sm:text-base text-[#888888] max-w-md leading-relaxed mb-8 md:mb-10 font-normal"
              >
                From research to final pixel — I use AI to move faster without cutting corners.
              </motion.p>

              {/* CTA Row */}
              <motion.div
                variants={slideUpVariants}
                className="flex items-center gap-4 flex-wrap"
              >
                <a
                  href="#work"
                  className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-3.5 bg-[#F5F5F5] text-[#0A0A0A] font-medium text-sm md:text-base rounded-full transition-all duration-300 hover:bg-white hover:scale-[1.03] active:scale-[0.98] shadow-md shadow-white/5"
                >
                  View My Work
                </a>
                <a
                  href="#ai-lab"
                  className="inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-3.5 bg-transparent border border-[#A855F7] text-[#A855F7] font-medium text-sm md:text-base rounded-full transition-all duration-300 hover:bg-[#A855F7]/10 hover:border-purple-400 hover:scale-[1.03] active:scale-[0.98]"
                >
                  AI Lab →
                </a>
              </motion.div>
            </div>

            {/* RIGHT - GIF Graphic */}
            <motion.div
              variants={slideUpVariants}
              className="hidden md:flex flex-col items-center justify-center flex-shrink-0 self-center"
            >
              <div style={{
                position: 'relative',
                width: '420px',
                height: '420px',
                borderRadius: '32px',
                overflow: 'hidden',
                flexShrink: 0,
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(168, 85, 247, 0.05)',
              }}>
                <img
                  src="/verel-hero.gif"
                  alt="Ahmad Verel - UI/UX Designer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </motion.div>
          </main>

          {/* Bottom Bar */}
          <motion.footer
            variants={fadeVariants}
            className="flex items-center justify-between w-full border-t border-zinc-900/50 pt-4 md:pt-6"
          >
            {/* Left Side: Freelance Status */}
            <div className="flex items-center gap-2.5 text-xs md:text-sm font-medium text-[#888888]">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-green absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>Available for freelance</span>
            </div>

            {/* Right Side: Scroll Indicator */}
            <div className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-[#888888] animate-subtle-bounce">
              <span>Scroll to explore</span>
              <span>↓</span>
            </div>
          </motion.footer>
        </motion.div>
      </section>

      {/* About Me Section */}
      <AboutSection />

      {/* Skills Marquee Bar Section (Directly Below Hero) */}
      <section className="relative w-full bg-[#0D0D0D] border-y border-[#1F1F1F] h-14 overflow-hidden z-20 flex flex-col justify-center py-1 mask-fade select-none">
        {/* Row 1 - Scrolls Left */}
        <div className="flex overflow-hidden w-full h-[22px] items-center">
          <div className="flex whitespace-nowrap">
            <div className="animate-marquee-left flex items-center shrink-0 text-[10px] md:text-xs font-semibold tracking-widest text-[#444444] uppercase">
              {renderRow1Items()}
              {renderRow1Items()}
              {renderRow1Items()}
              {renderRow1Items()}
            </div>
            <div className="animate-marquee-left flex items-center shrink-0 text-[10px] md:text-xs font-semibold tracking-widest text-[#444444] uppercase">
              {renderRow1Items()}
              {renderRow1Items()}
              {renderRow1Items()}
              {renderRow1Items()}
            </div>
          </div>
        </div>

        {/* Row 2 - Scrolls Right */}
        <div className="flex overflow-hidden w-full h-[22px] items-center">
          <div className="flex whitespace-nowrap">
            <div className="animate-marquee-right flex items-center shrink-0 text-[10px] md:text-xs font-semibold tracking-widest text-[#444444] uppercase">
              {renderRow2Items()}
              {renderRow2Items()}
              {renderRow2Items()}
              {renderRow2Items()}
            </div>
            <div className="animate-marquee-right flex items-center shrink-0 text-[10px] md:text-xs font-semibold tracking-widest text-[#444444] uppercase">
              {renderRow2Items()}
              {renderRow2Items()}
              {renderRow2Items()}
              {renderRow2Items()}
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <div id="work" className="z-25 relative">
        <FlowArt>
          {projects.map((project) => (
            <FlowSection
              key={project.num}
              className={`bg-[${project.bgColor}] text-[#F5F5F5]`}
              style={{ backgroundColor: project.bgColor }}
              aria-label={project.label}
            >
              {/* Decorative vertical absolute background number */}
              <div
                className="absolute left-[1vw] md:left-[1.5vw] top-1/2 -translate-y-1/2 select-none pointer-events-none text-[#1F1F1F] font-bold text-[9vw] font-sans opacity-70 leading-none z-0"
                style={{
                  writingMode: "vertical-rl",
                  transform: "translateY(-50%) rotate(180deg)"
                }}
              >
                {project.num}
              </div>

              {/* Content box wrapped to ensure z-index priority over watermarked numbers */}
              <div className="w-full z-10 flex flex-col justify-between flex-1">
                {/* Top Label */}
                <div className="w-full">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#555] block mb-4">
                    {project.label}
                  </span>
                  <hr className="border-none border-t border-white/10 w-full" />
                </div>

                {/* Center Content */}
                <div className="flex flex-col items-start gap-5 py-6 md:py-10 lg:py-14 w-full">
                  <h2
                    className="font-bold leading-[0.85] uppercase tracking-tight text-[#F5F5F5] whitespace-pre-line text-[clamp(3.5rem,10vw,7.5rem)] md:text-[clamp(4.5rem,12vw,9.5rem)]"
                  >
                    {project.title}
                  </h2>
                  <hr className="border-none border-t border-white/10 w-full my-1" />
                  <div className="flex flex-col items-start gap-3.5">
                    <span className="text-sm uppercase tracking-wider text-[#A855F7] font-semibold">
                      {project.tag}
                    </span>
                    <p className="max-w-[45ch] text-[clamp(1rem,2vw,1.5rem)] text-[#888] leading-relaxed font-light">
                      {project.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Case Study Link */}
                <div className="w-full">
                  <a
                    href={project.href}
                    target={project.target}
                    rel={project.target === "_blank" ? "noopener noreferrer" : undefined}
                    className="inline-block text-sm uppercase tracking-widest text-[#A855F7] hover:underline font-semibold transition-all duration-300"
                  >
                    {project.cta}
                  </a>
                </div>
              </div>
            </FlowSection>
          ))}
        </FlowArt>
      </div>

      {/* AI Lab Showcase (Temporarily Removed) */}
      <AILabSection />

      {/* AI Workflow Section */}
      <AIWorkflowSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact & Footer CTA Section */}
      <ContactSection />

      {/* Simple Footer */}
      <FooterSection />
    </div>
  );
}
