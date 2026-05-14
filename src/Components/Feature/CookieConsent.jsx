import { useEffect } from "react";
import * as CookieConsentLib from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import "./cookieconsent-theme.css";
import { SITE_ROUTES } from "@/utils/constants";

function updateGtmConsent(granted) {
  if (typeof window.gtag !== "function") return;
  const state = granted ? "granted" : "denied";
  window.gtag("consent", "update", {
    analytics_storage: state,
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
  });
}

export default function CookieConsent() {
  useEffect(() => {
    CookieConsentLib.run({
      guiOptions: {
        consentModal: {
          layout: "bar",
          position: "bottom center",
          equalWeightButtons: false,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
        },
      },

      onFirstConsent() {
        const analytics = CookieConsentLib.acceptedCategory("analytics");
        updateGtmConsent(analytics);
      },

      onConsent() {
        const analytics = CookieConsentLib.acceptedCategory("analytics");
        updateGtmConsent(analytics);
      },

      onChange({ changedCategories }) {
        if (changedCategories.includes("analytics")) {
          const analytics = CookieConsentLib.acceptedCategory("analytics");
          updateGtmConsent(analytics);
        }
      },

      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          enabled: false,
          autoClear: {
            cookies: [
              { name: /^(_ga|_gid|_gat)/ },
            ],
          },
        },
      },

      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "We use cookies",
              description:
                "We use cookies to improve your experience and analyse how the site is used. See our <a href=\"" +
                SITE_ROUTES.PRIVACY_POLICY +
                "\" class=\"cc__link\">Privacy Policy</a> for details.",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Decline",
              showPreferencesBtn: "Manage preferences",
            },
            preferencesModal: {
              title: "Cookie preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Decline all",
              savePreferencesBtn: "Save preferences",
              sections: [
                {
                  title: "Strictly necessary",
                  description:
                    "These cookies are required for the site to function and cannot be disabled.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Analytics",
                  description:
                    "Help us understand how visitors use the site so we can improve it.",
                  linkedCategory: "analytics",
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
}
