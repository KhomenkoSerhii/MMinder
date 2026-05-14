import React from "react";
import { Typography } from "@/Components/UI/Typography";
import { cn } from "@/utils/cn";

const flipShell =
  "[perspective:1000px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-light)] rounded-[20px] cursor-pointer";
const flipInner =
  "relative size-full min-h-[6.75rem] [transform-style:preserve-3d] transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] motion-reduce:duration-150 group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]";
const flipFace =
  "absolute inset-0 flex rounded-[20px] p-5 [backface-visibility:hidden]";
const flipFaceFront =
  "flex-col items-start justify-between gap-2.5 bg-[var(--bg-light)] text-start shadow-sm border border-transparent transition-all group-hover:border-[var(--color-primary)] group-hover:shadow-md";
const flipFaceBack =
  "[transform:rotateY(180deg)] flex-col justify-center items-start gap-3 bg-[var(--bg-light)] shadow-sm";

const Card = React.memo(
  ({
    children,
    icon,
    title,
    description,
    variant = "default",
    titleVariant = "h4",
    className,
    flipDescriptionOnHover = false,
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

    if (flipDescriptionOnHover && title && description) {
      return (
        <article
          className={cn(
            "group h-full overflow-hidden rounded-[20px]",
            flipShell,
            className
          )}
          tabIndex={0}
          aria-label={`${title}. ${description}`}
          {...props}
        >
          <div className={flipInner}>
            {/* Front */}
            <div className={cn(flipFace, flipFaceFront)}>
              {icon && <img className={iconClasses} alt="" src={icon} />}
              <Typography variant={titleVariant}>{title}</Typography>
            </div>

            {/* Back */}
            <div className={cn(flipFace, flipFaceBack)}>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                {description}
              </p>
              {children}
            </div>
          </div>
        </article>
      );
    }

    return (
      <article className={baseClasses} {...props}>
        {/* Icon */}
        {icon && <img className={iconClasses} alt="" src={icon} />}

        {/* Content */}
        <div className="flex flex-col text-start gap-2.5">
          {title && <Typography variant={titleVariant}>{title}</Typography>}

          {description && <Typography variant="p">{description}</Typography>}

          {children}
        </div>
      </article>
    );
  }
);

Card.displayName = "Card";

export { Card };
