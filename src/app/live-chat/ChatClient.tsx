"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "ai";
  text: string;
};

export default function ChatClient() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Hi 👋 Welcome to Team Infinity! How can we help you grow your business today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll ONLY inside chat (no page jump)
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    if (!input.trim()) return;

    const userText = input;
    setInput("");
    setLoading(true);

    setMessages((prev) => [...prev, { role: "user", text: userText }]);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userText }),
    });

    const data = await res.json();

    setMessages((prev) => [...prev, { role: "ai", text: data.reply }]);
    setLoading(false);
  }

  return (
    <section
      aria-label="Live AI Chat"
      className="
        w-full
        h-[100dvh]
        flex
        flex-col
        bg-white
        pt-20
        md:pt-32
      "
    >
      {/* Header */}
      <header className="border-b px-6 py-4 shrink-0">
        <h1 className="text-lg font-semibold text-cyan-600">
          Team Infinity AI Assistant
        </h1>
        <p className="text-sm text-gray-500">
          Marketing • Development • AI Automation • Business Growth
        </p>
      </header>

      {/* Messages (ONLY THIS SCROLLS) */}
      <main className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] rounded-lg px-4 py-2 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-cyan-600 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="text-sm text-gray-400">AI is typing...</div>
        )}

        <div ref={messagesEndRef} />
      </main>

      {/* Input */}
      <footer className="border-t px-4 py-3 flex gap-2 shrink-0">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask us anything..."
          aria-label="Chat input"
          className="
            flex-1
            border
            rounded-lg
            px-4
            py-2
            text-sm
            focus:outline-none
            focus:ring-2
            focus:ring-cyan-500
          "
        />
        <button
          onClick={sendMessage}
          className="bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-cyan-700"
        >
          Send
        </button>
      </footer>
    </section>
  );
}
