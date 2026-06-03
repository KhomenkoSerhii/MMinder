import React from "react";
import { Typography } from "@/Components/UI/Typography";
import Reveal from "@/Components/UI/Reveal";

const REVIEWS = [
  {
    id: 1,
    name: "Demir",
    initials: "D",
    avatarColor: "#6B5ECD",
    rating: 5,
    date: "Apr 6, 2026",
    text: "Cool way to control meetings with students. I have been internal teaching for ten years and that's extension change my game. I with pleaser use this light ai agenda, perfect tool!",
  },
  {
    id: 2,
    name: "Oleg",
    initials: "O",
    avatarColor: "#3B8C3E",
    rating: 5,
    date: "Mar 19, 2026",
    text: "After two months of using Min Minder at our consulting company, I can say it truly changes how we handle client meetings. It is much more than just another task manager. We finally have one place to record everything: the agenda, key insights, follow-ups, and who is responsible.",
  },
  {
    id: 3,
    name: "Emilia Bard",
    initials: "E",
    avatarColor: "#C0703A",
    rating: 5,
    date: "Mar 10, 2026",
    text: "Use app only few days but it's awesome for my wedding agency. Thx for your app, guys!",
  },
  {
    id: 4,
    name: "Teo",
    initials: "T",
    avatarColor: "#C94040",
    rating: 5,
    date: "Mar 10, 2026",
    text: "I didn't realize how much time we were wasting until this made it visible... wow",
  },
  {
    id: 5,
    name: "Vlad Yevtushenko",
    initials: "V",
    avatarColor: "#8B6F5E",
    rating: 5,
    date: "Feb 26, 2026",
    text: 'PERFECT, my ceo sees how much time I spend on calls and doesn\'t make me work overtime "because he thinks I\'m doing nothing"... Thx!',
  },
];

const STAR_PATH =
  "M7 1L8.545 5.09H13L9.59 7.59L10.91 11.91L7 9.27L3.09 11.91L4.41 7.59L1 5.09H5.455L7 1Z";

const StarRating = ({ rating, max = 5, size = 14 }) => (
  <div className="flex gap-0.5" aria-label={`${rating} out of ${max} stars`}>
    {Array.from({ length: max }).map((_, i) => {
      const fill = Math.max(0, Math.min(1, rating - i)); // 0, 0.5, or 1
      const gradId = `star-${size}-${i}`;
      return (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={gradId}>
              <stop offset={`${fill * 100}%`} stopColor="#F4B400" />
              <stop offset={`${fill * 100}%`} stopColor="#E0E0E0" />
            </linearGradient>
          </defs>
          <path d={STAR_PATH} fill={`url(#${gradId})`} />
        </svg>
      );
    })}
  </div>
);

const ReviewCard = ({ name, initials, avatarColor, rating, date, text }) => (
  <article className="flex flex-col gap-3.5 p-[22px] h-full rounded-[20px] bg-white border border-[var(--stroke-light)] shadow-[0_14px_36px_rgba(17,24,39,0.05)]">
    <div className="flex items-center gap-3">
      <div
        className="size-[38px] rounded-full flex items-center justify-center flex-shrink-0 text-white text-[15px] font-bold"
        style={{ backgroundColor: avatarColor }}
        aria-hidden="true"
      >
        {initials}
      </div>
      <div className="flex flex-col gap-1 min-w-0">
        <Typography variant="h6" className="text-[15px] truncate">
          {name}
        </Typography>
        <div className="flex items-center gap-2">
          <StarRating rating={rating} />
          <span className="text-xs text-[var(--light-grey)]">{date}</span>
        </div>
      </div>
    </div>
    <Typography
      variant="p-muted"
      className="text-[15px] leading-relaxed text-[#2F3A33]"
    >
      {text}
    </Typography>
  </article>
);

const ReviewsSection = () => (
  <section
    className="flex flex-col lg:gap-10 gap-6"
    aria-labelledby="reviews-heading"
  >
    <header className="flex flex-col items-center gap-3 text-center">
      <Typography variant="h2" id="reviews-heading">
        Loved by <span className="text-[var(--color-primary)]">users</span>
      </Typography>
      <div className="flex flex-col items-center gap-1.5">
        <StarRating rating={4.5} size={22} />
        <Typography variant="p-muted">
          Rated 4.5/5 on the Chrome Web Store
        </Typography>
      </div>
    </header>

    <div className="flex flex-col lg:gap-5 gap-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 gap-3">
        {REVIEWS.slice(0, 3).map((review, i) => (
          <Reveal key={review.id} delay={i * 100}>
            <ReviewCard {...review} />
          </Reveal>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row justify-center lg:gap-5 gap-3">
        {REVIEWS.slice(3).map((review, i) => (
          <Reveal
            key={review.id}
            delay={(i + 3) * 100}
            className="w-full lg:max-w-[calc(33.333%-13px)]"
          >
            <ReviewCard {...review} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
