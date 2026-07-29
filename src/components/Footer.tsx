"use client";

import { motion } from "framer-motion";
import { Camera, MessageCircle, Send, Youtube } from "lucide-react";

const socialLinks = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/85254987176",
    hoverColor: "#25D366",
  },
  {
    icon: Send,
    label: "Telegram",
    href: "https://t.me/tarot_inft",
    hoverColor: "#0088cc",
  },
  {
    icon: Camera,
    label: "Instagram",
    href: "https://instagram.com/thai_4646",
    hoverColor: "#E4405F",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://youtube.com/@Tarot_fox",
    hoverColor: "#FF0000",
  },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #27272A", background: "rgba(17,17,24,0.3)" }}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-2xl font-bold text-gradient-gold"
              style={{ fontFamily: "'Noto Serif TC', serif" }}
            >
              奇門遁甲
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#71717A]">
              精準預測，無需八字。超過10年從業經驗，
              服務逾500位客戶。一對一私密諮詢，
              內容絕對保密。
            </p>
            {/* Contact info */}
            <div className="mt-4 space-y-1.5 text-sm text-[#A1A1AA]">
              <p>WhatsApp: <a href="https://wa.me/85254987176" className="text-[#C9A84C] hover:underline">5498 7176</a></p>
              <p>Telegram: <a href="https://t.me/tarot_inft" className="text-[#C9A84C] hover:underline">@tarot_inft</a></p>
              <p>Instagram: <a href="https://instagram.com/thai_4646" className="text-[#C9A84C] hover:underline">thai_4646</a> / <a href="https://instagram.com/tarot_inft661" className="text-[#C9A84C] hover:underline">tarot_inft661</a></p>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F5F5F7]" style={{ fontFamily: "'Noto Serif TC', serif" }}>
              服務項目
            </h4>
            <ul className="mt-4 space-y-2.5">
              {["愛情占卜", "財運佈局", "生意決策", "賭博策略", "風水佈局"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#pricing"
                      className="text-sm text-[#71717A] transition-colors hover:text-[#C9A84C]"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F5F5F7]" style={{ fontFamily: "'Noto Serif TC', serif" }}>
              聯繫我們
            </h4>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-[#A1A1AA] transition-all duration-200"
                    style={{ border: "1px solid #27272A", background: "rgba(22,22,31,0.8)" }}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>

            {/* Booking CTA */}
            <a
              href="https://wa.me/85254987176"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all"
              style={{ border: "1px solid #C9A84C", background: "rgba(201,168,76,0.1)", color: "#C9A84C" }}
            >
              <MessageCircle className="h-4 w-4" />
              立即預約
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 text-center" style={{ borderTop: "1px solid #27272A" }}>
          <p className="text-xs text-[#71717A]">
            © {new Date().getFullYear()} Tarot INFT 奇門遁甲. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
