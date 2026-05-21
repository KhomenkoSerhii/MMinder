import { Button } from "@/Components/UI/Button";
import { Typography } from "@/Components/UI/Typography";
import ChevronGreen from "@/assets/icons/ChevronGreen.svg";
import { loginRedirect } from "@/utils";
import { CHROME_REDIRECT_URL } from "@/utils/constants";

const PricingCard = ({
  name,
  subtitle,
  originalPrice,
  price,
  period,
  features,
  buttonText,
  note,
  highlighted = false,
  image,
}) => {
  const originalPriceValue = Number(originalPrice?.replace(/[^\d.]/g, ""));
  const currentPriceValue = Number(price?.replace(/[^\d.]/g, ""));
  const savingsPercentage =
    originalPriceValue > currentPriceValue
      ? Math.round(
          ((originalPriceValue - currentPriceValue) / originalPriceValue) * 100,
        )
      : null;

  return (
    <div
      className={`relative text-center bg-[var(--bg-light)] flex flex-col rounded-3xl overflow-hidden border-1 transition-all ${
        highlighted || image
          ? "border-[var(--color-primary)]"
          : "border-[var(--stroke-light)]"
      }`}
    >
      {/* Header */}
      <div
        className={`px-5 py-2 ${highlighted ? "bg-[var(--color-primary)]" : " border-b border-[var(--stroke-light)]"} `}
      >
        <Typography
          variant="h4"
          className={`font-bold lg:text-[32px] text-[20px] ${
            highlighted ? "text-white" : ""
          }`}
        >
          {name}
        </Typography>
        <Typography
          variant="p"
          className={`${highlighted ? "text-white" : ""} text-[14px]`}
        >
          {subtitle}
        </Typography>
      </div>

      {/* Body */}
      <div className="flex-1 px-5 py-5 h-full flex flex-col justify-between ">
        <div className="mb-6">
          {image ? (
            <div className="relative mb-6 overflow-hidden flex items-center justify-center py-6 rounded-2xl !bg-[#f3f8f1]  ">
              <img src={image} alt="" />
              <Typography
                variant="h2"
                className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[var(--color-primary)] font-black text-[40px] leading-none"
              >
                Free
              </Typography>
            </div>
          ) : (
            <>
              {originalPrice && (
                <div className="mb-3 flex flex-col items-center gap-2">
                  <span className="rounded-full bg-[#FFE8CC] px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-[#A15C00]">
                    Limited-time offer
                  </span>
                  <Typography
                    variant="p"
                    className="text-base md:text-lg font-bold text-[#9CA3AF] line-through"
                  >
                    Was {originalPrice}
                    {period}
                  </Typography>
                  {savingsPercentage && (
                    <Typography
                      variant="p"
                      className="rounded-full bg-[var(--color-primary)] px-3 py-1 text-sm font-extrabold text-white"
                    >
                      Save {savingsPercentage}% today
                    </Typography>
                  )}
                </div>
              )}
              <Typography
                variant="p"
                className="text-[var(--color-primary)] mb-6 font-black text-[40px] leading-none"
              >
                {price}
                {period}
              </Typography>
            </>
          )}
          {/* Features */}
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex text-start items-center gap-3">
                <img
                  src={ChevronGreen}
                  alt=""
                  className="size-[24px] bg-white rounded-[6px] px-[4.5px] py-1"
                />
                <Typography
                  variant="p"
                  className="text-sm font-medium text-gray-800"
                >
                  {feature}
                </Typography>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Button
            variant="primary"
            className="w-full mb-2"
            onClick={
              image
                ? () => window.open(CHROME_REDIRECT_URL, "_blank")
                : loginRedirect
            }
            data-gtm={image ? "add-to-chrome-free-plan" : "try-for-free"}
          >
            {buttonText}
          </Button>

          <Typography
            variant="p"
            className="text-xs text-center text-gray-500 min-h-[1.25rem]"
          >
            {note}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
