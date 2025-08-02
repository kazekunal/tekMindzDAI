'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = ({ activeLink: propActiveLink = null }) => {
  const [activeLink, setActiveLink] = useState(propActiveLink || 'Overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    'Overview',
    'Offerings',
    'Solutions',
    'Services',
    'Case-Studies',
    'Innovation',
    'AI-Learning'
  ];

  // Update activeLink when prop changes
  useEffect(() => {
    if (propActiveLink) {
      setActiveLink(propActiveLink);
    }
  }, [propActiveLink]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset to account for fixed navbar height
      const navbarHeight = 64; // 16 * 4 = 64px (h-16)
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLinkClick = (link) => {
    // Only update activeLink if no prop is provided (home page behavior)
    if (!propActiveLink) {
      setActiveLink(link);
    }
    setIsMobileMenuOpen(false);
    
    // Convert link text to ID format (lowercase, spaces to hyphens if needed)
    const sectionId = link.toLowerCase().replace(/\s+/g, '-');
    scrollToSection(sectionId);
  };

  // Update active link based on scroll position (only if no prop is provided)
  useEffect(() => {
    if (propActiveLink) return; // Don't run scroll detection if prop is provided

    const handleScroll = () => {
      const navbarHeight = 64;
      const scrollPosition = window.scrollY + navbarHeight + 50; // Add some offset for better detection

      // Create a copy of navLinks to avoid dependency issues
      const linksToCheck = [
        'Overview',
        'Offerings',
        'Solutions',
        'Services',
        'Case-Studies',
        'Innovation',
        'AI-Learning'
      ];

      linksToCheck.forEach((link) => {
        const sectionId = link.toLowerCase().replace(/\s+/g, '-');
        const element = document.getElementById(sectionId);
        
        if (element) {
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveLink(link);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [propActiveLink]); // Removed navLinks dependency to avoid re-running effect

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-slate-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
          <div className="flex-shrink-0">
            <img 
              src="/title.png" 
              alt="TekMindzDAI" 
              className="h-10 w-auto"
              onError={(e) => {
                // Fallback to text if image fails to load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'inline';
              }}
            />
            <span 
              className="text-white text-xl font-semibold hidden"
              style={{ display: 'none' }}
            >
              Tek<span className="text-[#97bb2e]">MindzDAI</span>
            </span>
          </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => handleLinkClick(link)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-[#97bb2e] ${
                    activeLink === link
                      ? 'text-white'
                      : 'text-gray-300'
                  }`}
                >
                  {link}
                  {activeLink === link && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#97bb2e] rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Us Button - Desktop */}
          <div className="hidden md:block">
            <Link href="#contact">
            <button className="bg-transparent border-2 border-[#ffffff]/50 text-[#97bb2e] hover:bg-[#97bb2e] hover:text-slate-800 px-6 py-2 rounded-full text-sm font-medium transition-all duration-200">
              Contact Us
            </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 border-t border-slate-700">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => handleLinkClick(link)}
                  className={`block w-full text-left px-3 py-3 text-base font-medium transition-colors duration-200 hover:text-green-400 hover:bg-slate-700 rounded-md ${
                    activeLink === link
                      ? 'text-white bg-slate-700 border-l-4 border-green-400'
                      : 'text-gray-300'
                  }`}
                >
                  {link}
                </button>
              ))}
              <div className="pt-4 pb-2">
                <button className="w-full bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-800 px-6 py-2 rounded-full text-sm font-medium transition-all duration-200">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;