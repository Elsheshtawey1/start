import React from "react";
import { motion } from "framer-motion";

function ContactPage() {
  return (
    <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="py-12 px-25 max-[700px]:px-2 mx-auto">
      <div className="text-center mb-10">
        <motion.h2 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="text-4xl text[var(--secondary-color)] font-bold">
          Contact Us
        </motion.h2>
        <p className="text-lg text-[var(--opacity-color2)] mt-2">Lorem ipsum, dolor sit amet consectetur adipiscing elit.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
          <form className="space-y-4">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <label className="block text-[var(--opacity-color2)] font-medium">Name</label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:text-[var(--main-color)] focus:outline-none transition"
                placeholder="Enter your name"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <label className="block text-[var(--opacity-color2)] font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:text-[var(--main-color)] focus:outline-none transition"
                placeholder="Enter your email"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
              <label className="block text-[var(--opacity-color2)] font-medium">Message</label>
              <textarea
                rows="4"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:text-[var(--main-color)] focus:outline-none transition"
                placeholder="Enter your message"
              ></textarea>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[var(--secondary-color)] w-35 items-center mx-auto flex justify-center text-[var(--secondary2-color)] rounded-md py-3 px-4 my-5 hover:bg-[var(--main-color)] hover:text-[var(--secondary2-color)] transition duration-300 cursor-pointer max-[700px]:text-sm max-[700px]:mx-auto max-[800px]:mx-auto max-[800px]:mb-2"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="rounded-lg overflow-hidden shadow-lg border border-gray-200 select-none">
          <iframe
            title="Google Maps"
            className="w-full h-80 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.95373531531592!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df7f63f7d%3A0xa1b79c7aaf1fdf3!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1632356601235!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ContactPage;
