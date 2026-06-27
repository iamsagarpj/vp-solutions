import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import Projects from "@/components/sections/Projects";
import Partners from "@/components/sections/Partners";
import Timeline from "@/components/sections/Timeline";
import Clients from "@/components/sections/Clients";
import Testimonials from "@/components/sections/Testimonials";
import Certifications from "@/components/sections/Certifications";
import Gallery from "@/components/sections/Gallery";
import Careers from "@/components/sections/Careers";
import Contact from "@/components/sections/Contact";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <WhyUs />
        <Projects />
        <Partners />
        <Timeline />
        <Clients />
        <Testimonials />
        <Certifications />
        <Gallery />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
