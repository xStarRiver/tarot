"use client";

import { motion } from "framer-motion";
import { BookOpen, ShoppingBag, ArrowRight } from "lucide-react";

const courses = [
  {
    title: "奇門遁甲入門班",
    description: "從零開始學習奇門盤的排列與基礎判斷",
    price: "$4,888",
    duration: "8堂課",
  },
  {
    title: "風水佈局實戰班",
    description: "居家/辦公室風水實操，學會自我調整",
    price: "$6,888",
    duration: "6堂課",
  },
  {
    title: "高級擇時策略班",
    description: "深度學習時間選擇法，適用投資與決策",
    price: "$12,888",
    duration: "10堂課",
  },
];

const products = [
  {
    title: "開運桃花香水",
    description: "特製法物，經過開光加持。提升人緣桃花，適合求姻緣或改善人際關係。",
    price: "$888",
    tag: "熱賣",
  },
  {
    title: "財運水晶手鏈",
    description: "嚴選天然黃水晶搭配金曜石，經奇門擇時開光。助旺偏財運及正財運。",
    price: "$1,288",
    tag: "限量",
  },
];

export default function CoursesProducts() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full blur-[120px]"
          style={{ background: "rgba(201,168,76,0.03)" }}
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
          <div className="badge badge-gold mx-auto mb-4">進階服務</div>
          <h2
            className="text-3xl font-bold text-gradient-gold sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Noto Serif TC', serif" }}
          >
            增值課程與法物
          </h2>
          <p className="mt-4 text-base text-[#6B6B76]">
            自我提升，持續受益
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Courses */}
          <div className="lg:col-span-3">
            <div className="mb-5 flex items-center gap-2.5">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{ background: "rgba(201,168,76,0.08)" }}
              >
                <BookOpen className="h-4 w-4" style={{ color: "#C9A84C" }} />
              </div>
              <h3 className="text-lg font-semibold text-[#F5F5F7]" style={{ fontFamily: "'Noto Serif TC', serif" }}>
                課程一覽
              </h3>
            </div>
            <div className="space-y-3">
              {courses.map((course, idx) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="card-glass flex items-center justify-between p-5"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2.5">
                      <h4 className="text-base font-semibold text-[#F5F5F7]" style={{ fontFamily: "'Noto Serif TC', serif" }}>
                        {course.title}
                      </h4>
                      <span className="shrink-0 rounded-md px-2 py-0.5 text-[10px] font-medium text-[#6B6B76]" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid #1F1F2E" }}>
                        {course.duration}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-[#6B6B76]">
                      {course.description}
                    </p>
                  </div>
                  <div className="ml-4 text-right shrink-0">
                    <span className="text-xl font-bold text-gradient-gold">
                      {course.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-5"
            >
              <a
                href="https://wa.me/85254987176"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                查詢課程詳情
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-2.5">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{ background: "rgba(42,157,92,0.08)" }}
              >
                <ShoppingBag className="h-4 w-4" style={{ color: "#2A9D5C" }} />
              </div>
              <h3 className="text-lg font-semibold text-[#F5F5F7]" style={{ fontFamily: "'Noto Serif TC', serif" }}>
                精選法物
              </h3>
            </div>
            <div className="space-y-3">
              {products.map((product, idx) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12 }}
                  className="card-glass overflow-hidden p-5"
                >
                  {/* Tag & Price */}
                  <div className="mb-3 flex items-center justify-between">
                    <span className="badge badge-emerald">
                      {product.tag}
                    </span>
                    <span className="text-xl font-bold text-gradient-gold">
                      {product.price}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-[#F5F5F7]" style={{ fontFamily: "'Noto Serif TC', serif" }}>
                    {product.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B6B76]">
                    {product.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-5"
            >
              <a
                href="https://wa.me/85254987176"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                查詢法物詳情
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
