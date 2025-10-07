import { Typography } from "@/Components/UI/Typography";

const TermsAndConditions = () => {
  return (
    <main className="w-full">
      <div className="main-layout">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <Typography variant="h1" className="mb-4">
              Terms & Conditions
            </Typography>
            <Typography variant="p-muted" className="text-sm">
              Last updated: 01 Feb 2025
            </Typography>
          </header>

          <div className="space-y-6">
            <Typography variant="p">
              These Terms & Conditions ("Terms") govern your access to and use
              of Minute Minder ("we", "us", or "our"). By using the service, you
              agree to these Terms.
            </Typography>

            <div>
              <Typography variant="p">
                <strong>Service.</strong> Minute Minder provides meeting time
                reminders and related features. We may update or modify features
                at any time.
              </Typography>
            </div>

            <div>
              <Typography variant="p">
                <strong>Eligibility.</strong> You must be able to form a binding
                contract and comply with applicable laws.
              </Typography>
            </div>

            <div>
              <Typography variant="p">
                <strong>Accounts & Extension.</strong> Some features may require
                a browser extension or an account. You're responsible for
                safeguarding your credentials and device.
              </Typography>
            </div>

            <div>
              <Typography variant="p">
                <strong>Acceptable Use.</strong> Don't misuse the service,
                interfere with others' use, reverse engineer, or attempt to
                access non-public areas.
              </Typography>
            </div>

            <div>
              <Typography variant="p">
                <strong>Subscription & Billing.</strong> If you choose a paid
                plan, you authorize us (and our payment processor) to charge
                applicable fees and taxes. Fees are non-refundable except where
                required by law.
              </Typography>
            </div>

            <div>
              <Typography variant="p">
                <strong>Third-Party Services.</strong> We may integrate with
                third-party tools. Their terms and privacy policies govern your
                use of those services.
              </Typography>
            </div>

            <div>
              <Typography variant="p">
                <strong>No Professional Advice.</strong> Reminders are
                informational and offered "as is." They are not advice.
              </Typography>
            </div>

            <div>
              <Typography variant="p">
                <strong>Disclaimers.</strong> The service is provided "as is"
                and "as available." We disclaim all warranties to the fullest
                extent permitted by law.
              </Typography>
            </div>

            <div>
              <Typography variant="p">
                <strong>Limitation of Liability.</strong> To the maximum extent
                permitted by law, we are not liable for indirect, incidental,
                special, consequential, or exemplary damages. Our aggregate
                liability shall not exceed the greater of £50 or the amounts you
                paid to us in the 6 months before the claim.
              </Typography>
            </div>

            <div>
              <Typography variant="p">
                <strong>Indemnity.</strong> You agree to indemnify and hold us
                harmless from claims arising from your use of the service or
                violation of these Terms.
              </Typography>
            </div>

            <div>
              <Typography variant="p">
                <strong>Termination.</strong> You may stop using the service at
                any time. We may suspend or terminate access with notice where
                reasonable.
              </Typography>
            </div>

            <div>
              <Typography variant="p">
                <strong>Changes to Terms.</strong> We may update these Terms. If
                we make material changes, we will provide notice by updating the
                date above and/or via the service.
              </Typography>
            </div>

            <div>
              <Typography variant="p">
                <strong>Governing Law.</strong> These Terms are governed by the
                laws of England and Wales. Courts of England and Wales have
                exclusive jurisdiction.
              </Typography>
            </div>

            <div>
              <Typography variant="p">
                <strong>Contact.</strong> Questions about these Terms:{" "}
                <a
                  href="mailto:support@minuteminder.io"
                  className="text-[var(--color-primary)] hover:opacity-80 transition-opacity"
                >
                  support@minuteminder.io
                </a>
                .
              </Typography>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--stroke-light)]">
              <Typography variant="p-muted" className="text-sm italic">
                This sample is for illustration only and does not constitute
                legal advice.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermsAndConditions;
