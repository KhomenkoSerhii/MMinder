import HistoryIcon from "@/assets/icons/HistoryIcon.svg";
import TabSlashIcon from "@/assets/icons/TabSlashIcon.svg";
import RecordSlashIcon from "@/assets/icons/RecordSlashIcon.svg";
import EyeCloseIcon from "@/assets/icons/EyeCloseIcon.svg";
import Micro from "@/assets/icons/Micro.svg";
import CameraIcon from "@/assets/icons/CameraIcon.svg";
import EyeIcon from "@/assets/icons/EyeIcon.svg";
import DataIcon from "@/assets/icons/DataIcon.svg";

export const HERO_DATA = {
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
    {
      id: 5,
      text: "No private tab reading",
      icon: EyeIcon,
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
      "Agenda Timer AI drafts a 3–7 segment plan from your invite and nudges transitions.",
  },
];

export const SITE_FAQ_DATA = [
  {
    id: 1,
    question: "Install the browser extension",
    answer: "Land on the dashboard for a quick start.",
  },
  {
    id: 2,
    question: "Customize reminders",
    answer: "Name, trigger time, message; save for future meetings.",
  },
  {
    id: 3,
    question: "Start your first efficient meeting",
    answer: "Start saving $1K/month by finishing on time and cutting overtime.",
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
];
