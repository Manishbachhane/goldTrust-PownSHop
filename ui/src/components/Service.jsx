import React from "react";
import { motion } from "framer-motion";
import img from "../Gemini_Generated_Image_hv2b0fhv2b0fhv2b.png";

const ServiceDetail = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  const services = [
    {
      title: "Gold Pawn",
      desc: "Get instant cash for your gold at best rates.",
    },
    {
      title: "Electronics Pawn",
      desc: "Pawn mobiles, laptops, and gadgets easily.",
    },
    {
      title: "Sell Items",
      desc: "Sell your valuables at fair market price.",
    },
    {
      title: "Buy Products",
      desc: "Buy verified second-hand items.",
    },
  ];

  const whyChoose = [
    "Instant Cash",
    "Safe Storage",
    "Trusted Valuation",
    "No Hidden Charges",
    "Easy Process",
    "Customer Support",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 via-black to-gray-900 text-gray-200 px-6 py-16 md:px-20">
      {/* Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">
          Our Services
        </h1>
        <p className="text-gray-400 mt-2">
          Simple, fast and secure pawn solutions
        </p>
      </motion.div>

      {/* Banner */}
      <motion.img
        src={img}
        alt="services"
        className="w-full max-w-5xl mx-auto h-56 md:h-72 object-cover rounded-2xl mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      {/* About */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h2 className="text-2xl font-semibold text-yellow-400 mb-2">
          About Our Services
        </h2>
        <p className="text-gray-400">
          We provide instant cash against valuables like gold and electronics
          with full transparency and security.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16"
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-yellow-500 hover:text-black transition"
          >
            <h3 className="font-semibold text-yellow-400 ">
              {service.title}
            </h3>
            <p className="text-sm text-gray-400">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Why Choose */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        className="max-w-5xl mx-auto mb-16"
      >
        <h2 className="text-2xl font-semibold text-yellow-400 text-center mb-6">
          Why Choose Us
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {whyChoose.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 p-4 rounded-xl text-center hover:bg-yellow-500 hover:text-black transition"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4"
      >
        <div>
          <h3 className="text-xl font-semibold text-yellow-400">
            Need Instant Cash?
          </h3>
          <p className="text-gray-400 text-sm">Visit us or apply online now</p>
        </div>

        <button className="px-6 py-3 bg-yellow-500 text-black rounded-xl hover:bg-yellow-400 transition">
          Get Started
        </button>
      </motion.div>
    </div>
  );
};

export default ServiceDetail;
