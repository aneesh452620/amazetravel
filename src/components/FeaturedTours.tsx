'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, ArrowRight, Zap } from 'lucide-react';
import { featuredTours } from '../data';

const FeaturedTours: React.FC = () => {
  return (
    <section id="featured" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-primary/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <div className="section-badge mb-4">
              <Zap size={13} className="text-accent" />
              Featured Tours
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900">
              Editor's{' '}
              <span className="gradient-text-accent">Top Picks</span>{' '}
              This Season
            </h2>
          </div>
          <a href="#packages" className="btn-secondary text-sm py-3 flex-shrink-0">
            All Tours <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Featured layout: large card left + grid right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Main featured card */}
          <motion.div
            className="lg:col-span-3 group rounded-3xl overflow-hidden relative shadow-xl cursor-pointer"
            style={{ minHeight: '480px' }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.01 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${featuredTours[0].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  ⭐ Editor's Pick
                </span>
                <span className="bg-white/15 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
                  {featuredTours[0].duration}
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                {featuredTours[0].title}
              </h3>
              <div className="flex items-center gap-4 mb-5">
                <div className="flex items-center gap-1.5 text-white/70 text-sm">
                  <MapPin size={13} />{featuredTours[0].location}
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill={i < Math.floor(featuredTours[0].rating) ? '#F59E0B' : 'none'} className={i < Math.floor(featuredTours[0].rating) ? 'text-amber-400' : 'text-white/30'} />
                  ))}
                  <span className="text-white/80 text-sm ml-1">{featuredTours[0].rating}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-xs mb-0.5">Starting from</p>
                  <p className="text-2xl font-black text-white">₹{featuredTours[0].price.toLocaleString()}</p>
                </div>
                <motion.a
                  href="#"
                  className="btn-accent group/btn text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  Book Now
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right column: 3 small cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {featuredTours.slice(1).map((tour, i) => (
              <motion.div
                key={tour.id}
                className="group flex gap-4 bg-white rounded-2xl shadow-md hover:shadow-xl hover:shadow-primary/10 transition-all duration-400 overflow-hidden cursor-pointer border border-gray-100"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ x: 4 }}
              >
                {/* Thumbnail */}
                <div className="img-zoom w-28 flex-shrink-0 rounded-l-2xl overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    style={{ minHeight: '120px' }}
                  />
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col justify-center min-w-0">
                  <h4 className="font-bold text-gray-900 text-sm mb-1.5 group-hover:text-primary transition-colors duration-300 leading-snug">
                    {tour.title}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                    <MapPin size={11} className="text-primary" />{tour.location}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={10} fill={j < Math.floor(tour.rating) ? '#F59E0B' : 'none'} className={j < Math.floor(tour.rating) ? 'text-amber-400' : 'text-gray-300'} />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-gray-700">{tour.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={11} className="text-gray-400" />
                    <span className="text-xs text-gray-500">{tour.duration}</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-black text-primary">₹{tour.price.toLocaleString()}</span>
                    <a href="#" className="text-xs text-primary font-semibold hover:text-accent transition-colors duration-200 flex items-center gap-0.5">
                      View <ArrowRight size={11} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
