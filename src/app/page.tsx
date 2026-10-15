import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import News from "@/components/News";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import ServicesMarquee from "@/components/ServicesMarquee";

export default function Home() {
  return (

    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="relative isolate">
        <Navbar />
        <Hero />
      </div>

      <ServicesMarquee />
      <Experience />
      <Services />
      <Marquee />
      <News />
      <Team />
      <Pricing />
      <Contact />
      <Footer />
    </main>

  );
}