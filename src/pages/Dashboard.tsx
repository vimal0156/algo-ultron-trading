import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { 
  Search, Bell, Settings, ChevronDown, ArrowUpRight, ArrowDownRight,
  LayoutDashboard, Wallet, Database, Bot, LineChart as ChartIcon,
  Store, Signal, List, Users, Share2, Shield, BellRing, CreditCard,
  HelpCircle, MessageCircle, Instagram, Facebook, Linkedin, Twitter,
  Youtube, Smartphone, Grid2x2, History, Globe, Eye, Group, 
  ChevronRight, ArrowRight
} from 'lucide-react';

const mockData = [
  { time: '00:00', value: 32000 },
  { time: '04:00', value: 34000 },
  { time: '08:00', value: 31000 },
  { time: '12:00', value: 33000 },
  { time: '16:00', value: 35000 },
  { time: '20:00', value: 34500 },
  { time: '24:00', value: 35500 },
];

const marketData = [
  { pair: 'BTC/USDT', lastPrice: '42,354.23', change24h: '+2.34%', volume: '1.2B' },
  { pair: 'ETH/USDT', lastPrice: '2,245.12', change24h: '-1.23%', volume: '854M' },
  { pair: 'BNB/USDT', lastPrice: '312.45', change24h: '+0.45%', volume: '234M' },
  { pair: 'SOL/USDT', lastPrice: '98.32', change24h: '+5.67%', volume: '456M' },
  { pair: 'XRP/USDT', lastPrice: '0.5432', change24h: '-0.89%', volume: '123M' },
];

const sidebarItems = [
  { 
    title: 'Dashboard', 
    icon: LayoutDashboard,
    path: '/dashboard'
  },
  { 
    title: 'Trades', 
    icon: ChartIcon,
    path: '/trades'
  },
  {
    title: 'Portfolio',
    icon: Wallet,
    submenu: [
      { title: 'Accounts', icon: Users, path: '/portfolio/accounts' },
      { title: 'Assets', icon: Database, path: '/portfolio/assets' }
    ]
  },
  {
    title: 'Trading',
    icon: Bot,
    submenu: [
      { title: 'Signal Bots', icon: Signal, path: '/trading/signal-bots' },
      { title: 'My Bots', icon: Bot, path: '/trading/my-bots' },
      { title: 'Backtesting', icon: History, path: '/trading/backtesting' },
      { title: 'DCA Bots', icon: ArrowRight, path: '/trading/dca-bots' },
      { title: 'Public Bots', icon: Globe, path: '/trading/public-bots' },
      { title: 'Grid Bots', icon: Grid2x2, path: '/trading/grid-bots' },
      { title: 'TradingView Bots', icon: ChartIcon, path: '/trading/tradingview-bots' },
      { title: 'Trading Terminal', icon: LineChart, path: '/trading/terminal' },
      { title: 'Marketplace', icon: Store, path: '/trading/marketplace' }
    ]
  },
  {
    title: 'Monitoring',
    icon: Eye,
    submenu: [
      { title: 'Signals', icon: Signal, path: '/monitoring/signals' },
      { title: 'Watchlist & Markets', icon: List, path: '/monitoring/watchlist' }
    ]
  },
  {
    title: 'Other',
    icon: Group,
    submenu: [
      { title: 'My Groups', icon: Users, path: '/other/groups' },
      { title: 'Affiliation', icon: Share2, path: '/other/affiliation' },
      { 
        title: 'Settings',
        icon: Settings,
        submenu: [
          { title: 'Account & Security', icon: Shield, path: '/settings/security' },
          { title: 'Notifications Management', icon: BellRing, path: '/settings/notifications' },
          { title: 'Billing', icon: CreditCard, path: '/settings/billing' }
        ]
      }
    ]
  }
];

const socialLinks = [
  { title: 'Telegram', icon: MessageCircle, url: '#' },
  { title: 'Instagram', icon: Instagram, url: '#' },
  { title: 'Facebook', icon: Facebook, url: '#' },
  { title: 'LinkedIn', icon: Linkedin, url: '#' },
  { title: 'Twitter', icon: Twitter, url: '#' },
  { title: 'YouTube', icon: Youtube, url: '#' }
];

const mobileLinks = [
  { title: 'App Store', icon: Smartphone, url: '#' },
  { title: 'Google Play', icon: Smartphone, url: '#' }
];

const Dashboard = () => {
  const [activeSubmenu, setActiveSubmenu] = React.useState<string | null>(null);
  const [activeNestedSubmenu, setActiveNestedSubmenu] = React.useState<string | null>(null);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card overflow-y-auto">
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl">AlgoUltron</span>
          </div>
        </div>
        <nav className="p-4 space-y-1">
          {sidebarItems.map((item) => (
            <div key={item.title}>
              <Button
                variant={item.title === 'Dashboard' ? 'secondary' : 'ghost'}
                className="w-full justify-between"
                onClick={() => {
                  if (!item.path) {
                    setActiveSubmenu(activeSubmenu === item.title ? null : item.title);
                    if (activeSubmenu !== item.title) setActiveNestedSubmenu(null);
                  }
                }}
              >
                <div className="flex items-center gap-2">
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </div>
                {item.submenu && (
                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    activeSubmenu === item.title ? 'rotate-90' : ''
                  }`} />
                )}
              </Button>
              {item.submenu && activeSubmenu === item.title && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.submenu.map((subItem) => (
                    <div key={subItem.title}>
                      <Button
                        variant="ghost"
                        className="w-full justify-between pl-6"
                        onClick={() => {
                          if (subItem.submenu) {
                            setActiveNestedSubmenu(
                              activeNestedSubmenu === subItem.title ? null : subItem.title
                            );
                          }
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <subItem.icon className="w-4 h-4" />
                          <span>{subItem.title}</span>
                        </div>
                        {subItem.submenu && (
                          <ChevronRight className={`w-4 h-4 transition-transform ${
                            activeNestedSubmenu === subItem.title ? 'rotate-90' : ''
                          }`} />
                        )}
                      </Button>
                      {subItem.submenu && activeNestedSubmenu === subItem.title && (
                        <div className="ml-4 mt-1 space-y-1">
                          {subItem.submenu.map((nestedItem) => (
                            <Button
                              key={nestedItem.title}
                              variant="ghost"
                              className="w-full justify-start pl-8"
                            >
                              <nestedItem.icon className="w-4 h-4 mr-2" />
                              <span>{nestedItem.title}</span>
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Support Section */}
        <div className="p-4 border-t border-border">
          <Button variant="ghost" className="w-full justify-start mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            <span>How to use | Support</span>
          </Button>
          
          {/* Social Links */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {socialLinks.map((link) => (
              <Button
                key={link.title}
                variant="ghost"
                size="icon"
                className="w-full h-8"
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <link.icon className="w-4 h-4" />
                </a>
              </Button>
            ))}
          </div>

          {/* Mobile Links */}
          <div className="flex gap-2">
            {mobileLinks.map((link) => (
              <Button
                key={link.title}
                variant="outline"
                size="sm"
                className="flex-1"
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <link.icon className="w-4 h-4 mr-1" />
                  {link.title}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="border-b border-border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-muted rounded-md w-64"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="gap-2">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" className="w-6 h-6 rounded-full" />
                <span>Account</span>
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Trading View */}
        <div className="grid grid-cols-12 gap-4 p-4">
          {/* Chart Section */}
          <Card className="col-span-8 p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold">BTC/USDT</h2>
                <p className="text-muted-foreground">Bitcoin</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">$35,245.00</span>
                <span className="text-green-500 flex items-center">
                  <ArrowUpRight className="w-4 h-4" />
                  2.34%
                </span>
              </div>
            </div>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockData}>
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Account Overview */}
          <Card className="col-span-4 p-4">
            <h2 className="text-xl font-bold mb-4">Account Overview</h2>
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-muted-foreground">Total Balance</p>
                <p className="text-2xl font-bold">$124,523.45</p>
                <div className="flex items-center gap-2 text-green-500">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>+2.34% ($2,345)</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-muted-foreground">24h Volume</p>
                  <p className="font-bold">$45,234</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-muted-foreground">Open Orders</p>
                  <p className="font-bold">12</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Market Overview */}
          <Card className="col-span-12 p-4">
            <h2 className="text-xl font-bold mb-4">Markets</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-2">Pair</th>
                    <th className="text-right p-2">Last Price</th>
                    <th className="text-right p-2">24h Change</th>
                    <th className="text-right p-2">24h Volume</th>
                  </tr>
                </thead>
                <tbody>
                  {marketData.map((market) => (
                    <tr key={market.pair} className="border-b border-border hover:bg-muted/50">
                      <td className="p-2">{market.pair}</td>
                      <td className="text-right p-2">${market.lastPrice}</td>
                      <td className={`text-right p-2 ${market.change24h.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {market.change24h}
                      </td>
                      <td className="text-right p-2">${market.volume}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
