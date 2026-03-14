export interface Solution {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  capabilities: string[];
  useCases: string[];
  benefits: string[];
  icon: string;
}

export const solutions: Solution[] = [
  {
    id: "ai-automation",
    title: "AI Automation",
    shortDescription: "Streamline operations and eliminate repetitive tasks with intelligent workflow automation.",
    description: "Transform your business operations with AI-powered automation that learns, adapts, and optimizes. Our automation solutions integrate seamlessly with your existing systems to streamline workflows, reduce manual effort, and drive operational excellence.",
    capabilities: [
      "Intelligent workflow orchestration",
      "Document processing and extraction",
      "Email and communication automation",
      "Process monitoring and optimization",
      "Anomaly detection and alerting",
    ],
    useCases: [
      "Invoice processing and accounts payable",
      "Customer onboarding workflows",
      "Supply chain optimization",
    ],
    benefits: [
      "Reduce operational costs by up to 60%",
      "Eliminate human error in repetitive tasks",
      "Scale operations without scaling headcount",
    ],
    icon: "Zap",
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots",
    shortDescription: "Deploy intelligent conversational AI that understands context and delivers 24/7 customer engagement.",
    description: "Build and deploy sophisticated AI chatbots that go beyond scripted responses. Our chatbot platform leverages advanced NLP and RAG technology to provide contextual, accurate, and human-like conversations across all customer touchpoints.",
    capabilities: [
      "Natural language understanding and generation",
      "Multi-channel deployment (web, WhatsApp, Slack)",
      "Knowledge base integration with RAG",
      "Sentiment analysis and escalation",
      "Multi-language support",
    ],
    useCases: [
      "Customer support automation",
      "Lead qualification and nurturing",
      "Internal knowledge assistant",
    ],
    benefits: [
      "24/7 customer engagement without staffing costs",
      "90% faster response times",
      "Consistent, accurate information delivery",
    ],
    icon: "MessageSquare",
  },
  {
    id: "business-intelligence",
    title: "Business Intelligence AI",
    shortDescription: "Transform raw data into actionable insights with AI-powered analytics and predictive modeling.",
    description: "Go beyond dashboards with AI that actively analyzes your data, identifies patterns, predicts trends, and recommends actions. Our Business Intelligence AI turns your data into a strategic asset that drives informed decision-making.",
    capabilities: [
      "Predictive analytics and forecasting",
      "Natural language data queries",
      "Automated report generation",
      "Anomaly and trend detection",
      "Custom dashboard creation",
    ],
    useCases: [
      "Sales forecasting and pipeline analytics",
      "Customer churn prediction",
      "Market trend analysis",
    ],
    benefits: [
      "Make data-driven decisions 5x faster",
      "Identify opportunities before competitors",
      "Reduce reporting effort by 80%",
    ],
    icon: "BarChart3",
  },
  {
    id: "education-ai",
    title: "Education AI",
    shortDescription: "Personalize learning experiences and automate administrative tasks with intelligent education technology.",
    description: "Revolutionize education with AI that adapts to every learner. Our Education AI platform creates personalized learning paths, automates assessment, and provides intelligent tutoring that scales quality education to every student.",
    capabilities: [
      "Personalized learning path generation",
      "Intelligent tutoring and Q&A",
      "Automated quiz and assessment creation",
      "Curriculum optimization",
      "Student performance analytics",
    ],
    useCases: [
      "Online course platforms",
      "Corporate training programs",
      "University administrative automation",
    ],
    benefits: [
      "Improve learning outcomes by 40%",
      "Reduce administrative workload by 70%",
      "Scale personalized education affordably",
    ],
    icon: "GraduationCap",
  },
  {
    id: "custom-ai",
    title: "Custom AI Solutions",
    shortDescription: "Purpose-built AI systems designed for your unique business challenges and workflows.",
    description: "When off-the-shelf solutions don't fit, we build custom AI systems tailored to your specific needs. From domain-specific models to end-to-end AI pipelines, we architect and deliver solutions that solve your unique challenges.",
    capabilities: [
      "Custom model training and fine-tuning",
      "Domain-specific AI pipeline development",
      "System integration and API development",
      "Data pipeline architecture",
      "AI infrastructure setup",
    ],
    useCases: [
      "Industry-specific AI applications",
      "Legacy system AI integration",
      "Proprietary algorithm development",
    ],
    benefits: [
      "Solutions built for your exact requirements",
      "Full ownership and customization control",
      "Competitive advantage through unique AI capabilities",
    ],
    icon: "Wrench",
  },
  {
    id: "ai-consulting",
    title: "AI Consulting",
    shortDescription: "Strategic AI guidance to help you navigate adoption, maximize ROI, and build an AI-first organization.",
    description: "Navigate the AI landscape with confidence. Our consulting team helps you identify high-impact AI opportunities, build implementation roadmaps, assess organizational readiness, and ensure successful AI adoption that delivers measurable business value.",
    capabilities: [
      "AI readiness assessment",
      "Technology strategy and roadmap",
      "Use case identification and prioritization",
      "Vendor evaluation and selection",
      "AI governance framework design",
    ],
    useCases: [
      "Enterprise AI transformation programs",
      "Startup AI strategy development",
      "AI ethics and governance setup",
    ],
    benefits: [
      "Avoid costly AI implementation mistakes",
      "Accelerate time-to-value by 3x",
      "Build sustainable AI capabilities",
    ],
    icon: "Lightbulb",
  },
];
