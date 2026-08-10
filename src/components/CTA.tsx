'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&q=80)',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
      <div className="absolute inset-0 bg-primary/30" />

      {/* Floating elements */}
      <motion.div
        className="absolute top-10 right-10 w-20 h-20 rounded-full border border-white/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-32 h-32 rounded-full border border-white/5"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative max-w-5xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            🌟 Special Offer — Up to 30% Off
          </div>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Your Dream South India
            <br />
            <span style={{ background: 'linear-gradient(135deg, #38BDF8, #14b8a6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Journey Starts Today
            </span>
          </h2>

          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Don't let another season pass without experiencing the magic of South India.
            Book now and get exclusive early-bird discounts on our premium packages.
          </p>

          {/* CTAs */}
          <div className="flex items-center justify-center gap-4 flex-wrap mb-10">
            <motion.a
              href="#packages"
              className="btn-accent text-base py-4 px-8 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Packages
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
            <motion.a
              href="tel:+919876543210"
              className="flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/25 text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-primary transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Phone size={17} />
              Call Now: +91 98765 43210
            </motion.a>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {[
              { icon: '🔒', text: 'Secure Booking' },
              { icon: '↩️', text: 'Free Cancellation' },
              { icon: '💳', text: 'EMI Available' },
              { icon: '⭐', text: '4.9/5 Rated' },
            ].map(item => (
              <div key={item.text} className="flex items-center gap-2 text-white/70 text-sm">
                <span>{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* WhatsApp floating button */}
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:bg-green-600 hover:scale-110 transition-all duration-300"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200, damping: 15 }}
        whileHover={{ scale: 1.15 }}
        title="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="text-white" fill="white" />
      </motion.a>
    </section>
  );
};

export default CTA;
