import React from 'react';
import { Palette, Globe, Smartphone, BarChart, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user interfaces that delight your customers.',
    icon: <Palette className="h-8 w-8 text-secondary" />,
    color: 'from-pink-500/20 to-purple-500/20'
  },
  {
    title: 'Web Development',
    description: 'Building robust, scalable, and high-performance websites using modern technologies.',
    icon: <Globe className="h-8 w-8 text-primary" />,
    color: 'from-indigo-500/20 to-blue-500/20'
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
    icon: <Smartphone className="h-8 w-8 text-purple-500" />,
    color: 'from-purple-500/20 to-fuchsia-500/20'
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns to grow your audience and increase conversions.',
    icon: <BarChart className="h-8 w-8 text-blue-500" />,
    color: 'from-blue-500/20 to-cyan-500/20'
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-wide uppercase text-sm mb-3"
          >
            Our Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Solutions that <span className="text-gradient">Scale</span>
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-xl text-gray-400 mx-auto"
          >
            Comprehensive digital strategies tailored to elevate your business in the modern landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="bg-dark w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-between">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" />
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
