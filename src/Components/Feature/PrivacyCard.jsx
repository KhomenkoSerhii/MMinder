import React from "react";
import { Typography } from "@/Components/UI/Typography";
import ChevronGreen from "@/assets/icons/ChevronGreen.svg";

const PrivacyCard = ({ title, description }) => {
  return (
    <div className="h-[200px] md:h-[256px] w-full md:max-w-[270px] text-white overflow-hidden rounded-[20px] flex flex-col">
      <div className="flex py-3 px-5 items-center justify-center bg-[var(--color-primary)]">
        <Typography variant="h6" className="font-bold text-white text-center">
          {title}
        </Typography>
      </div>

      <ul className="flex h-full flex-col pt-4 px-5 pb-5 gap-3 bg-[var(--bg-light)] rounded-b-[20px]">
        {description.map((item, idx) => (
          <li key={idx} className="flex gap-1.5 items-baseline">
            <img src={ChevronGreen} alt="" />
            <Typography variant="p" className="text-black text-sm lg:text-base">
              {item}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

PrivacyCard.displayName = "PrivacyCard";
export default PrivacyCard;
