import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { Badge, Button } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";
import { blogPosts, categoryColors } from "@/data/blog";
import { Clock, User, ArrowLeft, Share2 } from "lucide-react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: [post.category, "AI blog", "Pragyan AI", "enterprise AI"],
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Blog", url: `${SITE_CONFIG.url}/blog` },
          { name: post.title, url: `${SITE_CONFIG.url}/blog/${post.slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          image: post.image,
          author: { "@type": "Organization", name: post.author },
          publisher: {
            "@type": "Organization",
            name: SITE_CONFIG.name,
            logo: { "@type": "ImageObject", url: `${SITE_CONFIG.url}${SITE_CONFIG.logo}` },
          },
          datePublished: post.date,
          url: `${SITE_CONFIG.url}/blog/${post.slug}`,
        }}
      />

      {/* Hero image */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />

        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-8 pb-12">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-foreground-muted hover:text-cyan transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <Badge className={`mb-4 ${categoryColors[post.category] || ""}`}>
              {post.category}
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 mt-6 text-sm text-foreground-muted">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" /> {post.author}
              </span>
              <span>{post.date}</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none
            [&_h2]:text-2xl [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:text-xl [&_h3]:font-heading [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3
            [&_p]:text-foreground-muted [&_p]:leading-relaxed [&_p]:mb-6
            [&_strong]:text-foreground
            [&_ul]:text-foreground-muted [&_ul]:space-y-2 [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6
            [&_ol]:text-foreground-muted [&_ol]:space-y-2 [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6
            [&_li]:leading-relaxed
            [&_table]:w-full [&_table]:mb-6
            [&_th]:text-left [&_th]:text-foreground [&_th]:p-3 [&_th]:border-b [&_th]:border-white/10
            [&_td]:text-foreground-muted [&_td]:p-3 [&_td]:border-b [&_td]:border-white/5
          ">
            {post.content.split("\n\n").map((block, i) => {
              if (block.startsWith("## ")) {
                return <h2 key={i}>{block.replace("## ", "")}</h2>;
              }
              if (block.startsWith("### ")) {
                return <h3 key={i}>{block.replace("### ", "")}</h3>;
              }
              if (block.startsWith("- ")) {
                return (
                  <ul key={i}>
                    {block.split("\n").map((item, j) => (
                      <li key={j}>{item.replace(/^- \*\*(.+?)\*\*/, "$1 —").replace(/^- /, "")}</li>
                    ))}
                  </ul>
                );
              }
              if (block.startsWith("| ")) {
                const rows = block.split("\n").filter((r) => !r.startsWith("|--"));
                const headers = rows[0]?.split("|").filter(Boolean).map((h) => h.trim());
                const data = rows.slice(1).map((r) => r.split("|").filter(Boolean).map((c) => c.trim()));
                return (
                  <table key={i}>
                    <thead>
                      <tr>{headers?.map((h, j) => <th key={j}>{h}</th>)}</tr>
                    </thead>
                    <tbody>
                      {data.map((row, j) => (
                        <tr key={j}>{row.map((cell, k) => <td key={k}>{cell}</td>)}</tr>
                      ))}
                    </tbody>
                  </table>
                );
              }
              if (block.startsWith("1. ") || block.startsWith("2. ")) {
                return (
                  <ol key={i}>
                    {block.split("\n").map((item, j) => (
                      <li key={j}>{item.replace(/^\d+\.\s*\*\*(.+?)\*\*/, "$1 —").replace(/^\d+\.\s*/, "")}</li>
                    ))}
                  </ol>
                );
              }
              // Bold text handling
              const formatted = block.replace(/\*\*(.+?)\*\*/g, "$1");
              return <p key={i}>{formatted}</p>;
            })}
          </div>

          {/* Share + CTA */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <Share2 className="w-5 h-5 text-foreground-muted" />
                <span className="text-sm text-foreground-muted">Share this article</span>
              </div>
              <Button href="/contact" size="lg">
                Discuss Your AI Project
              </Button>
            </div>
          </div>

          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-xl font-heading font-bold text-foreground mb-6">Related Articles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group glass rounded-2xl overflow-hidden hover:border-cyan/30 transition-colors"
                  >
                    <div className="relative h-40">
                      <Image src={rp.image} alt={rp.title} fill className="object-cover" sizes="50vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h4 className="font-heading font-semibold text-foreground group-hover:text-cyan transition-colors line-clamp-2">
                        {rp.title}
                      </h4>
                      <p className="text-xs text-foreground-muted mt-2">{rp.date} · {rp.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
