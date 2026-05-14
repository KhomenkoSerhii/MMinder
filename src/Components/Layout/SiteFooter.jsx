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

  const articles = [
    {
      title: "Privacy Policy",
      href: "https://minuteminder.io/privacy",
    },

    {
      title: "Terms and Conditions",
      href: "https://minuteminder.io/terms",
    },
    {
      title: "Support",
      href: "https://forms.gle/B84XkLwbhBqoNJez7",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  return (
    <footer className="border-[var(--stroke-light)] border-t lg:py-10 py-5 mt-auto">
      <div className="max-w-8xl lg:flex-row flex-col-reverse text-center px-5 mx-auto flex items-start  justify-between">
        <div className="flex lg:gap-y-0 gap-y-2.5 flex-col w-full items-center lg:items-start justify-between">
          <Logo />
          <Typography variant="p-muted" className="mt-2">
            @ {currentYear} Minute Minder
          </Typography>
          <Typography variant="p-muted">
            Run meetings that end on time.
          </Typography>
        </div>
        <div className="flex flex-col m-auto lg:flex-row lg:text-start text-center gap-y-2.5 lg:gap-x-20">
          <ul className="flex flex-1 flex-col">
            {links.map((link) => (
              <li
                key={link.title}
                className="py-2 text-black font-medium text-base"
              >
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
          <ul className="flex w-max flex-col">
            {articles.map((article) => (
              <li
                key={article.title}
                className="py-2 text-black font-medium text-base"
              >
                <a href={article.href} target={article.target} rel={article.rel}>
                  {article.title}
                </a>
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
