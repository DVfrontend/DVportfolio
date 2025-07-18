"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaGithub, FaTelegramPlane, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_0agxd85",
        "template_na2s7en",
        formRef.current,
        "qtiCTQqMPFmSm1Bv2",
      )
      .then(
        () => {
          alert("Message sent successfully");
          formRef.current?.reset();
        },
        (error) => {
          alert("Failed to send message");
          console.error(error);
        },
      );
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Ready for Freelance Projects
        </motion.h2>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="grid gap-6 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 bg-[#2A2A2A] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          />

          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 bg-[#2A2A2A] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          />

          <motion.textarea
            rows={5}
            name="message"
            placeholder="Tell me about your project or idea..."
            required
            className="w-full px-4 py-3 bg-[#2A2A2A] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          />

          <motion.button
            type="submit"
            className="text-white bg-[#1C1C1C] px-6 py-3 rounded-full font-semibold transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        <motion.div
          className="flex justify-center gap-8 mt-10 text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="mailto:daniel.vartanov81@gmail.com"
            className="flex items-center gap-2  transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <FaEnvelope />
            <span className="text-sm hidden sm:inline">Email</span>
          </motion.a>

          <motion.a
            href="https://github.com/DVfrontend"
            target="_blank"
            className="flex items-center gap-2  transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <FaGithub />
            <span className="text-sm hidden sm:inline">GitHub</span>
          </motion.a>

          <motion.a
            href="https://t.me/TSXplorer"
            target="_blank"
            className="flex items-center gap-2  transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <FaTelegramPlane />
            <span className="text-sm hidden sm:inline">Telegram</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
