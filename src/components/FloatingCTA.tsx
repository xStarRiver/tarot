"use client";

import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Telegram */}
      <motion.a
        href="https://t.me/tarot_inft"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0088cc] shadow-lg shadow-[#0088cc]/30 transition-shadow hover:shadow-[#0088cc]/50"
        aria-label="Telegram 聯繫"
      >
        <Send className="h-6 w-6 text-white" />
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/85254987176"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="animate-pulse-gold flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-shadow hover:shadow-[#25D366]/50"
        aria-label="WhatsApp 聯繫"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </motion.a>
    </div>
  );
}
