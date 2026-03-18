// import { useState, useRef, useEffect } from "react";
// import api from "../api";

// function AIClient() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const chatEndRef = useRef(null);

//   useEffect(() => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages, loading]);

//   const sendMessage = async () => {
//     if (!input.trim() || loading) return;

//     setMessages(prev => [...prev, { role: "user", content: input }]);
//     setInput("");
//     setLoading(true);

//     try {
//       const res = await api.post("/api/ai/chat", {
//         message: input,
//       });

//       setMessages(prev => [
//         ...prev,
//         { role: "assistant", content: res.data.reply },
//       ]);
//     } catch(error) {
//       console.error("AI ERROR:", error);
//       setMessages(prev => [
//         ...prev,
//         { role: "assistant", content: "Something went wrong 😢" },
//       ]);
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl flex flex-col h-[80vh] shadow-sm">
//         {/* Header */}
//         <div className="px-5 py-3 border-b border-gray-200 flex items-center justify-between">
//           <h2 className="text-sm font-semibold text-gray-800 tracking-wide">
//             Pawn Assistant
//           </h2>
//           <span className="text-xs text-gray-400">online</span>
//         </div>

//         {/* Chat Body */}
//         <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
//           {messages.map((m, i) => (
//             <div
//               key={i}
//               className={`flex ${
//                 m.role === "user" ? "justify-end" : "justify-start"
//               }`}
//             >
//               <div
//                 className={`max-w-[70%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
//                   m.role === "user"
//                     ? "bg-gray-900 text-white"
//                     : "bg-gray-100 text-gray-800"
//                 }`}
//               >
//                 {m.content}
//               </div>
//             </div>
//           ))}

//           {loading && <div className="text-xs text-gray-400">typing...</div>}

//           <div ref={chatEndRef} />
//         </div>

//         {/* Input */}
//         <div className="border-t border-gray-200 px-3 py-2 flex items-center gap-2">
//           <textarea
//             className="flex-1 resize-none text-sm bg-transparent focus:outline-none"
//             rows="1"
//             value={input}
//             onChange={e => setInput(e.target.value)}
//             onKeyDown={e => e.key === "Enter" && !e.shiftKey && sendMessage()}
//             placeholder="Ask about item value..."
//           />

//           <button
//             onClick={sendMessage}
//             className="px-3 py-1.5 text-sm bg-gray-900 text-white rounded-lg hover:bg-black transition"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AIClient;
import { useState, useRef, useEffect } from "react";
import api from "../api";

function AIClient() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello 👋 Pawn Assistant here! Ask anything.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // auto scroll
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
      console.error("AI ERROR:", err);
      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          content: `Something went wrong 😢 ${err}`,
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl flex flex-col h-[80vh] shadow-sm">
        {/* Header */}
        <div className="px-5 py-3 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-gray-800 tracking-wide">
            Pawn Assistant
          </h2>
          <span className="text-xs text-green-500">online</span>
        </div>

        {/* Chat Body */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] px-3 py-2 rounded-xl text-sm ${
                  m.role === "user"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="text-xs text-gray-400 italic">
              Assistant is typing...
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-gray-200 px-3 py-2 flex items-center gap-2">
          <textarea
            className="flex-1 resize-none text-sm bg-transparent focus:outline-none"
            rows="1"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            placeholder="Ask about item value..."
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="px-3 py-1.5 text-sm bg-gray-900 text-white rounded-lg hover:bg-black transition disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default AIClient;
