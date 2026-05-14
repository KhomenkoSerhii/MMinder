import React from "react";
import { Typography } from "@/Components/UI/Typography";
import { cn } from "@/utils/cn";

const FeatureCard = React.memo(
  ({ title, description, icon, className, ...props }) => {
    const baseClasses = cn(
      "p-5 rounded-[20px] flex flex-col gap-5 bg-[var(--bg-light)] h-[218px] lg:h-[300px]",
      className,
    );

    const iconClasses = cn(
      "size-[68px] p-2.5 rounded-[12px] flex justify-center items-center bg-[var(--color-secondary-light)]",
    );

    return (
      <article className={baseClasses} {...props}>
        <div className={iconClasses} aria-hidden="true">
          <div className="size-8 flex justify-center items-center">
            <img src={icon} alt="Feature icon" />
          </div>
        </div>

        <div className="flex flex-col gap-2.5 flex-1">
          <Typography variant="h3">{title}</Typography>

          <Typography variant="p">{description}</Typography>
        </div>
      </article>
    );
  },
);

FeatureCard.displayName = "FeatureCard";

export { FeatureCard };
