'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { experiences } from '../data';

const ExploreByExperience: React.FC = () => {
  return (
    <section id="experiences" className="py-20 md:py-28 bg-gray-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      {/* Decorative rotating ring */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-white/5 spin-slow" />
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/5 spin-slow" style={{ animationDirection: 'reverse' }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/15 rounded-full text-sm font-semibold text-white/80 tracking-wider uppercase mb-5">
            ✨ Explore by Experience
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your{' '}
            <span style={{ background: 'linear-gradient(135deg, #14b8a6, #38BDF8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Adventure Style
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Whether you seek serenity or adrenaline, temples or tides — we have the perfect
            South India experience waiting for you.
          </p>
        </motion.div>

        {/* Experiences grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background image */}
              <div
                className="w-full h-72 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${exp.image})` }}
              />

              {/* Dark overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${exp.color} opacity-70 group-hover:opacity-85 transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Top: icon & count */}
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl border border-white/20 group-hover:bg-white/25 transition-all duration-300">
                    {exp.icon}
                  </div>
                  <div className="bg-black/30 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/15">
                    {exp.count}
                  </div>
                </div>

                {/* Bottom: title & CTA */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/70 text-sm font-medium group-hover:text-white group-hover:gap-3 transition-all duration-300">
                    <span>Explore Tours</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="#packages"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300 hover:border-white"
          >
            View All Experiences
            <ArrowRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ExploreByExperience;
