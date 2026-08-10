'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Users, ChevronDown, Sparkles } from 'lucide-react';

const destinations = ['Kerala', 'Tamil Nadu', 'Karnataka', 'Andaman Islands', 'Puducherry', 'Telangana'];
const durations = ['1-3 Days', '4-6 Days', '7-10 Days', '10+ Days'];
const groupSizes = ['Solo', 'Couple', 'Family (3-5)', 'Group (6+)'];

const SearchTour: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [groupSize, setGroupSize] = useState('');
  const [date, setDate] = useState('');
  const [activeTab, setActiveTab] = useState<'tours' | 'hotels' | 'activities'>('tours');

  return (
    <section className="relative z-20 py-24 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="bg-white rounded-3xl shadow-2xl shadow-black/12 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Tabs */}
          <div className="flex border-b border-gray-100 px-6 pt-2">
            {(['tours', 'hotels', 'activities'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-4 text-sm font-semibold capitalize transition-colors duration-300 ${activeTab === tab ? 'text-primary' : 'text-gray-500 hover:text-gray-800'
                  }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    layoutId="tab-indicator"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Search fields */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {/* Destination */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                  Destination
                </label>
                <div className="relative">
                  <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-primary" />
                  <select
                    value={destination}
                    onChange={e => setDestination(e.target.value)}
                    className="w-full pl-10 pr-9 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-800 text-sm font-medium appearance-none cursor-pointer hover:border-primary/50 transition-colors duration-200"
                  >
                    <option value="">Where to go?</option>
                    {destinations.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                  Travel Date
                </label>
                <div className="relative">
                  <Calendar size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-primary" />
                  <input
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-800 text-sm font-medium hover:border-primary/50 transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Duration */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                  Duration
                </label>
                <div className="relative">
                  <Calendar size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-primary" />
                  <select
                    value={duration}
                    onChange={e => setDuration(e.target.value)}
                    className="w-full pl-10 pr-9 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-800 text-sm font-medium appearance-none cursor-pointer hover:border-primary/50 transition-colors duration-200"
                  >
                    <option value="">Select days</option>
                    {durations.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Group Size */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                  Travelers
                </label>
                <div className="relative">
                  <Users size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-primary" />
                  <select
                    value={groupSize}
                    onChange={e => setGroupSize(e.target.value)}
                    className="w-full pl-10 pr-9 py-3.5 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-800 text-sm font-medium appearance-none cursor-pointer hover:border-primary/50 transition-colors duration-200"
                  >
                    <option value="">Group size</option>
                    {groupSizes.map(g => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Search button & quick filters */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              {/* Quick filters */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-gray-500 font-medium">Popular:</span>
                {['Backwaters', 'Hill Stations', 'Temples', 'Beaches', 'Wildlife'].map(tag => (
                  <button
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/8 text-primary hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Search button */}
              <motion.button
                className="btn-primary gap-2 whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Search size={17} />
                Search Tours
                <Sparkles size={15} className="text-white/70" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SearchTour;
