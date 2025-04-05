import { cn } from "@/lib/utils";

type LabelProps = {
  children: React.ReactNode;
  color?: "primary" | "secondary";
  className?: string;
};

export const Label = ({ children, color = "primary", className = "" }: LabelProps) => {
  const colorClass = color === "primary"
    ? "text-secondary-800 bg-primary-400/40"
    : "text-primary-400 bg-secondary-400/40";

  return (
    <div
      style={{ transform: "rotate(-6deg)" }}
      className={cn(
        "absolute z-40 top-[-20px] left-[20px] text-lg lg:text-2xl px-3 py-2 capitalize rounded-md w-fit backdrop-blur-sm bg-white/30",
        colorClass,
        className
      )}
    >
      {children}
    </div>
  );
};