import ScreenHalfTime from "@/assets/Images/ScreenHalfTime.png";
import ReminderCardLg from "@/assets/Images/ReminderCardLg.png";
import TeamReminders from "@/assets/Images/TeamReminders.png";
import BasicDialog from "@/assets/Images/BasicDialog.png";

export const FEATURES_SHOWCASE_DATA = [
  {
    id: 1,
    title: "Live countdown overlay",
    description:
      "A clean overlay shows elapsed and remaining time directly in Google Meet.",
    height: "tall",
    width: "narrow",
    bgColor: "light",
    image: ScreenHalfTime,
    imgStyle: "right-0 bottom-0 lg:block hidden",
  },
  {
    id: 2,
    title: "",
    description: "",
    height: "normal",
    width: "wide",
    bgColor: "green",
    image: "",
    imgStyle:
      "left-1/2 lg:block hidden top-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    id: 3,
    title: "Milestones & overtime",
    description:
      "Halftime markers and overtime indicators prompt wrap‑ups and decisions.",
    height: "normal",
    width: "narrow",
    bgColor: "light",
  },
  {
    id: 4,
    title: "Optional sound alerts",
    description:
      "Sounds are configurable per reminder so prompts are impossible to miss.",
    height: "normal",
    width: "narrow",
    bgColor: "light",
    image: ReminderCardLg,
    imgStyle: "right-0 bottom-11 lg:block hidden",
  },
  {
    id: 5,
    title: "Team reminders",
    description: "Share your reminders with the team to focus on productivity.",
    height: "normal",
    width: "wide",
    bgColor: "light",
    image: TeamReminders,
    imgStyle: "right-0 bottom-0 lg:block hidden",
  },
];
