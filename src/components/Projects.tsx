'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 'instagram-analysis',
    title: 'Instagram Analysis (Lytport)',
    description: 'Next.js + OpenAI + Facebook Graph API: dashboards for creators, real-time metrics.',
    image: '/project-instagram.jpg',
    github: 'https://github.com/ahamedfoisal',
    demo: 'https://lytport.vercel.app'
  },
  {
    id: 'gender-bias',
    title: 'Gender Bias in Professor Ratings',
    description: 'Statistical tests + ML, R² 73.5%, AUC 0.667.',
    image: '/project-gender-bias.jpg',
    github: 'https://github.com/ahamedfoisal',
    demo: '#'
  }
];

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  
  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };
  
  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  
  return (
    <section id="projects" className="section bg-[#0F172A] text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Projects
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white/5 backdrop-blur-sm">
            {/* Project Image */}
            <div 
              className="h-60 md:h-80 flex items-center justify-center bg-gradient-to-r from-primary/10 to-primary-light/10"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-center gradient-text">
                {projects[currentProject].title}
              </h3>
            </div>
            
            {/* Project Details */}
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">{projects[currentProject].title}</h3>
              <p className="text-gray-300 mb-8 text-lg">
                {projects[currentProject].description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  href={projects[currentProject].github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-light transition-colors"
                >
                  <Github size={20} /> 
                  <span>GitHub</span>
                </Link>
                <Link 
                  href={projects[currentProject].demo} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <ExternalLink size={20} /> 
                  <span>Live Demo</span>
                </Link>
              </div>
            </div>
            
            {/* Carousel Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
              <button 
                onClick={prevProject}
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Previous project"
              >
                <ArrowLeft size={24} color="white" />
              </button>
              <button 
                onClick={nextProject}
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Next project"
              >
                <ArrowRight size={24} color="white" />
              </button>
            </div>
            
            {/* Dots */}
            <div className="flex justify-center gap-3 p-6">
              {projects.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentProject ? 'bg-primary scale-125' : 'bg-white/30'}`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 