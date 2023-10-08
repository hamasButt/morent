import "./App.css";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <div className="px-20">
        <HeroSection />
      </div>
    </>
  );
}

export default App;
