"use client";

import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section";
import {
  BarChart3,
  Bot,
  Brain,
  Lock,
  Plug,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Intelligent Automation",
    description:
      "Automate repetitive tasks with AI that learns from your workflows and improves over time.",
  },
  {
    icon: Bot,
    title: "Custom AI Agents",
    description:
      "Deploy specialized agents for sales, support, and operations — tailored to your business rules.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Get actionable insights from your data with natural language queries and visual dashboards.",
  },
  {
    icon: Plug,
    title: "Seamless Integrations",
    description:
      "Connect with Slack, Notion, Salesforce, and 50+ tools in minutes with our no-code builder.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "SOC 2 Type II certified with end-to-end encryption, SSO, and granular access controls.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Sub-second response times with global edge deployment and intelligent caching.",
  },
];

export function Features() {
  return (
    <AnimatedSection id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to scale with AI
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From automation to analytics, NeuralFlow gives your team superpowers
            without the complexity.
          </p>
        </div>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="gradient-bg mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-110">
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
