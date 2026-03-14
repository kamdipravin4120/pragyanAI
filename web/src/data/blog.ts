export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  featured?: boolean;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "future-of-enterprise-ai-2026",
    title: "The Future of Enterprise AI in 2026: Trends, Challenges, and Opportunities",
    excerpt: "As AI adoption accelerates across industries, enterprise leaders face new challenges in scaling AI operations while maintaining ethical standards.",
    category: "AI Trends",
    date: "March 10, 2026",
    readTime: "8 min read",
    author: "Pragyan AI Team",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&q=80",
    featured: true,
    content: `The enterprise AI landscape in 2026 is defined by a fundamental shift: AI is no longer a tool businesses experiment with — it's infrastructure they depend on. From autonomous agents managing complex workflows to multimodal models that reason across text, images, and structured data, the technology has matured dramatically.

## 1. Agentic AI Goes Mainstream

The biggest trend reshaping enterprise AI is the rise of agentic systems. Unlike traditional chatbots that respond to queries, AI agents can plan multi-step tasks, use external tools, and execute complex workflows autonomously. Companies are deploying agents for everything from customer onboarding to supply chain optimization.

At Pragyan AI, we've seen a 3x increase in demand for agent-based solutions over the past year. The key differentiator? Agents that can reason about when to escalate to humans versus when to act independently.

## 2. RAG Architecture Becomes the Standard

Retrieval-Augmented Generation has moved from experimental to essential. Every enterprise deploying AI now uses some form of RAG to ground model responses in their proprietary data. The architecture has evolved significantly — hybrid search combining semantic and keyword retrieval, multi-hop reasoning across document collections, and real-time knowledge updates.

The result? AI systems that are accurate, current, and trustworthy — essential requirements for enterprise adoption.

## 3. AI Governance and Ethics Take Center Stage

With AI making increasingly consequential decisions, governance frameworks are no longer optional. Enterprises are investing in AI observability platforms, bias detection systems, and explainability tools. Regulatory requirements in India and globally are pushing organizations to demonstrate responsible AI practices.

## 4. Multimodal AI Transforms Industries

Models that can process text, images, audio, and video simultaneously are opening new use cases. Document understanding systems that can parse complex layouts, visual inspection tools for manufacturing, and meeting assistants that understand both speech and screen content.

## 5. Edge AI and Hybrid Deployment

Not everything can run in the cloud. Industries like healthcare, manufacturing, and defense require AI that operates at the edge — with low latency, offline capability, and data sovereignty. Hybrid architectures that combine cloud intelligence with edge inference are becoming the standard deployment pattern.

## What This Means for Your Business

The window for AI adoption is closing. Organizations that have built AI capabilities are pulling ahead, while those still evaluating are falling behind. The key is to start with high-impact, low-risk use cases and build organizational capability progressively.

At Pragyan AI, we help enterprises navigate this landscape with practical, ethical AI solutions that deliver measurable ROI from day one. Whether you're starting your AI journey or scaling existing capabilities, the time to act is now.`,
  },
  {
    slug: "building-reliable-ai-chatbots-rag",
    title: "Building Reliable AI Chatbots with RAG Architecture",
    excerpt: "How retrieval-augmented generation eliminates hallucinations and delivers accurate, contextual responses for enterprise support.",
    category: "Engineering",
    date: "March 5, 2026",
    readTime: "6 min read",
    author: "Pragyan AI Team",
    image: "https://images.unsplash.com/photo-1531746790095-e5027cee5413?w=600&h=400&fit=crop&q=80",
    content: `Enterprise chatbots have a credibility problem. Traditional LLM-powered bots hallucinate, give outdated information, and can't access your company's proprietary knowledge. Retrieval-Augmented Generation (RAG) solves all three problems.

## What is RAG?

RAG combines the reasoning power of large language models with the accuracy of information retrieval. Instead of relying solely on what the model learned during training, RAG fetches relevant documents from your knowledge base and uses them to generate accurate, grounded responses.

## The Architecture

A production RAG system has five core components:

**1. Document Ingestion Pipeline**
Your documents — PDFs, wikis, support tickets, product docs — are chunked into manageable segments, typically 500-1000 tokens each. Overlapping chunks ensure context isn't lost at boundaries.

**2. Embedding Generation**
Each chunk is converted into a dense vector representation using an embedding model. These vectors capture the semantic meaning of the text, enabling similarity-based retrieval.

**3. Vector Database**
Embeddings are stored in a vector database (Pinecone, Weaviate, or Milvus) that supports fast similarity search across millions of documents.

**4. Retrieval & Ranking**
When a user asks a question, the query is embedded and the most relevant chunks are retrieved. A re-ranking step using a cross-encoder model improves precision.

**5. LLM Generation**
The retrieved context is injected into the LLM prompt along with the user's question. The model generates a response grounded in your actual data.

## Key Lessons from Production

After deploying RAG chatbots for multiple enterprises, here are our top learnings:

- **Chunk size matters more than model size.** Getting chunking right is 80% of the battle.
- **Hybrid search wins.** Combine semantic search with BM25 keyword search for best results.
- **Always show sources.** Users trust responses more when they can verify the source document.
- **Monitor retrieval quality.** Track whether retrieved chunks are actually relevant — poor retrieval means poor answers regardless of the LLM.

## Results

Our RAG-powered chatbots typically achieve 90%+ accuracy on domain-specific questions, compared to 40-60% for vanilla LLM chatbots. Response times average under 2 seconds, and customer satisfaction scores improve by 30-40%.

If you're building an AI chatbot for your enterprise, RAG isn't optional — it's the foundation of reliability.`,
  },
  {
    slug: "ai-automation-healthcare-cost-reduction",
    title: "How AI Automation Reduced Costs by 60% for a Healthcare Provider",
    excerpt: "A deep dive into how intelligent workflow automation transformed HR operations at a 5,000-employee hospital network.",
    category: "Case Studies",
    date: "February 28, 2026",
    readTime: "5 min read",
    author: "Pragyan AI Team",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&q=80",
    content: `When a major hospital network with over 5,000 employees approached Pragyan AI, their HR department was drowning. Resume screening took weeks, onboarding was a paperwork nightmare, and compliance tracking was manual and error-prone.

## The Challenge

The hospital network faced three critical problems:

1. **Slow Hiring:** Average time-to-hire was 45 days, causing staffing shortages in critical departments.
2. **Compliance Gaps:** Manual tracking of certifications, training, and regulatory requirements led to audit findings.
3. **High HR Costs:** The HR team spent 70% of their time on repetitive administrative tasks.

## Our Solution

We deployed a three-pronged AI automation system:

**Intelligent Resume Screening**
An AI system that analyzes resumes against job requirements, scores candidates, and shortlists the top matches. It considers not just keyword matching but contextual relevance — understanding that "patient care experience" is relevant to a nursing role even without exact keyword matches.

**Automated Onboarding Workflows**
A document processing AI that extracts information from ID documents, certifications, and forms. New hires complete digital onboarding in hours instead of days, with automatic verification of credentials.

**Compliance Monitoring Dashboard**
An AI-powered system that tracks certification expirations, mandatory training completions, and regulatory requirements across all employees. It proactively alerts managers 60 days before any compliance gap.

## The Results

After six months of deployment:

- **Hiring time reduced from 45 to 18 days** (60% reduction)
- **Compliance accuracy improved to 99.5%** (from 87%)
- **HR operational costs reduced by 60%**
- **Employee satisfaction with onboarding increased by 45%**

The ROI was realized within the first quarter, and the system now processes over 2,000 applications and manages compliance for 5,000+ employees with minimal human intervention.`,
  },
  {
    slug: "ai-indian-education-personalization",
    title: "AI in Indian Education: Bridging the Personalization Gap",
    excerpt: "Exploring how AI-powered learning platforms are making personalized education accessible to millions of students.",
    category: "Industry Insights",
    date: "February 20, 2026",
    readTime: "7 min read",
    author: "Pragyan AI Team",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop&q=80",
    content: `India's education system serves over 250 million students across 1.5 million schools, with vast disparities in quality, access, and outcomes. The teacher-to-student ratio averages 1:30 in urban areas and can exceed 1:60 in rural regions. Personalized attention? Nearly impossible at scale.

AI is changing that equation.

## The Personalization Problem

Every student learns differently. Some are visual learners, others prefer reading. Some grasp concepts quickly, others need repeated practice. Traditional classrooms can't adapt to each student's pace, style, and gaps.

The result: students who fall behind stay behind, and those who excel are held back by the average pace.

## How AI Solves It

Modern AI-powered learning platforms can:

**Adaptive Learning Paths**
AI analyzes each student's performance patterns, identifies knowledge gaps, and dynamically adjusts the curriculum. A student struggling with fractions gets additional practice problems with scaffolded difficulty, while one who's mastered the concept moves to the next topic.

**Intelligent Tutoring**
AI tutors can answer questions, explain concepts in multiple ways, and provide instant feedback — 24/7, in any language. They don't replace teachers; they extend the teacher's reach to every student simultaneously.

**Automated Assessment**
AI generates personalized quizzes that test specific knowledge gaps, provides detailed feedback on answers, and tracks learning progress over time. Teachers get dashboards showing which students need attention and which concepts need re-teaching.

## Impact in India

Several Indian EdTech platforms are already seeing remarkable results:

- **40% improvement in learning outcomes** for students using AI-adapted content
- **65% increase in engagement** compared to traditional online courses
- **3x more practice problems completed** when difficulty is dynamically adjusted
- **70% reduction in teacher workload** for routine assessment and grading

## The Road Ahead

The potential is enormous. AI can democratize quality education, making world-class personalized learning accessible to every student in India — from metro cities to remote villages. The technology is ready. The challenge now is deployment at scale and ensuring equitable access.

At Pragyan AI, we're building education AI solutions that work in the Indian context — multilingual, mobile-first, and designed for the infrastructure realities of emerging markets.`,
  },
  {
    slug: "ai-readiness-assessment-guide",
    title: "A Practical Guide to AI Readiness Assessment for Enterprises",
    excerpt: "A step-by-step framework to evaluate your organization's readiness for AI adoption and identify high-impact opportunities.",
    category: "Tutorials",
    date: "February 15, 2026",
    readTime: "10 min read",
    author: "Pragyan AI Team",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
    content: `Before investing in AI, every organization should answer one question: "Are we ready?" AI readiness isn't just about technology — it encompasses data maturity, organizational culture, talent, and strategic alignment.

Here's our proven framework for assessing AI readiness.

## The 5-Pillar AI Readiness Framework

### Pillar 1: Data Readiness

AI runs on data. Assess your organization across these dimensions:

- **Data Availability:** Do you have the data needed for your target use cases?
- **Data Quality:** Is your data accurate, complete, and up-to-date?
- **Data Infrastructure:** Can you access, process, and serve data at the scale AI requires?
- **Data Governance:** Do you have policies for data privacy, security, and ethical use?

Score each dimension 1-5. A total score below 12 means you need to invest in data foundations before AI.

### Pillar 2: Technology Infrastructure

- **Cloud/Compute:** Do you have the infrastructure to train and serve AI models?
- **Integration Capability:** Can you connect AI systems to your existing tools and workflows?
- **API Architecture:** Do your systems expose APIs that AI can interact with?

### Pillar 3: Organizational Culture

- **Leadership Buy-in:** Does leadership understand and champion AI?
- **Change Readiness:** Is the organization open to AI-driven process changes?
- **Experimentation Culture:** Can teams pilot AI without excessive bureaucracy?

### Pillar 4: Talent & Skills

- **Technical Talent:** Do you have data scientists, ML engineers, or can you hire/partner?
- **Domain Expertise:** Can your domain experts work with AI teams to define requirements?
- **AI Literacy:** Does your workforce understand AI's capabilities and limitations?

### Pillar 5: Strategic Alignment

- **Clear Use Cases:** Have you identified specific problems AI should solve?
- **ROI Framework:** Can you measure the business impact of AI investments?
- **Roadmap:** Do you have a phased plan for AI adoption?

## Identifying High-Impact Use Cases

Not all AI projects are created equal. Use this prioritization matrix:

**High Impact + Low Complexity:** Start here. These are your quick wins — chatbots for FAQ, document classification, report automation.

**High Impact + High Complexity:** Plan for these. They deliver the most value but need more time — predictive analytics, autonomous agents, custom models.

**Low Impact:** Skip or defer. Don't waste resources on AI projects that won't move the needle.

## Next Steps

If your readiness score is above 15/25, you're ready to start. If it's below, focus on the lowest-scoring pillars first.

At Pragyan AI, we offer complimentary AI readiness assessments for enterprises. We help you identify where you stand, where the opportunities are, and how to get started with confidence.`,
  },
  {
    slug: "ethics-in-ai-transparency-competitive-advantage",
    title: "Ethics in AI: Why Transparency is Your Competitive Advantage",
    excerpt: "Ethical AI isn't just a moral imperative — it's a business differentiator. How transparent, explainable AI builds trust.",
    category: "AI Trends",
    date: "February 8, 2026",
    readTime: "6 min read",
    author: "Pragyan AI Team",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop&q=80",
    content: `In a market where every company claims to have AI, ethical AI is becoming the ultimate differentiator. Customers, employees, and regulators are all asking the same question: "Can we trust your AI?"

## The Trust Deficit

A recent survey found that 67% of enterprise buyers consider AI ethics when choosing vendors. Yet only 23% of AI companies can demonstrate concrete ethical AI practices. This gap is a massive opportunity.

## Three Pillars of Ethical AI

### 1. Transparency

Users should know when they're interacting with AI, what data is being used, and how decisions are made. This doesn't mean exposing model weights — it means providing clear explanations in human language.

At Pragyan AI, every AI system we build includes an explainability layer. When our chatbot provides an answer, it cites the source documents. When our analytics AI makes a prediction, it shows the key factors that influenced the result.

### 2. Fairness

AI systems can perpetuate and amplify biases present in training data. We test every model for demographic bias, regularly audit outputs, and implement guardrails that prevent discriminatory outcomes.

### 3. Privacy

Enterprise AI systems often process sensitive data. We implement data minimization (use only what's needed), encryption at rest and in transit, and give organizations full control over their data. Your data is never used to train models for other clients.

## The Business Case for Ethical AI

Companies that invest in ethical AI see concrete benefits:

- **Higher adoption rates:** Employees and customers trust and use ethical AI systems more
- **Fewer incidents:** Proactive bias testing prevents costly PR disasters
- **Regulatory readiness:** When regulations arrive (and they will), ethical companies are already compliant
- **Premium positioning:** Ethical AI commands premium pricing in B2B markets

## Our Commitment

At Pragyan AI, ethics isn't a feature — it's a foundation. Every solution we build starts with responsible AI principles. We believe that the most intelligent AI is also the most ethical AI.`,
  },
  {
    slug: "scaling-ai-infrastructure-prototype-to-production",
    title: "Scaling AI Infrastructure: From Prototype to Production",
    excerpt: "Lessons learned from deploying AI systems that handle millions of requests. Architecture patterns that work at scale.",
    category: "Engineering",
    date: "February 1, 2026",
    readTime: "9 min read",
    author: "Pragyan AI Team",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&q=80",
    content: `The gap between an AI proof-of-concept and a production system is enormous. A Jupyter notebook that classifies sentiment is not the same as a system that processes 10,000 customer messages per minute with 99.9% uptime.

Here are the architecture patterns and lessons we've learned from deploying AI at scale.

## Pattern 1: Model Serving Architecture

**Don't serve models from your application server.** Use a dedicated model serving infrastructure:

- Separate model inference from application logic
- Use model servers like TorchServe, Triton, or vLLM
- Implement request batching to maximize GPU utilization
- Auto-scale based on queue depth, not CPU

## Pattern 2: Caching and Optimization

AI inference is expensive. Reduce costs with intelligent caching:

- Cache frequent queries and their responses
- Use semantic caching — if two queries mean the same thing, serve the cached response
- Implement tiered models: use a small, fast model for simple queries and route complex ones to larger models

## Pattern 3: Observability

You can't improve what you can't measure:

- Track latency percentiles (p50, p95, p99), not just averages
- Monitor model quality metrics alongside system metrics
- Log inputs and outputs for debugging and quality analysis
- Set up alerts for quality degradation, not just system failures

## Pattern 4: Graceful Degradation

AI systems will fail. Plan for it:

- Implement fallbacks — if the AI model is unavailable, route to a simpler model or rule-based system
- Set timeouts aggressively — users won't wait 30 seconds for a response
- Use circuit breakers to prevent cascade failures

## Pattern 5: Data Pipeline Reliability

Your AI is only as good as its data pipeline:

- Implement data validation at every stage
- Monitor for data drift — changes in input distributions that degrade model performance
- Version your training data alongside your models
- Automate retraining pipelines with quality gates

## The Bottom Line

Production AI is 20% machine learning and 80% engineering. The companies that win are those that treat AI infrastructure with the same rigor as their core application infrastructure.`,
  },
  {
    slug: "agentic-ai-business-process-automation",
    title: "How Agentic AI is Transforming Business Process Automation",
    excerpt: "Multi-step AI agents that plan, reason, and execute complex workflows autonomously are reshaping enterprise automation.",
    category: "AI Trends",
    date: "January 25, 2026",
    readTime: "7 min read",
    author: "Pragyan AI Team",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop&q=80",
    content: `Traditional automation follows rigid, pre-programmed rules. If step A, then step B. If error, stop. Agentic AI is fundamentally different — these systems can reason about goals, plan multi-step strategies, adapt to unexpected situations, and use external tools autonomously.

## What Makes an Agent "Agentic"?

An AI agent has four core capabilities:

1. **Planning:** Given a goal, the agent breaks it down into steps
2. **Reasoning:** The agent evaluates options and makes decisions
3. **Tool Use:** The agent can call APIs, query databases, send emails, and interact with external systems
4. **Memory:** The agent maintains context across interactions and learns from past actions

## Real-World Applications

**Customer Onboarding Agent**
Instead of a linear form, an AI agent guides new customers through onboarding conversationally. It collects information, verifies documents, creates accounts, sets up integrations, and handles exceptions — all without human intervention.

**Data Analysis Agent**
A business analyst describes what they want to understand. The agent queries multiple databases, performs statistical analysis, creates visualizations, identifies insights, and generates a report — a task that would take a human analyst hours.

**IT Support Agent**
An employee reports a laptop issue. The agent diagnoses the problem, tries remote fixes, orders a replacement if needed, and schedules a technician — coordinating across multiple systems (ticketing, inventory, scheduling).

## The Architecture

A production-grade AI agent system consists of:

- **Planner:** An LLM that decomposes goals into executable steps
- **Memory System:** Short-term (conversation) and long-term (knowledge base) memory
- **Tool Registry:** APIs and functions the agent can call
- **Execution Engine:** Orchestrates tool calls and manages state
- **Guardrails:** Safety checks that prevent harmful or unauthorized actions

## Implementation Considerations

- **Start narrow:** Don't try to build a general-purpose agent. Focus on one well-defined workflow
- **Human-in-the-loop:** Keep humans in the loop for high-stakes decisions
- **Monitor relentlessly:** Agent behavior can be unpredictable — extensive logging and monitoring are essential
- **Iterate rapidly:** Agent performance improves dramatically with prompt tuning and tool refinement

The future of enterprise automation is agentic. The question isn't whether to adopt it, but how quickly you can start.`,
  },
  {
    slug: "rag-vs-fine-tuning-choosing-right-approach",
    title: "RAG vs Fine-Tuning: Choosing the Right Approach for Your AI Project",
    excerpt: "When should you use retrieval-augmented generation versus fine-tuning? A practical comparison with decision frameworks.",
    category: "Engineering",
    date: "January 18, 2026",
    readTime: "8 min read",
    author: "Pragyan AI Team",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&q=80",
    content: `One of the most common questions we get from enterprises building AI applications: "Should we use RAG or fine-tune a model?" The answer depends on your use case, data, and constraints.

## RAG: When to Use It

RAG is the right choice when:

- **Your knowledge changes frequently.** Product catalogs, documentation, and policies update regularly. RAG can incorporate new information immediately without retraining.
- **You need source attribution.** RAG naturally provides citations — the model's response can reference specific documents.
- **You have limited training data.** RAG works well with even small knowledge bases.
- **You need to stay current.** RAG retrieves from a live knowledge base, so answers reflect the latest information.

## Fine-Tuning: When to Use It

Fine-tuning is better when:

- **You need a specific output format or style.** If your AI needs to write in a particular tone, follow a specific template, or generate structured outputs consistently.
- **You're teaching domain-specific reasoning.** Medical diagnosis, legal analysis, or financial modeling require the model to internalize domain patterns.
- **Latency is critical.** Fine-tuned models don't need the retrieval step, making them faster.
- **Your knowledge is stable.** If the information doesn't change often, fine-tuning encodes it directly into the model.

## The Hybrid Approach

In practice, the best systems combine both:

1. **Fine-tune** for style, format, and domain reasoning
2. **Use RAG** for factual grounding and current information

This gives you the best of both worlds: a model that communicates in your brand voice and follows your output formats, while staying grounded in accurate, up-to-date information.

## Decision Framework

Ask these questions:

| Question | RAG | Fine-Tune |
|----------|-----|-----------|
| Does the data change often? | Yes | No |
| Do you need citations? | Yes | No |
| Is latency critical? | No | Yes |
| Do you need custom style? | No | Yes |
| Is the dataset small? | Yes | No |

If you answered "Yes" to mostly RAG questions, start with RAG. If mostly fine-tuning, invest in training. If mixed, consider the hybrid approach.

At Pragyan AI, we help enterprises evaluate these tradeoffs and implement the right architecture for their specific needs.`,
  },
  {
    slug: "ai-consulting-india-market-outlook-2026",
    title: "The Rise of AI Consulting in India: Market Outlook 2026",
    excerpt: "India's AI consulting market is projected to reach $3.5B by 2027. We analyze the key drivers and opportunities.",
    category: "Industry Insights",
    date: "January 10, 2026",
    readTime: "6 min read",
    author: "Pragyan AI Team",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop&q=80",
    content: `India's AI market is at an inflection point. With a projected CAGR of 25-30%, the AI consulting and solutions market is expected to reach $3.5 billion by 2027. What's driving this growth, and where are the opportunities?

## Key Market Drivers

### 1. Digital India Push
Government initiatives are creating massive demand for AI in public services — from healthcare diagnostics to agricultural advisory to smart city management. The India AI Mission, with its $1.2 billion allocation, is accelerating adoption across sectors.

### 2. Enterprise Digital Transformation
Large Indian enterprises and MNCs with India operations are moving from AI experimentation to production deployment. The focus has shifted from "should we use AI?" to "how do we scale AI across the organization?"

### 3. Cost Advantage
India's strong talent pool in engineering and data science makes it a global hub for AI development. Companies worldwide are looking to Indian AI consultancies for cost-effective, high-quality AI solutions.

### 4. Startup Ecosystem
India's AI startup ecosystem is thriving with over 3,000 AI startups. This creates both demand (startups need AI expertise) and supply (startups provide specialized AI services).

## Opportunity Areas

**Healthcare AI:** India's healthcare system serves 1.4 billion people with limited resources. AI-powered diagnostics, telemedicine, and hospital operations present a massive opportunity.

**Financial Services AI:** India's fintech revolution (UPI processes 10+ billion transactions monthly) creates enormous potential for fraud detection, credit scoring, and personalized financial services.

**Education AI:** With 250+ million students, India's education sector is ripe for AI-powered personalization, assessment, and administrative automation.

**Manufacturing AI:** India's manufacturing sector, boosted by the Make in India initiative, needs AI for quality control, predictive maintenance, and supply chain optimization.

## What This Means for Enterprises

The AI consulting market is maturing rapidly. Enterprises should:

1. **Act now:** Early adopters are gaining significant competitive advantages
2. **Choose partners carefully:** Look for consultancies with domain expertise, not just technical skills
3. **Start with ROI-focused projects:** Prioritize use cases with clear, measurable business impact
4. **Build internal capability:** Don't just outsource — build your own AI muscle alongside external partners

At Pragyan AI, we're positioned at the center of this growth. We combine deep technical expertise with practical business understanding to help Indian enterprises harness AI effectively.`,
  },
];

export const categoryColors: Record<string, string> = {
  "AI Trends": "bg-cyan/20 text-cyan",
  Engineering: "bg-purple/20 text-purple-light",
  "Case Studies": "bg-gold/20 text-gold",
  "Industry Insights": "bg-cyan/15 text-cyan-light",
  Tutorials: "bg-purple/15 text-purple-light",
};
