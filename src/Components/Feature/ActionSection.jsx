import React from "react";
import ChromeIcon from "@/assets/icons/ChromeIcon.svg";
import { Button } from "@/Components/UI/Button";
import { cn } from "@/utils/cn";
import { CHROME_REDIRECT_URL } from "@/utils/constants";

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
        onClick={() => window.open(CHROME_REDIRECT_URL, "_self")}
      >
        <img
          className="size-6 relative overflow-hidden"
          src={ChromeIcon}
          alt=""
        />
        Add to Chrome
      </Button>
    </div>
  );
};

export default ActionSection;
