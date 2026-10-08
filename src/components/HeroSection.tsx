"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

// ─── Sector Fan Carousel ───────────────────────────────────
const allCardQuestions = [
  "佢有冇出軌/偷食嘅跡象？",
  "身邊有冇潛在嘅第三者？",
  "我哋仲有冇機會復合？",
  "下一個桃花幾時會出現？",
  "點樣佈局催旺正財同偏財運？",
  "另一半心裡面仲有冇我？",
  "呢段感情值唔值得繼續？",
  "我幾時可以升職加薪？",
  "邊個方位對我運勢最好？",
  "今年有冇意外桃花出現？",
];

function CardCarousel() {
  const visibleCards = allCardQuestions.slice(0, 5);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const angles = isMobile ? [-10, -5, 0, 5, 10] : [-12, -6, 0, 6, 12];
  const yOffsets = isMobile ? [60, 28, 0, 28, 60] : [110, 50, 0, 50, 110];
  const margin = isMobile ? "-15px" : "-25px";

  return (
    <div className="absolute bottom-0 left-0 right-0 z-[3] translate-y-[15%]">
      <div className="flex items-end justify-center">
        {visibleCards.map((question, idx) => (
          <div
            key={idx}
            className={`relative cursor-pointer ${
              idx === 0 || idx === 4 ? "hidden sm:block" : ""
            }`}
            style={{
              transform: `translateY(${yOffsets[idx]}px) rotate(${angles[idx]}deg)`,
              transformOrigin: "50% 100%",
              marginLeft: idx === 0 ? "0" : margin,
              zIndex: 5 - Math.abs(idx - 2),
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = `translateY(${yOffsets[idx] - 40}px) rotate(0deg) scale(1.05)`;
              (e.currentTarget as HTMLElement).style.zIndex = "50";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = `translateY(${yOffsets[idx]}px) rotate(${angles[idx]}deg)`;
              (e.currentTarget as HTMLElement).style.zIndex = String(5 - Math.abs(idx - 2));
            }}
          >
            {/* Question text */}
            <div
              className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg px-2 py-1 sm:px-3 sm:py-1.5 text-center z-50"
              style={{
                background: "rgba(10,0,26,0.88)",
                border: "1px solid rgba(168,85,247,0.35)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 4px 16px rgba(88,28,135,0.3)",
              }}
            >
              <p
                className="text-[8px] font-medium text-purple-200 sm:text-xs"
                style={{ fontFamily: "'Noto Serif TC', serif" }}
              >
                {question}
              </p>
            </div>

            {/* Card */}
            <div className="relative h-[220px] w-[150px] overflow-hidden rounded-xl shadow-2xl sm:h-[450px] sm:w-[300px] lg:h-[550px] lg:w-[370px] sm:rounded-2xl">
              <div
                className="absolute inset-0 rounded-xl sm:rounded-2xl z-10"
                style={{ border: "1px solid rgba(168,85,247,0.2)" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/tarot-card.webp"
                alt="Tarot"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



// ─── Stats ─────────────────────────────────────────────────
function AnimatedStat({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const startTime = Date.now();
      const duration = 2000;
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * value));
        if (progress >= 1) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }, 2500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="text-center">
      <p className="text-xl font-bold text-gradient-gold sm:text-2xl md:text-3xl">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="mt-1 text-[10px] uppercase tracking-wider text-[#6B6B76] sm:text-[11px]">{label}</p>
    </div>
  );
}

// ─── Main Hero ─────────────────────────────────────────────
export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden" style={{ backgroundColor: "#08080C" }}>
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/background.webp"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Pink nebula glow */}
      <div
        className="pointer-events-none absolute z-[1]"
        style={{
          top: "15%",
          right: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(236,72,153,0.12) 0%, rgba(219,39,119,0.05) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Contact Info Banner - below navbar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute top-14 left-0 right-0 z-20 sm:top-16"
      >
        <div
          className="flex items-center justify-center gap-3 px-4 py-2 text-[10px] sm:gap-6 sm:text-xs md:gap-8"
          style={{
            background: "linear-gradient(90deg, rgba(201,168,76,0.06), rgba(201,168,76,0.12), rgba(201,168,76,0.06))",
            borderBottom: "1px solid rgba(201,168,76,0.1)",
            backdropFilter: "blur(10px)",
          }}
        >
          <a
            href="https://wa.me/85246476921"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:opacity-80"
            style={{ color: "#C9A84C" }}
          >
            <span>📱</span>
            <span className="font-medium">WhatsApp: 4647 6921</span>
          </a>
          <span style={{ color: "rgba(201,168,76,0.3)" }}>|</span>
          <a
            href="https://t.me/ami28283728"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:opacity-80"
            style={{ color: "#C9A84C" }}
          >
            <span>✈️</span>
            <span className="font-medium">Telegram: @ami28283728</span>
          </a>
          <span className="hidden md:inline" style={{ color: "rgba(201,168,76,0.3)" }}>|</span>
          <a
            href="https://instagram.com/tarot_inft661"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 transition-colors hover:opacity-80 md:flex"
            style={{ color: "#C9A84C" }}
          >
            <span>📷</span>
            <span className="font-medium">IG: tarot_inft661</span>
          </a>
        </div>
      </motion.div>



      {/* Card Carousel */}
      <CardCarousel />

      {/* Content (upper half) */}
      <motion.div
        style={{ opacity, y, scale }}
        className="relative z-10 flex h-[60%] flex-col items-center justify-center px-4 pt-20 text-center sm:h-[55%] sm:px-6 sm:pt-10"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <div
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs backdrop-blur-xl sm:gap-2.5 sm:px-6 sm:py-2.5 sm:text-sm"
            style={{
              border: "1px solid rgba(201,168,76,0.3)",
              background: "linear-gradient(135deg, rgba(19,19,32,0.7), rgba(40,20,60,0.5))",
              boxShadow: "0 4px 24px rgba(201,168,76,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <Sparkles className="h-3.5 w-3.5" style={{ color: "#C9A84C" }} />
            <span style={{ color: "#C9A84C", fontFamily: "'Noto Serif TC', serif", letterSpacing: "0.1em" }}>
              奇門遁甲 · 十年精研
            </span>
            <Sparkles className="h-3.5 w-3.5" style={{ color: "#C9A84C" }} />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          style={{ fontFamily: "'Noto Serif TC', serif", letterSpacing: "0.03em" }}
        >
          <span
            className="inline-block"
            style={{
              background: "linear-gradient(135deg, #F6D365 0%, #C9A84C 50%, #F6D365 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 20px rgba(201,168,76,0.3))",
            }}
          >
            精準預測
          </span>
          <span
            className="inline-block ml-3"
            style={{
              color: "#F5F5F7",
              textShadow: "0 0 40px rgba(255,255,255,0.15)",
            }}
          >
            無需八字
          </span>
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-5 h-px w-40 sm:w-56"
          style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)" }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-5 max-w-lg text-sm leading-relaxed sm:text-base md:text-lg"
          style={{
            fontFamily: "'Noto Serif TC', serif",
            color: "#B8B8C4",
            textShadow: "0 1px 2px rgba(0,0,0,0.3)",
          }}
        >
          從不向客人索取出生年月日時，一樣能精準點出問題所在。
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:gap-5"
        >
          <a
            href="https://wa.me/85246476921"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(201,168,76,0.35)]"
            style={{
              background: "linear-gradient(135deg, #C9A84C, #E8C84C, #C9A84C)",
              color: "#1A1A2E",
              boxShadow: "0 4px 20px rgba(201,168,76,0.25)",
            }}
          >
            <WhatsAppIcon className="h-4 w-4" />
            立即 WhatsApp 預約
          </a>
          <a
            href="https://t.me/ami28283728"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(0,136,204,0.35)]"
            style={{
              background: "linear-gradient(135deg, #0088cc, #00aaee, #0088cc)",
              color: "#FFFFFF",
              boxShadow: "0 4px 20px rgba(0,136,204,0.25)",
            }}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            立即 Telegram 預約
          </a>
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-medium transition-all duration-300 hover:scale-105"
            style={{
              border: "1px solid rgba(201,168,76,0.3)",
              background: "rgba(19,19,32,0.5)",
              backdropFilter: "blur(12px)",
              color: "#E8E8ED",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            查看服務方案
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-6 flex items-center gap-3 sm:mt-10 sm:gap-8 md:gap-12"
        >
          <AnimatedStat value={10000} suffix="+" label="服務客戶" />
          <div className="h-8 w-px" style={{ background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)" }} />
          <AnimatedStat value={10} suffix="年+" label="從業經驗" />
          <div className="h-8 w-px" style={{ background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)" }} />
          <AnimatedStat value={7} suffix="天" label="免費跟進" />
        </motion.div>
      </motion.div>

      {/* Scroll hint - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-[48%] left-1/2 z-10 -translate-x-1/2 pointer-events-none hidden sm:block"
      >
        <motion.p
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-[10px] text-purple-300/50 tracking-widest uppercase"
        >
          ← 滑動探索更多牌陣 →
        </motion.p>
      </motion.div>
    </section>
  );
}
