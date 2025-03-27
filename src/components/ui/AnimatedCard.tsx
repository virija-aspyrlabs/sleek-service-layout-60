
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right" | "up";
  delay?: number;
  animateOnScroll?: boolean;
}

export function AnimatedCard({
  children,
  className,
  direction = "up",
  delay = 0,
  animateOnScroll = true,
}: AnimatedCardProps) {
  const [isVisible, setIsVisible] = useState(!animateOnScroll);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animateOnScroll) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, no need to observe anymore
          if (cardRef.current) observer.unobserve(cardRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [animateOnScroll]);

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0";
    
    switch (direction) {
      case "left":
        return "animate-fade-in-left";
      case "right":
        return "animate-fade-in-right";
      case "up":
      default:
        return "animate-fade-in";
    }
  };

  const getDelayStyle = () => {
    if (delay === 0) return {};
    return { animationDelay: `${delay}ms` };
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "transition-all duration-500 ease-out",
        getAnimationClass(),
        className
      )}
      style={getDelayStyle()}
    >
      {children}
    </div>
  );
}
