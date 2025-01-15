import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const exchanges = [
  { name: "Binance", logo: "binance.svg" },
  { name: "Bybit", logo: "bybit.svg" },
  { name: "Coinbase", logo: "coinbase.svg" },
  { name: "KuCoin", logo: "kucoin.svg" },
  { name: "OKX", logo: "okx.svg" },
  { name: "Huobi", logo: "huobi.svg" },
  { name: "BitMEX", logo: "bitmex.svg" },
  { name: "Bitget", logo: "bitget.svg" }
];

export const ExchangeCarousel = () => {
  return (
    <section className="py-20 px-4" id="exchanges">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Supported Exchanges
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Trade on the world's top crypto exchanges - all in one place
        </p>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {exchanges.map((exchange, index) => (
              <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/4">
                <div className="p-4">
                  <div className="rounded-lg bg-card/50 p-6 text-center hover:glow transition-all duration-300 cursor-pointer">
                    <p className="font-medium">{exchange.name}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};