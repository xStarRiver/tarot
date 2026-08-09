"use client";

import { motion } from "framer-motion";
import { Check, Star, Sparkles, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "網上評測",
    price: "$1,388",
    unit: "每次",
    description: "遠程深度諮詢，隨時隨地",
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
    unit: "每次",
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
    <section id="pricing" className="relative overflow-hidden py-24 md:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]"
          style={{ background: "rgba(201,168,76,0.04)" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="badge badge-gold mx-auto mb-4">服務方案</div>
          <h2
            className="text-3xl font-bold sm:text-4xl md:text-5xl text-gradient-gold"
            style={{ fontFamily: "'Noto Serif TC', serif" }}
          >
            選擇適合您的方案
          </h2>
          <p className="mt-4 text-base text-[#6B6B76]">
            所有服務皆為一對一私密諮詢，內容絕對保密
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 md:gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative flex flex-col p-5 sm:p-7 md:p-8 ${tier.highlight ? "card-glass-gold" : "card-glass"}`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-3 left-6">
                  <div
                    className="flex items-center gap-1 rounded-lg px-3 py-1 text-xs font-bold"
                    style={{
                      background: "linear-gradient(135deg, #8B7332, #C9A84C, #E8D48B)",
                      color: "#08080C",
                    }}
                  >
                    <Sparkles className="h-3 w-3" />
                    {tier.badge}
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3
                  className="text-lg font-semibold text-[#F5F5F7]"
                  style={{ fontFamily: "'Noto Serif TC', serif" }}
                >
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-[#6B6B76]">{tier.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6 flex items-baseline gap-1">
                <span className={`text-3xl font-bold sm:text-4xl ${tier.highlight ? "text-gradient-gold" : "text-[#F5F5F7]"}`}>
                  {tier.price}
                </span>
                <span className="text-sm text-[#6B6B76]">/ {tier.unit}</span>
              </div>

              {/* Divider */}
              <div className="divider-gold mb-6" />

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-3.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div
                      className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md"
                      style={{
                        background: tier.highlight ? "rgba(201,168,76,0.1)" : "rgba(42,157,92,0.1)",
                      }}
                    >
                      <Check
                        className="h-3 w-3"
                        style={{ color: tier.highlight ? "#C9A84C" : "#2A9D5C" }}
                      />
                    </div>
                    <span className="text-sm text-[#A1A1AA]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://wa.me/85254987176"
                target="_blank"
                rel="noopener noreferrer"
                className={tier.highlight ? "btn-primary w-full" : "btn-secondary w-full"}
              >
                {tier.highlight && <Star className="h-4 w-4" />}
                {tier.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
