import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";

/**
 * Reveals its children with a fade-up transition once they scroll into view.
 * Pure IntersectionObserver — no animation library.
 *
 * Props:
 *  - delay: stagger delay in ms applied when the element becomes visible
 *  - as:    element/tag to render (default "div")
 *  - once:  reveal only the first time (default true)
 */
const Reveal = ({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  once = true,
  ...props
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
