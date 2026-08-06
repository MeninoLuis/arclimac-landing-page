import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Simulator from "@/components/Simulator";
import ServiceCards from "@/components/ServiceCards";
import FinalCTA from "@/components/FinalCTA";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Simulator />
      <ServiceCards />
      <FinalCTA />
      <WhyChoose />
      <Testimonials />
      <Footer />
      <WhatsAppBubble />
    </main>
  );
}
