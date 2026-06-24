"use client";

import React from "react";

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#080808] border-t border-[#1A1A1A] py-8 px-[4vw]">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-0">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-base font-semibold text-[#F5F5F5]">Verel</span>
          <span className="text-xs text-[#555] mt-1">UI/UX Designer × AI Creative</span>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          {/* Social Links Row */}
          <div className="flex items-center gap-3">
            <a 
              href="https://www.linkedin.com/in/muhammad-verel-a77611216/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-[#555] hover:text-[#A855F7] transition-colors duration-300"
            >
              LinkedIn
            </a>
            <span className="text-[#333]">·</span>
            <a 
              href="https://www.behance.net/bukharighifari" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-[#555] hover:text-[#A855F7] transition-colors duration-300"
            >
              Behance
            </a>
            <span className="text-[#333]">·</span>
            <a 
              href="https://www.instagram.com/ux.ahmad96/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-[#555] hover:text-[#A855F7] transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
          
          {/* Copyright text */}
          <span className="text-xs text-[#333] mt-2">© 2025 Verel — Jakarta, Indonesia</span>
        </div>

      </div>
    </footer>
  );
}
