import Image from "next/image";
import { createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { SectionHeading, Card, Badge } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";
import { Clock, User, ArrowRight } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Explore AI insights, engineering deep-dives, case studies, and industry trends from the Pragyan AI team.",
  path: "/blog",
  keywords: ["AI blog", "AI trends", "enterprise AI insights", "AI engineering", "AI India"],
});

const featuredPost = {
  title: "The Future of Enterprise AI in 2026: Trends, Challenges, and Opportunities",
  excerpt:
    "As AI adoption accelerates across industries, enterprise leaders face new challenges in scaling AI operations while maintaining ethical standards. From agentic AI systems that autonomously execute complex workflows to multimodal models that understand text, images, and code simultaneously — we explore the five key trends reshaping how businesses leverage artificial intelligence in 2026 and beyond.",
  category: "AI Trends",
  date: "March 10, 2026",
  readTime: "8 min read",
  author: "Pragyan AI Team",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&q=80",
};

const posts = [
  {
    title: "Building Reliable AI Chatbots with RAG Architecture",
    excerpt:
      "How retrieval-augmented generation eliminates hallucinations and delivers accurate, contextual responses. A technical deep-dive into vector databases, embedding strategies, and prompt engineering for enterprise support chatbots.",
    category: "Engineering",
    date: "March 5, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1531746790095-e5995bb24767?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "How AI Automation Reduced Costs by 60% for a Healthcare Provider",
    excerpt:
      "A deep dive into how intelligent workflow automation transformed HR operations at a 5,000-employee hospital network — from hiring to compliance tracking.",
    category: "Case Studies",
    date: "February 28, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "AI in Indian Education: Bridging the Personalization Gap",
    excerpt:
      "Exploring how AI-powered learning platforms are making personalized education accessible to millions of students across India's diverse educational landscape.",
    category: "Industry Insights",
    date: "February 20, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "A Practical Guide to AI Readiness Assessment for Enterprises",
    excerpt:
      "A step-by-step framework to evaluate your organization's readiness for AI adoption, identify high-impact opportunities, and build a roadmap that delivers ROI.",
    category: "Tutorials",
    date: "February 15, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Ethics in AI: Why Transparency is Your Competitive Advantage",
    excerpt:
      "Ethical AI isn't just a moral imperative — it's a business differentiator. How transparent, explainable AI builds customer trust and drives enterprise adoption.",
    category: "AI Trends",
    date: "February 8, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Scaling AI Infrastructure: From Prototype to Production",
    excerpt:
      "Lessons learned from deploying AI systems that handle millions of requests. Architecture patterns, model serving strategies, and observability practices that work at scale.",
    category: "Engineering",
    date: "February 1, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "How Agentic AI is Transforming Business Process Automation",
    excerpt:
      "Multi-step AI agents that plan, reason, and execute complex workflows autonomously are reshaping how enterprises think about automation. Here's what you need to know.",
    category: "AI Trends",
    date: "January 25, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "RAG vs Fine-Tuning: Choosing the Right Approach for Your AI Project",
    excerpt:
      "When should you use retrieval-augmented generation versus fine-tuning a model? A practical comparison with real-world benchmarks and decision frameworks.",
    category: "Engineering",
    date: "January 18, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "The Rise of AI Consulting in India: Market Outlook 2026",
    excerpt:
      "India's AI consulting market is projected to reach $3.5B by 2027. We analyze the key drivers, opportunities, and what it means for enterprises looking to adopt AI.",
    category: "Industry Insights",
    date: "January 10, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop&q=80",
  },
];

const categoryColors: Record<string, string> = {
  "AI Trends": "bg-cyan/20 text-cyan",
  Engineering: "bg-purple/20 text-purple-light",
  "Case Studies": "bg-gold/20 text-gold",
  "Industry Insights": "bg-cyan/15 text-cyan-light",
  Tutorials: "bg-purple/15 text-purple-light",
};

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
              <div className="relative h-64 md:h-auto min-h-[280px]">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent md:bg-gradient-to-l" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className={categoryColors[featuredPost.category]}>{featuredPost.category}</Badge>
                  <span className="text-xs text-cyan font-medium uppercase tracking-wider">Featured</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-foreground-muted text-sm leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-foreground-muted">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {featuredPost.author}
                    </span>
                    <span>{featuredPost.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <span className="text-cyan text-sm flex items-center gap-1 hover:gap-2 transition-all cursor-pointer">
                    Read <ArrowRight className="w-4 h-4" />
                  </span>
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
              <Card key={post.title} hover="lift" className="p-0 overflow-hidden flex flex-col group cursor-pointer">
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
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-foreground-muted group-hover:text-cyan transition-colors" />
                  </div>
                </div>
              </Card>
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
