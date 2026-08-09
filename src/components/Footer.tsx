"use client";

import { motion } from "framer-motion";
import { Send, Camera } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const socialLinks = [
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    href: "https://wa.me/85246476921",
  },
  {
    icon: Send,
    label: "Telegram",
    href: "https://t.me/ami28283728",
  },
  {
    icon: Camera,
    label: "Instagram",
    href: "https://instagram.com/thai_4646",
  },
  {
    icon: YoutubeIcon,
    label: "YouTube",
    href: "https://youtube.com/@Tarot_fox",
  },
];

const services = ["愛情占卜", "財運佈局", "生意決策", "賭博策略", "風水佈局"];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #1F1F2E", background: "rgba(8,8,12,0.5)" }}>
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 md:px-12 lg:px-16">
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
            <p className="mt-3 text-sm leading-relaxed text-[#6B6B76]">
              精準預測，無需八字。超過10年從業經驗，
              服務逾500位客戶。一對一私密諮詢，
              內容絕對保密。
            </p>
            {/* Contact */}
            <div className="mt-5 space-y-2 text-sm text-[#A1A1AA]">
              <p>
                WhatsApp:{" "}
                <a href="https://wa.me/85246476921" className="text-[#C9A84C] transition-colors hover:text-[#E8D48B]">
                  4647 6921
                </a>
              </p>
              <p>
                Telegram:{" "}
                <a href="https://t.me/ami28283728" className="text-[#C9A84C] transition-colors hover:text-[#E8D48B]">
                  @ami28283728
                </a>
              </p>
              <p>
                Instagram:{" "}
                <a href="https://instagram.com/thai_4646" className="text-[#C9A84C] transition-colors hover:text-[#E8D48B]">
                  thai_4646
                </a>
                {" / "}
                <a href="https://instagram.com/tarot_inft661" className="text-[#C9A84C] transition-colors hover:text-[#E8D48B]">
                  tarot_inft661
                </a>
              </p>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4
              className="text-sm font-semibold uppercase tracking-wider text-[#F5F5F7]"
              style={{ fontFamily: "'Noto Serif TC', serif" }}
            >
              服務項目
            </h4>
            <ul className="mt-5 space-y-3">
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="#pricing"
                    className="text-sm text-[#6B6B76] transition-colors hover:text-[#C9A84C]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4
              className="text-sm font-semibold uppercase tracking-wider text-[#F5F5F7]"
              style={{ fontFamily: "'Noto Serif TC', serif" }}
            >
              聯繫我們
            </h4>
            <div className="mt-5 flex gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-[#6B6B76] transition-all duration-200 hover:text-[#C9A84C]"
                    style={{ border: "1px solid #1F1F2E", background: "rgba(19,19,32,0.5)" }}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>

            {/* Booking CTA */}
            <a
              href="https://wa.me/85246476921"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6"
            >
              <WhatsAppIcon className="h-4 w-4" />
              立即預約
            </a>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="divider-gold mt-12" />
        <div className="mt-6 text-center">
          <p className="text-xs text-[#6B6B76]">
            © {new Date().getFullYear()} Tarot INFT 奇門遁甲. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
