'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ExternalLink, Code, Database, Smartphone, Brain, TrendingUp } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      name: "DipSignal - Market Sentiment Analysis",
      description: "AI-powered market sentiment analysis tool that combines real-time data processing with business intelligence for trading insights.",
      longDescription: "A comprehensive market analysis platform that combines real-time market data, sentiment analysis using LLaMA 3.1, and business intelligence dashboards. Features include real-time data processing from Binance API, sentiment analysis of market news, macro-economic correlation analysis, and Power BI dashboards for actionable business insights.",
      technologies: ["Python", "LLaMA 3.1", "Binance API", "GitHub Actions", "Power BI"],
      github: "https://github.com/amrelsawalhi/DipSignal",
      demo: null,
      image: "/resume/screenshots/dipsignal.jpg",
      category: "Business Intelligence",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      id: 2,
      name: "LoL Analytics - Performance Insights Platform",
      description: "Comprehensive League of Legends analytics platform providing performance insights and trend analysis for strategic decision-making.",
      longDescription: "A complete sports analytics platform for League of Legends that automates data collection from Riot API, implements dimensional modeling for performance analysis, and provides real-time dashboards. The system tracks champion performance, player statistics, and meta trends to deliver actionable insights for strategic planning and performance optimization.",
      technologies: ["Python", "Riot API", "PostgreSQL", "GitHub Actions", "Streamlit", "Power BI"],
      github: "https://github.com/amrelsawalhi/leagueoflegends",
      demo: null,
      image: "/resume/screenshots/lol-analytics.jpg",
      category: "Sports Analytics",
      icon: <Database className="w-6 h-6" />
    },
    {
      id: 3,
      name: "Dijamour - Wedding Venue Discovery",
      description: "Modern bilingual wedding venue discovery app with real-time data sync, geospatial search, and integrated inquiry system.",
      longDescription: "A comprehensive wedding services platform built with React Native and Supabase. Features include bilingual Arabic/English support with RTL, real-time data synchronization, geospatial venue search, integrated inquiry system, and a modern mobile-first design. The app serves 500+ venues with location-based discovery and contact management.",
      technologies: ["React Native", "TypeScript", "Supabase", "Expo"],
      github: "https://github.com/amrelsawalhi/Dijamour-public",
      demo: null,
      image: "/resume/screenshots/dijamour.jpg",
      category: "Mobile App",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      id: 4,
      name: "FeelyText - Customer Sentiment Analysis",
      description: "Interactive sentiment analysis tool for understanding customer feedback and market sentiment to drive business decisions.",
      longDescription: "A machine learning application that provides interactive sentiment analysis for text input, perfect for customer feedback analysis and market research. Features include NLP processing, sentiment classification, user feedback collection for model improvement, and a clean Streamlit interface. The system delivers actionable insights from customer sentiment data.",
      technologies: ["Python", "Streamlit", "NLP", "Machine Learning"],
      github: "https://github.com/amrelsawalhi/sentiment-analysis",
      demo: null,
      image: "/resume/screenshots/feelytext.jpg",
      category: "Customer Analytics",
      icon: <Brain className="w-6 h-6" />
    },
    {
      id: 5,
      name: "Jumia Price Tracker",
      description: "ETL pipeline for automated price tracking and competitive intelligence with web scraping and data analysis.",
      longDescription: "An ETL project that automates price tracking from Jumia e-commerce platform. Features include web scraping with BeautifulSoup, automated data collection, competitive intelligence analysis, and price trend visualization. The system provides market research capabilities and competitor analysis tools.",
      technologies: ["Python", "BeautifulSoup", "Streamlit", "Web Scraping"],
      github: "https://github.com/amrelsawalhi/jumia-price-etl-streamlit",
      demo: null,
      image: null,
      category: "ETL",
      icon: <Code className="w-6 h-6" />
    }
  ];



  return (
    <section id="projects" className="section-padding bg-slate-50">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my technical capabilities through end-to-end project development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                      {project.icon}
                    </div>
                  </div>
                )}
                
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                      {project.icon}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.name}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {hoveredProject === project.id ? project.longDescription : project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </motion.a>
                  
                  {project.demo && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Interested in seeing more of my work?
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/amrelsawalhi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
