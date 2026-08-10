'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, ArrowRight, CheckCircle2, Leaf } from 'lucide-react';

const highlights = [
  { icon: <Award size={16} />, text: 'Award-winning travel company since 2009' },
  { icon: <Users size={16} />, text: '50,000+ happy travelers and counting' },
  { icon: <Globe size={16} />, text: '200+ handcrafted tour packages' },
  { icon: <Leaf size={16} />, text: 'Eco-responsible and community-first approach' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-20 right-0 w-72 h-72 bg-secondary/15 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images block */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Main image */}
            <div className="img-zoom rounded-3xl overflow-hidden shadow-2xl  aspect-[1/1] ">
              <img
                src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700&q=80"
                alt="Kerala Backwater Houseboat"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay with text */}
              <div className="absolute inset-0 overlay-gradient rounded-3xl flex items-end p-6">
                <div className="text-white">
                  <p className="text-sm text-white/70 mb-1">Our Signature Experience</p>
                  <h4 className="font-display text-xl font-bold">Kerala Backwaters</h4>
                </div>
              </div>
            </div>

            {/* Floating card: years */}
            <motion.div
              className="absolute -top-6 -right-6 md:-right-10 bg-white rounded-2xl shadow-xl p-5 text-center"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <div className="text-4xl font-black text-primary font-display">15+</div>
              <div className="text-xs text-gray-500 font-medium mt-0.5">Years of<br />Excellence</div>
            </motion.div>

            {/* Floating card: tours */}
            <motion.div
              className="absolute -bottom-6 -right-6 md:-right-10 bg-primary rounded-2xl shadow-xl p-5"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
            >
              <div className="text-4xl font-black text-white font-display">200+</div>
              <div className="text-xs text-white/70 font-medium mt-0.5">Tour<br />Packages</div>
            </motion.div>

            {/* Second image (background) */}

          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="section-badge mb-5">🏆 About Amaze Travel</div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              South India's Most{' '}
              <span className="gradient-text">Trusted Travel</span>{' '}
              Companion
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded in 2009, Amaze Travel has grown from a small Kerala-based agency into
              South India's most celebrated travel company. We don't just book trips — we
              curate transformative journeys that connect you with the soul of the subcontinent.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              From the mist-draped peaks of Munnar to the ancient temples of Tamil Nadu, from
              the pristine beaches of Andaman to the royal heritage of Mysore — every itinerary
              we craft is a love letter to this extraordinary region.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 bg-white rounded-xl p-3.5 shadow-sm"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {h.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{h.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Mission */}
            <div className="bg-primary/5 border border-primary/15 rounded-2xl p-5 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Our Promise to You</p>
                  <p className="text-sm text-gray-600">
                    Every rupee you spend creates positive impact — from supporting local artisans
                    and guides to contributing to conservation programs across South India.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              <a href="#packages" className="btn-primary group">
                Explore Our Tours
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a href="#faq" className="btn-secondary">Learn More</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
