import { Typography } from "@/Components/UI/Typography";
import { Button } from "@/Components/UI/Button";
import SEO from "@/Components/SEO/SEO";
import {
  Hero,
  CalendarAccess,
  CalendarEventExample,
  CalendarEventExample2,
  LiveTimer,
  DashboardNudgeSetup,
  SmartNudgeInAction,
  AIAssistantScreen,
  GoogleMeetWithTimerNudgeAndAIAgendaElements,
  DashboardAIAgendaAssistantPage,
} from "@/assets/Images/HowToUsePage";
import {
  steps,
  quickFixes,
  calendarAccessReasons,
  calendarAccessNotDo,
  firstMeetingChecklist,
  exampleMeetingRows,
  nudgeExamples,
  aiAgendaExample,
  inMeetFeatures,
} from "./data";
import LazyImage from "./LazyImage";
import BulletList from "./BulletList";
import AddToChromeButton from "./AddToChromeButton";
import StepCard from "./StepCard";
import HSection from "./HSection";

const HowToUse = () => (
  <main className="w-full">
    <SEO page="howToUse" />
    <div className="main-layout">
      {/* Hero */}
      <section
        aria-labelledby="how-to-use-heading"
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
      >
        <div className="flex flex-col gap-6">
          <Typography variant="h1" id="how-to-use-heading">
            Run your next Google Meet{" "}
            <span className="text-[var(--color-primary)]">on time</span> with
            MinuteMinder
          </Typography>
          <Typography
            variant="p"
            className="leading-relaxed text-[var(--color-muted)]"
          >
            Set up MinuteMinder in a few simple steps and use live timers, smart
            nudges, and AI Agenda guidance to keep your meetings focused,
            structured, and outcome-driven.
          </Typography>
          <div className="flex flex-col gap-2">
            <AddToChromeButton />
            <Typography variant="p-muted" className="text-sm">
              Works inside Google Meet.{" "}
              <span className="font-semibold text-[#1e1e1e]">
                No recording. No listening. Just guidance.
              </span>
            </Typography>
          </div>
        </div>
        <LazyImage
          src={Hero}
          alt="Google Meet with MinuteMinder timer, AI Agenda, and smart nudge"
        />
      </section>

      {/* Get Set Up */}
      <section aria-labelledby="setup-heading" className="flex flex-col gap-8">
        <header className="flex flex-col gap-2">
          <Typography variant="h2" id="setup-heading">
            Get Set Up in Under a Minute
          </Typography>
          <Typography
            variant="p"
            className="leading-relaxed text-[var(--color-muted)] max-w-2xl"
          >
            MinuteMinder works in three simple steps: add the Chrome extension,
            sign in with Google, and join your next Google Meet.
          </Typography>
        </header>

        <div className="flex flex-col gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start"
            >
              <StepCard {...step} />
              <LazyImage src={step.image} alt={step.imageLabel} />
            </div>
          ))}
        </div>
      </section>

      {/* Allow Calendar Access */}
      <HSection
        id="calendar-access-heading"
        title="Allow Calendar Access"
        description="MinuteMinder may ask for Google Calendar access. This helps it understand your meeting timing and calendar context so it can support timers, smart reminders, and AI Agenda guidance."
        imageLabel="Google Calendar permission screen"
        image={CalendarAccess}
      >
        <div className="flex flex-col gap-3 rounded-[12px] border border-[var(--stroke-light)] bg-[var(--bg-light)] p-4">
          <Typography variant="h6" className="text-[var(--color-primary)]">
            Why does MinuteMinder need Calendar access?
          </Typography>
          <BulletList items={calendarAccessReasons} />
        </div>
        <div className="flex flex-col gap-3 rounded-[12px] border border-[var(--stroke-light)] bg-[var(--bg-light)] p-4">
          <Typography variant="h6" className="text-[var(--color-primary)]">
            What MinuteMinder does not do
          </Typography>
          <BulletList items={calendarAccessNotDo} />
          <Typography
            variant="p"
            className="font-bold text-[var(--color-primary)] text-sm"
          >
            No recording. No listening. Just guidance.
          </Typography>
        </div>
      </HSection>

      {/* Set Up Your First Meeting */}
      <HSection
        id="first-meeting-heading"
        title="Set Up Your First Meeting"
        description="After signing in, the dashboard opens. This is where you manage AI Agenda settings, reminders, nudges, team settings, and billing."
        imageLabel="Dashboard — AI Agenda Assistant page"
        imgLeft
        image={CalendarEventExample}
      >
        <div className="flex flex-col gap-3">
          <Typography variant="h4">What to do next</Typography>
          <Typography
            variant="p"
            className="leading-relaxed text-[var(--color-muted)]"
          >
            Create a Google Calendar event with a Google Meet link. Your event
            should include:
          </Typography>
          <BulletList items={firstMeetingChecklist} />
        </div>
        <div className="overflow-hidden rounded-[12px] border border-[var(--stroke-light)]">
          <table className="w-full text-sm">
            <tbody>
              {exampleMeetingRows.map(([label, value]) => (
                <tr
                  key={label}
                  className="border-b border-[var(--stroke-light)] last:border-0"
                >
                  <td className="bg-[var(--color-secondary)] px-4 py-3 font-medium text-[#1e1e1e] w-2/5 align-top">
                    {label}
                  </td>
                  <td className="px-4 py-3 text-[var(--color-muted)] align-top">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </HSection>

      {/* Example calendar event */}
      <HSection
        id="calendar-event-example"
        title="Example calendar event"
        titleVariant="h3"
        description="A well-prepared calendar event gives MinuteMinder the context it needs to suggest a structured agenda and set accurate timers."
        imageLabel="Google Calendar event with title, description, and Meet link"
        image={CalendarEventExample2}
      />

      {/* 3 Core Features */}
      <section
        aria-labelledby="core-features-heading"
        className="flex flex-col gap-10"
      >
        <header className="flex flex-col gap-2">
          <Typography variant="h2" id="core-features-heading">
            Use the 3 Core MinuteMinder Features
          </Typography>
          <Typography
            variant="p"
            className="leading-relaxed text-[var(--color-muted)] max-w-2xl"
          >
            Live Timer, Smart Nudges, and AI Agenda — three simple concepts that
            keep every Google Meet structured and on time.
          </Typography>
        </header>

        <HSection
          id="feature-live-timer"
          title="1. Live Timer"
          titleVariant="h3"
          titleClass="text-[var(--color-primary)]"
          description="The timer appears inside Google Meet and helps you keep track of meeting time without constantly checking the clock."
          imageLabel="Timer overlay inside Google Meet"
          image={LiveTimer}
        >
          <div className="flex flex-col gap-1">
            <Typography variant="p" className="font-bold">
              How it helps:
            </Typography>
            <Typography
              variant="p"
              className="leading-relaxed text-[var(--color-muted)]"
            >
              You can see where you are in the meeting and keep the conversation
              moving. If a call is 30 minutes, the timer helps you avoid
              spending 25 minutes on discovery and leaving no time for next
              steps.
            </Typography>
          </div>
        </HSection>

        <HSection
          id="feature-smart-nudges"
          title="2. Smart Nudges"
          titleVariant="h3"
          titleClass="text-[var(--color-primary)]"
          description="Nudges are short reminders that help you stay on track during the call. Set them up in the dashboard before meetings."
          imageLabel="Dashboard nudge/reminder setup"
          imgLeft
          image={DashboardNudgeSetup}
        >
          <div className="flex flex-col gap-2">
            <Typography variant="h6">Example nudges</Typography>
            <BulletList items={nudgeExamples} />
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="p" className="font-bold">
              How it helps:
            </Typography>
            <Typography
              variant="p"
              className="leading-relaxed text-[var(--color-muted)]"
            >
              Nudges move you through the meeting without sounding robotic or
              interrupting the flow.
            </Typography>
          </div>
        </HSection>

        <HSection
          id="nudge-in-meet"
          title="Smart nudge in action"
          titleVariant="h4"
          description="During the meeting a nudge card appears at the right moment — visible to you, silent to others."
          imageLabel="Smart nudge appearing inside Google Meet"
          image={SmartNudgeInAction}
        />

        <HSection
          id="feature-ai-agenda"
          title="3. AI Agenda"
          titleVariant="h3"
          titleClass="text-[var(--color-primary)]"
          description="AI Agenda creates a structured, time-boxed agenda from your meeting context. It works best when your calendar event has a clear title and description."
          imageLabel="AI Agenda Assistant screen"
          imgLeft
          image={AIAssistantScreen}
        >
          <div className="flex flex-col gap-2">
            <Typography variant="h6">Example AI Agenda output</Typography>
            <BulletList ordered items={aiAgendaExample} />
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="p" className="font-bold">
              How it helps:
            </Typography>
            <Typography
              variant="p"
              className="leading-relaxed text-[var(--color-muted)]"
            >
              Instead of starting calls with no structure, you get a clear flow
              before or during the meeting.
            </Typography>
          </div>
        </HSection>
      </section>

      {/* What You'll See Inside Google Meet */}
      <HSection
        id="inside-meet-heading"
        title="What You'll See Inside Google Meet"
        description="Once MinuteMinder is set up, you'll see lightweight meeting guidance directly inside Google Meet."
        imageLabel="Google Meet with timer, nudge, and AI Agenda"
        image={GoogleMeetWithTimerNudgeAndAIAgendaElements}
      >
        <BulletList items={inMeetFeatures} />
        <Typography variant="p" className="font-bold">
          Important: MinuteMinder is designed to guide the meeting, not
          interrupt it.
        </Typography>
      </HSection>

      {/* Quick Fixes */}
      <section
        aria-labelledby="quick-fixes-heading"
        className="flex flex-col gap-6"
      >
        <Typography variant="h2" id="quick-fixes-heading">
          Quick Fixes If You Get Stuck
        </Typography>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {quickFixes.map(({ issue, fixes }) => (
            <div
              key={issue}
              className="flex flex-col gap-2 rounded-[12px] border border-[var(--stroke-light)] bg-[var(--bg-light)] p-5"
            >
              <Typography variant="h6">{issue}</Typography>
              <BulletList items={fixes} />
            </div>
          ))}
        </div>
      </section>

      {/* Privacy-First */}
      <HSection
        id="privacy-heading"
        title="Privacy-First Meeting Guidance"
        description="MinuteMinder is built for teams and client-facing professionals who care about privacy. It does not record meetings, listen to calls, or capture audio/video. It uses calendar and meeting context to help with timing, reminders, and agenda guidance."
        imageLabel="Privacy visual — No recording, no listening"
        imgLeft={false}
        image={DashboardAIAgendaAssistantPage}
      >
        <Typography
          variant="p"
          className="font-bold text-[var(--color-primary)]"
        >
          No recording. No listening. Just guidance.
        </Typography>
      </HSection>

      {/* Final CTA */}
      <section aria-labelledby="cta-heading">
        <div className="rounded-[20px] lg:rounded-[32px] border border-[var(--stroke-light)] bg-[var(--color-secondary)] p-6 lg:p-10 flex flex-col gap-6 items-start">
          <header className="flex flex-col gap-3 max-w-2xl">
            <Typography variant="h2" id="cta-heading">
              Ready to crush your next call?
            </Typography>
            <Typography
              variant="p"
              className="leading-relaxed text-[var(--color-muted)]"
            >
              Add MinuteMinder to Chrome, set your first nudge, and run your
              next Google Meet with better timing, clearer focus, and stronger
              next steps.
            </Typography>
          </header>
          <div className="flex flex-wrap gap-3 items-center">
            <AddToChromeButton />
            <a href="#setup-heading">
              <Button variant="ghost" size="lg">
                View Setup Guide
              </Button>
            </a>
          </div>
          <Typography variant="p" className="italic text-[var(--color-muted)]">
            Your first win: finish one meeting on time with clear next steps.
          </Typography>
        </div>
      </section>
    </div>
  </main>
);

export default HowToUse;
