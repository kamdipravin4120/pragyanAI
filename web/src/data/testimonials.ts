export interface Testimonial {
  name: string;
  title: string;
  company: string;
  quote: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    title: "CTO",
    company: "TechScale Solutions",
    quote: "Pragyan AI transformed our customer support operations. The AI chatbot handles 70% of queries autonomously, and our team can focus on complex issues. The ROI was visible within the first month.",
  },
  {
    name: "Priya Sharma",
    title: "VP of Operations",
    company: "MediCare Group",
    quote: "The AI automation platform streamlined our entire HR workflow. From hiring to compliance, everything is faster and more accurate. Pragyan AI truly understands enterprise needs.",
  },
  {
    name: "Amit Patel",
    title: "Founder & CEO",
    company: "EduVerse Learning",
    quote: "Our student engagement increased by 65% after implementing Pragyan AI's education platform. The personalized learning paths have been a game-changer for our online courses.",
  },
];
