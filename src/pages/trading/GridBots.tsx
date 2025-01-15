import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Grid, LineChart, TrendingUp, DollarSign } from "lucide-react";

const GridBots = () => {
  const bots = [
    {
      id: 1,
      name: "BTC Range Trader",
      pair: "BTC/USDT",
      gridLines: 15,
      profitLoss: "+$1,245.50",
      status: "Active",
      range: "$25,000 - $35,000",
    },
    {
      id: 2,
      name: "ETH Grid Bot",
      pair: "ETH/USDT",
      gridLines: 10,
      profitLoss: "+$458.20",
      status: "Active",
      range: "$1,800 - $2,200",
    },
    {
      id: 3,
      name: "SOL Range Bot",
      pair: "SOL/USDT",
      gridLines: 12,
      profitLoss: "-$125.30",
      status: "Paused",
      range: "$80 - $120",
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Grid Trading Bots</h1>
        <Button className="flex items-center gap-2">
          <Grid className="w-4 h-4" />
          Create Grid Bot
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Grid Bots</CardTitle>
            <Grid className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">1 paused</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Profit/Loss</CardTitle>
            <DollarSign className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">+$1,578.40</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75.8%</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-card rounded-lg border">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Your Grid Bots</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Bot Name</th>
                  <th className="text-left p-4">Trading Pair</th>
                  <th className="text-left p-4">Grid Lines</th>
                  <th className="text-left p-4">Range</th>
                  <th className="text-left p-4">Profit/Loss</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-right p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bots.map((bot) => (
                  <tr key={bot.id} className="border-b last:border-0">
                    <td className="p-4 font-medium">{bot.name}</td>
                    <td className="p-4">{bot.pair}</td>
                    <td className="p-4">{bot.gridLines}</td>
                    <td className="p-4">{bot.range}</td>
                    <td className="p-4">
                      <span
                        className={bot.profitLoss.startsWith("+")
                          ? "text-green-500"
                          : "text-red-500"}
                      >
                        {bot.profitLoss}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          bot.status === "Active"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-yellow-500/10 text-yellow-500"
                        }`}
                      >
                        {bot.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <Button variant="ghost" size="sm">
                        Configure
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

export default GridBots;