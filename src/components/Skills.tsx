'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Cloud, Wrench, Users, Globe, TrendingUp, Award } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technicalSkills = [
    { name: "Python", icon: <Code className="w-5 h-5" /> },
    { name: "SQL", icon: <Database className="w-5 h-5" /> },
    { name: "Data Analysis", icon: <Database className="w-5 h-5" /> },
    { name: "Data Visualization", icon: <Code className="w-5 h-5" /> },
    { name: "Git & GitHub", icon: <Wrench className="w-5 h-5" /> },
    { name: "PostgreSQL", icon: <Database className="w-5 h-5" /> },
    { name: "Power BI", icon: <TrendingUp className="w-5 h-5" /> },
    { name: "Streamlit", icon: <Code className="w-5 h-5" /> },
    { name: "Statistical Analysis", icon: <TrendingUp className="w-5 h-5" /> },
    { name: "Business Intelligence", icon: <TrendingUp className="w-5 h-5" /> },
  ];

  const businessSkills = [
    { name: "Sales & Relationship Building", icon: <Users className="w-5 h-5" /> },
    { name: "International Experience", icon: <Globe className="w-5 h-5" /> },
    { name: "Customer Focus", icon: <Users className="w-5 h-5" /> },
    { name: "Business Intelligence", icon: <TrendingUp className="w-5 h-5" /> },
    { name: "Market Analysis", icon: <TrendingUp className="w-5 h-5" /> },
    { name: "Competitive Intelligence", icon: <TrendingUp className="w-5 h-5" /> },
  ];

  const certifications = [
    {
      name: "DataCamp Data Engineer",
      description: "Comprehensive data engineering certification",
      icon: <Award className="w-6 h-6" />
    },
    {
      name: "Data Engineer Associate",
      description: "Professional data engineering certification",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining technical expertise with business acumen for comprehensive data solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Technical Skills</h3>
            </div>
            
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-blue-600">{skill.icon}</span>
                  <span className="font-medium text-gray-800">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Business Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Business Skills</h3>
            </div>
            
            <div className="space-y-4">
              {businessSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-green-600">{skill.icon}</span>
                  <span className="font-medium text-gray-800">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4 + index * 0.2, duration: 0.6 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Differentiator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              What Sets Me Apart
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              My unique combination of 8+ years in healthcare business with analytical skills allows me to bridge the gap between data and business strategy. I understand both the customer perspective and the analytical requirements to deliver actionable business insights.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
