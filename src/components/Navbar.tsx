import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { LogIn } from "lucide-react";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoginOpen(false);
    navigate("/login");
  };

  const handleStartTrial = () => {
    navigate("/signup");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              AlgoUltron
            </Link>
            <div className="hidden md:flex items-center space-x-8 ml-10">
              <Link 
                to="/features" 
                className="text-foreground hover:text-primary transition-colors"
              >
                Features
              </Link>
              <Link 
                to="/exchanges" 
                className="text-foreground hover:text-primary transition-colors"
              >
                Exchanges
              </Link>
              <Link 
                to="/pricing" 
                className="text-foreground hover:text-primary transition-colors"
              >
                Pricing
              </Link>
              <Link 
                to="/resources" 
                className="text-foreground hover:text-primary transition-colors"
              >
                Resources
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="hidden md:inline-flex"
              onClick={() => navigate("/login")}
            >
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
            <Button 
              className="glow"
              onClick={handleStartTrial}
            >
              Start Trial
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};