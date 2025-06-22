import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { Footer } from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="sm:mt-0 mt-12">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
