import {
  LayoutDashboard,
  LineChart,
  Wallet,
  Bot,
  Activity,
  Users,
  Share2,
  Settings,
  HelpCircle,
  Apple,
  Smartphone,
  MessageCircle,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  FileText,
  ChevronRight
} from "lucide-react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

export const DashboardSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;
  const isSubActive = (path: string) => location.pathname.startsWith(path);

  const handleNavigation = (path: string) => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <aside className="w-64 border-r border-border bg-card overflow-y-auto">
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-bold text-xl">AlgoUltron</Link>
        </div>
      </div>

      <nav className="p-4 space-y-1">
        {/* Main Navigation */}
        <Button
          variant={isActive("/dashboard") ? "secondary" : "ghost"}
          className="w-full justify-start"
          onClick={() => handleNavigation("/dashboard")}
        >
          <LayoutDashboard className="w-4 h-4 mr-2" />
          <span>Dashboard</span>
        </Button>

        <Button
          variant={isActive("/trades") ? "secondary" : "ghost"}
          className="w-full justify-start"
          onClick={() => handleNavigation("/trades")}
        >
          <LineChart className="w-4 h-4 mr-2" />
          <span>Trades</span>
        </Button>

        {/* Portfolio Section */}
        <div className="pt-4">
          <div className="text-sm font-medium text-muted-foreground px-2 pb-2">Portfolio</div>
          <div className="space-y-1">
            <Button
              variant={isActive("/portfolio/accounts") ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => handleNavigation("/portfolio/accounts")}
            >
              <Users className="w-4 h-4 mr-2" />
              <span>Accounts</span>
            </Button>
            <Button
              variant={isActive("/portfolio/assets") ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => handleNavigation("/portfolio/assets")}
            >
              <Wallet className="w-4 h-4 mr-2" />
              <span>Assets</span>
            </Button>
          </div>
        </div>

        {/* Trading Section */}
        <div className="pt-4">
          <div className="text-sm font-medium text-muted-foreground px-2 pb-2">Trading</div>
          <div className="space-y-1">
            <Button
              variant={isActive("/trading/signal-bots") ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => handleNavigation("/trading/signal-bots")}
            >
              <Bot className="w-4 h-4 mr-2" />
              <span>Signal Bots</span>
            </Button>
            <Button
              variant={isActive("/trading/my-bots") ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => handleNavigation("/trading/my-bots")}
            >
              <Bot className="w-4 h-4 mr-2" />
              <span>My Bots</span>
            </Button>
            <Button
              variant={isActive("/trading/backtesting") ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => handleNavigation("/trading/backtesting")}
            >
              <Activity className="w-4 h-4 mr-2" />
              <span>Backtesting</span>
            </Button>
            <Button
              variant={isActive("/trading/dca-bots") ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => handleNavigation("/trading/dca-bots")}
            >
              <Bot className="w-4 h-4 mr-2" />
              <span>DCA Bots</span>
            </Button>
            <Button
              variant={isActive("/trading/grid-bots") ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => handleNavigation("/trading/grid-bots")}
            >
              <Bot className="w-4 h-4 mr-2" />
              <span>Grid Bots</span>
            </Button>
            <Button
              variant={isActive("/trading/tradingview-bots") ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => handleNavigation("/trading/tradingview-bots")}
            >
              <Bot className="w-4 h-4 mr-2" />
              <span>TradingView Bots</span>
            </Button>
            <Button
              variant={isActive("/trading/bot-builder") ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => handleNavigation("/trading/bot-builder")}
            >
              <Bot className="w-4 h-4 mr-2" />
              <span>Bot Builder</span>
            </Button>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="pt-4">
          <div className="text-sm font-medium text-muted-foreground px-2 pb-2">Analytics</div>
          <div className="space-y-1">
            <Button
              variant={isActive("/analytics/trading") ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => handleNavigation("/analytics/trading")}
            >
              <LineChart className="w-4 h-4 mr-2" />
              <span>Trading Analytics</span>
            </Button>
            <Button
              variant={isActive("/analytics/risk") ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => handleNavigation("/analytics/risk")}
            >
              <Activity className="w-4 h-4 mr-2" />
              <span>Risk Management</span>
            </Button>
          </div>
        </div>

        {/* Support Section */}
        <div className="pt-4 border-t border-border mt-4">
          <Button variant="ghost" className="w-full justify-start mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            <span>How to use | Support</span>
          </Button>
          
          {/* Social Links */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <Button variant="ghost" size="icon" className="w-full h-8">
              <MessageCircle className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-full h-8">
              <Instagram className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-full h-8">
              <Facebook className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-full h-8">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-full h-8">
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-full h-8">
              <Youtube className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Links */}
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              <Apple className="w-4 h-4 mr-1" />
              App Store
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <Smartphone className="w-4 h-4 mr-1" />
              Google Play
            </Button>
          </div>
        </div>
      </nav>
    </aside>
  );
};
