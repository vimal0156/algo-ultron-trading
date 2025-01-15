import { Message } from "@/types/chat";
import { Bot, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface MessageBubbleProps {
  message: Message;
  index: number;
}

export const MessageBubble = ({ message, index }: MessageBubbleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        className={`${
          message.role === "assistant"
            ? "bg-primary/5 border-primary/20"
            : "bg-secondary/5 border-secondary/20"
        }`}
      >
        <CardContent className="flex items-start gap-3 p-4">
          {message.role === "assistant" ? (
            <Bot className="w-6 h-6 mt-1 text-primary" />
          ) : (
            <User className="w-6 h-6 mt-1 text-secondary" />
          )}
          <div className="flex-1 space-y-2">
            <p className="leading-relaxed">{message.content}</p>
            {message.attachment && (
              <div className="mt-2">
                <img
                  src={message.attachment}
                  alt="Uploaded content"
                  className="max-w-[200px] rounded-lg border"
                />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};