import HistoryIcon from "@/assets/icons/HistoryIcon.svg";
import TabSlashIcon from "@/assets/icons/TabSlashIcon.svg";
import EyeCloseIcon from "@/assets/icons/EyeCloseIcon.svg";

export const FEATURES_FAQ_DATA = [
  {
    id: 1,
    question: "Team collaboration",
    answer: [
      "Invite teammates via email; link them to your team.",
      "Admin‑set reminders are visible and read‑only to invitees.",
      "Teammates can add their own reminders.",
      "Usage tracked per plan with notifications near limits.",
    ],
  },
  {
    id: 2,
    question: "Custom reminders",
    answer: [
      "Create reminders with name, trigger time, and message.",
      "Enable or disable sound — make prompts impossible to miss.",
      "Saved reminders apply to future meetings to enforce good habits.",
      "Use halftime, pre‑end, and overtime rules to cut paid overruns.",
    ],
  },
  {
    id: 3,
    question: "Analytics & dashboard",
    answer: [
      "Weekly count of meetings managed.",
      "Total hours spent in meetings.",
      "Percentage finished on time and number of overtime meetings.",
      "Presented as simple cards or graphs.",
    ],
  },
  {
    id: 4,
    question: "AI Assistant",
    answer: [
      "Calendar‑aware prep: agenda, goals, timeboxes from event data.",
      "Role‑based prompts for teammates in your team workspace.",
      "Overlay guidance — no audio/video access; no recording.",
      "Enable from Dashboard; per‑team default or per‑user opt‑in.",
    ],
  },
];

export const PRIVACY_FEATURES = [
  {
    id: 1,
    title: "Minimal scope",
    description: [
      "No browsing history permission;",
      "No broad tab reading.",
      "Extension runs on meet.google.com only for calls.",
    ],
  },
  {
    id: 2,
    title: "Encrypted by default",
    description: [
      "Data is encrypted in transit and at rest.",
      "No scraping of page contents;",
      "No sale of data.",
    ],
  },
  {
    id: 3,
    title: "Transparent control",
    description: [
      "Clear OAuth scopes limited to Calendar/Meet needs.",
      "Purpose-built for meetings;",
      "Not general browsing.",
    ],
  },
];
