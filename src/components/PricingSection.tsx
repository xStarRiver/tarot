"use client";

import { motion } from "framer-motion";
import { Check, Star, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "網上評測",
    price: "$1,388",
    description: "遠程深度諮詢",
    highlight: false,
    features: [
      "1 小時無限提問",
      "文字 / 語音 / 圖片支援",
      "即時問題分析與解答",
      "個人化建議報告",
      "7天內免費跟進一次",
    ],
    cta: "立即預約",
  },
  {
    name: "面對面深度諮詢 + 佈局",
    price: "$2,388",
    description: "最受歡迎 · 全方位服務",
    highlight: true,
    badge: "推薦",
    features: [
      "1 小時面對面無限提問",
      "個人化風水佈局建議",
      "贈送靈驗法物（香水/手鏈）",
      "深度命格分析",
      "30天內免費跟進兩次",
      "專屬 VIP 售後群組",
    ],
    cta: "立即預約面談",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative px-6 py-24 md:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
          style={{ background: "rgba(201,168,76,0.05)" }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2
            className="text-3xl font-bold sm:text-4xl md:text-5xl text-gradient-gold"
            style={{ fontFamily: "'Noto Serif TC', serif" }}
          >
            服務方案
          </h2>
          <p className="mt-4 text-lg text-[#A1A1AA]" style={{ fontFamily: "'Noto Serif TC', serif" }}>
            選擇最適合您的諮詢方式
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid gap-8 md:grid-cols-2 items-start">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -8 }}
              className="relative flex flex-col rounded-2xl p-8 transition-all duration-300"
              style={
                tier.highlight
                  ? {
                      background: "rgba(22,22,31,0.9)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(201,168,76,0.4)",
                      borderRadius: "16px",
                      boxShadow:
                        "0 0 40px rgba(201,168,76,0.12), inset 0 1px 0 rgba(201,168,76,0.15)",
                      transform: "scale(1.03)",
                    }
                  : {
                      background: "rgba(22,22,31,0.8)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid #27272A",
                      borderRadius: "16px",
                    }
              }
            >
              {/* Highlight badge */}
              {tier.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div
                    className="flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold text-[#0A0A0F]"
                    style={{
                      background: "linear-gradient(135deg, #8B7332, #C9A84C, #E8D48B)",
                    }}
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    {tier.badge}
                  </div>
                </div>
              )}

              {/* Tier header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#F5F5F7]" style={{ fontFamily: "'Noto Serif TC', serif" }}>
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-[#71717A]">{tier.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className={`text-4xl font-bold ${tier.highlight ? "text-gradient-gold" : "text-[#F5F5F7]"}`}>
                  {tier.price}
                </span>
                <span className="ml-2 text-sm text-[#71717A]">/ 每次</span>
              </div>

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-4 w-4 flex-shrink-0"
                      style={{ color: tier.highlight ? "#C9A84C" : "#2A9D5C" }}
                    />
                    <span className="text-sm text-[#A1A1AA]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="https://wa.me/85254987176"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300"
                style={
                  tier.highlight
                    ? {
                        background: "linear-gradient(135deg, #8B7332, #C9A84C, #E8D48B)",
                        color: "#0A0A0F",
                      }
                    : {
                        border: "1px solid #27272A",
                        background: "rgba(22,22,31,0.8)",
                        color: "#F5F5F7",
                      }
                }
              >
                {tier.highlight && <Star className="h-4 w-4" />}
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center text-sm text-[#71717A]"
        >
          * 所有服務皆為一對一私密諮詢，內容絕對保密
        </motion.p>
      </div>
    </section>
  );
}
