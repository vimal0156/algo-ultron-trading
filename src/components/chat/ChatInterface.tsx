import { useState, useRef, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { AnimatePresence } from "framer-motion";
import { Message } from "@/types/chat";
import { Card, CardContent } from "@/components/ui/card";
import { MessageBubble } from "./MessageBubble";
import { ChatInput } from "./ChatInput";
import { ChatHeader } from "./ChatHeader";

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "👋 Hi! I'm your AI trading assistant. How can I help you today?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  // Simple response generation function
  const generateResponse = async (userMessage: string) => {
    // For now, return a simple response based on keywords
    const lowercaseMessage = userMessage.toLowerCase();
    if (lowercaseMessage.includes("trading")) {
      return "I can help you with trading! What specific aspect would you like to know more about?";
    } else if (lowercaseMessage.includes("bot")) {
      return "Our trading bots are designed to help automate your trading strategy. Would you like to learn more about our different bot types?";
    } else if (lowercaseMessage.includes("price") || lowercaseMessage.includes("market")) {
      return "I can help you analyze market trends and price movements. What specific market are you interested in?";
    } else {
      return "I'm here to help with your trading needs. Could you please be more specific about what you'd like to know?";
    }
  };

  const handleSend = async (input: string, attachment: File | null) => {
    if (!input.trim() && !attachment) return;

    const userMessage: Message = {
      role: "user",
      content: input,
      attachment: attachment ? URL.createObjectURL(attachment) : undefined,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setIsTyping(true);

    try {
      // Add a small delay to simulate processing
      await new Promise(resolve => setTimeout(resolve, 1000));
      const response = await generateResponse(input);
      
      const botMessage: Message = {
        role: "assistant",
        content: response,
      };
      
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error generating response:", error);
      toast({
        title: "Error",
        description: "Failed to generate response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-background">
      <ChatHeader />

      <ScrollArea ref={scrollAreaRef} className="flex-1 p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message, index) => (
            <MessageBubble key={index} message={message} index={index} />
          ))}
        </AnimatePresence>
        
        {isTyping && (
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="flex items-center gap-2 p-4">
              <Bot className="w-6 h-6 text-primary" />
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </CardContent>
          </Card>
        )}
      </ScrollArea>

      <ChatInput onSend={handleSend} isLoading={isLoading} />
    </div>
  );
};