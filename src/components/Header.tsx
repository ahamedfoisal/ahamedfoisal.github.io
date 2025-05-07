'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Experience', href: '#experience' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'Contact', href: '#contact' }
] as const;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-40 w-full bg-light-bg/80 dark:bg-dark-bg/95 backdrop-blur-sm shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center focus-ring"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
            AF
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className="text-dark hover:text-primary dark:text-light dark:hover:text-primary-light transition-colors font-medium focus-ring"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Theme Toggle + Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button 
            className="md:hidden p-2 focus-ring"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-light-bg dark:bg-dark-bg shadow-md z-50">
          <nav className="container py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="text-dark hover:text-primary dark:text-light dark:hover:text-primary-light transition-colors font-medium px-4 py-2 focus-ring"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
} 