'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data';

const Blogs: React.FC = () => {
  return (
    <section id="blog" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />

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
            <div className="section-badge mb-4">📝 Travel Blog</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900">
              Stories, Tips &{' '}
              <span className="gradient-text">Travel Guides</span>
            </h2>
          </div>
          <a href="#" className="btn-secondary text-sm py-3 flex-shrink-0">
            All Articles <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Blog grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 border border-gray-100"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              {/* Image */}
              <div className="img-zoom relative h-52">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Category */}
                <div className="absolute top-3 left-3">
                  <span className={`tag ${post.categoryColor} p-1 rounded-lg`}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} className="text-primary" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} className="text-primary" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300 leading-snug">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Author & Read more */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.authorAvatar}
                      alt={post.author}
                      className="w-8 h-8 rounded-full object-cover border-2 border-primary/20"
                      loading="lazy"
                    />
                    <span className="text-xs font-semibold text-gray-700">{post.author}</span>
                  </div>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-primary text-xs font-semibold hover:text-accent transition-colors duration-200 group/link"
                  >
                    Read More
                    <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter teaser */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-primary/5 to-secondary/10 rounded-3xl p-10 border border-primary/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <p className="text-sm text-primary font-semibold tracking-widest uppercase mb-2">
            Never Miss a Story
          </p>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Subscribe to our Travel Journal
          </h3>
          <a href="#newsletter" className="btn-primary mx-auto">
            Subscribe Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
