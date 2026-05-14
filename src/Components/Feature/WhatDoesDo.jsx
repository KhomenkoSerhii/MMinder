import React from "react";
import { Typography } from "@/Components/UI/Typography";
import { EmojiFeatureCard } from "@/Components/Feature/EmojiFeatureCard";
import { cn } from "@/utils/cn";

const PROBLEMS = [
  {
    id: "problem-overrun",
    heading: "Tired wasting time on meaningless overrun meetings?",
    description:
      "You block 30 minutes, it takes an hour. Every single time. And nobody seems to care except you.",
  },
  {
    id: "problem-no-plan",
    heading: "Jumping into calls with no plan and leaving with no result?",
    description:
      'No agenda, no goal, just talking in circles. Then the meeting ends and everyone\'s like "so what did we decide?"',
  },
  {
    id: "problem-cut-off",
    heading: "Sick of being the one who has to cut people off?",
    description:
      'Someone needs to say "let\'s wrap up" but it always sounds rude. So you just sit there watching the clock and saying nothing.',
  },
  {
    id: "problem-tracking",
    heading: "No clue how much time your team actually burns in meetings?",
    description:
      "Feels like half your week is calls. But you can't prove it, can't track it, and have no idea if it's getting worse.",
  },
];

const FEATURES = [
  {
    id: "feature-overruns",
    title: "Cut overruns by 50%",
    description:
      "Pre-end cues and overtime alerts help you wrap on time and avoid paid spillover.",
    icon: "🕒",
  },
  {
    id: "feature-focus",
    title: "Keep teams focused",
    description:
      "In-call reminders with optional sound drive decisions, not drift.",
    icon: "🔔",
  },
  {
    id: "feature-costs",
    title: "Reduce meeting costs",
    description:
      "Calendar-synced timing and simple analytics reduce meeting costs",
    icon: "🕒",
  },
  {
    id: "feature-team",
    title: "Team-ready",
    description:
      "Org templates, admin reminders, simple analytics and billing.",
    icon: "👥",
  },
  {
    id: "feature-ai",
    title: "AI meeting assistant (coming soon)",
    description: "Pre-meeting prep from Calendar: agenda, goals, timeboxes.",
    icon: "🦾",
  },
];

const getFeatureGridClassName = (index) => {
  const baseClasses = "bg-white border border-[var(--stroke-light)] min-w-0";

  if (index < 3) return cn(baseClasses, "lg:col-span-2");
  if (index === 3) return cn(baseClasses, "lg:col-start-2 lg:col-span-2");
  if (index === 4) return cn(baseClasses, "lg:col-start-4 lg:col-span-2");

  return baseClasses;
};

const ProblemCard = ({ heading, description }) => (
  <article className="p-5 lg:p-8 rounded-[20px] w-full lg:w-[527px] bg-[var(--bg-light)] flex flex-col gap-5">
    <Typography variant="h4" className="leading-tight">
      {heading}
    </Typography>
    <Typography variant="p" className="leading-snug">
      {description}
    </Typography>
  </article>
);

const WhatDoesDo = () => {
  return (
    <>
      <section
        className="flex flex-col gap-8 lg:gap-10"
        aria-labelledby="problems-heading"
      >
        <div className="flex justify-evenly gap-5 lg:gap-20 flex-wrap">
          {PROBLEMS.map(({ id, heading, description }) => (
            <ProblemCard key={id} heading={heading} description={description} />
          ))}
        </div>
      </section>
      <section
        className="flex flex-col gap-8 lg:gap-10"
        aria-labelledby="what-does-do-heading"
      >
        <header className="flex flex-col gap-5 lg:gap-10">
          <Typography variant="h2" as="h2" id="what-does-do-heading">
            What does Minute Minder do?
          </Typography>
          <Typography variant="p-muted" className="text-lg max-w-3xl">
            Keeps your meetings on time, on track, and ending with actual
            decisions — for you and your whole team.
          </Typography>
        </header>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 lg:gap-6"
          role="list"
          aria-label="Product features"
        >
          {FEATURES.map(({ id, title, description, icon }, index) => (
            <EmojiFeatureCard
              key={id}
              title={title}
              description={description}
              icon={icon}
              className={getFeatureGridClassName(index)}
            />
          ))}
        </div>

        <p className="text-sm text-[var(--color-muted)] text-center">
          <span className="sr-only">Privacy and security: </span>
          No audio/video capture • No browsing history • Encrypted.
        </p>
      </section>
    </>
  );
};

export default WhatDoesDo;
