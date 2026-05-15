import React, { useState, memo } from "react";
import ChevronDown from "@/assets/icons/ChevronDown.svg";
import { Typography } from "@/Components/UI/Typography";

const AccordionItem = memo(({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-4 lg:px-5 py-3 bg-[var(--bg-light)] flex-col rounded-xl flex justify-between items-stretch text-left hover:bg-gray-100 transition-colors duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex justify-between items-center gap-2.5 text-left ${isOpen ? "pb-2 gap-4 border-b border-[var(--stroke-light)]" : ""}`}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id || faq.question}`}
      >
        <Typography variant="p" className="font-semibold">
          {faq.question}
        </Typography>

        <div className="size-8 flex items-center justify-center flex-shrink-0">
          <img
            src={ChevronDown}
            alt=""
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      <div
        id={`faq-answer-${faq.id || faq.question}`}
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out text-left self-stretch ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pr-12 w-full text-left">
          <Typography variant="body" className="text-gray-600 text-left w-full">
            {faq.answer}
          </Typography>
        </div>
      </div>
    </div>
  );
});

AccordionItem.displayName = "AccordionItem";

export default AccordionItem;
