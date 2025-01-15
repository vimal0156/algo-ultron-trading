import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PricingSection } from "@/components/PricingSection";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Pricing = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24">
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your trading needs
            </p>
            
            <div className="flex justify-center mb-16">
              <Button 
                size="lg" 
                className="glow group"
                onClick={handleGetStarted}
              >
                Get Started Now
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <PricingSection />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;