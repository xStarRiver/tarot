"use client";

import { motion } from "framer-motion";

const expertiseItems = [
  { icon: "💕", label: "愛情占卜", desc: "感情走向精準預測" },
  { icon: "💰", label: "財運佈局", desc: "財富增長風水策略" },
  { icon: "📈", label: "生意決策", desc: "商業時機精準把握" },
  { icon: "🎯", label: "賭博策略", desc: "勝率提升佈局指導" },
  { icon: "🏠", label: "風水佈局", desc: "居家辦公能量調整" },
  { icon: "🔮", label: "運勢預測", desc: "未來趨勢深度分析" },
  { icon: "💕", label: "愛情占卜", desc: "感情走向精準預測" },
  { icon: "💰", label: "財運佈局", desc: "財富增長風水策略" },
  { icon: "📈", label: "生意決策", desc: "商業時機精準把握" },
  { icon: "🎯", label: "賭博策略", desc: "勝率提升佈局指導" },
  { icon: "🏠", label: "風水佈局", desc: "居家辦公能量調整" },
  { icon: "🔮", label: "運勢預測", desc: "未來趨勢深度分析" },
];

export default function ExpertiseMarquee() {
  return (
    <section className="relative overflow-hidden py-6" style={{ borderTop: "1px solid #27272A", borderBottom: "1px solid #27272A", background: "rgba(17,17,24,0.5)" }}>
      {/* Edge fade gradients */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32" style={{ background: "linear-gradient(to right, #0A0A0F, transparent)" }} />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32" style={{ background: "linear-gradient(to left, #0A0A0F, transparent)" }} />

      {/* Marquee container */}
      <div className="animate-marquee flex whitespace-nowrap">
        {expertiseItems.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -2 }}
            className="mx-4 inline-flex items-center gap-3 rounded-full px-6 py-3 backdrop-blur-sm transition-colors"
            style={{
              border: "1px solid #27272A",
              background: "rgba(22,22,31,0.6)",
            }}
          >
            <span className="text-2xl">{item.icon}</span>
            <div>
              <p className="text-sm font-semibold text-[#F5F5F7]" style={{ fontFamily: "'Noto Serif TC', serif" }}>
                {item.label}
              </p>
              <p className="text-xs text-[#71717A]">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
