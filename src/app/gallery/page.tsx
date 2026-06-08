'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const images = [
  {
    src: '/ai-camera.png',
    tag: 'Product Photo'
  },
  {
    src: '/ai-keyboard.png',
    tag: 'AI Asset'
  },
  {
    src: '/ai-red-sneaker.png',
    tag: 'Product Photo'
  },
  {
    src: '/ai-smartwatch.png',
    tag: 'AI Asset'
  },
  {
    src: '/ai-headphones.png',
    tag: 'Product Photo'
  },
  {
    src: '/ai-camera.png',
    tag: 'AI Asset'
  },
  {
    src: '/ai-keyboard.png',
    tag: 'Product Photo'
  },
  {
    src: '/ai-red-sneaker.png',
    tag: 'AI Asset'
  },
  {
    src: '/ai-smartwatch.png',
    tag: 'Product Photo'
  }
];

export default function GalleryPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#0A0A0A] px-[4vw] py-16 w-full text-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP NAV */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm text-[#666] hover:text-[#F5F5F5] transition-colors mb-12"
        >
          <span>←</span>
          <span>Go back</span>
        </button>

        {/* HEADER */}
        <div className="mb-12">
          <span className="block text-xs uppercase tracking-[0.3em] text-[#A855F7] mb-3 font-semibold">
            AI Lab
          </span>
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-tight">
            All Works.
          </h1>
          <p className="text-base text-[#666] mt-2 mb-12">
            AI-generated product photography and brand assets.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ scale: 1.02 }}
              className="relative group rounded-[20px] overflow-hidden aspect-square cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.tag}
                className="w-full h-full object-cover"
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[#A855F7] text-xs uppercase tracking-widest font-semibold">
                  {img.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
