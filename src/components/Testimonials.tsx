'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={14}
        fill={i < rating ? '#F59E0B' : 'none'}
        className={i < rating ? 'text-amber-400' : 'text-gray-300'}
      />
    ))}
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a5c56 0%, #0F766E 40%, #0d6b64 100%)' }}
    >
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 border border-white/20 rounded-full text-sm font-semibold text-white/80 tracking-wider uppercase mb-5">
            💬 Testimonials
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Real stories from real adventurers who explored South India with us.
          </p>
        </motion.div>

        {/* Overall stats */}
        <motion.div
          className="grid grid-cols-3 gap-4 mb-12 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {[
            { label: 'Reviews', value: '8,500+' },
            { label: 'Avg Rating', value: '4.9/5' },
            { label: 'Recommend', value: '98%' },
          ].map(stat => (
            <div key={stat.label} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl py-4 border border-white/15">
              <p className="font-black text-xl text-white">{stat.value}</p>
              <p className="text-xs text-white/60 font-medium mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={24}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            className="testi-swiper pb-12"
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={t.id}>
                <motion.div
                  className="bg-white rounded-3xl p-7 h-full flex flex-col shadow-xl relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  {/* Quote icon */}
                  <div className="absolute -top-3 -right-3 w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center">
                    <Quote size={22} className="text-primary/20" fill="rgba(15,118,110,0.1)" />
                  </div>

                  {/* Star rating */}
                  <div className="mb-4">
                    <StarRating rating={t.rating} />
                  </div>

                  {/* Review */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    "{t.review}"
                  </p>

                  {/* Tour pill */}
                  <div className="bg-primary/8 text-primary text-xs font-semibold px-3 py-1.5 rounded-full inline-flex w-fit mb-4">
                    📍 {t.tour}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-primary/20"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.location}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Logos section */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-white/50 text-xs uppercase tracking-widest mb-5">
            Featured & Trusted By
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {['TripAdvisor', 'MakeMyTrip', 'Thomas Cook', 'SOTC', 'Yatra'].map(brand => (
              <span
                key={brand}
                className="text-white/30 font-bold text-sm hover:text-white/60 transition-colors duration-300 cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
