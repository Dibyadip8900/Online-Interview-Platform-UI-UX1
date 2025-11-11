import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Send } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

interface Message {
  id: number;
  sender: "interviewer" | "candidate";
  text: string;
  time: string;
}

export function ChatSpace() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "interviewer",
      text: "Welcome! Feel free to ask any questions during the interview.",
      time: "10:00"
    },
    {
      id: 2,
      sender: "candidate",
      text: "Thank you! I'm ready to begin.",
      time: "10:01"
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        sender: "candidate",
        text: input,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setInput("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full border-t border-zinc-200 bg-white">
      <div className="px-3 py-2 border-b border-zinc-200 bg-zinc-50">
        <span className="text-sm text-zinc-700">Chat</span>
      </div>

      <ScrollArea className="flex-1 p-3">
        <div className="space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex flex-col ${
                message.sender === "candidate" ? "items-end" : "items-start"
              }`}
            >
              <div
                className={`max-w-[85%] rounded-lg px-3 py-2 ${
                  message.sender === "candidate"
                    ? "bg-blue-500 text-white"
                    : "bg-zinc-100 text-zinc-900"
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
              <span className="text-xs text-zinc-500 mt-1">{message.time}</span>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-3 border-t border-zinc-200">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 text-sm"
          />
          <Button size="icon" onClick={handleSend} disabled={!input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
