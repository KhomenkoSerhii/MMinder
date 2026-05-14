import React from "react";
import { EmojiFeatureCard } from "./EmojiFeatureCard";
import { Typography } from "@/Components/UI/Typography";

const FEATURES = [
  {
    id: "feature-ai-agendas",
    title: "AI agendas",
    description: "Create a plan from your Google Calendar.",
    icon: "🗓️",
  },
  {
    id: "feature-live-meet",
    title: "Live in Google Meet",
    description: "See your agenda and timer while you lead.",
    icon: "📺",
  },
  {
    id: "feature-nudges",
    title: "Smart nudges",
    description: "Know when to move on or wrap up.",
    icon: "🔔",
  },
  {
    id: "feature-wrap-ups",
    title: "Clear wrap-ups",
    description: "Confirm decisions and next steps.",
    icon: "✅",
  },
  {
    id: "feature-analytics",
    title: "Time analytics",
    description: "See where meetings overrun.",
    icon: "📊",
  },
  {
    id: "feature-team",
    title: "Team-ready flow",
    description: "Share agendas, timers, and cues with your team.",
    icon: "👥",
  },
];

const WhatDoesDoSubComponent = () => {
  return (
    <section
      className="flex flex-col gap-8 lg:gap-10"
      aria-labelledby="what-does-do-heading"
    >
      <header className="flex flex-col gap-5 lg:gap-10">
        <Typography variant="h2" as="h2" id="what-does-do-heading">
          What does Minute Minder do?
        </Typography>
        <Typography variant="p-muted" className="text-lg max-w-3xl">
          MinuteMinder gives you an AI meeting flow assistant inside Google Meet
          - connected to your calendar, visible during the call, and built to
          keep every meeting moving.
        </Typography>
      </header>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        role="list"
        aria-label="Product features"
      >
        {FEATURES.map(({ id, title, description, icon }) => (
          <EmojiFeatureCard
            key={id}
            title={title}
            description={description}
            icon={icon}
            className="bg-white border border-[var(--stroke-light)] min-w-0"
          />
        ))}
      </div>
    </section>
  );
};

export default WhatDoesDoSubComponent;
