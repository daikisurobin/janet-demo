"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small teams getting started.",
    monthlyPrice: 19,
    yearlyPrice: 15,
    features: [
      "5 AI agents",
      "1,000 tasks/month",
      "Basic analytics",
      "Email support",
      "5 integrations",
    ],
    cta: "Start free trial",
    popular: false,
  },
  {
    name: "Pro",
    description: "For growing teams that need more power and flexibility.",
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      "Unlimited AI agents",
      "10,000 tasks/month",
      "Advanced analytics",
      "Priority support",
      "Unlimited integrations",
      "Custom workflows",
      "API access",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For organizations with advanced security and scale needs.",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Everything in Pro",
      "Unlimited tasks",
      "Dedicated account manager",
      "SSO & SAML",
      "Custom SLAs",
      "On-premise deployment",
      "Audit logs",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <AnimatedSection id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start free for 14 days. No credit card required.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card p-1">
            <button
              onClick={() => setYearly(false)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                !yearly ? "gradient-bg text-white" : "text-muted-foreground"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                yearly ? "gradient-bg text-white" : "text-muted-foreground"
              )}
            >
              Yearly
              <span className="ml-1.5 text-xs opacity-80">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-card p-8",
                plan.popular
                  ? "border-primary shadow-xl shadow-primary/10 lg:scale-105"
                  : "border-border"
              )}
            >
              {plan.popular && (
                <span className="gradient-bg absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="mt-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={yearly ? "yearly" : "monthly"}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {plan.monthlyPrice !== null ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold">
                          ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    ) : (
                      <div className="text-4xl font-bold">Custom</div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  "mt-8 w-full rounded-xl py-3 text-sm font-semibold transition-all",
                  plan.popular
                    ? "gradient-bg text-white hover:opacity-90"
                    : "border border-border bg-background hover:bg-muted"
                )}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
