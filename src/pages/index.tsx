import About from "@/app/components/About";
import Hero from "@/app/components/Hero";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import DocumentationPage from "@/app/components/Documentation";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

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
