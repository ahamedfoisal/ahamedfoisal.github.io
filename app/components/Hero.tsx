"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaUser } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      <div className="section-container grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span>Hi, I&apos;m </span>
            <span className="accent-text">Ahamed Foisal</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-foreground/80">
            NYUAD &apos;26 | Full-Stack Developer & ML Researcher
          </h2>
          <p className="text-lg mb-8 max-w-lg mx-auto md:mx-0">
            Computer Science undergraduate with a passion for building innovative
            web applications and conducting cutting-edge machine learning
            research.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/Base_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hover-scale flex items-center justify-center"
            >
              View CV
            </a>
            <a
              href="#contact"
              className="btn-secondary hover-scale flex items-center justify-center"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent flex items-center justify-center bg-accent/10">
            {/* Using icon as placeholder */}
            <FaUser className="text-9xl text-accent/30" />
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Hero; 