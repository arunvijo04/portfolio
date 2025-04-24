import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaDownload } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="relative w-full min-h-screen text-white px-10 pt-20 pb-6 overflow-hidden flex items-center justify-center">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 animate-grid bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:30px_30px] opacity-10 pointer-events-none z-0" />

      {/* Content Container */}
      <motion.div
  className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-12 items-start"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8 }}
>

        {/* LEFT: Contact Info */}
        <div className="text-left">
          {/* Animated headline */}
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Transform your ideas into <span className="text-blue-500">Reality</span> with me
            <span className="animate-pulse text-blue-500 ml-1">|</span>
          </motion.h1>

          <p className="text-gray-300 mb-8">
            Reach out to me today and let’s discuss how I can help you achieve your goals.
          </p>

          <div className="space-y-4 text-lg mb-10">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" /> arunvijo2004@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <FaPhone className="text-blue-400" /> +91 9496097469
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-400" /> Thrissur, Kerala
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:arunvijo2004@gmail.com"
              className="inline-flex items-center gap-2 text-white border border-blue-400 px-6 py-3 rounded-full hover:bg-blue-600 transition-all shadow-md hover:shadow-blue-500"
            >
              Let’s get in touch <FaPaperPlane />
            </a>
            <a
              href="/assets/Resume.pdf"
              download
              className="inline-flex items-center gap-2 text-white border border-gray-500 px-6 py-3 rounded-full hover:bg-gray-700 transition-all shadow-md hover:shadow-gray-500"
            >
              Download Resume <FaDownload />
            </a>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        {/* RIGHT: Contact Form */}
<div className="relative w-full">
  {/* Glowing animated border */}
  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-300 to-blue-300 blur-lg animate-glow z-0" />
  
  <form className="relative z-10 space-y-4 w-full bg-[#1f2937] p-6 rounded-xl shadow-lg">
    <input
      type="text"
      placeholder="Your Name"
      className="w-full px-4 py-3 bg-[#0f172a] border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="email"
      placeholder="Your Email"
      className="w-full px-4 py-3 bg-[#0f172a] border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <textarea
      rows="4"
      placeholder="Your Message"
      className="w-full px-4 py-3 bg-[#0f172a] border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      type="submit"
      className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg shadow-md hover:shadow-blue-600"
    >
      Send Message <FaPaperPlane />
    </button>
  </form>
</div>

      </motion.div>
    </section>
  );
};

export default Contact;
