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
    title: "Minute Minder - Google Meet timer & agenda cues for on‑time meetings",
    description:
      "Run meetings that end on time. In‑meeting timer, smart nudges, AI Agenda Timer, analytics, and team controls for Google Meet. 7‑day trial.",
    keywords:
      "google meet timer, meeting timer, agenda cues, AI meeting assistant, meeting analytics, team controls",
    ogType: "website",
    ogTitle: "Minute Minder - Google Meet timer & agenda cues for on‑time meetings",
    ogDescription: "Run meetings that end on time with timer, gentle nudges, AI Agenda Timer, analytics, and team controls for Google Meet.",
    ogImage: "https://minuteminder.io/og/home-1200x630.png",
    ogImageWidth: "1200",
    ogImageHeight: "630",
    twitterTitle: "Minute Minder - Google Meet timer & agenda cues",
    twitterDescription: "Timer, nudges, AI Agenda Timer, analytics & team controls for Google Meet.",
    twitterImage: "https://minuteminder.io/og/home-1200x630.png",
    canonical: "/",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://minuteminder.io/#org",
          "name": "Minute Minder",
          "url": "https://minuteminder.io/",
          "logo": "https://minuteminder.io/assets/logo-512.png",
          "sameAs": [
            "https://chromewebstore.google.com/detail/minute-minder-meeting-tim/lkabejfjiohmfkpjngnomccnfapdcoic"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://minuteminder.io/#website",
          "url": "https://minuteminder.io/",
          "name": "Minute Minder",
          "publisher": { "@id": "https://minuteminder.io/#org" }
        },
        {
          "@type": "SoftwareApplication",
          "@id": "https://minuteminder.io/#app",
          "name": "Minute Minder",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Chrome (desktop), Web",
          "description": "Google Meet timer with smart nudges, AI Agenda Timer, analytics, and team controls.",
          "browserRequirements": "Requires Google Chrome; works inside Google Meet with a connected web dashboard.",
          "featureList": [
            "In‑meeting timer with halftime / 10‑minute / 5‑minute / overtime cues, AI Agenda hints and AI notifications",
            "Customizable reminders library",
            "AI Agenda Timer and AI hints",
            "Dashboard & analytics",
            "Invite your team"
          ],
          "offers": {
            "@type": "Offer",
            "price": "3.00",
            "priceCurrency": "USD",
            "category": "subscription",
            "url": "https://minuteminder.io/pricing"
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://minuteminder.io/#breadcrumbs",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://minuteminder.io/"
          }]
        },
        {
          "@type": "FAQPage",
          "@id": "https://minuteminder.io/#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Does Minute Minder work inside Google Meet?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. The Chrome extension shows a compact in‑meeting timer and gentle nudges with AI Agenda hints; the web dashboard manages reminders, invites your teammates, analytics, and billing."
              }
            },
            {
              "@type": "Question",
              "name": "What's Agenda Timer AI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It drafts a realistic, time‑boxed agenda from your calendar context and guides transitions, helping you finish on time and confirm owners & dates."
              }
            }
          ]
        }
      ]
    }
  },

  landing: {
    title: "Online Calls Timer and AI Reminders - Minute Minder",
    description:
      "Transform your online meetings with Minute Minder's intelligent timer and AI-powered reminders. Available as a Chrome extension for seamless integration.",
    keywords:
      "online calls timer, AI reminders, Chrome extension, meeting productivity, video conferencing tools",
    ogType: "website",
  },

  features: {
    title: "Features - Minute Minder Meeting Assistant",
    description:
      "Discover powerful features: real-time call tracking, AI-powered reminders, customizable notifications, and seamless integration with popular video platforms.",
    keywords:
      "meeting features, AI reminders, call tracking, meeting notifications, productivity features",
    ogType: "website",
  },

  pricing: {
    title: "Pricing Plans - Minute Minder",
    description:
      "Choose the perfect plan for your meeting productivity needs. Flexible pricing options for individuals and teams.",
    keywords: "meeting timer pricing, subscription plans, productivity tools pricing",
    ogType: "website",
  },

  privacyPolicy: {
    title: "Privacy Policy - Minute Minder",
    description:
      "Learn how Minute Minder protects your privacy and handles your data. We're committed to transparency and security.",
    keywords: "privacy policy, data protection, user privacy",
    ogType: "website",
  },

  termsAndConditions: {
    title: "Terms and Conditions - Minute Minder",
    description:
      "Read our terms of service and user agreement for using Minute Minder meeting timer and AI reminder features.",
    keywords: "terms of service, user agreement, terms and conditions",
    ogType: "website",
  },
};

// Site-wide SEO constants
export const siteConfig = {
  siteName: "Minute Minder",
  siteUrl: "https://minuteminder.io",
  twitterHandle: "@minuteminder",
  locale: "en_US",
};
