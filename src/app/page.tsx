import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import TrackRecord from "@/components/TrackRecord";
import TestimonialsSection from "@/components/TestimonialsSection";
import CoursesProducts from "@/components/CoursesProducts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden" style={{ backgroundColor: "#08080C" }}>
      <Navbar />
      <HeroSection />
      <TestimonialsSection />
      <PricingSection />
      <TrackRecord />
      <CoursesProducts />
      <Footer />
    </main>
  );
}
