import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      className="bg-gradient-to-br from-gray-900 via-black to-gray-900
 min-h-screen  text-gray-200 pt-30 flex flex-col justify-center"
    >
      {/* Heading */}
      <motion.h3
        className="text-3xl font-bold text-center mb-8 text-yellow-500"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Contact Us
      </motion.h3>

      {/* Form */}
      <motion.div
        className="max-w-lg mx-auto space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <motion.input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 rounded-lg text-gray-900 bg-white"
          whileFocus={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        />

        <motion.input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 rounded-lg text-gray-900 bg-white"
          whileFocus={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        />

        <motion.textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 mb-4 rounded-lg text-gray-900 bg-white"
          whileFocus={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        />

        <motion.button
          className="w-full bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg hover:bg-yellow-400 transition"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Send Message
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Contact;
