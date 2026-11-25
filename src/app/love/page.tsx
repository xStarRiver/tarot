import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

// Landing page for the Google Ads "感情・塔羅" asset group (younger, affluent women).
// Policy: the ad account was limited for Misrepresentation in 2026-09/10. No outcome,
// accuracy, years-of-experience, money or health claims — in text OR inside screenshots.
// The only screenshots are three claim-free lifestyle stories from the master's Instagram
// (homepage testimonials 8 / 10 / 23); re-check any new one before adding it.

const WHATSAPP = "https://wa.me/85246476921";
const TELEGRAM = "https://t.me/ami28283728";
const SERIF = { fontFamily: "'Noto Serif TC', serif" };
const CHAMPAGNE = "#E8D4A8";
const BLUSH = "#E9B8C4";
const LINE = "1px solid rgba(232,212,168,0.16)";
const GOLD_TEXT = {
  background: "linear-gradient(120deg, #F3E3BC 0%, #C9A84C 45%, #F3E3BC 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
} as const;

export const metadata: Metadata = {
  title: "感情・塔羅私人解讀｜女師傅一對一 - Tarot INFT",
  description:
    "香港塔羅占卜及感情問事：對方心意、桃花姻緣、復合時機、結婚擇日。女師傅一對一私人解讀，唔使提供出生時辰，內容保密。網上評測 $1,388 起，WhatsApp 預約。",
  alternates: { canonical: "https://www.tarotinft.net/love" },
  openGraph: {
    title: "感情・塔羅私人解讀｜女師傅一對一",
    description: "對方心意、桃花姻緣、復合時機、結婚擇日。唔使提供出生時辰，一對一私人諮詢。",
    type: "website",
    url: "https://www.tarotinft.net/love",
  },
};

const questions = ["佢對我係咪認真？", "下一段桃花幾時出現？", "呢段感情值唔值得繼續？", "幾時結婚最合適？"];

const trust = ["女師傅一對一", "唔使出生時辰", "網上／面對面", "內容保密"];

const services = [
  {
    no: "01",
    title: "對方心意・感情走向",
    text: "塔羅逐張解讀，睇清楚對方諗法、你哋而家嘅狀態，同呢段關係嘅下一步。",
    img: "/images/blog/tarot-cards-intro-2026/inline-02.webp",
  },
  {
    no: "02",
    title: "桃花・姻緣時機",
    text: "正緣幾時出現、喺邊類場合遇到、點樣把握，用奇門遁甲分析時機同方向。",
    img: "/images/blog/attract-love-layout-2026/inline-01.webp",
  },
  {
    no: "03",
    title: "復合・聯絡時機",
    text: "分析雙方而家嘅狀態，揀合適時間主動，定係先等一等。",
    img: "/images/blog/breakup-reunion-2026/inline-01.webp",
  },
  {
    no: "04",
    title: "結婚擇日",
    text: "註冊、過大禮、擺酒日子，配合雙方情況擇日擇時，面對面可以一齊傾。",
    img: "/images/blog/attract-love-layout-2026/inline-02.webp",
  },
];

const included = [
  "1 小時內任問，感情、事業、人際都可以",
  "WhatsApp／Telegram 文字、語音、圖片都得",
  "個人化建議，唔係一般星座運程",
  "網上評測 7 日內免費跟進一次",
];

const moments = [
  { src: "/images/testimonials/8.jpg", caption: "陪相識三年嘅客人睇新居" },
  { src: "/images/testimonials/10.jpg", caption: "客人開公司，順便一齊揀車" },
  { src: "/images/testimonials/23.jpg", caption: "上門睇大埔比華利山屋企風水" },
];

const faqs = [
  {
    q: "唔記得出生時間，可以算嗎？",
    a: "可以。奇門遁甲以你提問嘅時間起盤，唔使提供出生時辰；塔羅占卜亦唔需要任何個人資料。",
  },
  {
    q: "網上諮詢點樣進行？",
    a: "經 WhatsApp 或 Telegram 進行，用文字、語音或者圖片都得，1 小時內任問。",
  },
  {
    q: "可以問幾多條問題？",
    a: "1 小時內冇限制，感情、事業、人際關係都可以一齊問。",
  },
  {
    q: "面對面喺邊度？",
    a: "WhatsApp 預約時會講清楚地點同時間。",
  },
  {
    q: "占卜結果一定準嗎？",
    a: "占卜同玄學分析只供參考，每人情況不同，結果因人而異，並不保證任何特定結果；重要決定請同時諮詢相關專業人士。",
  },
];

const reading = [
  { slug: "white-peach-blossom-love-guide", title: "白桃花、爛桃花與正桃花點分：事業女性的擇偶判斷" },
  { slug: "long-term-single-career-women", title: "長期單身：事業女性的3個盲點與九十日時間表" },
  { slug: "love-contact-timing", title: "主動定等佢？感情聯絡時機" },
  { slug: "marriage-timing-fortune-telling", title: "想知道幾時結婚？姻緣算命點睇" },
  { slug: "wedding-date-selection-2027", title: "結婚擇日2027：註冊、過大禮與擺酒日子" },
  { slug: "private-divination-privacy", title: "一對一占卜：私隱、保密與跟進的5個問題" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em]" style={{ color: BLUSH }}>
      {children}
    </p>
  );
}

function ContactButtons({ center = false }: { center?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${center ? "justify-center" : "justify-center lg:justify-start"}`}>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-transform duration-300 hover:scale-[1.03]"
        style={{ background: "linear-gradient(135deg, #C9A84C, #F3E3BC, #C9A84C)", color: "#1A1020", boxShadow: "0 8px 30px rgba(201,168,76,0.25)" }}
      >
        <WhatsAppIcon className="h-4 w-4 shrink-0" />
        WhatsApp 預約
      </a>
      <a
        href={TELEGRAM}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-full px-7 py-3.5 text-sm font-semibold transition-colors duration-300 hover:bg-white/5"
        style={{ border: LINE, color: CHAMPAGNE }}
      >
        Telegram 預約
      </a>
    </div>
  );
}

export default function LovePage() {
  return (
    <main
      className="min-h-screen overflow-hidden text-[#F4EEF2]"
      style={{ background: "radial-gradient(ellipse at top, #1C0F1F 0%, #0B0710 55%, #08060B 100%)" }}
    >
      <Navbar />

      {/* Hero */}
      <section className="relative px-6 pb-20 pt-28 sm:px-8 md:pt-36 lg:px-16">
        <div
          className="pointer-events-none absolute -right-24 top-20 h-[520px] w-[520px] rounded-full blur-[140px]"
          style={{ background: "rgba(233,184,196,0.10)" }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-center lg:text-left">
            <Eyebrow>Private Love Reading</Eyebrow>
            <h1 className="text-5xl font-semibold leading-[1.15] sm:text-6xl md:text-7xl" style={{ ...SERIF, letterSpacing: "0.04em" }}>
              <span style={GOLD_TEXT}>感情・塔羅</span>
              <br />
              <span className="text-3xl font-normal sm:text-4xl md:text-5xl" style={{ color: "#F4EEF2" }}>
                私人一對一解讀
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-md text-base leading-loose text-[#CFC4CC] lg:mx-0" style={SERIF}>
              塔羅睇心意，奇門遁甲睇時機。
              <br />
              由女師傅親自解讀，唔使提供出生時辰。
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start">
              {questions.map((q) => (
                <span
                  key={q}
                  className="rounded-full px-4 py-1.5 text-sm"
                  style={{ ...SERIF, border: LINE, background: "rgba(232,212,168,0.04)", color: CHAMPAGNE }}
                >
                  「{q}」
                </span>
              ))}
            </div>
            <div className="mt-9">
              <ContactButtons />
            </div>
            <p className="mt-5 text-sm text-[#A79BA4]">
              網上評測 <span className="font-semibold text-[#F4EEF2]">$1,388</span>／小時 · 面對面連佈局{" "}
              <span className="font-semibold" style={{ color: CHAMPAGNE }}>
                $2,388
              </span>
              ／小時
            </p>
          </div>

          {/* Arch-framed image */}
          <div className="relative mx-auto w-full max-w-[380px]">
            <div
              className="absolute -inset-3 rounded-t-[999px] rounded-b-[28px]"
              style={{ border: "1px solid rgba(232,212,168,0.22)" }}
            />
            <img
              src="/images/blog/tarot-cards-intro-2026/inline-02.webp"
              alt="塔羅占卜：一張塔羅牌喺牌陣中被翻開"
              width={1024}
              height={1024}
              className="relative aspect-[4/5] w-full rounded-t-[999px] rounded-b-[24px] object-cover"
              style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.55)" }}
            />
          </div>
        </div>

        {/* Trust row */}
        <div className="relative mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl sm:grid-cols-4" style={{ border: LINE }}>
          {trust.map((t) => (
            <div key={t} className="px-4 py-4 text-center text-sm" style={{ ...SERIF, background: "rgba(255,255,255,0.02)", color: CHAMPAGNE }}>
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* Services — editorial rows */}
      <section className="px-6 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <Eyebrow>What you can ask</Eyebrow>
            <h2 className="text-3xl font-semibold sm:text-4xl" style={SERIF}>
              可以問乜嘢
            </h2>
          </div>
          <div className="space-y-14">
            {services.map((s, i) => (
              <div key={s.title} className={`grid items-center gap-8 md:grid-cols-2 md:gap-14 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <img
                  src={s.img}
                  alt={s.title}
                  width={1024}
                  height={1024}
                  className="aspect-[16/10] w-full rounded-3xl object-cover md:aspect-[5/4]"
                  style={{ border: LINE }}
                />
                <div className="text-center md:text-left">
                  <p className="text-sm tracking-[0.3em]" style={{ color: BLUSH }}>
                    {s.no}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold" style={SERIF}>
                    {s.title}
                  </h3>
                  <div className="mx-auto my-4 h-px w-12 md:mx-0" style={{ background: "rgba(232,212,168,0.4)" }} />
                  <p className="leading-loose text-[#B9ADB6]">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What a reading includes + privacy */}
      <section className="px-6 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl p-8" style={{ border: LINE, background: "rgba(255,255,255,0.02)" }}>
            <Eyebrow>Each reading</Eyebrow>
            <h2 className="mb-6 text-2xl font-semibold" style={SERIF}>
              一次解讀包括
            </h2>
            <ul className="space-y-4">
              {included.map((item) => (
                <li key={item} className="flex gap-3 text-[#CFC4CC]">
                  <span style={{ color: CHAMPAGNE }}>✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-3xl p-8"
            style={{ border: LINE, background: "linear-gradient(160deg, rgba(233,184,196,0.08), rgba(255,255,255,0.02))" }}
          >
            <Eyebrow>Privacy</Eyebrow>
            <h2 className="mb-6 text-2xl font-semibold" style={SERIF}>
              私人、保密
            </h2>
            <p className="leading-loose text-[#CFC4CC]">
              每次都係一對一進行，唔使同其他人排隊，亦唔使提供出生時辰。感情嘅事可以慢慢講，諮詢內容保密。
            </p>
            <ol className="mt-6 space-y-3 text-sm text-[#B9ADB6]">
              <li>1　WhatsApp 或 Telegram 講低想問嘅事</li>
              <li>2　揀網上或者面對面，約好時間</li>
              <li>3　一對一解讀，之後有免費跟進</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Client moments — claim-free lifestyle stories only */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
          <Eyebrow>Moments</Eyebrow>
          <h2 className="text-3xl font-semibold sm:text-4xl" style={SERIF}>
            客人日常
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#A79BA4]">
            面對面諮詢唔止喺工作室：陪客人睇新居、揀車、上門睇屋企風水。
          </p>
        </div>
        <div className="mx-auto mt-10 flex max-w-5xl snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-8">
          {moments.map((m) => (
            <figure key={m.src} className="w-[70%] shrink-0 snap-center sm:w-auto">
              <img
                src={m.src}
                alt={`客人日常：${m.caption}`}
                width={575}
                height={1024}
                className="w-full rounded-[28px]"
                style={{ border: LINE, boxShadow: "0 20px 50px rgba(0,0,0,0.45)" }}
              />
              <figcaption className="mt-3 text-center text-sm" style={{ ...SERIF, color: CHAMPAGNE }}>
                {m.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mx-auto mt-4 max-w-3xl px-6 text-center text-xs leading-relaxed text-[#6F6470]">
          ＊截圖來自師傅 Instagram，只反映個別客人嘅生活片段，每人情況不同，結果因人而異，並不保證任何特定結果。
        </p>
      </section>

      <PricingSection />

      {/* FAQ */}
      <section className="px-6 py-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-3xl font-semibold sm:text-4xl" style={SERIF}>
              常見問題
            </h2>
          </div>
          <div className="divide-y" style={{ borderTop: LINE, borderBottom: LINE, borderColor: "rgba(232,212,168,0.16)" }}>
            {faqs.map((f) => (
              <details key={f.q} className="group py-5" style={{ borderColor: "rgba(232,212,168,0.16)" }}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg [&::-webkit-details-marker]:hidden" style={SERIF}>
                  {f.q}
                  <span className="transition-transform duration-300 group-open:rotate-45" style={{ color: CHAMPAGNE }}>
                    ＋
                  </span>
                </summary>
                <p className="mt-3 leading-loose text-[#B9ADB6]">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-center text-xs leading-relaxed text-[#6F6470]">
            ＊所有占卜及玄學分析只供參考，每人情況不同，結果因人而異，並不保證任何特定結果。
          </p>
        </div>
      </section>

      {/* Further reading */}
      <section className="px-6 pb-20 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-center text-xl font-semibold" style={{ ...SERIF, color: CHAMPAGNE }}>
            延伸閱讀
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {reading.map((r) => (
              <li key={r.slug}>
                <a
                  href={`/blog/${r.slug}`}
                  className="block rounded-2xl px-5 py-4 text-sm leading-relaxed text-[#CFC4CC] transition-colors hover:bg-white/5"
                  style={{ border: LINE }}
                >
                  {r.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-28 sm:px-8 lg:px-16">
        <div
          className="relative mx-auto max-w-4xl overflow-hidden rounded-[32px] px-8 py-14 text-center"
          style={{ border: LINE, background: "linear-gradient(135deg, rgba(233,184,196,0.12), rgba(201,168,76,0.08))" }}
        >
          <Eyebrow>Book a reading</Eyebrow>
          <h2 className="text-3xl font-semibold sm:text-4xl" style={SERIF}>
            想問感情嘅事？
          </h2>
          <p className="mx-auto mb-8 mt-4 max-w-md text-sm leading-relaxed text-[#CFC4CC]">
            講低你想問嘅問題，WhatsApp 或 Telegram 預約時間，網上或面對面都得。
          </p>
          <ContactButtons center />
        </div>
      </section>

      <Footer />
    </main>
  );
}
