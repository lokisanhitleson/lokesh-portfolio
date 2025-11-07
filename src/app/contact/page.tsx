"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", "ff56f803-9874-400a-9413-9a46c9111ba2");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      await response.json();
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-[#67f8f7] bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Have a project in mind? Let&apos;s work together to bring your ideas to life. I&apos;m always interested in hearing about new opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-[#67f8f7] mb-6">Contact Information</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you have a question about my services, want to discuss a project, or simply want to say hello, feel free to reach out. I&apos;ll get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#67f8f7]/10">
                    <span className="text-[#67f8f7] text-xl">📧</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#67f8f7]">Email</h3>
                  <a href="mailto:lokesh603@gmail.com" className="text-gray-300 hover:text-[#67f8f7] transition-all">
                    lokesh603@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#67f8f7]/10">
                    <span className="text-[#67f8f7] text-xl">📱</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#67f8f7]">Phone</h3>
                  <a href="tel:+917708325296" className="text-gray-300 hover:text-[#67f8f7] transition-all">
                    +91 7708325296
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#67f8f7]/10">
                    <span className="text-[#67f8f7] text-xl">📍</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#67f8f7]">Location</h3>
                  <p className="text-gray-300">
                    Chennai, Tamil Nadu<br />India
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#67f8f7]/10">
                    <span className="text-[#67f8f7] text-xl">⏰</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#67f8f7]">Response Time</h3>
                  <p className="text-gray-300">
                    Typically respond within 24 hours
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-[#67f8f7]/20">
              <h3 className="text-lg font-semibold text-[#67f8f7] mb-4">Connect on Social</h3>
              <div className="flex gap-4">
                <a href="https://github.com/lokisanhitleson" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-[#1a3e4a] text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-[#67f8f7] transition-all">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/lokeshtofficial" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-[#1a3e4a] text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-[#67f8f7] transition-all">
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#1a3e4a] p-8 rounded-lg border border-[#67f8f7]/20">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="text-6xl mb-4">
                    <FaCheckCircle className="text-[#67f8f7]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#67f8f7] mb-2">Message Sent!</h3>
                  <p className="text-gray-300">
                    Thank you for reaching out. I&apos;ll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#67f8f7] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#05121c] border border-[#67f8f7]/30 text-white rounded-lg focus:outline-none focus:border-[#67f8f7] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#67f8f7] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#05121c] border border-[#67f8f7]/30 text-white rounded-lg focus:outline-none focus:border-[#67f8f7] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#67f8f7] mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#05121c] border border-[#67f8f7]/30 text-white rounded-lg focus:outline-none focus:border-[#67f8f7] transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#67f8f7] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#05121c] border border-[#67f8f7]/30 text-white rounded-lg focus:outline-none focus:border-[#67f8f7] transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-[#67f8f7] text-white rounded-lg hover:opacity-90 transition-all font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}