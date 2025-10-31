import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Lokesh T</h3>
            <p className="text-sm">
              Lead Full Stack Developer with 11+ years of expertise building scalable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm ">
              <li><a href="/" className="hover:text-accent transition-all">Home</a></li>
              <li><a href="/#about" className="hover:text-accent transition-all">About</a></li>
              <li><a href="/projects" className="hover:text-accent transition-all">Projects</a></li>
              <li><a href="/contact" className="hover:text-accent transition-all">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Specializations</h4>
            <ul className="space-y-2 text-sm ">
              <li>Full Stack Development</li>
              <li>Healthcare Tech</li>
              <li>FinTech Solutions</li>
              <li>Web3 & Blockchain</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className=" hover:text-accent transition-all text-xl">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className=" hover:text-accent transition-all text-xl">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className=" hover:text-accent transition-all text-xl">
                <FaTwitter />
              </a>
              <a href="mailto:lokesh603@gmail.com" className=" hover:text-accent transition-all text-xl">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; {currentYear} Lokesh T. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-all">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-all">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}