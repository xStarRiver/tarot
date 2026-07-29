"use client";

import { motion } from "framer-motion";

const expertiseItems = [
  { icon: "💕", label: "愛情占卜", desc: "感情走向精準預測" },
  { icon: "💰", label: "財運佈局", desc: "財富增長風水策略" },
  { icon: "📈", label: "生意決策", desc: "商業時機精準把握" },
  { icon: "🎯", label: "賭博策略", desc: "勝率提升佈局指導" },
  { icon: "🏠", label: "風水佈局", desc: "居家辦公能量調整" },
  { icon: "🔮", label: "運勢預測", desc: "未來趨勢深度分析" },
];

export default function ExpertiseMarquee() {
  // Double the items for seamless loop
  const items = [...expertiseItems, ...expertiseItems];

  return (
    <section className="relative overflow-hidden py-5" style={{ borderTop: "1px solid #1F1F2E", borderBottom: "1px solid #1F1F2E", background: "rgba(14,14,20,0.6)" }}>
      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 sm:w-40" style={{ background: "linear-gradient(to right, #08080C, transparent)" }} />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 sm:w-40" style={{ background: "linear-gradient(to left, #08080C, transparent)" }} />

      {/* Marquee */}
      <div className="animate-marquee flex whitespace-nowrap">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -2 }}
            className="mx-3 inline-flex items-center gap-3 rounded-xl px-5 py-2.5 backdrop-blur-sm transition-colors"
            style={{
              border: "1px solid #1F1F2E",
              background: "rgba(19,19,32,0.5)",
            }}
          >
            <span className="text-xl">{item.icon}</span>
            <div>
              <p className="text-sm font-medium text-[#F5F5F7]" style={{ fontFamily: "'Noto Serif TC', serif" }}>
                {item.label}
              </p>
              <p className="text-[11px] text-[#6B6B76]">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
