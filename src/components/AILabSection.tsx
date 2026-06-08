'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';

const cards = [
  {
    url: '/ai-keyboard.png',
    rotate: -8, x: -200, delay: 0,
  },
  {
    url: '/ai-camera.png',
    rotate: 0, x: 0, delay: 0.1,
  },
  {
    url: '/ai-red-sneaker.png',
    rotate: 8, x: 200, delay: 0.2,
  },
];

export default function AILabSection() {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="ai-lab"
      ref={ref}
      style={{
        background: '#0A0A0A',
        padding: '6rem 4vw',
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
      }}
    >
      <p style={{
        color: '#A855F7', fontSize: '0.75rem',
        letterSpacing: '0.3em', textTransform: 'uppercase',
        fontWeight: 600, marginBottom: '1rem'
      }}>
        AI LAB
      </p>
      <h2 style={{
        fontSize: 'clamp(2.5rem,6vw,5rem)',
        fontWeight: 'bold', color: '#F5F5F5',
        margin: '0 auto 1rem', maxWidth: '800px',
        lineHeight: 1.1
      }}>
        <span style={{ color: '#F5F5F5', display: 'block' }}>AI-generated.</span>
        <span style={{ color: '#A855F7', display: 'block' }}>Human-directed.</span>
      </h2>
      <p style={{
        color: '#666', fontSize: '1rem',
        maxWidth: '480px', margin: '0 auto 1.5rem',
        lineHeight: 1.7
      }}>
        Product photos, brand assets, and visual
        concepts — made with AI, shaped by intent.
      </p>

      {/* Cards */}
      <div
        style={{
          position: 'relative', height: '300px',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', marginBottom: '1.5rem',
        }}
      >
        {cards.map((card, i) => {
          const isHovered = hoveredIndex === i;
          const isOther = hoveredIndex !== null && hoveredIndex !== i;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 0, rotate: 0, scale: 0.8 }}
              animate={inView ? {
                opacity: isOther ? 0.35 : 1,
                x: card.x,
                rotate: isHovered ? 0 : card.rotate,
                scale: isHovered ? 1.05 : i === 1 && hoveredIndex === null ? 1 : 0.85,
                y: isHovered ? -16 : 0,
              } : {}}
              transition={{
                delay: hoveredIndex !== null ? 0 : card.delay,
                type: 'spring',
                stiffness: 260,
                damping: 24,
              }}
              style={{
                position: 'absolute',
                width: '260px',
                height: '260px',
                borderRadius: '24px',
                overflow: 'hidden',
                cursor: 'pointer',
                zIndex: isHovered ? 10 : i === 1 ? 3 : i === 0 ? 1 : 2,
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => router.push('/gallery')}
            >
              <img
                src={card.url}
                alt={`AI asset ${i + 1}`}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  pointerEvents: 'none',
                }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Quote */}
      <p style={{
        color: '#555', fontSize: 'clamp(1rem,2vw,1.3rem)',
        fontStyle: 'italic', maxWidth: '600px',
        margin: '0 auto 2.5rem', lineHeight: 1.7
      }}>
        "People don't fall in love with components.
        They fall in love with how something feels."
      </p>

      {/* Button */}
      <button
        onClick={() => router.push('/gallery')}
        style={{
          border: '1px solid #333',
          background: 'transparent',
          color: '#888',
          padding: '12px 32px',
          borderRadius: '999px',
          fontSize: '0.875rem',
          cursor: 'pointer',
          transition: 'all 300ms',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = '#A855F7';
          e.currentTarget.style.color = '#A855F7';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = '#333';
          e.currentTarget.style.color = '#888';
        }}
      >
        Explore more →
      </button>
    </section>
  );
}