"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { certificates, testimonials, Certificate } from "@/data/credentials";
import CertificateModal from "@/components/CertificateModal";

export default function CredentialsPage() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

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
              Professional Credentials
            </span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Certified expertise backed by industry recognition and client testimonials
          </p>
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#67f8f7] mb-8 text-center">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() => setSelectedCertificate(cert)}
                className="bg-[#1a3e4a] rounded-lg border border-[#67f8f7]/20 p-6 hover:shadow-[0_0_30px_rgba(201,130,255,0.4)] hover:border-purple-500/50 transition-all cursor-pointer group"
              >
                {/* Certificate Icon & Logo */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600/20 to-[#67f8f7]/20 rounded-lg flex items-center justify-center border border-purple-400/30">
                    {/* Certificate Badge Icon */}
                    <svg
                      className="w-8 h-8 text-[#67f8f7]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>

                  {/* Issuer Badge */}
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-[#67f8f7]/20 text-purple-200 border border-purple-400/40 rounded-full text-xs font-medium">
                    {cert.issuer}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#67f8f7] mb-2 group-hover:text-purple-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Date */}
                <p className="text-sm text-gray-400 mb-3">{cert.date}</p>

                {/* Skills Preview */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.slice(0, 3).map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-[#05121c] text-purple-200 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 bg-[#05121c] text-purple-200 text-xs rounded">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* View Button */}
                <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-[#67f8f7] text-white rounded-lg hover:opacity-90 transition-all font-medium text-sm">
                  View Certificate
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#67f8f7] mb-8 text-center">
            Testimonials
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                className="bg-[#1a3e4a] rounded-lg border border-[#67f8f7]/20 p-6 hover:shadow-[0_0_20px_rgba(201,130,255,0.3)] transition-all relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-purple-500/20 text-6xl font-serif leading-none">
                  "
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 leading-relaxed mb-6 relative z-10 italic">
                  "{testimonial.testimonial}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 border-t border-[#67f8f7]/20 pt-4">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>

                  <div className="flex-1">
                    <h4 className="font-bold text-[#67f8f7]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                    <p className="text-sm text-purple-300">{testimonial.organization}</p>
                  </div>

                  {/* Relationship Badge */}
                  <span className="px-2 py-1 bg-purple-600/20 text-purple-200 text-xs rounded border border-purple-400/30">
                    {testimonial.relationship}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </div>
  );
}
