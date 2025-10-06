import React from "react";
import { Typography } from "../UI/Typography";

const FeatureFAQItem = React.memo(({ item, index }) => {
  if (!item) return null;

  const isArrayAnswer = Array.isArray(item.answer);

  return (
    <article className="w-full py-3 border-b border-[var(--stroke-light)]">
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-5 gap-2">
        <div className="flex items-start gap-2 lg:gap-4 lg:flex-1 flex-col lg:flex-row">
          <Typography variant="p" className="text-[var(--light-grey)]">
            {String(index + 1).padStart(2, "0")}/
          </Typography>

          <Typography
            variant="p"
            className="lg:text-[28px] text-[24px] font-semibold"
          >
            {item.question}
          </Typography>
        </div>

        <div className="lg:flex-1 lg:pl-4">
          {isArrayAnswer ? (
            <ul className="flex flex-col">
              {item.answer.map((point, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className=" flex-shrink-0">~</span>
                  <Typography variant="p">{point}</Typography>
                </li>
              ))}
            </ul>
          ) : (
            <Typography variant="p">{item.answer}</Typography>
          )}
        </div>
      </div>
    </article>
  );
});

FeatureFAQItem.displayName = "FeatureFAQItem";
export default FeatureFAQItem;
