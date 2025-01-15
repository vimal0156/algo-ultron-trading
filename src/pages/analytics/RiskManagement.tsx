import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, TrendingDown, TrendingUp, AlertTriangle } from "lucide-react";

const RiskManagement = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Risk Management</h1>
        <Button variant="outline" className="flex items-center gap-2">
          <Settings className="w-4 h-4" />
          Risk Settings
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Portfolio Risk</CardTitle>
            <AlertTriangle className="w-4 h-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Medium</div>
            <p className="text-xs text-muted-foreground">Based on current positions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Drawdown</CardTitle>
            <TrendingDown className="w-4 h-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-12.5%</div>
            <p className="text-xs text-muted-foreground">Maximum drawdown</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Risk/Reward</CardTitle>
            <TrendingUp className="w-4 h-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1:2.5</div>
            <p className="text-xs text-muted-foreground">Average ratio</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Position Risk Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Position</th>
                  <th className="text-left p-4">Size</th>
                  <th className="text-left p-4">Risk Level</th>
                  <th className="text-left p-4">Stop Loss</th>
                  <th className="text-left p-4">Take Profit</th>
                  <th className="text-right p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4">BTC/USDT</td>
                  <td className="p-4">0.5 BTC</td>
                  <td className="p-4">
                    <span className="px-2 py-1 rounded-full text-xs bg-yellow-500/10 text-yellow-500">
                      Medium
                    </span>
                  </td>
                  <td className="p-4">$41,250</td>
                  <td className="p-4">$44,500</td>
                  <td className="p-4 text-right">
                    <Button variant="ghost" size="sm">
                      Adjust
                    </Button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4">ETH/USDT</td>
                  <td className="p-4">5 ETH</td>
                  <td className="p-4">
                    <span className="px-2 py-1 rounded-full text-xs bg-red-500/10 text-red-500">
                      High
                    </span>
                  </td>
                  <td className="p-4">$2,150</td>
                  <td className="p-4">$2,450</td>
                  <td className="p-4 text-right">
                    <Button variant="ghost" size="sm">
                      Adjust
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RiskManagement;