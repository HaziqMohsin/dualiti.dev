"use client";
import { useRef, useEffect } from "react";

type Props = {
  speed?: number;
};

export default function ParallaxSquare({ speed = 1 }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const squareRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const square = squareRef.current;

    if (!container || !square) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visibleY = windowHeight - containerRect.top;

      // Adjust the Y based on how far the section has entered the viewport
      const scrollY = Math.max(0, visibleY * speed);

      // Optional: limit the movement so it doesn’t overflow the container
      const maxMove = container.offsetHeight - square.offsetHeight;
      const clampedY = Math.min(scrollY, maxMove);

      square.style.transform = `translateY(${clampedY}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={containerRef} className="absolute top-0 right-0 w-full h-full">
      <div
        ref={squareRef}
        className="absolute w-80 h-80 bg-secondary-600/50 rounded-3xl z-20 left-2 rotate-[15deg] backdrop-blur-sm transition-transform duration-800"
      />
    </div>
  );
}