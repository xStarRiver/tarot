// WhatsApp lead-source tag.
//
// Google Ads only sees the click on a wa.me link — not whether a chat really
// started or became a booking. Prefilling the WhatsApp message with a short
// source code lets the owner count real enquiries per channel:
//   (ref: G)  arrived from a Google Ads click (gclid / gbraid / wbraid)
//   (ref: M)  arrived from a Meta / Instagram ad (fbclid, utm_source=ig|fb)
//   (ref: W)  any other website visitor
// The source is kept in sessionStorage so it survives navigation to /blog.

const SOURCE_KEY = "tarot_lead_src";

function landingSource(): string | null {
  const params = new URLSearchParams(window.location.search);
  if (params.has("gclid") || params.has("gbraid") || params.has("wbraid")) return "G";
  const utmSource = (params.get("utm_source") ?? "").toLowerCase();
  if (params.has("fbclid") || ["ig", "fb", "facebook", "instagram"].includes(utmSource)) return "M";
  return null;
}

function visitSource(): string {
  try {
    const fromUrl = landingSource();
    if (fromUrl) sessionStorage.setItem(SOURCE_KEY, fromUrl);
    return sessionStorage.getItem(SOURCE_KEY) ?? "W";
  } catch {
    // Storage blocked (e.g. some private modes) — use this page's URL only.
    return landingSource() ?? "W";
  }
}

const source = visitSource();

// Capture phase, so the href is updated before the browser follows the link
// (GTM's wa.me click trigger still matches the longer URL).
document.addEventListener(
  "click",
  (event) => {
    const link =
      event.target instanceof Element
        ? event.target.closest<HTMLAnchorElement>('a[href^="https://wa.me/"]')
        : null;
    if (!link || link.href.includes("text=")) return;
    const message = `你好！我喺 Tarot INFT 網站見到你哋，想查詢預約諮詢。(ref: ${source})`;
    // encodeURIComponent, not URLSearchParams: WhatsApp shows "+" literally.
    link.href = `${link.href}${link.href.includes("?") ? "&" : "?"}text=${encodeURIComponent(message)}`;
  },
  true,
);
