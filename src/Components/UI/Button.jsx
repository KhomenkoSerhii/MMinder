import { cn } from "@/utils/cn";
import * as React from "react";

const getButtonClasses = (variant = "primary", size = "default") => {
  const baseClasses =
    "flex relative rounded-full text-base font-bold items-center justify-center whitespace-nowrap transition-colors disabled:bg-neutral-300 disabled:pointer-events-none focus:outline-none cursor-pointer ";

  const variantClasses = {
    primary:
      "bg-[var(--color-primary-light)] text-white p-3 hover:bg-[var(--color-primary-light-hover)] transition-all duration-200",
    secondary:
      "bg-white text-[var(--color-primary-dark)] p-3 hover:bg-[var(--color-secondary-light)] transition-all duration-200",
    ghost:
      "bg-[var(--color-secondary)] text-[var(--color-primary-dark)] p-3 hover:bg-[var(--color-secondary-light)] text-center transition-all duration-200",
    transparent:
      "bg-transparent p-3 border border-[var(--stroke-light)] hover:bg-[var(--bg-light)] text-center transition-all duration-200",
  };

  const sizeClasses = {
    lg: "px-5 h-[52px]",
    md: "px-5 h-[44px]",
    "2xl": "px-5 py-3 h-[52px] w-full sm:w-[230px]",
  };

  return cn(baseClasses, variantClasses[variant], sizeClasses[size]);
};

const Button = React.forwardRef(
  (
    {
      className,
      variant = "primary",
      size = "default",
      loading,
      children,
      icon,
      iconStyle,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(getButtonClasses(variant, size), className)}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? (
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
            <span className="ml-2">{children}</span>
          </div>
        ) : (
          children
        )}
        {icon && <img src={icon} alt="" className={iconStyle} />}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
