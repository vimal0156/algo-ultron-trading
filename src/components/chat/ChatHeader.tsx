import { Bot, Sparkles } from "lucide-react";

export const ChatHeader = () => {
  return (
    <div className="p-4 border-b bg-primary/5">
      <h2 className="text-xl font-semibold flex items-center gap-2 text-primary">
        <Bot className="w-6 h-6" />
        AI Trading Assistant
        <Sparkles className="w-4 h-4 ml-2 text-yellow-500" />
      </h2>
    </div>
  );
};