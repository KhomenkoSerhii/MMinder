import React, { memo } from "react";
import CalendarIcon from "@/assets/icons/CalendarIcon.svg";
import { Typography } from "@/Components/Typography";

const Logo = memo(() => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={CalendarIcon}
        alt="Calendar"
        className="size-[18px] lg:size-[22px]"
      />
      <Typography variant="h3" className="text-[var(--color-primary)]">
        Minute Minder
      </Typography>
    </div>
  );
});

export default Logo;
