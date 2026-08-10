"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "./WhatsAppIcon";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5.5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5">
      {/* Instagram */}
      <motion.a
        href="https://instagram.com/tarot_inft661"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg transition-shadow"
        style={{
          background: "linear-gradient(135deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
          boxShadow: "0 4px 20px rgba(221, 42, 123, 0.3)",
        }}
        aria-label="Instagram 聯繫"
      >
        <InstagramIcon className="h-5 w-5 text-white" />
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/85246476921"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="animate-pulse-gold flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg transition-shadow"
        style={{
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          boxShadow: "0 4px 20px rgba(37, 211, 102, 0.3)",
        }}
        aria-label="WhatsApp 聯繫"
      >
        <WhatsAppIcon className="h-5 w-5 text-white" />
      </motion.a>
    </div>
  );
}
