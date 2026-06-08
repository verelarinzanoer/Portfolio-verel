import React from "react";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="flex w-full justify-center items-center py-20 bg-[#0A0A0A]">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        <div className="mb-12 text-center px-4">
          <h3 className="text-xs uppercase tracking-[0.3em] text-[#A855F7] mb-4 font-semibold">
            TESTIMONIALS
          </h3>
          <h2 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[1.05] tracking-tight text-[#F5F5F5]">
            What My Colleagues Say.
          </h2>
          <p className="mt-4 text-[#666] max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            Real feedback from people I've worked with directly.
          </p>
        </div>
        <StaggerTestimonials />
      </div>
    </section>
  );
}
