import React, { memo } from "react";
import Logo from "./Logo";
import { Typography } from "@/Components/UI/Typography";

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-[var(--stroke-light)] border-t  mt-auto">
      <div className="max-w-8xl mx-auto px-5 py-4 ">
        <div className="flex lg:gap-y-0 gap-y-2.5 lg:flex-row flex-col w-full items-center justify-between">
          <Logo />
          <div className="flex flex-col gap-1 text-center lg:text-end">
            <Typography variant="p-muted">
              @ {currentYear} Minute Minder
            </Typography>
            <Typography variant="p-muted">
              Run meetings that end on time.
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
