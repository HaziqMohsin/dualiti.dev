import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export function Modal({ isOpen, onClose, children, className }: ModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      // Lock body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll when modal is closed
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsAnimating(false);
    }
  };

  return (
    <div 
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/80 transition-opacity duration-300',
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
      )}
      onClick={onClose}
      onAnimationEnd={handleAnimationEnd}
    >
      <div 
        className={cn(
          'relative w-full h-full flex items-center justify-center transition-all duration-300',
          isOpen ? 'scale-100' : 'scale-95',
          className
        )} 
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-mono-800/20 hover:bg-mono-800/30 transition-colors text-mono-100 z-50"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
}