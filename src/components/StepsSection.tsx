import { Bot, Search, Users } from "lucide-react";

export const StepsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/5 to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Automatically copy expert traders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <Search className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">1. Browse signal channels</h3>
            <p className="text-muted-foreground">Find the perfect signal provider for your trading style</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold">2. Join your group</h3>
            <p className="text-muted-foreground">Connect with expert traders and fellow investors</p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
              <Bot className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold">3. Automate your trades</h3>
            <p className="text-muted-foreground">Let our bots execute trades automatically for you</p>
          </div>
        </div>
      </div>
    </section>
  );
};