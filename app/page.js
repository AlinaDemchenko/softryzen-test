import About from "@/components/About/About";
import Career from "@/components/Career";
import Contacts from "@/components/Contacts";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <About/>
      <Services/>
      <Career/>
      <Gallery/>
      <Contacts/>
    </main>
  );
}
