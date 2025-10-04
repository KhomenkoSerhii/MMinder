import React from "react";
import { cn } from "@/utils/cn";
import { Typography } from "@/Components/UI/Typography";
import { Button } from "@/Components/UI/Button";
import { memo } from "react";
import ChromeIcon from "@/assets/icons/ChromeIcon.svg";
import ChromePartImage from "@/assets/Images/ChromePartImage.png";
import ActionSection from "@/Components/Feature/ActionSection";

const CTASection = memo(() => {
  return (
    <section
      className={cn(
        "relative h-auto bg-[var(--color-primary-dark)] text-white rounded-[20px] flex  justify-between items-start gap-4 lg:gap-10 overflow-hidden lg:pb-8"
      )}
    >
      <div className=" flex-col justify-between  h-fill-available h-full gap-5 px-8 pt-8 lg:flex hidden">
        <Typography variant="h2">
          Make time visible. <br />
          Make decisions inevitable.
        </Typography>

        <Typography variant="p">
          Add Minute Minder to Chrome and finish your next call on time. <br />{" "}
          No credit card. No recording.
        </Typography>

        <ActionSection variant="secondary" />
      </div>

      <div className="w-full flex-col justify-between h-full p-4 lg:hidden flex">
        <Typography variant="h2">
          Make time visible. <br />
          Make decisions
        </Typography>
        <div>
          <div className="flex">
            <div className="flex flex-col gap-4 w-full justify-between">
              <Typography variant="h2">inevitable.</Typography>

              <Typography variant="p">
                Add Minute Minder to Chrome and finish your next call on time.
              </Typography>
            </div>
            <img
              className="w-[167px] object-contain right-0 h-auto top-0 rounded-tl-[20px] rounded-bl-[20px]"
              src={ChromePartImage}
              alt=""
            />
          </div>
          <Typography variant="p">No credit card. No recording. </Typography>
        </div>
        <ActionSection variant="secondary" />
      </div>

      <img
        className="w-1/3 xl:w-auto top-0 lg:block hidden lg:rounded-tl-none rounded-tl-[20px] rounded-bl-[20px]"
        src={ChromePartImage}
        alt=""
      />
    </section>
  );
});

CTASection.displayName = "CTASection";

export { CTASection };
