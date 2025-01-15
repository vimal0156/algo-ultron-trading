import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ApiIntegration = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">API Integration</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>API Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Manage your API keys and integrations.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApiIntegration;