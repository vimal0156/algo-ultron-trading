import { DashboardSidebar } from "./DashboardSidebar";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { ChatButton } from "./chat/ChatButton";

export const DashboardLayout = () => {
  const location = useLocation();

  // List of valid dashboard routes
  const validRoutes = [
    '/dashboard',
    '/trades',
    '/portfolio/accounts',
    '/portfolio/assets',
    '/portfolio/analytics',
    '/trading/signal-bots',
    '/trading/my-bots',
    '/trading/backtesting',
    '/trading/dca-bots',
    '/trading/grid-bots',
    '/trading/tradingview-bots',
    '/trading/bot-builder',
    '/trading/options',
    '/trading/algorithmic',
    '/analytics/trading',
    '/analytics/risk',
    '/journal',
    '/research/market',
    '/research/news',
    '/monitoring/signals',
    '/monitoring/watchlist',
    '/other/groups',
    '/other/affiliation',
    '/settings/security',
    '/settings/notifications',
    '/settings/billing',
    '/settings/api'
  ];

  // Check if current route is valid
  const currentPath = location.pathname;
  if (!validRoutes.some(route => currentPath.startsWith(route))) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      <DashboardSidebar />
      <main className="flex-1 overflow-y-auto bg-background">
        <div className="container mx-auto p-6">
          <Outlet />
        </div>
      </main>
      <ChatButton />
    </div>
  );
};