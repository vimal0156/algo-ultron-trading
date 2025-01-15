import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Star, Users, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Marketplace = () => {
  const bots = [
    {
      id: 1,
      name: "BTC Trend Master",
      creator: "CryptoWhiz",
      price: "$99.99",
      rating: "4.8",
      users: "1.2k",
      description: "Advanced trend following strategy for Bitcoin",
    },
    {
      id: 2,
      name: "ETH Scalper Pro",
      creator: "TradingGuru",
      price: "$149.99",
      rating: "4.6",
      users: "856",
      description: "High-frequency ETH trading bot with proven track record",
    },
    {
      id: 3,
      name: "Multi-Pair DCA",
      creator: "BotMaster",
      price: "$199.99",
      rating: "4.9",
      users: "2.1k",
      description: "Dollar-cost averaging across multiple pairs",
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Bot Marketplace</h1>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search bots..."
              className="pl-9 w-[250px]"
            />
          </div>
          <Button className="flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            My Purchases
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Available Bots</CardTitle>
            <ShoppingCart className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">15 new this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Top Rated</CardTitle>
            <Star className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7</div>
            <p className="text-xs text-muted-foreground">Average rating</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.5k</div>
            <p className="text-xs text-muted-foreground">Using marketplace bots</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bots.map((bot) => (
          <Card key={bot.id}>
            <CardHeader>
              <CardTitle>{bot.name}</CardTitle>
              <p className="text-sm text-muted-foreground">by {bot.creator}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {bot.description}
              </p>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">{bot.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{bot.users}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">{bot.price}</span>
                <Button>Purchase</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;