import { Typography } from "@/Components/UI/Typography";

const PrivacyPolicy = () => {
  return (
    <main className="w-full">
      <div className="main-layout">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <Typography variant="h1" className="mb-4">
              Privacy Policy
            </Typography>
            <Typography variant="p-muted" className="text-sm">
              Last updated: 01 Feb 2025
            </Typography>
          </header>

          <div className="space-y-6">
            <section id="scope">
              <Typography variant="h3" className="mb-4">
                1. Scope & Definitions
              </Typography>
              <Typography variant="p" className="mb-4">
                This Policy applies to: (a) the Minute Minder Chrome extension;
                (b) the Minute Minder web app/dashboard and APIs; and (c) our
                public website and support channels.
              </Typography>
              <Typography variant="p" className="mb-4">
                <strong>Personal Data</strong> means any information that
                identifies or can reasonably be linked to an identified or
                identifiable person. <strong>Usage Data</strong> means
                de‑identified or pseudonymous technical data about how features
                are used (e.g., when a timer starts) that does not include
                meeting content.
              </Typography>
              <Typography variant="p" className="mb-4">
                <strong>We do not collect or process meeting content</strong>{" "}
                such as audio, video, screen shares, captions, chat messages, or
                transcript text.
              </Typography>
            </section>
            <section id="data-we-collect">
              <Typography variant="h3" className="mb-4">
                2. Information We Collect
              </Typography>
              
              <div className="mb-6">
                <Typography variant="h5" className="mb-3">
                  2.1 Account & Authentication
                </Typography>
                <ul className="space-y-2 ml-4">
                  <li>
                    <Typography variant="p">
                      <strong>Google Sign‑In data:</strong> your Google account
                      email and a unique user ID via Chrome Identity/OAuth to create
                      and secure your account, enforce licenses/teams, and sync your
                      preferences.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="p">
                      <strong>Team/Org metadata:</strong> seat assignments, role
                      (e.g., admin/member), and plan tier.
                    </Typography>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <Typography variant="h5" className="mb-3">
                  2.2 Calendar Metadata (read‑only, with consent)
                </Typography>
                <Typography variant="p" className="mb-3">
                  To calibrate meeting timers and reminders, and only after you
                  grant consent, we may request <em>read‑only</em> access to
                  limited Google Calendar fields such as:
                </Typography>
                <ul className="space-y-2 ml-4 mb-3">
                  <li>
                    <Typography variant="p">Event start/end time and duration;</Typography>
                  </li>
                  <li>
                    <Typography variant="p">Event title and Google Meet link (if available).</Typography>
                  </li>
                </ul>
                <Typography variant="p">
                  We do <strong>not</strong> access email content, Drive files, or
                  other Google products via this connection.
                </Typography>
              </div>
              
              <div className="mb-6">
                <Typography variant="h5" className="mb-3">
                  2.3 Preferences & Configuration
                </Typography>
                <ul className="space-y-2 ml-4">
                  <li>
                    <Typography variant="p">
                      Reminder templates (e.g., halftime, 10‑minute, 5‑minute,
                      overtime), messages, and sound on/off;
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="p">Overlay position/size, theme, and other UI settings;</Typography>
                  </li>
                  <li>
                    <Typography variant="p">Notification opt‑in/out.</Typography>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <Typography variant="h5" className="mb-3">
                  2.4 In‑Meeting Ephemeral State (Extension)
                </Typography>
                <Typography variant="p" className="mb-3">
                  To ensure reminders fire at the correct time and survive page
                  reloads, the extension may store small pieces of{" "}
                  <em>ephemeral</em> state such as:
                </Typography>
                <ul className="space-y-2 ml-4 mb-3">
                  <li>
                    <Typography variant="p">Timer start timestamp, scheduled reminder timestamps;</Typography>
                  </li>
                  <li>
                    <Typography variant="p">Whether overtime mode is active.</Typography>
                  </li>
                </ul>
                <Typography variant="p">
                  This state is cleared automatically when the timer stops or the
                  tab is closed.
                </Typography>
              </div>
              
              <div className="mb-6">
                <Typography variant="h5" className="mb-3">
                  2.5 Billing
                </Typography>
                <Typography variant="p">
                  Payments are processed by our payment provider (e.g., Stripe).
                  We receive and store limited billing metadata (e.g.,
                  subscription status, plan, seat count) but do{" "}
                  <strong>not</strong> store full payment card numbers.
                </Typography>
              </div>
              
              <div className="mb-6">
                <Typography variant="h5" className="mb-3">
                  2.6 Support & Communications
                </Typography>
                <Typography variant="p">
                  If you contact us, we collect the information you provide (e.g.,
                  email, message content, attachments) to respond and keep records
                  for compliance and training.
                </Typography>
              </div>
              
              <div className="mb-6">
                <Typography variant="h5" className="mb-3">
                  2.7 Device & Technical
                </Typography>
                <Typography variant="p">
                  We may collect technical data such as browser type/version, OS,
                  extension version, language, time zone, and diagnostic logs
                  (e.g., error codes) to maintain and secure the Services.
                </Typography>
              </div>
            </section>
            <section id="how-we-use">
              <Typography variant="h3" className="mb-4">
                3. How We Use Information
              </Typography>
              <ul className="space-y-3 ml-4">
                <li>
                  <Typography variant="p">
                    <strong>Provide the core functionality:</strong> show an
                    in‑meeting timer, schedule alarms, and display optional OS
                    notifications so meetings stay on time.
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Sync settings and teams:</strong> remember your
                    reminder templates and apply org‑level defaults.
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Measure and improve:</strong> aggregate usage metrics
                    (e.g., reminders fired, meetings on‑time) to improve
                    reliability and UX.
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Security and abuse prevention:</strong> detect fraud,
                    misuse, or violations of our terms; protect the integrity of
                    the Services.
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Support:</strong> respond to your requests and provide
                    product updates or service notices.
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Compliance:</strong> meet legal, regulatory, and
                    contractual obligations (e.g., tax, accounting, response to
                    lawful requests).
                  </Typography>
                </li>
              </ul>
            </section>
            <section id="analytics">
              <Typography variant="h3" className="mb-4">
                4. Analytics & Telemetry
              </Typography>
              <Typography variant="p" className="mb-4">
                Minute Minder uses analytics to understand feature adoption and
                reliability. Analytics data is designed to be pseudonymous and{" "}
                <strong>excludes meeting content</strong>.
              </Typography>
              
              <div className="mb-6">
                <Typography variant="h5" className="mb-3">
                  What analytics may record
                </Typography>
                <ul className="space-y-2 ml-4">
                  <li>
                    <Typography variant="p">
                      Feature events (e.g., timer started/stopped; reminders
                      scheduled/fired; notifications displayed or dismissed);
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="p">
                      Counts and durations (e.g., number of meetings with Minute
                      Minder active; on‑time vs. overrun sessions);
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="p">
                      Performance and reliability (e.g., load times, error rates,
                      service‑worker wakeups);
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="p">
                      Technical context (browser/OS, extension/app version, locale,
                      time zone).
                    </Typography>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <Typography variant="h5" className="mb-3">
                  Controls
                </Typography>
                <ul className="space-y-2 ml-4">
                  <li>
                    <Typography variant="p">
                      Where required by law, we will ask for consent before placing
                      analytics cookies or writing analytics identifiers.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="p">
                      You may be able to manage analytics preferences in the app
                      settings. If you need an account‑level opt‑out, email{" "}
                      <a 
                        href="mailto:support@minuteminder.io"
                        className="text-[var(--color-primary)] hover:opacity-80 transition-opacity"
                      >
                        support@minuteminder.io
                      </a>
                      .
                    </Typography>
                  </li>
                </ul>
              </div>
              
              <Typography variant="p">
                <strong>We do not sell or share Personal Data</strong> for
                cross‑context behavioral advertising.
              </Typography>
            </section>
            <section id="legal-bases">
              <Typography variant="h3" className="mb-4">
                5. Legal Bases (EEA/UK)
              </Typography>
              <Typography variant="p" className="mb-4">
                Where the GDPR/UK GDPR applies, we process Personal Data under
                these legal bases:
              </Typography>
              <ul className="space-y-3 ml-4">
                <li>
                  <Typography variant="p">
                    <strong>Performance of a contract:</strong> to provide the
                    Services you request.
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Legitimate interests:</strong> to secure, maintain,
                    and improve the Services, to measure usage, and to prevent
                    abuse (balanced against your rights).
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Consent:</strong> for optional analytics or where
                    local law requires consent (e.g., certain cookies) and for
                    connecting Google Calendar.
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Legal obligations:</strong> to comply with applicable
                    laws, regulations, and lawful requests.
                  </Typography>
                </li>
              </ul>
            </section>
            <section id="sharing">
              <Typography variant="h3" className="mb-4">
                6. How We Share Information
              </Typography>
              <ul className="space-y-3 ml-4 mb-4">
                <li>
                  <Typography variant="p">
                    <strong>Service Providers (Processors):</strong> cloud
                    hosting, analytics, error logging, customer support, and
                    payment processing. These providers are bound by contract to
                    process data only on our instructions and to protect it
                    appropriately.
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Google APIs:</strong> if you connect Google Calendar,
                    we use Google's OAuth and Calendar APIs to retrieve limited
                    event metadata. Use of Google user data is subject to Google's
                    API Services User Data Policy (including Limited Use
                    requirements).
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Team/Org administrators:</strong> if you use a team
                    plan, certain account metadata (e.g., seat status) and{" "}
                    <em>aggregated</em> usage may be visible to your admin.
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Compliance &amp; safety:</strong> where required to
                    comply with laws or protect rights, property, or safety.
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Business transfers:</strong> as part of a merger,
                    acquisition, financing, or sale of assets, subject to
                    continued protections consistent with this Policy.
                  </Typography>
                </li>
              </ul>
              <Typography variant="p">
                We do <strong>not</strong> sell Personal Data. We do{" "}
                <strong>not</strong> allow third parties to use your data for
                their own advertising or profiling.
              </Typography>
            </section>
            <section id="retention">
              <Typography variant="h3" className="mb-4">
                7. Data Retention
              </Typography>
              <ul className="space-y-3 ml-4 mb-4">
                <li>
                  <Typography variant="p">
                    <strong>Account data</strong> is kept while your account is
                    active and for a reasonable period thereafter for
                    recordkeeping, unless you request deletion.
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Ephemeral meeting state</strong> stored by the
                    extension is cleared when the timer stops or the tab closes.
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Analytics &amp; logs</strong> are kept for as long as
                    needed to provide, secure, and improve the Services and to
                    meet legal obligations; we aim to minimize retention.
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    You may request deletion at any time (see{" "}
                    <a 
                      href="#choices"
                      className="text-[var(--color-primary)] hover:opacity-80 transition-opacity"
                    >
                      Your Choices &amp; Rights
                    </a>
                    ).
                  </Typography>
                </li>
              </ul>
            </section>
            <section id="security">
              <Typography variant="h3" className="mb-4">
                8. Security
              </Typography>
              <Typography variant="p">
                We implement technical and organizational measures designed to
                protect information, including encryption in transit (TLS),
                access controls, least‑privilege design in the extension (no
                audio/video capture, no remote code execution), and vendor due
                diligence. No method of transmission or storage is 100% secure;
                you use the Services at your own risk, but we work continuously
                to improve our safeguards.
              </Typography>
            </section>
            <section id="choices">
              <Typography variant="h3" className="mb-4">
                9. Your Choices & Rights
              </Typography>
              
              <div className="mb-6">
                <Typography variant="h5" className="mb-3">
                  9.1 Access, Correction, Deletion
                </Typography>
                <Typography variant="p">
                  You can access or update many settings in the app. You may also
                  request a copy of your Personal Data, ask us to correct it, or
                  request deletion by emailing{" "}
                  <a 
                    href="mailto:support@minuteminder.io"
                    className="text-[var(--color-primary)] hover:opacity-80 transition-opacity"
                  >
                    support@minuteminder.io
                  </a>
                  .
                </Typography>
              </div>
              
              <div className="mb-6">
                <Typography variant="h5" className="mb-3">
                  9.2 Revoke Google Access
                </Typography>
                <Typography variant="p">
                  You can revoke Minute Minder's access to your Google account at
                  any time via your Google Account permissions page. After
                  revocation, some features (e.g., calendar‑based reminders) will
                  no longer function.
                </Typography>
              </div>
              
              <div className="mb-6">
                <Typography variant="h5" className="mb-3">
                  9.3 Cookies & Local Storage
                </Typography>
                <Typography variant="p">
                  You can manage cookies through your browser settings. Where
                  required by law, we will ask for consent before setting
                  analytics cookies. The extension uses Chrome storage to remember
                  preferences; you can reset it from the extension settings or by
                  reinstalling.
                </Typography>
              </div>
              
              <div className="mb-6">
                <Typography variant="h5" className="mb-3">
                  9.4 EEA/UK/California
                </Typography>
                <Typography variant="p">
                  If you are in the EEA/UK, you may have additional rights under
                  GDPR/UK GDPR (e.g., portability, restriction, objection, and the
                  right to lodge a complaint with a supervisory authority).
                  California residents may have rights under the CCPA/CPRA (e.g.,
                  know/access, delete, correct). We do not sell Personal Data.
                </Typography>
              </div>
            </section>
            <section id="international">
              <Typography variant="h3" className="mb-4">
                10. International Transfers
              </Typography>
              <Typography variant="p">
                Your information may be processed in countries other than your
                own. Where applicable, we use appropriate safeguards for
                cross‑border transfers (e.g., Standard Contractual Clauses) and
                require our processors to do the same.
              </Typography>
            </section>
            <section id="children">
              <Typography variant="h3" className="mb-4">
                11. Children's Privacy
              </Typography>
              <Typography variant="p">
                The Services are not directed to children under 13 (or under 16
                in the EEA/UK). We do not knowingly collect Personal Data from
                children in these age groups. If you believe a child has
                provided Personal Data, please contact us and we will take
                appropriate steps to delete it.
              </Typography>
            </section>
            <section id="changes">
              <Typography variant="h3" className="mb-4">
                12. Changes to This Policy
              </Typography>
              <Typography variant="p">
                We may update this Policy from time to time. If we make material
                changes, we will post the updated version and adjust the "Last
                updated" date. Your continued use of the Services after changes
                become effective signifies your acceptance.
              </Typography>
            </section>
            <section id="contact">
              <Typography variant="h3" className="mb-4">
                13. How to Contact Us
              </Typography>
              <Typography variant="p">
                For privacy inquiries, data access/deletion requests, or
                questions about this Policy, email{" "}
                <a 
                  href="mailto:support@minuteminder.io"
                  className="text-[var(--color-primary)] hover:opacity-80 transition-opacity"
                >
                  support@minuteminder.io
                </a>
                .
              </Typography>
            </section>
            <section id="permissions">
              <Typography variant="h3" className="mb-4">
                14. Chrome Extension Permissions Disclosure
              </Typography>
              <Typography variant="p" className="mb-4">
                For transparency, the extension uses the following Chrome
                permissions strictly to provide its single purpose—time
                management in Google Meet:
              </Typography>
              <ul className="space-y-3 ml-4 mb-4">
                <li>
                  <Typography variant="p">
                    <strong>activeTab</strong> — to inject the in‑meeting timer
                    into the active Google Meet tab after you activate Minute
                    Minder.
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>alarms</strong> — to schedule meeting reminders
                    reliably (halftime, 10‑minute, 5‑minute, overtime).
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>notifications</strong> — to optionally show OS‑level
                    reminders if the Meet tab is not focused.
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>scripting</strong> — to inject packaged content
                    scripts/CSS solely on <code>https://meet.google.com/*</code>.
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>storage</strong> — to save your preferences and small
                    pieces of ephemeral meeting state.
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>identity / identity.email</strong> — to sign in with
                    Google and associate your license/team.
                  </Typography>
                </li>
                <li>
                  <Typography variant="p">
                    <strong>Host permissions</strong> — limited to{" "}
                    <code>https://meet.google.com/*</code> and our API domain(s)
                    as needed; optional Google APIs for Calendar (read‑only) with
                    your consent.
                  </Typography>
                </li>
              </ul>
              <Typography variant="p">
                We do <strong>not</strong> collect or store meeting
                audio/video/chat, and we do <strong>not</strong> execute
                remotely hosted code.
              </Typography>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
