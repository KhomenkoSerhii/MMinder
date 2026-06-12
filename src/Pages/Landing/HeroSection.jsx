import React from "react";
import { Typography } from "@/Components/UI/Typography";
import { HERO_DATA } from "../../utils/Data/data";
import ImgBlock from "@/assets/Images/ImgBlock.png";
import Timer from "@/assets/Images/Timer.png";
import { Button } from "@/Components/UI/Button";
import { Badge } from "@/Components/UI/Badge";
import ChromeIcon from "@/assets/icons/ChromeIcon.svg";
import HeroRightSection from "@/Components/Feature/HeroRightSection";
import { loginRedirect } from "@/utils";

const HeroSection = () => {
  return (
    <section
      className="flex flex-col lg:gap-x-12 w-full justify-between lg:flex-row h-full"
      aria-labelledby="hero-heading"
    >
      {/* Left column */}
      <div className="flex flex-1 w-full lg:max-w-[720px] lg:gap-10 gap-6 flex-col justify-center items-start">
        {/* Context pill */}
        <span
          className="animate-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-[var(--color-secondary)] text-[var(--color-primary-dark)]"
          style={{ animationDelay: "0ms" }}
        >
          <img src={ChromeIcon} alt="" className="size-4" aria-hidden="true" />
          Chrome Extension · Google Meet
        </span>

        {/* Headline + sub */}
        <div className="flex flex-col gap-4">
          <Typography
            variant="h1"
            id="hero-heading"
            className="animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            Run client meetings like a pro in Google Meet
          </Typography>
          <Typography
            variant="p"
            className="animate-fade-up text-lg lg:text-xl text-[var(--color-muted)] max-w-[560px]"
            style={{ animationDelay: "200ms" }}
          >
            MinuteMinder adds live timing, agenda guidance, and smart nudges
            inside every Google Meet call — so meetings stay focused, on time,
            and end with clear next steps.
          </Typography>
        </div>

        {/* CTA */}
        <Button
          variant="primary"
          className="animate-fade-up fex w-full flex-col lg:w-max transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg"
          size="lg"
          onClick={loginRedirect}
          data-gtm="try-for-free"
          style={{ animationDelay: "300ms" }}
        >
          Try for FREE
          <p className="text-xs font-normal">
            Free plan • No credit card required
          </p>
        </Button>

        {/* Mobile preview */}
        <section className="items-center lg:hidden flex relative rounded-[18px] pb-3 px-3 bg-[var(--color-secondary)] flex-col space-y-2.5 w-full">
          <img
            src={Timer}
            alt=""
            className="absolute top-0 left-0 h-[30px]"
            aria-hidden="true"
          />
          <img
            src={ImgBlock}
            alt="MinuteMinder agenda and timer inside Google Meet"
            className="w-full max-w-[334px]"
          />
        </section>

        {/* Privacy badges */}
        <div
          className="animate-fade-up flex flex-wrap gap-2"
          style={{ animationDelay: "400ms" }}
        >
          {HERO_DATA.badges.map((badge) => (
            <Badge key={badge.id} {...badge} />
          ))}
        </div>
      </div>

      {/* Right column — desktop preview */}
      <HeroRightSection
        className="animate-fade-up hidden lg:block flex-shrink-0"
        style={{ animationDelay: "250ms" }}
      />
    </section>
  );
};

export default HeroSection;
