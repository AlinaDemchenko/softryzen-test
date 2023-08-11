import About from "@/components/About";
import Career from "@/components/Career";
import Contacts from "@/components/Contacts";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero/>
      <About/>
      <Services/>
      <Career/>
      <Gallery/>
      <Contacts/>
    </main>
  );
}
