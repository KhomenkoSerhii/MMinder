import HeroSection from "@/Pages/Landing/HeroSection";
import React from "react";
import PrivacySection from "@/Pages/Landing/PrivacySection";
import { Typography } from "@/Components/UI/Typography";
import FAQItem from "@/Components/Feature/FAQItem";
import { SITE_FAQ_DATA } from "@/utils/Data/data";
import StarCalendar from "@/assets/icons/StarCalendar.svg";
import CallIcon from "@/assets/icons/CallIcon.svg";
import DocumentIcon from "@/assets/icons/DocumentIcon.svg";
import TeamIcon from "@/assets/icons/TeamIcon.svg";
import HalftimeBg from "@/assets/Images/HalftimeBg.png";
import WhyMinderSiteBg from "@/assets/Images/WhyMinderSiteBg.png";
import LockBg from "@/assets/Images/LockBg.png";
import { FeatureCard } from "@/Components/Feature/FeatureCard";
import FounderSection from "@/Components/Feature/FounderSection";
import { FOUNDER_SECTION_DATA } from "@/utils/Data/FAQs";

const Home = () => {
  const { title, description, faqs } = FOUNDER_SECTION_DATA.home;

  return (
    <main className="w-full">
      <div className="main-layout">
        <HeroSection />
        <section
          className="flex flex-col lg:gap-10 gap-4"
          aria-labelledby="features-heading"
        >
          <header className="text-start">
            <Typography variant="h2" id="features-heading">
              Why Minute Minder
            </Typography>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-2">
            {/* Team Features */}
            <div className="flex flex-col lg:flex-row lg:gap-5 gap-2">
              <FeatureCard
                title="Cut overruns by 50%"
                description="Pre‑end cues and overtime alerts help you wrap on time and avoid paid spillover."
                icon={StarCalendar}
                className="flex-1"
              />
              <FeatureCard
                title="Keep teams focused"
                description="In‑call reminders with optional sound drive decisions, not drift."
                icon={CallIcon}
                className="flex-1"
              />
            </div>
            {/* Dashboard Preview Card */}
            <section className="relative w-full lg:flex hidden h-auto bg-[var(--color-secondary)] text-white rounded-[20px] justify-end border-[1px] border-solid border-[var(--bg-light)] overflow-hidden">
              <img src={WhyMinderSiteBg} alt="" />
            </section>

            <div className="flex flex-col lg:flex-row lg:gap-5 gap-2">
              <article className="relative flex-row lg:flex-col  lg:flex-1 lg:justify-end rounded-[20px] flex gap-5 text-white h-[218px] lg:h-[300px] bg-[var(--color-primary)]">
                <img
                  src={LockBg}
                  alt=""
                  className="absolute top-0 right-0 z-0"
                />
                <div className="p-5 z-10">
                  <Typography variant="h3" className="font-bold">
                    No audio/video capture
                  </Typography>
                  <Typography variant="h6" className="font-bold">
                    No browsing history Encrypted.
                  </Typography>
                </div>
              </article>
              <FeatureCard
                title="Reduce meeting costs"
                description="Calendar‑synced timing and simple analytics reduce meeting costs"
                icon={DocumentIcon}
                className="flex-1"
              />
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-5 gap-2">
              <FeatureCard
                title="Team‑ready"
                description="Org templates, admin reminders, simple analytics and billing."
                icon={TeamIcon}
                className="flex-1"
              />
              <FeatureCard
                title="AI meeting assistant (coming soon)"
                description="Pre‑meeting prep from Calendar: agenda, goals, timeboxes."
                icon={TeamIcon}
                className="flex-1"
              />
              <section className="relative w-full lg:hidden flex justify-center h-auto bg-[var(--color-secondary)] text-white rounded-[20px] overflow-hidden">
                <img src={HalftimeBg} alt="" />
              </section>
            </div>
          </div>
        </section>
        <PrivacySection />
        {/* FAQ Section */}
        <section
          className="flex flex-col gap-5 lg:gap-10"
          aria-labelledby="faq-heading"
        >
          <Typography variant="h2">
            From install to{" "}
            <span className="text-[var(--color-primary)]">
              impact in minutes
            </span>
          </Typography>
          <div className="flex flex-col gap-3">
            {SITE_FAQ_DATA.map((item, index) => (
              <FAQItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </section>
        <FounderSection title={title} description={description} faqs={faqs} />
      </div>
    </main>
  );
};

export default Home;
