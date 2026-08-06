"use client";

import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/animated-section";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "NeuralFlow cut our customer support response time by 70%. The AI agents handle routine tickets flawlessly.",
    author: "Sarah Chen",
    role: "VP of Operations",
    company: "TechScale",
    avatar: "SC",
  },
  {
    quote:
      "We automated our entire sales pipeline in a week. The ROI was visible within the first month.",
    author: "Marcus Johnson",
    role: "Head of Sales",
    company: "GrowthLab",
    avatar: "MJ",
  },
  {
    quote:
      "The analytics alone are worth the price. We discovered insights we'd been missing for years.",
    author: "Elena Rodriguez",
    role: "CEO",
    company: "DataFirst",
    avatar: "ER",
  },
];

export function Testimonials() {
  return (
    <AnimatedSection id="testimonials" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by teams worldwide
          </h2>
        </div>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.author}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="gradient-bg flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
