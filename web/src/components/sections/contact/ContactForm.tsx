"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui";
import { Send, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  solution: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const solutionOptions = [
  { value: "", label: "Select a solution" },
  { value: "ai-automation", label: "AI Automation" },
  { value: "ai-chatbots", label: "AI Chatbots" },
  { value: "business-intelligence", label: "Business Intelligence AI" },
  { value: "education-ai", label: "Education AI" },
  { value: "custom-ai", label: "Custom AI Solutions" },
  { value: "ai-consulting", label: "AI Consulting" },
  { value: "other", label: "Other" },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const searchParams = useSearchParams();
  const planParam = searchParams.get("plan") || "";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      solution: planParam,
    },
  });

  const onSubmit = async (_data: ContactFormData) => {
    // Simulate submission delay
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-cyan mx-auto mb-4" />
        <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Thank You!</h3>
        <p className="text-foreground-muted">
          We&apos;ve received your message and will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-2xl p-8 space-y-5">
      <h3 className="text-xl font-heading font-semibold text-foreground mb-6">Send Us a Message</h3>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Name <span className="text-cyan">*</span>
        </label>
        <input
          {...register("name")}
          placeholder="Your full name"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-foreground-muted/50 text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30 transition-colors"
        />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Email <span className="text-cyan">*</span>
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="you@company.com"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-foreground-muted/50 text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30 transition-colors"
        />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
      </div>

      {/* Phone + Company row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-foreground-muted/50 text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
          <input
            {...register("company")}
            placeholder="Company name"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-foreground-muted/50 text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30 transition-colors"
          />
        </div>
      </div>

      {/* Solution interest */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Solution Interest</label>
        <select
          {...register("solution")}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30 transition-colors appearance-none"
        >
          {solutionOptions.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-background text-foreground">
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Message <span className="text-cyan">*</span>
        </label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Tell us about your project or requirements..."
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-foreground-muted/50 text-sm focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/30 transition-colors resize-none"
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
      </div>

      {/* Submit */}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          "Sending..."
        ) : (
          <span className="flex items-center gap-2">
            <Send className="w-4 h-4" /> Send Message
          </span>
        )}
      </Button>
    </form>
  );
}
