import { cn } from "@/lib/utils";

type LabelProps = {
  children: React.ReactNode;
  color?: "primary" | "secondary";
  className?: string;
};

export const Label = ({ children, color = "primary", className = "" }: LabelProps) => {
  const colorClass = color === "primary"
    ? "text-primary-400 border-primary-400"
    : "text-secondary-400 border-secondary-400";

  return (
    <div
      className={cn(
        "text-lg lg:text-2xl px-3 py-2 capitalize border-2 rounded-2xl w-fit",
        colorClass,
        className
      )}
    >
      {children}
    </div>
  );
};