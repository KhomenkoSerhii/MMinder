import React from "react";
import { Typography } from "@/Components/UI/Typography";
import { Badge } from "@/Components/UI/Badge";
import { Button } from "@/Components/UI/Button";
import FounderSection from "@/Components/Feature/FounderSection";
import { EmojiFeatureCard } from "@/Components/Feature/EmojiFeatureCard";
import SEO from "@/Components/SEO/SEO";
import { loginRedirect } from "@/utils";
import DashboardFilled from "@/assets/Images/DashboardFilled.png";
import SecurityHeroShield from "@/assets/Images/SecurityHeroShield.svg";
import {
  TRUST_BADGES,
  DATA_USE_CARDS,
  EXTENSION_BULLETS,
  SECURITY_FAQ,
} from "./data";

const TryFreeButton = ({ className = "" }) => (
  <Button
    variant="primary"
    className={`flex w-full flex-col lg:w-max ${className}`}
    size="lg"
    onClick={loginRedirect}
    data-gtm="try-for-free"
  >
    Try for FREE
    <p className="text-xs font-normal">No credit card for the free plan</p>
  </Button>
);

const SecurityPrivacy = () => {
  return (
    <main className="w-full">
      <SEO page="securityPrivacy" />
      <div className="main-layout">
        {/* 1. Hero */}
        <section
          className="flex w-full h-full flex-col justify-between lg:flex-row lg:items-stretch lg:gap-x-12"
          aria-labelledby="features-heading"
        >
          <section
            className="flex max-w-4xl flex-col gap-5 lg:flex-1 lg:gap-6"
            aria-labelledby="security-hero-heading"
          >
            <header className="text-start flex flex-col gap-3 lg:gap-4">
              <Typography variant="h2" id="security-hero-heading">
                Security{" "}
                <span className="text-[var(--color-primary)]">& Privacy</span>
              </Typography>
              <Typography variant="h5" className="font-semibold text-[#1e1e1e]">
                Meeting guidance without invasive tracking.
              </Typography>
              <Typography variant="p" className="leading-relaxed">
                MinuteMinder helps you run better Google Meet calls with live
                timing, AI agendas, smart nudges, and wrap-up prompts - without
                listening to your calls, recording your meetings, or reading
                unrelated browser tabs.
              </Typography>
            </header>
            <TryFreeButton />
            {/* 2. Trust badges */}

            <div className="relative z-10 flex rounded-[20px] border border-[var(--stroke-light)] bg-[var(--bg-light)] p-5 shadow-sm lg:p-6">
              <div className="z-10 flex flex-wrap items-center gap-2">
                {TRUST_BADGES.map((badge) => (
                  <Badge key={badge.id} icon={badge.icon} text={badge.text} />
                ))}
              </div>
            </div>
          </section>
          <section className="relative mt-6 flex w-full items-stretch justify-center lg:mt-0 lg:w-auto lg:max-w-[540px] lg:flex-1 lg:justify-end">
            <div className="flex w-full max-w-[500px] items-center rounded-[28px] border border-[var(--stroke-light)] bg-[var(--color-secondary)] p-4 shadow-sm lg:p-5 xl:p-6">
              <img
                src={SecurityHeroShield}
                alt="MinuteMinder security shield illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </section>
        </section>

        {/* 3. What data is used for */}
        <section
          className="flex flex-col gap-6 lg:gap-8"
          aria-labelledby="data-use-heading"
        >
          <header className="flex flex-col gap-4 max-w-3xl">
            <Typography variant="h2" id="data-use-heading">
              What MinuteMinder uses meeting context for
            </Typography>
            <Typography variant="p" className="leading-relaxed">
              MinuteMinder may use Google Calendar and meeting context to
              support the core product experience: timers, AI agendas,
              reminders, nudges, analytics, and wrap-up prompts.
            </Typography>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {DATA_USE_CARDS.map((card) => (
              <EmojiFeatureCard
                key={card.id}
                icon={card.icon}
                title={card.title}
                description={card.description}
                className="bg-[var(--bg-light)] border-[var(--stroke-light)] min-w-0"
              />
            ))}
          </div>
        </section>

        {/* 4. Chrome extension permissions */}
        <section
          className="mx-auto w-full max-w-4xl rounded-[20px] lg:rounded-[32px] bg-[var(--bg-light)] p-6 lg:p-10 flex flex-col gap-5 border border-[var(--stroke-light)]"
          aria-labelledby="extension-permissions-heading"
        >
          <Typography variant="h2" id="extension-permissions-heading">
            Why the Chrome extension needs permissions
          </Typography>
          <Typography variant="p" className="leading-relaxed">
            MinuteMinder requests permissions so it can work inside Google Meet
            and display the right meeting tools at the right time.
          </Typography>
          <ul className="flex flex-col gap-3 list-none pl-0">
            {EXTENSION_BULLETS.map((line) => (
              <li key={line} className="flex gap-3">
                <span
                  className="text-[var(--color-primary)] font-bold flex-shrink-0"
                  aria-hidden
                >
                  •
                </span>
                <Typography variant="p" className="leading-snug">
                  {line}
                </Typography>
              </li>
            ))}
          </ul>
        </section>

        {/* 5. FAQ — same layout as FounderSection (copy + accordions) */}
        <section aria-labelledby="security-faq-heading">
          <h2 id="security-faq-heading" className="sr-only">
            Frequently asked questions
          </h2>
          <FounderSection
            title="FAQs"
            description="Got questions? We’ve got answers."
            faqs={SECURITY_FAQ}
          />
        </section>

      </div>

      {/* 6. Final CTA */}
      <section
        className="w-full"
        aria-labelledby="security-final-cta-heading"
      >
        <div className="main-layout py-8 lg:py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 rounded-[20px] pb-0 border border-[var(--stroke-light)] bg-[var(--color-secondary)] lg:px-8 lg:pt-8 pt-4 px-4">
            <div className="flex-1 flex flex-col lg:gap-10 gap-4 lg:pb-8 pb-5">
              <header>
                <Typography variant="h2" id="security-final-cta-heading">
                  Run better meetings with confidence.
                </Typography>
              </header>
              <Typography variant="p" className="max-w-2xl leading-relaxed">
                Use MinuteMinder to keep Google Meet calls structured, on time,
                and outcome-focused - without invasive tracking.
              </Typography>
              <TryFreeButton className="sm:w-[179px]" />
            </div>
            <div className="hidden lg:flex lg:items-end">
              <img
                src={DashboardFilled}
                alt="MinuteMinder dashboard preview"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SecurityPrivacy;
