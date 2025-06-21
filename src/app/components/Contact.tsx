"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaGithub, FaTelegramPlane, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null); // ✅ тип формы

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_0agxd85",
        "template_na2s7en",
        formRef.current,
        "qtiCTQqMPFmSm1Bv2"
      )
      .then(
        () => {
          alert("Excellent, message delivered");
          formRef.current?.reset(); // ✅ reset доступен у HTMLFormElement
        },
        (error) => {
          alert("Error");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="bg-[#1C1C1C] text-white py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact me
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Write to me - I will definitely answer
        </motion.p>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="grid gap-6 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 bg-[#2A2A2A] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 bg-[#2A2A2A] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <textarea
            rows={5}
            name="message"
            placeholder="Message"
            required
            className="w-full px-4 py-3 bg-[#2A2A2A] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <button
            type="submit"
            className="bg-white text-[#1C1C1C] px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Send
          </button>
        </motion.form>

        <motion.div
          className="flex justify-center gap-6 mt-10 text-white text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="mailto:daniel.vartanov81@gmail.com"
            className="hover:text-gray-300"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/DVfrontend"
            target="_blank"
            className="hover:text-gray-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://t.me/TSXplorer"
            target="_blank"
            className="hover:text-gray-300"
          >
            <FaTelegramPlane />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
