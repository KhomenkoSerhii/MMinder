import { memo } from "react";
import { Typography } from "@/Components/UI/Typography";

const BulletList = memo(({ items, ordered = false }) => {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={`flex flex-col gap-1 pl-5 ${ordered ? "list-decimal" : "list-disc"}`}>
      {items.map((item) => (
        <li key={item}>
          <Typography variant="p" className="leading-relaxed">{item}</Typography>
        </li>
      ))}
    </Tag>
  );
});
BulletList.displayName = "BulletList";

export default BulletList;
