"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const courses = [
  {
    title: "一對一基礎教學",
    description: "從零開始學習奇門遁甲，掌握基礎排盤與判斷技巧",
    price: "$5,000",
    duration: "6堂課",
    tag: "",
  },
  {
    title: "一對一進階教學",
    description: "深入學習高階技法，實戰案例分析與擇時策略",
    price: "$8,000",
    duration: "6堂課",
    tag: "",
  },
  {
    title: "基礎 + 進階同報優惠",
    description: "一次報讀基礎與進階課程，享套裝優惠價，慳 $2,112",
    price: "$10,888",
    duration: "12堂課",
    tag: "至抵套裝",
  },
];

const products = [
  {
    title: "開運香水",
    description: "特製法物，經過開光加持。提升人緣桃花，適合求姻緣或改善人際關係。",
    price: "$1,500",
    tag: "熱賣",
  },
  {
    title: "開運手鏈",
    description: "嚴選天然水晶搭配金曜石，經奇門擇時開光。助旺偏財運及正財運。",
    price: "$2,000",
    tag: "人氣",
  },
  {
    title: "開運頸鏈",
    description: "精選天然寶石配以銀飾，經開光加持。護身辟邪，提升整體運勢氣場。",
    price: "$2,200",
    tag: "新品",
  },
];

export default function CoursesProducts() {
  return (
    <section className="relative py-20 sm:py-28">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 70% 80%, rgba(88,28,135,0.06), transparent 60%)",
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
            進階服務
          </p>
          <h2
            className="text-2xl font-bold sm:text-3xl md:text-4xl"
            style={{ fontFamily: "'Noto Serif TC', serif", color: "#F5F5F7" }}
          >
            課程與法物
          </h2>
          <p className="mt-3 text-sm text-[#8B8B96] max-w-md">
            自我提升，持續受益。所有法物經奇門擇時開光加持。
          </p>
        </motion.div>

        {/* Courses */}
        <div className="mb-12">
          <h3
            className="text-sm font-medium tracking-wider uppercase mb-5"
            style={{ color: "#8B8B96" }}
          >
            課程
          </h3>
          <div className="space-y-3">
            {courses.map((course, idx) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`group relative flex items-center justify-between rounded-xl p-4 sm:p-5 transition-all duration-300 ${course.tag ? 'ring-1 ring-[rgba(201,168,76,0.3)]' : ''}`}
                style={{
                  background: course.tag ? "rgba(201,168,76,0.04)" : "rgba(14,14,20,0.5)",
                  border: course.tag ? "1px solid rgba(201,168,76,0.2)" : "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h4
                      className="text-sm font-semibold sm:text-base"
                      style={{ fontFamily: "'Noto Serif TC', serif", color: "#F5F5F7" }}
                    >
                      {course.title}
                    </h4>
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-md"
                      style={{ background: "rgba(201,168,76,0.08)", color: "#B8A472" }}
                    >
                      {course.duration}
                    </span>
                    {course.tag && (
                      <span
                        className="text-[10px] font-bold px-2.5 py-0.5 rounded-md"
                        style={{
                          background: "linear-gradient(135deg, #8B7332, #C9A84C, #E8D48B)",
                          color: "#08080C",
                        }}
                      >
                        {course.tag}
                    </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-[#6B6B76]">
                    {course.description}
                  </p>
                </div>
                <div className="ml-4 shrink-0 text-right">
                  <span
                    className="text-base font-bold sm:text-lg"
                    style={{
                      background: "linear-gradient(135deg, #F6D365, #C9A84C)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {course.price}
                  </span>
                </div>

                {/* Hover border */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                  style={{ border: "1px solid rgba(201,168,76,0.12)" }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-4"
          >
            <a
              href="https://wa.me/85254987176"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors hover:opacity-80"
              style={{ color: "#C9A84C" }}
            >
              查詢課程詳情
              <ArrowRight className="h-3 w-3" />
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-12"
          style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)" }}
        />

        {/* Products */}
        <div>
          <h3
            className="text-sm font-medium tracking-wider uppercase mb-5"
            style={{ color: "#8B8B96" }}
          >
            精選法物
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, idx) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative rounded-xl p-5 transition-all duration-300"
                style={{
                  background: "rgba(14,14,20,0.5)",
                  border: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span
                    className="text-[10px] font-medium px-2.5 py-1 rounded-md"
                    style={{ background: "rgba(42,157,92,0.08)", color: "#4ADE80" }}
                  >
                    {product.tag}
                  </span>
                  <span
                    className="text-lg font-bold"
                    style={{
                      background: "linear-gradient(135deg, #F6D365, #C9A84C)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {product.price}
                  </span>
                </div>
                <h4
                  className="text-base font-semibold mb-2"
                  style={{ fontFamily: "'Noto Serif TC', serif", color: "#F5F5F7" }}
                >
                  {product.title}
                </h4>
                <p className="text-xs sm:text-sm leading-relaxed text-[#8B8B96]">
                  {product.description}
                </p>

                {/* Hover border */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                  style={{ border: "1px solid rgba(201,168,76,0.12)" }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-4"
          >
            <a
              href="https://wa.me/85254987176"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors hover:opacity-80"
              style={{ color: "#C9A84C" }}
            >
              查詢法物詳情
              <ArrowRight className="h-3 w-3" />
            </a>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14 text-center"
        >
          <div
            className="rounded-2xl p-8 sm:p-10"
            style={{
              background: "linear-gradient(135deg, rgba(201,168,76,0.04), rgba(14,14,20,0.8))",
              border: "1px solid rgba(201,168,76,0.1)",
            }}
          >
            <p
              className="text-base sm:text-lg font-medium mb-2"
              style={{ fontFamily: "'Noto Serif TC', serif", color: "#F5F5F7" }}
            >
              想了解更多？
            </p>
            <p className="text-sm text-[#8B8B96] mb-5">
              歡迎 WhatsApp 查詢，為你安排最合適的服務
            </p>
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
              立即聯繫
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
