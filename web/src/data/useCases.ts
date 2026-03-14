export interface UseCase {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  solutionId: string;
  results: { metric: string; value: string }[];
}

export const useCases: UseCase[] = [
  {
    id: "customer-support-ai",
    title: "AI-Powered Customer Support",
    industry: "Technology",
    challenge: "A growing SaaS company was struggling with 10,000+ monthly support tickets, long response times, and inconsistent resolution quality across their support team.",
    solution: "Deployed an AI chatbot integrated with their knowledge base using RAG technology, providing instant, accurate responses and intelligently escalating complex issues to human agents.",
    solutionId: "ai-chatbots",
    results: [
      { metric: "Response Time Reduction", value: "85%" },
      { metric: "Ticket Resolution Rate", value: "73%" },
      { metric: "Customer Satisfaction", value: "94%" },
    ],
  },
  {
    id: "sales-intelligence",
    title: "Predictive Sales Intelligence",
    industry: "Finance",
    challenge: "A financial services firm needed to improve lead conversion rates and optimize their sales pipeline with limited sales team bandwidth.",
    solution: "Implemented AI-driven lead scoring, deal prediction, and customer insight analytics that prioritized high-value opportunities and automated follow-up sequences.",
    solutionId: "business-intelligence",
    results: [
      { metric: "Lead Conversion Increase", value: "45%" },
      { metric: "Sales Cycle Reduction", value: "30%" },
      { metric: "Revenue Growth", value: "2.5x" },
    ],
  },
  {
    id: "hr-automation",
    title: "Intelligent HR Operations",
    industry: "Healthcare",
    challenge: "A hospital network with 5,000+ employees faced bottlenecks in recruitment, onboarding, and compliance tracking across multiple locations.",
    solution: "Deployed AI automation for resume screening, onboarding workflow management, compliance document processing, and talent analytics dashboards.",
    solutionId: "ai-automation",
    results: [
      { metric: "Hiring Time Reduction", value: "60%" },
      { metric: "Compliance Accuracy", value: "99.5%" },
      { metric: "HR Cost Savings", value: "40%" },
    ],
  },
  {
    id: "operations-ai",
    title: "Smart Operations Management",
    industry: "Manufacturing",
    challenge: "A manufacturing company needed real-time visibility into operations, early anomaly detection, and automated quality control across their production lines.",
    solution: "Implemented AI-powered operational analytics with anomaly detection, predictive maintenance scheduling, and automated quality inspection workflows.",
    solutionId: "ai-automation",
    results: [
      { metric: "Downtime Reduction", value: "55%" },
      { metric: "Quality Defect Rate", value: "-70%" },
      { metric: "Operational Efficiency", value: "+35%" },
    ],
  },
  {
    id: "education-platform",
    title: "Personalized Learning Platform",
    industry: "Education",
    challenge: "An online education provider wanted to improve student engagement and learning outcomes across their platform with 50,000+ learners.",
    solution: "Built a personalized learning AI that adapts content difficulty, generates custom quizzes, provides intelligent tutoring, and identifies at-risk students for early intervention.",
    solutionId: "education-ai",
    results: [
      { metric: "Student Engagement", value: "+65%" },
      { metric: "Course Completion Rate", value: "+40%" },
      { metric: "Learning Outcome Improvement", value: "38%" },
    ],
  },
  {
    id: "document-intelligence",
    title: "AI Document Intelligence",
    industry: "Retail",
    challenge: "A retail chain processing thousands of contracts, invoices, and compliance documents monthly was drowning in manual document review and data extraction.",
    solution: "Deployed document intelligence AI for automated parsing, contract analysis, knowledge extraction, and compliance verification with human-in-the-loop review.",
    solutionId: "custom-ai",
    results: [
      { metric: "Processing Speed", value: "10x" },
      { metric: "Extraction Accuracy", value: "97%" },
      { metric: "Cost Per Document", value: "-75%" },
    ],
  },
];

export const industries = ["All", "Technology", "Finance", "Healthcare", "Manufacturing", "Education", "Retail"] as const;
