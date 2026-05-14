import React from "react";
import { Typography } from "@/Components/UI/Typography";
import AccordionItem from "@/Components/UI/AccordionItem";

const FounderSection = ({ title, description, faqs }) => {
  if (!title || !description || !faqs) return null;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 flex-col lg:flex-row  lg:gap-5 gap-4">
      <div className="flex-1 flex flex-col lg:gap-5 gap-4">
        <header>
          <Typography
            variant="body"
            className="text-[28px] lg:text-5xl font-bold "
          >
            {title}
          </Typography>
        </header>
        <Typography variant="p" className="whitespace-pre-line">{description}</Typography>
      </div>

      <div className="flex-1 flex flex-col gap-4 lg:gap-5">
        <h3 className="sr-only">Questions</h3>
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default FounderSection;
