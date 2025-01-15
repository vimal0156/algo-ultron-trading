import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileText, TrendingUp, TrendingDown } from "lucide-react";

const TradingJournal = () => {
  const trades = [
    {
      id: 1,
      pair: "BTC/USDT",
      type: "Long",
      entry: 45000,
      exit: 47000,
      pnl: "+4.44%",
      date: "2024-03-15",
      notes: "Strong breakout above resistance, followed trend",
    },
    {
      id: 2,
      pair: "ETH/USDT",
      type: "Short",
      entry: 2800,
      exit: 2600,
      pnl: "+7.14%",
      date: "2024-03-14",
      notes: "RSI divergence on 4h timeframe",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Trading Journal</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Trade
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Trades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">156</div>
            <p className="text-sm text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Win Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-500">68.5%</div>
            <p className="text-sm text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Average RRR</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1:2.5</div>
            <p className="text-sm text-muted-foreground">Risk-Reward Ratio</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Net P&L</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-500">+$12,450</div>
            <p className="text-sm text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Trades</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Date</th>
                  <th className="text-left p-4">Pair</th>
                  <th className="text-left p-4">Type</th>
                  <th className="text-left p-4">Entry</th>
                  <th className="text-left p-4">Exit</th>
                  <th className="text-left p-4">P&L</th>
                  <th className="text-left p-4">Notes</th>
                  <th className="text-right p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {trades.map((trade) => (
                  <tr key={trade.id} className="border-b last:border-0">
                    <td className="p-4">{trade.date}</td>
                    <td className="p-4 font-medium">{trade.pair}</td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center ${
                          trade.type === "Long" ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {trade.type === "Long" ? (
                          <TrendingUp className="w-4 h-4 mr-1" />
                        ) : (
                          <TrendingDown className="w-4 h-4 mr-1" />
                        )}
                        {trade.type}
                      </span>
                    </td>
                    <td className="p-4">{trade.entry}</td>
                    <td className="p-4">{trade.exit}</td>
                    <td className="p-4">
                      <span
                        className={trade.pnl.startsWith("+")
                          ? "text-green-500"
                          : "text-red-500"}
                      >
                        {trade.pnl}
                      </span>
                    </td>
                    <td className="p-4 max-w-xs truncate">{trade.notes}</td>
                    <td className="p-4 text-right">
                      <Button variant="ghost" size="sm">
                        <FileText className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TradingJournal;