"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  id: string;
}

const KNOWLEDGE_BASE: Record<string, string> = {
  // Greetings
  "hi": "Hello! I'm Amara, Amaryllis Success's AI assistant. How can I help you today?",
  "hello": "Hello! I'm Amara, Amaryllis Success's AI assistant. How can I help you today?",
  "hey": "Hey there! I'm Amara. Ask me anything about Amaryllis Success, our products, or services.",

  // Company
  "what is amaryllis": "Amaryllis Success is a Zimbabwean technology company that builds AI-powered products and delivers expert services across agriculture, construction, and digital transformation.",
  "who is amaryllis": "Amaryllis Success Private Limited is a Zimbabwe-based tech company founded to solve real African business problems with AI and digital tools.",
  "about amaryllis": "We operate across 4 business units: AI & Digital Transformation, Enterprise IT, Smart Agriculture, and Engineering & Construction. We're headquartered in Harare, Zimbabwe.",
  "where are you located": "We're based in Harare, Zimbabwe, and serve clients across Southern and East Africa.",
  "contact": "You can reach us at admin@amaryllissuccess.co.zw or visit our Contact page to send a message directly.",
  "email": "Our email is admin@amaryllissuccess.co.zw. You can also use the contact form on our website.",

  // Products
  "mudhumeni": "Mudhumeni is our AI-powered farming assistant. It provides real-time crop monitoring, disease detection, market prices, and irrigation scheduling — built specifically for Zimbabwean farmers.",
  "what is mudhumeni": "Mudhumeni is our AI-powered farming assistant. It provides real-time crop monitoring, disease detection, market prices, and irrigation scheduling — built specifically for Zimbabwean farmers.",

  "lexai": "LexAI is our legal AI tool. It helps Zimbabwean legal practitioners with automated legal research, case law analysis, and document drafting.",
  "lex ai": "LexAI is our legal AI tool. It helps Zimbabwean legal practitioners with automated legal research, case law analysis, and document drafting.",

  "autoboq": "AutoBOQ is our smart Bill of Quantities generator. It uses AI to automate cost estimation and material scheduling for construction projects.",
  "boq": "AutoBOQ is our smart Bill of Quantities generator. It uses AI to automate cost estimation and material scheduling for construction projects.",

  "documind": "DocuMind is our intelligent document processing AI. It extracts, classifies, and analyzes documents with enterprise-grade accuracy and local compliance.",

  "amara": "That's me! I'm Amara, the AI business assistant for Amaryllis Success. I can answer questions about our company, products, and services.",

  // Services
  "services": "We offer 5 core services: (1) AI & Digital Transformation, (2) Enterprise IT & Managed Services, (3) Smart Agriculture & AgriTech, (4) Engineering & Civil Construction, and (5) Research & Innovation.",
  "what services": "We offer 5 core services: AI & Digital Transformation, Enterprise IT, Smart Agriculture, Engineering & Construction, and Research & Innovation.",

  "agriculture": "Our Smart Agriculture services include precision farming advisory, IoT deployment, agricultural AI, and our Mudhumeni app for farmers.",
  "construction": "We provide site management, BOQ preparation, road construction, civil infrastructure, and equipment logistics services.",
  "it services": "Our Enterprise IT services include infrastructure design, cloud migration, cybersecurity, system integration, 24/7 support, and disaster recovery.",

  // Pricing / Business
  "price": "Pricing varies by project scope. Please contact us at admin@amaryllissuccess.co.zw or fill out the contact form for a custom quote.",
  "pricing": "Pricing varies by project scope. Please contact us at admin@amaryllissuccess.co.zw or fill out the contact form for a custom quote.",
  "cost": "Pricing varies by project scope. Please contact us at admin@amaryllissuccess.co.zw or fill out the contact form for a custom quote.",
  "how much": "Pricing varies by project scope. Please contact us at admin@amaryllissuccess.co.zw or fill out the contact form for a custom quote.",

  // Careers
  "careers": "We're always looking for talented people! Send your CV to admin@amaryllissuccess.co.zw with the subject line 'Careers'.",
  "jobs": "We're always looking for talented people! Send your CV to admin@amaryllissuccess.co.zw with the subject line 'Careers'.",
  "hiring": "We're always looking for talented people! Send your CV to admin@amaryllissuccess.co.zw with the subject line 'Careers'.",

  // Fallback catcher
  "help": "I can tell you about:
• Amaryllis Success (who we are)
• Our products: Mudhumeni, LexAI, AutoBOQ, DocuMind
• Our services: AI, IT, Agriculture, Construction, Research
• Contact info and pricing

What would you like to know?",
};

function findAnswer(input: string): string {
  const lower = input.toLowerCase().trim();

  // Direct match
  if (KNOWLEDGE_BASE[lower]) return KNOWLEDGE_BASE[lower];

  // Keyword matching
  for (const [key, value] of Object.entries(KNOWLEDGE_BASE)) {
    if (lower.includes(key)) return value;
  }

  // Fuzzy matching for short inputs
  if (lower.length < 3) {
    return "I'm not sure I understood that. Try asking about our products, services, or contact info. Type 'help' for options.";
  }

  return "I don't have a specific answer for that yet. You can email us at admin@amaryllissuccess.co.zw or visit our Contact page. Type 'help' to see what I can answer.";
}

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

    // Simulate AI thinking delay
    setTimeout(() => {
      const answer = findAnswer(text);
      const botMsg: Message = { role: "assistant", content: answer, id: (Date.now() + 1).toString() };
      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);
    }, 600 + Math.random() * 400);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating toggle button */}
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

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 w-[92vw] max-w-[380px] h-[500px] md:h-[520px] rounded-2xl overflow-hidden flex flex-col bg-midnight-900 border border-white/10 shadow-2xl"
          >
            {/* Header */}
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

            {/* Messages */}
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
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
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

            {/* Input */}
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

