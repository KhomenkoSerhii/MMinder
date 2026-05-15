import React from "react";
import { Typography } from "@/Components/UI/Typography";
import { Badge } from "@/Components/UI/Badge";
import { Button } from "@/Components/UI/Button";
import FAQItem from "@/Components/Feature/FAQItem";
import { EmojiFeatureCard } from "@/Components/Feature/EmojiFeatureCard";
import SEO from "@/Components/SEO/SEO";
import { loginRedirect } from "@/utils";
import Checked from "@/assets/Images/Checked.png";
import CheckedLg from "@/assets/Images/CheckedLg.png";
import SecurityBanner from "@/assets/Images/SecurityBanner.png";
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
          className="flex flex-col lg:gap-x-12 w-full justify-between lg:flex-row h-full"
          aria-labelledby="features-heading"
        >
          <section
            className="flex flex-col gap-6 lg:gap-8 max-w-4xl"
            aria-labelledby="security-hero-heading"
          >
            <header className="text-start flex flex-col gap-4 lg:gap-5">
              <Typography variant="h1" id="security-hero-heading">
                Security{" "}
                <span className="text-[var(--color-primary)]">& Privacy</span>
              </Typography>
              <Typography variant="h5" className="font-semibold text-[#1e1e1e]">
                Meeting guidance without invasive tracking.
              </Typography>
              <Typography variant="p" className="max-w-3xl leading-relaxed">
                MinuteMinder helps you run better Google Meet calls with live
                timing, AI agendas, smart nudges, and wrap-up prompts - without
                listening to your calls, recording your meetings, or reading
                unrelated browser tabs.
              </Typography>
            </header>
            <TryFreeButton />
            {/* 2. Trust badges */}

            <div className="flex z-10 relative gap-2 shadow-sm rounded-[20px] bg-[var(--bg-light)]">
              <div className="flex flex-wrap p-5 gap-2 z-10 items-center !pr-0">
                {TRUST_BADGES.map((badge) => (
                  <Badge key={badge.id} icon={badge.icon} text={badge.text} />
                ))}
              </div>
              <img
                src={Checked}
                alt=""
                className=" xl:block hidden w-[180px] "
              />
              <img
                src={CheckedLg}
                alt=""
                className="sm:relative  z-0 absolute bottom-0 right-0 xl:hidden block flex-shrink-0"
              />
            </div>
          </section>

          <section className=" items-center relative hidden lg:flex rounded-[32px] pb-8 lg:pt-10 pl-8 bg-[var(--color-secondary)] flex-col gap-6">
            <img
              src={SecurityBanner}
              alt=""
              className="w-full max-w-[456px] rounded-tl-[8px]  rounded-bl-[8px]"
            />
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

        {/* 5. FAQ */}
        <section
          className="flex flex-col gap-6 lg:gap-8"
          aria-labelledby="security-faq-heading"
        >
          <Typography variant="h2" id="security-faq-heading">
            Frequently asked questions
          </Typography>
          <div className="flex flex-col">
            {SECURITY_FAQ.map((item, index) => (
              <FAQItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </section>

        {/* 6. Final CTA */}
        <section
          className="rounded-[24px] lg:rounded-[32px] bg-[var(--color-secondary)] p-6 lg:p-10 flex flex-col gap-6 items-start max-w-4xl"
          aria-labelledby="security-final-cta-heading"
        >
          <Typography variant="h2" id="security-final-cta-heading">
            Run better meetings with confidence.
          </Typography>
          <Typography variant="p" className="max-w-2xl leading-relaxed">
            Use MinuteMinder to keep Google Meet calls structured, on time, and
            outcome-focused - without invasive tracking.
          </Typography>
          <TryFreeButton />
        </section>
      </div>
    </main>
  );
};

export default SecurityPrivacy;
