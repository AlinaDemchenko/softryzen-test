import About from "@/components/About/About";
import Career from "@/components/Career/Career";
import Contacts from "@/components/Contacts/Contacts";
import Gallery from "@/components/Gallery/Gallery";
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
