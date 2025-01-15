import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Upload, Image, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

interface ChatInputProps {
  onSend: (message: string, attachment: File | null) => void;
  isLoading: boolean;
}

export const ChatInput = ({ onSend, isLoading }: ChatInputProps) => {
  const [input, setInput] = useState("");
  const [attachment, setAttachment] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Error",
          description: "File size should be less than 5MB",
          variant: "destructive",
        });
        return;
      }
      setAttachment(file);
      toast({
        title: "File attached",
        description: "Your file has been attached successfully.",
      });
    }
  };

  const handleSend = () => {
    if (!input.trim() && !attachment) return;
    onSend(input, attachment);
    setInput("");
    setAttachment(null);
  };

  return (
    <div className="p-4 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {attachment && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-2 p-2 bg-muted rounded-lg flex items-center gap-2"
        >
          <Image className="w-4 h-4" />
          <span className="text-sm truncate">{attachment.name}</span>
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto h-8 w-8 hover:text-destructive"
            onClick={() => setAttachment(null)}
          >
            <X className="w-4 h-4" />
          </Button>
        </motion.div>
      )}
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything about trading..."
          onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
          className="flex-1"
          disabled={isLoading}
        />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileUpload}
          accept="image/*"
          className="hidden"
        />
        <Button
          variant="outline"
          size="icon"
          onClick={() => fileInputRef.current?.click()}
          disabled={isLoading}
          className="hover:bg-primary/10"
        >
          <Upload className="w-4 h-4" />
        </Button>
        <Button
          onClick={handleSend}
          disabled={isLoading}
          className="bg-primary hover:bg-primary/90"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};