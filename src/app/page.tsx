import HeroSection from "@/components/HeroSection";
import ExpertiseMarquee from "@/components/ExpertiseMarquee";
import PricingSection from "@/components/PricingSection";
import TrackRecord from "@/components/TrackRecord";
import TestimonialsSection from "@/components/TestimonialsSection";
import CoursesProducts from "@/components/CoursesProducts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden" style={{ backgroundColor: "#08080C" }}>
      <HeroSection />
      <ExpertiseMarquee />
      <TestimonialsSection />
      <PricingSection />
      <TrackRecord />
      <CoursesProducts />
      <Footer />
    </main>
  );
}
