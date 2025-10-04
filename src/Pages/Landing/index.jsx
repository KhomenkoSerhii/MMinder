import React from "react";
import { FAQ_DATA, ADDITIONAL_FAQ_DATA, PRIVACY_FEATURES } from "./data";
import { Typography } from "@/Components/Typography";
import AccordionItem from "@/Components/AccordionItem";
import DashboardFilled from "@/assets/Images/DashboardFilled.png";
import { Button } from "@/Components/UI/Button";
import ChevronDown from "@/assets/icons/ChevronDown.svg";
import { CTASection } from "@/Pages/Landing/CTASection";
import { PrivacyFeature } from "@/Components/PrivacyFeature";
import SecurityShield from "@/assets/Images/SecurityShield.png";
import { FeatureCard } from "@/Components/FeatureCard";

import StarCalendar from "@/assets/icons/StarCalendar.svg";
import CallIcon from "@/assets/icons/CallIcon.svg";
import DocumentIcon from "@/assets/icons/DocumentIcon.svg";
import TeamIcon from "@/assets/icons/TeamIcon.svg";
import HalftimeBg from "@/assets/Images/HalftimeBg.png";
import WhyMinuteCardBg from "@/assets/Images/WhyMinuteCardBg.png";

import { cn } from "@/utils/cn";
import HeroSection from "./HeroSection";

const FAQItem = React.memo(({ item, index }) => {
  if (!item) return null;

  return (
    <article className="w-full py-3 border-b border-[var(--stroke-light)] last:border-b-0">
      <div className="flex flex-col lg:flex-row lg:items-center gap-5">
        <div className="flex items-start gap-2 lg:gap-4 lg:flex-1 flex-col lg:flex-row ">
          <Typography variant="p" className="text-[var(--light-grey)]">
            {String(index + 1).padStart(2, "0")}/
          </Typography>

          <Typography variant="p" className="text-[28px] font-semibold">
            {item.question}
          </Typography>
        </div>
        <div className="lg:flex-1 lg:pl-4">
          <Typography variant="p">{item.answer}</Typography>
        </div>
      </div>
    </article>
  );
});

FAQItem.displayName = "FAQItem";

const Home = () => {
  return (
    <main className="w-full">
      <div className="flex h-full flex-col lg:gap-25 gap-8 lg:py-12 py-0">
        <HeroSection />

        {/* Why Minute Minder Section */}
        <section
          className="flex flex-col lg:gap-10 gap-4"
          aria-labelledby="features-heading"
        >
          <header className="text-start">
            <Typography variant="h2" id="features-heading">
              Why Minute Minder
            </Typography>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-2">
            {/* Team Features */}
            <div className="flex flex-col lg:flex-row lg:gap-5 gap-2">
              <FeatureCard
                title="Built for teams"
                description="Draft a realistic, time‑boxed agenda from your calendar so everyone knows the plan"
                icon={StarCalendar}
              />
              <FeatureCard
                title="Calm control in the call"
                description="A clear on‑screen timer and milestone cues keep you on track - without being intrusive."
                icon={CallIcon}
              />
            </div>
            {/* Dashboard Preview Card */}
            <section className="relative w-full lg:flex hidden h-auto bg-[var(--color-primary-dark)] text-white rounded-[20px] justify-end border-[1px] border-solid border-[var(--bg-light)] overflow-hidden">
              <img src={WhyMinuteCardBg} alt="" />
            </section>
            <section className="relative w-full lg:flex hidden justify-center h-auto bg-[var(--color-secondary)] text-white rounded-[20px] overflow-hidden">
              <img src={HalftimeBg} alt="" />
            </section>
            <div className="flex flex-col lg:flex-row lg:gap-5 gap-2">
              <FeatureCard
                title="Decisions locked at the end"
                description="Wrap‑up nudges help confirm owners and dates so meetings end with outcomes."
                icon={DocumentIcon}
              />

              <FeatureCard
                title="Built for teams"
                description="Team templates, admin reminders, analytics, and simple plan controls."
                icon={TeamIcon}
              />
              <section className="relative w-full lg:hidden flex justify-center h-auto bg-[var(--color-secondary)] text-white rounded-[20px] overflow-hidden">
                <img src={HalftimeBg} alt="" />
              </section>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="flex flex-col gap-5" aria-labelledby="faq-heading">
          <header className="flex flex-col gap-5 lg:mb-10">
            <Typography variant="h2">Make the value concrete</Typography>
            <Typography variant="p" className="max-w-2xl">
              Below the fold we turn the promise into specifics: benefits first,
              then how it
              <br className="lg:block hidden" /> works. Structure inspired by
              Marketing Examples - clarity over creativity.
            </Typography>
          </header>

          {FAQ_DATA.map((item, index) => (
            <FAQItem key={item.id} item={item} index={index} />
          ))}
        </section>

        {/* Privacy & Security Section */}
        <section className="flex flex-col gap-10">
          <div
            className={cn(
              "flex  flex-col relative flex-wrap lg:flex-row justify-start items-start gap-5"
            )}
          >
            {/* Hero Privacy Card */}
            <div
              className={cn(
                "flex-1 pl-4 pt-4 lg:pl-8 w-full pb-6 z-0 h-auto lg:h-[416px] lg:pt-8 relative flex bg-[var(--color-secondary-light)] rounded-[20px]",
                "border border-[var(--bg-light)] flex flex-col justify-start items-start lg:gap-2.5 overflow-hidden"
              )}
            >
              <Typography variant="h2">
                We never read your <br /> browsing history.
              </Typography>
              <div className="flex flex-col lg:flex-row justify-start items-start gap-5">
                <Typography variant="h2">Access stays encrypted.</Typography>

                <img
                  className="hidden lg:block translate-y-[-20%]"
                  src={SecurityShield}
                  alt="Security illustration"
                />
              </div>
            </div>

            {/* Privacy Features List */}
            <div className="flex-1 z-10 flex translate-y-[-14px] lg:translate-y-0 flex-col w-full justify-start items-start lg:gap-4">
              {PRIVACY_FEATURES.map((item, index) => (
                <React.Fragment key={item.id}>
                  <div className={`lg:mt-0  mt-[-30px] w-full`}>
                    <PrivacyFeature
                      {...item}
                      dataLength={PRIVACY_FEATURES.length}
                      index={index}
                    />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        <CTASection />

        {/* Founder Section */}
        <section className="flex flex-col lg:flex-row  gap-4 lg:gap-10">
          <div className="flex-1 flex flex-col lg:gap-10 gap-4">
            <header>
              <Typography variant="h2">From the founder</Typography>
            </header>
            <Typography variant="p">
              We built Minute Minder after too many calls drifted and ran over.
              Our goal is simple: keep time visible, keep people calm, and end
              with owners & dates - without recording a thing. If that sounds
              like how you want your team to run, we made this for you.
            </Typography>
          </div>

          {/* Additional FAQ Accordion */}
          <div className="flex-1 flex flex-col gap-5">
            <h3 className="sr-only">Additional Questions</h3>
            {ADDITIONAL_FAQ_DATA.map((faq) => (
              <AccordionItem key={faq.id} faq={faq} />
            ))}
          </div>
        </section>

        {/* Cut your meetings costs today */}
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 rounded-[20px] pb-0 border border-[var(--stroke-light)] bg-[var(--bg-light)] lg:px-8 lg:pt-8 pt-4 px-4">
          <div className="flex-1 flex flex-col lg:gap-10 gap-4 lg:pb-8 pb-5">
            <header>
              <Typography variant="h2">
                Cut your meetings <br className="lg:block hidden" /> costs today
              </Typography>
            </header>
            <Typography variant="p">
              Add to Chrome – Free | Start 14‑day team pilot
            </Typography>
            <div className="flex items-center lg:gap-4 flex-wrap gap-2">
              <Button variant="primary" className="w-full sm:w-[179px]">
                Try for FREE
              </Button>

              <Button
                variant="ghost"
                size="2xl"
                className="flex items-center lg:justify-between justify-center"
                icon={ChevronDown}
                iconStyle="rotate-270 lg:relative absolute right-3"
              >
                <div className="lg:text-start text-center flex flex-col">
                  <Typography variant="p" className="font-bold">
                    Large team?
                  </Typography>
                  <span className="text-xs font-normal">
                    Book an enterprise demo
                  </span>
                </div>
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex lg:items-end">
            <img src={DashboardFilled} alt="" className="w-full h-auto" />
          </div>
        </section>
      </div>
    </main>
  );
};

Home.displayName = "Home";
export default Home;
