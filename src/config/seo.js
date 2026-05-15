// SEO metadata configuration for all pages
export const seoConfig = {
  // Default/fallback SEO data
  default: {
    title: "Minute Minder - Meeting Timer & AI Reminders",
    description:
      "Never miss important moments in online calls. Minute Minder helps you track time and get AI-powered reminders during meetings.",
    keywords:
      "meeting timer, online call timer, AI reminders, video call assistant, meeting productivity, time tracking",
    ogType: "website",
    ogImage: "/web-app-manifest-512x512.png",
    twitterCard: "summary_large_image",
  },

  // Page-specific SEO data
  home: {
    title:
      "Run client meetings like a pro — with AI agendas, live timing, and smart nudges inside Google Meet.",
    description:
      "Connect Google Calendar, join Google Meet, and let MinuteMinder turn every call into a structured agenda with live section timers, smart nudges, team visibility, wrap-up prompts, and meeting analytics.",
    keywords:
      "google meet timer, meeting timer, agenda cues, AI meeting assistant, meeting analytics, team controls",
    ogType: "website",
    ogTitle:
      "Run client meetings like a pro — with AI agendas, live timing, and smart nudges inside Google Meet.",
    ogDescription:
      "Connect Google Calendar, join Google Meet, and let MinuteMinder turn every call into a structured agenda with live section timers, smart nudges, team visibility, wrap-up prompts, and meeting analytics.",
    ogImage: "https://minuteminder.io/og/home-1200x630.png",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterTitle: "Minute Minder - Google Meet timer & agenda cues",
    twitterDescription:
      "Timer, nudges, AI Agenda Timer, analytics & team controls for Google Meet.",
    twitterImage: "https://minuteminder.io/og/home-1200x630.png",
    canonical: "/",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://minuteminder.io/#org",
          name: "Minute Minder",
          url: "https://minuteminder.io/",
          logo: "https://minuteminder.io/assets/logo-512.png",
          sameAs: [
            "https://chromewebstore.google.com/detail/minute-minder-meeting-tim/lkabejfjiohmfkpjngnomccnfapdcoic",
          ],
        },
        {
          "@type": "WebSite",
          "@id": "https://minuteminder.io/#website",
          url: "https://minuteminder.io/",
          name: "Minute Minder",
          publisher: { "@id": "https://minuteminder.io/#org" },
        },
        {
          "@type": "SoftwareApplication",
          "@id": "https://minuteminder.io/#app",
          name: "Minute Minder",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Chrome (desktop), Web",
          description:
            "Google Meet timer with smart nudges, AI Agenda Timer, analytics, and team controls.",
          browserRequirements:
            "Requires Google Chrome; works inside Google Meet with a connected web dashboard.",
          featureList: [
            "In‑meeting timer with halftime / 10‑minute / 5‑minute / overtime cues, AI Agenda hints and AI notifications",
            "Customizable reminders library",
            "AI Agenda Timer and AI hints",
            "Dashboard & analytics",
            "Invite your team",
          ],
          offers: {
            "@type": "Offer",
            price: "3.00",
            priceCurrency: "USD",
            category: "subscription",
            url: "https://minuteminder.io/pricing",
          },
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://minuteminder.io/#breadcrumbs",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://minuteminder.io/",
            },
          ],
        },
        {
          "@type": "FAQPage",
          "@id": "https://minuteminder.io/#faq",
          mainEntity: [
            {
              "@type": "Question",
              name: "Does Minute Minder work inside Google Meet?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The Chrome extension shows a compact in‑meeting timer and gentle nudges with AI Agenda hints; the web dashboard manages reminders, invites your teammates, analytics, and billing.",
              },
            },
            {
              "@type": "Question",
              name: "What's Agenda Timer AI?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "It drafts a realistic, time‑boxed agenda from your calendar context and guides transitions, helping you finish on time and confirm owners & dates.",
              },
            },
          ],
        },
      ],
    },
  },

  landing: {
    title:
      "Meeting Timer & AI Agenda Assistant That Keeps Your Meetings On Track | Minute Minder",
    description:
      "Transform your online meetings with Minute Minder's intelligent timer and AI-powered reminders. Available as a Chrome extension for seamless integration.",
    keywords:
      "online calls timer, AI reminders, Chrome extension, meeting productivity, video conferencing tools",
    ogType: "website",
    canonical: "/landing",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://minuteminder.io/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Landing",
              item: "https://minuteminder.io/landing",
            },
          ],
        },
      ],
    },
  },

  features: {
    title:
      "Features - Timer, nudges, AI Agenda Timer, Team timers, analytics | Minute Minder",
    description:
      "MinuteMinder helps you plan the call, guide the conversation, stay on time, and end with clear next steps - all inside Google Meet.",
    keywords:
      "google meet timer, meeting features, AI agenda timer, meeting nudges, team timers, meeting analytics, halftime cues, overtime alerts",
    ogType: "website",
    ogTitle: "Minute Minder features: timer, nudges, Agenda Timer AI",
    ogDescription:
      "MinuteMinder helps you plan the call, guide the conversation, stay on time, and end with clear next steps - all inside Google Meet.",
    ogImage: "https://minuteminder.io/og/features-1200x630.png",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterTitle: "Minute Minder features: timer, nudges, Agenda Timer AI",
    twitterDescription:
      "In‑meeting timer, halftime/5‑min/overtime cards, AI Agenda Timer, reminders library, analytics, timers for your team.",
    twitterImage: "https://minuteminder.io/og/features-1200x630.png",
    canonical: "/features",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://minuteminder.io/features",
          url: "https://minuteminder.io/features",
          name: "Minute Minder Features",
          breadcrumb: "https://minuteminder.io/#breadcrumbs",
        },
        {
          "@type": "SoftwareApplication",
          name: "Minute Minder for Google Meet",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Chrome (desktop), Web",
          softwareVersion: "1.x",
          featureList: [
            "In‑meeting timer overlay with halftime & overtime cues",
            "Custom reminders library (admin templates & user custom)",
            "Agenda Timer AI (calendar‑aware segments)",
            "Analytics (on‑time % and overrun trends)",
            "Timers for your team",
          ],
          offers: {
            "@type": "Offer",
            price: "19.00",
            priceCurrency: "USD",
            url: "https://minuteminder.io/pricing",
          },
        },
        {
          "@type": "HowTo",
          name: "Add a timer to Google Meet with Minute Minder",
          totalTime: "PT2M",
          estimatedCost: {
            "@type": "MonetaryAmount",
            currency: "USD",
            value: "0",
          },
          step: [
            {
              "@type": "HowToStep",
              name: "Install the Chrome extension",
              text: "Open the Chrome Web Store listing and add Minute Minder to Chrome.",
            },
            {
              "@type": "HowToStep",
              name: "Sign in with Google",
              text: "Grant Calendar read access so Minute Minder can timebox from your event.",
            },
            {
              "@type": "HowToStep",
              name: "Join your Meet",
              text: "The timer overlay appears automatically; halftime and overtime cues will nudge you at the right moments.",
            },
          ],
          tool: "Google Chrome",
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://minuteminder.io/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Features",
              item: "https://minuteminder.io/features",
            },
          ],
        },
      ],
    },
  },

  pricing: {
    title: "Pricing - for small teams and enterprise | Minute Minder",
    description: "Find the  right plan for the way you meet. Minte Minder.",
    keywords:
      "meeting timer pricing, subscription plans, productivity tools pricing, team pricing, enterprise pricing, google meet timer pricing",
    ogType: "website",
    ogTitle: "Pricing - for small teams and enterprise | Minute Minder",
    ogDescription: "Find the  right plan for the way you meet. Minte Minder.",
    ogImage: "https://minuteminder.io/og/pricing-1200x630.png",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterTitle: "Pricing - for small teams and enterprise | Minute Minder",
    twitterDescription: "Find the  right plan for the way you meet.",
    twitterImage: "https://minuteminder.io/og/pricing-1200x630.png",
    canonical: "/pricing",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "HowTo",
          name: "How to add a timer to Google Meet with Minute Minder",
          description:
            "Install Minute Minder, connect Calendar, and join your next Meet to see the timer with smart nudges.",
          totalTime: "PT2M",
          step: [
            {
              "@type": "HowToStep",
              name: "Add to Chrome",
              text: "Install Minute Minder from the Chrome Web Store.",
            },
            {
              "@type": "HowToStep",
              name: "Sign in with Google",
              text: "Grant Calendar read so we can timebox from your event length.",
            },
            {
              "@type": "HowToStep",
              name: "Join your Meet",
              text: "You'll see the timer overlay and halftime/5‑minute/overtime nudges.",
            },
          ],
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://minuteminder.io/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Pricing",
              item: "https://minuteminder.io/pricing",
            },
          ],
        },
      ],
    },
  },

  securityPrivacy: {
    title: "Security & Privacy – Minute Minder",
    description:
      "Meeting guidance without invasive tracking. MinuteMinder helps you run better Google Meet calls with live timing, AI agendas, smart nudges, and wrap-up prompts - without listening to calls, recording meetings, or reading unrelated tabs.",
    keywords:
      "MinuteMinder security, no call recording, no tab reading, Google Meet privacy, Chrome extension permissions, no data selling",
    ogType: "website",
    ogTitle: "Security & Privacy – meeting guidance without invasive tracking",
    ogDescription:
      "No recording, no live audio listening, no unrelated tab reading. Learn how MinuteMinder uses Calendar context for timers, agendas, nudges & analytics.",
    twitterTitle: "Minute Minder – Security & Privacy",
    twitterDescription:
      "Better Meet calls without invasive tracking. Transparent data use & extension permissions.",
    canonical: "/security",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://minuteminder.io/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Security & Privacy",
              item: "https://minuteminder.io/security",
            },
          ],
        },
      ],
    },
  },

  privacyPolicy: {
    title: "Privacy Policy - Minute Minder",
    description:
      "Learn how Minute Minder protects your privacy and handles your data. We're committed to transparency and security.",
    keywords: "privacy policy, data protection, user privacy",
    ogType: "website",
    canonical: "/privacy",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://minuteminder.io/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Privacy Policy",
              item: "https://minuteminder.io/privacy",
            },
          ],
        },
      ],
    },
  },

  termsAndConditions: {
    title: "Terms and Conditions - Minute Minder",
    description:
      "Read our terms of service and user agreement for using Minute Minder meeting timer and AI reminder features.",
    keywords: "terms of service, user agreement, terms and conditions",
    ogType: "website",
    canonical: "/terms",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://minuteminder.io/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Terms and Conditions",
              item: "https://minuteminder.io/terms",
            },
          ],
        },
      ],
    },
  },
};

// Site-wide SEO constants
export const siteConfig = {
  siteName: "Minute Minder",
  siteUrl: "https://minuteminder.io",
  twitterHandle: "@minuteminder",
  locale: "en_US",
};
