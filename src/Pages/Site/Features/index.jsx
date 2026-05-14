import React from "react";
import FounderSection from "@/Components/Feature/FounderSection";
import FeatureFAQItem from "@/Components/Feature/FeatureFAQItem";
import PrivacyCard from "@/Components/Feature/PrivacyCard";
import FeatureShowcaseCard from "@/Components/Feature/FeatureShowcaseCard";
import { Typography } from "@/Components/UI/Typography";
import { Badge } from "@/Components/UI/Badge";
import { Button } from "@/Components/UI/Button";
import { Card } from "@/Components/UI/Card";
import { FOUNDER_SECTION_DATA } from "@/utils/Data/FAQs";
import { FEATURES_FAQ_DATA, PRIVACY_FEATURES } from "@/utils/Data/Features";
import { FEATURES_SHOWCASE_DATA } from "@/utils/Data/featuresShowcase";
import { HERO_DATA } from "@/utils/Data/data";
import { getGridCols, loginRedirect } from "@/utils";
import { cn } from "@/utils/cn";
import Checked from "@/assets/Images/Checked.png";
import CheckedLg from "@/assets/Images/CheckedLg.png";
import NotificatonVideo from "@/assets/Images/NotificatonVideo.png";
import ReminderCard from "@/assets/Images/ReminderCard.png";
import ShieldLocked from "@/assets/Images/ShieldLocked.png";
import Eclipse from "@/assets/Images/Eclipse.png";
import Cross from "@/assets/icons/Cross.svg";
import SEO from "@/Components/SEO/SEO";
const Features = () => {
  const { title, description, faqs } = FOUNDER_SECTION_DATA.features;
  const cardData = [
    {
      id: 1,
      description:
        "MinuteMinder helps you plan the call, guide the conversation, stay on time, and end with clear next steps - all inside Google Meet.",
      icon: "",
      title: "",
    },
  ];
  return (
    <main className="w-full">
      <SEO page="features" />
      <div className="main-layout">
        <section
          className="flex flex-col lg:gap-x-12 w-full justify-between lg:flex-row h-full"
          aria-labelledby="features-heading"
        >
          <div className="flex flex-1 w-full lg:max-w-[830px] lg:gap-[31px] gap-4 flex-col justify-between items-center xl:items-start">
            <header className="text-start">
              <Typography variant="h1">
                Everything you need to lead better{" "}
                <span className="text-[var(--color-primary)]">
                  Google Meet calls.
                </span>
              </Typography>
            </header>

            <section className=" items-center lg:hidden flex  relative  rounded-[18px] pb-3 px-3 bg-[var(--color-secondary)] flex-col space-y-2.5">
              <img
                src={NotificatonVideo}
                alt=""
                className="w-full max-w-[334px] lg:hidden block "
              />

              <img src={ReminderCard} alt="" className="" />
            </section>

            <Button
              variant="primary"
              className="fex w-full flex-col lg:w-max lg:hidden  "
              size="lg"
              onClick={loginRedirect}
              data-gtm="try-for-free"
            >
              Try for FREE
              <p className="text-xs font-normal">
                No credit card for the free plan
              </p>
            </Button>

            <div
              className={cn(
                `grid grid-cols-1 gap-2`,
                getGridCols(cardData.length),
              )}
            >
              {cardData.map((card) => (
                <Card key={card.id} {...card} titleVariant="h4" />
              ))}
            </div>

            <Button
              variant="primary"
              className="fex w-full flex-col lg:w-max lg:flex hidden "
              size="lg"
              onClick={loginRedirect}
              data-gtm="try-for-free"
            >
              Try for FREE
              <p className="text-xs font-normal">
                No credit card for the free plan
              </p>
            </Button>

            <div className="flex z-10 relative gap-2 shadow-sm rounded-[20px] bg-[var(--bg-light)]">
              <div className="flex flex-wrap p-5 gap-2 z-10 items-center !pr-0">
                {HERO_DATA.badges.map((badge) => (
                  <Badge key={badge.id} {...badge} />
                ))}
              </div>
              <img
                src={Checked}
                alt=""
                className="w-[180px] xl:block hidden flex-shrink-0"
              />
              <img
                src={CheckedLg}
                alt=""
                className="sm:relative  z-0 absolute bottom-0 right-0 xl:hidden block flex-shrink-0"
              />
            </div>
          </div>
          <section className=" items-center relative hidden lg:flex rounded-[32px] pb-8 lg:pt-10 pl-8 bg-[var(--color-secondary)] flex-col gap-6">
            <img
              src={NotificatonVideo}
              alt=""
              className="w-full max-w-[456px]"
            />
            <img
              src={ReminderCard}
              alt=""
              className="absolute bottom-[57px] xl:left-[-80px] left-0"
            />
          </section>
        </section>

        {/* Features Showcase Section */}
        <section
          className="flex flex-col gap-10"
          aria-labelledby="features-showcase"
        >
          <Typography variant="h2" id="features-showcase">
            Features
          </Typography>

          <div className="flex flex-col lg:flex-row gap-5">
            <FeatureShowcaseCard {...FEATURES_SHOWCASE_DATA[0]} />
            <div className="flex flex-col gap-3 lg:gap-5 w-full lg:w-[calc(100%-315px)]">
              <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 lg:justify-end">
                <FeatureShowcaseCard
                  {...FEATURES_SHOWCASE_DATA[1]}
                  className="flex items-center justify-center py-5 lg:py-0"
                >
                  <div className="lg:w-[395px] w-[300px] relative lg:h-[234px] h-[200px] max-w-[624.27px] bg-[#1e1e1e]/60 rounded-[22.30px] shadow-[0px_4.459089279174805px_4.459089279174805px_0px_rgba(0,0,0,0.25)] border-[#f7f7f5] backdrop-blur-[5.57px] inline-flex flex-col justify-center items-center overflow-hidden m-auto">
                    <img
                      src={Cross}
                      alt=""
                      className="absolute top-[15px] right-[15px]"
                    />
                    <img src={Eclipse} alt="" />
                    <div className="flex flex-col justify-center text-center gap-[17.84px] px-10">
                      <Typography variant="h6" className="font-bold text-white">
                        Half time of the meeting
                      </Typography>
                      <Typography variant="p" className="text-white">
                        Halftime reached. Time to review the next agenda item
                      </Typography>
                    </div>
                  </div>
                </FeatureShowcaseCard>
                <FeatureShowcaseCard {...FEATURES_SHOWCASE_DATA[2]} />
              </div>
              <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 lg:justify-end">
                <FeatureShowcaseCard {...FEATURES_SHOWCASE_DATA[3]} />
                <FeatureShowcaseCard {...FEATURES_SHOWCASE_DATA[4]} />
              </div>
            </div>
          </div>
        </section>

        <section
          className="flex flex-col gap-5 lg:gap-10"
          aria-labelledby="faq-heading"
        >
          <Typography variant="h2">
            Keep time{" "}
            <span className="text-[var(--color-primary)]">
              visible and honest
            </span>
          </Typography>
          <div className="flex flex-col gap-3">
            {FEATURES_FAQ_DATA.map((item, index) => (
              <FeatureFAQItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </section>

        <section className="flex w-full flex-col lg:flex-row">
          <div
            className={cn(
              "flex flex-col  relative w-full items-center xl:flex-row justify-between gap-5",
            )}
          >
            {/* Hero Privacy Card */}
            <div
              className={cn(
                " p-5 lg:p-8 h-[256px] md:w-[538px] w-full z-10  relative flex bg-[var(--color-secondary-light)] rounded-[20px]",
              )}
            >
              <Typography variant="h2" className="lg:leading-[64px] z-10">
                Only the{" "}
                <span className="text-[var(--color-primary)]">
                  access <br className="lg:block hidden" /> you grant.
                </span>{" "}
                <br className="lg:block hidden" /> Nothing more.
              </Typography>
              <img
                className="absolute bottom-0 z-0 right-0"
                src={ShieldLocked}
                alt="Security illustration"
              />
            </div>

            {/* Privacy Features List */}
            <div className="flex-wrap lg:flex-nowrap gap-4 flex justify-center ">
              {PRIVACY_FEATURES.map((item, index) => (
                <React.Fragment key={item.id}>
                  <PrivacyCard
                    {...item}
                    dataLength={PRIVACY_FEATURES.length}
                    index={index}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        <FounderSection title={title} description={description} faqs={faqs} />
      </div>
    </main>
  );
};

export default Features;
