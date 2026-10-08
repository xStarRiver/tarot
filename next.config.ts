import type { NextConfig } from "next";

/**
 * Blog posts that went live under a Chinese slug derived from the title (the site builder ignored
 * <URL_SLUG> until 2026-10-08). They now live at their English slug; keep the old URLs working.
 * Both the raw and the percent-encoded form are listed so the match doesn't depend on how the
 * request path arrives.
 */
const legacyBlogSlugs: [string, string][] = [
  ["八字分析vs奇門遁甲唔使出生時辰都算到4大分別香", "bazi-analysis-vs-qimen-dunjia"],
  ["時辰八字2026唔記得出生時間點算3步用奇門遁甲", "no-birth-time-qimen-dunjia"],
  ["八字排盤2026免費工具準唔準5個限制真人解盤嘅", "bazi-chart-free-tool-limits"],
  ["八字算命2026收費全公開免費八字準唔準3個防騙", "bazi-fees-scam-check-2026"],
  ["一命二運三風水2026命定咗冇得改拆解十句俗語同", "yi-ming-er-yun-san-feng-shui"],
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacyBlogSlugs.flatMap(([oldSlug, newSlug]) => [
      { source: `/blog/${oldSlug}`, destination: `/blog/${newSlug}`, permanent: true },
      { source: `/blog/${encodeURIComponent(oldSlug)}`, destination: `/blog/${newSlug}`, permanent: true },
    ]);
  },
};

export default nextConfig;
