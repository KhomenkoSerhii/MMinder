import {
  ExtensionPopup,
  ExtensionPin,
  GoogleAccountChooser,
} from "@/assets/Images/HowToUsePage";

export const steps = [
  {
    number: 1,
    title: "Add MinuteMinder to Chrome",
    image: ExtensionPopup,
    imageLabel: "Chrome Web Store — Add Extension popup",
    description:
      "Install the MinuteMinder Chrome extension from the Chrome Web Store. After clicking Add to Chrome, Chrome will ask you to confirm the extension installation.",
    note: "Chrome will show which permissions are needed. These are used only to run the timer and read your calendar — nothing else.",
  },
  {
    number: 2,
    title: "Pin the Extension",
    image: ExtensionPin,
    imageLabel: "Chrome toolbar — Extension pin",
    description:
      "After installation, pin MinuteMinder to your Chrome toolbar so it is easy to find before or during meetings.",
    bullets: [
      "Click the Chrome puzzle icon.",
      "Find MinuteMinder.",
      "Click the pin icon.",
    ],
    note: "Pinning the extension gives quick access to dashboard, settings, and meeting notifications.",
  },
  {
    number: 3,
    title: "Sign in with Google",
    image: GoogleAccountChooser,
    imageLabel: "Google account chooser — sign-in screen",
    description:
      "Click Get started with Google and choose the Google account you use for Google Calendar and Google Meet.",
    note: "Use the same Google account that holds the meetings you want MinuteMinder to support.",
  },
];

export const quickFixes = [
  {
    issue: "“Authorize with Google” did not open",
    fixes: [
      "Click the MinuteMinder extension icon in Chrome.",
      "If you do not see it, click the puzzle icon and pin MinuteMinder.",
      "Try signing in again.",
    ],
  },
  {
    issue: "I do not see the timer in Google Meet",
    fixes: [
      "Refresh the Google Meet tab.",
      "Make sure the extension is installed and pinned.",
      "Confirm you are inside an actual Google Meet call.",
      "Reopen the MinuteMinder extension.",
    ],
  },
  {
    issue: "AI Agenda does not look right",
    fixes: [
      "Check your Google Calendar event.",
      "Use a specific title.",
      "Add a clear meeting description, topics, meeting goal, and expected next steps.",
    ],
  },
  {
    issue: "I do not know what to do after login",
    fixes: [
      "Create a Google Calendar event.",
      "Add a Google Meet link.",
      "Add a clear title and description.",
      "Open the meeting.",
      "Let MinuteMinder show the timer, nudges, and agenda guidance.",
    ],
  },
];

export const calendarAccessReasons = [
  "Detect upcoming meetings",
  "Understand meeting duration",
  "Match timers to calendar events",
  "Support agenda and reminder guidance",
  "Help prepare for calls with better context",
];

export const calendarAccessNotDo = [
  "It does not record your meetings.",
  "It does not listen to your calls.",
  "It does not capture audio or video.",
  "It does not sell your data.",
];

export const firstMeetingChecklist = [
  "a clear meeting title",
  "a Google Meet link",
  "a short meeting description",
  "meeting goals or topics",
  "expected next steps",
];

export const exampleMeetingRows = [
  ["Example meeting title", "Discovery Call with Client"],
  [
    "Example meeting description",
    "Discuss client goals, current challenges, workflow, solution fit, budget, objections, and next steps.",
  ],
];

export const nudgeExamples = [
  "Halfway through the meeting: Check if the meeting is on track.",
  "10 minutes before the meeting ends: Start wrapping up.",
  "5 minutes before the meeting ends: Confirm next steps.",
  "Overtime: End the call or schedule a follow-up.",
];

export const aiAgendaExample = [
  "Set goal and agenda — 2 min",
  "Understand client needs — 10 min",
  "Present solution — 10 min",
  "Confirm next steps — 5 min",
  "Wrap up — 3 min",
];

export const inMeetFeatures = [
  "live timer",
  "pacing cues",
  "smart reminders",
  "AI Agenda panel",
  "wrap-up prompts",
  "overtime alerts",
];
