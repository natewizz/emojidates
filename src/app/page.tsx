import { FeaturesSection } from "@/components/landing/features-section";
import { Footer } from "@/components/landing/footer";
import { HowItWorks } from "@/components/landing/how-it-works";
import { HeroSection } from "@/components/landing/hero-section";
import { UgcGallery } from "@/components/landing/ugc-gallery";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <HeroSection />
        <HowItWorks />
        <UgcGallery />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
