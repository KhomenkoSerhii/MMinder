import React from "react";
import { Typography } from "@/Components/UI/Typography";

const PROBLEMS = [
  {
    id: "problem-overrun",
    heading: "Wasting time on meetings that always run over?",
    description:
      "You block 30 minutes. It turns into 50. Your next task, next call, or next client gets pushed - and those extra minutes add up fast.",
  },
  {
    id: "problem-no-plan",
    heading: "Jumping into calls with no plan and leaving with no result?",
    description:
      'No clear agenda, no shared goal, no timeboxes. The conversation feels productive, but by the end everyone is still asking, "So what did we decide?"',
  },
  {
    id: "problem-cut-off",
    heading: "Sick of being the one who has to cut people off?",
    description:
      'Someone needs to say "let\'s wrap up," but it always feels awkward. So the call keeps going, your schedule slips, and the ending gets rushed.',
  },
  {
    id: "problem-tracking",
    heading: "No clue how much time you actually lose in meetings?",
    description:
      "It feels like calls take over your week, but you can't track overtime, spot patterns, or see how much billable time is disappearing.",
  },
];

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
        <header className="flex flex-col gap-5 lg:gap-10">
          <Typography variant="h2" as="h2" id="problems-heading">
            Meetings drift when there's no clear agenda
          </Typography>
        </header>
        <div className="flex justify-evenly gap-5 lg:gap-20 flex-wrap">
          {PROBLEMS.map(({ id, heading, description }) => (
            <ProblemCard key={id} heading={heading} description={description} />
          ))}
        </div>
        <Typography
          variant="p-muted"
          className="text-sm max-w-3xl mx-auto text-center leading-relaxed"
        >
          Ten extra minutes may not feel like much. But across 10 client calls,
          that's more than 1.5 hours you could have used for another client,
          deeper work, or actual free time.
        </Typography>
      </section>
    </>
  );
};

export default WhatDoesDo;
