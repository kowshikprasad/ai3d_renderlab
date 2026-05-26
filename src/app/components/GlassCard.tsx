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
        backdrop-blur-2xl bg-white/75 border border-white/40 rounded-2xl
        shadow-[0_8px_32px_rgba(0,0,0,0.1)]
        ${hover ? "transition-all duration-300 hover:shadow-[0_12px_48px_rgba(0,0,0,0.15)] hover:-translate-y-1" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
