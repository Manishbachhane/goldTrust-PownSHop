import React from "react";

function About() {
  return (
    // <div className="min-h-screen bg-red-50 py-10 px-4 flex justify-center">
    <div className="w-full max-w-5xl bg-red-200 rounded-2xl border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-800">
          About GoldTrust Pawn Shop
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Trusted place for buying, selling & pawning valuables
        </p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-8">
        {/* Banner */}
        <div className="h-56 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
          Shop Image / Banner
        </div>

        {/* Intro */}
        <div>
          <h2 className="text-lg font-medium text-gray-800 mb-2">Who We Are</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            GoldTrust Pawn Shop is a reliable and customer-focused place where
            you can get instant cash for your valuable items or purchase quality
            second-hand products at affordable prices. Our goal is to provide a
            safe, transparent, and hassle-free experience to every customer.
          </p>
        </div>

        {/* Mission */}
        <div>
          <h2 className="text-lg font-medium text-gray-800 mb-2">
            Our Mission
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            To offer fair value for every item, ensure complete security, and
            build long-term trust with our customers by maintaining honesty and
            transparency in every transaction.
          </p>
        </div>

        {/* Services Highlights */}
        <div>
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            What We Offer
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border rounded-xl p-4 text-sm text-gray-600">
              💰 Instant Cash for Gold & Valuables
            </div>

            <div className="border rounded-xl p-4 text-sm text-gray-600">
              📱 Pawn Electronics & Gadgets
            </div>

            <div className="border rounded-xl p-4 text-sm text-gray-600">
              🛒 Buy Verified Second-hand Products
            </div>

            <div className="border rounded-xl p-4 text-sm text-gray-600">
              🔄 Sell Your Items at Best Price
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Why Choose Us
          </h2>

          <div className="grid sm:grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="p-3 border rounded-xl">✔ Trusted Service</div>
            <div className="p-3 border rounded-xl">✔ Fair Pricing</div>
            <div className="p-3 border rounded-xl">✔ Secure Storage</div>
            <div className="p-3 border rounded-xl">✔ Quick Process</div>
            <div className="p-3 border rounded-xl">✔ No Hidden Charges</div>
            <div className="p-3 border rounded-xl">✔ Customer Support</div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-100 rounded-xl p-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Visit GoldTrust Today
            </h3>
            <p className="text-sm text-gray-500">
              Get the best value for your items instantly
            </p>
          </div>

          <button className="px-5 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-black transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default About;
