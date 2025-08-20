'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Users, Code, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const strengths = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Business Acumen",
      description: "8+ years of pharmaceutical sales experience with deep understanding of customer needs and market dynamics"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "International Experience",
      description: "Worked in Egypt and Saudi Arabia markets, demonstrating cultural adaptability and global perspective"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "End-to-End Development",
      description: "Full-stack project development from concept to deployment with modern technologies"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified Professional",
      description: "DataCamp Data Engineer + Data Engineer Associate certificates demonstrating technical expertise"
    }
  ];

  const timeline = [
    {
      year: "2015-2023",
      title: "Medical Representative",
      description: "8 years in pharmaceutical sales across Egypt and Saudi Arabia",
      details: "Managed customer relationships, analyzed market data, and provided business intelligence insights"
    },
    {
      year: "2023-Present",
      title: "Career Transition",
      description: "Self-taught programming and data engineering",
      details: "Building end-to-end data solutions while leveraging business experience"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About My Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From healthcare sales to data engineering - a unique perspective on building data-driven solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Career Transition Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              The Career Transition Story
            </h3>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                My journey began in pharmaceutical sales, where I spent 8 years working in international markets across Egypt and Saudi Arabia. This experience gave me invaluable insights into customer behavior, market dynamics, and the critical role of data in business decision-making.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Recognizing the growing importance of data in healthcare and business, I embarked on a self-directed learning journey in programming and data engineering. This transition wasn&apos;t just about learning new technical skills—it was about applying my business acumen to build data-driven solutions that solve real-world problems.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, I combine my healthcare business background with technical expertise to create end-to-end data solutions that bridge the gap between business needs and technical implementation.
              </p>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Career Timeline
            </h3>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                className="relative pl-8 border-l-2 border-blue-500"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="mb-2">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {item.year}
                  </span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 mb-2">
                  {item.description}
                </p>
                <p className="text-sm text-gray-500">
                  {item.details}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Key Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Key Strengths
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {strength.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {strength.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

