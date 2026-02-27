import React, { createContext, useContext, useState } from 'react';

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
}

const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <AppContext.Provider value={{ user, setUser, isAuthOpen, setIsAuthOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);