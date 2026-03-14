import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { SectionHeading, Card, Badge } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";
import { Clock, User } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Explore AI insights, engineering deep-dives, case studies, and industry trends from the Pragyan AI team.",
  path: "/blog",
  keywords: ["AI blog", "AI trends", "enterprise AI insights", "AI engineering"],
});

const featuredPost = {
  title: "The Future of Enterprise AI in 2026: Trends, Challenges, and Opportunities",
  excerpt:
    "As AI adoption accelerates across industries, enterprise leaders face new challenges in scaling AI operations while maintaining ethical standards. We explore the key trends shaping the landscape.",
  category: "AI Trends",
  date: "March 10, 2026",
  readTime: "8 min read",
  author: "Pragyan AI Team",
  gradient: "from-cyan/20 to-purple/20",
};

const posts = [
  {
    title: "Building Reliable AI Chatbots with RAG Architecture",
    excerpt: "How retrieval-augmented generation eliminates hallucinations and delivers accurate, contextual responses for enterprise support.",
    category: "Engineering",
    date: "March 5, 2026",
    readTime: "6 min read",
    gradient: "from-purple/20 to-cyan/10",
  },
  {
    title: "How AI Automation Reduced Costs by 60% for a Healthcare Provider",
    excerpt: "A deep dive into how intelligent workflow automation transformed HR operations at a 5,000-employee hospital network.",
    category: "Case Studies",
    date: "February 28, 2026",
    readTime: "5 min read",
    gradient: "from-gold/15 to-purple/15",
  },
  {
    title: "AI in Indian Education: Bridging the Personalization Gap",
    excerpt: "Exploring how AI-powered learning platforms are making personalized education accessible to millions of students.",
    category: "Industry Insights",
    date: "February 20, 2026",
    readTime: "7 min read",
    gradient: "from-cyan/15 to-gold/10",
  },
  {
    title: "A Practical Guide to AI Readiness Assessment",
    excerpt: "Step-by-step framework to evaluate your organization's readiness for AI adoption and identify high-impact opportunities.",
    category: "Tutorials",
    date: "February 15, 2026",
    readTime: "10 min read",
    gradient: "from-purple/15 to-gold/15",
  },
  {
    title: "Ethics in AI: Building Trust Through Transparency",
    excerpt: "Why ethical AI isn't just a moral imperative — it's a competitive advantage. How we build transparency into every solution.",
    category: "AI Trends",
    date: "February 8, 2026",
    readTime: "6 min read",
    gradient: "from-gold/20 to-cyan/15",
  },
  {
    title: "Scaling AI Infrastructure: From Prototype to Production",
    excerpt: "Lessons learned from deploying AI systems that handle millions of requests. Architecture patterns that work at scale.",
    category: "Engineering",
    date: "February 1, 2026",
    readTime: "9 min read",
    gradient: "from-cyan/20 to-purple/15",
  },
];

export default function BlogPage() {
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
          <Card hover="glow" className="p-0 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className={`h-48 md:h-auto bg-gradient-to-br ${featuredPost.gradient} flex items-center justify-center`}>
                <span className="text-4xl font-heading font-bold text-foreground/10">FEATURED</span>
              </div>
              <div className="p-8">
                <Badge className="mb-3">{featuredPost.category}</Badge>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-3">
                  {featuredPost.title}
                </h2>
                <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-foreground-muted">
                  <span className="flex items-center gap-1"><User className="w-3 h-3" />{featuredPost.author}</span>
                  <span>{featuredPost.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featuredPost.readTime}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Post grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.title} hover="lift" className="p-0 overflow-hidden flex flex-col">
                <div className={`h-40 bg-gradient-to-br ${post.gradient}`} />
                <div className="p-6 flex flex-col flex-1">
                  <Badge className="mb-3 w-fit text-xs">{post.category}</Badge>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-foreground-muted line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 mt-4 pt-3 border-t border-white/5 text-xs text-foreground-muted">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <p className="text-center text-foreground-muted text-sm mt-12">
            More articles coming soon. Stay tuned for in-depth AI insights.
          </p>
        </div>
      </section>
    </>
  );
}
