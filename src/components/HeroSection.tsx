"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
    <div className="absolute bottom-0 left-0 right-0 z-[3] translate-y-[32%] sm:translate-y-[15%] [@media(max-width:639px)_and_(max-height:640px)]:translate-y-1/2 lg:bottom-auto lg:top-[558px] [@media(min-width:1024px)_and_(min-height:860px)]:top-[max(647px,calc(50%+171px))] lg:translate-y-0">
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

      {/* Card Carousel */}
      <CardCarousel />

      {/* Content (upper half) */}
      <motion.div
        style={{ opacity, y, scale }}
        className="relative z-10 flex flex-col items-center px-4 pt-[84px] text-center *:shrink-0 sm:px-6 sm:pt-28 lg:pt-[max(96px,calc(50vh-400px))]"
      >
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl"
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

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-3 max-w-xl text-[13px] leading-relaxed sm:mt-4 sm:text-base lg:mt-5 lg:text-lg"
          style={{
            fontFamily: "'Noto Serif TC', serif",
            color: "#C4C4CE",
            textShadow: "0 1px 2px rgba(0,0,0,0.4)",
          }}
        >
          奇門遁甲・紫微斗數・西方塔羅 三重印證
          <br />
          推算復合／桃花吉日，拆解感情困局
        </motion.p>

        {/* Price + booking: stacked on mobile, side by side on large screens */}
        <div className="flex w-full flex-col items-center lg:mt-8 lg:w-auto lg:flex-row lg:items-center lg:gap-8">
          {/* Price card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-4 w-full max-w-sm overflow-hidden rounded-2xl backdrop-blur-xl sm:mt-6 sm:max-w-md lg:mt-0 lg:w-[480px] lg:max-w-none"
            style={{
              border: "1px solid rgba(201,168,76,0.35)",
              background: "linear-gradient(160deg, rgba(19,19,32,0.82), rgba(40,20,60,0.72))",
              boxShadow: "0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            <p
              className="pt-2.5 text-[11px] tracking-[0.15em] sm:pt-3 sm:text-xs"
              style={{ color: "#C9A84C", fontFamily: "'Noto Serif TC', serif" }}
            >
              任問 1 小時・無限提問
            </p>
            <div className="grid grid-cols-2 px-2 pb-2.5 pt-1.5 sm:pb-3">
              <div className="flex flex-col items-center">
                <span className="text-[11px] text-[#A1A1AA] sm:text-xs">線上諮詢</span>
                <p className="mt-1 leading-none">
                  <span className="text-2xl font-bold text-[#F5F5F7] sm:text-3xl lg:text-4xl">$1,388</span>
                  <span className="ml-0.5 text-[11px] text-[#8A8A96]">/小時</span>
                </p>
              </div>
              <div
                className="flex flex-col items-center"
                style={{ borderLeft: "1px solid rgba(201,168,76,0.2)" }}
              >
                <span className="text-[11px] text-[#A1A1AA] sm:text-xs">面對面諮詢</span>
                <p className="mt-1 leading-none">
                  <span className="text-2xl font-bold text-gradient-gold sm:text-3xl lg:text-4xl">$2,388</span>
                  <span className="ml-0.5 text-[11px] text-[#8A8A96]">/小時</span>
                </p>
              </div>
            </div>
            <p
              className="px-3 py-1.5 text-[11px] sm:py-2 sm:text-xs"
              style={{
                background: "rgba(201,168,76,0.1)",
                borderTop: "1px solid rgba(201,168,76,0.15)",
                color: "#E8D48B",
              }}
            >
              🎁 面對面獨家送贈：泰國開運佛牌（招財・事業）
            </p>
          </motion.div>
  
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-5 grid w-full max-w-sm grid-cols-2 gap-2.5 sm:mt-7 sm:flex sm:w-auto sm:max-w-none sm:justify-center sm:gap-4 lg:mt-0 lg:flex-col lg:gap-3"
          >
            <a
              href="https://wa.me/85246476921"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(201,168,76,0.35)] sm:px-8 sm:py-3.5 lg:px-10 lg:py-4 lg:text-base"
              style={{
                background: "linear-gradient(135deg, #C9A84C, #E8C84C, #C9A84C)",
                color: "#1A1A2E",
                boxShadow: "0 4px 20px rgba(201,168,76,0.25)",
              }}
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">立即</span> WhatsApp 預約
            </a>
            <a
              href="https://t.me/ami28283728"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(0,136,204,0.35)] sm:px-8 sm:py-3.5 lg:px-10 lg:py-4 lg:text-base"
              style={{
                background: "linear-gradient(135deg, #0088cc, #00aaee, #0088cc)",
                color: "#FFFFFF",
                boxShadow: "0 4px 20px rgba(0,136,204,0.25)",
              }}
            >
              <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              <span className="hidden sm:inline">立即</span> Telegram 預約
            </a>
          </motion.div>
        </div>

        {/* Plans link */}
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          href="#pricing"
          className="group mt-3 inline-flex items-center gap-1 text-xs text-[#B8B8C4] underline-offset-4 transition-colors hover:text-[#E8D48B] hover:underline sm:mt-4 sm:text-sm"
        >
          查看完整服務方案
          <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.a>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-5 hidden items-center gap-3 sm:mt-6 sm:gap-8 md:gap-12 [@media(max-width:639px)_and_(min-height:820px)]:flex [@media(min-width:1024px)_and_(min-height:860px)]:flex lg:mt-8"
        >
          <AnimatedStat value={10000} suffix="+" label="服務客戶" />
          <div className="h-8 w-px" style={{ background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)" }} />
          <AnimatedStat value={10} suffix="年+" label="從業經驗" />
          <div className="h-8 w-px" style={{ background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)" }} />
          <AnimatedStat value={7} suffix="天" label="免費跟進" />
        </motion.div>
      </motion.div>
    </section>
  );
}
