import { Navigate, RouteObject } from 'react-router-dom';
import { DashboardLayout } from '@/components/DashboardLayout';
import Index from '@/pages/Index';
import Login from '@/pages/Login';
import Dashboard from '@/pages/Dashboard';
import Trades from '@/pages/Trades';
import SignalBots from '@/pages/trading/SignalBots';
import MyBots from '@/pages/trading/MyBots';
import Backtesting from '@/pages/trading/Backtesting';
import DCABots from '@/pages/trading/DCABots';
import GridBots from '@/pages/trading/GridBots';
import TradingViewBots from '@/pages/trading/TradingViewBots';
import BotBuilder from '@/pages/trading/BotBuilder';
import OptionsTrading from '@/pages/trading/OptionsTrading';
import AlgorithmicTrading from '@/pages/trading/AlgorithmicTrading';
import TradingAnalytics from '@/pages/analytics/TradingAnalytics';
import RiskManagement from '@/pages/analytics/RiskManagement';
import TradingJournal from '@/pages/journal/TradingJournal';
import MarketResearch from '@/pages/research/MarketResearch';
import NewsAnalysis from '@/pages/research/NewsAnalysis';
import Signals from '@/pages/monitoring/Signals';
import Watchlist from '@/pages/monitoring/Watchlist';
import Groups from '@/pages/other/Groups';
import Affiliation from '@/pages/other/Affiliation';
import Security from '@/pages/settings/Security';
import Notifications from '@/pages/settings/Notifications';
import Billing from '@/pages/settings/Billing';
import ApiIntegration from '@/pages/settings/ApiIntegration';
import Accounts from '@/pages/portfolio/Accounts';
import Assets from '@/pages/portfolio/Assets';
import PortfolioAnalytics from '@/pages/portfolio/PortfolioAnalytics';
import Features from '@/pages/Features';
import Pricing from '@/pages/Pricing';
import Exchanges from '@/pages/Exchanges';

// Public routes accessible without authentication
export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/features',
    element: <Features />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
  {
    path: '/exchanges',
    element: <Exchanges />,
  },
];

// Protected routes that require authentication
export const protectedRoutes: RouteObject[] = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'trades',
        element: <Trades />,
      },
      {
        path: 'portfolio',
        children: [
          {
            path: 'accounts',
            element: <Accounts />,
          },
          {
            path: 'assets',
            element: <Assets />,
          },
          {
            path: 'analytics',
            element: <PortfolioAnalytics />,
          },
        ],
      },
      {
        path: 'trading',
        children: [
          {
            path: 'signal-bots',
            element: <SignalBots />,
          },
          {
            path: 'my-bots',
            element: <MyBots />,
          },
          {
            path: 'backtesting',
            element: <Backtesting />,
          },
          {
            path: 'dca-bots',
            element: <DCABots />,
          },
          {
            path: 'grid-bots',
            element: <GridBots />,
          },
          {
            path: 'tradingview-bots',
            element: <TradingViewBots />,
          },
          {
            path: 'bot-builder',
            element: <BotBuilder />,
          },
          {
            path: 'options',
            element: <OptionsTrading />,
          },
          {
            path: 'algorithmic',
            element: <AlgorithmicTrading />,
          },
        ],
      },
      {
        path: 'analytics',
        children: [
          {
            path: 'trading',
            element: <TradingAnalytics />,
          },
          {
            path: 'risk',
            element: <RiskManagement />,
          },
        ],
      },
      {
        path: 'journal',
        element: <TradingJournal />,
      },
      {
        path: 'research',
        children: [
          {
            path: 'market',
            element: <MarketResearch />,
          },
          {
            path: 'news',
            element: <NewsAnalysis />,
          },
        ],
      },
      {
        path: 'monitoring',
        children: [
          {
            path: 'signals',
            element: <Signals />,
          },
          {
            path: 'watchlist',
            element: <Watchlist />,
          },
        ],
      },
      {
        path: 'other',
        children: [
          {
            path: 'groups',
            element: <Groups />,
          },
          {
            path: 'affiliation',
            element: <Affiliation />,
          },
        ],
      },
      {
        path: 'settings',
        children: [
          {
            path: 'security',
            element: <Security />,
          },
          {
            path: 'notifications',
            element: <Notifications />,
          },
          {
            path: 'billing',
            element: <Billing />,
          },
          {
            path: 'api',
            element: <ApiIntegration />,
          },
        ],
      },
      {
        path: '*',
        element: <Navigate to="/dashboard" replace />,
      },
    ],
  },
];
