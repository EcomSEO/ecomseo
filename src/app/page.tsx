import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import ClientLogos from "@/components/sections/ClientLogos";
import AboutUs from "@/components/sections/AboutUs";
import Results from "@/components/sections/Results";
import Services from "@/components/sections/Services";
import ToolsSoftware from "@/components/sections/ToolsSoftware";
import Comparison from "@/components/sections/Comparison";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import Team from "@/components/sections/Team";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ClientLogos />
        <AboutUs />
        <Results />
        <Services />
        <ToolsSoftware />
        <Comparison />
        <Process />
        <FAQ />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
