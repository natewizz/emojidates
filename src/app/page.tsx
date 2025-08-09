import { HeroSection } from "@/components/landing/hero-section";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <HeroSection />
      </main>
    </div>
  );
}
