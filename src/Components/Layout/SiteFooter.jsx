import React, { memo } from "react";
import Logo from "./Logo";
import { Typography } from "@/Components/UI/Typography";

const SiteFooter = memo(() => {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      title: "Features",
      href: "/features",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
  ];

  return (
    <footer className="border-[var(--stroke-light)] border-t lg:py-10 py-5 mt-auto">
      <div className="max-w-8xl lg:flex-row flex-col-reverse text-center px-5 mx-auto flex items-center  justify-between">
        <div className="flex lg:gap-y-0 gap-y-2.5 flex-col w-full items-center lg:items-start justify-between">
          <Logo />
          <Typography variant="p-muted" className="mt-2">
            @ {currentYear} Minute Minder
          </Typography>
          <Typography variant="p-muted">
            Run meetings that end on time.
          </Typography>
        </div>
        <div>
          <ul>
            {links.map((link) => (
              <li
                key={link.title}
                className="py-2 text-black text-center font-medium text-base"
              >
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
});

SiteFooter.displayName = "SiteFooter";

export default SiteFooter;
