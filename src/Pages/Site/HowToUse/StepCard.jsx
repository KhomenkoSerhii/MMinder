import { memo } from "react";
import { Typography } from "@/Components/UI/Typography";
import BulletList from "./BulletList";

const StepCard = memo(({ number, title, description, bullets, note }) => (
  <div className="flex items-stretch rounded-[12px] overflow-hidden border border-[var(--stroke-light)]">
    <div className="flex-shrink-0 w-14 bg-[var(--color-primary)] flex items-center justify-center">
      <span className="text-white font-bold text-2xl">{number}</span>
    </div>
    <div className="flex-1 bg-[var(--color-secondary)] px-5 py-4 flex flex-col gap-2">
      <Typography variant="h5" className="text-[var(--color-primary)] font-bold">
        {title}
      </Typography>
      {description && (
        <Typography variant="p" className="leading-relaxed">{description}</Typography>
      )}
      {bullets?.length > 0 && <BulletList items={bullets} />}
      {note && (
        <Typography variant="p" className="leading-relaxed">
          <span className="font-bold">Note:</span> {note}
        </Typography>
      )}
    </div>
  </div>
));
StepCard.displayName = "StepCard";

export default StepCard;
