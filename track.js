/**
 * Repassa src/sck/UTMs da LP para o checkout Hotmart e injeta o slug curto da página em sck.
 * Limite Hotmart: valor de sck/src com até 30 caracteres; underscore (_) não permitido.
 *
 * Site: amuletodeprotecao.com.br (Âncora de Proteção Energética)
 */
(function (global) {
  "use strict";

  var SCK_MAX = 30;
  var CTA_SELECTOR = ".cta-btn-green";
  var DEFAULT_PAGE = "amuleto";
  var TRACK_KEYS = [
    "src",
    "sck",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
  ];

  /** path segment → código curto no sck (máx. 30 no total com campaign) */
  var PAGE_SLUGS = {
    "": DEFAULT_PAGE,
    index: DEFAULT_PAGE,
    "index.html": DEFAULT_PAGE,
  };

  function getPageCode() {
    var path = (global.location && global.location.pathname) || "/";
    var segment = path.replace(/^\/+|\/+$/g, "").split("/")[0] || "";
    if (PAGE_SLUGS.hasOwnProperty(segment)) return PAGE_SLUGS[segment];
    if (!segment) return DEFAULT_PAGE;
    return String(segment).replace(/_/g, "-").slice(0, SCK_MAX) || DEFAULT_PAGE;
  }

  function hasPageSegment(sck, pageCode) {
    if (!sck || !pageCode) return false;
    var parts = String(sck).split("|");
    for (var i = 0; i < parts.length; i++) {
      if (parts[i] === pageCode) return true;
    }
    return false;
  }

  function composeSck(existingSck, pageCode) {
    var base = existingSck ? String(existingSck).replace(/_/g, "-") : "";
    var page = String(pageCode || DEFAULT_PAGE).replace(/_/g, "-");

    if (!base) return page.slice(0, SCK_MAX);
    if (hasPageSegment(base, page)) return base.slice(0, SCK_MAX);

    var suffix = "|" + page;
    var combined = base + suffix;
    if (combined.length <= SCK_MAX) return combined;

    // Prioriza o slug no final: corta a esquerda do campaign
    var maxBase = SCK_MAX - suffix.length;
    if (maxBase < 1) return page.slice(0, SCK_MAX);
    return base.slice(0, maxBase) + suffix;
  }

  function collectTrackParams() {
    var out = {};
    var search = (global.location && global.location.search) || "";
    var params;
    try {
      params = new URLSearchParams(search);
    } catch (err) {
      return out;
    }

    for (var i = 0; i < TRACK_KEYS.length; i++) {
      var key = TRACK_KEYS[i];
      var val = params.get(key);
      if (val != null && String(val).trim() !== "") {
        out[key] = String(val).trim();
      }
    }
    return out;
  }

  function buildCheckoutUrl(baseUrl) {
    if (!baseUrl) return baseUrl;

    var url;
    try {
      url = new URL(baseUrl, global.location && global.location.href);
    } catch (err) {
      return baseUrl;
    }

    var incoming = collectTrackParams();
    var pageCode = getPageCode();

    for (var i = 0; i < TRACK_KEYS.length; i++) {
      var key = TRACK_KEYS[i];
      if (key === "sck") continue;
      if (incoming[key]) url.searchParams.set(key, incoming[key]);
    }

    url.searchParams.set("sck", composeSck(incoming.sck || "", pageCode));
    return url.toString();
  }

  function applyToLinks(selector) {
    var sel = selector || CTA_SELECTOR;
    var nodes = document.querySelectorAll(sel);
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var href = el.getAttribute("href");
      if (!href || href.indexOf("pay.hotmart.com") === -1) continue;
      el.href = buildCheckoutUrl(href);
    }
  }

  function boot() {
    applyToLinks(CTA_SELECTOR);
  }

  if (global.document) {
    if (global.document.readyState === "loading") {
      global.document.addEventListener("DOMContentLoaded", boot);
    } else {
      boot();
    }
  }

  global.HotmartTracking = {
    getPageCode: getPageCode,
    buildCheckoutUrl: buildCheckoutUrl,
    applyToLinks: applyToLinks,
    PAGE_SLUGS: PAGE_SLUGS,
    TRACK_KEYS: TRACK_KEYS,
    CTA_SELECTOR: CTA_SELECTOR,
    DEFAULT_PAGE: DEFAULT_PAGE,
  };
})(typeof window !== "undefined" ? window : this);
