import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, ArrowUpDown, DollarSign, TrendingUp } from "lucide-react";

const Trades = () => {
  const trades = [
    {
      id: 1,
      pair: "BTC/USDT",
      type: "Buy",
      amount: "0.15 BTC",
      price: "$42,500",
      total: "$6,375",
      status: "Completed",
      time: "2 mins ago",
    },
    {
      id: 2,
      pair: "ETH/USDT",
      type: "Sell",
      amount: "2.5 ETH",
      price: "$2,250",
      total: "$5,625",
      status: "Completed",
      time: "15 mins ago",
    },
    {
      id: 3,
      pair: "SOL/USDT",
      type: "Buy",
      amount: "25 SOL",
      price: "$95",
      total: "$2,375",
      status: "Processing",
      time: "1 hour ago",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Trade History</h1>
        <div className="flex gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4" />
            Filter
          </Button>
          <Button className="flex items-center gap-2">
            <LineChart className="w-4 h-4" />
            Analytics
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
            <DollarSign className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$14,375.00</div>
            <p className="text-xs text-muted-foreground">Last 24 hours</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Trades</CardTitle>
            <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Today</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Profit/Loss</CardTitle>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">+$892.50</div>
            <p className="text-xs text-muted-foreground">Today's P&L</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Trades</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Pair</th>
                  <th className="text-left p-4">Type</th>
                  <th className="text-left p-4">Amount</th>
                  <th className="text-left p-4">Price</th>
                  <th className="text-left p-4">Total</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Time</th>
                  <th className="text-right p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {trades.map((trade) => (
                  <tr key={trade.id} className="border-b last:border-0">
                    <td className="p-4 font-medium">{trade.pair}</td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          trade.type === "Buy"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-red-500/10 text-red-500"
                        }`}
                      >
                        {trade.type}
                      </span>
                    </td>
                    <td className="p-4">{trade.amount}</td>
                    <td className="p-4">{trade.price}</td>
                    <td className="p-4">{trade.total}</td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          trade.status === "Completed"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-yellow-500/10 text-yellow-500"
                        }`}
                      >
                        {trade.status}
                      </span>
                    </td>
                    <td className="p-4 text-muted-foreground">{trade.time}</td>
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
      </Card>
    </div>
  );
};

export default Trades;