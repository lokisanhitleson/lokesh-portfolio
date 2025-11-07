/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export default function Hero() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaInstanceRef = useRef<any>(null);
  const [isClient, setIsClient] = useState(false);

  // Set isClient flag to prevent hydration mismatch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Load Three.js
    const threeScript = document.createElement("script");
    threeScript.src = "/assets/js/three.min.js";
    threeScript.onload = () => {
      // Load Vanta.js Clouds effect
      const vantaScript = document.createElement("script");
      vantaScript.src = "/assets/js/vanta.net.min.js";
      vantaScript.onload = () => {
        // Initialize Vanta effect
        if (vantaRef.current && window.VANTA) {
          vantaInstanceRef.current = window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200,
            minWidth: 200,
            backgroundColor: "#05121c",
            color: "#67f8f7",
            maxDistance: 18.0,
            spacing: 20.0,
            showDots: true,
          });
        }
      };
      document.body.appendChild(vantaScript);
    };
    document.body.appendChild(threeScript);

    return () => {
      // Cleanup
      if (vantaInstanceRef.current) {
        vantaInstanceRef.current.destroy();
      }
    };
  }, []);

  const stats = [
    { number: "30+", label: "Skills" },
    { number: "20+", label: "Projects" },
    { number: "40+", label: "Mentored" },
    { number: "5", label: "Tech Domains" },
  ];

  return (
    <section
      ref={vantaRef}
      className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Content overlay - positioned above Vanta background */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold leading-tight backdrop-blur-sm bg-[#05121c]/50 p-4 rounded-xl border border-[#67f8f7]/10 inline-block"
            >
              <span className="bg-gradient-to-r from-[#67f8f7] via-purple-400 to-purple-500 bg-clip-text text-transparent">
                Lead Full Stack Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-md text-gray-300 leading-relaxed backdrop-blur-sm bg-[#05121c]/40 p-3 rounded-xl border border-[#67f8f7]/10"
            >
              Building scalable healthcare & fintech solutions with 11+ years of expertise. Specialized in React Native, Node.js, Web3, and cloud infrastructure.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/projects"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-[#67f8f7] text-white rounded-lg hover:opacity-90 transition-all font-bold flex items-center justify-center gap-2 group"
              >
                View My Work
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="relative bg-gradient-to-r from-purple-500 to-[#67f8f7] p-[1px] rounded-lg group overflow-hidden"
              >
                <span className="relative block px-8 py-3 bg-[#05121c] rounded-[7px] font-semibold text-white group-hover:bg-transparent transition-all">
                  Get In Touch
                </span>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="https://github.com/lokisanhitleson"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-accent hover:text-white transition-all text-primary text-xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/lokeshtofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-accent hover:text-white transition-all text-primary text-xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:lokesh603@gmail.com"
                className="p-3 rounded-lg bg-secondary hover:bg-accent hover:text-white transition-all text-primary text-xl"
              >
                <FaEnvelope />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Visual - Oval Orbiting Animation */}
          {isClient && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden md:flex relative pointer-events-none justify-center items-center h-96"
            >
              <div className="relative w-96 h-80 flex items-center justify-center">
                {/* Dark Background Circle to hide Vanta inside */}
                <div className="absolute w-full h-full flex items-center justify-center">
                  <div
                    className="absolute w-[340px] h-[260px] rounded-full"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(5, 18, 28, 0.95) 0%, rgba(5, 18, 28, 0.85) 50%, rgba(5, 18, 28, 0.3) 75%, transparent 100%)"
                    }}
                  />
                </div>

                {/* Decorative Oval Rings SVG */}
                <svg
                  className="absolute w-full h-full"
                  viewBox="0 0 400 320"
                  style={{ pointerEvents: "none" }}
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Outer Oval Ring */}
                  <ellipse
                    cx="200"
                    cy="160"
                    rx="160"
                    ry="120"
                    fill="none"
                    stroke="url(#gradientOuter)"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                  {/* Inner Oval Ring */}
                  <ellipse
                    cx="200"
                    cy="160"
                    rx="140"
                    ry="100"
                    fill="none"
                    stroke="url(#gradientInner)"
                    strokeWidth="1.5"
                    opacity="0.4"
                    strokeDasharray="5,5"
                  />
                  <defs>
                    <linearGradient id="gradientOuter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#67f8f7" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#67f8f7" />
                    </linearGradient>
                    <linearGradient id="gradientInner" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#67f8f7" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Subtle Glow Background */}
                <motion.div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    background: "radial-gradient(ellipse at center, rgba(103, 248, 247, 0.15) 0%, transparent 60%)",
                  }}
                />

                {/* Center Gradient Circle (11+ Years) */}
                <motion.div
                  className="absolute z-20"
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-800/60 to-purple-900 rounded-full flex flex-col items-center justify-center shadow-lg ring-2 ring-purple-500/30 pointer-events-auto">
                    <div className="text-5xl font-bold text-white drop-shadow-lg">11+</div>
                    <div className="text-xs text-white/90 text-center mt-2">Years</div>
                  </div>
                </motion.div>

                {/* Orbiting Stat Circles - Following Oval Path */}
                {stats.map((stat, i) => {
                  return (
                    <motion.div
                      key={`stat-${i}`}
                      className="absolute"
                      style={{
                        width: "28px",
                        height: "28px",
                        left: "155px",
                        top: "125px",
                        marginLeft: "-14px",
                        marginTop: "-14px",
                      }}
                      animate={{
                        // Keyframes for smooth oval motion (parametric ellipse)
                        // Using 9 points (0°, 45°, 90°, 135°, 180°, 225°, 270°, 315°, 360°)
                        // Horizontal radius = 228px, Vertical radius = 135px
                        x: [228, 161, 0, -161, -228, -161, 0, 161, 228],
                        y: [0, 114, 162, 114, 0, -114, -162, -114, 0]
                      }}
                      transition={{
                        duration: 12,
                        times: [0, 0.25, 0.5, 0.75, 1],
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 3,                      // Stagger each stat by 3 seconds
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.3 }}
                        className="px-2 w-24 h-24 rounded-full bg-gradient-to-br from-[#1a3e4a] to-[#05121c] shadow-md border-2 border-[#67f8f7]/20 flex flex-col items-center justify-center hover:border-[#67f8f7]/50 hover:shadow-lg transition-all cursor-pointer pointer-events-auto"
                      >
                        <div className="text-3xl font-bold bg-gradient-to-r from-[#67f8f7] to-purple-500 bg-clip-text text-transparent">
                          {stat.number}
                        </div>
                        <div className="text-xs text-gray-300 text-center mt-1.5 font-semibold px-1 leading-tight">
                          {stat.label}
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}