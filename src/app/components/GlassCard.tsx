import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = "", hover = false }: GlassCardProps) {
  return (
    <div
      className={`
        backdrop-blur-xl bg-white/70 border border-white/30 rounded-xl
        shadow-[0_8px_32px_rgba(0,0,0,0.08)]
        ${hover ? "transition-all duration-300 hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)] hover:-translate-y-1" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
