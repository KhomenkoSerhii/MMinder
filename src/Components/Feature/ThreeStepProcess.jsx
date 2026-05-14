import React from "react";
import { cn } from "@/utils/cn";
import { Typography } from "../UI/Typography";

const steps = [
  {
    number: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M20.5 11H19V7a2 2 0 0 0-2-2h-4V3.5A2.5 2.5 0 0 0 10.5 1h-1A2.5 2.5 0 0 0 7 3.5V5H3a2 2 0 0 0-2 2v3.5h1.5A2.5 2.5 0 0 1 5 13a2.5 2.5 0 0 1-2.5 2.5H1V19a2 2 0 0 0 2 2h4v-1.5A2.5 2.5 0 0 1 9.5 17a2.5 2.5 0 0 1 2.5 2.5V21h4a2 2 0 0 0 2-2v-4h1.5A2.5 2.5 0 0 0 22 12.5 2.5 2.5 0 0 0 20.5 11z" />
      </svg>
    ),
    title: "Install the browser extension",
    description: "Add MinuteMinder to Chrome and get set up in seconds.",
    highlighted: false,
  },
  {
    number: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6V11c0-3.07-1.64-5.64-4.5-6.32V4a1.5 1.5 0 0 0-3 0v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
      </svg>
    ),
    title: "Customize smart reminders",
    description:
      "Set timing cues and messages that keep every meeting on track.",
    highlighted: false,
  },
  {
    number: "03",
    icon: (
      <svg viewBox="0 0 118 126" className="w-22 h-22">
        <g transform="translate(0,126) scale(0.1,-0.1)">
          {/* trend arrow (filled shape) */}
          <path
            fill="white"
            d="M778 776 c2 -27 1 -55 -3 -64 -5 -13 -8 -12 -24 3 -19 16 -22 15 -76 -38 -31 -30 -72 -63 -90 -73 -29 -16 -37 -16 -59 -4 -24 12 -29 10 -80 -29 -30 -24 -60 -40 -66 -36 -19 12 -10 33 23 56 17 12 44 34 60 48 25 23 31 24 59 13 38 -14 48 -9 117 62 52 53 54 56 38 74 -9 10 -17 21 -17 25 0 8 39 15 80 13 35 -1 35 -2 38 -50z"
          />
          {/* bar 4 — tallest */}
          <path
            fill="white"
            d="M780 524 l0 -135 -37 3 -38 3 -3 133 -3 132 41 0 40 0 0 -136z"
          />
          {/* bar 3 */}
          <path
            fill="white"
            fillOpacity="0.9"
            d="M670 479 l0 -90 -37 3 -38 3 -3 74 c-2 41 -1 80 2 88 3 7 20 13 41 13 l35 0 0 -91z"
          />
          {/* bar 2 */}
          <path
            fill="white"
            fillOpacity="0.75"
            d="M558 468 l3 -78 -41 0 -40 0 0 81 0 80 38 -3 37 -3 3 -77z"
          />
          {/* bar 1 — shortest */}
          <path
            fill="white"
            fillOpacity="0.6"
            d="M445 435 c0 -39 -1 -40 -37 -43 l-38 -3 0 46 0 46 38 -3 c36 -3 37 -4 37 -43z"
          />
        </g>
      </svg>
    ),
    title: "Start saving up to $1,000/month",
    description:
      "Finish on time, cut overtime, and protect your billable hours.",
    highlighted: true,
    badge: "Big impact",
  },
];

const Arrow = () => (
  <div className="hidden md:flex items-center justify-center flex-shrink-0">
    <div className="w-8 h-8 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-[var(--color-primary)]">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
      </svg>
    </div>
  </div>
);

const ThreeStepProcess = () => {
  return (
    <section className="flex flex-col gap-8">
      <Typography variant="h2">
        Three-step <span className="text-[var(--color-primary)]">process</span>
      </Typography>
      <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-4">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div
              className={cn(
                "relative flex flex-col gap-5 rounded-2xl p-6 flex-1 bg-[var(--bg-light)]",
                step.highlighted &&
                  "border-2 border-[var(--color-primary)] bg-[linear-gradient(145deg,#ffffff_0%,#edfaee_55%,#d6f5d8_100%)]",
              )}
            >
              {step.badge && (
                <span className="absolute top-4 right-4 flex items-center gap-1.5 bg-[var(--color-primary)] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  {step.badge}
                </span>
              )}

              {/* Icon + number + title row */}
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "flex items-center justify-center w-14 h-14 rounded-lg flex-shrink-0 overflow-hidden",
                    step.highlighted
                      ? "bg-[var(--color-primary)] text-white"
                      : "bg-[var(--color-secondary)] text-[var(--color-primary)]",
                  )}
                >
                  {step.icon}
                </div>

                <div className="flex flex-col gap-0.5 pt-0.5">
                  <span className="text-xl font-bold text-[var(--color-primary)]">
                    {step.number}
                  </span>
                  <h3 className="font-bold text-[16px] leading-snug text-[#1e1e1e]">
                    {step.title}
                  </h3>
                  {/* Green separator */}
                  <div className="w-8 h-0.5 bg-[var(--color-primary)] rounded-full my-2" />
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>

            {index < steps.length - 1 && <Arrow />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ThreeStepProcess;
