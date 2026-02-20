import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedBoatsSection from "@/components/FeaturedBoatsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import HostCTASection from "@/components/HostCTASection";
import DestinationsSection from "@/components/DestinationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MetricsSection from "@/components/MetricsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturedBoatsSection />
        <HowItWorksSection />
        <HostCTASection />
        <DestinationsSection />
        <TestimonialsSection />
        <MetricsSection />
      </main>
      <Footer />
    </div>
  );
}
