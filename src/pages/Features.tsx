import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeatureCard } from "@/components/FeatureCard";
import { Bot, LineChart, Zap, Gauge, Shield, Clock } from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24">
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Advanced Trading Features
            </h1>
            <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              Discover our comprehensive suite of trading tools designed to give you the edge in the crypto market
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                description="Execute trades in milliseconds with our optimized infrastructure"
                icon={<Zap className="w-8 h-8" />}
              />
              <FeatureCard
                title="Performance Metrics"
                description="Track your trading performance with detailed analytics and insights"
                icon={<Gauge className="w-8 h-8" />}
              />
              <FeatureCard
                title="Security First"
                description="Enterprise-grade security protecting your assets and data"
                icon={<Shield className="w-8 h-8" />}
              />
              <FeatureCard
                title="24/7 Trading"
                description="Automated trading that works around the clock"
                icon={<Clock className="w-8 h-8" />}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Features;