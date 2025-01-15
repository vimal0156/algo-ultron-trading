import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, DollarSign, Receipt, Clock } from "lucide-react";

const Billing = () => {
  const invoices = [
    {
      id: "INV-001",
      date: "Feb 15, 2024",
      amount: "$49.99",
      status: "Paid",
      plan: "Pro Plan",
    },
    {
      id: "INV-002",
      date: "Jan 15, 2024",
      amount: "$49.99",
      status: "Paid",
      plan: "Pro Plan",
    },
    {
      id: "INV-003",
      date: "Dec 15, 2023",
      amount: "$49.99",
      status: "Paid",
      plan: "Pro Plan",
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Billing & Subscription</h1>
        <Button className="flex items-center gap-2">
          <Receipt className="w-4 h-4" />
          Download All Invoices
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Current Plan</CardTitle>
            <DollarSign className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Pro Plan</div>
            <p className="text-xs text-muted-foreground">$49.99/month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Next Billing</CardTitle>
            <Clock className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Mar 15, 2024</div>
            <p className="text-xs text-muted-foreground">Auto-renewal enabled</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Payment Method</CardTitle>
            <CreditCard className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">•••• 4242</div>
            <p className="text-xs text-muted-foreground">Expires 08/2025</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Subscription Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-medium">Plan Features</div>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  <li>Unlimited Trading Bots</li>
                  <li>Advanced Analytics</li>
                  <li>Priority Support</li>
                  <li>API Access</li>
                </ul>
              </div>
              <div>
                <div className="text-sm font-medium">Usage</div>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  <li>8/10 Active Bots</li>
                  <li>150GB/200GB Storage</li>
                  <li>24/7 Support Access</li>
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <Button className="flex-1">Upgrade Plan</Button>
              <Button variant="outline" className="flex-1">Cancel Subscription</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <CreditCard className="w-8 h-8 text-primary" />
                <div>
                  <div className="font-medium">Visa ending in 4242</div>
                  <div className="text-sm text-muted-foreground">Expires 08/2025</div>
                </div>
              </div>
              <Button variant="ghost">Edit</Button>
            </div>
            <Button variant="outline" className="w-full">Add Payment Method</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Billing History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Invoice</th>
                    <th className="text-left p-4">Date</th>
                    <th className="text-left p-4">Amount</th>
                    <th className="text-left p-4">Plan</th>
                    <th className="text-left p-4">Status</th>
                    <th className="text-right p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice) => (
                    <tr key={invoice.id} className="border-b last:border-0">
                      <td className="p-4 font-medium">{invoice.id}</td>
                      <td className="p-4">{invoice.date}</td>
                      <td className="p-4">{invoice.amount}</td>
                      <td className="p-4">{invoice.plan}</td>
                      <td className="p-4">
                        <span className="px-2 py-1 rounded-full text-xs bg-green-500/10 text-green-500">
                          {invoice.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <Button variant="ghost" size="sm">
                          Download
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
    </div>
  );
};

export default Billing;