"use client";
import { useState } from "react";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-dark-black/80 backdrop-blur-xl z-50 border-b border-light-gray/5">
      <div className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-vivid-purple to-royal-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-mono font-bold text-2xl">
                AA
              </span>
            </div>
            <span className="text-2xl font-heading font-bold text-light-gray">
              .Studio
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 font-body text-light-gray/70 hover:text-light-gray transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-vivid-purple to-royal-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-vivid-purple to-royal-blue text-white font-heading font-medium rounded-lg hover:shadow-lg hover:shadow-vivid-purple/25 transition-all duration-200"
            >
              Let&apos;s Talk
            </a>
          </div>
          <button
            className="md:hidden p-2 hover:bg-light-gray/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 font-body text-light-gray/70 hover:text-light-gray hover:bg-light-gray/5 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mx-4 mt-4 px-6 py-3 bg-gradient-to-r from-vivid-purple to-royal-blue text-white font-heading font-medium rounded-lg text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Let&apos;s Talk
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
