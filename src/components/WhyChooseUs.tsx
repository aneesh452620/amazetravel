'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseUs } from '../data';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-badge mx-auto mb-4">
            ✨ Why Travelers Love Us
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-5">
            Travel With{' '}
            <span className="gradient-text">Complete Confidence</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're more than a travel company — we're your trusted partner for crafting
            unforgettable South Indian experiences.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative bg-gray-50 hover:bg-primary rounded-2xl p-7 transition-all duration-500 cursor-default overflow-hidden border border-gray-100 hover:border-primary hover:shadow-xl hover:shadow-primary/20">
                {/* Decorative circle */}
                <div className="absolute -top-8 -right-8 w-28 h-28 bg-primary/5 rounded-full group-hover:bg-white/10 transition-colors duration-500" />

                {/* Icon */}
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-white/15 flex items-center justify-center text-2xl mb-5 shadow-sm group-hover:shadow-none transition-all duration-500">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-3 transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-white/80 leading-relaxed transition-colors duration-500">
                    {item.description}
                  </p>
                </div>

                {/* Number */}
                <div className="absolute bottom-4 right-5 text-6xl font-black text-gray-100 group-hover:text-white/10 select-none transition-colors duration-500">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          className="mt-14 bg-primary from-primary to-primary-dark rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to Explore South India?
            </h3>
            <p className="text-white/75">Join 50,000+ happy travelers who chose Amaze Travel.</p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <a href="#packages" className="bg-white text-primary font-bold px-7 py-3.5 rounded-full hover:bg-accent hover:text-white transition-all duration-300 text-sm">
              View All Tours
            </a>
            <a href="tel:+919876543210" className="text-white/90 font-medium text-sm hover:text-white transition-colors duration-200">
              📞 Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
