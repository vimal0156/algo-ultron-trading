import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExchangeCarousel } from "@/components/ExchangeCarousel";
import { Button } from "@/components/ui/button";

const Exchanges = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24">
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Supported Exchanges
            </h1>
            <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              Trade seamlessly across the world's leading cryptocurrency exchanges
            </p>
            
            <ExchangeCarousel />
            
            <div className="mt-16 text-center">
              <Button size="lg" className="glow">
                Connect Exchange
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Exchanges;