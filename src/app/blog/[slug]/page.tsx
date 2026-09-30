import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import blogs from "@/data/blogs.json";
import { decodeSlug, encodeSlug } from "@/lib/slugs";

interface BlogData {
  slug: string;
  title: string;
  metaDescription: string;
  subtitle: string;
  date: string;
  keywords: string[];
  cover: string;
  readMinutes: number;
  faq: { q: string; a: string }[];
  contentHtml: string;
}

const blogsData = blogs as BlogData[];

/**
 * Blog content is injected via dangerouslySetInnerHTML. Content created
 * outside this repo occasionally ships HTML-entity-escaped anchors
 * (e.g. &lt;a href="..."&gt;), which would render as visible "<a ...>"
 * text instead of links. Decode the common entities once at render time.
 * (&amp; is decoded last so &amp;lt;-style text isn't double-decoded.)
 */
function decodeHtmlEntities(html: string): string {
  return html
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
}

export function generateStaticParams() {
  return blogsData.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === decodeSlug(slug));
  if (!blog) return {};
  const url = `https://www.tarotinft.net/blog/${encodeSlug(blog.slug)}`;
  return {
    title: `${blog.title} - Tarot INFT 奇門遁甲`,
    description: blog.metaDescription,
    keywords: blog.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: blog.title,
      description: blog.metaDescription,
      type: "article",
      url,
      siteName: "Tarot INFT 奇門遁甲",
      images: [{ url: `https://www.tarotinft.net${blog.cover}`, width: 1200, height: 630 }],
      publishedTime: blog.date,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.metaDescription,
      images: [`https://www.tarotinft.net${blog.cover}`],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === decodeSlug(slug));
  if (!blog) notFound();

  const postUrl = `https://www.tarotinft.net/blog/${encodeSlug(blog.slug)}`;
  const related = blogsData.filter((b) => b.slug !== blog.slug).slice(0, 3);

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.metaDescription,
    datePublished: blog.date,
    dateModified: blog.date,
    author: { "@type": "Organization", name: "Tarot INFT 奇門遁甲" },
    publisher: { "@type": "Organization", name: "Tarot INFT 奇門遁甲" },
    image: `https://www.tarotinft.net${blog.cover}`,
    mainEntityOfPage: postUrl,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "首頁", item: "https://www.tarotinft.net/" },
      { "@type": "ListItem", position: 2, name: "博客", item: "https://www.tarotinft.net/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title.replace(/【[^】]*】/, ""),
        item: postUrl,
      },
    ],
  };

  const faqJsonLd =
    blog.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: blog.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <main className="min-h-screen overflow-hidden" style={{ backgroundColor: "#08080C" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Navbar />

      <article className="mx-auto max-w-3xl px-4 pt-28 pb-16 sm:px-6">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-xs" style={{ color: "#6B6B76" }}>
          <Link href="/" className="hover:text-[#E8D48B]">首頁</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#E8D48B]">博客</Link>
          <span>/</span>
          <span style={{ color: "#A1A1AA" }}>本文</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <h1
            className="font-serif text-2xl leading-snug sm:text-3xl lg:text-4xl"
            style={{
              background:
                "linear-gradient(135deg, #E8D48B 0%, #C9A84C 50%, #8B7332 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {blog.title.replace(/【[^】]*】/, "")}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs" style={{ color: "#6B6B76" }}>
            <span>{blog.date}</span>
            <span>·</span>
            <span>{blog.readMinutes} 分鐘閱讀</span>
            <span>·</span>
            <span>Tarot INFT 奇門遁甲</span>
          </div>
        </header>

        {/* Cover */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={blog.cover}
          alt={blog.title}
          width={1200}
          height={630}
          className="mb-10 h-auto w-full rounded-2xl"
          style={{ border: "1px solid rgba(201, 168, 76, 0.25)" }}
        />

        {/* Content */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(blog.contentHtml) }}
        />

        {/* FAQ section (visible + FAQPage schema) */}
        {blog.faq.length > 0 && (
          <section className="mt-12">
            <h2
              className="font-serif mb-6 text-xl"
              style={{
                background:
                  "linear-gradient(135deg, #E8D48B 0%, #C9A84C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              常見問題
            </h2>
            <div className="space-y-3">
              {blog.faq.map((f, i) => (
                <details
                  key={i}
                  className="rounded-xl p-4"
                  style={{ backgroundColor: "#131320", border: "1px solid #1F1F2E" }}
                >
                  <summary
                    className="cursor-pointer font-serif text-base"
                    style={{ color: "#E8D48B" }}
                  >
                    {f.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "#A1A1AA" }}>
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* CTA banner */}
        <div
          className="mt-14 rounded-2xl p-8 text-center"
          style={{
            backgroundColor: "rgba(19, 19, 32, 0.7)",
            border: "1px solid rgba(201, 168, 76, 0.3)",
          }}
        >
          <p className="font-serif text-xl" style={{ color: "#F5F5F7" }}>
            想知你嘅問題答案？
          </p>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: "#A1A1AA" }}>
            一對一私密諮詢，唔使八字。網上評測 $1,388 起，7 天內免費跟進一次。
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/85246476921"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              WhatsApp 4647 6921 立即預約
            </a>
            <a
              href="/"
              className="btn-secondary"
            >
              查看服務方案
            </a>
          </div>
          <p className="mt-4 text-[11px]" style={{ color: "#6B6B76" }}>
            本文內容僅供參考，不構成醫療、法律或投資建議。結果因人而異。
          </p>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="mt-14">
            <h2
              className="font-serif mb-6 text-xl"
              style={{
                background:
                  "linear-gradient(135deg, #E8D48B 0%, #C9A84C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              相關文章
            </h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {related.map((b) => (
                <Link
                  key={b.slug}
                  href={`/blog/${encodeSlug(b.slug)}`}
                  className="group overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: "#131320", border: "1px solid #1F1F2E" }}
                >
                  <div className="aspect-[1200/630] w-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={b.cover}
                      alt={b.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="p-3 font-serif text-sm leading-snug group-hover:text-[#E8D48B]" style={{ color: "#F5F5F7" }}>
                    {b.title.replace(/【[^】]*】/, "").slice(0, 40)}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-10 text-center">
          <Link href="/blog" className="text-sm hover:text-[#E8D48B]" style={{ color: "#A1A1AA" }}>
            ← 返回全部文章
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
