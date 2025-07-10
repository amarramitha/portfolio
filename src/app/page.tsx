
import About from "@/app/components/About";
import Hero from "@/app/components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DocumentationPage from "./components/Documentation";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <DocumentationPage />
      <Contact />
      <Footer />
    </main>
  );
}
