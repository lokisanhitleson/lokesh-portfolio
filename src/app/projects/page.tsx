"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  role: string;
  technologies: string[];
  problem: string;
  solution: string;
  results: string[];
  image: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "CareNEO",
    shortDescription: "Healthcare platform connecting caretakers with loved ones",
    description: "A comprehensive SaaS platform designed for healthcare providers to manage caretaker-loved one relationships with real-time health data sharing and reminders.",
    role: "Lead Full Stack Developer",
    technologies: ["React Native", "Node.js", "Express", "MongoDB", "Redis", "AWS"],
    problem: "Healthcare providers needed a unified platform to connect caretakers with loved ones while securely managing health records and medication reminders.",
    solution: "Built a full-stack healthcare SaaS platform with real-time data synchronization, secure health record management, and automated reminder systems.",
    results: [
      "Served 1000+ active users with 99.9% uptime",
      "Reduced health record lookup time by 70%",
      "Improved medication adherence by 45%",
      "Deployed across iOS and Android platforms"
    ],
    image: "/projects/careneо.jpg",
    github: "https://github.com",
    demo: "https://careneо.demo.com"
  },
  {
    id: 2,
    title: "Mazoapps Health",
    shortDescription: "AI-integrated healthcare SaaS for appointments and health records",
    description: "An advanced healthcare solution integrating AI-powered chatbots and comprehensive health record management with appointment scheduling.",
    role: "Lead Full Stack Developer & Architect",
    technologies: ["Angular", "Ionic", "Node.js", "Express", "MySQL", "Redis", "OpenAI API", "Llama API"],
    problem: "Healthcare facilities struggled with appointment management, patient records organization, and patient engagement through modern communication channels.",
    solution: "Developed an AI-enhanced healthcare platform with intelligent chatbots, centralized health records, and seamless appointment management.",
    results: [
      "500+ healthcare facilities onboarded",
      "50,000+ patient appointments managed monthly",
      "AI chatbot handled 80% of initial inquiries",
      "5-star average rating from healthcare providers"
    ],
    image: "/projects/mazoapps.jpg",
    github: "https://github.com",
    demo: "https://mazoapps.demo.com"
  },
  {
    id: 3,
    title: "Telefy",
    shortDescription: "DeFi multi-chain platform with DEX and lending services",
    description: "A decentralized finance platform supporting multiple blockchain networks with DEX functionality and lending protocols.",
    role: "Full Stack Developer & Smart Contract Developer",
    technologies: ["React", "Web3.js", "Solidity", "Ethereum", "TheGraph API", "Node.js"],
    problem: "Users needed a unified interface to access multiple DeFi protocols across different blockchain networks with low transaction costs.",
    solution: "Engineered a multi-chain DeFi platform with smart contracts, enabling seamless token swapping and lending across networks.",
    results: [
      "$5M+ total value locked (TVL)",
      "10,000+ daily active users",
      "100+ token pairs supported",
      "Sub-second transaction execution"
    ],
    image: "/projects/telefy.jpg",
    github: "https://github.com",
    demo: "https://telefy.demo.com"
  },
  {
    id: 4,
    title: "Bocxy",
    shortDescription: "SaaS platform for salon and spa service management",
    description: "A complete business management solution for salons and spas, featuring appointment scheduling, staff management, and customer communication.",
    role: "Lead Full Stack Developer",
    technologies: ["Angular", "Ionic", "Node.js", "Express", "MySQL"],
    problem: "Salon and spa businesses needed an affordable, easy-to-use platform to manage appointments, staff schedules, and customer relationships.",
    solution: "Created a comprehensive SaaS platform with intuitive booking system, staff scheduling, and integrated customer communication.",
    results: [
      "2000+ active salon/spa merchants",
      "100,000+ monthly bookings processed",
      "Reduced no-show rate by 35%",
      "4.8-star app store rating"
    ],
    image: "/projects/bocxy.jpg",
    github: "https://github.com",
    demo: "https://bocxy.demo.com"
  },
  {
    id: 5,
    title: "Rungila",
    shortDescription: "Online career guidance platform with AI assessments",
    description: "An educational technology platform providing career guidance and personality assessments for students and institutions.",
    role: "Lead Full Stack Developer",
    technologies: ["Angular", "Node.js", "Express", "MySQL", "MongoDB", "Redis"],
    problem: "Students lacked proper career guidance tools while institutions needed data-driven insights into student aptitudes and career interests.",
    solution: "Built a comprehensive career guidance platform with AI-powered assessments, personalized recommendations, and institutional analytics.",
    results: [
      "500+ partner institutions",
      "50,000+ student users",
      "90% assessment completion rate",
      "Helped students identify career paths with 85% accuracy"
    ],
    image: "/projects/rungila.jpg",
    github: "https://github.com",
    demo: "https://rungila.demo.com"
  },
  {
    id: 6,
    title: "MileReach",
    shortDescription: "Logistics platform with order tracking and delivery optimization",
    description: "A logistics management system enabling real-time order tracking, automated delivery assignment, and route optimization.",
    role: "Backend Lead & Architecture Designer",
    technologies: ["Angular", "Node.js", "Hapi", "MySQL"],
    problem: "Logistics companies needed real-time tracking, intelligent delivery assignment, and optimization to reduce delivery times and costs.",
    solution: "Architected a scalable logistics platform with smart routing algorithms and real-time tracking capabilities.",
    results: [
      "50+ logistics companies using platform",
      "10 million+ deliveries tracked",
      "20% reduction in delivery times",
      "99.5% order tracking accuracy"
    ],
    image: "/projects/milereach.jpg",
    github: "https://github.com",
    demo: "https://milereach.demo.com"
  }
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
              Featured Projects
            </span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Explore a selection of impactful projects spanning healthcare, fintech, logistics, and more
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => setSelectedProject(project)}
              className="bg-[#1a3e4a] rounded-lg border border-[#67f8f7]/20 hover:shadow-[0_0_30px_rgba(201,130,255,0.4)] hover:border-purple-500/50 transition-all cursor-pointer group overflow-hidden"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary to-accent group-hover:opacity-80 transition-opacity flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl font-bold">{project.id}</div>
                  <div className="text-sm mt-2">Project Case Study</div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#67f8f7] mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.shortDescription}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gradient-to-r from-purple-600/20 to-[#67f8f7]/20 text-purple-200 border border-purple-400/40 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gradient-to-r from-purple-600/20 to-[#67f8f7]/20 text-purple-200 border border-purple-400/40 rounded text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-[#67f8f7] text-white rounded-lg hover:opacity-90 transition-all font-medium text-sm">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1a3e4a] border border-[#67f8f7]/30 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-purple-800 p-6 text-white flex justify-between items-center shadow-lg">
                <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-2xl hover:opacity-80 transition-opacity"
                >
                  ✕
                </button>
              </div>

              <div className="p-8 space-y-6">
                {/* Role */}
                <div>
                  <h3 className="text-sm font-semibold text-[#67f8f7] mb-2">MY ROLE</h3>
                  <p className="text-gray-300">{selectedProject.role}</p>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-sm font-semibold text-[#67f8f7] mb-2">DESCRIPTION</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Problem */}
                <div>
                  <h3 className="text-sm font-semibold text-[#67f8f7] mb-2">PROBLEM STATEMENT</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.problem}</p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-sm font-semibold text-[#67f8f7] mb-2">SOLUTION</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.solution}</p>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-sm font-semibold text-[#67f8f7] mb-3">RESULTS & IMPACT</h3>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-300">
                        <span className="text-[#67f8f7] font-bold">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-sm font-semibold text-[#67f8f7] mb-3">TECH STACK</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-[#67f8f7]/20 text-purple-200 border border-purple-400/40 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-[#67f8f7]/20">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#05121c] text-white border border-[#67f8f7]/30 rounded-lg hover:bg-[#67f8f7] hover:text-[#05121c] transition-all"
                    >
                      <FaGithub /> View Code
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#67f8f7] text-[#05121c] rounded-lg hover:bg-[#67f8f7]/90 transition-all"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}