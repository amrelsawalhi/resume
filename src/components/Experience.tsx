'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar, TrendingUp, Award } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experience = [
    {
      title: "Medical Representative",
      company: "Pharmaceutical Industry",
      duration: "2015 - 2023",
      location: "Egypt & Saudi Arabia",
      description: "8+ years of international pharmaceutical sales experience with deep understanding of healthcare markets and customer relationships.",
      achievements: [
        "Managed customer relationships across diverse healthcare markets",
        "Analyzed sales data and market trends for business intelligence",
        "Provided competitive intelligence and market analysis",
        "Worked with CRM systems and sales data analytics",
        "Developed understanding of customer needs and market dynamics"
      ],
      skills: ["Sales Management", "Customer Relations", "Market Analysis", "Data Analytics", "International Business"]
    }
  ];

  const careerTransition = {
    title: "Career Transition to Data Engineering",
    duration: "2023 - Present",
    description: "Self-directed learning journey in programming and data engineering, building end-to-end solutions while leveraging business experience.",
    achievements: [
      "Self-taught programming in Python and SQL",
      "Built comprehensive data engineering projects from concept to deployment",
      "Earned DataCamp Data Engineer and Data Engineer Associate certifications",
      "Developed understanding of ETL, data modeling, and API integration",
      "Created data-driven applications with modern technologies"
    ],
    skills: ["Python", "SQL", "ETL", "API Integration", "Data Modeling"]
  };

  const targetRoles = [
    {
      title: "Junior Data Engineer",
      description: "Building and maintaining data pipelines, ETL processes, and data infrastructure",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Business Intelligence Developer",
      description: "Creating data visualizations, dashboards, and business intelligence solutions",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Data Analyst",
      description: "Analyzing data to provide insights for healthcare/pharma companies",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Analytics Engineer",
      description: "Building data models and analytics infrastructure for business teams",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <section id="experience" className="section-padding bg-slate-50">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience & Goals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From healthcare sales to data engineering - leveraging business experience for technical solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-gray-800">
              Professional Experience
            </h3>
            
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 mb-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-gray-600 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    <Briefcase className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-4">
                  <h5 className="font-semibold text-gray-800 mb-2">Key Achievements:</h5>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Skills Developed:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Career Transition */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-gray-800">
              Career Transition
            </h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200 mb-8"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-1">
                    {careerTransition.title}
                  </h4>
                  <p className="text-gray-600 font-medium">
                    Self-Directed Learning
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white">
                  <Award className="w-6 h-6" />
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {careerTransition.duration}
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {careerTransition.description}
              </p>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-800 mb-2">Key Achievements:</h5>
                <ul className="space-y-1">
                  {careerTransition.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-gray-800 mb-2">Technical Skills:</h5>
                <div className="flex flex-wrap gap-2">
                  {careerTransition.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Target Roles */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Target Roles
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {role.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {role.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {role.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
