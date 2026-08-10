'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { MapPin, ArrowRight, Star } from 'lucide-react';
import { destinations } from '../data';

const FILTER_TABS = ['All', 'Hill Station', 'Heritage', 'Backwaters', 'Beach', 'Nature', 'Royal'];

const PopularDestinations: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? destinations
      : destinations.filter(d => d.tag.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="destinations" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <div className="section-badge mb-4">🌍 Destinations</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900">
              Popular <span className="gradient-text">South India</span>
              <br />Destinations
            </h2>
          </div>
          <a href="#" className="btn-secondary text-sm py-3 flex-shrink-0">
            View All <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {FILTER_TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 flex-shrink-0 ${activeFilter === tab
                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                : 'bg-white text-gray-700 hover:bg-primary/8 hover:text-primary border border-gray-200'
                }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.slice(0, 8).map((dest, i) => (
            <motion.div
              key={dest.id}
              className="card-hover img-zoom rounded-2xl overflow-hidden relative group cursor-pointer shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-72 object-cover"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 overlay-gradient" />

              {/* Tag */}
              <div className="absolute top-3 left-3 ">
                <span className={`tag ${dest.tagColor} backdrop-blur-2xl py-1 px-1 rounded-lg`}>
                  {dest.tag}
                </span>
              </div>

              {/* Tours count */}
              <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1.5 rounded-full">
                {dest.tours} tours
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-xl font-bold text-white mb-0.5">{dest.name}</h3>
                <div className="flex items-center gap-1.5 text-white/75 text-sm mb-3">
                  <MapPin size={12} />
                  <span>{dest.state}</span>
                </div>
                <p className="text-white/60 text-xs mb-3 line-clamp-1">{dest.description}</p>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400">
                  <a
                    href="#packages"
                    className="bg-white text-primary text-xs font-bold px-4 py-2 rounded-full hover:bg-accent hover:text-white transition-colors duration-200"
                  >
                    Explore Tours
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1.3}
            spaceBetween={16}
            centeredSlides
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="dest-swiper pb-10"
          >
            {filtered.map(dest => (
              <SwiperSlide key={dest.id}>
                <div className="img-zoom rounded-2xl overflow-hidden relative shadow-md">
                  <img src={dest.image} alt={dest.name} className="w-full h-64 object-cover" loading="lazy" />
                  <div className="absolute inset-0 overlay-gradient" />
                  <div className="absolute top-3 left-3">
                    <span className={`tag ${dest.tagColor}`}>{dest.tag}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display text-lg font-bold text-white">{dest.name}</h3>
                    <div className="flex items-center gap-1 text-white/70 text-xs">
                      <MapPin size={11} /><span>{dest.state}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom marquee strip */}
        <div className="mt-14 overflow-hidden">
          <div className="marquee-track flex items-center gap-8 whitespace-nowrap">
            {[...destinations, ...destinations].map((d, i) => (
              <div
                key={`${d.id}-${i}`}
                className="flex items-center gap-2 text-gray-400 text-sm flex-shrink-0"
              >
                <Star size={12} fill="#F59E0B" className="text-amber-400" />
                <span className="font-medium">{d.name}, {d.state}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
