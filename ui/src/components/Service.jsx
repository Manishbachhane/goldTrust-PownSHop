import React from "react";
import img from "../Gemini_Generated_Image_hv2b0fhv2b0fhv2b.png";
function ServiceDetail() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
      <div className="w-full max-w-5xl bg-white rounded-2xl border border-gray-200 shadow-sm">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              GoldTrust Pawn Shop
            </h1>
            <p className="text-sm text-gray-500">
              Secure • Trusted • Instant Cash Services
            </p>
          </div>

          <button className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-black transition">
            Contact
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Banner */}
          {/* <div className="h-52 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400"> */}
          <img
            className="h-52 bg-gray-100 cover w-full rounded-xl flex items-center justify-center text-gray-400"
            src={img}
            alt=""
          />
          {/* </div> */}

          {/* About */}
          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-2">
              About Our Services
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              GoldTrust Pawn Shop provides instant cash solutions against
              valuable items like gold, electronics, and luxury goods. We ensure
              fair valuation, transparent process, and complete security for
              your assets.
            </p>
          </div>

          {/* Services List */}
          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              Our Services
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Service Card */}
              <div className="border rounded-xl p-4 hover:shadow-md transition">
                <h3 className="font-medium text-gray-800">Gold Pawn</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Get instant cash by pawning your gold jewelry with best rates.
                </p>
              </div>

              <div className="border rounded-xl p-4 hover:shadow-md transition">
                <h3 className="font-medium text-gray-800">Electronics Pawn</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Pawn mobiles, laptops, and gadgets for quick money.
                </p>
              </div>

              <div className="border rounded-xl p-4 hover:shadow-md transition">
                <h3 className="font-medium text-gray-800">Sell Items</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Sell your old valuables at best market price.
                </p>
              </div>

              <div className="border rounded-xl p-4 hover:shadow-md transition">
                <h3 className="font-medium text-gray-800">Buy Products</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Buy verified second-hand products at affordable prices.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              Why Choose GoldTrust?
            </h2>

            <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-600">
              <div className="p-3 border rounded-xl">Instant Cash</div>
              <div className="p-3 border rounded-xl">Safe Storage</div>
              <div className="p-3 border rounded-xl">Trusted Valuation</div>
              <div className="p-3 border rounded-xl">No Hidden Charges</div>
              <div className="p-3 border rounded-xl">Easy Process</div>
              <div className="p-3 border rounded-xl">Customer Support</div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gray-100 rounded-xl p-5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Need Instant Cash?
              </h3>
              <p className="text-sm text-gray-500">
                Visit our shop or apply online now
              </p>
            </div>

            <button className="px-5 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-black transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail;
