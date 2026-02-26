import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { MenuItem } from '@/data/menuData';

export interface CartItem extends MenuItem {
  quantity: number;
}

export type UserRole = 'customer' | 'director' | 'manager' | 'chef' | 'waiter' | 'designer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  branch?: string;
}

interface AppContextType {
  // Cart
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, qty: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  
  // Branch
  selectedBranch: string;
  setSelectedBranch: (id: string) => void;
  
  // Delivery
  selectedDeliveryArea: string;
  setSelectedDeliveryArea: (area: string) => void;
  deliveryFee: number;
  
  // Cart drawer
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  
  // Auth
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthOpen: boolean;
  setIsAuthOpen: (open: boolean) => void;

  // Voice
  voiceEnabled: boolean;
  setVoiceEnabled: (enabled: boolean) => void;
  speak: (text: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedBranch, setSelectedBranch] = useState('jinja-highway');
  const [selectedDeliveryArea, setSelectedDeliveryArea] = useState('');
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);

  const speak = useCallback((text: string) => {
    if (!voiceEnabled) return;
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.pitch = 1.05;
      utterance.volume = 1;
      window.speechSynthesis.speak(utterance);
    }
  }, [voiceEnabled]);

  const addToCart = useCallback((item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        speak(`${item.name} quantity updated to ${existing.quantity + 1}. Your cart has been updated.`);
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      speak(`${item.name} has been added to your cart! Tap the cart icon to review your order and proceed to checkout.`);
      return [...prev, { ...item, quantity: 1 }];
    });
  }, [speak]);

  const removeFromCart = useCallback((itemId: string) => {
    setCart(prev => prev.filter(i => i.id !== itemId));
  }, []);

  const updateQuantity = useCallback((itemId: string, qty: number) => {
    if (qty <= 0) {
      setCart(prev => prev.filter(i => i.id !== itemId));
    } else {
      setCart(prev => prev.map(i => i.id === itemId ? { ...i, quantity: qty } : i));
    }
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSetDeliveryArea = useCallback((area: string) => {
    setSelectedDeliveryArea(area);
    // Fee set externally via delivery area selection
  }, []);

  return (
    <AppContext.Provider value={{
      cart, addToCart, removeFromCart, updateQuantity, clearCart,
      cartTotal, cartCount,
      selectedBranch, setSelectedBranch,
      selectedDeliveryArea, setSelectedDeliveryArea: handleSetDeliveryArea,
      deliveryFee, 
      isCartOpen, setIsCartOpen,
      user, setUser,
      isAuthOpen, setIsAuthOpen,
      voiceEnabled, setVoiceEnabled, speak,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
