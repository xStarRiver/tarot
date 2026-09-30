/**
 * Blog slugs are stored as raw Unicode (e.g. "八字分析vs奇門遁甲…"), but Next.js
 * hands dynamic segment params back percent-encoded ("%E5%85%AB…") because
 * that is how they appear in the request URL. Decode before matching a param
 * against the slugs in blogs.json, otherwise non-ASCII posts 404.
 */
export function decodeSlug(param: string): string {
  try {
    return decodeURIComponent(param);
  } catch {
    // Malformed escape sequence — fall through with the raw value.
    return param;
  }
}

/** Percent-encode a slug for canonicals, JSON-LD, sitemap entries and links. */
export function encodeSlug(slug: string): string {
  return encodeURIComponent(slug);
}
