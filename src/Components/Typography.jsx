import React from "react";
import { cn } from "@/utils/cn";

const getTypographyClasses = (variant = "p") => {
  const variantClasses = {
    h1: "text-[36px] lg:text-6xl font-bold ",
    h2: "text-[28px] lg:text-5xl font-bold ",
    h3: "text-lg lg:text-2xl font-bold ",
    h4: "text-[20px] lg:text-[32px] font-semibold ",
    h5: "text-[18px] lg:text-[24px] font-semibold ",
    h6: "text-[16px] lg:text-[20px] font-semibold ",
    p: "text-base font-normal",

    "p-muted": "text-base font-normal text-[var(--color-muted)]",
    body: "text-base font-normal ",
  };

  const baseStyles = "leading-none text-black";

  const variantStyles = { baseStyles, ...variantClasses };

  return variantStyles[variant] || variantStyles.p;
};

const getElementTag = (variant) => {
  if (variant.startsWith("h")) return variant;
  if (variant === "lead" || variant === "subtitle") return "p";
  if (variant === "body") return "div";
  return "p";
};

const Typography = React.forwardRef(
  ({ className, variant = "p", as, children, ...props }, ref) => {
    const Component = as || getElementTag(variant);

    return (
      <Component
        className={cn(getTypographyClasses(variant), className)}
        ref={ref}
        {...props}
        {...(variant === "body"
          ? { dangerouslySetInnerHTML: { __html: children } }
          : {})}
      >
        {variant === "body" ? null : children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";

export { Typography };
