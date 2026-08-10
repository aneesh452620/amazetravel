'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Download, Share2 } from 'lucide-react';
import { galleryImages } from '../data';

const Gallery: React.FC = () => {
  const [selected, setSelected] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-badge mx-auto mb-4">📸 Gallery</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            South India Through{' '}
            <span className="gradient-text">Our Lens</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            A visual journey through the landscapes, cultures, and colors of incredible South India.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <motion.div
          className="gallery-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              className={`${img.span} img-zoom rounded-2xl overflow-hidden relative group cursor-pointer`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => setSelected(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-400 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-4 group-hover:translate-y-0 flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <ZoomIn size={20} className="text-gray-800" />
                  </div>
                  <span className="text-white text-xs font-medium">{img.category}</span>
                </div>
              </div>

              {/* Category tag */}
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View more */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a href="#" className="btn-primary">
            View Full Gallery
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 200 }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selected.src}
                alt={selected.alt}
                className="w-full rounded-2xl max-h-[80vh] object-contain"
              />

              {/* Caption */}
              <div className="mt-4 flex items-center justify-between px-2">
                <div>
                  <h4 className="text-white font-semibold">{selected.alt}</h4>
                  <p className="text-white/50 text-sm">{selected.category}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200">
                    <Download size={16} />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>

              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white text-gray-800 flex items-center justify-center shadow-xl hover:bg-accent hover:text-white transition-all duration-300"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
