(function () {
  "use strict";

  var ROUTES = new Set([
    "/",
    "/features",
    "/how-to-use",
    "/pricing",
    "/security",
    "/privacy",
    "/terms"
  ]);
  var NOOP_LOGIC = "class Component extends DCLogic {}";
  var pendingNavigation = null;

  function normalizePath(pathname) {
    if (!pathname || pathname === "/") return "/";
    return pathname.replace(/\/+$/, "") || "/";
  }

  function canNavigate(url) {
    return url.origin === window.location.origin && ROUTES.has(normalizePath(url.pathname));
  }

  function parsePage(html) {
    var doc = new DOMParser().parseFromString(html, "text/html");
    var template = doc.querySelector("x-dc");
    if (!template) throw new Error("The destination page has no <x-dc> template.");

    var logic = doc.querySelector("script[data-dc-script]");
    var heading = template.querySelector("main h1");
    return {
      doc: doc,
      template: template.innerHTML,
      logic: logic && logic.textContent ? logic.textContent : NOOP_LOGIC,
      props: logic && logic.getAttribute("data-props") || "{}",
      heading: heading ? heading.textContent.replace(/\s+/g, " ").trim() : ""
    };
  }

  function updateDocumentMetadata(nextDoc) {
    var nextTitle = nextDoc.querySelector("title");
    if (nextTitle) document.title = nextTitle.textContent || "Minute Minder";

    [
      'meta[name="description"]',
      'meta[name="robots"]',
      'link[rel="canonical"]'
    ].forEach(function (selector) {
      var current = document.head.querySelector(selector);
      var next = nextDoc.querySelector(selector);
      if (!next) {
        if (current) current.remove();
        return;
      }
      var clone = next.cloneNode(true);
      if (current) current.replaceWith(clone);
      else document.head.appendChild(clone);
    });
  }

  function applyPage(page) {
    var rootName = window.__dcRootName && window.__dcRootName();
    if (!rootName || typeof window.__dcUpdate !== "function") {
      throw new Error("The page runtime is not ready.");
    }

    var update = function () {
      window.__dcUpdate(rootName, "props", page.props, false);
      window.__dcUpdate(rootName, "js", page.logic, false);
      window.__dcUpdate(rootName, "html", page.template, false);
    };

    if (window.ReactDOM && typeof window.ReactDOM.unstable_batchedUpdates === "function") {
      window.ReactDOM.unstable_batchedUpdates(update);
    } else {
      update();
    }
    updateDocumentMetadata(page.doc);
  }

  function waitForPageRender(expectedHeading) {
    if (!expectedHeading) return Promise.resolve();

    return new Promise(function (resolve) {
      var deadline = Date.now() + 1500;

      function check() {
        var heading = document.querySelector("main h1");
        var text = heading ? heading.textContent.replace(/\s+/g, " ").trim() : "";
        if (text === expectedHeading || Date.now() >= deadline) {
          resolve();
          return;
        }
        window.setTimeout(check, 16);
      }

      check();
    });
  }

  function focusPageHeading() {
    var heading = document.querySelector("main h1");
    if (!heading) return;
    heading.setAttribute("tabindex", "-1");
    heading.focus({ preventScroll: true });
    heading.addEventListener("blur", function () {
      heading.removeAttribute("tabindex");
    }, { once: true });
  }

  async function navigate(input, options) {
    options = options || {};
    var url = input instanceof URL ? input : new URL(input, window.location.href);
    if (!canNavigate(url)) {
      window.location.assign(url.href);
      return;
    }

    if (pendingNavigation) pendingNavigation.abort();
    var controller = new AbortController();
    pendingNavigation = controller;
    document.documentElement.setAttribute("data-site-navigating", "true");

    try {
      var response = await fetch(url.pathname + url.search, {
        signal: controller.signal,
        headers: { "X-Requested-With": "MinuteMinderNavigation" }
      });
      if (!response.ok) throw new Error("Navigation request failed with " + response.status + ".");
      var page = parsePage(await response.text());
      if (controller.signal.aborted) return;

      applyPage(page);
      if (!options.popstate) history.pushState({ minuteMinderNavigation: true }, "", url.href);
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      await waitForPageRender(page.heading);
      focusPageHeading();
    } catch (error) {
      if (error && error.name === "AbortError") return;
      console.error("[site-navigation] Falling back to document navigation:", error);
      window.location.assign(url.href);
    } finally {
      if (pendingNavigation === controller) pendingNavigation = null;
      document.documentElement.removeAttribute("data-site-navigating");
    }
  }

  document.addEventListener("click", function (event) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    var target = event.target;
    var link = target && target.closest ? target.closest("a[href]") : null;
    if (!link || link.target || link.hasAttribute("download")) return;

    var url = new URL(link.href, window.location.href);
    if (!canNavigate(url)) return;
    if (normalizePath(url.pathname) === normalizePath(window.location.pathname) && url.hash) return;

    event.preventDefault();
    navigate(url);
  });

  window.addEventListener("popstate", function () {
    navigate(new URL(window.location.href), { popstate: true });
  });

  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  window.__minuteMinderNavigate = navigate;
})();
