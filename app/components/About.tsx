"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-container"
      >
        <h2 className="section-title">
          About <span className="accent-text">Me</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-center mb-6 font-body leading-relaxed">
            I am a Computer Science undergraduate at NYU Abu Dhabi (Class of 2026) with a strong focus on full-stack development and machine learning research. My academic journey has equipped me with a solid foundation in programming, data structures, algorithms, and AI/ML technologies.
          </p>
          <p className="text-lg text-center font-body leading-relaxed">
            Beyond technical skills, I am passionate about solving real-world problems through technology and dedicated to continuous learning and growth in this rapidly evolving field. I thrive in collaborative environments and am always looking to connect with like-minded professionals.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About; 