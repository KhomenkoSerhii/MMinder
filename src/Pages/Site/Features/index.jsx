import FounderSection from "@/Components/Feature/FounderSection";
import { FOUNDER_SECTION_DATA } from "@/utils/Data/FAQs";

const Features = () => {
  const { title, description, faqs } = FOUNDER_SECTION_DATA.features;

  return (
    <main className="w-full">
      <div className="main-layout">
        <FounderSection title={title} description={description} faqs={faqs} />
      </div>
    </main>
  );
};

export default Features;
