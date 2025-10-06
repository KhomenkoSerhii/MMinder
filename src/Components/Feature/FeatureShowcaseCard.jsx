import React from "react";
import { Typography } from "@/Components/UI/Typography";
import { cn } from "@/utils/cn";

const FeatureShowcaseCard = ({
  title,
  description,
  height = "normal",
  width = "narrow",
  bgColor = "light",
  image,
  imgStyle,
  children,
  id,
  className,
}) => {
  const heightClasses = {
    tall: "lg:h-[620px] h-max",
    normal: "lg:h-[300px] h-max",
  };

  const widthClasses = {
    narrow: "w-full lg:w-[315px]",
    wide: "w-full lg:flex-1",
  };

  const bgClasses = {
    light: "bg-[var(--bg-light)]",
    green: "bg-[var(--color-secondary-light)]",
  };

  return (
    <div
      className={cn(
        "relative rounded-[20px] flex flex-col gap-5 overflow-hidden",
        heightClasses[height],
        widthClasses[width],
        bgClasses[bgColor],
        className
      )}
    >
      {title || description ? (
        <div className="flex flex-col gap-2.5 z-10 p-5">
          <Typography
            variant="h6"
            className={cn("font-bold", id === 2 && "lg:hidden")}
          >
            {title}
          </Typography>
          <Typography
            variant="p"
            className={cn("leading-normal", id === 2 && "lg:hidden")}
          >
            {description}
          </Typography>
        </div>
      ) : null}

      {image && (
        <img src={image} alt={title} className={cn("absolute", imgStyle)} />
      )}

      {children}
    </div>
  );
};

FeatureShowcaseCard.displayName = "FeatureShowcaseCard";
export default FeatureShowcaseCard;
