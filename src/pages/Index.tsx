import { Button } from "@/components/ui/button";
import { HeroScene } from "@/components/HeroScene";
import { FeatureCard } from "@/components/FeatureCard";
import { Bot, LineChart, Zap, Play, ChevronRight } from "lucide-react";
import { ChristmasPromo } from "@/components/ChristmasPromo";
import { Navbar } from "@/components/Navbar";
import { ExchangeCarousel } from "@/components/ExchangeCarousel";
import { StepsSection } from "@/components/StepsSection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ChristmasPromo />
      <Navbar />
      <HeroScene />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 hero-gradient">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-fade-in">
            Automated Crypto Trading for Everyone
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground animate-fade-in [animation-delay:200ms]">
            Cutting-edge trading automation for novices and pros. Thousands of strategies. User-friendly bots. 24/7 Support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:400ms]">
            <Button size="lg" className="glow w-full sm:w-auto group transition-all duration-300">
              Get Started
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="group w-full sm:w-auto hover:bg-primary/10">
              <Play className="w-4 h-4 mr-2 transition-transform group-hover:scale-125" />
              Watch Video
            </Button>
          </div>
          <p className="text-sm text-muted-foreground animate-fade-in [animation-delay:600ms]">
            14 days free trial. No credit card required.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <StepsSection />

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Powerful Trading Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Signal Bots"
              description="Automatically execute trades based on trusted signal providers with advanced AI-powered analysis"
              icon={<Bot className="w-8 h-8" />}
            />
            <FeatureCard
              title="Advanced Analytics"
              description="Real-time market analysis and performance tracking with predictive insights"
              icon={<LineChart className="w-8 h-8" />}
            />
            <FeatureCard
              title="Lightning Fast"
              description="Execute trades in milliseconds with our optimized infrastructure and smart order routing"
              icon={<Zap className="w-8 h-8" />}
            />
          </div>
        </div>
      </section>

      {/* Exchanges Section */}
      <ExchangeCarousel />

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Ready to Start Trading Smarter?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Join thousands of traders using our platform to automate their trading strategy
          </p>
          <Button size="lg" className="glow group">
            Get Started Now
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;