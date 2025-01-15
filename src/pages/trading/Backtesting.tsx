import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, LineChart, Play, Settings } from "lucide-react";

const Backtesting = () => {
  const tests = [
    {
      id: 1,
      name: "BTC Grid Strategy",
      pair: "BTC/USDT",
      period: "Jan 2024",
      profit: "+15.2%",
      trades: 145,
      status: "Completed",
    },
    {
      id: 2,
      name: "ETH DCA Test",
      pair: "ETH/USDT",
      period: "Dec 2023",
      profit: "+8.5%",
      trades: 89,
      status: "Running",
    },
    {
      id: 3,
      name: "SOL Signal Strategy",
      pair: "SOL/USDT",
      period: "Nov 2023",
      profit: "-2.3%",
      trades: 56,
      status: "Completed",
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Strategy Backtesting</h1>
        <Button className="flex items-center gap-2">
          <Play className="w-4 h-4" />
          New Test
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Tests</CardTitle>
            <History className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Best Performance</CardTitle>
            <LineChart className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">+22.5%</div>
            <p className="text-xs text-muted-foreground">Grid strategy</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Tests</CardTitle>
            <Settings className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Running now</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-card rounded-lg border">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Recent Tests</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Strategy Name</th>
                  <th className="text-left p-4">Trading Pair</th>
                  <th className="text-left p-4">Time Period</th>
                  <th className="text-left p-4">Profit/Loss</th>
                  <th className="text-left p-4">Total Trades</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-right p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tests.map((test) => (
                  <tr key={test.id} className="border-b last:border-0">
                    <td className="p-4 font-medium">{test.name}</td>
                    <td className="p-4">{test.pair}</td>
                    <td className="p-4">{test.period}</td>
                    <td className="p-4">
                      <span
                        className={test.profit.startsWith("+")
                          ? "text-green-500"
                          : "text-red-500"}
                      >
                        {test.profit}
                      </span>
                    </td>
                    <td className="p-4">{test.trades}</td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          test.status === "Completed"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-blue-500/10 text-blue-500"
                        }`}
                      >
                        {test.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <Button variant="ghost" size="sm">
                        View Results
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

export default Backtesting;