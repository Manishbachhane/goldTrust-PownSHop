import React, { useState } from "react";
import { __contacturl } from "../API_URL";

const Contact = () => {
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // input change
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // error remove while typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.length < 3) {
      newErrors.name = "Minimum 3 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.length < 10) {
      newErrors.message = "Minimum 10 characters";
    }

    return newErrors;
  };

  // submit
  const handleSubmit = async e => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // stop submit
    }

    try {
      const res = await fetch(__contacturl + "send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message Sent ✅");
        setForm({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        alert("Error ❌");
      }
    } catch (err) {
      console.log(err);
      alert("Server Error ❌");
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800/70 backdrop-blur-lg border border-gray-400 rounded-3xl shadow-2xl p-8 p-6  rounded-xl w-full max-w-lg space-y-5"
      >
        <div className="text-center mb-4">
          <p className="text-yellow-400 text-4xl font-bold mt-2">Contact Us</p>
        </div>
        {/* NAME */}
        <div>
          <label className=" block text-gray-300 mb-2 font-medium">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-3 bg-gray-900 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mb-2">{errors.name}</p>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <label className="block text-gray-300 mb-2 font-medium">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 bg-gray-900 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mb-2">{errors.email}</p>
          )}
        </div>

        {/* MESSAGE */}
        <div>
          <label className="block text-gray-300 mb-2 font-medium">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full p-3 bg-gray-900 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-yellow-400 outline-none transition h-32 resize-none"
          />
          {errors.message && (
            <p className="text-red-400 text-sm mb-2">{errors.message}</p>
          )}
        </div>

        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-2xl shadow-lg transition duration-300 hover:scale-105">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
