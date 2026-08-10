'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, Sparkles } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="newsletter" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/8 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-secondary/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 md:px-8 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Icon */}
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary/30 float">
            <Mail className="text-white" size={28} />
          </div>

          <div className="section-badge mx-auto mb-5">
            <Sparkles size={13} className="text-primary" />
            Newsletter
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Exclusive Travel{' '}
            <span className="gradient-text">Deals & Inspiration</span>
          </h2>

          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Join 12,000+ travelers who receive our weekly travel tips, hidden gems,
            and exclusive discounts for South India tours.
          </p>

          {/* Benefits */}
          <div className="flex items-center justify-center gap-6 flex-wrap mb-8">
            {[
              '✈️ Early bird deals',
              '📍 Destination guides',
              '🎁 Monthly giveaways',
              '🔔 Flash sales alerts',
            ].map(item => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                <CheckCircle2 size={14} className="text-primary" />
                {item}
              </div>
            ))}
          </div>

          {/* Form */}
          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="flex-1 relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-11 pr-4 py-4 rounded-full border-2 border-gray-200 bg-white text-gray-800 text-sm font-medium placeholder-gray-400 transition-all duration-200"
                />
              </div>
              <motion.button
                type="submit"
                disabled={loading}
                className="btn-primary flex-shrink-0 justify-center"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    Subscribing...
                  </span>
                ) : (
                  <>
                    Subscribe <Send size={15} />
                  </>
                )}
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              className="flex flex-col items-center gap-3 py-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 15, stiffness: 200 }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 size={32} className="text-green-600" />
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900">You're Subscribed! 🎉</h3>
              <p className="text-gray-600 text-sm">
                Welcome to the Amaze Travel community. Exciting adventures await in your inbox!
              </p>
            </motion.div>
          )}

          <p className="text-xs text-gray-400 mt-4">
            No spam, ever. Unsubscribe anytime. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
