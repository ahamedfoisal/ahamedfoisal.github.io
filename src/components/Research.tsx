'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const researchProjects = [
  {
    id: 'diffusion',
    title: 'Clinical AI Lab – Diffusion Anomaly Detection',
    period: 'Feb 2025 – Present',
    description: "Designed diffusion models → +12% F1 on MNIST/KDD'99."
  },
  {
    id: 'mof',
    title: 'Kirmizialtin Lab – MOF Property Prediction',
    period: 'Sep 2024 – Present',
    description: 'Feature pipelines, deep learning → +15% accuracy.'
  },
  {
    id: 'pipelines',
    title: 'Sreenivasan Lab – Data Pipelines',
    period: 'Feb 2025 – Present',
    description: 'Optimizing data processing for advanced scientific computing applications.'
  }
];

export default function Research() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const toggleProject = (id: string) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  return (
    <section id="research" className="section py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Research</h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {researchProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => toggleProject(project.id)}
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold dark:text-white">{project.title}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-300">{project.period}</span>
                </div>
                
                <div className={`mt-4 overflow-hidden transition-all duration-300 ${
                  expandedProject === project.id ? 'max-h-96' : 'max-h-12'
                }`}>
                  <p className="text-gray-700 dark:text-gray-200">
                    {project.description}
                  </p>
                  
                  {expandedProject === project.id && (
                    <div className="mt-4 text-sm text-gray-600 dark:text-[#00A8FF]">
                      <p>Click to collapse details</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 