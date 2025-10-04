import React from "react";
import ChromeIcon from "@/assets/icons/ChromeIcon.svg";
import { Button } from "@/Components/UI/Button";
import { Typography } from "@/Components/UI/Typography";
import { cn } from "@/utils/cn";

const ActionSection = ({ variant = "default", className }) => {
  return (
    <div
      className={cn(
        "flex flex-row w-full justify-center lg:justify-start items-center gap-4 flex-wrap mt-5 lg:mt-0",
        className
      )}
    >
      <Button
        variant={variant}
        className="flex w-full lg:w-max gap-1.5"
        size="lg"
      >
        <img
          className="size-6 relative overflow-hidden"
          src={ChromeIcon}
          alt=""
        />
        Add to Chrome
      </Button>

      <div
        className={`w-[179px] ${
          variant === "primary" ? "text-black" : "text-white"
        } h-[52px] py-3 flex flex-col justify-center lg:items-start items-center`}
      >
        <Typography variant="p" className="font-bold">
          Free trial for 7 days
        </Typography>
        <Typography variant="p" className="text-[10px] font-normal">
          No credit card for the free plan.
        </Typography>
      </div>
    </div>
  );
};

export default ActionSection;
