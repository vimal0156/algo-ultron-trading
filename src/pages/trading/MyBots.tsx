import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, LineChart, TrendingUp, Plus } from "lucide-react";

const MyBots = () => {
  const bots = [
    {
      id: 1,
      name: "BTC Range Trader",
      type: "Grid Bot",
      pair: "BTC/USDT",
      profit: "+$1,245.50",
      status: "Active",
      lastTrade: "2 mins ago",
    },
    {
      id: 2,
      name: "ETH DCA Bot",
      type: "DCA Bot",
      pair: "ETH/USDT",
      profit: "+$458.20",
      status: "Active",
      lastTrade: "15 mins ago",
    },
    {
      id: 3,
      name: "SOL Signal Bot",
      type: "Signal Bot",
      pair: "SOL/USDT",
      profit: "-$125.30",
      status: "Paused",
      lastTrade: "1 hour ago",
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Trading Bots</h1>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create Bot
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Bots</CardTitle>
            <Bot className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">2 paused</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Profit</CardTitle>
            <LineChart className="w-4 h-4 text-muted-foreground" />
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
          <h2 className="text-xl font-semibold mb-4">Your Bots</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Bot Name</th>
                  <th className="text-left p-4">Type</th>
                  <th className="text-left p-4">Trading Pair</th>
                  <th className="text-left p-4">Profit/Loss</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Last Trade</th>
                  <th className="text-right p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bots.map((bot) => (
                  <tr key={bot.id} className="border-b last:border-0">
                    <td className="p-4 font-medium">{bot.name}</td>
                    <td className="p-4">{bot.type}</td>
                    <td className="p-4">{bot.pair}</td>
                    <td className="p-4">
                      <span
                        className={bot.profit.startsWith("+")
                          ? "text-green-500"
                          : "text-red-500"}
                      >
                        {bot.profit}
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
                    <td className="p-4 text-muted-foreground">{bot.lastTrade}</td>
                    <td className="p-4 text-right">
                      <Button variant="ghost" size="sm">
                        Manage
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

export default MyBots;