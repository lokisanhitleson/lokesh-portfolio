"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Certificate } from "@/data/credentials";

interface CertificateModalProps {
  certificate: Certificate;
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#1a3e4a] border border-[#67f8f7]/30 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-purple-800 p-6 text-white shadow-lg">
          <div className="flex justify-between items-start">
            <div className="flex gap-4 items-start flex-1">
              {/* Issuer Logo */}
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2 shadow-md flex-shrink-0">
                <Image
                  src={certificate.logo}
                  alt={`${certificate.issuer} logo`}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title & Info */}
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold">{certificate.title}</h2>
                <p className="text-sm text-white/80 mt-1">{certificate.issuer} • {certificate.date}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-2xl hover:opacity-80 transition-opacity ml-4"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-sm font-semibold text-[#67f8f7] mb-2">ABOUT THIS CERTIFICATION</h3>
            <p className="text-gray-300 leading-relaxed">{certificate.description}</p>
          </div>

          {/* Skills Covered */}
          <div>
            <h3 className="text-sm font-semibold text-[#67f8f7] mb-3">SKILLS COVERED</h3>
            <div className="flex flex-wrap gap-2">
              {certificate.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-[#67f8f7]/20 text-purple-200 border border-purple-400/40 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* PDF Viewer */}
          <div>
            <h3 className="text-sm font-semibold text-[#67f8f7] mb-3">CERTIFICATE</h3>
            <div className="bg-[#05121c] rounded-lg overflow-hidden border border-[#67f8f7]/20">
              <iframe
                src={`${certificate.pdfUrl}#view=FitH&toolbar=0&navpanes=0`}
                className="w-full h-[500px] md:h-[620px]"
                title={`${certificate.title} PDF`}
              />
            </div>
            <p className="text-sm text-gray-400 mt-2 text-center">
              Note: If PDF doesn&apos;t load, click the download button below
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4 border-t border-[#67f8f7]/20">
            <a
              href={certificate.pdfUrl}
              download
              className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-[#67f8f7] text-white rounded-lg hover:opacity-90 transition-all font-bold text-center"
            >
              Download Certificate
            </a>
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 bg-[#05121c] text-white border border-[#67f8f7]/30 rounded-lg hover:bg-[#67f8f7] hover:text-[#05121c] transition-all font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
