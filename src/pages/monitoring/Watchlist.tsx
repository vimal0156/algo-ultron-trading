import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Star, TrendingUp, Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";

const Watchlist = () => {
  const assets = [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      price: "$42,500.00",
      change24h: "+5.2%",
      volume: "$28.5B",
      marketCap: "$825.4B",
      alerts: 2,
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      price: "$2,250.00",
      change24h: "-2.1%",
      volume: "$15.2B",
      marketCap: "$270.8B",
      alerts: 1,
    },
    {
      id: 3,
      name: "Solana",
      symbol: "SOL",
      price: "$95.00",
      change24h: "+8.4%",
      volume: "$2.8B",
      marketCap: "$40.5B",
      alerts: 3,
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Watchlist & Markets</h1>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search markets..."
              className="pl-9 w-[250px]"
            />
          </div>
          <Button className="flex items-center gap-2">
            <Star className="w-4 h-4" />
            Add to Watchlist
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Watched Assets</CardTitle>
            <Eye className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">6 with active alerts</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">24h Top Gainer</CardTitle>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">SOL</div>
            <p className="text-xs text-green-500">+8.4%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
            <Bell className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground">Price & volume alerts</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-card rounded-lg border">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Watchlist</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Asset</th>
                  <th className="text-left p-4">Price</th>
                  <th className="text-left p-4">24h Change</th>
                  <th className="text-left p-4">Volume (24h)</th>
                  <th className="text-left p-4">Market Cap</th>
                  <th className="text-left p-4">Alerts</th>
                  <th className="text-right p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {assets.map((asset) => (
                  <tr key={asset.id} className="border-b last:border-0">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{asset.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {asset.symbol}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 font-medium">{asset.price}</td>
                    <td className="p-4">
                      <span
                        className={`${
                          asset.change24h.startsWith("+")
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {asset.change24h}
                      </span>
                    </td>
                    <td className="p-4">{asset.volume}</td>
                    <td className="p-4">{asset.marketCap}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                        {asset.alerts} alerts
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watchlist;