'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '../data';

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => setOpenId(prev => (prev === id ? null : id));

  return (
    <section id="faq" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-badge mx-auto mb-4">
            <HelpCircle size={13} />
            FAQ
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Everything you need to know before booking your South India adventure.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openId === faq.id
                  ? 'border-primary/30 shadow-lg shadow-primary/10 bg-primary/2'
                  : 'border-gray-200 bg-white hover:border-primary/20'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    openId === faq.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-500 group-hover:bg-primary/15 group-hover:text-primary'
                  }`}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <span className={`font-semibold text-base transition-colors duration-300 ${
                    openId === faq.id ? 'text-primary' : 'text-gray-800'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    openId === faq.id ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-6 pb-6 ml-12">
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="mt-12 text-center bg-gray-50 rounded-2xl p-8 border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-700 font-medium mb-4">
            Still have questions? Our travel experts are here to help 24/7.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="tel:+919876543210" className="btn-primary text-sm py-3 px-6">
              📞 Call Us Now
            </a>
            <a href="mailto:hello@amazetravel.in" className="btn-secondary text-sm py-3 px-6">
              ✉️ Send Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
