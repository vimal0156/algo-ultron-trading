import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Signal, Zap, TrendingUp } from "lucide-react";

const SignalBots = () => {
  const bots = [
    {
      id: 1,
      name: "BTC Trend Follower",
      status: "Active",
      signals: 145,
      winRate: "68%",
      lastSignal: "5 mins ago",
    },
    {
      id: 2,
      name: "ETH Scalper",
      status: "Active",
      signals: 89,
      winRate: "72%",
      lastSignal: "15 mins ago",
    },
    {
      id: 3,
      name: "SOL Momentum",
      status: "Paused",
      signals: 56,
      winRate: "65%",
      lastSignal: "1 hour ago",
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Signal Bots</h1>
        <Button className="flex items-center gap-2">
          <Bot className="w-4 h-4" />
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
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">2 paused</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Signals</CardTitle>
            <Signal className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">290</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Average Win Rate</CardTitle>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68.5%</div>
            <p className="text-xs text-muted-foreground">+2.1% this month</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-card rounded-lg border">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Your Signal Bots</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Bot Name</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Total Signals</th>
                  <th className="text-left p-4">Win Rate</th>
                  <th className="text-left p-4">Last Signal</th>
                  <th className="text-right p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bots.map((bot) => (
                  <tr key={bot.id} className="border-b last:border-0">
                    <td className="p-4 font-medium">{bot.name}</td>
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
                    <td className="p-4">{bot.signals}</td>
                    <td className="p-4">{bot.winRate}</td>
                    <td className="p-4 text-muted-foreground">{bot.lastSignal}</td>
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

export default SignalBots;