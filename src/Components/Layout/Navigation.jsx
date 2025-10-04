import React from "react";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex items-center h-16 max-w-8xl mx-auto px-5">
        <Logo />
      </div>
    </nav>
  );
};

export default Navigation;
