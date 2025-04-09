// context/PopupContext.tsx
import { createContext, useState, useContext, ReactNode } from 'react';

type PopupContentType = 'save-files' | 'text-search' | 'multilingual' | 'calendar' | 'notifications' | null;

interface PopupContextType {
  isOpen: boolean;
  currentPopup: PopupContentType;
  openPopup: (type: PopupContentType) => void;
  closePopup: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPopup, setCurrentPopup] = useState<PopupContentType>(null);

  const openPopup = (type: PopupContentType) => {
    setCurrentPopup(type);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    // We delay resetting the current popup to allow for exit animations
    setTimeout(() => {
      setCurrentPopup(null);
    }, 300);
  };

  return (
    <PopupContext.Provider value={{ isOpen, currentPopup, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (context === undefined) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};