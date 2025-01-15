import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownUp, Bot, DollarSign, LineChart } from "lucide-react";

const DCABots = () => {
  const bots = [
    {
      id: 1,
      name: "BTC Weekly Accumulator",
      pair: "BTC/USDT",
      interval: "Weekly",
      amount: "$500",
      status: "Active",
      totalInvested: "$12,500",
    },
    {
      id: 2,
      name: "ETH Daily Builder",
      pair: "ETH/USDT",
      interval: "Daily",
      amount: "$100",
      status: "Active",
      totalInvested: "$8,900",
    },
    {
      id: 3,
      name: "SOL Monthly Stack",
      pair: "SOL/USDT",
      interval: "Monthly",
      amount: "$1,000",
      status: "Paused",
      totalInvested: "$5,000",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">DCA Bots</h1>
        <Button className="flex items-center gap-2">
          <ArrowDownUp className="w-4 h-4" />
          New DCA Bot
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active DCA Bots</CardTitle>
            <Bot className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">1 paused</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Invested</CardTitle>
            <DollarSign className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$26,400</div>
            <p className="text-xs text-muted-foreground">Across all bots</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Average ROI</CardTitle>
            <LineChart className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">+12.5%</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Your DCA Bots</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Bot Name</th>
                  <th className="text-left p-4">Trading Pair</th>
                  <th className="text-left p-4">Interval</th>
                  <th className="text-left p-4">Amount</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Total Invested</th>
                  <th className="text-right p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bots.map((bot) => (
                  <tr key={bot.id} className="border-b last:border-0">
                    <td className="p-4 font-medium">{bot.name}</td>
                    <td className="p-4">{bot.pair}</td>
                    <td className="p-4">{bot.interval}</td>
                    <td className="p-4">{bot.amount}</td>
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
                    <td className="p-4">{bot.totalInvested}</td>
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
      </Card>
    </div>
  );
};

export default DCABots;