import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { TechStack } from "./components/tech-stack";
import { Experience } from "./components/experience";
import { Community } from "./components/community";
import { ScrollToTop } from "./components/scroll-to-top";

function App() {
  return (
    <div className="min-h-screen bg-bg text-white flex flex-col font-sans antialiased selection:bg-primary-green/30">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Community />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

