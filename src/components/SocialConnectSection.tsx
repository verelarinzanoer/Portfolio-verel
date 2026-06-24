"use client";

import React, { useState } from "react";
import { Loader2, Check } from "lucide-react";

// Platform icons as custom inline SVGs
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
  </svg>
);

const SlackIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.823a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.823 5.043a2.528 2.528 0 0 1-2.52-2.52A2.528 2.528 0 0 1 8.823 0a2.528 2.528 0 0 1 2.522 2.522v2.52h-2.522zm0 1.261a2.528 2.528 0 0 1 2.522 2.52v5.043a2.528 2.528 0 0 1-2.522 2.52H3.781a2.528 2.528 0 0 1-2.522-2.52V8.824a2.528 2.528 0 0 1 2.522-2.52h5.042zm10.135 3.702a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.52 2.52 2.528 2.528 0 0 1-2.52 2.522h-2.522v-2.522zm-1.262 0a2.528 2.528 0 0 1-2.52 2.522h-5.043a2.528 2.528 0 0 1-2.522-2.522V5.043a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.043zm-3.781 10.135a2.528 2.528 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.52 2.522 2.528 2.528 0 0 1-2.52 2.52h-2.52v-2.52zm0-1.262a2.528 2.528 0 0 1-2.52-2.522v-5.043a2.528 2.528 0 0 1 2.52-2.522h5.043a2.528 2.528 0 0 1 2.522 2.522v5.043a2.528 2.528 0 0 1-2.522 2.522h-5.043z"/>
  </svg>
);

const RedditIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-.762 1.151c.014.116.021.23.021.341 0 2.261-2.83 4.103-6.52 4.103-3.69 0-6.52-1.842-6.52-4.103 0-.11.007-.225.021-.341a1.247 1.247 0 0 1-.762-1.151c0-.688.562-1.249 1.25-1.249.467 0 .874.258 1.094.64a13.385 13.385 0 0 1 4.542-1.442l.96-3.03 3.125.688a1.042 1.042 0 0 1 .18-.008c.546 0 .99.444.99.99 0 .547-.444.991-.99.991-.547 0-.991-.444-.991-.99a.99.99 0 0 1 .046-.296l-2.735-.602-.828 2.617a13.434 13.434 0 0 1 4.558 1.434 1.248 1.248 0 0 1 1.1-.64zm-8.23 6.208c-.687 0-1.25-.563-1.25-1.25 0-.688.563-1.25 1.25-1.25.688 0 1.25.562 1.25 1.25 0 .687-.562 1.25-1.25 1.25zm6.46 0c-.688 0-1.25-.563-1.25-1.25 0-.688.562-1.25 1.25-1.25.687 0 1.25.562 1.25 1.25 0 .687-.563 1.25-1.25 1.25zm-6.046 2.64c1.077.996 2.86.996 3.938 0a.417.417 0 0 1 .59 0 .416.416 0 0 1 0 .589c-1.398 1.3-3.72 1.3-5.118 0a.415.415 0 0 1 0-.589.417.417 0 0 1 .59 0z"/>
  </svg>
);

type ConnectionState = "disconnected" | "connecting" | "connected";

interface PlatformConfig {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  colorTheme: string; // Brand color name
  brandHex: string; // Brand Hex code for gradients
  bgClasses: string;
  borderClasses: string;
  glowClasses: string;
  accentText: string;
  url: string;
}

const platforms: PlatformConfig[] = [
  {
    id: "discord",
    name: "Discord",
    icon: DiscordIcon,
    colorTheme: "indigo",
    brandHex: "#5865F2",
    bgClasses: "from-indigo-600/10 via-indigo-950/30 to-indigo-900/5",
    borderClasses: "border-indigo-500/25 hover:border-indigo-400/50",
    glowClasses: "shadow-indigo-500/10 hover:shadow-indigo-500/20",
    accentText: "text-indigo-400",
    url: "https://discord.gg/yourinvite",
  },
  {
    id: "slack",
    name: "Slack",
    icon: SlackIcon,
    colorTheme: "purple",
    brandHex: "#4A154B",
    bgClasses: "from-purple-600/10 via-purple-950/30 to-purple-900/5",
    borderClasses: "border-purple-500/25 hover:border-purple-400/50",
    glowClasses: "shadow-purple-500/10 hover:shadow-purple-500/20",
    accentText: "text-purple-400",
    url: "https://slack.com/yourinvite",
  },
  {
    id: "reddit",
    name: "Reddit",
    icon: RedditIcon,
    colorTheme: "orange",
    brandHex: "#FF4500",
    bgClasses: "from-orange-600/10 via-orange-950/30 to-orange-900/5",
    borderClasses: "border-orange-500/25 hover:border-orange-400/50",
    glowClasses: "shadow-orange-500/10 hover:shadow-orange-500/20",
    accentText: "text-orange-400",
    url: "https://reddit.com/r/yoursubreddit",
  },
];

export default function SocialConnectSection() {
  const [states, setStates] = useState<Record<string, ConnectionState>>({
    discord: "disconnected",
    slack: "disconnected",
    reddit: "disconnected",
  });

  const handleConnectClick = (platformId: string) => {
    const currentState = states[platformId];

    if (currentState === "disconnected") {
      // Transition to connecting state
      setStates((prev) => ({ ...prev, [platformId]: "connecting" }));

      // Set timeout for ~1.5s to transition to connected state
      setTimeout(() => {
        setStates((prev) => ({ ...prev, [platformId]: "connected" }));
      }, 1500);
    } else if (currentState === "connected") {
      // Immediately reset back to disconnected
      setStates((prev) => ({ ...prev, [platformId]: "disconnected" }));
    }
  };

  return (
    <section id="social-connect" className="w-full bg-[#0A0A0A] px-[4vw] py-20 md:py-32">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header (Styled like the existing section headings) */}
        <div className="mb-16 md:mb-24 text-center px-4">
          <h3 className="text-xs uppercase tracking-[0.3em] text-[#A855F7] mb-4 font-semibold">
            SOCIAL
          </h3>
          <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[1.05] tracking-tight text-[#F5F5F5]">
            CONNECT WITH US
          </h2>
          <p className="mt-4 text-[#666] max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            Link up your workspaces and join our developer channels in real-time.
          </p>
        </div>

        {/* Buttons Grid: flex-col on mobile, flex-row on desktop */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch w-full max-w-4xl mx-auto">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            const currentState = states[platform.id];

            return (
              <button
                key={platform.id}
                onClick={() => handleConnectClick(platform.id)}
                disabled={currentState === "connecting"}
                className={`relative flex-1 group flex flex-col justify-between items-start p-8 rounded-none border text-left transition-all duration-500 ease-out select-none overflow-hidden cursor-pointer ${platform.bgClasses} ${platform.borderClasses} ${platform.glowClasses} hover:scale-[1.03] hover:shadow-xl active:scale-[0.98] disabled:cursor-not-allowed`}
                style={{
                  minHeight: "220px",
                  // Futuristic double-cut polygon shape
                  clipPath: "polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                {/* ── Hover Shimmer Overlay ── */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full shimmer-overlay pointer-events-none" />

                {/* Top Row: Icon & Status Dot indicator */}
                <div className="w-full flex justify-between items-start">
                  <div className={`p-3 rounded-xl bg-black/40 border border-white/5 ${platform.accentText}`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Status Indicator Badge */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/5 bg-black/60 text-[9px] uppercase tracking-widest text-[#888]">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        currentState === "connected"
                          ? "bg-green-500 shadow-[0_0_8px_#22C55E]"
                          : currentState === "connecting"
                          ? "bg-amber-400 animate-pulse"
                          : "bg-zinc-600"
                      }`}
                    />
                    <span>{currentState}</span>
                  </div>
                </div>

                {/* Bottom Row: Platform Name & Connection State */}
                <div className="w-full mt-6 space-y-1.5 relative z-10">
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {platform.name}
                  </h3>

                  {/* Connection Button/Status text */}
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
                    {currentState === "disconnected" && (
                      <span className="text-[#555] group-hover:text-white transition-colors duration-300">
                        Connect Platform →
                      </span>
                    )}

                    {currentState === "connecting" && (
                      <span className="text-amber-400 flex items-center gap-1.5">
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        Linking Account...
                      </span>
                    )}

                    {currentState === "connected" && (
                      <span className="text-green-400 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        Connected
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Shimmer Keyframe */}
      <style>{`
        @keyframes shimmer-move {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .group:hover .shimmer-overlay {
          animation: shimmer-move 1.5s infinite;
        }
      `}</style>
    </section>
  );
}
