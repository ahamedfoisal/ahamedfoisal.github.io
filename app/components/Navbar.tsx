"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold hover-scale flex items-center"
        >
          <span className="accent-text">Ahamed</span>
          <span className="ml-1">Foisal</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-medium hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4 ml-4">
            <a
              href="https://github.com/YOUR_GITHUB_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col justify-between h-5">
            <span
              className={`h-0.5 w-full bg-foreground transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-full bg-foreground transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`h-0.5 w-full bg-foreground transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed inset-0 bg-background z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden flex flex-col pt-24 px-8`}
        >
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-6 mt-8">
              <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 