import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { SITE_ROUTES } from "@/utils/constants";
import { cn } from "@/utils/cn";
import { Button } from "../UI/Button";

const SiteNavigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: SITE_ROUTES.FEATURES, label: "Features" },
    { path: SITE_ROUTES.PRICING, label: "Pricing" },
    { path: SITE_ROUTES.USE_CASES, label: "Use Cases" },
  ];

  const isActive = (path) => location.pathname === path;

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[var(--stroke-light)]">
      <div className="flex items-center justify-between  max-w-8xl mx-auto px-5 h-16">
        <Link to={SITE_ROUTES.HOME}>
          <Logo />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-base font-medium transition-colors hover:text-[var(--color-primary)]",
                isActive(link.path)
                  ? "text-[var(--color-primary)]"
                  : "text-[var(--color-text)]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="transparent"
            size="md"
            className="w-full sm:w-[179px]"
          >
            Log in
          </Button>
          <Button variant="primary" size="md" className="w-full sm:w-[179px]">
            Try for FREE
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--stroke-light)] bg-white">
          <div className="max-w-8xl mx-auto px-5 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className={cn(
                  "text-base font-medium py-2 transition-colors hover:text-[var(--color-primary)]",
                  isActive(link.path)
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-text)]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="transparent"
              size="md"
              className="w-full sm:w-[179px]"
            >
              Log in
            </Button>
            <Button variant="primary" size="md" className="w-full sm:w-[179px]">
              Try for FREE
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default SiteNavigation;
