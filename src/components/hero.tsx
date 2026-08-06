"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/3 right-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-sm backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Powered by GPT-4 & Claude</span>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
              New
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Build smarter with{" "}
            <span className="gradient-text">AI that understands</span> your
            business
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            NeuralFlow automates workflows, generates insights, and scales your
            operations with enterprise-grade AI — no code required.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#pricing"
              className="gradient-bg group inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:opacity-90 hover:shadow-xl hover:shadow-primary/30"
            >
              Start free trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-8 py-3.5 text-base font-semibold transition-colors hover:bg-muted">
              <Play className="h-4 w-4" />
              Watch demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              <span>10x faster workflows</span>
            </div>
            <div className="hidden h-4 w-px bg-border sm:block" />
            <span>Trusted by 2,000+ teams</span>
            <div className="hidden h-4 w-px bg-border sm:block" />
            <span>99.9% uptime SLA</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="animate-float rounded-2xl border border-border bg-card p-2 shadow-2xl shadow-primary/10">
            <div className="rounded-xl bg-muted/50 p-4 sm:p-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-muted-foreground">
                  NeuralFlow Dashboard
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Tasks automated", value: "12,847", change: "+24%" },
                  { label: "Time saved", value: "340h", change: "+18%" },
                  { label: "AI accuracy", value: "98.7%", change: "+2.1%" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-border bg-card p-4"
                  >
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="mt-1 text-2xl font-bold">{stat.value}</p>
                    <p className="mt-1 text-xs font-medium text-green-500">
                      {stat.change}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg border border-border bg-card p-4">
                <div className="flex items-start gap-3">
                  <div className="gradient-bg flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium">AI Assistant</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      I&apos;ve analyzed your Q3 data and identified 3
                      opportunities to reduce costs by 15%. Would you like me to
                      draft an action plan?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
