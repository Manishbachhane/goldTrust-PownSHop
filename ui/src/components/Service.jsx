import React from "react";
import { motion } from "framer-motion";
import img from "../Gemini_Generated_Image_hv2b0fhv2b0fhv2b.png";

const ServiceDetail = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8 },
    }),
  };

  const services = [
    {
      title: "Gold Pawn",
      desc: "Get instant cash by pawning your gold jewelry with best rates.",
    },
    {
      title: "Electronics Pawn",
      desc: "Pawn mobiles, laptops, and gadgets for quick money.",
    },
    {
      title: "Sell Items",
      desc: "Sell your old valuables at best market price.",
    },
    {
      title: "Buy Products",
      desc: "Buy verified second-hand products at affordable prices.",
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
    <div className="min-h-screen bg-gray-900 text-gray-200 pt-12  bg-red-500 flex justify-center">
      <div className="w-full  bg-gray-900 space-y-10 p-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="flex justify-between items-center border-b border-gray-700 pb-4"
        >
          <div>
            <h1 className="text-3xl font-bold text-yellow-500">
              GoldTrust Pawn Shop
            </h1>
            <p className="text-sm text-gray-400">
              Secure • Trusted • Instant Cash Services
            </p>
          </div>

          <button className="px-4 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition">
            Contact
          </button>
        </motion.div>

        {/* Banner */}
        <motion.img
          src={img}
          alt="GoldTrust Pawn Shop"
          className="w-full h-52 md:h-64 object-cover rounded-xl hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* About */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-semibold text-yellow-500 mb-2">
            About Our Services
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            GoldTrust Pawn Shop provides instant cash solutions against valuable
            items like gold, electronics, and luxury goods. We ensure fair
            valuation, transparent process, and complete security for your
            assets.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            Our Services
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="border border-gray-700 rounded-xl p-4 hover:shadow-lg hover:bg-yellow-500 hover:text-gray-900 transition cursor-pointer"
              >
                <h3 className="font-semibold text-yellow-500 mb-1">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
            Why Choose GoldTrust?
          </h2>
          <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-4 text-gray-300 text-sm">
            {whyChoose.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-3 border border-gray-700 rounded-xl hover:bg-yellow-500 hover:text-gray-900 transition cursor-pointer"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="bg-gray-700 rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h3 className="text-2xl font-semibold text-yellow-500">
              Need Instant Cash?
            </h3>
            <p className="text-gray-400">Visit our shop or apply online now</p>
          </div>

          <button className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition">
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;
