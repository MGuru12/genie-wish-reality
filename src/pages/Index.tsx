import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProductsSection from "../components/ProductsSection";
import FeaturesSection from "../components/FeaturesSection";
import AboutSection from "../components/AboutSection";
import FooterSection from "../components/FooterSection";
import MouseGlow from "../components/MouseGlow";

const Index = () => {
  return (
    <div className="relative overflow-x-hidden">
      <MouseGlow />
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <AboutSection />
      <FooterSection />
    </div>
  );
};

export default Index;
