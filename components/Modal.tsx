'use client';

import { useEffect, ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export function Modal({ isOpen, onClose, children, className }: ModalProps) {
  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on escape key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop with fade in animation */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        style={{
          animation: 'fadeIn 300ms ease-out forwards',
        }}
      />
      
      {/* Close button in its own layer */}
      <div className="fixed top-6 right-6 z-[60]">
        <button 
          onClick={onClose}
          className="p-2 rounded-full bg-secondary-900/80 text-primary-100 hover:bg-secondary-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      
      {/* Modal content container */}
      <div className="fixed inset-0 z-50 overflow-auto">
        {/* Inner scrollable content */}
        <div 
          className={cn(
            "w-full h-full bg-background",
            className
          )}
          onClick={(e) => e.stopPropagation()}
          style={{
            animation: 'slideUp 500ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
            transformOrigin: 'bottom center',
          }}
        >
          {/* Add padding to avoid content appearing under the close button */}
          <div className="pt-0">
            {children}
          </div>
        </div>
      </div>

      {/* Add animation keyframes via style tag */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            transform: translateY(100%);
            opacity: 0.8;
          }
          to { 
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}