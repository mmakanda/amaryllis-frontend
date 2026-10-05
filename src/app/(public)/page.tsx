import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import AISection from "@/components/sections/AISection";
import ITSection from "@/components/sections/ITSection";
import AgricultureSection from "@/components/sections/AgricultureSection";
import ConstructionSection from "@/components/sections/ConstructionSection";
import ResearchSection from "@/components/sections/ResearchSection";
import ProductsSection from "@/components/sections/ProductsSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-midnight-950 text-white">
      <Hero />
      <ServicesGrid />
      <AISection />
      <ITSection />
      <AgricultureSection />
      <ConstructionSection />
      <ResearchSection />
      <ProductsSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}

