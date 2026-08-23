"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  id: string;
}

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/chat/`;

export default function AmaraChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Amara, Amaryllis Success's AI assistant. Ask me about our company, products, or services.",
      id: "welcome",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sessionId = useRef<string>(
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : Math.random().toString(36).slice(2)
  ).current;

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text) return;

    const userMsg: Message = { role: "user", content: text, id: Date.now().toString() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: sessionId, message: text }),
      });

      if (!res.ok) throw new Error(`Chat request failed: ${res.status}`);

      const data: { reply: string } = await res.json();
      const botMsg: Message = { role: "assistant", content: data.reply, id: (Date.now() + 1).toString() };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const errMsg: Message = {
        role: "assistant",
        content:
          "I'm having trouble connecting right now. Please reach us directly at support@amaryllissuccess.co.zw or WhatsApp +263 786 176 284.",
        id: (Date.now() + 1).toString(),
      };
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg shadow-brand-purple/30"
            style={{ background: "linear-gradient(135deg, #7B2FBE 0%, #C2449F 60%, #F5821F 100%)" }}
            aria-label="Open chat"
          >
            <MessageCircle size={26} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 w-[92vw] max-w-[380px] h-[500px] md:h-[520px] rounded-2xl overflow-hidden flex flex-col bg-midnight-900 border border-white/10 shadow-2xl"
          >
            <div
              className="flex items-center justify-between px-4 py-3 shrink-0"
              style={{ background: "linear-gradient(135deg, #7B2FBE 0%, #C2449F 60%, #F5821F 100%)" }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Amara</div>
                  <div className="text-[10px] text-white/80">AI Assistant</div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <X size={18} className="text-white" />
              </button>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-3 no-scrollbar"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                      msg.role === "assistant"
                        ? "bg-brand-purple/20"
                        : "bg-white/10"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <Bot size={14} className="text-brand-purple" />
                    ) : (
                      <User size={14} className="text-white/70" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "assistant"
                        ? "bg-white/5 text-white/90 rounded-tl-sm"
                        : "bg-brand-purple/20 text-white rounded-tr-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-brand-purple/20 flex items-center justify-center shrink-0">
                    <Bot size={14} className="text-brand-purple" />
                  </div>
                  <div className="bg-white/5 px-4 py-2.5 rounded-2xl rounded-tl-sm">
                    <Loader2 size={16} className="text-white/50 animate-spin" />
                  </div>
                </div>
              )}
            </div>

            <div className="px-3 py-3 border-t border-white/5 bg-midnight-900 shrink-0">
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/5 focus-within:border-brand-purple/30 transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-midnight-400 outline-none"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || typing}
                  className="p-1.5 rounded-full bg-brand-purple/20 hover:bg-brand-purple/30 disabled:opacity-30 disabled:hover:bg-brand-purple/20 transition-colors"
                  aria-label="Send message"
                >
                  <Send size={16} className="text-brand-purple" />
                </button>
              </div>
              <p className="text-[10px] text-midnight-400 text-center mt-1.5">
                Amara may produce inaccurate information.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
