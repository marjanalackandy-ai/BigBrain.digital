import Hero from "../components/home/Hero";
import TrustSection from "../components/home/TrustSection";
import ServicesSection from "../components/home/ServicesSection";
import ProcessSection from "../components/home/ProcessSection";
import Testimonials from "../components/home/Testimonials";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesSection />
      <ProcessSection />
      <Testimonials />
      <CTASection />
    </>
  );
}