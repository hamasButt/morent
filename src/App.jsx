import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="w-full h-screen">
      <Navigation />
      <div className="lg:px-[64px] px-6 lg:mt-[166px]">
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
