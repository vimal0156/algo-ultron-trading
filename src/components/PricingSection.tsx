import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "No Cost",
    features: [
      "3 Active Manual Trades",
      "1 Active Signal Trade",
      "1 Active Auto-Trading Group",
      "1 Active Signals Bot",
      "1 Active Grid Bot",
      "1 Active DCA Bot",
      "1 Active TradingView Bot",
      "1 Monthly Backtesting Run",
      "1 Primary API Slot"
    ]
  },
  {
    name: "Starter",
    price: "$12.49",
    description: "You save $148.9 a year",
    features: [
      "Unlimited Active Manual Trades",
      "3 Active Signal Trades",
      "1 Active Auto-Trading Group",
      "2 Active Signals Bots",
      "2 Active Grid Bots",
      "2 Active DCA Bots",
      "2 Active TradingView Bots",
      "10 Monthly Backtesting Runs",
      "1 Primary API Slot"
    ]
  },
  {
    name: "Advanced",
    price: "$22.49",
    description: "You save $268.9 a year",
    features: [
      "Unlimited Active Manual Trades",
      "10 Active Signal Trades",
      "2 Active Auto-Trading Groups",
      "5 Active Signals Bots",
      "5 Active Grid Bots",
      "5 Active DCA Bots",
      "5 Active TradingView Bots",
      "50 Monthly Backtesting Runs",
      "2 Primary API Slots"
    ]
  },
  {
    name: "Premium",
    price: "$44.99",
    description: "You save $539 a year",
    features: [
      "Unlimited Active Manual Trades",
      "Unlimited Active Signal Trades",
      "Unlimited Auto-Trading Groups",
      "Unlimited Active Signals Bots",
      "Unlimited Active Grid Bots",
      "Unlimited Active DCA Bots",
      "Unlimited Active TradingView Bots",
      "250 Monthly Backtesting Runs",
      "3 Primary API Slots"
    ],
    popular: true
  }
];

export const PricingSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="pricing">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent blur-xl" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            Transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground">No hidden fees. No commission fees. No surprises.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`relative backdrop-blur-sm bg-card/50 hover:bg-card/80 transition-all duration-300 ${plan.popular ? 'border-primary shadow-lg shadow-primary/20' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-4 py-1 rounded-full text-xs font-semibold shadow-lg animate-pulse">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm group">
                        <svg
                          className="mr-2 h-4 w-4 text-primary group-hover:scale-110 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="group-hover:text-primary transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={`w-full text-base font-semibold ${plan.popular ? 'glow animate-pulse' : 'hover:glow'}`}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center space-y-4"
        >
          <p className="text-lg font-medium text-primary">Available on all plans:</p>
          <p className="text-base text-muted-foreground">
            Mobile & Web Apps • 24/7 Support • Automated Trading • Advanced Trading Features & Terminal
          </p>
        </motion.div>
      </div>
    </section>
  );
};