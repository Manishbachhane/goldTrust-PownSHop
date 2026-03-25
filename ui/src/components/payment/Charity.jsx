import { useState } from "react";
import axios from "axios";
import { __paymentapiurl } from "../../API_URL";

function Charity() {
  const [amount, setAmount] = useState(100);

  const MakeCharity = async () => {
    try {
      const response = await axios.post(__paymentapiurl, { amount });
      window.location.href = response.data.url;
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };

  const amounts = [10, 50, 100, 500, 1000];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-200 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Make a <span className="text-blue-600">Charity ❤️</span>
        </h1>

        {/* Amount Options */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {amounts.map(amt => (
            <button
              key={amt}
              onClick={() => setAmount(amt)}
              className={`py-2 rounded-lg border ${
                amount === amt
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              ₹{amt}
            </button>
          ))}
        </div>

        {/* Custom Amount */}
        <input
          type="number"
          placeholder="Enter custom amount"
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Donate Button */}
        <button
          onClick={MakeCharity}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition duration-300"
        >
          Donate ₹{amount}
        </button>
      </div>
    </div>
  );
}

export default Charity;
