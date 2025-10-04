import React from "react";
import { Typography } from "../UI/Typography";

const FAQItem = React.memo(({ item, index }) => {
  if (!item) return null;

  return (
    <article className="w-full py-3 border-b border-[var(--stroke-light)]">
      <div className="flex flex-col lg:flex-row lg:items-center gap-5">
        <div className="flex items-start gap-2 lg:gap-4 lg:flex-1 flex-col lg:flex-row ">
          <Typography variant="p" className="text-[var(--light-grey)]">
            {String(index + 1).padStart(2, "0")}/
          </Typography>

          <Typography variant="p" className="text-[28px] font-semibold">
            {item.question}
          </Typography>
        </div>
        <div className="lg:flex-1 lg:pl-4">
          <Typography variant="p">{item.answer}</Typography>
        </div>
      </div>
    </article>
  );
});

FAQItem.displayName = "FAQItem";
export default FAQItem;
