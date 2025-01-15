import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpDown, Coins, LineChart, TrendingUp } from "lucide-react";

const Assets = () => {
  const assets = [
    {
      id: 1,
      asset: "Bitcoin",
      symbol: "BTC",
      amount: "2.5",
      value: "85,421.50",
      change: "+5.2%",
      positive: true,
    },
    {
      id: 2,
      asset: "Ethereum",
      symbol: "ETH",
      amount: "15.8",
      value: "32,654.20",
      change: "-2.1%",
      positive: false,
    },
    {
      id: 3,
      asset: "Solana",
      symbol: "SOL",
      amount: "145.6",
      value: "12,789.30",
      change: "+8.4%",
      positive: true,
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Portfolio Assets</h1>
        <div className="flex gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4" />
            Sort
          </Button>
          <Button className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Analytics
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
            <Coins className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$130,865.00</div>
            <p className="text-xs text-muted-foreground">+3.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Assets Count</CardTitle>
            <LineChart className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Across all exchanges</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">24h Change</CardTitle>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">+$4,521.30</div>
            <p className="text-xs text-muted-foreground">Updated just now</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-card rounded-lg border">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Asset Distribution</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Asset</th>
                  <th className="text-left p-4">Amount</th>
                  <th className="text-left p-4">Value (USD)</th>
                  <th className="text-left p-4">24h Change</th>
                  <th className="text-right p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {assets.map((asset) => (
                  <tr key={asset.id} className="border-b last:border-0">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{asset.asset}</span>
                        <span className="text-sm text-muted-foreground">
                          {asset.symbol}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">{asset.amount}</td>
                    <td className="p-4">${asset.value}</td>
                    <td className="p-4">
                      <span
                        className={`${
                          asset.positive
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {asset.change}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <Button variant="ghost" size="sm">
                        Details
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

export default Assets;