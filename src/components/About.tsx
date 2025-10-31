"use client";

import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { category: "Frontend", items: ["React", "React Native", "Angular", "TypeScript", "Tailwind CSS", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Express", "Hapi.js", "PHP", "Python", "RESTful APIs"] },
    { category: "Databases", items: ["MongoDB", "MySQL", "Redis", "Firebase", "GraphQL"] },
    { category: "DevOps & Cloud", items: ["AWS", "Docker", "Nginx", "Ubuntu", "Apache", "CI/CD"] },
    { category: "Advanced", items: ["Web3", "Solidity", "OpenAI API", "Llama API", "System Design"] },
  ];

  const highlights = [
    { number: "11+", label: "Years of Experience" },
    { number: "20+", label: "Projects Delivered" },
    { number: "50+", label: "Team Members Mentored" },
    { number: "5", label: "Different Tech Domains" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Accomplished Technical Leader with proven expertise in building scalable, production-grade applications
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-primary">Professional Journey</h3>
            <p className="text-gray-700 leading-relaxed">
              I&apos;m a Lead Full Stack Developer with 11+ years of hands-on experience driving projects from concept to production deployment. My expertise spans across healthcare, fintech, and Web3 technologies.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a technical leader, I specialize in architecting scalable solutions, mentoring high-performing teams, and solving complex technical challenges. My approach combines technical excellence with strategic thinking to deliver business impact.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-lg shadow-sm"
                >
                  <div className="text-2xl font-bold text-accent">{item.number}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-primary">Core Strengths</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <span className="text-gray-700"><strong>System Architecture:</strong> Designing scalable, maintainable applications with optimal performance</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <span className="text-gray-700"><strong>Technical Leadership:</strong> Mentoring teams, code reviews, and establishing best practices</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <span className="text-gray-700"><strong>Performance Optimization:</strong> Profiling and optimizing applications for production scale</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <span className="text-gray-700"><strong>Full-Stack Mastery:</strong> End-to-end development across frontend, backend, and infrastructure</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold text-xl">✓</span>
                <span className="text-gray-700"><strong>Problem Solving:</strong> Tackling complex technical challenges with innovative solutions</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          id="skills"
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-primary mb-12 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <h4 className="text-lg font-bold text-primary mb-4">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent/20 transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}