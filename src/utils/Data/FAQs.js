const baseFaqs = {
  title: `From the <span class='text-[var(--color-primary)]'>founder</span>`,
  description:
    "We built Minute Minder after too many calls drifted and ran over. Our goal is simple: keep time visible, keep people calm, and end with owners & dates - without recording a thing. If that sounds like how you want your team to run, we made this for you.",
  faqs: [
    {
      id: 1,
      question: "How does Minute Minder save money?",
      answer:
        "By reducing paid overruns and spillover. Pre‑end and overtime prompts keep meetings on schedule, while analytics and reminders help teams finish decisively.",
    },
    {
      id: 2,
      question: "Does Minute Minder work inside Google Meet?",
      answer:
        "Yes. It shows a dynamic timer with halftime/overtime indicators and reminders with optional sound.",
    },
    {
      id: 3,
      question: "Can I create and edit my own reminders?",
      answer:
        "Yes. It shows a dynamic timer with halftime/overtime indicators and reminders with optional sound.",
    },
    {
      id: 4,
      question: "What happens if the meeting time changes?",
      answer:
        "Minute Minder synchronizes changes from Calendar and adjusts the timer and notifications.",
    },
    {
      id: 5,
      question: "Can I invite teammates?",
      answer:
        "Yes. Send email invites; invited users join your team and see admin reminders (read‑only); they can add their own.",
    },
    {
      id: 6,
      question: "How do plans and billing work?",
      answer:
        "Choose Starter, Growth, or Enterprise; pay via Stripe; the backend updates plan limits automatically.",
    },
    {
      id: 7,
      question: "What analytics are included?",
      answer:
        "Weekly meetings, total hours, on‑time percentage, and overtime count—shown as cards or graphs.",
    },
  ],
};

export const FOUNDER_SECTION_DATA = {
  landing: baseFaqs,
  home: baseFaqs,

  features: {
    title: "FAQs",
    description: "Got questions? We’ve got answers.",
    faqs: [
      {
        id: 1,
        question: "Does Minute Minder record audio or video?",
        answer:
          "No. We never access your microphone or camera. Minute Minder does not record calls.",
      },
      {
        id: 2,
        question: "Do you read my browser tabs or scrape meeting content?",
        answer:
          "No. The extension renders a timer overlay and shows reminders. It does not read your tabs or meeting content.",
      },
      {
        id: 3,
        question: "Does it work with Zoom or Teams?",
        answer:
          "Today we focus on Google Meet for best UX. Cross‑platform support is on the roadmap.",
      },
      {
        id: 4,
        question: "Can admins standardise reminders?",
        answer:
          "Yes. Create org‑owned reminders that members can see but not edit (clearly labelled).",
      },
      {
        id: 5,
        question: "Can I invite teammates?",
        answer:
          "Yes. Send email invites; invited users join your team and see admin reminders (read‑only); they can add their own.",
      },
      {
        id: 6,
        question: "How do plans and billing work?",
        answer:
          "Choose Starter, Growth, or Enterprise; pay via Stripe; the backend updates plan limits automatically.",
      },
      {
        id: 7,
        question: "What analytics are included?",
        answer:
          "Weekly meetings, total hours, on‑time percentage, and overtime count—shown as cards or graphs.",
      },
    ],
  },
};
