import { cn } from "@/lib/utils";

import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

type LabelProps = {
  children: React.ReactNode;
  color?: "primary" | "secondary";
  className?: string;
};

export const Label = ({ children, color = "primary", className = "" }: LabelProps) => {
  const colorClass = color === "primary"
    ? "text-secondary-800 bg-primary-400/60"
    : "text-primary-400 bg-secondary-400/60";

  return (
    <div
      style={{ transform: "rotate(-4deg)" }}
      className={cn(
        spaceMono.className,
        "text-md lg:text-xl px-3 py-2 capitalize rounded-md w-fit backdrop-blur-sm bg-white/30",
        colorClass,
        className
      )}
    >
      {children}
    </div>
  );
};