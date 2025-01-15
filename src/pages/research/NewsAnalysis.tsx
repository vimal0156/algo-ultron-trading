import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AlertCircle, TrendingUp, Newspaper, BarChart3 } from "lucide-react";

const mockSentimentData = [
  { date: "2024-01-01", sentiment: 0.8 },
  { date: "2024-01-02", sentiment: 0.6 },
  { date: "2024-01-03", sentiment: 0.9 },
  { date: "2024-01-04", sentiment: 0.7 },
  { date: "2024-01-05", sentiment: 0.85 },
];

const mockNews = [
  {
    id: 1,
    title: "Bitcoin Surges Past $50,000 Mark",
    sentiment: "positive",
    source: "CryptoNews",
    timestamp: "2h ago",
  },
  {
    id: 2,
    title: "New Regulations Impact Crypto Markets",
    sentiment: "neutral",
    source: "Financial Times",
    timestamp: "4h ago",
  },
  {
    id: 3,
    title: "Market Volatility Increases",
    sentiment: "negative",
    source: "Trading View",
    timestamp: "6h ago",
  },
];

const NewsAnalysis = () => {
  const [activeTab, setActiveTab] = useState("news");

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "bg-green-500/10 text-green-500";
      case "negative":
        return "bg-red-500/10 text-red-500";
      default:
        return "bg-yellow-500/10 text-yellow-500";
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">News Analysis</h1>
        <Alert className="w-fit">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Market Sentiment</AlertTitle>
          <AlertDescription>
            Current market sentiment is bullish
          </AlertDescription>
        </Alert>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
          <TabsTrigger value="news">
            <Newspaper className="mr-2 h-4 w-4" />
            News Feed
          </TabsTrigger>
          <TabsTrigger value="sentiment">
            <BarChart3 className="mr-2 h-4 w-4" />
            Sentiment Analysis
          </TabsTrigger>
        </TabsList>

        <TabsContent value="news" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5" />
                Latest Market News
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-4">
                  {mockNews.map((news) => (
                    <Card key={news.id} className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <h3 className="font-semibold">{news.title}</h3>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <span>{news.source}</span>
                            <span>•</span>
                            <span>{news.timestamp}</span>
                          </div>
                        </div>
                        <Badge className={getSentimentColor(news.sentiment)}>
                          {news.sentiment}
                        </Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sentiment">
          <Card>
            <CardHeader>
              <CardTitle>Sentiment Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockSentimentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="sentiment"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NewsAnalysis;