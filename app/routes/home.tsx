import type { Route } from "./+types/home";
import Navbar from "~/components/layout/navbar";
import Footer from "~/components/layout/footer";
import Hero from "~/components/content/jumbotron";
import AboutUs from "~/components/content/about-us";
import WhyChooseUs from "~/components/content/why-choose-us";
import Projects from "~/components/content/proyek";
import Layanan from "~/components/content/layanan";
import Aktivitas from "~/components/content/activity";
import Contact from "~/components/content/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Indekstat Indonesia | Consulting & Research" },
  ];
}

export default function Home() {
  return (
    <div className="bg-white mt-22">
      {/* Navbar */}
      <Navbar />

      <main>
        {/* Hero */}
        <Hero />

        {/* About Us */}
        <AboutUs />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Projects */}
        <Projects />

        {/* Aktivitas */}
        <Aktivitas />
        
        {/* Layanan */}
        <Layanan />

        {/* Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
