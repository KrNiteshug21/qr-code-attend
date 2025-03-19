import Header from "../Header";
import Footer from "../Footer";
import HeroSection from "./HeroSection";
import Features from "./Features";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
