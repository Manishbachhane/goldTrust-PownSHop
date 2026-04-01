import { useState } from "react";
import AIClient from "./AIClient";

const ChatBot = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="w-80 h-96 bg-white rounded-2xl shadow-2xl mb-2 overflow-hidden">
          <AIClient />
        </div>
      )}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-14 h-14 
             bg-gray-800 text-white font-bold 
             rounded-full shadow-xl cursor-pointer
             hover:bg-gray-500 hover:scale-110 transition-all"
      >
        AI..
      </div>
    </div>
  );
};

export default ChatBot;