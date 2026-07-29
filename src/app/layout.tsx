import type { Metadata } from "next";
import "./globals.css";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "奇門遁甲 | 精準預測，無需八字 - Tarot INFT",
  description:
    "100% 準確率的奇門遁甲預測服務。無需提供出生年月日時，精準點出您的問題。愛情占卜、財運佈局、生意決策、賭博策略，一對一深度諮詢。",
  keywords: [
    "奇門遁甲",
    "占卜",
    "風水",
    "愛情占卜",
    "財運",
    "賭博策略",
    "生意決策",
  ],
  openGraph: {
    title: "奇門遁甲 | 精準預測，無需八字",
    description:
      "100% 準確率的奇門遁甲預測服務。無需提供出生年月日時，精準點出您的問題。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className="antialiased">
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}
