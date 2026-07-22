import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MissionVision } from "@/components/MissionVision";
import { Services } from "@/components/Services";
import { Values } from "@/components/Values";
import { Commitment } from "@/components/Commitment";
import { Clients } from "@/components/Clients";
import { Gallery } from "@/components/Gallery";
import { VideoShowcase } from "@/components/VideoShowcase";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Services />
        <Values />
        <Commitment />
        <Clients />
        <Gallery />
        <VideoShowcase />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
