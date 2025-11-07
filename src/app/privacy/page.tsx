"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaLock, FaUserShield, FaDatabase, FaEnvelope } from "react-icons/fa";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#05121c] text-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-[#67f8f7] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(103,248,247,0.4)]">
              <FaShieldAlt className="text-white text-4xl" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-[#67f8f7] bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-gray-400 text-lg">Last Updated: November 8, 2025</p>
        </motion.div>

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              This Privacy Policy describes how Lokesh T ("I", "me", or "my") collects, uses, and protects your personal information when you visit this portfolio website. I am committed to protecting your privacy and ensuring the security of any information you provide.
            </p>
          </div>
        </motion.section>

        {/* Information Collection */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <FaDatabase className="text-[#67f8f7] text-2xl" />
              <h2 className="text-2xl font-bold text-[#67f8f7]">Information I Collect</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#67f8f7] mb-3">Information You Provide</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  When you contact me through the contact form, I collect the following information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Your name</li>
                  <li>Your email address</li>
                  <li>Subject of your inquiry</li>
                  <li>Message content</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#67f8f7] mb-3">Automatically Collected Information</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  When you visit my website, certain information is automatically collected, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>IP address (anonymized)</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How I Use Information */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <FaUserShield className="text-[#67f8f7] text-2xl" />
              <h2 className="text-2xl font-bold text-[#67f8f7]">How I Use Your Information</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              I use the information I collect for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-300 ml-4">
              <li><strong className="text-[#67f8f7]">To Respond to Inquiries:</strong> I use your contact information to respond to your messages and inquiries submitted through the contact form.</li>
              <li><strong className="text-[#67f8f7]">To Improve My Website:</strong> I analyze website usage data to understand how visitors interact with my portfolio and to improve user experience.</li>
              <li><strong className="text-[#67f8f7]">Professional Communication:</strong> With your consent, I may use your email address to send occasional updates about my professional work, new projects, or career opportunities.</li>
              <li><strong className="text-[#67f8f7]">Security & Fraud Prevention:</strong> To protect my website from malicious activity and ensure the security of all visitors.</li>
            </ul>
          </div>
        </motion.section>

        {/* Data Protection */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <FaLock className="text-[#67f8f7] text-2xl" />
              <h2 className="text-2xl font-bold text-[#67f8f7]">Data Protection & Security</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              I take the security of your personal information seriously and implement appropriate technical and organizational measures to protect it:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-300 ml-4">
              <li>All data transmission is encrypted using SSL/TLS protocols (HTTPS)</li>
              <li>Contact form submissions are securely processed and stored</li>
              <li>Access to personal information is restricted to only authorized purposes</li>
              <li>Regular security audits and updates to protect against vulnerabilities</li>
              <li>No third-party access to your personal information without explicit consent</li>
            </ul>
          </div>
        </motion.section>

        {/* Cookies */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#67f8f7] mb-4">Cookies & Tracking Technologies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This website uses minimal cookies and tracking technologies:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-300 ml-4">
              <li><strong className="text-[#67f8f7]">Essential Cookies:</strong> Required for basic website functionality, such as maintaining your session.</li>
              <li><strong className="text-[#67f8f7]">Analytics Cookies:</strong> Used to understand how visitors use the website, helping me improve user experience (anonymized data only).</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              You can control cookies through your browser settings. However, disabling cookies may affect the functionality of this website.
            </p>
          </div>
        </motion.section>

        {/* Third-Party Services */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#67f8f7] mb-4">Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This website may use the following third-party services, each with their own privacy policies:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-300 ml-4">
              <li><strong className="text-[#67f8f7]">Hosting Provider:</strong> Vercel - for website hosting and deployment</li>
              <li><strong className="text-[#67f8f7]">Analytics:</strong> Basic analytics for understanding website traffic</li>
              <li><strong className="text-[#67f8f7]">External Links:</strong> This website contains links to external sites (GitHub, LinkedIn, project demos). I am not responsible for the privacy practices of these external sites.</li>
            </ul>
          </div>
        </motion.section>

        {/* Your Rights */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#67f8f7] mb-4">Your Privacy Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-300 ml-4">
              <li><strong className="text-[#67f8f7]">Access:</strong> You can request a copy of the personal information I hold about you.</li>
              <li><strong className="text-[#67f8f7]">Correction:</strong> You can request that I correct any inaccurate or incomplete information.</li>
              <li><strong className="text-[#67f8f7]">Deletion:</strong> You can request that I delete your personal information, subject to legal obligations.</li>
              <li><strong className="text-[#67f8f7]">Objection:</strong> You can object to the processing of your personal information for certain purposes.</li>
              <li><strong className="text-[#67f8f7]">Data Portability:</strong> You can request a copy of your data in a structured, machine-readable format.</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              To exercise any of these rights, please contact me at <a href="mailto:lokesh603@gmail.com" className="text-[#67f8f7] hover:underline">lokesh603@gmail.com</a>.
            </p>
          </div>
        </motion.section>

        {/* Data Retention */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#67f8f7] mb-4">Data Retention</h2>
            <p className="text-gray-300 leading-relaxed">
              I retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. Contact form submissions are retained for up to 2 years unless you request earlier deletion. Website analytics data is retained in anonymized form for up to 1 year.
            </p>
          </div>
        </motion.section>

        {/* Children's Privacy */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#67f8f7] mb-4">Children&apos;s Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              This website is not intended for children under the age of 13. I do not knowingly collect personal information from children under 13. If you believe I have inadvertently collected such information, please contact me immediately, and I will take steps to delete it.
            </p>
          </div>
        </motion.section>

        {/* Changes to Policy */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#67f8f7] mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              I may update this Privacy Policy from time to time to reflect changes in my practices or for legal, operational, or regulatory reasons. The "Last Updated" date at the top of this page indicates when the policy was last revised. I encourage you to review this policy periodically to stay informed about how I protect your information.
            </p>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-purple-900/20 to-[#67f8f7]/10 border border-[#67f8f7]/30 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <FaEnvelope className="text-[#67f8f7] text-2xl" />
              <h2 className="text-2xl font-bold text-[#67f8f7]">Contact Me</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or how your data is handled, please don&apos;t hesitate to contact me:
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong className="text-[#67f8f7]">Name:</strong> Lokesh T</p>
              <p><strong className="text-[#67f8f7]">Email:</strong> <a href="mailto:lokesh603@gmail.com" className="text-[#67f8f7] hover:underline">lokesh603@gmail.com</a></p>
              <p><strong className="text-[#67f8f7]">Phone:</strong> <a href="tel:+917708325296" className="text-[#67f8f7] hover:underline">+91 7708325296</a></p>
              <p><strong className="text-[#67f8f7]">Location:</strong> Chennai, Tamil Nadu, India</p>
            </div>
          </div>
        </motion.section>

        {/* Acknowledgment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm">
            By using this website, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
