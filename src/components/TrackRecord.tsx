"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "./WhatsAppIcon";

// Google Ads (Misrepresentation → Unreliable claims) limits ads whose landing
// page promises improbable outcomes or financial returns, and requires a
// visible "results vary" disclaimer next to testimonials that cite results.
// Keep these cases free of gambling, investment-return and guarantee claims.
const cases = [
  {
    category: "生意決策",
    title: "餐飲生意由跌轉升",
    description:
      "客戶經營餐飲生意，營業額持續下滑。透過奇門分析調整店面佈局，並揀選合適時機推出新安排，之後幾個月生意逐步回穩。",
    result: "生意回穩",
    highlight: "分析擴張與收縮的時機，協助作出決策",
  },
  {
    category: "置業風水",
    title: "睇樓半年終於揀定",
    description:
      "客戶睇樓半年一直拿不定主意。透過奇門遁甲分析方位及時機，配合單位風水評估，最終揀定心儀單位並順利成交。",
    result: "順利成交",
    highlight: "方位、時機、單位風水一次過分析",
  },
  {
    category: "感情挽救",
    title: "分手三年重新走在一起",
    description:
      "客戶與前任分手三年。透過奇門分析雙方狀態及合適的聯絡時機，配合桃花佈局，兩人最終重新走在一起。",
    result: "成功復合",
    highlight: "分析對方心態轉變及聯絡時機",
  },
  {
    category: "化解小人",
    title: "職場被針對，局勢逆轉",
    description:
      "客戶在公司長期被同事針對。透過奇門分析人際形勢，找出問題源頭，再配合辦公室座位及個人佈局，工作環境明顯改善。",
    result: "工作環境改善",
    highlight: "先找出源頭，再對症佈局",
  },
];

export default function TrackRecord() {
  return (
    <section id="cases" className="relative py-20 sm:py-28">
      {/* Subtle gradient bg */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: "radial-gradient(ellipse at 30% 20%, rgba(201,168,76,0.04), transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p
            className="text-xs font-medium uppercase tracking-[0.2em] mb-3"
            style={{ color: "#C9A84C" }}
          >
            實戰案例
          </p>
          <h2
            className="text-2xl font-bold sm:text-3xl md:text-4xl"
            style={{ fontFamily: "'Noto Serif TC', serif", color: "#F5F5F7" }}
          >
            奇門戰績
          </h2>
          <p className="mt-3 text-sm text-[#8B8B96] max-w-md">
            以下為部分客戶個案分享，個人資料已隱去。
          </p>
        </motion.div>

        {/* Cases - Timeline style */}
        <div className="space-y-6">
          {cases.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-2xl p-5 sm:p-7 transition-all duration-300"
              style={{
                background: "rgba(14,14,20,0.5)",
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
                {/* Left: category + result */}
                <div className="mb-3 sm:mb-0 sm:w-36 shrink-0">
                  <span
                    className="text-[11px] font-medium tracking-wider uppercase"
                    style={{ color: "#C9A84C" }}
                  >
                    {item.category}
                  </span>
                  <p
                    className="mt-1 text-lg font-bold sm:text-xl"
                    style={{
                      background: "linear-gradient(135deg, #F6D365, #C9A84C)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.result}
                  </p>
                </div>

                {/* Right: content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-base font-semibold sm:text-lg mb-2"
                    style={{ fontFamily: "'Noto Serif TC', serif", color: "#F5F5F7" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#8B8B96] mb-3">
                    {item.description}
                  </p>
                  <p className="text-xs italic text-[#B8A472]">
                    「{item.highlight}」
                  </p>
                </div>
              </div>

              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                style={{ border: "1px solid rgba(201,168,76,0.15)" }}
              />
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-[#6B6B76]">
          ＊個案只反映個別客戶的情況及經驗，每人情況不同，結果因人而異，並不代表或保證任何特定結果。
        </p>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="https://wa.me/85246476921"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #C9A84C, #E8C84C, #C9A84C)",
              color: "#1A1A2E",
              boxShadow: "0 4px 20px rgba(201,168,76,0.2)",
            }}
          >
            <WhatsAppIcon className="h-4 w-4" />
            了解更多成功案例
          </a>
        </motion.div>
      </div>
    </section>
  );
}
