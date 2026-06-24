import React from "react";
import { ImagesScrollingAnimation } from "@/components/ui/images-scrolling-animation";

export default function GallerySection() {
  return (
    <section id="gallery" className="w-full bg-[#0A0A0A] py-20">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        <div className="mb-4 text-center px-4">
          <h2 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[1.05] tracking-tight text-[#F5F5F5]">
            Result AI.
          </h2>
          <p className="mt-4 text-[#666] max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            A showcase of AI-generated visuals and design outcomes.
          </p>
        </div>
        <ImagesScrollingAnimation />
      </div>
    </section>
  );
}
