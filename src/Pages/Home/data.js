import HistoryIcon from "@/assets/icons/HistoryIcon.svg";
import TabSlashIcon from "@/assets/icons/TabSlashIcon.svg";
import RecordSlashIcon from "@/assets/icons/RecordSlashIcon.svg";
import EyeCloseIcon from "@/assets/icons/EyeCloseIcon.svg";
import Meetings from "@/assets/icons/Meetings.svg";
import TimeIcon from "@/assets/icons/TimeIcon.svg";
import DateIcon from "@/assets/icons/DateIcon.svg";
import Micro from "@/assets/icons/Micro.svg";
import CameraIcon from "@/assets/icons/CameraIcon.svg";
import EyeIcon from "@/assets/icons/EyeIcon.svg";
import DataIcon from "@/assets/icons/DataIcon.svg";

export const HERO_DATA = {
  cards: [
    {
      id: 1,
      description: "Cut your expenses on online meetings",
      icon: Meetings,
    },
    {
      id: 2,
      description:
        "Finish on time, prevent overtime, and stop spill over that eats budgets.",
      icon: TimeIcon,
    },
    {
      id: 3,
      description:
        "Keep your team on track with meeting timers & reminders for Google Meet.",
      icon: DateIcon,
    },
  ],
  badges: [
    {
      id: 1,
      text: "No microphone access",
      icon: Micro,
    },
    {
      id: 2,
      text: "No camera access",
      icon: CameraIcon,
    },
    {
      id: 3,
      text: "Doesn’t read your tabs",
      icon: EyeIcon,
    },
    {
      id: 4,
      text: "No data selling",
      icon: DataIcon,
    },
  ],
};

export const FAQ_DATA = [
  {
    id: 1,
    question: "Will it distract my team?",
    answer:
      "No. The timer is subtle and collapsible. Cues are gentle and designed not to hijack attention.",
  },
  {
    id: 2,
    question: "Do you record meetings?",
    answer:
      "Never. We don't capture audio or video - only basic calendar details to power timing.",
  },
  {
    id: 3,
    question: "Can we share reminders across the team?",
    answer:
      "Yes. Admins can publish org‑owned reminders that teammates can use but not edit.",
  },
  {
    id: 4,
    question: "Do you support AI agendas?",
    answer:
      "Coming soon: Agenda Timer AI drafts a 3–7 segment plan from your invite and nudges transitions.",
  },
];

export const ADDITIONAL_FAQ_DATA = [
  {
    id: 5,
    question: "How does Minute Minder save money?",
    answer:
      "By keeping meetings focused and on-time, reducing overruns and improving productivity across your organization.",
  },
  {
    id: 6,
    question: "Does Minute Minder work inside Google Meet?",
    answer:
      "Yes, Minute Minder integrates seamlessly with Google Meet and other popular video conferencing platforms.",
  },
  {
    id: 7,
    question: "Can I create and edit my own reminders?",
    answer:
      "Absolutely! You can create custom reminders tailored to your meeting types and team preferences.",
  },
  {
    id: 8,
    question: "What happens if the meeting time changes?",
    answer:
      "Minute Minder automatically syncs with your calendar and adjusts timing accordingly in real-time.",
  },
  {
    id: 9,
    question: "Can I invite teammates?",
    answer:
      "Yes, you can easily invite team members and manage permissions for shared meeting management.",
  },
  {
    id: 10,
    question: "How do plans and billing work?",
    answer:
      "We offer flexible plans based on team size with transparent pricing and no hidden fees.",
  },
  {
    id: 11,
    question: "What analytics are included?",
    answer:
      "Get insights on meeting efficiency, time usage patterns, and team productivity metrics.",
  },
];

export const PRIVACY_FEATURES = [
  {
    id: 1,
    title: "No recording your browsing history",
    description: "We do not record any browsing history, even anonymous data.",
    icon: HistoryIcon,
  },
  {
    id: 2,
    title: "Least‑privilege access.",
    description: "Calendar read to prepare agendas/reminders; nothing more.",
    icon: TabSlashIcon,
  },
  {
    id: 3,
    title: "No recording.",
    description: "We don't listen to calls or capture your screen.",
    icon: RecordSlashIcon,
  },
  {
    id: 4,
    title: "No tab reading",
    description: "The extension only shows the timer overlay in Google Meet.",
    icon: EyeCloseIcon,
  },
];
