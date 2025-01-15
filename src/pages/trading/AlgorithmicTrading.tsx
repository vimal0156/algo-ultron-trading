import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line } from 'recharts';
import { Code, Play, Pause, Settings, Activity } from "lucide-react";

const performanceData = [
  { timestamp: '09:30', returns: 0.5, trades: 12 },
  { timestamp: '10:00', returns: 1.2, trades: 18 },
  { timestamp: '10:30', returns: 0.8, trades: 15 },
  { timestamp: '11:00', returns: 1.5, trades: 22 },
  { timestamp: '11:30', returns: 1.8, trades: 20 },
];

const AlgorithmicTrading = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Algorithmic Trading</h1>
        <div className="space-x-2">
          <Button variant="outline">
            <Code className="w-4 h-4 mr-2" />
            Edit Algorithm
          </Button>
          <Button>
            <Play className="w-4 h-4 mr-2" />
            Deploy
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Active Algorithms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-sm text-muted-foreground">3 in development</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Today's P&L</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">+$3,250</div>
            <p className="text-sm text-muted-foreground">87 trades</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">Operational</div>
            <p className="text-sm text-muted-foreground">99.9% uptime</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Algorithm Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="returns" stroke="#8884d8" name="Returns %" />
                <Line yAxisId="right" type="monotone" dataKey="trades" stroke="#82ca9d" name="Number of Trades" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Active Algorithms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Mean Reversion #{i}</h3>
                    <p className="text-sm text-muted-foreground">BTC/USDT, 5m timeframe</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Settings className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Pause className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 border rounded-lg">
                <span>Sharpe Ratio</span>
                <span className="font-medium">2.1</span>
              </div>
              <div className="flex justify-between items-center p-4 border rounded-lg">
                <span>Max Drawdown</span>
                <span className="font-medium text-red-500">-12.5%</span>
              </div>
              <div className="flex justify-between items-center p-4 border rounded-lg">
                <span>Win Rate</span>
                <span className="font-medium text-green-500">68.5%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AlgorithmicTrading;