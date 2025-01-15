import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Signal, TrendingUp, Clock } from "lucide-react";

const Signals = () => {
  const signals = [
    {
      id: 1,
      pair: "BTC/USDT",
      type: "Long",
      entry: "$42,500",
      target: "$43,200",
      stopLoss: "$42,100",
      time: "2 mins ago",
      status: "Active",
    },
    {
      id: 2,
      pair: "ETH/USDT",
      type: "Short",
      entry: "$2,250",
      target: "$2,150",
      stopLoss: "$2,300",
      time: "15 mins ago",
      status: "Completed",
    },
    {
      id: 3,
      pair: "SOL/USDT",
      type: "Long",
      entry: "$95",
      target: "$98",
      stopLoss: "$93",
      time: "1 hour ago",
      status: "Stopped",
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Trading Signals</h1>
        <Button className="flex items-center gap-2">
          <Bell className="w-4 h-4" />
          Configure Alerts
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Signals</CardTitle>
            <Signal className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">3 pending execution</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72.5%</div>
            <p className="text-xs text-muted-foreground">Last 50 signals</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Average Hold Time</CardTitle>
            <Clock className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4h 12m</div>
            <p className="text-xs text-muted-foreground">Per signal</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-card rounded-lg border">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Recent Signals</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Trading Pair</th>
                  <th className="text-left p-4">Type</th>
                  <th className="text-left p-4">Entry</th>
                  <th className="text-left p-4">Target</th>
                  <th className="text-left p-4">Stop Loss</th>
                  <th className="text-left p-4">Time</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-right p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {signals.map((signal) => (
                  <tr key={signal.id} className="border-b last:border-0">
                    <td className="p-4 font-medium">{signal.pair}</td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          signal.type === "Long"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-red-500/10 text-red-500"
                        }`}
                      >
                        {signal.type}
                      </span>
                    </td>
                    <td className="p-4">{signal.entry}</td>
                    <td className="p-4">{signal.target}</td>
                    <td className="p-4">{signal.stopLoss}</td>
                    <td className="p-4 text-muted-foreground">{signal.time}</td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          signal.status === "Active"
                            ? "bg-green-500/10 text-green-500"
                            : signal.status === "Completed"
                            ? "bg-blue-500/10 text-blue-500"
                            : "bg-yellow-500/10 text-yellow-500"
                        }`}
                      >
                        {signal.status}
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

export default Signals;