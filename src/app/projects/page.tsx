"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function ProjectsPage() {
  const router = useRouter();

  // Display all projects
  const displayedProjects = projects;

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
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Explore a curated selection of signature projects from my 20+ production deployments across healthcare, fintech, logistics, education, and telecommunications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => router.push(`/projects/${project.slug}`)}
              className="bg-[#1a3e4a] rounded-lg border border-[#67f8f7]/20 hover:shadow-[0_0_30px_rgba(201,130,255,0.4)] hover:border-purple-500/50 transition-all cursor-pointer group overflow-hidden"
            >
              {/* Project Image */}
              <div
                className={`h-48 flex items-center justify-center overflow-hidden ${
                  project.bannerBackground === "light"
                    ? "bg-white"
                    : "bg-gray-900"
                }`}
              >
                <Image
                  src={project.banner}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#67f8f7] mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.shortDescription}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {[...project.technologies.frontend, ...project.technologies.backend].slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gradient-to-r from-purple-600/20 to-[#67f8f7]/20 text-purple-200 border border-purple-400/40 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                  {([...project.technologies.frontend, ...project.technologies.backend, ...project.technologies.database, ...project.technologies.devops, ...project.technologies.other].length) > 3 && (
                    <span className="px-2 py-1 bg-gradient-to-r from-purple-600/20 to-[#67f8f7]/20 text-purple-200 border border-purple-400/40 rounded text-xs font-medium">
                      +{([...project.technologies.frontend, ...project.technologies.backend, ...project.technologies.database, ...project.technologies.devops, ...project.technologies.other].length) - 3} more
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-[#67f8f7] text-white rounded-lg hover:opacity-90 transition-all font-bold text-sm">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}