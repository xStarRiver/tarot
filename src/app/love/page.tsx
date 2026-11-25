import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

// Landing page for the Google Ads "感情・塔羅" asset group (younger, affluent women).
// Keep it free of testimonial screenshots, case stories and outcome claims: the ad
// account was limited for Misrepresentation in 2026-09/10 because of such content.

const WHATSAPP = "https://wa.me/85246476921";
const TELEGRAM = "https://t.me/ami28283728";
const SERIF = { fontFamily: "'Noto Serif TC', serif" };
const GOLD_TEXT = {
  background: "linear-gradient(135deg, #F6D365 0%, #C9A84C 50%, #F6D365 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
} as const;

export const metadata: Metadata = {
  title: "感情・塔羅占卜｜女師傅一對一私密解讀 - Tarot INFT",
  description:
    "香港塔羅占卜及感情問事：對方心意、桃花姻緣、復合時機、結婚擇日。女師傅一對一私密解讀，唔使提供出生時辰，內容保密。網上評測 $1,388 起，WhatsApp 預約。",
  alternates: { canonical: "https://www.tarotinft.net/love" },
  openGraph: {
    title: "感情・塔羅占卜｜女師傅一對一私密解讀",
    description: "對方心意、桃花姻緣、復合時機、結婚擇日。唔使提供出生時辰，一對一私密諮詢。",
    type: "website",
    url: "https://www.tarotinft.net/love",
  },
};

const questions = ["佢對我係咪認真？", "下一段桃花幾時出現？", "呢段感情值唔值得繼續？", "幾時結婚最合適？"];

const services = [
  {
    title: "對方心意・感情走向",
    text: "塔羅逐張解讀，睇清楚對方諗法同呢段關係嘅下一步。",
    img: "/images/blog/tarot-cards-intro-2026/inline-02.webp",
  },
  {
    title: "桃花・姻緣時機",
    text: "正緣幾時出現、點樣把握，用奇門遁甲分析時機。",
    img: "/images/blog/attract-love-layout-2026/inline-01.webp",
  },
  {
    title: "復合・聯絡時機",
    text: "分析雙方而家嘅狀態，揀合適時間主動，定係先等一等。",
    img: "/images/blog/breakup-reunion-2026/inline-01.webp",
  },
  {
    title: "結婚擇日",
    text: "註冊、過大禮、擺酒日子，配合雙方情況擇日擇時。",
    img: "/images/blog/attract-love-layout-2026/inline-02.webp",
  },
];

const reasons = [
  { title: "女師傅一對一", text: "感情嘅事可以放心慢慢講，唔使同其他人排隊。" },
  { title: "唔使出生時辰", text: "奇門遁甲以你提問嘅時間起盤，唔記得時辰都可以問。" },
  { title: "塔羅＋奇門", text: "塔羅睇心意同狀態，奇門睇時機同方向。" },
  { title: "網上或面對面", text: "WhatsApp／Telegram 文字、語音都得，唔使特登出門。" },
];

const steps = [
  "WhatsApp 或 Telegram 講低想問嘅事",
  "揀網上或者面對面，約好時間",
  "一對一解讀，1 小時內任問，之後有免費跟進",
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

function ContactButtons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary">
        <WhatsAppIcon className="h-4 w-4 shrink-0" />
        WhatsApp 預約
      </a>
      <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="btn-secondary">
        Telegram 預約
      </a>
    </div>
  );
}

export default function LovePage() {
  return (
    <main className="min-h-screen overflow-hidden text-[#F5F5F7]" style={{ backgroundColor: "#08080C" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative px-6 pb-16 pt-28 sm:px-8 md:pt-32 lg:px-16">
        <div
          className="pointer-events-none absolute right-0 top-10 h-[480px] w-[480px] rounded-full blur-[120px]"
          style={{ background: "rgba(236,72,153,0.10)" }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <div className="badge badge-gold mx-auto mb-5 lg:mx-0">感情・塔羅占卜</div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl" style={SERIF}>
              <span style={GOLD_TEXT}>感情嘅事</span>
              <br />
              一對一慢慢傾
            </h1>
            <p className="mt-5 text-base leading-relaxed text-[#C4C4CE] sm:text-lg" style={SERIF}>
              女師傅私密解讀・唔使提供出生時辰
              <br />
              塔羅睇心意，奇門遁甲睇時機
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              {questions.map((q) => (
                <span
                  key={q}
                  className="rounded-full px-3.5 py-1.5 text-sm text-[#E8D48B]"
                  style={{ border: "1px solid rgba(201,168,76,0.3)", background: "rgba(201,168,76,0.06)" }}
                >
                  {q}
                </span>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#A1A1AA]">
              線上諮詢 <span className="font-semibold text-[#F5F5F7]">$1,388</span>／小時 · 面對面諮詢{" "}
              <span className="font-semibold text-[#E8D48B]">$2,388</span>／小時
            </p>
            <div className="mt-6">
              <ContactButtons />
            </div>
          </div>
          <div className="mx-auto w-full max-w-md">
            <img
              src="/images/blog/tarot-cards-intro-2026/inline-02.webp"
              alt="塔羅占卜：一張塔羅牌喺牌陣中被翻開"
              width={1024}
              height={1024}
              className="w-full rounded-3xl"
              style={{ border: "1px solid rgba(201,168,76,0.25)", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
            />
          </div>
        </div>
      </section>

      {/* What you can ask */}
      <section className="px-6 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-3xl font-bold sm:text-4xl text-gradient-gold" style={SERIF}>
            可以問乜嘢
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="card-glass overflow-hidden">
                <img src={s.img} alt={s.title} width={1024} height={1024} className="aspect-[16/9] w-full object-cover sm:aspect-square" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold" style={SERIF}>
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="px-6 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-3xl font-bold sm:text-4xl text-gradient-gold" style={SERIF}>
            私密、一對一
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="card-glass p-6">
                <h3 className="text-lg font-semibold text-[#E8D48B]" style={SERIF}>
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">{r.text}</p>
              </div>
            ))}
          </div>
          <ol className="mx-auto mt-10 max-w-2xl space-y-3">
            {steps.map((step, i) => (
              <li key={step} className="flex items-start gap-4 text-[#C4C4CE]">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold text-[#08080C]"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48B)" }}
                >
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PricingSection />

      {/* FAQ */}
      <section className="px-6 py-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold sm:text-4xl text-gradient-gold" style={SERIF}>
            常見問題
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="card-glass p-5">
                <summary className="cursor-pointer font-semibold" style={SERIF}>
                  {f.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-center text-xs leading-relaxed text-[#6B6B76]">
            ＊所有占卜及玄學分析只供參考，每人情況不同，結果因人而異，並不保證任何特定結果。
          </p>
        </div>
      </section>

      {/* Further reading */}
      <section className="px-6 pb-16 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-5 text-xl font-semibold text-[#E8D48B]" style={SERIF}>
            延伸閱讀
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {reading.map((r) => (
              <li key={r.slug}>
                <a href={`/blog/${r.slug}`} className="text-sm text-[#C4C4CE] underline-offset-4 hover:text-[#E8D48B] hover:underline">
                  {r.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-24 sm:px-8 lg:px-16">
        <div className="card-glass-gold mx-auto max-w-3xl p-8 text-center">
          <h2 className="text-2xl font-bold sm:text-3xl" style={SERIF}>
            想問感情嘅事？
          </h2>
          <p className="mb-6 mt-3 text-sm text-[#A1A1AA]">講低你想問嘅問題，WhatsApp 或 Telegram 預約時間。</p>
          <div className="flex justify-center">
            <ContactButtons />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
