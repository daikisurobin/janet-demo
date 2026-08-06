"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

export interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextValue {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const STORAGE_KEY = "neuralflow-auth-user";

function readStoredUser(): User | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(readStoredUser);
  const [isLoading] = useState(false);

  const signIn = useCallback(async (email: string, password: string) => {
    await new Promise((r) => setTimeout(r, 800));
    if (!email || !password) throw new Error("Email and password are required");
    const newUser: User = {
      id: crypto.randomUUID(),
      name: email.split("@")[0],
      email,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    setUser(newUser);
  }, []);

  const signUp = useCallback(
    async (name: string, email: string, password: string) => {
      await new Promise((r) => setTimeout(r, 800));
      if (!name || !email || !password)
        throw new Error("All fields are required");
      const newUser: User = { id: crypto.randomUUID(), name, email };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
      setUser(newUser);
    },
    []
  );

  const signOut = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
