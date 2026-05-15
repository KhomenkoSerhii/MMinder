import DataIcon from "@/assets/icons/DataIcon.svg";
import RecordSlashIcon from "@/assets/icons/RecordSlashIcon2.svg";
import Micro from "@/assets/icons/Micro.svg";
import CameraIcon from "@/assets/icons/CameraIcon.svg";
import IncognitoSlashIcon from "@/assets/icons/IncognitoSlashIcon.svg";
import EyeIcon from "@/assets/icons/EyeIcon.svg";

export const TRUST_BADGES = [
  { id: "cam", text: "No camera access", icon: CameraIcon },
  { id: "record", text: "No call recording", icon: RecordSlashIcon },
  { id: "mic", text: "No microphone access", icon: Micro },
  { id: "sell", text: "No data selling", icon: DataIcon },
  { id: "private", text: "No private tab reading", icon: IncognitoSlashIcon },
  { id: "tabs", text: "Doesn't read unrelated tabs", icon: EyeIcon },
];

export const DATA_USE_CARDS = [
  {
    id: "calendar",
    icon: "📅",
    title: "Calendar context",
    description:
      "Meeting title, duration, description, attendees, and timing may be used to create agendas and timing cues.",
  },
  {
    id: "ai-agendas",
    icon: "✨",
    title: "AI agendas",
    description:
      "AI helps create structured, time-boxed agendas so users know what to cover and when to move forward.",
  },
  {
    id: "nudges",
    icon: "🔔",
    title: "Smart nudges",
    description:
      "Scheduled reminders help users stay on agenda, wrap up on time, and avoid missing important points.",
  },
  {
    id: "analytics",
    icon: "📊",
    title: "Meeting analytics",
    description:
      "Analytics help users understand meeting time, overtime patterns, and on-time performance.",
  },
];

export const EXTENSION_BULLETS = [
  "Detect when a Google Meet session is active",
  "Show the live timer inside the meeting interface",
  "Display agenda prompts and reminders",
  "Support Google Calendar-based timing",
  "Keep the experience inside the tools you already use",
];

export const SECURITY_FAQ = [
  {
    id: 1,
    question: "Does MinuteMinder record my meetings?",
    answer: "No. MinuteMinder does not record meetings or capture audio/video.",
  },
  {
    id: 2,
    question: "Does MinuteMinder listen to my calls?",
    answer: "No. MinuteMinder does not listen to live call audio.",
  },
  {
    id: 3,
    question: "Does MinuteMinder read my browser tabs?",
    answer: "No. MinuteMinder does not read unrelated browser tabs.",
  },
  {
    id: 4,
    question: "Why does MinuteMinder need Google Calendar access?",
    answer:
      "Calendar context helps generate agendas, understand meeting duration, and support timing reminders.",
  },
  {
    id: 5,
    question: "What does AI do in MinuteMinder?",
    answer:
      "AI helps generate agendas, prompts, and meeting guidance. It does not require live call audio.",
  },
  {
    id: 6,
    question: "Does MinuteMinder sell data?",
    answer: "No. MinuteMinder does not sell user data.",
  },
];
