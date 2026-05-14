import React from "react";
import { Typography } from "@/Components/UI/Typography";
import { Button } from "@/Components/UI/Button";
import DashboardFilled from "@/assets/Images/DashboardFilled.png";
import { loginRedirect } from "@/utils";

const CTACard = ({ title }) => {
  return (
    <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 rounded-[20px] pb-0 border border-[var(--stroke-light)] bg-[var(--bg-light)] lg:px-8 lg:pt-8 pt-4 px-4">
      <div className="flex-1 flex flex-col lg:gap-10 gap-4 lg:pb-8 pb-5">
        <header>
          <Typography variant="h2">{title}</Typography>
        </header>
        <Typography variant="p">
          Add to Chrome – Free | Start 14‑day team pilot
        </Typography>
        <div className="flex items-center lg:gap-4 flex-wrap gap-2">
          <Button
            variant="primary"
            onClick={loginRedirect}
            className="w-full sm:w-[179px]"
          >
            Try for FREE
          </Button>
        </div>
      </div>

      <div className="hidden lg:flex lg:items-end">
        <img src={DashboardFilled} alt="" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default CTACard;
