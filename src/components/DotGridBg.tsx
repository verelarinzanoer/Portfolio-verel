"use client";

import React, { useEffect, useRef } from "react";

export default function DotGridBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Mouse positions
    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;
    let isMouseOnScreen = false;
    let glowOpacity = 0;
    let targetGlowOpacity = 0;

    // Grid configurations
    const gap = 28;
    const dotRadius = 0.8;
    const glowRadius = 120;

    // Colors (RGB representation)
    const baseColor = { r: 34, g: 34, b: 34 };     // #222222
    const glowColor = { r: 168, g: 85, b: 247 };   // #A855F7

    // Resize handler
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse events
    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
      if (!isMouseOnScreen) {
        isMouseOnScreen = true;
        targetGlowOpacity = 1;
        // Instantly move tracking to mouse on initial enter to avoid a sweep across the screen
        if (mouseX < 0) {
          mouseX = targetMouseX;
          mouseY = targetMouseY;
        }
      }
    };

    const handleMouseLeave = () => {
      targetGlowOpacity = 0;
      isMouseOnScreen = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Render loop
    let animationId: number;

    const draw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Clear with background color to prevent trailing artifacts
      ctx.fillStyle = "#0A0A0A";
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse position with LERP (linear interpolation) for inertial lag
      if (isMouseOnScreen) {
        mouseX += (targetMouseX - mouseX) * 0.12;
        mouseY += (targetMouseY - mouseY) * 0.12;
      }
      
      // Smoothly ease the glow opacity
      glowOpacity += (targetGlowOpacity - glowOpacity) * 0.1;

      // Draw dot grid
      const cols = Math.ceil(width / gap) + 1;
      const rows = Math.ceil(height / gap) + 1;

      // Offset starting position slightly to align neatly with screen borders
      const startX = (width % gap) / 2;
      const startY = (height % gap) / 2;

      for (let c = 0; c < cols; c++) {
        const x = startX + c * gap;
        for (let r = 0; r < rows; r++) {
          const y = startY + r * gap;

          // Simple fast bounding box check before expensive square root
          const dx = x - mouseX;
          const dy = y - mouseY;
          const distSq = dx * dx + dy * dy;
          const maxDistSq = glowRadius * glowRadius;

          if (glowOpacity > 0.01 && distSq < maxDistSq) {
            const distance = Math.sqrt(distSq);
            // Quadratic falloff for a much smoother radial gradient look
            const ratio = 1 - distance / glowRadius;
            const factor = Math.max(0, ratio * ratio) * glowOpacity;

            // Interpolate colors
            const red = Math.round(baseColor.r + (glowColor.r - baseColor.r) * factor);
            const green = Math.round(baseColor.g + (glowColor.g - baseColor.g) * factor);
            const blue = Math.round(baseColor.b + (glowColor.b - baseColor.b) * factor);

            ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
          } else {
            ctx.fillStyle = `rgb(${baseColor.r}, ${baseColor.g}, ${baseColor.b})`;
          }

          // Draw the dot
          ctx.beginPath();
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}
