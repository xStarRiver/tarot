import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MWXJNK9H');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWXJNK9H"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Tarot INFT 奇門遁甲",
              url: "https://www.tarotinft.net",
              logo: "https://www.tarotinft.net/logo.png",
              description:
                "奇門遁甲預測、風水佈局、開運法物及一對一課程。精準預測，無需八字。",
              sameAs: [
                "https://www.instagram.com/tarot_inft661",
                "https://www.youtube.com/@Tarot_fox",
                "https://t.me/ami28283728",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+852-46476921",
                contactType: "customer service",
                availableLanguage: ["zh-HK", "zh-TW"],
              },
            }),
          }}
        />
        {children}
        <FloatingCTA />
      </body>
    </html>
  );
}

