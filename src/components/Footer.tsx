'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Compass, Phone, Mail, MapPin,
  ArrowRight, Heart, ChevronUp,
} from 'lucide-react';

// Social icon SVGs (lucide-react doesn't include brand icons)
const SocialIcons = {
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  Twitter: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  Youtube: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="#000" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" style={{fill:'white'}} />
    </svg>
  ),
  Linkedin: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
};


const footerLinks = {
  destinations: [
    'Kerala Backwaters', 'Tamil Nadu Temples', 'Karnataka Heritage',
    'Andaman Islands', 'Pondicherry', 'Ooty & Kodaikanal',
  ],
  tours: [
    'Beach Getaways', 'Heritage Circuits', 'Adventure Treks',
    'Wildlife Safari', 'Ayurveda Retreats', 'Honeymoon Packages',
  ],
  company: [
    'About Us', 'Our Team', 'Careers',
    'Press & Media', 'Sustainability', 'Affiliate Program',
  ],
  support: [
    'Help Center', 'Booking Policy', 'Cancellation Policy',
    'Travel Insurance', 'Visa Assistance', 'Emergency Contact',
  ],
};

const socials = [
  { icon: SocialIcons.Facebook, href: '#', label: 'Facebook' },
  { icon: SocialIcons.Instagram, href: '#', label: 'Instagram' },
  { icon: SocialIcons.Twitter, href: '#', label: 'Twitter' },
  { icon: SocialIcons.Youtube, href: '#', label: 'YouTube' },
  { icon: SocialIcons.Linkedin, href: '#', label: 'LinkedIn' },
];

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-gray-950 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      {/* Main footer */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Compass className="text-white" size={22} />
              </div>
              <div>
                <div className="font-display font-bold text-xl text-white">Amaze</div>
                <div className="text-xs text-white/40 tracking-widest">TRAVEL</div>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-xs">
              South India's most trusted travel company since 2009. Crafting transformative
              journeys that connect you with the soul of the subcontinent.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3 mb-6">
              {[
                { icon: Phone, text: '+91 98765 43210', href: 'tel:+919876543210' },
                { icon: Mail, text: 'hello@amazetravel.in', href: 'mailto:hello@amazetravel.in' },
                { icon: MapPin, text: 'MG Road, Kochi, Kerala 682015', href: '#' },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-start gap-2.5 text-white/55 hover:text-white transition-colors duration-200 text-sm group"
                >
                  <Icon size={14} className="text-primary mt-0.5 flex-shrink-0 group-hover:text-primary" />
                  {text}
                </a>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {(
            [
              { title: 'Destinations', links: footerLinks.destinations },
              { title: 'Tour Types', links: footerLinks.tours },
              { title: 'Company', links: footerLinks.company },
              { title: 'Support', links: footerLinks.support },
            ] as const
          ).map(col => (
            <div key={col.title}>
              <h4 className="font-bold text-white text-sm mb-5 tracking-wide uppercase">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="flex items-center gap-1.5 text-white/50 text-sm hover:text-white hover:gap-2.5 transition-all duration-200 group"
                    >
                      <ArrowRight size={12} className="text-primary/60 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Awards / Certs strip */}
        <div className="mt-12 py-6 border-t border-white/10 border-b">
          <div className="flex items-center gap-6 overflow-x-auto">
            <p className="text-xs text-white/30 uppercase tracking-widest flex-shrink-0">Recognized by</p>
            {['Tourism Ministry of India', 'Kerala Tourism', 'IATA Certified', 'ISO 9001:2015', 'TripAdvisor'].map(
              brand => (
                <span
                  key={brand}
                  className="text-white/25 text-xs font-semibold flex-shrink-0 hover:text-white/50 transition-colors duration-200 cursor-default"
                >
                  {brand}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center md:text-left">
            © 2026 Amaze Travel. All rights reserved. Made with{' '}
            <Heart size={11} className="inline text-red-500" fill="currentColor" /> in Kerala, India.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(link => (
              <a
                key={link}
                href="#"
                className="text-white/40 text-xs hover:text-white transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 z-40 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hover:bg-primary-dark hover:scale-110 transition-all duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        title="Back to top"
      >
        <ChevronUp size={18} />
      </motion.button>
    </footer>
  );
};

export default Footer;
