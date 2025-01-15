import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, Link, Copy } from "lucide-react";
import { Input } from "@/components/ui/input";

const Affiliation = () => {
  const referrals = [
    {
      id: 1,
      user: "john.doe",
      date: "2024-02-15",
      status: "Active",
      earnings: "$125.50",
      trades: 45,
    },
    {
      id: 2,
      user: "crypto.trader",
      date: "2024-02-14",
      status: "Active",
      earnings: "$89.20",
      trades: 32,
    },
    {
      id: 3,
      user: "alice.trading",
      date: "2024-02-13",
      status: "Pending",
      earnings: "$0.00",
      trades: 0,
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Affiliation Program</h1>
        <Button className="flex items-center gap-2">
          <Users className="w-4 h-4" />
          View Statistics
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>
            <Users className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">15 active users</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$892.45</div>
            <p className="text-xs text-muted-foreground">+$145.20 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Commission Rate</CardTitle>
            <Link className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">20%</div>
            <p className="text-xs text-muted-foreground">Of trading fees</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-card rounded-lg border p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Referral Link</h2>
        <div className="flex gap-4">
          <Input
            value="https://algoultra.com/ref/your-username"
            readOnly
            className="flex-1"
          />
          <Button variant="outline" className="flex items-center gap-2">
            <Copy className="w-4 h-4" />
            Copy Link
          </Button>
        </div>
      </div>

      <div className="bg-card rounded-lg border">
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Recent Referrals</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">User</th>
                  <th className="text-left p-4">Join Date</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Earnings</th>
                  <th className="text-left p-4">Total Trades</th>
                  <th className="text-right p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {referrals.map((referral) => (
                  <tr key={referral.id} className="border-b last:border-0">
                    <td className="p-4 font-medium">{referral.user}</td>
                    <td className="p-4">{referral.date}</td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          referral.status === "Active"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-yellow-500/10 text-yellow-500"
                        }`}
                      >
                        {referral.status}
                      </span>
                    </td>
                    <td className="p-4">{referral.earnings}</td>
                    <td className="p-4">{referral.trades}</td>
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
      </div>
    </div>
  );
};

export default Affiliation;