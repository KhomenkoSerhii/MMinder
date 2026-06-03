import React from "react";
import { Typography } from "@/Components/UI/Typography";
import { HERO_DATA } from "../../utils/Data/data";
import ImgBlock from "@/assets/Images/ImgBlock.png";
import Timer from "@/assets/Images/Timer.png";
import { Button } from "@/Components/UI/Button";
import { Badge } from "@/Components/UI/Badge";
import ChromeIcon from "@/assets/icons/ChromeIcon.svg";
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
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-[var(--color-secondary)] text-[var(--color-primary-dark)]">
          <img src={ChromeIcon} alt="" className="size-4" aria-hidden="true" />
          Chrome Extension · Google Meet
        </span>

        {/* Headline + sub */}
        <div className="flex flex-col gap-4">
          <Typography variant="h1" id="hero-heading">
            Keep every Google Meet structured
          </Typography>
          <Typography
            variant="p"
            className="text-lg lg:text-xl text-[var(--color-muted)] max-w-[560px]"
          >
            AI agendas, live timing, and smart nudges - built right into your
            call. Connect Google Calendar once and MinuteMinder handles the
            rest.
          </Typography>
        </div>

        {/* CTA */}
        <Button
          variant="primary"
          className="fex w-full flex-col lg:w-max"
          size="lg"
          onClick={loginRedirect}
          data-gtm="try-for-free"
        >
          Try for FREE
          <p className="text-xs font-normal">
            No credit card for the free plan
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
        <div className="flex flex-wrap gap-2">
          {HERO_DATA.badges.map((badge) => (
            <Badge key={badge.id} {...badge} />
          ))}
        </div>
      </div>

      {/* Right column — desktop preview */}
      <section className="items-center relative hidden lg:flex rounded-[32px] pb-8 px-8 bg-[var(--color-secondary)] flex-col gap-6 flex-shrink-0">
        <img
          src={Timer}
          alt=""
          className="absolute top-0 left-[-80px]"
          aria-hidden="true"
        />
        <img
          src={ImgBlock}
          alt="MinuteMinder agenda and timer inside Google Meet"
          className="w-full max-w-[456px]"
        />
        <div className="p-5 bg-[var(--bg-light)] max-w-[456px] text-center rounded-[20px] border border-[var(--stroke-light)]">
          <Typography variant="p">
            Trusted by marketing, product & ops teams running faster standups
            and sharper reviews.
          </Typography>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
