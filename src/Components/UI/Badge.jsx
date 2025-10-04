import React from "react";
import { Typography } from "@/Components/UI/Typography";
import { cn } from "@/utils/cn";

const Badge = React.memo(
  ({ children, icon, text, variant = "default", className, ...props }) => {
    const baseClasses = cn(
      "inline-flex h-fit justify-center px-3 py-1.5 items-center gap-2 rounded-full font-bold ",

      {
        "bg-[var(--bg-light)] text-[var(--color-error)] border border-[var(--color-error)]":
          variant === "default",
      },
      className
    );

    const iconClasses = cn("flex-shrink-0");

    return (
      <span className={baseClasses} {...props}>
        {/* Icon */}
        {icon && (
          <img className={iconClasses} aria-hidden="true" src={icon} alt="" />
        )}

        {/* Content */}
        {text && (
          <Typography variant="p" className="font-bold leading-none">
            {text}
          </Typography>
        )}

        {/* Custom children content */}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
