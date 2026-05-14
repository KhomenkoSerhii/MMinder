import React from "react";
import { Typography } from "@/Components/UI/Typography";
import { cn } from "@/utils/cn";

const EmojiFeatureCard = React.memo(
  ({ icon, title, description, className, ...props }) => {
    return (
      <article
        className={cn(
          "p-5 lg:p-6 rounded-[20px] bg-white border border-[var(--stroke-light)] flex flex-col gap-2.5 min-w-0",
          className,
        )}
        {...props}
      >
        <div className="flex items-center gap-3">
          <span
            className="text-xl lg:text-2xl flex-shrink-0 leading-none select-none flex items-center justify-center"
            aria-hidden="true"
          >
            {icon}
          </span>
          <Typography variant="p" className="leading-tight text-xl font-bold">
            {title}
          </Typography>
        </div>
        <Typography variant="p" className="leading-snug text-black text-[18px]">
          {description}
        </Typography>
      </article>
    );
  },
);

EmojiFeatureCard.displayName = "EmojiFeatureCard";

export { EmojiFeatureCard };
