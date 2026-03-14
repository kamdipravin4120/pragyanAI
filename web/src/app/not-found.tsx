import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.05)_0%,transparent_60%)]" />

      {/* Floating dots */}
      {[
        "top-1/4 left-1/4 w-1 h-1 opacity-20",
        "top-1/3 right-1/3 w-1.5 h-1.5 opacity-15",
        "bottom-1/3 left-1/3 w-1 h-1 opacity-25",
        "top-1/2 right-1/4 w-2 h-2 opacity-10",
        "bottom-1/4 right-1/3 w-1 h-1 opacity-20",
      ].map((cls, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-cyan animate-float ${cls}`}
          style={{ animationDelay: `${i * 0.5}s` }}
        />
      ))}

      <div className="relative z-10 text-center">
        <h1 className="text-[8rem] sm:text-[12rem] font-heading font-bold gradient-text leading-none">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-foreground mt-2 mb-4">
          Page Not Found
        </h2>
        <p className="text-foreground-muted max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" size="lg">Back to Home</Button>
          <Button href="/solutions" variant="secondary" size="lg">View Solutions</Button>
        </div>
      </div>
    </section>
  );
}
