import Image from "next/image";
import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { SectionHeading, Card, Badge } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";
import { blogPosts, categoryColors } from "@/data/blog";
import { Clock, User, ArrowRight } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Explore AI insights, engineering deep-dives, case studies, and industry trends from the Pragyan AI team.",
  path: "/blog",
  keywords: ["AI blog", "AI trends", "enterprise AI insights", "AI engineering", "AI India"],
});

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured) || blogPosts[0];
  const rest = blogPosts.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Blog", url: `${SITE_CONFIG.url}/blog` },
        ])}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <SectionHeading
            title="Insights & Intelligence"
            subtitle="AI trends, engineering deep-dives, case studies, and practical guides from our team."
          />
        </div>
      </section>

      {/* Featured post */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href={`/blog/${featured.slug}`}>
            <Card hover="glow" className="p-0 overflow-hidden group cursor-pointer">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto min-h-[280px] overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent md:bg-gradient-to-l" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className={categoryColors[featured.category]}>{featured.category}</Badge>
                    <span className="text-xs text-cyan font-medium uppercase tracking-wider">Featured</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4 leading-tight group-hover:text-cyan transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-foreground-muted text-sm leading-relaxed mb-6 line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-foreground-muted">
                      <span className="flex items-center gap-1"><User className="w-3 h-3" />{featured.author}</span>
                      <span>{featured.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
                    </div>
                    <span className="text-cyan text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Post grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card hover="lift" className="p-0 overflow-hidden flex flex-col group cursor-pointer h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                    <Badge className={`absolute top-4 left-4 text-xs ${categoryColors[post.category] || ""}`}>
                      {post.category}
                    </Badge>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-cyan transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-foreground-muted line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                      <div className="flex items-center gap-3 text-xs text-foreground-muted">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-foreground-muted group-hover:text-cyan transition-colors" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-foreground-muted text-sm mb-4">
              More articles coming soon. Stay tuned for in-depth AI insights.
            </p>
            <p className="text-xs text-foreground-muted/60">
              Want to contribute? Reach out at{" "}
              <a href="mailto:contact@pragyanai.in" className="text-cyan hover:text-cyan-light transition-colors">
                contact@pragyanai.in
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
