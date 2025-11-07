"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaArrowLeft, FaCheck, FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import { useState } from "react";
import Image from "next/image";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const project = projects.find((p) => p.slug === slug);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 bg-[#05121c] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#67f8f7] mb-4">Project Not Found</h1>
          <button
            onClick={() => router.push("/projects")}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-[#67f8f7] text-white rounded-lg hover:opacity-90 transition-all"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 pb-20 bg-[#05121c]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900/20 via-[#05121c] to-[#1a3e4a]/30"
      >
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => router.push("/projects")}
            className="mb-12 flex items-center gap-2 text-gray-400 hover:text-[#67f8f7] transition-colors"
          >
            <FaArrowLeft /> Back to Projects
          </button>

          {/* Project Header - App Store Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
              {/* Left: Logo and Title */}
              <div className="flex gap-6 items-start flex-1">
                {/* Project Logo */}
                <div className="w-28 h-28 bg-[#1a3e4a] rounded-3xl flex items-center justify-center border-2 border-[#67f8f7]/30 shadow-[0_0_30px_rgba(103,248,247,0.2)] flex-shrink-0 overflow-hidden">
                  <Image
                    src={project.logo}
                    alt={`${project.title} Logo`}
                    width={112}
                    height={112}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Title and Tagline */}
                <div className="flex-1 min-w-0">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-purple-400 to-[#67f8f7] bg-clip-text text-transparent">
                      {project.title}
                    </span>
                  </h1>
                  <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-gray-400 mb-6">
                    {project.shortDescription}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 items-center">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-[#67f8f7] text-white rounded-lg hover:opacity-90 transition-all font-bold shadow-[0_0_20px_rgba(103,248,247,0.3)] hover:shadow-[0_0_30px_rgba(103,248,247,0.5)]"
                      >
                        <FaExternalLinkAlt /> Visit Website
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white rounded-lg border border-gray-700/50 shadow-[0_8px_16px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-gradient-to-br hover:from-gray-800 hover:via-gray-700 hover:to-gray-600 hover:border-[#67f8f7]/50 hover:shadow-[0_0_30px_rgba(103,248,247,0.4),0_8px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-300 font-bold"
                      >
                        <FaGithub /> View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-6">
                <h3 className="text-sm font-semibold text-[#67f8f7] uppercase tracking-wider mb-3">My Role</h3>
                <div className="flex flex-wrap gap-2">
                  {project.role.split(',').map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gradient-to-r from-purple-600/20 to-[#67f8f7]/20 text-purple-200 border border-purple-400/40 rounded-md text-xs font-medium"
                    >
                      {item.trim()}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-6">
                <h3 className="text-sm font-semibold text-[#67f8f7] uppercase tracking-wider mb-2">Duration</h3>
                <p className="text-gray-300 font-semibold">{project.duration}</p>
              </div>
              <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-6">
                <h3 className="text-sm font-semibold text-[#67f8f7] uppercase tracking-wider mb-2">Team Size</h3>
                <p className="text-gray-300 font-semibold">{project.teamSize}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Video Section */}
      {project.videoUrl && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-[#67f8f7] bg-clip-text text-transparent">
                Project Demo
              </span>
            </h2>
            <div className="relative w-full aspect-video bg-[#1a3e4a] rounded-xl overflow-hidden border border-[#67f8f7]/30">
              {project.videoUrl.includes('youtube.com') || project.videoUrl.includes('youtu.be') ? (
                // YouTube iframe embed
                <iframe
                  width="100%"
                  height="100%"
                  src={project.videoUrl}
                  title={`${project.title} Demo Video`}
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              ) : (
                // HTML5 video player for local videos
                <video
                  width="100%"
                  height="100%"
                  controls
                  className="absolute inset-0 object-contain"
                  preload="metadata"
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  <source src={project.videoUrl} type="video/webm" />
                  <source src={project.videoUrl} type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </motion.section>
      )}

      {/* Overview Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          {/* Description */}
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-[#67f8f7] mb-4">About This Project</h2>
            <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
          </div>
        </div>
      </motion.section>

      {/* Problem Statement */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/10 to-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-[#67f8f7] bg-clip-text text-transparent">
              The Challenge
            </span>
          </h2>
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed">{project.problem}</p>
          </div>
        </div>
      </motion.section>

      {/* Solution */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-[#67f8f7] bg-clip-text text-transparent">
              The Solution
            </span>
          </h2>
          <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">{project.solution}</p>

            {/* Key Features */}
            <h3 className="text-xl font-bold text-[#67f8f7] mb-4">Key Features Implemented</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <FaCheck className="text-[#67f8f7] mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Screenshots Gallery */}
      {project.screenshots.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-[#67f8f7] bg-clip-text text-transparent">
                Screenshots
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  onClick={() => setSelectedImage(idx)}
                  className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg overflow-hidden cursor-pointer hover:shadow-[0_0_30px_rgba(103,248,247,0.3)] transition-all group"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-900/30 to-[#67f8f7]/10 flex items-center justify-center relative overflow-hidden">
                    <Image
                      src={screenshot.url}
                      alt={screenshot.caption}
                      layout="fill"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-gray-300 font-medium">{screenshot.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Tech Stack */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/10 to-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-[#67f8f7] bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>

          <div className="space-y-4">
            {/* Row 1: Frontend & Backend */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Frontend */}
              {project.technologies.frontend.length > 0 && (
                <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-[#67f8f7] mb-4">Frontend</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.frontend.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-[#67f8f7]/20 text-purple-200 border border-purple-400/40 rounded-full text-sm font-medium hover:shadow-[0_0_15px_rgba(201,130,255,0.4)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Backend */}
              {project.technologies.backend.length > 0 && (
                <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-[#67f8f7] mb-4">Backend</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.backend.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-[#67f8f7]/20 text-purple-200 border border-purple-400/40 rounded-full text-sm font-medium hover:shadow-[0_0_15px_rgba(201,130,255,0.4)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Row 2: Database & DevOps */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Database */}
              {project.technologies.database.length > 0 && (
                <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-[#67f8f7] mb-4">Database</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.database.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-[#67f8f7]/20 text-purple-200 border border-purple-400/40 rounded-full text-sm font-medium hover:shadow-[0_0_15px_rgba(201,130,255,0.4)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* DevOps */}
              {project.technologies.devops.length > 0 && (
                <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-[#67f8f7] mb-4">DevOps & Cloud</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.devops.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-[#67f8f7]/20 text-purple-200 border border-purple-400/40 rounded-full text-sm font-medium hover:shadow-[0_0_15px_rgba(201,130,255,0.4)] transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Row 3: Other Technologies */}
            {project.technologies.other.length > 0 && (
              <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#67f8f7] mb-4">Other Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.other.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-[#67f8f7]/20 text-purple-200 border border-purple-400/40 rounded-full text-sm font-medium hover:shadow-[0_0_15px_rgba(201,130,255,0.4)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.section>

      {/* Results & Impact */}
      {project.results.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-[#67f8f7] bg-clip-text text-transparent">
                Results & Impact
              </span>
            </h2>
            <div className="bg-[#1a3e4a] border border-[#67f8f7]/20 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {project.results.map((result, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-900/20 to-[#67f8f7]/10 rounded-lg border border-[#67f8f7]/10"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-[#67f8f7] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <span className="text-gray-300">{result}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-[#67f8f7] bg-clip-text text-transparent">
              Interested in Similar Solutions?
            </span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Let&apos;s discuss how I can help bring your project to life with the same level of expertise and dedication.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-[#67f8f7] text-white rounded-lg hover:opacity-90 transition-all font-bold text-lg"
            >
              Get In Touch
            </a>
            <button
              onClick={() => router.push("/projects")}
              className="px-8 py-4 bg-[#1a3e4a] text-white border border-[#67f8f7]/30 rounded-lg hover:bg-[#67f8f7] hover:text-[#05121c] transition-all font-bold text-lg"
            >
              View More Projects
            </button>
          </div>
        </div>
      </motion.section>

      {/* Lightbox for Screenshots */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-5xl w-full"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-[#67f8f7] transition-colors"
            >
              ✕
            </button>
            <div className="bg-[#1a3e4a] border border-[#67f8f7]/30 rounded-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-900/30 to-[#67f8f7]/10 flex items-center justify-center relative">
                <Image
                  src={project.screenshots[selectedImage].url}
                  alt={project.screenshots[selectedImage].caption}
                  layout="fill"
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-300 text-lg">{project.screenshots[selectedImage].caption}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}