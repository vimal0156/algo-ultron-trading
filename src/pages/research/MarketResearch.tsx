import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MarketResearch = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Market Research</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Market Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Comprehensive market analysis and insights.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MarketResearch;