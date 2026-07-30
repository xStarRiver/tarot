"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "./WhatsAppIcon";

const cases = [
  {
    category: "生意翻盤",
    title: "餐飲集團扭虧為盈",
    description:
      "客戶經營餐飲連鎖面臨倒閉危機，透過奇門佈局調整店面風水及開業時間，3個月內營業額回升 240%。",
    result: "營業額增長 240%",
    highlight: "精準預測最佳擴張時機，避開破產劫數",
  },
  {
    category: "賭博策略",
    title: "精準時機把握",
    description:
      "客戶投入 2 萬本金，透過奇門遁甲擇時佈局，在特定時辰入場，最終獲利超過 80 萬。",
    result: "回報 40 倍",
    highlight: "精準計算最佳入場時辰，勝率大幅提升",
  },
  {
    category: "感情挽救",
    title: "分手三年成功復合",
    description:
      "客戶與前任分手三年，透過奇門預測最佳聯絡時機及風水桃花佈局，成功復合並於半年後結婚。",
    result: "6 個月內結婚",
    highlight: "精準指出對方心理轉變日期",
  },
  {
    category: "投資決策",
    title: "避開股災，精準抄底",
    description:
      "提前兩週預警客戶股市將大跌，建議清倉。跌幅到位後精準提示入場時機，單筆獲利超過 35%。",
    result: "單筆獲利 35%+",
    highlight: "預測大盤轉折精準至「日」和「時辰」",
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
            精準至日、至時辰的預測實績。以下為真實客戶案例。
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="https://wa.me/85254987176"
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
