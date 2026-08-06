"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, LogOut, Menu, Sparkles, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { AuthModal } from "@/components/auth-modal";
import { useAuth } from "@/context/auth-context";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const { user, signOut, isLoading } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const [authKey, setAuthKey] = useState(0);

  const openAuth = (mode: "signin" | "signup") => {
    setAuthMode(mode);
    setAuthKey((k) => k + 1);
    setAuthOpen(true);
    setMobileOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="glass border-b border-border">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <a href="#" className="flex items-center gap-2">
              <div className="gradient-bg flex h-8 w-8 items-center justify-center rounded-lg">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">NeuralFlow</span>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <ThemeToggle />
              {!isLoading && user ? (
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen((o) => !o)}
                    className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    <div className="gradient-bg flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="max-w-[120px] truncate">{user.name}</span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </button>
                  <AnimatePresence>
                    {userMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute right-0 mt-2 w-48 rounded-xl border border-border bg-card p-1 shadow-lg"
                      >
                        <div className="border-b border-border px-3 py-2">
                          <p className="truncate text-sm font-medium">{user.name}</p>
                          <p className="truncate text-xs text-muted-foreground">
                            {user.email}
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            signOut();
                            setUserMenuOpen(false);
                          }}
                          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-500 transition-colors hover:bg-muted"
                        >
                          <LogOut className="h-4 w-4" />
                          Sign out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => openAuth("signin")}
                    className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Sign in
                  </button>
                  <button
                    onClick={() => openAuth("signup")}
                    className="gradient-bg rounded-lg px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    Get started
                  </button>
                </>
              )}
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen((o) => !o)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden border-t border-border md:hidden"
              >
                <div className="space-y-1 px-4 py-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="border-t border-border pt-3">
                    {!isLoading && user ? (
                      <div className="space-y-2">
                        <p className="px-3 text-sm font-medium">{user.name}</p>
                        <button
                          onClick={() => {
                            signOut();
                            setMobileOpen(false);
                          }}
                          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-500 hover:bg-muted"
                        >
                          <LogOut className="h-4 w-4" />
                          Sign out
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => openAuth("signin")}
                          className="rounded-lg border border-border px-4 py-2 text-sm font-medium"
                        >
                          Sign in
                        </button>
                        <button
                          onClick={() => openAuth("signup")}
                          className="gradient-bg rounded-lg px-4 py-2 text-sm font-semibold text-white"
                        >
                          Get started
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <AuthModal
        key={authKey}
        isOpen={authOpen}
        onClose={() => setAuthOpen(false)}
        initialMode={authMode}
      />
    </>
  );
}
