"use client";

import { motion } from "framer-motion";
import { TrendingUp, Heart, Briefcase, Target } from "lucide-react";

const cases = [
  {
    icon: Briefcase,
    category: "生意翻盤",
    title: "餐飲集團扭虧為盈",
    description:
      "客戶經營餐飲連鎖面臨倒閉危機，透過奇門佈局調整店面風水及開業時間，3個月內營業額回升 240%。",
    stats: [
      { label: "營業額增長", value: "240%" },
      { label: "預測準確度", value: "精準至日" },
    ],
    highlight: "精準預測最佳擴張時機，避開破產劫數",
  },
  {
    icon: Target,
    category: "賭博策略",
    title: "精準時機把握",
    description:
      "客戶投入 2 萬本金，透過奇門遁甲擇時佈局，在特定時辰入場，最終獲利超過 80 萬。",
    stats: [
      { label: "回報倍數", value: "40x" },
      { label: "投入本金", value: "$2萬" },
      { label: "最終收益", value: "$80萬+" },
    ],
    highlight: "精準計算最佳入場時辰，勝率大幅提升",
  },
  {
    icon: Heart,
    category: "感情挽救",
    title: "分手三年成功復合",
    description:
      "客戶與前任分手三年，透過奇門預測最佳聯絡時機及風水桃花佈局，成功復合並於半年後結婚。",
    stats: [
      { label: "分離時間", value: "3年" },
      { label: "復合至結婚", value: "6個月" },
    ],
    highlight: "精準指出對方心理轉變日期",
  },
  {
    icon: TrendingUp,
    category: "投資決策",
    title: "避開股災，精準抄底",
    description:
      "提前兩週預警客戶股市將大跌，建議清倉。跌幅到位後精準提示入場時機，單筆獲利超過 35%。",
    stats: [
      { label: "預警提前", value: "14天" },
      { label: "單筆獲利", value: "35%+" },
    ],
    highlight: "預測大盤轉折精準至「日」和「時辰」",
  },
];

const summaryStats = [
  { value: "500+", label: "服務客戶" },
  { value: "98%", label: "滿意度" },
  { value: "10年+", label: "從業經驗" },
  { value: "精準至時", label: "預測精度" },
];

export default function TrackRecord() {
  return (
    <section id="cases" className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full blur-[120px]"
          style={{ background: "rgba(42,157,92,0.04)" }}
        />
        <div
          className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full blur-[120px]"
          style={{ background: "rgba(201,168,76,0.04)" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="badge badge-emerald mx-auto mb-4">實戰案例</div>
          <h2
            className="text-3xl font-bold text-gradient-gold sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Noto Serif TC', serif" }}
          >
            奇門戰績
          </h2>
          <p className="mt-4 text-base text-[#6B6B76]">
            精準至日、至時辰的預測實績
          </p>
        </motion.div>

        {/* Case cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {cases.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card-glass flex flex-col p-6"
              >
                {/* Category */}
                <div className="mb-4 flex items-center gap-2.5">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-lg"
                    style={{ background: "rgba(201,168,76,0.08)" }}
                  >
                    <Icon className="h-4 w-4" style={{ color: "#C9A84C" }} />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "#C9A84C" }}>
                    {item.category}
                  </span>
                </div>

                {/* Title & description */}
                <h3
                  className="mb-2 text-lg font-semibold text-[#F5F5F7]"
                  style={{ fontFamily: "'Noto Serif TC', serif" }}
                >
                  {item.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-[#A1A1AA]">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {item.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl px-3.5 py-2"
                      style={{ background: "rgba(8,8,12,0.6)", border: "1px solid #1F1F2E" }}
                    >
                      <p className="text-[10px] uppercase tracking-wider text-[#6B6B76]">{stat.label}</p>
                      <p className="text-base font-bold text-gradient-gold">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Highlight */}
                <div
                  className="mt-auto rounded-xl px-4 py-2.5"
                  style={{
                    borderLeft: "3px solid rgba(201,168,76,0.4)",
                    background: "rgba(201,168,76,0.04)",
                  }}
                >
                  <p className="text-xs italic" style={{ color: "#E8D48B" }}>
                    &ldquo;{item.highlight}&rdquo;
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 grid grid-cols-2 gap-4 rounded-2xl p-6 sm:grid-cols-4 md:p-8"
          style={{
            border: "1px solid #1F1F2E",
            background: "rgba(14,14,20,0.6)",
          }}
        >
          {summaryStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-gradient-gold sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-xs text-[#6B6B76]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
