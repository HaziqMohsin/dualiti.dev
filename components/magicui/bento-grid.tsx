"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, ReactNode, useState } from "react";

import { cn } from "@/lib/utils";
import { Modal } from "@/components/Modal";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  iconComponent?: ReactNode;
  description: string;
  href?: string;
  cta: string;
  fullScreenContent?: ReactNode;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  iconComponent,
  description,
  cta,
  fullScreenContent,
  ...props
}: BentoCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e: React.MouseEvent) => {
    if (fullScreenContent) {
      e.preventDefault();
      e.stopPropagation();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div
        key={name}
        className={cn(
          "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-primary-300",
          // light styles
          "bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
          // dark styles
          "transform-gpu dark:bg-background dark:[border:px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
          fullScreenContent && "cursor-pointer", // Add pointer cursor to the whole card
          className
        )}
        onClick={fullScreenContent ? openModal : undefined} // Make the whole card clickable
        {...props}
      >
        <div className="opacity-70 group-hover:opacity-100 group-hover:translate-y-10 group-hover:scale-90 blur-none group-hover:blur-sm transition-all duration-300 ease-in-out">
          {background}
        </div>
        <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
          <div className="hidden lg:block h-12 w-12 origin-left transform-gpu text-mono-800 group-hover:text-mono-100 transition-all duration-300 ease-in-out group-hover:scale-75">
            {iconComponent}
          </div>
          <h3 className="text-xl font-semibold text-mono-800 group-hover:text-mono-100 dark:text-neutral-300">
            {name}
          </h3>
          <p className="max-w-lg text-mono-400">{description}</p>
        </div>

        <div
          className={cn(
            "pointer-events-auto absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-3700 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
          )}
        >
          <div className="flex flex-row px-4 py-2 items-center justify-center hover:bg-mono-100 text-mono-100 hover:text-mono-800 rounded-xl">
            {cta}
            <ArrowRightIcon className="ms-2 h-5 w-5 rtl:rotate-180" />
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
      </div>

      {/* Modal to display full screen content */}
      {fullScreenContent && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {fullScreenContent}
        </Modal>
      )}
    </>
  );
};

export { BentoCard, BentoGrid };
