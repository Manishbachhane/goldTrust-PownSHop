import React from "react";
import { motion } from "framer-motion";
// import BannerImg from "../assets/goldTrust.jpeg";

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.8 },
    }),
  };

  const services = [
    "💰 Instant Cash for Gold & Valuables",
    "📱 Pawn Electronics & Gadgets",
    "🛒 Buy Verified Second-hand Products",
    "🔄 Sell Your Items at Best Price",
  ];

  const whyChoose = [
    "✔ Trusted Service",
    "✔ Fair Pricing",
    "✔ Secure Storage",
    "✔ Quick Process",
    "✔ No Hidden Charges",
    "✔ Customer Support",
  ];

  return (
    <div className="w-full pt-20 bg-gray-900 text-gray-200 px-6 md:px-16 space-y-12">
      {/* Header */}
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={fadeUp}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-500">
          About GoldTrust Pawn Shop
        </h1>
        <p className="mt-2 text-gray-400">
          Trusted place for buying, selling & pawning valuables
        </p>
      </motion.div>

      {/* Banner */}
      <motion.img
        src="../assets/goldTrust.jpeg"
        alt="GoldTrust Pawn Shop"
        className="h-64 w-full md:h-80 rounded-xl object-cover hover:scale-105 transition-transform duration-500"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      {/* Who We Are */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-semibold text-yellow-500 mb-2">
          Who We Are
        </h2>
        <p className="text-gray-300 leading-relaxed">
          GoldTrust Pawn Shop is a reliable and customer-focused place where you
          can get instant cash for your valuable items or purchase quality
          second-hand products at affordable prices. Our goal is to provide a
          safe, transparent, and hassle-free experience to every customer.
        </p>
      </motion.div>

      {/* Mission */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-semibold text-yellow-500 mb-2">
          Our Mission
        </h2>
        <p className="text-gray-300 leading-relaxed">
          To offer fair value for every item, ensure complete security, and
          build long-term trust with our customers by maintaining honesty and
          transparency in every transaction.
        </p>
      </motion.div>

      {/* Services */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={3}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          What We Offer
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border border-gray-700 rounded-xl p-4 text-gray-300 hover:bg-yellow-500 hover:text-gray-900 cursor-pointer transition"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={4}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
          Why Choose Us
        </h2>
        <div className="grid sm:grid-cols-3 gap-4 text-gray-300">
          {whyChoose.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-3 border border-gray-700 rounded-xl hover:bg-yellow-500 hover:text-gray-900 cursor-pointer transition"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="bg-gray-800 rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h3 className="text-2xl font-semibold text-yellow-500">
            Visit GoldTrust Today
          </h3>
          <p className="text-gray-400">
            Get the best value for your items instantly
          </p>
        </div>

        <button
          to="/contact"
          className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition"
        >
          Contact Us
        </button>
      </motion.div>
    </div>
  );
};

export default About;
