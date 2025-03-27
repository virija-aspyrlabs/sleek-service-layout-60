
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
  hoverEffect?: boolean;
}

export function GlassCard({
  children,
  className,
  variant = "light",
  hoverEffect = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden",
        variant === "light" 
          ? "bg-white/80 backdrop-blur-md border border-white/20" 
          : "bg-gray-900/80 backdrop-blur-md border border-gray-800/30",
        hoverEffect && "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        "shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
