// src/context/AppContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MenuItem } from '@/data/menuData';

export type UserRole = 'customer' | 'director' | 'manager' | 'chef' | 'waiter' | 'designer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  branch?: string;
}

interface AppContextType {
  user: User | null;
  setUser: (u: User | null) => void;

  isAuthOpen: boolean;
  setIsAuthOpen: (v: boolean) => void;

  selectedBranch: string;
  setSelectedBranch: (b: string) => void;

  cartItems: MenuItem[];
  setCartItems: (items: MenuItem[]) => void;
  isCartOpen: boolean;
  setIsCartOpen: (v: boolean) => void;

  speak: (text: string) => void; // Text-to-speech
}

const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const [selectedBranch, setSelectedBranch] = useState<string>('jinja-highway');
  const [cartItems, setCartItems] = useState<MenuItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Simple Text-to-Speech helper
  const speak = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        isAuthOpen,
        setIsAuthOpen,
        selectedBranch,
        setSelectedBranch,
        cartItems,
        setCartItems,
        isCartOpen,
        setIsCartOpen,
        speak,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);