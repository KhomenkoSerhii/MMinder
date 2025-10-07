import React from "react";
import { Typography } from "@/Components/UI/Typography";
import { HERO_DATA } from "../../utils/Data/data";
import { Card } from "@/Components/UI/Card";
import ImgBlock from "@/assets/Images/ImgBlock.png";
import { cn } from "@/utils/cn";
import { Badge } from "@/Components/UI/Badge";
import Checked from "@/assets/Images/Checked.png";
import CheckedLg from "@/assets/Images/CheckedLg.png";
import Timer from "@/assets/Images/Timer.png";
import { Button } from "@/Components/UI/Button";
import { getGridCols } from "@/utils";
import { CHROME_REDIRECT_URL } from "@/utils/constants";

const HeroSection = () => {
  return (
    <section
      className="flex flex-col lg:gap-x-12 w-full justify-between lg:flex-row h-full"
      aria-labelledby="features-heading"
    >
      <div className="flex flex-1 w-full lg:max-w-[750px] lg:gap-[31px] gap-4 flex-col justify-between items-center xl:items-start">
        <header className="text-start">
          <Typography variant="h1">
            Save more than{" "}
            <span className="text-[var(--color-primary)]">
              $1K/
              <br className="lg:block hidden" />
              month
            </span>{" "}
            on overtime meetings
          </Typography>
        </header>

        <section className=" items-center lg:hidden flex  relative  rounded-[18px] pb-3 px-3 bg-[var(--color-secondary)] flex-col space-y-2.5">
          <img src={Timer} alt="" className="absolute top-0 left-0 h-[30px]" />

          <img
            src={ImgBlock}
            alt=""
            className="w-full max-w-[334px] lg:hidden block "
          />
          <div className="p-5 bg-[var(--bg-light)] max-w-[456px] text-center rounded-[20px] border-[1px] border-solid border-[var(--stroke-light)]">
            <Typography variant="p">
              Trusted by marketing, product & ops teams running faster standups
              and sharper reviews.
            </Typography>
          </div>
        </section>

        <Button
          variant="primary"
          className="fex w-full flex-col lg:w-max lg:hidden  "
          size="lg"
          onClick={() => window.open(CHROME_REDIRECT_URL, "_blank")}
        >
          Try for FREE
          <p className="text-xs font-normal">
            No credit card for the free plan
          </p>
        </Button>

        <div
          className={cn(
            `grid grid-cols-1 gap-2`,
            getGridCols(HERO_DATA.cards.length)
          )}
        >
          {HERO_DATA.cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>

        <Button
          variant="primary"
          className="fex w-full flex-col lg:w-max lg:flex hidden "
          size="lg"
          onClick={() => window.open(CHROME_REDIRECT_URL, "_blank")}
        >
          Try for FREE
          <p className="text-xs font-normal">
            No credit card for the free plan
          </p>
        </Button>

        <div className="flex z-10 relative gap-2 shadow-sm rounded-[20px] bg-[var(--bg-light)]">
          <div className="flex flex-wrap p-5 gap-2 z-10 items-center">
            {HERO_DATA.badges.map((badge) => (
              <Badge key={badge.id} {...badge} />
            ))}
          </div>
          <img src={Checked} alt="" className=" xl:block hidden w-[200px] " />
          <img
            src={CheckedLg}
            alt=""
            className="sm:relative  z-0 absolute bottom-0 right-0 xl:hidden block flex-shrink-0"
          />
        </div>
      </div>
      <section className=" items-center relative hidden lg:flex rounded-[32px] pb-8 px-8 bg-[var(--color-secondary)] flex-col gap-6">
        <img src={Timer} alt="" className="absolute top-0 left-[-80px]" />

        <img src={ImgBlock} alt="" className="w-full max-w-[456px]" />
        <div className="p-5 bg-[var(--bg-light)] max-w-[456px] text-center rounded-[20px] border-[1px] border-solid border-[var(--stroke-light)]">
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
