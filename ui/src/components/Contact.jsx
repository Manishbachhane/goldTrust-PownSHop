
function Contact() {
  return (
<>    
 <section className="bg-black text-white py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-8 text-yellow-400">
          Contact Us
        </h3>
        <div className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 rounded-lg text-black bg-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 rounded-lg text-black bg-white"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 mb-4 rounded-lg text-black bg-white"
          ></textarea>
          <button className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400">
            Send Message
          </button>
        </div>
      </section>

</>
  );
}

export default Contact;