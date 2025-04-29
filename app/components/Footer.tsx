import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/90 backdrop-blur-sm py-8 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-foreground/70">
            &copy; {currentYear} Ahamed Foisal. All rights reserved.
          </p>
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 