'use client';

import Link from 'next/link';
import { Phone, Mail, Linkedin, Github, Download } from 'lucide-react';

export default function Contact() {
  return (
    <footer id="contact" className="text-white py-20 bg-gradient-to-b from-[#2C3E50] to-[#1A252F]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <a href="tel:+971568047460" className="hover:underline">+971 56 804 7460</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <a href="mailto:ahamedfoisal@nyu.edu" className="hover:underline">ahamedfoisal@nyu.edu</a>
            </div>
          </div>
          
          <div className="flex justify-center gap-6 mb-12">
            <Link 
              href="https://linkedin.com/in/ahamedfoisal" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-full hover:shadow-md transition-all hover:-translate-y-1 flex items-center justify-center bg-gradient-to-r from-primary-light to-primary"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link 
              href="https://github.com/ahamedfoisal" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-full hover:shadow-md transition-all hover:-translate-y-1 flex items-center justify-center bg-gradient-to-r from-primary-light to-primary"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link 
              href="/Ahamed_Foisal_CV.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV"
              className="p-3 rounded-full hover:shadow-md transition-all hover:-translate-y-1 flex items-center gap-2 px-4 bg-gradient-to-r from-primary-light to-primary"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </Link>
          </div>
          
          <div className="text-center text-sm text-white/80">
            <p>© 2025 Ahamed Foisal – Portfolio</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 