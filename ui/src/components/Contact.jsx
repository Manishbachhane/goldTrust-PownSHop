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
  <div className="min-h-screen relative bg-gradient-to-br from-gray-900 via-black to-gray-900 to-gray-900 text-white flex items-center justify-center px-6">

    {/* Glow Effects */}
    {/* <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-yellow-500/20 blur-3xl rounded-full"></div>
    <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-yellow-500/10 blur-3xl rounded-full"></div> */}

    {/* Content */}
    <div className="relative z-10 w-full max-w-5xl grid md:grid-cols-2 gap-10 items-center">

      {/* LEFT SIDE */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 leading-tight">
          Get in Touch
        </h1>
        <p className="mt-4 text-gray-400 max-w-md">
          Need instant cash or have questions? Contact us anytime — we’re here to help you.
        </p>

        <div className="mt-6 space-y-2 text-gray-400 text-sm">
          <p>📍 Trusted Pawn Services</p>
          <p>⚡ Instant Response</p>
          <p>🔒 100% Secure Process</p>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name */}
        <div>
          <label className="text-gray-400 text-sm">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full mt-1 p-3 bg-transparent border-b border-gray-600 focus:border-yellow-400 outline-none transition"
          />
          {errors.name && (
            <p className="text-red-400 text-sm">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="text-gray-400 text-sm">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full mt-1 p-3 bg-transparent border-b border-gray-600 focus:border-yellow-400 outline-none transition"
          />
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="text-gray-400 text-sm">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="w-full mt-1 p-3 bg-transparent border-b border-gray-600 focus:border-yellow-400 outline-none transition h-24 resize-none"
          />
          {errors.message && (
            <p className="text-red-400 text-sm">{errors.message}</p>
          )}
        </div>

        {/* Button */}
        <button className="w-full mt-4 bg-yellow-500 text-black font-semibold py-3 rounded-xl hover:bg-yellow-400 transition duration-300 hover:scale-[1.02]">
          Send Message
        </button>

      </form>
    </div>
  </div>
);
};

export default Contact;
