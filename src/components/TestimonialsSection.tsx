"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, X } from "lucide-react";

// ─── Placeholder testimonial images ─────────────────────────
// Replace these with real screenshots later
const testimonialImages = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/testimonials/feedback-${i + 1}.png`,
  alt: `客戶反饋 ${i + 1}`,
  // Placeholder gradient colors for demo
  placeholderGradient: [
    "from-purple-900/40 to-indigo-900/40",
    "from-indigo-900/40 to-blue-900/40",
    "from-violet-900/40 to-purple-900/40",
    "from-fuchsia-900/40 to-purple-900/40",
    "from-purple-900/40 to-pink-900/40",
    "from-blue-900/40 to-violet-900/40",
    "from-indigo-900/40 to-fuchsia-900/40",
    "from-purple-900/40 to-indigo-900/40",
    "from-violet-900/40 to-blue-900/40",
    "from-fuchsia-900/40 to-indigo-900/40",
    "from-purple-900/40 to-violet-900/40",
    "from-blue-900/40 to-purple-900/40",
  ][i],
}));

// Duplicate for infinite scroll
const duplicatedImages = [...testimonialImages, ...testimonialImages];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const animationRef = useRef<number | null>(null);
  const scrollPosRef = useRef(0);

  // Auto-scroll animation
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollSpeed = 0.8; // pixels per frame

    const animate = () => {
      if (!isPaused && container) {
        scrollPosRef.current += scrollSpeed;

        // Reset when scrolled past half (the duplicated set)
        const halfWidth = container.scrollWidth / 2;
        if (scrollPosRef.current >= halfWidth) {
          scrollPosRef.current = 0;
        }

        container.scrollLeft = scrollPosRef.current;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused]);

  return (
    <section className="relative py-16 sm:py-20" style={{ backgroundColor: "#08080C" }}>
      {/* Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(88,28,135,0.1), transparent 70%)",
        }}
      />

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center px-4"
        >
          <div className="mb-4 flex justify-center">
            <div
              className="inline-flex items-center justify-center rounded-full p-3"
              style={{
                background: "linear-gradient(135deg, rgba(201,168,76,0.1), rgba(88,28,135,0.1))",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <Quote className="h-5 w-5" style={{ color: "#C9A84C" }} />
            </div>
          </div>

          <h2
            className="text-3xl font-bold sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Noto Serif TC', serif", color: "#F5F5F7" }}
          >
            客戶
            <span
              style={{
                background: "linear-gradient(135deg, #F6D365, #C9A84C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              真實反饋
            </span>
          </h2>

          <p
            className="mx-auto mt-3 max-w-md text-sm leading-relaxed sm:text-base"
            style={{ color: "#8B8B96", fontFamily: "'Noto Serif TC', serif" }}
          >
            超過 500 位客戶的真實體驗，用心服務每一位有緣人
          </p>

          {/* Rating */}
          <div
            className="mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2"
            style={{
              background: "rgba(19,19,32,0.6)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" style={{ color: "#C9A84C" }} />
              ))}
            </div>
            <span className="text-sm font-medium" style={{ color: "#C9A84C" }}>5.0</span>
            <span className="text-xs" style={{ color: "#6B6B76" }}>（500+ 好評）</span>
          </div>
        </motion.div>

        {/* Scrolling Slider */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-20 sm:w-32"
            style={{ background: "linear-gradient(to right, #08080C, transparent)" }}
          />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-20 sm:w-32"
            style={{ background: "linear-gradient(to left, #08080C, transparent)" }}
          />

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-3 sm:gap-4 overflow-x-hidden py-4 px-4"
            style={{ scrollBehavior: "auto" }}
          >
            {duplicatedImages.map((image, idx) => (
              <div
                key={idx}
                className="group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.03]"
                style={{
                  width: "clamp(200px, 40vw, 280px)",
                  height: "clamp(270px, 55vw, 380px)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(19,19,32,0.5)",
                }}
                onClick={() => setZoomedImage(image.src)}
              >
                {/* Placeholder content (replace with real images) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${image.placeholderGradient}`} />

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="relative z-10 h-full w-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    // Hide broken image, show placeholder
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />

                {/* Placeholder text for missing images */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-[5]">
                  <div
                    className="rounded-full p-4"
                    style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}
                  >
                    <Quote className="h-6 w-6" style={{ color: "#C9A84C" }} />
                  </div>
                  <p className="text-xs" style={{ color: "#6B6B76" }}>客戶反饋截圖</p>
                </div>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "rgba(0,0,0,0.3)" }}
                >
                  <div
                    className="rounded-full p-3"
                    style={{ background: "rgba(201,168,76,0.9)" }}
                  >
                    <svg className="h-5 w-5 text-[#1A1A2E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Paused indicator */}
        <AnimatePresence>
          {isPaused && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-4 text-center"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs"
                style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.2)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                已暫停 · 點擊圖片放大
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
            onClick={() => setZoomedImage(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 rounded-full p-2 transition-colors hover:bg-white/10"
              style={{ color: "#F5F5F7" }}
              onClick={() => setZoomedImage(null)}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Zoomed image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-2xl"
              style={{
                border: "1px solid rgba(201,168,76,0.2)",
                boxShadow: "0 32px 64px rgba(0,0,0,0.5)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={zoomedImage}
                alt="客戶反饋"
                className="h-auto max-h-[85vh] w-auto object-contain"
              />
              {/* Placeholder for missing image */}
              <div
                className="flex h-[400px] w-[300px] items-center justify-center"
                style={{ background: "rgba(19,19,32,0.9)" }}
              >
                <div className="text-center">
                  <Quote className="mx-auto h-10 w-10" style={{ color: "#C9A84C" }} />
                  <p className="mt-3 text-sm" style={{ color: "#6B6B76" }}>上傳客戶反饋截圖後顯示</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
