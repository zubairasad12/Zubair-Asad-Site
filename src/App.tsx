import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans antialiased selection:bg-primary/30">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
