import "./App.css";
import { Content } from "./components/Content/Content";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Shortener } from "./components/Shortener/Shortener";
import { UrlShortenerProvider } from "./context/UrlShortenerContext";

function App() {
  return (
    <main className="app-wrapper">
      <Navbar />
      <Hero />
      <UrlShortenerProvider>
        <Shortener />
        <Content />
      </UrlShortenerProvider>
      <Footer />
    </main>
  );
}

export default App;
