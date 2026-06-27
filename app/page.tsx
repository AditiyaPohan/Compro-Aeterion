import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Achievements } from "@/components/sections/achievements";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <Achievements />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
