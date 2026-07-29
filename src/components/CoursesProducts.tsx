"use client";

import { motion } from "framer-motion";
import { BookOpen, ShoppingBag } from "lucide-react";

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
    <section className="relative px-6 py-24 md:py-32">
      <div className="relative mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2
            className="text-3xl font-bold text-gradient-gold sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Noto Serif TC', serif" }}
          >
            增值課程與法物
          </h2>
          <p className="mt-4 text-lg text-[#A1A1AA]" style={{ fontFamily: "'Noto Serif TC', serif" }}>
            自我提升，持續受益
          </p>
        </motion.div>

        {/* Two columns: courses + products */}
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Courses - takes 3 columns */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center gap-2">
              <BookOpen className="h-5 w-5" style={{ color: "#C9A84C" }} />
              <h3 className="text-xl font-semibold text-[#F5F5F7]" style={{ fontFamily: "'Noto Serif TC', serif" }}>
                課程一覽
              </h3>
            </div>
            <div className="space-y-4">
              {courses.map((course, idx) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center justify-between rounded-2xl p-5 transition-all"
                  style={{
                    background: "rgba(22,22,31,0.8)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid #27272A",
                  }}
                >
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-[#F5F5F7]" style={{ fontFamily: "'Noto Serif TC', serif" }}>
                      {course.title}
                    </h4>
                    <p className="mt-1 text-sm text-[#71717A]">
                      {course.description}
                    </p>
                    <span className="mt-2 inline-block text-xs text-[#71717A]">
                      {course.duration}
                    </span>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="text-lg font-bold" style={{ color: "#C9A84C" }}>
                      {course.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Products - takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" style={{ color: "#2A9D5C" }} />
              <h3 className="text-xl font-semibold text-[#F5F5F7]" style={{ fontFamily: "'Noto Serif TC', serif" }}>
                精選法物
              </h3>
            </div>
            <div className="space-y-4">
              {products.map((product, idx) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="overflow-hidden rounded-2xl p-5 transition-all"
                  style={{
                    background: "rgba(22,22,31,0.8)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid #27272A",
                  }}
                >
                  {/* Product tag */}
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{ background: "rgba(42,157,92,0.1)", color: "#2A9D5C" }}
                    >
                      {product.tag}
                    </span>
                    <span className="text-lg font-bold" style={{ color: "#C9A84C" }}>
                      {product.price}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-[#F5F5F7]" style={{ fontFamily: "'Noto Serif TC', serif" }}>
                    {product.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#71717A]">
                    {product.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
