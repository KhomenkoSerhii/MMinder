import React from "react";
import { Typography } from "@/Components/UI/Typography";
import { HERO_DATA } from "../../utils/Data/data";
import { Card } from "@/Components/UI/Card";
import ImgBlock from "@/assets/Images/ImgBlock.png";
import { cn } from "@/utils/cn";
import ActionSection from "@/Components/Feature/ActionSection";
import { Badge } from "@/Components/UI/Badge";
import Checked from "@/assets/Images/Checked.png";
import CheckedLg from "@/assets/Images/CheckedLg.png";
import ImgBlockLg from "@/assets/Images/ImgBlockLg.png";

const HeroSection = () => {
  const getGridCols = (length) => {
    switch (length) {
      case 1:
        return "lg:grid-cols-1";
      case 2:
        return "lg:grid-cols-2";
      case 3:
        return "lg:grid-cols-3";
      case 4:
        return "lg:grid-cols-4";
      default:
        return "lg:grid-cols-3";
    }
  };

  return (
    <section
      className="flex flex-col lg:flex-row h-full"
      aria-labelledby="features-heading"
    >
      <div className="flex lg:gap-[31px] gap-4 flex-col justify-between items-center xl:items-start">
        <header className="text-start">
          <Typography variant="h1">
            Save more than{" "}
            <span className="text-[var(--color-primary)]">$1K/month</span> on
            overtime meetings
          </Typography>
        </header>
        <img src={ImgBlockLg} alt="" className="xl:hidden block w-[334px]" />
        <ActionSection variant="primary" className="lg:hidden flex mt-0" />

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

        <ActionSection variant="primary" className="lg:flex hidden" />

        <div className="flex z-10 relative gap-2 shadow-sm rounded-[20px] bg-[var(--bg-light)]">
          <div className="flex flex-wrap p-5 gap-2 z-10 items-center">
            {HERO_DATA.badges.map((badge) => (
              <Badge key={badge.id} {...badge} />
            ))}
          </div>
          <img
            src={Checked}
            alt=""
            className=" xl:block hidden flex-shrink-0"
          />
          <img
            src={CheckedLg}
            alt=""
            className="sm:relative  z-0 absolute bottom-0 right-0 xl:hidden block flex-shrink-0"
          />
        </div>
      </div>
      <img src={ImgBlock} alt="" className="xl:block hidden" />
    </section>
  );
};

export default HeroSection;
