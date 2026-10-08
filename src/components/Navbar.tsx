"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Send, Camera } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(8, 8, 12, 0.85)"
          : "rgba(8, 8, 12, 0.3)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(201, 168, 76, 0.12)"
          : "1px solid transparent",
        boxShadow: scrolled
          ? "0 4px 30px rgba(0, 0, 0, 0.3)"
          : "none",
      }}
    >
      <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-3 sm:h-16 sm:px-6 lg:px-8">
        {/* Logo + Brand */}
        <a href="#" className="flex items-center gap-3 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.webp"
            alt="Tarot INFT Logo"
            className="h-8 w-auto max-w-[60px] object-contain transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:max-w-[80px]"
            style={{
              filter: "drop-shadow(0 0 8px rgba(100, 140, 255, 0.3))",
            }}
          />
          <div className="flex flex-col">
            <span
              className="text-sm font-bold leading-tight sm:text-base"
              style={{
                fontFamily: "'Noto Serif TC', serif",
                background:
                  "linear-gradient(135deg, #F6D365 0%, #C9A84C 50%, #F6D365 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Tarot INFT
            </span>
            <span
              className="hidden text-[10px] tracking-widest sm:block"
              style={{ color: "#6B6B76" }}
            >
              奇門遁甲
            </span>
          </div>
        </a>

        {/* Contact Info */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Blog link */}
          <a
            href="/blog"
            className="hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:scale-105 sm:flex sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
            style={{
              background: "rgba(201, 168, 76, 0.08)",
              border: "1px solid rgba(201, 168, 76, 0.25)",
              color: "#E8D48B",
            }}
          >
            博客
          </a>

          {/* WhatsApp - always visible */}
          <a
            href="https://wa.me/85246476921"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:scale-105 sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
            style={{
              background: "rgba(37, 211, 102, 0.1)",
              border: "1px solid rgba(37, 211, 102, 0.25)",
              color: "#25D366",
            }}
          >
            <WhatsAppIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="hidden min-[400px]:inline">4647 6921</span>
            <span className="min-[400px]:hidden">
              <Phone className="h-3 w-3" />
            </span>
          </a>

          {/* Telegram - visible on sm+ */}
          <a
            href="https://t.me/ami28283728"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:scale-105 sm:flex sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
            style={{
              background: "rgba(0, 136, 204, 0.1)",
              border: "1px solid rgba(0, 136, 204, 0.25)",
              color: "#0088cc",
            }}
          >
            <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            @ami28283728
          </a>

          {/* Instagram - visible on md+ */}
          <a
            href="https://instagram.com/tarot_inft661"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:scale-105 md:flex md:gap-2 md:px-4 md:py-2 md:text-sm"
            style={{
              background: "rgba(225, 48, 108, 0.1)",
              border: "1px solid rgba(225, 48, 108, 0.25)",
              color: "#E1306C",
            }}
          >
            <Camera className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            tarot_inft661
          </a>

          {/* Mobile icon buttons for Telegram and IG */}
          <a
            href="https://t.me/ami28283728"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 sm:hidden"
            style={{
              background: "rgba(0, 136, 204, 0.12)",
              border: "1px solid rgba(0, 136, 204, 0.2)",
              color: "#0088cc",
            }}
            aria-label="Telegram"
          >
            <Send className="h-3.5 w-3.5" />
          </a>
          <a
            href="https://instagram.com/tarot_inft661"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 sm:hidden"
            style={{
              background: "rgba(225, 48, 108, 0.12)",
              border: "1px solid rgba(225, 48, 108, 0.2)",
              color: "#E1306C",
            }}
            aria-label="Instagram"
          >
            <Camera className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
