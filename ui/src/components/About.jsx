import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900  text-gray-200 px-6 py-16 md:px-20">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
          About Us
        </h1>
        <p className="mt-4 text-gray-400">
          Trusted pawn shop for gold, electronics, and valuable items.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto mt-12 space-y-10">
        {/* Section 1 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-yellow-400">Who We Are</h2>
          <p className="mt-3 text-gray-400 leading-relaxed">
            We are a reliable pawn shop offering instant cash for your valuables
            like gold, electronics, and luxury items. Our goal is to provide a
            simple, secure, and transparent experience.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-yellow-400">
            Our Mission
          </h2>
          <p className="mt-3 text-gray-400 leading-relaxed">
            To deliver fair pricing, fast service, and complete security for
            every customer. We believe in building trust through honesty and
            transparency.
          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-yellow-400">
            What We Offer
          </h2>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>• Instant cash for gold</li>
            <li>• Pawn electronics & gadgets</li>
            <li>• Buy & sell second-hand items</li>
            <li>• Safe & secure storage</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
