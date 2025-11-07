"use client";

import { motion } from "framer-motion";
import { FaFileContract, FaGavel, FaExclamationTriangle, FaHandshake, FaEnvelope } from "react-icons/fa";

export default function TermsOfServicePage() {
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
              <FaFileContract className="text-white text-4xl" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-[#67f8f7] bg-clip-text text-transparent">
              Terms of Service
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
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Welcome to the portfolio website of Lokesh T ("I", "me", "my", or "the Developer"). By accessing or using this website, you agree to be bound by these Terms of Service ("Terms"). Please read them carefully before using the site.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              If you do not agree with any part of these Terms, you should not use this website.
            </p>
          </div>
        </motion.section>

        {/* Acceptance of Terms */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <FaHandshake className="text-[#67f8f7] text-2xl" />
              <h2 className="text-2xl font-bold text-[#67f8f7]">Acceptance of Terms</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              By accessing this website, you acknowledge that you have read, understood, and agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Comply with these Terms of Service</li>
              <li>Be legally bound by all provisions herein</li>
              <li>Accept the Privacy Policy governing data collection and use</li>
              <li>Use the website only for lawful purposes</li>
            </ul>
          </div>
        </motion.section>

        {/* Use of Website */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#67f8f7] mb-4">Use of Website</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#67f8f7] mb-3">Permitted Use</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                This website is provided as a professional portfolio to showcase my work, skills, and experience. You are permitted to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Browse and view the content for personal and professional purposes</li>
                <li>Contact me through the provided contact form for legitimate inquiries</li>
                <li>Share links to this website on social media or professional networks</li>
                <li>Reference my work in professional contexts with proper attribution</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#67f8f7] mb-3">Prohibited Use</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                You are NOT permitted to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Copy, reproduce, or redistribute content without explicit permission</li>
                <li>Use automated systems (bots, scrapers) to access or download content</li>
                <li>Attempt to gain unauthorized access to any part of the website or server</li>
                <li>Use the contact form for spam, harassment, or malicious purposes</li>
                <li>Misrepresent your identity or affiliation when contacting me</li>
                <li>Reverse engineer, decompile, or disassemble any website code</li>
                <li>Claim my work as your own or use it in portfolios without permission</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Intellectual Property */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <FaGavel className="text-[#67f8f7] text-2xl" />
              <h2 className="text-2xl font-bold text-[#67f8f7]">Intellectual Property Rights</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-[#67f8f7] mb-3">Website Content</h3>
                <p className="text-gray-300 leading-relaxed">
                  All content on this website, including but not limited to text, graphics, logos, images, code, design elements, and project descriptions, is the intellectual property of Lokesh T unless otherwise stated. This content is protected by copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#67f8f7] mb-3">Project Work</h3>
                <p className="text-gray-300 leading-relaxed">
                  The projects showcased on this website represent work completed for various clients and organizations. While I retain the right to display this work in my portfolio, the underlying intellectual property may belong to the respective clients or organizations. Commercial use of any project materials requires explicit permission from the respective copyright holders.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#67f8f7] mb-3">Third-Party Content</h3>
                <p className="text-gray-300 leading-relaxed">
                  This website may contain links or references to third-party content, technologies, or services. All trademarks, logos, and brand names mentioned belong to their respective owners. I do not claim ownership of any third-party intellectual property.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Professional Services */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#67f8f7] mb-4">Professional Services & Inquiries</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This website serves as a portfolio and does not constitute:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>A binding offer to provide services</li>
              <li>Professional advice or consultation</li>
              <li>A guarantee of availability or specific outcomes</li>
              <li>An employment agreement or contractor commitment</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              All professional engagements require separate written agreements outlining scope, terms, deliverables, and compensation. Contact through this website is for initial inquiry purposes only.
            </p>
          </div>
        </motion.section>

        {/* Accuracy of Information */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#67f8f7] mb-4">Accuracy of Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              While I strive to ensure that all information on this website is accurate and up-to-date, I make no warranties or representations about:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>The completeness, accuracy, or reliability of any content</li>
              <li>The availability or functionality of external links</li>
              <li>Current project statuses or metrics (which may change over time)</li>
              <li>The applicability of showcased solutions to your specific needs</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Project descriptions, metrics, and results are based on information available at the time of publication and may have changed since then.
            </p>
          </div>
        </motion.section>

        {/* External Links */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#67f8f7] mb-4">External Links & Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This website contains links to external websites and services including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>GitHub repositories and profile</li>
              <li>LinkedIn professional profile</li>
              <li>Live project demos and websites</li>
              <li>Third-party tools and technologies</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              I am not responsible for the content, privacy practices, or availability of external websites. These links are provided for convenience only and do not imply endorsement. Use external links at your own risk and review their respective terms and privacy policies.
            </p>
          </div>
        </motion.section>

        {/* Disclaimer of Warranties */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <FaExclamationTriangle className="text-[#67f8f7] text-2xl" />
              <h2 className="text-2xl font-bold text-[#67f8f7]">Disclaimer of Warranties</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              This website is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Warranties of non-infringement</li>
              <li>Warranties that the website will be uninterrupted, secure, or error-free</li>
              <li>Warranties regarding the accuracy or completeness of content</li>
              <li>Warranties that defects will be corrected</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Your use of this website is at your sole risk. I do not warrant that the website or server is free of viruses or other harmful components.
            </p>
          </div>
        </motion.section>

        {/* Limitation of Liability */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#67f8f7] mb-4">Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To the maximum extent permitted by law, Lokesh T shall not be liable for any:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Direct, indirect, incidental, or consequential damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Damages arising from your use or inability to use the website</li>
              <li>Damages resulting from unauthorized access to or alteration of your transmissions or data</li>
              <li>Damages resulting from third-party content, links, or services</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              This limitation applies regardless of the legal theory (contract, tort, negligence, or otherwise) and whether or not I have been advised of the possibility of such damages.
            </p>
          </div>
        </motion.section>

        {/* Indemnification */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#67f8f7] mb-4">Indemnification</h2>
            <p className="text-gray-300 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Lokesh T from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorney fees) arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mt-4">
              <li>Your use or misuse of this website</li>
              <li>Your violation of these Terms of Service</li>
              <li>Your violation of any rights of another person or entity</li>
              <li>Any content you submit through the contact form</li>
            </ul>
          </div>
        </motion.section>

        {/* Modifications to Terms */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#67f8f7] mb-4">Modifications to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              I reserve the right to modify these Terms of Service at any time without prior notice. Changes will be effective immediately upon posting to this website. The "Last Updated" date at the top indicates when these Terms were last revised. Your continued use of the website after any modifications constitutes acceptance of the updated Terms. It is your responsibility to review these Terms periodically.
            </p>
          </div>
        </motion.section>

        {/* Termination */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#67f8f7] mb-4">Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              I reserve the right to terminate or suspend your access to this website, without prior notice or liability, for any reason, including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4 mt-4">
              <li>Violation of these Terms of Service</li>
              <li>Suspicious or fraudulent activity</li>
              <li>Misuse of the contact form or website features</li>
              <li>Attempts to compromise website security</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              All provisions of these Terms which by their nature should survive termination shall survive, including intellectual property rights, disclaimers, and limitations of liability.
            </p>
          </div>
        </motion.section>

        {/* Governing Law */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#67f8f7] mb-4">Governing Law & Jurisdiction</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any disputes arising from these Terms or your use of this website shall be subject to the exclusive jurisdiction of the courts located in Chennai, Tamil Nadu, India.
            </p>
          </div>
        </motion.section>

        {/* Severability */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#67f8f7] mb-4">Severability</h2>
            <p className="text-gray-300 leading-relaxed">
              If any provision of these Terms of Service is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving its original intent.
            </p>
          </div>
        </motion.section>

        {/* Entire Agreement */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#67f8f7] mb-4">Entire Agreement</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms of Service, together with the Privacy Policy, constitute the entire agreement between you and Lokesh T regarding your use of this website and supersede all prior or contemporaneous communications, agreements, or understandings, whether written or oral.
            </p>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-purple-900/20 to-[#67f8f7]/10 border border-[#67f8f7]/30 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <FaEnvelope className="text-[#67f8f7] text-2xl" />
              <h2 className="text-2xl font-bold text-[#67f8f7]">Contact Information</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding these Terms of Service, please contact me:
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
          transition={{ delay: 1.8, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm">
            By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
