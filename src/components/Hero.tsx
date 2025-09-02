'use client';

import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container-max section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
                     {/* Name Display */}
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2, duration: 0.8 }}
             className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-800"
           >
             Amr El Sawalhi
           </motion.h2>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Healthcare Professional</span>
            <br />
            <span className="text-gray-800">→ BI Analytics</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Leveraging 8+ years of international business experience to build business intelligence solutions and uncover actionable insights
          </motion.p>

          {/* Key Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg border border-gray-200"
          >
            <p className="text-lg text-gray-700 italic">
              &ldquo;Healthcare business professional with 8+ years of international sales experience transitioning to business intelligence analytics. My background in pharmaceutical sales provides unique insights into customer behavior, market dynamics, and business intelligence needs.&rdquo;
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Projects
              <ArrowRight size={20} />
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Amr-Elsawalhi-Resume.pdf"
              download="Amr-Elsawalhi-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex justify-center items-center gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://github.com/amrelsawalhi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <Github size={24} className="text-gray-700" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://www.linkedin.com/in/amrelsawalhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <Linkedin size={24} className="text-gray-700" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="mailto:amr.elsawalhi.business@gmail.com"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <Mail size={24} className="text-gray-700" />
            </motion.a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-8 text-gray-500"
          >
            📍 Cairo, Egypt
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

