import { memo } from "react";
import { Typography } from "@/Components/UI/Typography";
import LazyImage from "./LazyImage";

const gridCls = (imgLeft) =>
  `grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start${
    imgLeft ? " lg:[&>*:first-child]:order-2" : ""
  }`;

const StepBadge = ({ number }) => (
  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center">
    <span className="text-white font-bold text-base">{number}</span>
  </div>
);

const HSection = memo(({
  id,
  title,
  titleVariant = "h2",
  titleClass = "",
  description,
  children,
  imageLabel,
  imgLeft = false,
  image,
  step,
}) => (
  <section className="flex flex-col gap-6" aria-labelledby={id}>
    {children ? (
      <>
        <div className="flex flex-col gap-2">
          {step && (
            <div className="flex items-center gap-3">
              <StepBadge number={step} />
              <Typography variant={titleVariant} id={id} className={titleClass}>
                {title}
              </Typography>
            </div>
          )}
          {!step && (
            <Typography variant={titleVariant} id={id} className={titleClass}>
              {title}
            </Typography>
          )}
          {description && (
            <Typography variant="p" className="leading-relaxed text-[var(--color-muted)] max-w-2xl">
              {description}
            </Typography>
          )}
        </div>
        <div className={gridCls(imgLeft)}>
          <div className="flex flex-col gap-4">{children}</div>
          <LazyImage src={image} alt={imageLabel} />
        </div>
      </>
    ) : (
      <div className={gridCls(imgLeft)}>
        <div className="flex flex-col gap-3">
          {step ? (
            <div className="flex items-center gap-3">
              <StepBadge number={step} />
              <Typography variant={titleVariant} id={id} className={titleClass}>
                {title}
              </Typography>
            </div>
          ) : (
            <Typography variant={titleVariant} id={id} className={titleClass}>
              {title}
            </Typography>
          )}
          {description && (
            <Typography variant="p" className="leading-relaxed text-[var(--color-muted)]">
              {description}
            </Typography>
          )}
        </div>
        <LazyImage src={image} alt={imageLabel} />
      </div>
    )}
  </section>
));
HSection.displayName = "HSection";

export default HSection;
