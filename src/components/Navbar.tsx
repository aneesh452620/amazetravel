'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, Phone, Mail, ChevronDown, MapPin,
  Compass, Search
} from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  {
    label: 'Destinations', href: '#destinations',
    dropdown: ['Kerala', 'Tamil Nadu', 'Karnataka', 'Andaman', 'Puducherry'],
  },
  {
    label: 'Tours', href: '#packages',
    dropdown: ['Beach Tours', 'Heritage Tours', 'Adventure Tours', 'Wellness Tours'],
  },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#faq' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleDropdown = (label: string) => {
    setActiveDropdown(prev => (prev === label ? null : label));
  };

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-between px-8 py-2 bg-primary text-white text-sm">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5"><Phone size={13} /><span>+91 98765 43210</span></span>
          <span className="flex items-center gap-1.5"><Mail size={13} /><span>hello@amazetravel.in</span></span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><MapPin size={13} />South India's #1 Travel Company</span>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white shadow-lg shadow-black/8 md:top-0'
            : 'bg-transparent md:top-9'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg group-hover:shadow-primary/40 transition-all duration-300">
              <Compass className="text-white" size={22} />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-display font-bold text-xl transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                Amaze
              </span>
              <span className={`text-xs font-medium tracking-widest transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white/80'}`}>
                TRAVEL
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <div key={link.label} className="relative group">
                <a
                  href={link.href}
                  className={`flex items-center gap-1 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    scrolled
                      ? 'text-gray-700 hover:text-primary hover:bg-primary/8'
                      : 'text-white/90 hover:text-white hover:bg-white/15'
                  }`}
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                    />
                  )}
                </a>

                {/* Dropdown */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl shadow-black/15 border border-gray-100 overflow-hidden"
                        initial={{ opacity: 0, y: -8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setActiveDropdown(link.label)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {link.dropdown.map(item => (
                          <a
                            key={item}
                            href="#"
                            className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:text-primary hover:bg-primary/5 transition-colors duration-200"
                          >
                            <MapPin size={12} className="text-primary/60" />
                            {item}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              className={`p-2.5 rounded-full transition-all duration-300 ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/15'
              }`}
            >
              <Search size={18} />
            </button>
            <a href="#packages" className="btn-primary text-sm py-2.5 px-5">
              Book Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors duration-300 ${
              scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/15'
            }`}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white pt-20 px-6 overflow-y-auto lg:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map(link => (
                <div key={link.label}>
                  <button
                    onClick={() => link.dropdown && handleDropdown(link.label)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-gray-800 font-medium hover:bg-primary/8 hover:text-primary transition-colors duration-200"
                  >
                    <a href={link.href} onClick={() => setMobileOpen(false)}>{link.label}</a>
                    {link.dropdown && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                      />
                    )}
                  </button>
                  {link.dropdown && activeDropdown === link.label && (
                    <div className="ml-4 mt-1 flex flex-col gap-1">
                      {link.dropdown.map(item => (
                        <a
                          key={item}
                          href="#"
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:text-primary rounded-lg hover:bg-primary/5 transition-colors duration-200"
                        >
                          <MapPin size={12} className="text-primary" />
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone size={14} className="text-primary" />+91 98765 43210
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail size={14} className="text-primary" />hello@amazetravel.in
                </div>
                <a href="#packages" className="btn-primary w-full justify-center mt-2" onClick={() => setMobileOpen(false)}>
                  Book a Tour
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
