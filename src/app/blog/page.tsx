import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import blogs from "@/data/blogs.json";
import { encodeSlug } from "@/lib/slugs";

export const metadata: Metadata = {
  title: "玄學博客｜奇門遁甲指南 - Tarot INFT",
  description:
    "奇門遁甲、塔羅、風水、催財催桃花嘅實用指南。無需八字嘅精準預測原理、真實客戶個案、開運佈局教學，全部免費閱讀。",
};

export default function BlogListPage() {
  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{ backgroundColor: "#08080C" }}
    >
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 pt-28 pb-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <p
            className="mb-3 text-xs tracking-[0.3em]"
            style={{ color: "#C9A84C" }}
          >
            玄學指南
          </p>
          <h1
            className="font-serif text-3xl sm:text-4xl lg:text-5xl"
            style={{
              background:
                "linear-gradient(135deg, #E8D48B 0%, #C9A84C 50%, #8B7332 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            奇門遁甲博客
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base" style={{ color: "#A1A1AA" }}>
            感情、財運、生意、風水——用最易明嘅方式，教你睇懂千年秘術。
          </p>
        </div>

        {/* Blog grid */}
        {blogs.length === 0 ? (
          <p className="text-center" style={{ color: "#6B6B76" }}>
            文章即將上線，敬請期待。
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${encodeSlug(blog.slug)}`}
                className="group overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "#131320",
                  border: "1px solid #1F1F2E",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
              >
                <div className="aspect-[1200/630] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={blog.cover}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div
                    className="mb-2 flex items-center gap-2 text-xs"
                    style={{ color: "#6B6B76" }}
                  >
                    <span>{blog.date}</span>
                    <span>·</span>
                    <span>{blog.readMinutes} 分鐘閱讀</span>
                  </div>
                  <h2
                    className="font-serif text-lg leading-snug transition-colors group-hover:text-[#E8D48B]"
                    style={{ color: "#F5F5F7" }}
                  >
                    {blog.title.replace(/【[^】]*】/, "")}
                  </h2>
                  <p
                    className="mt-2 line-clamp-2 text-sm leading-relaxed"
                    style={{ color: "#A1A1AA" }}
                  >
                    {blog.metaDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div
          className="mt-16 rounded-2xl p-8 text-center"
          style={{
            backgroundColor: "rgba(19, 19, 32, 0.7)",
            border: "1px solid rgba(201, 168, 76, 0.3)",
          }}
        >
          <p className="font-serif text-xl" style={{ color: "#F5F5F7" }}>
            睇完文章仲有疑問？
          </p>
          <p className="mt-2 text-sm" style={{ color: "#A1A1AA" }}>
            一對一私密諮詢，唔使八字，即時解答你嘅問題。
          </p>
          <a
            href="https://wa.me/85246476921"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-5"
          >
            WhatsApp 4647 6921 立即預約
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
