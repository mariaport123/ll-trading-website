import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import News from "@/components/News";
import Team from "@/components/Team";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5EF] text-[#111111]">
      <Navbar />

      <Hero />
      <Experience />
      <Services />
      <News />
      <Team />
      <Pricing />
      <Contact />

      <Footer />
    </main>
  );
}