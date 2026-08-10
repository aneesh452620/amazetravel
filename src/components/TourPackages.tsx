'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, Users, ArrowRight, Heart, Check } from 'lucide-react';
import { tourPackages } from '../data';

const CATEGORIES = ['All', 'Backwaters', 'Heritage', 'Adventure', 'Beach', 'Culture'];

const TourPackages: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [wishlist, setWishlist] = useState<number[]>([]);

  const filtered =
    activeCategory === 'All'
      ? tourPackages
      : tourPackages.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  const toggleWishlist = (id: number) => {
    setWishlist(prev => (prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]));
  };

  return (
    <section id="packages" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-badge mx-auto mb-4">🎒 Tour Packages</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Handcrafted Tours for{' '}
            <span className="gradient-text">Every Traveler</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From luxury houseboat escapes to wilderness treks — discover our most-loved South India journeys.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-10 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-primary/8 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Tour cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((tour, i) => (
            <motion.div
              key={tour.id}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden group border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              layout
            >
              {/* Image */}
              <div className="img-zoom relative h-52">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`${tour.badgeColor} text-xs font-bold px-3 py-1.5 rounded-full shadow-sm`}>
                    {tour.badge}
                  </span>
                </div>

                {/* Wishlist button */}
                <button
                  onClick={() => toggleWishlist(tour.id)}
                  className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow hover:bg-white transition-all duration-200"
                >
                  <Heart
                    size={16}
                    className={wishlist.includes(tour.id) ? 'fill-red-500 text-red-500' : 'text-gray-500'}
                  />
                </button>

                {/* Discount */}
                {tour.originalPrice > tour.price && (
                  <div className="absolute bottom-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    {Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100)}% OFF
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Location & Rating */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                    <MapPin size={12} className="text-primary" />
                    <span>{tour.destinations.join(' → ')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={12} fill="#F59E0B" className="text-amber-400" />
                    <span className="text-xs font-bold text-gray-800">{tour.rating}</span>
                    <span className="text-xs text-gray-400">({tour.reviews})</span>
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {tour.title}
                </h3>

                {/* Meta info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                    <Clock size={12} className="text-primary/70" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                    <Users size={12} className="text-primary/70" />
                    <span>{tour.groupSize} people</span>
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      tour.difficulty === 'Easy'
                        ? 'bg-green-100 text-green-700'
                        : tour.difficulty === 'Moderate'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {tour.difficulty}
                  </span>
                </div>

                {/* Includes */}
                <div className="flex items-center gap-2 flex-wrap mb-5">
                  {tour.includes.map(inc => (
                    <div key={inc} className="flex items-center gap-1 text-xs text-gray-600">
                      <Check size={11} className="text-primary" />
                      {inc}
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Starting from</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-primary">
                        ₹{tour.price.toLocaleString()}
                      </span>
                      {tour.originalPrice > tour.price && (
                        <span className="text-sm text-gray-400 line-through">
                          ₹{tour.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400">per person</p>
                  </div>
                  <motion.a
                    href="#"
                    className="btn-primary text-sm py-2.5 px-5 group/btn"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Book Now
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load more */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a href="#" className="btn-secondary">
            View All {filtered.length === tourPackages.length ? tourPackages.length : `${filtered.length}`} Tours
            <ArrowRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TourPackages;
