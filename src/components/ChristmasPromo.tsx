import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export const ChristmasPromo = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 text-sm md:text-base">
        <span className="animate-pulse text-primary">🎄</span>
        <p className="font-medium">
          Christmas is Here! Enjoy <span className="text-secondary font-bold">50% OFF</span> for any Annual Package!
        </p>
        <Button variant="secondary" size="sm" className="whitespace-nowrap glow">
          Buy Now
        </Button>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:text-primary transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};