import HeroSection from "@/components/HeroSection";
import ExpertiseMarquee from "@/components/ExpertiseMarquee";
import PricingSection from "@/components/PricingSection";
import TrackRecord from "@/components/TrackRecord";
import CoursesProducts from "@/components/CoursesProducts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#0A0A0F" }}>
      <HeroSection />
      <ExpertiseMarquee />
      <PricingSection />
      <TrackRecord />
      <CoursesProducts />
      <Footer />
    </main>
  );
}
