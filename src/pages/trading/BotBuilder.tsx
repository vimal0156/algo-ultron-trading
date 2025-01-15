import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Code, Settings, Play } from "lucide-react";

const BotBuilder = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Bot Builder</h1>
        <div className="space-x-2">
          <Button variant="outline">
            <Code className="w-4 h-4 mr-2" />
            Export Code
          </Button>
          <Button>
            <Play className="w-4 h-4 mr-2" />
            Test Bot
          </Button>
        </div>
      </div>

      <Tabs defaultValue="strategy" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="strategy">Strategy</TabsTrigger>
          <TabsTrigger value="conditions">Conditions</TabsTrigger>
          <TabsTrigger value="backtest">Backtest</TabsTrigger>
        </TabsList>

        <TabsContent value="strategy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Strategy Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Strategy Name</label>
                  <input type="text" className="w-full mt-1 p-2 border rounded" placeholder="Enter strategy name" />
                </div>
                <div>
                  <label className="text-sm font-medium">Trading Pair</label>
                  <select className="w-full mt-1 p-2 border rounded">
                    <option>BTC/USDT</option>
                    <option>ETH/USDT</option>
                    <option>SOL/USDT</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Timeframe</label>
                  <select className="w-full mt-1 p-2 border rounded">
                    <option>1m</option>
                    <option>5m</option>
                    <option>15m</option>
                    <option>1h</option>
                    <option>4h</option>
                    <option>1d</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conditions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Trading Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Entry Condition</label>
                  <select className="w-full mt-1 p-2 border rounded">
                    <option>RSI crosses below 30</option>
                    <option>MACD crossover</option>
                    <option>Price above MA</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Exit Condition</label>
                  <select className="w-full mt-1 p-2 border rounded">
                    <option>RSI crosses above 70</option>
                    <option>MACD crossunder</option>
                    <option>Price below MA</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Stop Loss</label>
                  <input type="number" className="w-full mt-1 p-2 border rounded" placeholder="Enter stop loss %" />
                </div>
                <div>
                  <label className="text-sm font-medium">Take Profit</label>
                  <input type="number" className="w-full mt-1 p-2 border rounded" placeholder="Enter take profit %" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backtest" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Backtest Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Start Date</label>
                  <input type="date" className="w-full mt-1 p-2 border rounded" />
                </div>
                <div>
                  <label className="text-sm font-medium">End Date</label>
                  <input type="date" className="w-full mt-1 p-2 border rounded" />
                </div>
                <div>
                  <label className="text-sm font-medium">Initial Capital</label>
                  <input type="number" className="w-full mt-1 p-2 border rounded" placeholder="Enter initial capital" />
                </div>
                <Button className="w-full">
                  <Play className="w-4 h-4 mr-2" />
                  Run Backtest
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BotBuilder;