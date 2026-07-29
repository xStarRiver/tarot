"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cardQuestions = [
  "佢有冇出軌/偷食嘅跡象？",
  "身邊有冇潛在嘅第三者？",
  "我哋仲有冇機會復合？",
  "下一個桃花幾時會出現？",
  "點樣佈局催旺正財同偏財運？",
];

export default function FloatingCards() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]"
          style={{ background: "rgba(88, 28, 135, 0.08)" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <div className="badge badge-gold mx-auto mb-4">常見問題</div>
          <h2
            className="text-2xl font-bold text-gradient-gold sm:text-3xl md:text-4xl"
            style={{ fontFamily: "'Noto Serif TC', serif" }}
          >
            你是否也想知道？
          </h2>
          <p className="mt-3 text-sm text-[#6B6B76]">
            翻開命運之牌，找到你的答案
          </p>
        </motion.div>

        {/* Floating cards */}
        <div className="flex flex-wrap items-center justify-center gap-5 md:gap-6">
          {cardQuestions.map((question, idx) => (
            <motion.div
              key={idx}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3 + idx * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.3,
              }}
              style={{ transform: `rotate(${(idx - 2) * 3}deg)` }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40, rotateY: 180 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -12,
                  scale: 1.08,
                  rotate: 0,
                  transition: { duration: 0.3 },
                }}
                className="group relative cursor-pointer"
                style={{ perspective: "1000px" }}
              >
                {/* Card */}
                <div className="relative h-[220px] w-[150px] sm:h-[260px] sm:w-[175px] overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 group-hover:shadow-[0_20px_60px_rgba(201,168,76,0.25)]">
                  {/* Card image */}
                  <Image
                    src="/images/tarot-card.png"
                    alt="Tarot card"
                    fill
                    className="object-cover"
                    sizes="175px"
                  />

                  {/* Hover overlay with question */}
                  <div
                    className="absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-all duration-300 group-hover:opacity-100"
                    style={{
                      background: "rgba(8, 8, 12, 0.88)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <p
                      className="text-center text-sm font-medium leading-relaxed text-[#E8D48B]"
                      style={{ fontFamily: "'Noto Serif TC', serif" }}
                    >
                      {question}
                    </p>
                  </div>

                  {/* Gold border on hover */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ border: "2px solid rgba(201, 168, 76, 0.6)" }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center text-sm text-[#6B6B76]"
          style={{ fontFamily: "'Noto Serif TC', serif" }}
        >
          懸停卡牌查看問題 · 預約諮詢獲得答案
        </motion.p>
      </div>
    </section>
  );
}
