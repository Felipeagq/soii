import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { MissionVision } from "@/components/MissionVision";
import { Services } from "@/components/Services";
import { Values } from "@/components/Values";
import { Commitment } from "@/components/Commitment";
import { Testimonials } from "@/components/Testimonials";
import { Clients } from "@/components/Clients";
import { Gallery } from "@/components/Gallery";
import { VideoShowcase } from "@/components/VideoShowcase";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Process />
        <MissionVision />
        <Services />
        <Values />
        <Commitment />
        <Testimonials />
        <Clients />
        <Gallery />
        <VideoShowcase />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </>
  );
}
