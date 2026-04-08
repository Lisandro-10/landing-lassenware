import { type HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function GlassCard({ children, className = "", ...props }: GlassCardProps) {
  return (
    <div
      className={`
        bg-white/70 dark:bg-white/5
        backdrop-blur-md
        border border-white/40 dark:border-white/10
        rounded-3xl shadow-sm
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
