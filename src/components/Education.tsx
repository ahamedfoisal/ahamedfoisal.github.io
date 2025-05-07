'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

const education = {
  degree: 'B.S. Computer Science, Minor Applied Math',
  institution: 'NYU Abu Dhabi',
  year: 'May 2026',
  studyAway: [
    { location: 'NYU Paris', period: 'Spring 2024' },
    { location: 'NYU New York', period: 'Fall 2024' }
  ]
};

export default function Education() {
  return (
    <section id="education" className="section bg-light dark:bg-dark/50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Education</h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto card p-6"
        >
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{education.degree}</h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary font-medium">{education.institution}</span>
                <span className="text-gray-600 dark:text-gray-400">•</span>
                <span className="text-gray-600 dark:text-gray-400">{education.year}</span>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                <h4 className="font-semibold mb-2">Study Away Experience</h4>
                <ul className="space-y-2">
                  {education.studyAway.map((study, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{study.location}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm ml-auto">{study.period}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 