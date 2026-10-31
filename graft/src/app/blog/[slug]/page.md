# src/app/blog/[slug]/page.tsx

- BlogData · interface · L9-L20 — interface BlogData
- decodeHtmlEntities · function · L31-L38 — function decodeHtmlEntities(html: string): string
- renderInlineMarkdown · function · L49-L56 — function renderInlineMarkdown(html: string): string
- stripInlineMarkdown · function · L63-L65 — function stripInlineMarkdown(text: string): string
- generateStaticParams · function · L67-L69 — function generateStaticParams()
- generateMetadata · function · L71-L103 — async function generateMetadata({ params, }: { params: Promise<{ slug: string }>; }): Promise<Metadata>
- BlogPostPage · function · L105-L350 — async function BlogPostPage({ params, }: { params: Promise<{ slug: string }>; })
