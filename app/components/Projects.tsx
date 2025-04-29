"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaPython, FaDatabase } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  github?: string;
  demo?: string;
  icon: React.ReactNode;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Instagram Analysis Data Model",
      description: "A comprehensive data analysis tool for Instagram metrics",
      technologies: ["Next.js", "React", "OpenAI API", "FB Graph API"],
      highlights: [
        "Developed a dynamic web application that analyzes Instagram engagement metrics",
        "Integrated with OpenAI API to provide AI-powered insights on content performance",
        "Utilized Facebook Graph API to fetch user data and create visualizations",
      ],
      github: "https://github.com/username/instagram-analysis",
      icon: <FaCode className="text-5xl" />,
    },
    {
      title: "Gender Bias in Professor Ratings",
      description: "A data science project investigating gender bias in academic reviews",
      technologies: ["Python", "Scikit-Learn", "Pandas", "NLP"],
      highlights: [
        "Analyzed over 10,000 professor ratings to identify patterns of gender bias",
        "Implemented NLP techniques to extract sentiment and linguistic features",
        "Developed statistical models to quantify bias in different academic fields",
      ],
      github: "https://github.com/username/gender-bias-analysis",
      icon: <FaPython className="text-5xl" />,
    },
    {
      title: "Anomaly Detection with Diffusion Models",
      description: "Novel approach to anomaly detection using generative diffusion models",
      technologies: ["PyTorch", "TensorFlow", "CUDA", "Python"],
      highlights: [
        "Implemented a state-of-the-art diffusion model for anomaly detection in medical imaging",
        "Achieved 94% accuracy in identifying anomalies, outperforming previous methods",
        "Optimized model performance for real-time applications on edge devices",
      ],
      github: "https://github.com/username/diffusion-anomaly-detection",
      demo: "https://demo-link.com",
      icon: <FaDatabase className="text-5xl" />,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="section-container">
        <h2 className="section-title">
          Featured <span className="accent-text">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/80 rounded-lg overflow-hidden shadow-lg border border-foreground/10 hover-scale"
            >
              <div className="h-48 overflow-hidden relative flex items-center justify-center bg-accent/10">
                <div className="text-accent/40">{project.icon}</div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-foreground/80 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mb-6 space-y-2 text-sm">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-accent font-bold mr-2">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
                    >
                      <FaGithub />
                      <span>View on GitHub</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 