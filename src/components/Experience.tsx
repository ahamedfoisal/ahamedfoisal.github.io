'use client';

import { motion } from 'framer-motion';
import { BriefcaseIcon } from 'lucide-react';

const experiences = [
  {
    id: 'nyuad-engineering',
    role: 'Social Media & Design Assistant',
    company: 'NYUAD Engineering',
    period: 'Mar 2023 – Dec 2023',
    description: 'Developed a React portal with MongoDB backend that increased engagement by 35%.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section bg-light dark:bg-[#0F172A]/80 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-8"
            >
              {/* Timeline line */}
              <div className="absolute top-0 left-3 bottom-0 w-0.5 bg-primary/30"></div>
              
              {/* Timeline dot */}
              <div className="absolute top-0 left-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <BriefcaseIcon className="w-3 h-3 text-white" />
              </div>
              
              {/* Content */}
              <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold dark:text-white">{exp.role}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-primary font-medium dark:text-[#00A8FF]">{exp.company}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-300">{exp.period}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-200">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 