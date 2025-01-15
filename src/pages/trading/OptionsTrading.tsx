import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, Bar } from 'recharts';
import { ArrowUpDown, TrendingUp, DollarSign, Activity } from "lucide-react";

const data = [
  { strike: 40, callPrice: 2.5, putPrice: 1.8, volume: 1500 },
  { strike: 42, callPrice: 1.8, putPrice: 2.2, volume: 2200 },
  { strike: 44, callPrice: 1.2, putPrice: 2.8, volume: 1800 },
  { strike: 46, callPrice: 0.8, putPrice: 3.5, volume: 1200 },
  { strike: 48, callPrice: 0.5, putPrice: 4.2, volume: 900 },
];

const OptionsTrading = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Options Trading</h1>
        <Button>
          <ArrowUpDown className="w-4 h-4 mr-2" />
          New Position
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Options Portfolio Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$124,500</div>
            <p className="text-sm text-green-500 flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              +5.2% today
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Premium Collected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$8,250</div>
            <p className="text-sm text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Greeks Exposure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Delta:</span>
                <span>0.45</span>
              </div>
              <div className="flex justify-between">
                <span>Theta:</span>
                <span>-0.15</span>
              </div>
              <div className="flex justify-between">
                <span>Vega:</span>
                <span>0.22</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Options Chain</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="strike" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="callPrice" stroke="#8884d8" name="Call Price" />
                  <Line type="monotone" dataKey="putPrice" stroke="#82ca9d" name="Put Price" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Volume Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="strike" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="volume" fill="#8884d8" name="Trading Volume" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OptionsTrading;