"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const TESTIMONIALS = [
  {
    id: "t1",
    name: "Moh Hafid",
    profession: "UI/UX Designer · PT Cakra Radha Mustika",
    rating: 5,
    description: "Working alongside Verel was a great experience — detail-oriented, always thinking about the user, and never afraid to question assumptions.",
    avatarUrl: "/hafid.jpg"
  },
  {
    id: "t2", 
    name: "Nasir Amin",
    profession: "UI/UX Designer · PT Cakra Radha Mustika",
    rating: 5,
    description: "Verel has a strong sense of design and always delivers with intention. The kind of designer who makes the whole team's work better.",
    avatarUrl: "/nasir.jpg"
  },
  {
    id: "t3",
    name: "Dandy Sofyan",
    profession: "Product Designer · PT Repository Solusi Indonesia",
    rating: 5,
    description: "Consistent, collaborative, and always open to feedback. Verel brings both skill and good energy to every project.",
    avatarUrl: "/dandy.jpeg"
  },
  {
    id: "t4",
    name: "Everal Radin",
    profession: "Product Designer · Hallobumil",
    rating: 5,
    description: "Verel thinks beyond the screen — always connecting design decisions back to real user needs. A solid product mindset.",
    avatarUrl: "/everal.jpg"
  },
  {
    id: "t5",
    name: "Azmy Izzah",
    profession: "Product Associate · Hallobumil",
    rating: 5,
    description: "Easy to work with and fast to execute. Verel understands the product side too — not just the visuals.",
    avatarUrl: "/azmy.jpg"
  },
  {
    id: "t6",
    name: "Husna Kafa",
    profession: "Frontend Developer · PT Repository Solusi Indonesia",
    rating: 5,
    description: "Verel's designs are clean and developer-friendly. Handoffs are always well-documented — makes my job so much easier.",
    avatarUrl: "/husna.jpeg"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof TESTIMONIALS[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer p-8 transition-all duration-500 ease-in-out",
        "bg-[#111111] border border-[#222222]"
      )}
      style={{
        zIndex: isCenter ? 50 : 50 - Math.abs(position),
        pointerEvents: "auto",
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px #222222" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-[#222222]"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 1
        }}
      />
      <img
        src={testimonial.avatarUrl}
        alt={`${testimonial.name}`}
        className="mb-4 h-14 w-12 bg-muted object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px #222222"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-xl font-medium text-[#CCCCCC]"
      )}>
        "{testimonial.description}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic text-[#F5F5F5]"
      )}>
        - {testimonial.name}, {testimonial.profession}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(TESTIMONIALS);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, id: Math.random().toString() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, id: Math.random().toString() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-visible bg-[#0A0A0A]"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-all duration-200 ease-in-out",
            "bg-transparent border border-[#444444] text-[#888888] rounded-full",
            "hover:bg-[#FFFFFF] hover:border-[#FFFFFF] hover:text-[#000000]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-all duration-200 ease-in-out",
            "bg-transparent border border-[#444444] text-[#888888] rounded-full",
            "hover:bg-[#FFFFFF] hover:border-[#FFFFFF] hover:text-[#000000]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
