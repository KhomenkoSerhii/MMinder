import React, { useEffect, useState } from "react";
import MeetCall from "@/assets/Images/MeetCall.png";
import "./HeroRightSection.css";

const START_SECONDS = 12 * 60 + 30; // 00:12:30

const formatTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `00:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

const AGENDA_ITEMS = [
  { label: "Rapport & Introduction", duration: "5 min", status: "done" },
  { label: "Needs & Challenges", duration: "15 min", status: "done" },
  { label: "Solution Discussion", duration: "12 min", status: "active" },
  { label: "Objections", duration: "8 min", status: "upcoming" },
  { label: "Next Steps", duration: "5 min", status: "upcoming" },
];

const USECASE_TAGS = [
  "Sales calls",
  "Client reviews",
  "Project updates",
  "Demos",
];

const HeroRightSection = ({ className = "", style }) => {
  const [secondsLeft, setSecondsLeft] = useState(START_SECONDS);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const id = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : START_SECONDS));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const formattedTime = formatTime(secondsLeft);

  return (
    <div className={`mm-visual ${className}`} style={style}>
      <div className="mm-visual-card">
        <div className="mm-visual-main">
          <div className="mm-meet-window">
            <img
              className="mm-meet-image"
              src={MeetCall}
              alt="Google Meet client call with four smiling participants"
            />

            <div className="mm-timer-pill">{formattedTime}</div>

            <div className="mm-nudge-popover">
              <div className="mm-nudge-popover__icon" aria-hidden="true">
                🔔
              </div>
              <div>
                <strong>5 min left in this section</strong>
                <p>Move to next steps?</p>

                <div className="mm-nudge-buttons">
                  <button type="button">Next steps</button>
                  <button type="button" className="mm-nudge-buttons__secondary">
                    Snooze 2 min
                  </button>
                </div>
              </div>
            </div>
          </div>

          <aside className="mm-agenda-panel">
            <div className="mm-agenda-panel__top">
              <div className="mm-agenda-brand">
                <span aria-hidden="true">☷</span>
                MinuteMinder
              </div>
              <button type="button" aria-label="More options">
                ⋮
              </button>
            </div>

            <div className="mm-agenda-panel__content">
              <div className="mm-time-row">
                <div>
                  <span>Time left in meeting</span>
                  <strong>{formattedTime}</strong>
                </div>

                <div>
                  <span>End time</span>
                  <b>11:30 AM</b>
                </div>
              </div>

              <div className="mm-meeting-name-row">
                <strong>Sales Discovery Call</strong>
                <a href="#">Edit agenda</a>
              </div>

              <div className="mm-agenda-list">
                {AGENDA_ITEMS.map((item) => (
                  <div
                    key={item.label}
                    className={`mm-agenda-item${
                      item.status === "done"
                        ? " mm-done"
                        : item.status === "active"
                          ? " mm-active"
                          : ""
                    }`}
                  >
                    <span aria-hidden="true">
                      {item.status === "done"
                        ? "✓"
                        : item.status === "active"
                          ? "▶"
                          : ""}
                    </span>
                    <p>{item.label}</p>
                    <small>{item.duration}</small>
                  </div>
                ))}
              </div>

              <div className="mm-agenda-panel__footer">
                <div className="mm-smart-nudge">
                  <div aria-hidden="true">🔔</div>
                  <div>
                    <strong>Smart nudge</strong>
                    <p>
                      You&rsquo;re nearing the end of this section. Wrap up key
                      points?
                    </p>
                  </div>
                  <span aria-hidden="true">›</span>
                </div>

                <div className="mm-next-card">
                  <div>
                    <span>Next up</span>
                    <strong>Objections</strong>
                  </div>
                  <small>8 min</small>
                </div>

                <div className="mm-calendar-connected">
                  <span className="mm-calendar-icon" aria-hidden="true">
                    31
                  </span>
                  <span className="mm-green-dot" aria-hidden="true" />
                  Connected to Google Calendar
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="mm-usecase-strip">
          <div className="flex items-center gap-2.5 justify-center w-full">
            <div className="mm-usecase-icon" aria-hidden="true">
              👥
            </div>
            <strong>Built for teams that run client-facing meetings</strong>
          </div>

          <div className="mm-usecase-tags">
            {USECASE_TAGS.map((tag) => (
              <span key={tag}>✓ {tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRightSection;
