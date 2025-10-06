import { Button } from "@/Components/UI/Button";
import { Typography } from "@/Components/UI/Typography";
import PricingCard from "@/Components/Feature/PricingCard";
import { PRICING_DATA } from "@/utils/Data/Pricing";
import Bulb from "@/assets/Images/Bulb.png";
import Percent from "@/assets/Images/Percent.png";
import MailBg from "@/assets/Images/MailBg.png";
import { CHROME_REDIRECT_URL } from "@/utils/constants";

const Pricing = () => {
  return (
    <main className="w-full">
      <div className="main-layout">
        <section
          className="flex flex-col lg:gap-x-12 w-full justify-between lg:flex-row h-full"
          aria-labelledby="features-heading"
        >
          <div className="flex flex-1 w-full lg:max-w-[750px] lg:gap-[31px] gap-4 flex-col justify-between items-center xl:items-start">
            <header className="text-start">
              <Typography variant="h1">
                <span className="text-[var(--color-primary)]">
                  Simple pricing
                </span>{" "}
                that respects your time
              </Typography>
            </header>
            <article>
              <Typography variant="p">
                Start on Free for 7 days. Upgrade if you like it.
              </Typography>

              <Typography variant="p">
                We don’t listen to calls, don’t read your tabs, and don’t sell
                data.
              </Typography>
            </article>

            <Button
              variant="primary"
              className="fex w-full flex-col lg:w-max lg:hidden  "
              size="lg"
              onClick={() => window.open(CHROME_REDIRECT_URL, "_blank")}
            >
              Try for FREE
              <p className="text-xs font-normal">
                No credit card for the free plan
              </p>
            </Button>

            <Button
              variant="primary"
              className="fex w-full flex-col lg:w-max lg:flex hidden "
              size="lg"
              onClick={() => window.open(CHROME_REDIRECT_URL, "_blank")}
            >
              Try for FREE
              <p className="text-xs font-normal">
                No credit card for the free plan
              </p>
            </Button>
          </div>
          <section className="mt-3 lg:mt-0 items-start justify-between relative flex rounded-[32px] lg:pt-8 pt-5 lg:pl-8 pl-5 bg-[var(--color-secondary)] gap-6">
            <article className="flex flex-col">
              <Typography
                variant="h2"
                className="text-[var(--color-primary)] leading-none  font-[900] lg:text-[80px] text-[32px]"
              >
                10%
              </Typography>
              <Typography variant="h5" className="font-medium">
                of every paid subscription <br /> supports teaching <br />{" "}
                entrepreneurship to kids.
              </Typography>
            </article>
            <img src={Bulb} alt="" className="w-[120px] lg:w-auto" />
          </section>
        </section>

        {/* Pricing Cards */}
        <section className=" space-y-5">
          <header className="text-start lg:mb-10 mb-5">
            <Typography variant="h2">Plans & Billing</Typography>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {PRICING_DATA.map((plan) => (
              <PricingCard key={plan.id} {...plan} />
            ))}
          </div>
          <section className="flex flex-wrap justify-between items-start overflow-hidden rounded-tl-[20px] rounded-[20px] bg-[var(--bg-light)] border border-[var(--stroke-light)]">
            <div className="flex items-start flex-col">
              <Typography
                variant="h4"
                className="font-bold py-2.5 px-5 rounded-br-[20px] text-[var(--color-primary)] border-b border-r bg-[var(--color-secondary)] border-[var(--stroke-light)]"
              >
                Custom
              </Typography>
              <Typography variant="p" className=" p-5">
                Create a perfect plan for you. <br />
                Contact us for detailed information.
              </Typography>
            </div>

            <div className="mt-5 flex lg:w-auto w-full items-center justify-center rounded-br-[20px] rounded-tl-[20px] text-[var(--color-primary)] border-t border-l bg-[var(--color-secondary)] border-[var(--stroke-light)] self-end">
              <article className="pl-5">
                <Typography
                  variant="h2"
                  className="font-bold text-[var(--color-primary)]"
                >
                  Contact Us
                </Typography>
                <a
                  href="mailto:partner@minuteminder.io"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Typography variant="h5" className="text-black">
                    partner@minuteminder.io
                  </Typography>
                </a>
              </article>
              <img src={MailBg} alt="" className="w-[120px] lg:w-auto" />
            </div>
          </section>

          <section className="flex items-center rounded-[20px] border border-[var(--stroke-light)]">
            <img src={Percent} alt="" />
            <article className="p-5">
              <Typography variant="h5" className="font-bold">
                10% for a Cause
              </Typography>
              <Typography variant="p" className="font-medium">
                Your subscription contributes to teaching kids entrepreneurship,
                empowering the next generation of innovators.
              </Typography>
            </article>
          </section>
        </section>
      </div>
    </main>
  );
};

export default Pricing;
