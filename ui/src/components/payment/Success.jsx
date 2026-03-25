import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-300 px-4">
      
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full text-center">
        
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-4 rounded-full">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Completed 🎉
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 mb-6">
          Charity Done Successfully. Thank you for your support ❤️
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition duration-300"
        >
          Go to Home
        </button>

      </div>
    </div>
  );
}

export default Success;