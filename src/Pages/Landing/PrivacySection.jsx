import React from "react";
import { cn } from "@/utils/cn";
import SecurityShield from "@/assets/Images/SecurityShield.png";
import { PRIVACY_FEATURES } from "../../utils/Data/data";
import { PrivacyFeature } from "@/Components/Feature/PrivacyFeature";
import { Typography } from "@/Components/UI/Typography";

const PrivacySection = () => {
  return (
    <section className="flex flex-col gap-8 lg:gap-10">
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2  flex-col relative flex-wrap lg:flex-row justify-start items-start gap-5",
        )}
      >
        {/* Hero Privacy Card */}
        <div
          className={cn(
            "flex-1 pl-4 pt-4 lg:pl-8 w-full pb-6 z-0 h-auto lg:h-[308px] lg:pt-8 relative flex bg-[var(--color-secondary-light)] rounded-[20px]",
            "border border-[var(--bg-light)] flex flex-col justify-start items-start lg:gap-2.5 overflow-hidden",
          )}
        >
          <Typography variant="h2">
            We never read your <br /> browsing history.
          </Typography>
          <div className="flex flex-col lg:flex-row justify-start items-start gap-5">
            <Typography variant="h2">Access stays encrypted.</Typography>

            <img
              className="hidden w-[359px] lg:block translate-y-[-20%]"
              src={SecurityShield}
              alt="Security illustration"
            />
          </div>
        </div>

        {/* Privacy Features List */}
        <div className="flex-1 z-10 flex translate-y-[-14px] lg:translate-y-0 flex-col w-full justify-start items-start lg:gap-4">
          {PRIVACY_FEATURES.map((item, index) => (
            <React.Fragment key={item.id}>
              <div className={`lg:mt-0  mt-[-30px] w-full`}>
                <PrivacyFeature
                  {...item}
                  dataLength={PRIVACY_FEATURES.length}
                  index={index}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <Typography variant="p-muted" className="text-sm text-center">
        No recording · No audio/video capture · No microphone/camera access · No
        data selling
      </Typography>
    </section>
  );
};

export default PrivacySection;
