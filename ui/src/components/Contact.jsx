import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.96,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18, // 🔥 ek ke baad ek
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen text-gray-200 pt-30 flex justify-center items-center">
      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto py-8 bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl w-full max-w-lg px-8"
      >
        {/* Heading */}
        <motion.h3
          variants={fadeUp}
          className="text-3xl font-bold text-center mb-8 text-yellow-500"
        >
          Contact Us
        </motion.h3>

        {/* Form */}
        <div className="w-full space-y-4">
          
          <motion.input
            variants={fadeUp}
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            whileFocus={{ scale: 1.03 }}
          />

          <motion.input
            variants={fadeUp}
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            whileFocus={{ scale: 1.03 }}
          />

          <motion.textarea
            variants={fadeUp}
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
            whileFocus={{ scale: 1.02 }}
          />

          <motion.button
            variants={fadeUp}
            className="w-full bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg shadow-lg hover:bg-yellow-400"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(255,215,0,0.3)" }}
            whileTap={{ scale: 0.97 }}
          >
            Send Message
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;