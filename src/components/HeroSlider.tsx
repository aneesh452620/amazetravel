'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';
import { MapPin, Star, ArrowRight, Play, ChevronDown } from 'lucide-react';
import { heroSlides } from '../data';

const HeroSlider: React.FC = () => {
  const progressRef = useRef<HTMLDivElement>(null);

  return (
    <section id="home" className="relative h-screen min-h-[680px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5500, disableOnInteraction: true }}
        pagination={{ clickable: true }}
        loop
        className="hero-swiper w-full h-full"
        onAutoplayTimeLeft={(_s, _t, percentage) => {
          if (progressRef.current) {
            progressRef.current.style.width = `${(1 - percentage) * 100}%`;
          }
        }}
      >
        {heroSlides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center scale-in"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 md:px-8 w-full pt-20 md:pt-28">
                  <div className="max-w-2xl">
                    {/* Badge */}
                    <motion.div
                      className="inline-flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      <Star size={13} fill="white" />
                      {slide.badge}
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                      className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {slide.title}{' '}
                      <span className="text-secondary block">{slide.highlight}</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                      className="text-white/80 text-base md:text-lg mb-8 max-w-xl leading-relaxed"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55, duration: 0.7 }}
                    >
                      {slide.subtitle}
                    </motion.p>

                    {/* Location & Rating */}
                    <motion.div
                      className="flex items-center gap-6 mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.65, duration: 0.6 }}
                    >
                      <div className="flex items-center gap-2 text-white/90">
                        <MapPin size={16} className="text-accent" />
                        <span className="text-sm font-medium">{slide.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={13}
                              className={i < Math.floor(slide.rating) ? 'star-filled' : 'text-white/40'}
                              fill={i < Math.floor(slide.rating) ? '#F59E0B' : 'none'}
                            />
                          ))}
                        </div>
                        <span className="text-white/90 text-sm font-semibold">{slide.rating}</span>
                        <span className="text-white/60 text-sm">({slide.reviews.toLocaleString()} reviews)</span>
                      </div>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                      className="flex items-center gap-4 flex-wrap"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.75, duration: 0.6 }}
                    >
                      <a href="#packages" className="btn-accent group">
                        Explore Tour
                        <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                      <button className="flex items-center gap-3 text-white group">
                        <div className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center glass hover:bg-white/20 transition-all duration-300 pulse-glow">
                          <Play size={16} fill="white" className="ml-0.5" />
                        </div>
                        <span className="font-medium text-sm">Watch Video</span>
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating stats card */}
              <motion.div
                className="absolute bottom-24 right-8 hidden md:block glass rounded-2xl p-5 text-white"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">50K+</div>
                    <div className="text-xs text-white/70 mt-0.5">Happy Travelers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">200+</div>
                    <div className="text-xs text-white/70 mt-0.5">Tour Packages</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">15+</div>
                    <div className="text-xs text-white/70 mt-0.5">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">98%</div>
                    <div className="text-xs text-white/70 mt-0.5">Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 z-30">
        <div ref={progressRef} className="h-full bg-accent transition-none" style={{ width: '0%' }} />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-white/70"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
};

export default HeroSlider;
