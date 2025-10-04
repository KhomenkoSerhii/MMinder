import React, { memo } from "react";
import { Typography } from "@/Components/Typography";

const PrivacyFeature = memo(
  ({ icon, title, description, index, dataLength }) => {
    return (
      <div
        className={`p-3 lg:border-0 border flex-col lg:flex-row items-start lg:border-transparent border-[var(--stroke-light)] lg:pb-3  bg-[var(--bg-light)] w-full rounded-[20px] flex justify-start lg:items-center gap-2.5 ${index !== dataLength - 1 ? "pb-8" : "pb-3"}`}
      >
        <div className="lg:size-[68px] size-[42px] p-2.5 bg-white rounded-xl flex justify-center items-center gap-2.5">
          <img src={icon} alt="" />
        </div>
        <div className="flex-1 flex flex-col justify-end items-start gap-2.5">
          <Typography variant="h6" className="font-bold">
            {title}
          </Typography>
          <Typography variant="p">{description}</Typography>
        </div>
      </div>
    );
  }
);

PrivacyFeature.displayName = "PrivacyFeature";

export { PrivacyFeature };
