import React from "react";
import { Typography } from "@/Components/UI/Typography";
import { cn } from "@/utils/cn";

const Card = React.memo(
  ({
    children,
    icon,
    title,
    description,
    variant = "default",
    className,
    ...props
  }) => {
    const baseClasses = cn(
      "p-5 rounded-[20px] flex lg:items-start items-center  flex-row lg:flex-col gap-2.5",
      "transition-all duration-200 hover:shadow-sm  lg:justify-between h-full",
      {
        "bg-[var(--bg-light)]": variant === "default",
      },
      className
    );

    const iconClasses = cn("size-8 flex justify-center items-center", {});

    return (
      <article className={baseClasses} {...props}>
        {/* Icon */}
        {icon && <img className={iconClasses} alt="" src={icon} />}

        {/* Content */}
        <div className="flex flex-col text-start gap-2.5">
          {title && <Typography variant="h4">{title}</Typography>}

          {description && <Typography variant="p">{description}</Typography>}

          {children}
        </div>
      </article>
    );
  }
);

Card.displayName = "Card";

export { Card };
