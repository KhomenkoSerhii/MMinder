// Google Tag Manager with Consent Mode v2 + cookie banner.
// Same setup as the previous site (index.html + CookieConsent.jsx).
(function () {
  var GTM_ID = "GTM-MFKNJHRB";

  // Consent defaults: denied until the visitor accepts.
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500
  });

  // Google Tag Manager.
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var gtm = document.createElement("script");
  gtm.async = true;
  gtm.src = "https://www.googletagmanager.com/gtm.js?id=" + GTM_ID;
  document.head.appendChild(gtm);

  // Cookie banner (vanilla-cookieconsent 3.1.0, self-hosted in /vendor).
  ["/vendor/cookieconsent.css", "/vendor/cookieconsent-theme.css"].forEach(function (href) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  });

  function updateConsent() {
    var state = window.CookieConsent.acceptedCategory("analytics") ? "granted" : "denied";
    window.gtag("consent", "update", {
      analytics_storage: state,
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state
    });
  }

  var cc = document.createElement("script");
  cc.src = "/vendor/cookieconsent.umd.js";
  cc.onload = function () {
    window.CookieConsent.run({
      guiOptions: {
        consentModal: { layout: "bar", position: "bottom center", equalWeightButtons: false, flipButtons: false },
        preferencesModal: { layout: "box" }
      },
      onFirstConsent: updateConsent,
      onConsent: updateConsent,
      onChange: function (e) {
        if (e.changedCategories.indexOf("analytics") !== -1) updateConsent();
      },
      categories: {
        necessary: { enabled: true, readOnly: true },
        analytics: { enabled: false, autoClear: { cookies: [{ name: /^(_ga|_gid|_gat)/ }] } }
      },
      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "We use cookies",
              description: 'We use cookies to improve your experience and analyse how the site is used. See our <a href="/privacy" class="cc__link">Privacy Policy</a> for details.',
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Decline",
              showPreferencesBtn: "Manage preferences"
            },
            preferencesModal: {
              title: "Cookie preferences",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Decline all",
              savePreferencesBtn: "Save preferences",
              sections: [
                { title: "Strictly necessary", description: "These cookies are required for the site to function and cannot be disabled.", linkedCategory: "necessary" },
                { title: "Analytics", description: "Help us understand how visitors use the site so we can improve it.", linkedCategory: "analytics" }
              ]
            }
          }
        }
      }
    });
  };
  document.head.appendChild(cc);
})();
