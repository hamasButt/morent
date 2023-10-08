import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="w-full h-screen">
      <Navigation />
      <div className="px-20 lg:mt-[196px]">
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
