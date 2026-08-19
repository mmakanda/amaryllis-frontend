import Navbar from "@/components/Navbar";
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
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-midnight-950 text-white">
      <Navbar />
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
      <Footer />
    </main>
  );
}

