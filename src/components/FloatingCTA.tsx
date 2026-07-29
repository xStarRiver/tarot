"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5">
      {/* Telegram */}
      <motion.a
        href="https://t.me/tarot_inft"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg transition-shadow"
        style={{
          background: "linear-gradient(135deg, #0088cc, #00aaee)",
          boxShadow: "0 4px 20px rgba(0, 136, 204, 0.3)",
        }}
        aria-label="Telegram 聯繫"
      >
        <Send className="h-5 w-5 text-white" />
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/85254987176"
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
