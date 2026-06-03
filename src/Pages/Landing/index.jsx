import React from "react";
import { Typography } from "@/Components/UI/Typography";
import { CTASection } from "@/Pages/Landing/CTASection";
import PrivacySection from "@/Pages/Landing/PrivacySection";
import { FeatureCard } from "@/Components/Feature/FeatureCard";

import StarCalendar from "@/assets/icons/StarCalendar.svg";
import CallIcon from "@/assets/icons/CallIcon.svg";
import DocumentIcon from "@/assets/icons/DocumentIcon.svg";
import TeamIcon from "@/assets/icons/TeamIcon.svg";
import HalftimeBg from "@/assets/Images/HalftimeBg.png";
import WhyMinuteCardBg from "@/assets/Images/WhyMinuteCardBg.png";

import HeroSection from "./HeroSection";
import FounderSection from "@/Components/Feature/FounderSection";
import { FOUNDER_SECTION_DATA } from "@/utils/Data/FAQs";
import Reveal from "@/Components/UI/Reveal";

const Landing = () => {
  const { title, description, faqs } = FOUNDER_SECTION_DATA.landing;
  return (
    <main className="w-full">
      <div className="main-layout">
        <HeroSection />

        {/* Why Minute Minder Section */}
        <Reveal
          as="section"
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
                className="flex-1"
              />
              <FeatureCard
                title="Calm control in the call"
                description="A clear on‑screen timer and milestone cues keep you on track - without being intrusive."
                icon={CallIcon}
                className="flex-1"
              />
            </div>
            {/* Dashboard Preview Card */}
            <section className="relative w-full lg:flex hidden h-auto bg-[var(--color-primary-dark)] text-white rounded-[20px] justify-end border-[1px] border-solid border-[var(--bg-light)] overflow-hidden">
              <img src={WhyMinuteCardBg} alt="" />
            </section>
            <section className="relative w-full lg:flex hidden justify-center h-auto bg-[var(--color-secondary)] text-white rounded-[20px] overflow-hidden">
              <img src={HalftimeBg} alt="" className="h-[200px] lg:h-[300px]" />
            </section>
            <div className="flex flex-col lg:flex-row lg:gap-5 gap-2">
              <FeatureCard
                title="Decisions locked at the end"
                description="Wrap‑up nudges help confirm owners and dates so meetings end with outcomes."
                icon={DocumentIcon}
                className="flex-1"
              />

              <FeatureCard
                title="Built for teams"
                description="Team templates, admin reminders, analytics, and simple plan controls."
                icon={TeamIcon}
                className="flex-1"
              />
              <section className="relative w-full lg:hidden flex justify-center h-auto bg-[var(--color-secondary)] text-white rounded-[20px] overflow-hidden">
                <img
                  src={HalftimeBg}
                  alt=""
                  className="h-[200px] lg:h-[300px]"
                />
              </section>
            </div>
          </div>
        </Reveal>

        {/* Privacy & Security Section */}
        <Reveal>
          <PrivacySection />
        </Reveal>

        <Reveal>
          <CTASection />
        </Reveal>

        <Reveal>
          <FounderSection title={title} description={description} faqs={faqs} />
        </Reveal>
      </div>
    </main>
  );
};

Landing.displayName = "Home";
export default Landing;
