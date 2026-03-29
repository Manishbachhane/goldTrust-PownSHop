import { useState, useRef, useEffect } from "react";
import api from "../api";

function AIClient() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello 👋 Pawn Assistant here!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input;

    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setLoading(true);

    try {
      const res = await api.post("/api/ai/chat", {
        message: userMessage,
      });

      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content: res.data?.reply || "No response",
        },
      ]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong 😢",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="px-3 py-2 border-b flex justify-between items-center">
        <h2 className="text-sm font-semibold">Pawn Assistant</h2>
        <span className="text-xs text-green-500">● online</span>
      </div>

      {/* Chat */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2 text-sm">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${
              m.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] px-2 py-1 rounded-lg ${
                m.role === "user" ? "bg-black text-white" : "bg-gray-200"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}

        {loading && <div className="text-xs text-gray-400">typing...</div>}

        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <div className="border-t p-2 flex gap-2">
        <input
          className="flex-1 text-sm border rounded px-2 py-1 outline-none"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
          placeholder="Type..."
        />

        <button
          onClick={sendMessage}
          className="bg-black text-white px-3 rounded"
        >
          ➤
        </button>
      </div>
    </div>
  );
}

export default AIClient;
